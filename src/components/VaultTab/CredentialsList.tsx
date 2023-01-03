import React, { useMemo, useState } from "react";
import { Credentials } from "../../types";
import { BiCopy } from "react-icons/bi";
import axios from "axios";
import _ from "lodash";
interface CredentialsListProps {
  credentialsList: Credentials[] | undefined;
  isSuggested?: boolean;
  size?: number;
}

export const CredentialsList: React.FC<CredentialsListProps> = ({
  credentialsList,
  isSuggested = false,
  size,
}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [copyText, setCopyText] = useState("Copy info");

  const updateUsedAt = (id: string) => {
    axios
      .put(apiUrl + `/id/${id}/`, {
        updated_at: Date.now(),
      })
      .then((res) => {
        console.log({ res });
      });
    setCopyText("Info copied!");
    setTimeout(() => {
      setCopyText("Copy info");
    }, 1000);
  };

  const debouncedUpdateUsedAt = useMemo(
    () => _.debounce(updateUsedAt, 150),
    []
  );

  return (
    <div className='self-start relative'>
      <h2 className='font-bold text-sm sticky self-start border-b border-slate-200 px-4 pb-2'>
        {isSuggested ? (
          "Suggestions"
        ) : (
          <div className='flex flex-row justify-between'>
            <span>All logins</span>
            <span className='font-medium'>{size} items</span>
          </div>
        )}
      </h2>
      <ul className='px-4'>
        {credentialsList!.map((creds, i) => (
          <li className='px-2 flex flex-row gap-2 items-center py-2 justify-between text-start bg-slate-100 w-full my-2 rounded-lg hover:bg-slate-200 cursor-pointer group/container'>
            <div className='flex flex-row gap-2'>
              <img
                className='justify-self-center p-1'
                src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${creds.website}&size=32`}
                alt=''
                width={40}
                height={40}
              />
              <div className='text-sm font-bold flex flex-col'>
                <h3>{creds.website}</h3>
                <span
                  className={`text-xs font-medium whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[240px] group-hover/container:max-w-[195px]`}
                >
                  {creds.login}
                </span>
              </div>
            </div>
            <div className='group/copy relative'>
              <div className='invisible group-hover/copy:visible absolute  top-0 bottom-0 my-auto'>
                <div
                  className={`absolute w-3 h-3  right-0 rotate-45 top-0 bottom-0 my-auto -left-5 ${
                    copyText === "Copy info" ? "bg-blue-700" : "bg-blue-500"
                  }`}
                ></div>
                <div
                  className={`text-white font-medium text-xs h-fit px-2 py-1 rounded-md top-1 absolute ${
                    copyText === "Copy info"
                      ? "w-[4.5rem] -left-[5.2rem] bg-blue-700"
                      : "w-[5.5rem] -left-[6.25rem] bg-blue-500"
                  }`}
                >
                  {copyText}
                </div>
              </div>

              <button
                className='p-2 rounded-lg hover:bg-blue-300 hidden group-hover/container:block'
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${creds.login}:${creds.password}`
                  );
                  debouncedUpdateUsedAt(creds.id);
                }}
              >
                <BiCopy />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
