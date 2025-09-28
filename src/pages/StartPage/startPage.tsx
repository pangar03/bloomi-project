import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../../context/PageContext/PageContext";
import Logo from "../../components/Logo/logo";
import Button from "../../components/buttons/button";
import PetMiniature from "../../components/PetMiniature/petMiniature";

const StartPage = () => {
  const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const navigate = useNavigate();

  useEffect(() => {
    if (currentPage !== "start") setCurrentPage("start");
  }, [currentPage, setCurrentPage]);

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

      <div className="mb-8">
        <Logo variant="primary" />
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