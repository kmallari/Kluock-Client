import React from "react";
import { AllCredentials } from "./AllCredentials";
import { SuggestedCredentials } from "./SuggestedCredentials";

interface LoginsProps {}

export const Logins: React.FC<LoginsProps> = ({}) => {
  return (
    <div className="overflow-auto mt-4 h-[452px]">
      <SuggestedCredentials />
      <AllCredentials />
    </div>
  );
};
