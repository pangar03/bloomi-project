// src/pages/Login.tsx
import Background from "../assets/background/brackground.jpg"
import LoginForm from "../components/LoginForm/loginForm";
import Logo from "../components/Logo/logo";

const Login = () => {
  return (
    <div
      className="bg-primary min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex justify-center mt-20 mb-10">
        <Logo variant="white" />
      </div>
      <div className="mt-auto bg-white rounded-t-4xl shadow-lg p-10 w-full">
        <div className="w-full max-w-md mx-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
