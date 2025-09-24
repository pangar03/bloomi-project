import "./App.css";
import "./index.css";
import GoalCard from "./components/cards/goalCard/goalCard";

function App() {
    return <>
        <div className="p-4 space-y-4">
            {/* Goal completado */}
            <GoalCard variant="completed" goalName="Goal" reward={100} />
            
            {/* Goal en progreso */}
            <GoalCard variant="progress" goalName="Goal" reward={100} progress="0/15" />
        </div>
    </>;
}

export default App;