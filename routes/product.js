const express = require("express");
const router = express.Router();
const productcontrollers = require("../controller/productcontroller");
const cors = require("cors");

// Setup CORS middleware
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

router.use(cors(corsOptions));

router.post("/", cors(corsOptions), productcontrollers.createBarang);
router.put("/:id", cors(corsOptions),productcontrollers.UpdateBarang);
router.get("/", cors(corsOptions),productcontrollers.showBarang);
router.get("/:id",cors(corsOptions), productcontrollers.showById);
router.delete("/:id",cors(corsOptions), productcontrollers.deleteBarang);

module.exports = router;
