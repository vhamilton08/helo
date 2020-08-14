INSERT INTO users (username, password, profile_pic, password)
VALUES
($1, $2, $3)
RETURNING *;
