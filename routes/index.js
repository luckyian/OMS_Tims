const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/users");
const storeRoutes = require("./api/store")
const medsRoutes = require("./api/meds")

router.use("/api/bloodsugar", storeRoutes)
router.use("/api/user", userRoutes)
router.use("/api/meds", medsRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
