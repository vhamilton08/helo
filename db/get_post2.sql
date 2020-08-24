SELECT title, img, content, username, profile_pic FROM posts p 
JOIN users u ON p.author_id = u.id
WHERE p.id = 1