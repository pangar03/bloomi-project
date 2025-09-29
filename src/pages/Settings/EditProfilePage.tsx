import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import Input from "../../components/Input/input";

const EditProfilePage = () => {
  const { user } = useContext(UserContext);
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
    <div className="w-full h-full flex flex-col items-center bg-white">
      <h1 className="text-l font-bold text-black mb-8">Edit Account</h1>
      <div className="w-full max-w-md px-6 space-y-6">
        <div>
          <Input
            type="email"
            label="Put your email here "
            placeholder="new e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="password"
            label="Put your email here "
            placeholder="new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="password"
            label="Put your email here "
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="pt-4">
          <Button
            variant="white"
            onClick={() => navigate(-1)}
            className="w-full "
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
