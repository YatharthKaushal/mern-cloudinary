import { useState } from "react";
// import "./App.css";
import UploadAssignment from "./components/UploadAssignment";
import Assignment from "./pages/Assignment";
import Submission from "./pages/Submission";
import Refresh from "./components/Refresh";

function App() {
  // const [count, setCount] = useState(0);

  // const [assignments, setAssignments] = useState([]);

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      name: "MCQ Questions for boards",
      subject: "Chemistry",
      date: "24-2-2024",
      dueDate: "01-3-2024",
      status: "Submitted",
    },
    {
      id: 2,
      name: "MCQ Questions for boards",
      subject: "Biology",
      date: "24-2-2024",
      dueDate: "01-3-2024",
      status: "Pending",
    },
    {
      id: 3,
      name: "MCQ Questions for boards",
      subject: "Physics",
      date: "24-2-2024",
      dueDate: "01-3-2024",
      status: "Due",
    },
  ]);

  return (
    <>
      <main>
        <section className="border border-b-2 p-4">
          <UploadAssignment />
        </section>

        <Refresh length={assignments.length} />

        {assignments.length == 0 ? (
          <div className="container w-full mx-auto">
            <div className="w-fit mx-auto">No Assignments</div>
          </div>
        ) : (
          <>
            <section>
              <Assignment assignments={assignments} />
            </section>

            <section>
              <Submission />
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default App;
