--Seed data for Trip table--
INSERT INTO trips (trip_name, location, createdAt, updatedAt) Values("spring trip", "wolfeboro", NOW(), NOW());
--Seed data for Fish table--
INSERT INTO Fishes (fish_name, bait, notes, createdAt, updatedAt, TripId ) VALUES ('Brook Trout', 'Adams dry fly #10', '14"', NOW(), NOW(), 1);
INSERT INTO Fishes (fish_name, bait, notes, createdAt, updatedAt) VALUES ('Rainbow Trout', 'Grey Ghost streamer', '10"', NOW(), NOW(), 2);
