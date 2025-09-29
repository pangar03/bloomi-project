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

  const handleConfirmChanges = () => {

    console.log("Confirming changes...");
    navigate("/settings");
  };

  return (
    <div className="w-full h-full lg:mx-auto flex flex-col items-center lg:bg-white bg-accent">
      <div className="w-full h-full flex flex-col items-center bg-white mt-0 px-8 py-8 custom-scrollbar overflow-y-scroll">
        <div className="flex flex-col gap-6 items-center lg:w-[50%] lg:max-w-lg w-full max-w-sm">
          
          <h1 className="text-xl text-black font-bold mb-4 mt-8">
            Edit Account
          </h1>

          <div className="w-full">
            <Input
              type="email"
              label="E-mail"
              placeholder="new email"
              inputValue={email}
              setInputValue={setEmail}
              className="w-full"
            />
          </div>

          <div className="w-full">
            <Input
              type="password"
              label="Password"
              placeholder="new password"
              inputValue={password}
              setInputValue={setPassword}
              className="w-full"
            />
          </div>

          <div className="w-full">
            <Input
              type="password"
              label="Confirm Password"
              placeholder="new password"
              inputValue={confirmPassword}
              setInputValue={setConfirmPassword}
              className="w-full"
            />
          </div>

          <div className="pt-4 w-full">
            <Button
              variant="white"
              className="w-full lg:py-3 lg:text-base"
              onClick={() => navigate("/settings/edit-parent-pin")}
            >
              Edit Parent Pin
            </Button>
          </div>

          <div className="flex space-x-3 pt-4 w-full">
            <Button
              variant="red"
              onClick={() => navigate("/settings")}
              className="flex-1 py-2 text-sm h-10 lg:py-3 lg:text-base lg:h-12"
            >
              Cancel
            </Button>

            <Button
              variant="accent"
              onClick={handleConfirmChanges}
              className="flex-1 py-2 text-sm h-10 lg:py-3 lg:text-base lg:h-12"
            >
              Confirm 
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EditProfilePage;
