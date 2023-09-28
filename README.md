# Consume a 3rd Party API Lab
Some happy cats!

## Introduction

In this lab, you will practice making a request to a 3rd party API to display cat facts in the browser. You will use the EJS template engine to render the data received from the API and create a link to get another cat fact.

## Requirements

1. Create an Express app using Express Generator. Make sure to specify -e to configure the app to use the EJS template engine.

2. Modify the index.ejs template to display a link that says Get a cat fact. This link should send a GET request to http://localhost:3000/cats/fact when clicked.

3. When the /cats/fact route is accessed, the server should make a request to the following endpoint at https://catfact.ninja:
https://catfact.ninja/fact

4. The server should respond by rendering the cat/fact.ejs template with the following:

- The text of the fact received in the API’s response (you’ll need to examine the data that the API returns to be able to access this).
- A link that says Get another cat fact!. Clicking this link should send a GET request to http://localhost:3000/cats/fact, effectively refreshing the page to display a new cat fact.

## Instructions

1. Set up your Express app:

- Use Express Generator to create the app: express -e cat-fact-app
- Navigate into the newly created directory: cd cat-fact-app
- Install dependencies: npm install

2. Modify the index.ejs template:

- Open views/index.ejs in your text editor.
- Add a link with the text Get a cat fact that points to the route /cats/fact.

3. Create the /cats/fact route:

- In app.js, create a GET route for /cats/fact.
- In the route handler, make a GET request to the API endpoint https://catfact.ninja/fact using a library like axios or fetch.

4. Render the cat/fact.ejs template:

- Create a new file views/cat/fact.ejs.
- In this template, display the text of the cat fact received from the API response.
- Add a link with the text Get another cat fact! that points to the route /cats/fact.

5. Handle the request and response:

- In the route handler for /cats/fact, process the API response and extract the cat fact text.
- Render the cat/fact.ejs template with the cat fact data.

6. Test your app:

- Start the server: npm start
- Open your browser and go to http://localhost:3000.
- Click on the Get a cat fact link and verify that you see a cat fact displayed on the page.
- Click on the Get another cat fact! link to fetch and display a new cat fact.