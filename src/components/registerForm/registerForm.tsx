import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../buttons/button";
import Input from "../Input/input";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  const handleBack = () => {
    navigate("/start");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-full max-w-sm mx-auto"
    >
      <h1 className="text-xl font-bold text-center">Register</h1>

      <Input
        type="email"
        label="Email"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Input
        type="password"
        label="Confirm Password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      <p className="text-sm text-blue-900">
        already have an account?{" "}
        <Link to="/login" className="font-semibold underline">
          Login Here
        </Link>
      </p>

      <Button type="submit" variant="primary">
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
