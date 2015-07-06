# rafl-ui

## About
This is the front-end for the Rafl.me application.  This project consists of a UI layer, and a services API layer (which will provide the data in a RESTful manner).  

## Open Source
The front end of this is open, and can be used to clone or base another front end on.  The API set, however, is not open, and access to it will require an API key.  This application will demonstrate connecting to those APIs.

## Development Team
 - Matt Holloway 
 - Billy Truong
 - Jocelín Zamudio

## TDD
Both the UI and the Service layer are written in a test driven approach.  Test in this layer are written using Jasmine.  To run the test suite, navigate to 
```
<server:port>/test.html
```

## Running the UI
- Clone this repo
```
git clone git@github.com:hollowmatt/rafl-ui.git
```
- From within the folder you cloned the repo to:
  * A simple way to run this app (this how I do it) is (if you have python installed) to run the python HTTP Server.
```
prompt$ python -m SimpleHTTPServer 8000
```
- Using your browser
  * go to http://localhost:8000, this should take you to the index page of the app (if you want to run the tests, navigate to http://localhost:8000/test.html)

