// import React from 'react'

import { useState } from "react";

export const useApi = () => {
  const [vedioData, setVedioData] = useState();
  const playVedio = async () => {
        try {
      const res = await fetch(
        "https://api.freeapi.app/api/v1/public/youtube/videos"
      );
      const data = await res.json();
      console.log(data);
      setVedioData(data);
    }
    catch (e) {
        console.log(e);
      }
  } 
  return {vedioData, playVedio}
};
