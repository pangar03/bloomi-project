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
          <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
          <Input
            type="email"
            placeholder="new e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <Input
            type="password"
            placeholder="new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
          <Input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Edit Parent Pin Button */}
        <div className="pt-4">
          <Button 
            variant="white" 
            onClick={() => navigate(-1)}
            className="w-full py-3 text-black border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Edit Parent Pin
          </Button>
        </div>

        {/* Bottom Buttons */}
        <div className="flex space-x-4 pt-6">
          <Button 
            variant="red" 
            onClick={() => navigate(-1)}
            className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Cancel
          </Button>

          <Button 
            variant="accent" 
            onClick={() => navigate(-1)}
            className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Confirm Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
