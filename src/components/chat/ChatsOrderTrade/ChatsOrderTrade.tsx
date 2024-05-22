"use client";

import Modal from "@/components/Modal/Modal";
import React, { useState } from "react";
import ExchangeComp from "@/components/Exchange/Exchange";
import Order from "@/components/Exchange/OrderRecentComp/Order";
import Recent from "@/components/Exchange/OrderRecentComp/Recent";
import Chat from "@/components/Exchange/OrderRecentComp/Chat";
import Tab from "./Tab";

const tabArr = [
  { title: "Chats", type: "chat" },
  { title: "Order books", type: "order" },
  { title: "Recent trades", type: "recent" },
];

const ChatsOrderTrade = () => {
  const [showModal, setShowModal] = useState(false);

  const [tab, setTab] = useState<string>("chat");

  const [type, setType] = useState<string>("buy");

  const openModal = (e: any, type: string) => {
    e.preventDefault();
    setType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setType("buy");
  };
  const renderJSX = () => {
    if (tab === "order") {
      return <Order />;
    }

    if (tab === "recent") {
      return <Recent />;
    }
    if (tab === "chat") {
      return <Chat />;
    }
    return null;
  };

  const handleClick = (e: any, type: string) => {
    setTab(type);
  };
  return (
    <div className="flex w-full bg-[#20252B] border-[#262932] h-full min-h-[561px]  border rounded-lg  grow flex-col  p-4">
      <div className="flex bg-[#00000029] w-full h-8 p-[2px] mb-4 rounded-lg items-center md:hidden">
        {tabArr?.map(({ title, type }, id) => (
          <Tab
            title={title}
            tab={tab}
            handleClick={handleClick}
            type={type}
            key={id}
          />
        ))}
      </div>
      {renderJSX()}
      <div className="flex  md:hidden gap-4 w-full  h-16 items-center ">
        <button
          onClick={(e) => openModal(e, "buy")}
          className="bg-[#25C26E] h-8 rounded-lg items-center justify-center w-full"
        >
          Buy
        </button>
        <button
          onClick={(e) => openModal(e, "sell")}
          className="bg-[#FF554A] h-8 rounded-lg items-center justify-center w-full"
        >
          Sell
        </button>
      </div>
      <div className="flex md:hidden">
        <Modal show={showModal} onClose={closeModal}>
          <ExchangeComp type={type} setType={setType} />
        </Modal>
      </div>
    </div>
  );
};

export default ChatsOrderTrade;
