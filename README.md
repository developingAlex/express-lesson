# second exercise in NODE, (EXPRESS)


## things covered today;
* installed the import cost extension to vs code to display the file size of things you `require`.
* using methods in the server.get() to act as routes, when this path is hit, run this function, instead of having a single large block of code with if else else else etc.
* request and response are shortened to req and res as per express conventions.
* moved our routes out to their own dedicated file /src/routes/tickets.js (look up docs for express router object (middleware))
* Created an animal 'model' complete with .all method and .find(id) method and used that to return appropriate animal given the user visits localhost:8001/animals/1 for the animal with id of 1 for example
* used the express method .status instead of .writeHead to set the error code to 404 when required.
* Added a create method to the Animal model and a post path
* Added the post parsing Node.js 'body-parser' middleware with `yarn add body-parser` 
* then add it in with `const bodyParser = require('body-parser')`

## things learned

* how to parse querys when sent through in the url, for example
  git commit: ba969d502a392377dad6bd5ce0919c21dd3b2304
  ```
  http://localhost:8001/animals?q=Giraffe
  ```