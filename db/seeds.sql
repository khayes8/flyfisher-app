--Seed data for Trip table--
INSERT INTO trips (trip_name, location, createdAt, updatedAt) Values("spring trip", "wolfeboro", NOW(), NOW());
--Seed data for Fish table--
INSERT INTO Fishes (fish_name, bait, notes, createdAt, updatedAt ) VALUES ('Old Speckled Trout', 'dry fly', 'A very big fish!', NOW(), NOW(), 1);
INSERT INTO Fishes (fish_name, bait, notes, createdAt, updatedAt) VALUES ('Billy Bass', 'wet fly', 'A very funky fish!', NOW(), NOW());