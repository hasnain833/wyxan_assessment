import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stop `next dev` from generating AGENTS.md / CLAUDE.md in this folder.
  agentRules: false,
};

export default nextConfig;
