import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage/login";
import Journal from "./pages/Journal/journal";
import Store from "./pages/Store/store";
import Register from "./pages/RegisterPage/registerPage";
import StartPage from "./pages/StartPage/startPage";
import NavBar from "./components/Nav/NavBar";
import LateralBar from "./components/LateralBar/LateralBar";
import Dashboard from "./pages/Dashboard/dashboard";
import { useContext } from "react";
import { PageContext } from "./context/PageContext/PageContext";
import SettingsPage from "./pages/Settings/SettingsPage";
import TaskReportPage from "./pages/Settings/TaskReportPage";
import MoodJournalReportPage from "./pages/Settings/MoodJournalPage";
import ManageHabitsPage from "./pages/Settings/ManageHabitsPage";
import EditProfilePage from "./pages/Settings/EditProfilePage";
import EditParentPin from "./pages/Settings/editParentPin";
import PinPage from "./pages/PinPage/pinPage";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";

// pa que se muestre la pagina de start
const ResponsiveHomePage = () => {
    const { getHomePage } = useContext(PageContext)!;
    const homePage = getHomePage();

    return homePage === "start" ? <StartPage /> : <Login />;
};

function App() {
    // const user = useSelector((state: RootState) => state.userSlice.user);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (!user) {
    //         dispatch(
    //             setUser({
    //                 name: "John Doe",
    //                 currentPet: "BunnyBerry",
    //                 ownedPets: ["BunnyBerry", "Fallxie"],
    //                 currency: 100,
    //                 pin: "1234",
    //                 taskRegistry: {
    //                     [new Date("2025-09-01").toDateString()]: [
    //                         {
    //                             id: "task-1",
    //                             taskName: "Do homework",
    //                             reward: 10,
    //                             variant: "active",
    //                         },
    //                         {
    //                             id: "task-2",
    //                             taskName: "Brush teeth",
    //                             reward: 20,
    //                             variant: "active",
    //                         },
    //                     ],
    //                     [new Date("2025-09-02").toDateString()]: [
    //                         {
    //                             id: "task-1",
    //                             taskName: "Do homework",
    //                             reward: 10,
    //                             variant: "active",
    //                         },
    //                         {
    //                             id: "task-2",
    //                             taskName: "Brush teeth",
    //                             reward: 20,
    //                             variant: "active",
    //                         },
    //                     ],
    //                 },
    //                 journalEntries: [
    //                     {
    //                         date: new Date("2023-10-01"),
    //                         mood: "Happy",
    //                         entry: "Had a great day at the park!",
    //                     },
    //                 ],
    //             })
    //         );
    //         dispatch(setDailyMood(null));
    //         dispatch(
    //             setDailyTasks([
    //                 {
    //                     id: "task-1",
    //                     taskName: "Do homework",
    //                     reward: 10,
    //                     variant: "active",
    //                 },
    //                 {
    //                     id: "task-2",
    //                     taskName: "Brush teeth",
    //                     reward: 20,
    //                     variant: "active",
    //                 },
    //                 {
    //                     id: "task-3",
    //                     taskName: "Do the bed",
    //                     reward: 15,
    //                     variant: "active",
    //                 },
    //             ])
    //         );
    //         dispatch(
    //             setGoals([
    //                 {
    //                     id: "goal-1",
    //                     trackedTaskId: "task-1",
    //                     goalName: "Do homework three times",
    //                     reward: 50,
    //                     progress: 0,
    //                     goal: 3,
    //                 },
    //                 {
    //                     id: "goal-2",
    //                     trackedTaskId: "task-2",
    //                     goalName: "Brush teeth five times",
    //                     reward: 100,
    //                     progress: 1,
    //                     goal: 5,
    //                 },
    //                 {
    //                     id: "goal-3",
    //                     trackedTaskId: "task-3",
    //                     goalName: "Do the bed two times",
    //                     reward: 75,
    //                     progress: 1,
    //                     goal: 2,
    //                 },
    //             ])
    //         );
    //         dispatch(
    //             setTasks([
    //                 {
    //                     id: "task-1",
    //                     taskName: "Do homework",
    //                     reward: 10,
    //                     variant: "basic",
    //                 },
    //                 {
    //                     id: "task-2",
    //                     taskName: "Brush teeth",

    //                     reward: 20,
    //                     variant: "basic",
    //                 },
    //                 {
    //                     id: "task-3",
    //                     taskName: "Do the bed",
    //                     reward: 15,
    //                     variant: "basic",
    //                 },
    //             ])
    //         );
    //     }
    // }, []);

    const { currentPage } = useContext(PageContext)!;

    return (
        <Router>
            <div className="h-screen w-full flex bg-accent lg:bg-white">
                <NavBar />
                <div
                    className={`${currentPage !== "login" && currentPage !== "register" && currentPage !== "pin" ? "lg:pl-8 lg:w-[80%]" : "w-full"} w-full flex flex-col justify-center lg:flex-row-reverse lg:justify-between items-center ml-auto`}
                >
                    <LateralBar />
                    <Routes>
                        <Route path="/" element={<ResponsiveHomePage />} />
                        <Route path="/start" element={<StartPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/pin" element={<PinPage />} />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings"
                            element={
                                <ProtectedRoute>
                                    <SettingsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/reports/tasks"
                            element={
                                <ProtectedRoute>
                                    <TaskReportPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/reports/journal"
                            element={
                                <ProtectedRoute>
                                    <MoodJournalReportPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/manage-habits"
                            element={
                                <ProtectedRoute>
                                    <ManageHabitsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/manage-habits"
                            element={
                                <ProtectedRoute>
                                    <ManageHabitsPage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/edit-profile"
                            element={
                                <ProtectedRoute>
                                    <EditProfilePage />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/settings/edit-parent-pin"
                            element={
                                <ProtectedRoute>
                                    <EditParentPin />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/journal"
                            element={
                                <ProtectedRoute>
                                    <Journal />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/store"
                            element={
                                <ProtectedRoute>
                                    <Store />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;