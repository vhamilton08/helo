CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
)

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INTEGER REFERENCES users(id)
)

ALTER TABLE users
ALTER password
TYPE TEXT

-- EXAMPLE LOGIN
-- INSERT INTO users(username, password, profile_pic)
-- VALUES
-- ('harrypotter1', 'imawizard', 'http://wallpup.com/wp-content/uploads/2013/03/Harry-Potter-Wallpaper-HD.jpg'

-- INSERT INTO posts(title, img, content, author_id)
-- VALUES
-- ('New Wand', 'https://i.pinimg.com/736x/2f/9c/dc/2f9cdc28ecba937621baecc485d0bac4.jpg', 'Hey guys check out my new wand', 1) 
