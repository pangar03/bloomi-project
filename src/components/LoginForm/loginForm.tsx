import { useState } from "react";
import Button from "../buttons/button";

const LoginForm = () => {
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
      <h1 className="text-3xl font-bold text-center">Login</h1>

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

      <p className="text-sm text-blue-900">
        Don’t have an account?{" "}
        <a href="/register" className="font-semibold underline">
          Register Here
        </a>
      </p>

      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
