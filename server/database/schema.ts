import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const ads = sqliteTable('ads', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  price: text('price').notNull(),
  address: text('address').notNull(),
  squareMeters: text('square_meters').notNull(),
  numberOfRooms: text('number_of_rooms').notNull(),
  floor: text('floor').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
})
