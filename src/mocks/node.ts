// src/mocks/browser.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Initialize the mock service worker
export const server = setupServer(...handlers);
