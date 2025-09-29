import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import Input from "../../components/Input/input";

const EditProfilePage = () => {

  const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const navigate = useNavigate();
  
  // State variables for form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  useEffect(() => {
    if (currentPage !== "settings") setCurrentPage("settings");
  }, [currentPage, setCurrentPage]);

  return (
    <div className="w-full h-full flex flex-col items-center bg-white mt-35">
      <h1 className="text-l font-bold text-black mb-8">Edit Account</h1>
      <div className="w-full max-w-md px-6 space-y-6">
        <div>
          <Input
            type="email"
            label="Cambiar email"
            placeholder="nuevo email"
            inputValue={email}
            setInputValue={setEmail}
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="password"
            label="Cambiar contraseña"
            placeholder="nueva contraseña"
            inputValue={password}
            setInputValue={setPassword}
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="password"
            label="Repetir nueva contraseña"
            placeholder="confirmar contraseña"
            inputValue={confirmPassword}
            setInputValue={setConfirmPassword}
            className="w-full"
          />
        </div>

        <div className="pt-4">
          <Button
            variant="white"
            className="w-full "
            onClick={() => navigate("/settings/edit-parent-pin")}
          >
            Edit Parent Pin
          </Button>
        </div>

        <div className="flex space-x-4 pt-6">
          <Button
            variant="red"
            onClick={() => navigate(-1)}
            className="flex-1 py-3 "
          >
            Cancel
          </Button>

          <Button
            variant="accent"
            onClick={() => navigate(-1)}
            className="flex-1"
          >
            Confirm Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
