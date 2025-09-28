import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/logo";
import Button from "../../components/buttons/button";
import PetMiniature from "../../components/PetMiniature/petMiniature";
import CircleContainer from "../../components/RoundedContainer/circleContainer";

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
      className="min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-6
      bg-[url(/src/assets/background/fondo.jpg)]"
    >

      <div className="mb-30">
        <Logo variant="primary" />
      </div>

      <div className="mb-12">
        <CircleContainer variant="red" className="w-48 h-48 p-8">
          <PetMiniature variant="BunnyBerry" className="w-32 h-32" />
        </CircleContainer>
      </div>


      <div className="w-full max-w-xs space-y-4">
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