"use client";
import FormLogin from "../Components/FormLogin";
import { useEffect, useState } from "react";
import ChatPage, { Message } from "./chat/page";
import socket from "../socket";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [updateMessages, setUpdateMessages] = useState<boolean>(false);

  function getMessages() {
    socket.on("get messages", (data) => {
      setMessages(data);
    });
  }
  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    if (updateMessages) {
      socket.on("room message", (data) => {
        messages.push(data);
      });
      setUpdateMessages(false);
    }
  }, [updateMessages]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);
  return (
    <main className="flex min-h-screen bg-primary flex-col items-center justify-center p-24 bg-bgPrimary">
      {!loggedIn ? (
        <FormLogin
          setLoggedIn={setLoggedIn}
          setUsername={setUsername}
          username={username}
        />
      ) : (
        <ChatPage
          setMessages={setMessages}
          username={username}
          messages={messages}
          setUpdateMessages={setUpdateMessages}
        />
      )}
    </main>
  );
}
