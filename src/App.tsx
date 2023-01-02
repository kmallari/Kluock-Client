import { useState, useEffect, createContext } from "react";
import { TabsContainer } from "./components/MainTabsContainer";
import "./App.css";
import { VaultTab } from "./components/VaultTab/VaultTab";
import { AutofillTab } from "./components/AutofillTab/AutofillTab";
import { GenerateTab } from "./components/GenerateTab/GenerateTab";
import { SettingsTab } from "./components/SettingsTab/SettingsTab";
import axios from "axios";
import { Credentials } from "./types";

export const VaultContext = createContext<{
  suggestedCredentials: Credentials[];
  allCredentials: Credentials[];
  personalInfo: string | null; // change this
} | null>(null);

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [currentTab, setCurrentTab] = useState(0);
  const [suggestedCreds, setSuggestedCreds] = useState<Credentials[]>([]);
  const [allCreds, setAllCreds] = useState<Credentials[]>([]);
  useEffect(() => {
    // const browserUrl = window.location.href;
    const browserUrl = "fb.com";

    axios.get(apiUrl + `/site/${browserUrl}/`).then((res) => {
      setSuggestedCreds(res.data);
      console.log({ suggestedData: res.data });
    });
    axios.get(apiUrl + "/").then((res) => {
      setAllCreds(res.data);
      console.log({ allData: res.data });
    });
  }, []);

  return (
    <main className='w-[350px] h-[560px] text-emerald-900 bg-white'>
      <TabsContainer currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 0 && (
        <VaultContext.Provider
          value={{
            suggestedCredentials: suggestedCreds,
            allCredentials: allCreds,
            personalInfo: "",
          }}
        >
          <VaultTab />
        </VaultContext.Provider>
      )}
      {currentTab === 1 && <AutofillTab />}
      {currentTab === 2 && <GenerateTab />}
      {currentTab === 3 && <SettingsTab />}
    </main>
  );
}

export default App;
