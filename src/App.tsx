import "./App.css";
import "./index.css";
import TaskCard from "./components/cards/taskCard/taskCard";

function App() {
    return <>
        <div className="p-4 space-y-4">
            <TaskCard variant="active" taskName="Brush Teeth" reward={10} />
            <TaskCard variant="completed" taskName="Read Book" />
            <TaskCard variant="deletable" taskName="Exercise" />
            <TaskCard variant="basic" taskName="Meditation" />
        </div>
    </>;
}

export default App;