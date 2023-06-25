"use client";
import Message from "../../Components/Message";
import socket from "../../socket";
import { useState } from "react";

export type Message = {
  text: string;
  username: string;
  id?: string;
};

type ChatProps = {
  username: string;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setUpdateMessages: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChatPage({
  username,
  messages,
  setUpdateMessages,
}: ChatProps) {
  const [message, setMessage] = useState<Message>({
    text: "",
    username: "",
  });

  function handleMessage(e: any) {
    setMessage({
      text: e.target.value,
      username,
    });
  }

  function handleEnter(e: any) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  function sendMessage() {
    socket.emit("chat message", message);
    setMessage(() => ({
      text: "",
      username,
    }));
    setUpdateMessages(true);
  }

  return (
    <div className=" w-full flex gap-5 flex-col ">
      <div className=" h-70vh rounded-xl bg-messagesBg p-8 flex flex-col gap-3 overflow-auto">
        <p className="w-full text-center font-bold">
          {` Logado como ${username}`}{" "}
        </p>
        {!messages ? (
          <p>Carregando mensagens...</p>
        ) : (
          messages.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              username={message.username === username ? "me" : message.username}
              id={message.id || ""}
            />
          ))
        )}
      </div>
      <div className="h-12 flex justify-between " onKeyDown={handleEnter}>
        <input
          type="text"
          className="w-11/12 h-full rounded-full p-3"
          onChange={handleMessage}
          value={message.text}
        />
        <button
          className="w-7% rounded-full bg-actionBtn text-white"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
