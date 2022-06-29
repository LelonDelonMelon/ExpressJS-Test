const express = require("express");
const router = express.Router(); //different app

router.use(logger);

//it goes top to bottom
//so make static urls go higher in the hierarchy
router.get("/", (req, res) => {
  console.log(req.query.name); //get data from query string
  res.send("User List");
});
router.get("/new", (req, res) => {
  res.render("users/new", { FirstName: "Test" });
});
router.post("/", (req, res) => {
  //for creating a new user
  // res.send("Create user");
  const isValid = true;
  if (isValid) {
    users.push({ FirstName: req.body.FirstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { FirstName: req.body.FirstName });
  }

  console.log(req.body.FirstName);
  res.send("Hello");
});

router
  .route("/:id")
  .get((req, res) => {
    // dynamic url parameters
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    // for update user with the id
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    // delete given user with ID
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [{ name: "Kyle " }, { name: "Sally" }];

//middleware section Works before the routing
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

//middleware
function logger(req, res, next) {
  console.log(req.originalUrl); //get the url
  next();
}

module.exports = router;
