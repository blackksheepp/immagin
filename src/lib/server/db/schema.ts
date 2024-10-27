import { pgTable, serial, text, integer } from 'drizzle-orm/pg-core';

export const user = pgTable('imne_user', {
	id: serial('id').primaryKey(),
	slug: text('slug').notNull(),
});


export const image = pgTable('imgne_image', {
	id: serial('id').primaryKey(),
	slug: text('slug').notNull(),
	name: text('name').notNull(),
	userId: integer('user_id').notNull().references(() => user.id),
	url: text('url').notNull()
})