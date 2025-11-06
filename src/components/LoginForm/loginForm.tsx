import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../services/supabaseClient";
import Button from "../buttons/button";
import Input from "../Input/input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
    const { error, data } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        console.log("Error login:", error);
        return;
      } 
        console.log("Login successful:", data);

  };

  const handleBack = () => {
    navigate("/start");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full max-w-sm mx-auto"
    >
      <h1 className="text-xl font-bold text-center">Login</h1>

      <Input
        type="email"
        label="Put your email here "
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Enter your password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <p className="text-sm text-blue-900">
        Dont have an account?{" "}
        <Link to="/register" className="font-semibold underline">
          Register Here
        </Link>
      </p>

      <Button type="submit" variant="primary">
        Login
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

export default LoginForm;
