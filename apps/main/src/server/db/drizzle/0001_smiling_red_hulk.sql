CREATE TABLE IF NOT EXISTS "chat" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "message" (
	"id" serial PRIMARY KEY NOT NULL,
	"chat_id" serial NOT NULL,
	"content" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "title_idx" ON "chat" ("title");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "user" ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "chat_id_idx" ON "message" ("chat_id");