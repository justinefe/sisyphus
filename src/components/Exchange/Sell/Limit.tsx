import React from "react";
import Input from "../../Input/Input";
import CheckBox from "../../Input/CheckBox";
import DisplayBetween from "../../Input/Display/DisplayBetween";
import Button from "../../Input/Button";
import Separator from "../../Input/Display/Separator";
import CurrencyDisplay from "../../Input/Display/CurrencyDisplay";

const Limit = () => {
  return (
    <>
      <Input title="Limit Price" amount={0.0} />
      <Input title="Amount" amount={0.0} />
      <Input title="Type" selectTitle=" Good till cancelled" />
      <CheckBox title="Post Only" />
      <DisplayBetween firstTitle="Total" secondTitle={0} />
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
