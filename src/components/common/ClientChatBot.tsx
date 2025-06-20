"use client";

import dynamic from "next/dynamic";

// Import dynamique du ChatBot
const ChatBot = dynamic(() => import("./ChatBot"), {
  ssr: false,
});

export default function ClientChatBot() {
  return <ChatBot />;
}
