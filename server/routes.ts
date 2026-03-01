import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form is handled by Web3Forms from the client; no backend contact API.
  return httpServer;
}
