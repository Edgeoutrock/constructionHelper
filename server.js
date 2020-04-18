const express = require("express");
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://changeauthtoke.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'mTAKNq7tCvkGS6WkPZl9RbNwFc5mwQc2',
  issuer: `https://changeauthtoke.auth0.com/`,
  algorithms: ['RS256']
});


app.post('/', checkJwt, (req, res) => {
 // const {title, description} = req.body;
  
  res.status(200).sendFile(path.join(__dirname, "../client/build/index.html");
});

// insert a new answer to a question
app.post('/answer/:id', checkJwt, (req, res) => {
  const {answer} = req.body;

  const question = questions.filter(q => (q.id === parseInt(req.params.id)));
  if (question.length > 1) return res.status(500).send();
  if (question.length === 0) return res.status(404).send();

  question[0].answers.push({
    answer,
    author: req.user.name,
  });

  res.status(200).send();
});
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
