CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE edusign (
    id INTEGER NOT NULL,
    date_signature DATETIME NOT NULL
);

-- NIVEAU MOYEN ETAPE 3
INSERT INTO edusign (id, date_signature) 
SELECT id, '2024-09-01 09:30:00'
FROM users

-- NIVEAU MOYEN ETAPE 4 
SELECT * 
FROM edusign
ORDER BY date_signature DESC, id ASC

-- NIVEAU MOYEN+ ETAPE 1
select count(*), date_signature
from edusign
group by date_signature;

-- NIVEAU MOYEN+ ETAPE 2
select count(*) as volume, first_name
from edusign A 
inner join users B on A.id = B.id 
where first_name = 'Beatrice'