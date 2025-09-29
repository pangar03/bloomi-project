// import { useContext, useEffect } from "react";
// import { UserContext } from "../../context/UserContext/UserContext";
// import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";
import Input from "../../components/Input/input";



const EditProfilePage = () => {
//   const { user } = useContext(UserContext);
//   const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const navigate = useNavigate();

//   useEffect(() => {
//     if (currentPage !== "settings") setCurrentPage("settings");
//   }, [currentPage]);

  return (
    <div className="w-full h-full lg:mx-auto  flex flex-col items-center py-8 lg:bg-white bg-accent">
      <Input
        type="email"
        label="Change your email"
        placeholder="new e-mail"
        value={ChangeEmail}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        label="Put your new password"
        placeholder="new password"
        value={ChangeEmail}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        label="Repeat your new password"
        placeholder="new password"
        value={ChangeEmail}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button variant="white" onClick={() => navigate(-1)}>
        Edit Parent Pin
      </Button>

      <Button variant="red" onClick={() => navigate(-1)}>
        Cancel
      </Button>

      <Button variant="accent" onClick={() => navigate(-1)}>
        Confirm Changes
      </Button>
    </div>
  );
};

export default EditProfilePage;
