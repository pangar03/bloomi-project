import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage/login";
import Register from "./pages/RegisterPage/registerPage";
import NavBar from "./components/Nav/NavBar";
import LateralBar from "./components/LateralBar/LateralBar";
import Dashboard from "./pages/Dashboard/dashboard";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext/UserContext";
import { PageContext } from "./context/PageContext/PageContext";
import SettingsPage from "./pages/Settings/SettingsPage";

function App() {
    const { user, setUser } = useContext(UserContext);
    const { currentPage } = useContext(PageContext)!;
    useEffect(() => {
        if (!user) {
            setUser({
                id: "1",
                name: "John Doe",
                email: "john.doe@example.com",
                currency: 100,
                journalEntries: [
                    {
                        date: new Date("2023-10-01"),
                        mood: "Happy",
                        entry: "Had a great day at the park!",
                    },
                ],
                dailyMood: null,
                dailyTasks: [
                    {
                        id: "task-1",
                        taskName: "Do homework",
                        reward: 10,
                        variant: "active",
                    },
                    {
                        id: "task-2",
                        taskName: "Brush teeth",
                        reward: 20,
                        variant: "active",
                    },
                    {
                        id: "task-3",
                        taskName: "Do the bed",
                        reward: 15,
                        variant: "active",
                    },
                ],
                goals: [
                    {
                        id: "goal-1",
                        trackedTaskId: "task-1",
                        goalName: "Do homework three times",
                        reward: 50,
                        progress: 0,
                        goal: 3,
                    },
                    {
                        id: "goal-2",
                        trackedTaskId: "task-2",
                        goalName: "Brush teeth five times",
                        reward: 100,
                        progress: 1,
                        goal: 5,
                    },
                    {
                        id: "goal-3",
                        trackedTaskId: "task-3",
                        goalName: "Do the bed two times",
                        reward: 75,
                        progress: 1,
                        goal: 2,
                    },
                ],
                currentPet: "BunnyBerry",
                ownedPets: ["BunnyBerry", "Fallxie"],
                password: "password123",
                pin: "1234",
                tasks: [
                    {
                        id: "task-1",
                        taskName: "Do homework",
                        reward: 10,
                        variant: "basic",
                    },
                    {
                        id: "task-2",
                        taskName: "Brush teeth",
                        reward: 20,
                        variant: "basic",
                    },
                    {
                        id: "task-3",
                        taskName: "Do the bed",
                        reward: 15,
                        variant: "basic",
                    },
                ],
            });
        }
    }, []);

    return (
      <Router>
        <div className="h-screen w-full flex bg-accent lg:bg-white">
          <NavBar />
          <div
            className={`${currentPage !== "login" && currentPage !== "register" && currentPage !== "pin" ? "lg:pl-8 lg:w-[80%]" : "w-full"} w-full flex flex-col justify-center lg:flex-row-reverse lg:justify-between items-center ml-auto`}
          >
            <LateralBar />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;
