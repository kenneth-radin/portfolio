import type { NextConfig } from "next";
import { BASE_PATH } from "./lib/paths";

const nextConfig: NextConfig = {
  output: "export",
  basePath: BASE_PATH,
  images: { unoptimized: true },
};

export default nextConfig;


