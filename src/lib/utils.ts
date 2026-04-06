import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function toWaMePrefillUrl(baseWaMeUrl: string, message: string) {
  const url = new URL(baseWaMeUrl);
  url.searchParams.set("text", message);
  return url.toString();
}
