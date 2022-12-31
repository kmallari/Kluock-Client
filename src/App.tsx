import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TabsContainer } from "./components/TabsContainer";
import "./App.css";

function App() {
  return (
    <main className='w-[350px] h-[560px] bg-amber-50 text-slate-900'>
      <TabsContainer />
    </main>
  );
}

export default App;
