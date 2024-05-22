import React from "react";
import Input from "../../Input/Input";
import CheckBox from "../../Input/CheckBox";
import Button from "../../Input/Button";
import CurrencyDisplay from "../../Input/Display/CurrencyDisplay";
import DisplayBetween from "../../Input/Display/DisplayBetween";
import Separator from "../../Input/Display/Separator";

const Limit = () => {
  return (
    <>
      <Input title="Limit Price" amount={0.0} />
      <Input title="Amount" amount={0.0} />
      <Input title="Limit Price" selectTitle=" Good till cancelled" />
      <CheckBox title="Post Only" />
      <DisplayBetween firstTitle="Total" secondTitle={0.0} />
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

export default Limit;
