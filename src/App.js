import { RouterProvider } from "react-router-dom";
import "./App.css";
import route from "./Components/Router/Router";

function App() {
  return (
    <>
      <section>
        <RouterProvider router={route}></RouterProvider>
      </section>
    </>
  );
}

export default App;
