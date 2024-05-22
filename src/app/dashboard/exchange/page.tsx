"use client";
import React, { useState } from "react";
import ExchangeComp from "@/components/Exchange/Exchange";

const Exchange = () => {
  const [type, setType] = useState<string>("buy");

  return (
    <>
      <ExchangeComp type={type} setType={setType} />
    </>
  );
};

export default Exchange;
