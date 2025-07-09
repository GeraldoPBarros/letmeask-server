import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const rooms = pgTable("room", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createdAt: timestamp().defaultNow().notNull(),
});
