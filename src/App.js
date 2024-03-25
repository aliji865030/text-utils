import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "about",
    element: <AboutScreen />,
  },
  {
    path: "contact",
    element: <ContactScreen />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <HomeScreen></HomeScreen>
      <AboutScreen></AboutScreen>
      <ContactScreen></ContactScreen> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
