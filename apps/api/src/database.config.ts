import { Logger } from '@nestjs/common';

const logger = new Logger('DatabaseConfig');

// Set when we fall back to the ephemeral in-memory MongoDB.
export let memoryServer: { getUri(): string; stop(): Promise<boolean> } | null = null;

/**
 * `MONGODB_URI` wins when set. Otherwise start a self-contained in-memory
 * MongoDB (dev dependency) so the app runs with zero setup; its data resets
 * on every restart and SeedService auto-seeds it.
 */
export async function getMongoUri(): Promise<string> {
  if (process.env.MONGODB_URI) return process.env.MONGODB_URI;

  const { MongoMemoryServer } = await import('mongodb-memory-server');
  logger.log('No MONGODB_URI set — starting an in-memory MongoDB (data is ephemeral)...');
  memoryServer = await MongoMemoryServer.create();
  return memoryServer.getUri();
}
