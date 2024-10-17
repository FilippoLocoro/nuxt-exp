CREATE TABLE `ads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`price` text NOT NULL,
	`address` text NOT NULL,
	`square_meters` text NOT NULL,
	`number_of_rooms` text NOT NULL,
	`floor` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
