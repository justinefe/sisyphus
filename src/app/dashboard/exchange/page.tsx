"use client";
import Buy from "@/components/Exchange/Buy/Buy";
import Sell from "@/components/Exchange/Sell/Sell";
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
