import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Button from "../buttons/button";
import Input from "../Input/input";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const [confirmPasswordText, setConfirmPasswordText] = useState<string>("");
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // actualiza el flag booleano según coincidan las contraseñas
    setConfirmPassword(password === confirmPasswordText);
  }, [password, confirmPasswordText]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    // validación usando el flag booleano
    if (!confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        console.error("Error register:", error);
        alert(error.message);
        return;
      }
      console.log("registration data", data);
      // Si no hay sesión tras el registro (p.ej., confirmación por email activada),
      // intentamos crear sesión con las mismas credenciales.
      if (!data.session) {
        const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
        if (loginError) {
          console.warn("No se pudo iniciar sesión automáticamente:", loginError.message);
          // Continuamos igualmente hacia la creación del PIN para no bloquear el flujo.
        }
      }

      // Aseguramos existencia de la fila en public.user vinculada por id_uuid y/o email
      const { data: authUserData } = await supabase.auth.getUser();
      const authUser = authUserData?.user;
      const idUuid = authUser?.id ?? data.user?.id ?? null;

      const { data: dbUser, error: userReadError } = await supabase
        .from("user")
        .select("id, id_uuid")
        .or(idUuid ? `id_uuid.eq.${idUuid},email.eq.${email}` : `email.eq.${email}`)
        .limit(1)
        .maybeSingle();

      if (userReadError) {
        console.warn("Error leyendo public.user:", userReadError.message);
      }

      if (!dbUser?.id) {
        const payload: { email: string; id_uuid?: string } = { email };
        if (idUuid) payload.id_uuid = idUuid;
        const { data: insertedUser, error: insertUserError } = await supabase
          .from("user")
          .insert(payload)
          .select("id")
          .single();
        if (insertUserError) {
          console.warn("Error creando fila en public.user:", insertUserError.message);
        } else {
          console.log("Fila creada en public.user con id:", insertedUser?.id);
        }
      }
      navigate("/pin");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    navigate("/start");
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-2 w-full max-w-sm mx-auto"
    >
      <h1 className="text-xl font-bold text-center">Register</h1>

      <Input
        type="email"
        label="Email"
        placeholder="e-mail"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Password"
        placeholder="password"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Confirm Password"
        placeholder="confirm password"
        autoComplete="new-password"
        value={confirmPasswordText}
        onChange={(e) => setConfirmPasswordText(e.target.value)}
        required
      />

      <p className="text-sm text-blue-900">
        already have an account?{" "}
        <Link to="/login" className="font-semibold underline">
          Login Here
        </Link>
      </p>

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        Register
      </Button>

      <Button 
        type="button" 
        variant="white" 
        onClick={handleBack}
        className="md:hidden"
      >
        Back
      </Button>
    </form>
  );
};

export default RegisterForm;
