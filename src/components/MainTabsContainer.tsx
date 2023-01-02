import React from "react";
import {
  CiVault,
  CiViewList,
  CiSettings,
  CiSliderHorizontal,
} from "react-icons/ci";
interface TabsContainerProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

export const TabsContainer: React.FC<TabsContainerProps> = ({
  currentTab,
  setCurrentTab,
}) => {
  const tabs = [
    { name: "Vault", icon: <CiVault /> },
    { name: "Autofill", icon: <CiViewList /> },
    { name: "Generate", icon: <CiSliderHorizontal /> },
    { name: "Settings", icon: <CiSettings /> },
  ];

  return (
    <ul className='w-full bg-blue-100 grid grid-cols-4'>
      {tabs.map((tab, i) => (
        <li
          className={`flex justify-center hover:bg-blue-200 font-semibold text-slate-700 transition-all ${
            currentTab === i ? "bg-blue-300/40" : ""
          }`}
          key={i}
        >
          <button
            className={`flex flex-col items-center justify-center gap-1 text-center w-full h-full py-3 relative ${
              currentTab === i ? "text-blue-700 " : ""
            }`}
            onClick={() => setCurrentTab(i)}
          >
            <div className='text-2xl'>{tab.icon}</div>
            <div className='text-xs'>{tab.name}</div>
            <div
              className={`absolute ${
                currentTab === i ? "h-[2px] bg-blue-700 w-1/3 bottom-0" : ""
              }`}
            ></div>
          </button>
        </li>
      ))}
    </ul>
  );
};
