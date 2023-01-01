import React, { useState } from "react";
import { Logins } from "./Logins";
import { PersonalInfo } from "./PersonalInfo";
import { VaultTabsContainer } from "./VaultTabsContainer";

interface VaultTabProps {}

export const VaultTab: React.FC<VaultTabProps> = ({}) => {
  const [currentVaultTab, setCurrentVaultTab] = useState(0);
  return (
    <div className='p-4'>
      <VaultTabsContainer
        currentTab={currentVaultTab}
        setCurrentTab={setCurrentVaultTab}
      />
      {currentVaultTab === 0 && <Logins />}
      {currentVaultTab === 1 && <PersonalInfo />}
    </div>
  );
};
