const express = require("express");
const router = express.Router();
const { ensureAuthenticated, isAdmin } = require("../middleware/checkAuth");


// Welcome Route
// localhost:8000
router.get("/", (req, res) => {
  res.send("welcome");
});

// Dashboard
// localhost:8000/dashboard

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
});

module.exports = router;
