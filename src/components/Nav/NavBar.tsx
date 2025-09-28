import { useContext } from "react";
import NavItem from "./NavItem";
import { PageContext } from "../../context/PageContext/PageContext";

const NavBar = () => {
    const { currentPage } = useContext(PageContext)!;
    let navBarVisibilityClass = "";
    switch (currentPage) {
        case "login":
        case "register":
        case "pin":
            navBarVisibilityClass = "hidden";
            break;
        case "dashboard":
        case "store":
        case "settings":
            navBarVisibilityClass =
                "flex-col lg:w-[20%] w-full lg:h-screen h-fit shadow-md justify-start absolute bottom-0 border-gray-light lg:border-t-0 lg:border-r-1 bg-white z-10";
            break;
        case "journal":
            navBarVisibilityClass =
                "flex-col lg:w-[20%] w-full lg:h-screen h-fit shadow-md justify-start absolute bottom-0 border-gray-light lg:border-t-0 lg:border-r-1 bg-white z-10";
            break;
        case null:
            navBarVisibilityClass = "hidden";
            break;
        default:
            navBarVisibilityClass = "hidden";
            break;
    }
    return (
        <nav className={`${navBarVisibilityClass} `}>
            <div className="w-full p-4 h-[15%] hidden lg:block bg-accent-lighter border-b-1 border-gray-light m-0">
                {/* LOGO */}
            </div>
            <div className="lg:flex-col flex justify-between p-4 lg:justify-start w-screen border-t-1  lg:w-[20vw] lg:h-fit">
                <NavItem navTo="dashboard" label="Dashboard" />
                <NavItem navTo="store" label="Store" />
                <NavItem navTo="journal" label="Journal" />
                <NavItem navTo="settings" label="Settings" />
                <NavItem navTo="logout" label="Logout" />
            </div>
        </nav>
    );
};

export default NavBar;
