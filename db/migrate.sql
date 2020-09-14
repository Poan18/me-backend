DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

DROP TABLE IF EXISTS weeks;

CREATE TABLE IF NOT EXISTS weeks (
    week INT PRIMARY KEY,
    content TEXT NOT NULL
);

INSERT INTO weeks (week, content) VALUES( 1, '   Mitt namn är Pontus Andersson, när jag föddes var det storm och vind som härjade runtomkring Karlskrona. Vägarna var blockerade av stora träd som stoppade trafiken från att rulla som vanligt. Detta resulterade till att jag tillkom som en ren överranskning till alla släktingar som hade inte möjlighet till att ta emot ett samtal. Jag brukar höra att när jag föddes, uppstod ett så kallat "Ronja rövadotter väder".

Jag föddes i Karlskrona och växte upp vid ett litet område norr om Rödeby vid namn Bergtorp(f.d Rumpetorp). Under grundskolan gick jag på Strömsbergs skola som nu är en friskola, efter en stor strid om att behålla skolan efter att Karlskronas kommun hade beslutat att de skulle lägga ner den. Skolan stödjer dock bara upp tills årskurs 6. Mellan årskurs 6-9 gick jag vid Rödebyskolan. Vid Gymnasiet gick jag Teknik med inriktning Media- och informationsteknik på Ehrenvärdska gymnasiet. Efter det började jag studera Webbprogrammering vid Blekinges Tekniska Högskola hösten år 2018.
');

INSERT INTO weeks (week, content) VALUES( 2, 'Github repo:
https://github.com/Poan18/me-backend/

Available commands:

Install dependencies:
npm install

Create database from project folder, migrate.sql contain the correct table structure:
cd db
sqlite3 texts.sqlite
.read migrate.sql
.exit

Start the server:
npm start
View the website at: http://localhost:1337');
