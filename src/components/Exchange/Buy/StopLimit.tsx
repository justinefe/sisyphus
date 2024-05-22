import React from "react";
import Input from "../../Input/Input";
import CurrencyDisplay from "../../Input/Display/CurrencyDisplay";
import DisplayBetween from "../../Input/Display/DisplayBetween";
import Button from "../../Input/Button";
import Separator from "../../Input/Display/Separator";

const StopLimit = () => {
  return (
    <>
      <Input title="Trigger Price" amount={0.0} />
      <Input title="Limit Price" amount={0.0} />
      <Input title="Amount Price" amount={0.0} />
      <Input title="Type" amount={0.0} />
      <Input title="Type" selectTitle=" Good till cancelled" />
      <DisplayBetween firstTitle="Type" secondTitle={0} />
      <Button title="Buy BTC" full={true} />
      <Separator />

      <CurrencyDisplay
        mainTitle="Total account value"
        mainTitleValue={0}
        select="NGN"
      />
      <CurrencyDisplay
        mainTitle="Open Orders"
        mainTitleValue={0}
        subTitle="Available"
        subTitleValue={0}
      />
      <Button title="Deposit" full={false} />
    </>
  );
};

export default StopLimit;
