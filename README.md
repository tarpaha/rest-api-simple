# rest-api-simple
Simplest Rest API service on NodeJS

## How to use
- Start server from /server folder with "npm start"
- Start client from /client folder with "npm start"
- Go to localhost:4000

## What happens
Server starts on localhost:3000 and provides API:
- GET /messages will return all messages
- POST /messages will create new message with content from 'text' request parameter

Client starts on localhost:4000
- on page load it requests all messages from the server
