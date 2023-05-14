import { logger } from "./logger";

const message: string = "Hello, TypeScript!";

const rootElement: HTMLElement | null = document.getElementById("root");

if(!rootElement) {
  throw new Error("root element not found.");
}

rootElement.innerHTML = `<p>${message}</p>`;

logger(message);