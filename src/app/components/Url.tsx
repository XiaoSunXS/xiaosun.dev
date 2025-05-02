"use client";
import { LuExternalLink } from "react-icons/lu";

export const Url = ({ url }: { url: string }) => (
  <a
    href={url}
    target="_blank"
    className="underline hover:cursor-pointer flex items-center gap-1"
  >
    <LuExternalLink /> {url}
  </a>
);
