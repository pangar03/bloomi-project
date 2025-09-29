import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/logo";
import Button from "../../components/buttons/button";


const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center px-6
      bg-[url(/src/assets/background/start.jpg)]"
    >


      <div className="mt-32 mb-20">
        <Logo variant="white" className="scale-160" />
      </div>

      {/* Spacer to push buttons down */}
      <div className="flex-1"></div>

      {/* Buttons section - positioned at bottom */}
      <div className="w-full max-w-xs space-y-4 mb-16">
        <Button 
          variant="white" 
          onClick={handleStart}
          className="w-full py-4 text-lg font-semibold"
        >
          Start
        </Button>

        <Button 
          variant="primary" 
          onClick={handleRegister}
          className="w-full py-4 text-lg font-semibold"
        >
          Register
        </Button>
      </div>

    </div>
  );
};

export default StartPage;