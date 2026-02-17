import React from "react";
import { AIAgentUserContext } from "../../context/AIAgentUserContext";

export default function AiAgentsLayout({ children }) {
  return <AIAgentUserContext>{children}</AIAgentUserContext>;
}
