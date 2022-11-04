import React, { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

declare global {
  interface Window {
    doselect: any;
  }
}

const DoSelect = () => {
  window.doselect = {
    api_key: "ec317642993b41f58f1bf19d6af32293",
    email: "dvsshaham@gmail.com",
    full_name: "Shaham",
    timezone: "Asia/Kolkata",
    user_hash:
      "b07bdf38eccfb277077e04c33b9ae1e774c39a8e1eb377242d434637cf239e0f",
  };
  {
    console.log("window", window.doselect);
  }

  return (
    <>
      <Script
        src="/doselect.js"
        onLoad={() => {
          console.log("script runing");
        }}
      />{" "}
    </>
  );
};

export default DoSelect;
