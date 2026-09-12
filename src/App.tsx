import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import type { ITechnology } from "./Types/type";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

const technologyFetch = async():Promise<ITechnology[]> => {
  const res = await fetch('/public/data.json');
  const data = await res.json();
  return data;
}


function App() {

  // const technologyPromise = technologyFetch();
  const [technologyPromise] = useState(() => technologyFetch());

  return (
    <div className="">
      <NavBar />
      <Hero />
      <Suspense fallback={<LoadingSpinner/>}>
        <Technology technologyPromise={technologyPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
