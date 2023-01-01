import React from "react";
import { AllCredentials } from "./AllCredentials";
import { SuggestedCredentials } from "./SuggestedCredentials";

interface LoginsProps {}

export const Logins: React.FC<LoginsProps> = ({}) => {
  return (
    <div>
      <SuggestedCredentials />
      <AllCredentials />
    </div>
  );
};
