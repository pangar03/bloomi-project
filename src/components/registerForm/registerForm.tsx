import { useState } from "react";
import Button from "../buttons/button";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <h1 className="text-3xl font-bold text-center">Register</h1>

      <input
        type="email"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900"
        required
      />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900"
        required
      />

      <input
        type="password"
        placeholder="confirm password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-2 border-blue-800 rounded-2xl px-4 py-3 text-blue-900"
        required
      />

      <p className="text-sm text-blue-900">
        already have an account?{" "}
        <a href="/login" className="font-semibold underline">
          Login Here 
        </a> 
      </p>

      <Button type="submit" variant="primary">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
