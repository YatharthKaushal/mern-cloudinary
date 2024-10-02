// import { useState } from "react";
// import "./App.css";
import Assignment from "./pages/Assignment";
import Submission from "./pages/Submission";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section>
          <Assignment />
        </section>

        <section>
          <Submission />
        </section>
      </main>
    </>
  );
}

export default App;
