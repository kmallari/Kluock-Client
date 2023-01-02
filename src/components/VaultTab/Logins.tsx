import React, { useContext } from "react";
import { CredentialsList } from "./CredentialsList";
import { VaultContext } from "../../App";
interface LoginsProps {}

export const Logins: React.FC<LoginsProps> = ({}) => {
  const vaultContext = useContext(VaultContext);

  console.log({ vaultContext });

  return (
    <div className='overflow-auto mt-4 h-[452px]'>
      <div>
        <CredentialsList
          credentialsList={vaultContext?.suggestedCredentials}
          isSuggested={true}
        />
      </div>
      <div className='mt-4'>
        <CredentialsList
          credentialsList={vaultContext?.allCredentials}
          size={vaultContext!.credentiialsSize}
        />
      </div>
    </div>
  );
};
