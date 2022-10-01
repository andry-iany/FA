import Navbar from "./components/Navbar";
import Parallax from "./components/parallax";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      const loader = document.getElementById("loadingScreen")!;
      if (loader) {
        loader.remove();
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Parallax />
    </>
  );
}

export default App;
