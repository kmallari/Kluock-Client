import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TabsContainer } from "./components/TabsContainer";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <main className='w-[350px] h-[560px] bg-blue-50 text-blue-900 border border-slate-700 shadow-2xl'>
      <TabsContainer currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </main>
  );
}

export default App;
