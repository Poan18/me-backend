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

INSERT INTO weeks (week, content) VALUES( 1, 'Github
Länk till applikationens GitHub repo: https://github.com/Poan18/me-appGitHub repo


This project was bootstrapped with https://github.com/facebook/create-react-app.

Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`npm test`

Launches the test runner in the interactive watch mode.
See the section about https://facebook.github.io/create-react-app/docs/running-tests for more information.

`npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about https://facebook.github.io/create-react-app/docs/deployment for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More

You can learn more in the https://facebook.github.io/create-react-app/docs/getting-started.

To learn React, check out the React documentation https://reactjs.org/.

Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

`npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify');

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

INSERT INTO weeks (week, content) VALUES( 3, 'DevOps är som sagt helt nytt för mig så hela kursmomenten var som att leka runt i en skugga, man var aldrig säker på att man gjorde på rätt sätt. Det var helt enkelt att pröva sig fram och hoppas på det bästa.

API-delen var nog det minst krångligt då man behövde inte flytta filerna så särkilt mycket.

Frontend delen var lite mer bökig då det kom fram en mängd med olika problem. En av problemen var att under utvecklingen skickade jag cookies som fungerade fint med hjälp av en proxy man sätter i package.json filen. Tyvärr så brukar man inte använda denna proxy i produktion vilket gjorde att jag behövde komma på en annan lösning. Efter mycket experiment, klurande och läsning av nginx dokumentation så lyckades jag lösa detta genom att sätta en proxy med hjälp av nginx.

En av de största lärdomarna är att det inte var så himla svårt att lägga upp en officiell webbplats, som till och med har certifikat! Sålänge man våga experimentera och pröva sig fram så kan man fixa det och även komma på roliga funktioner som en officiell server erbjuder.');

INSERT INTO weeks (week, content) VALUES( 4, 'Mina tre use-cases för denna veckan blev:

1. Testar pathen "/index" genom att kolla korrekt titel och url

2. Testar pathen "/register" genom att klicka på "Registrera" knappen i navbaren och sedan kolla så att korrekt H2-element och URL visas.

3. Testar pathen "/login" genom att klicka på "Logga In" knappen i navbaren och sedan kolla så att korrekt H2-element och URL visas.');
