import React, { useContext, useEffect, useState } from "react";
import { VaultContext } from "../../App";
import { Credentials } from "../../types";
interface SuggestedCredentialsProps {}

export const SuggestedCredentials: React.FC<
  SuggestedCredentialsProps
> = ({}) => {
  const vaultContext = useContext(VaultContext);
  return (
    <div className='self-start'>
      <h2 className='font-bold text-sm sticky self-start border-b border-slate-200 pl-4 pb-2'>
        Suggested
      </h2>
      <ul className='pl-4'>
        {vaultContext!.suggestedCredentials.map((creds, i) => (
          <li className='flex flex-row gap-2 items-center py-2'>
            <img
              className='justify-self-center p-1'
              src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${creds.website}&size=32`}
              alt=''
              width={40}
              height={40}
            />
            <div className='text-sm font-bold'>
              <h3>{creds.website}</h3>
              <span className='text-xs font-medium'>{creds.login}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
