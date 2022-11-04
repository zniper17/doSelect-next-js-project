/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import dynamic from "next/dynamic";

import Script from "next/script";
import Head from "next/head";
const DoSelect = dynamic(() => import("./../components/DoSelect"), {
  ssr: false,
});

const Fav = () => {
  return (
    <div>
      <div
        className="doselect-embed"
        data-category="test"
        data-slug="348y4"
        data-config='{"allow_test_retake": true,
         "custom_body_class": "custom_class1 custom_class2"}'
        style={{ width: "100vh", height: "100vh" }}
      ></div>
      <DoSelect />
    </div>
  );
};

export default Fav;
