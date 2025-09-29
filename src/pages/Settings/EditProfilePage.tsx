// import { useContext, useEffect } from "react";
// import { UserContext } from "../../context/UserContext/UserContext";
// import { PageContext } from "../../context/PageContext/PageContext";
import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/button";



const TaskReportPage = () => {
//   const { user } = useContext(UserContext);
//   const { currentPage, setCurrentPage } = useContext(PageContext)!;
  const navigate = useNavigate();

//   useEffect(() => {
//     if (currentPage !== "settings") setCurrentPage("settings");
//   }, [currentPage]);

  return (
    <div className="w-full h-full lg:mx-auto  flex flex-col items-center py-8 lg:bg-white bg-accent">
      <Button variant="white" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default TaskReportPage;
