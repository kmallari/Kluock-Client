import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TabsContainer } from "./components/MainTabsContainer";
import "./App.css";
import { VaultTab } from "./components/VaultTab/VaultTab";
import { AutofillTab } from "./components/AutofillTab/AutofillTab";
import { GenerateTab } from "./components/GenerateTab/GenerateTab";
import { SettingsTab } from "./components/SettingsTab/SettingsTab";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <main className='w-[350px] h-[560px] text-emerald-900 bg-white'>
      <TabsContainer currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 && <VaultTab />}
      {currentTab === 1 && <AutofillTab />}
      {currentTab === 2 && <GenerateTab />}
      {currentTab === 3 && <SettingsTab />}
    </main>
  );
}

export default App;
