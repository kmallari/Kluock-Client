import React from "react";
import { CiLock, CiUser } from "react-icons/ci";

interface VaultTabsContainerProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

export const VaultTabsContainer: React.FC<VaultTabsContainerProps> = ({
  currentTab,
  setCurrentTab,
}) => {
  const tabs = [
    {
      name: "Logins",
      icon: <CiLock />,
    },
    {
      name: "Personal Info",
      icon: <CiUser />,
    },
  ];
  return (
    <ul className='grid grid-cols-2 gap-4 px-4 h-[40px]'>
      {tabs.map((tab, i) => (
        <li
          className={`flex justify-center  hover:bg-emerald-200/50 font-medium text-slate-700 transition-all rounded-lg ${
            currentTab === i ? "bg-emerald-200/80" : ""
          }`}
          key={i}
        >
          <button
            className={`flex flex-row items-center justify-center gap-1 text-center w-full h-full py-2 relative ${
              currentTab === i ? "text-emerald-800 " : ""
            }`}
            onClick={() => setCurrentTab(i)}
          >
            <div className='text-sm font-bold'>{tab.icon}</div>
            <div className='text-xs'>{tab.name}</div>
          </button>
        </li>
      ))}
    </ul>
  );
};
