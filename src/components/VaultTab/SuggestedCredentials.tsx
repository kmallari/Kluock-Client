import React, { useEffect, useState } from "react";
import axios from "axios";
interface SuggestedCredentialsProps {}

export const SuggestedCredentials: React.FC<
  SuggestedCredentialsProps
> = ({}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [suggestedCreds, setSuggestedCreds] = useState({});

  useEffect(() => {
    // const browserUrl = window.location.href;
    const browserUrl = 'fb.com';

    axios.get(apiUrl + `/site/${browserUrl}/`).then((res) => {
      setSuggestedCreds(res.data);
      console.log({ data: res.data });
    });
  }, []);

  return <div>Suggested</div>;
};
