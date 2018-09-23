const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const passingObj = {
        burgers: data
      };
      console.log(passingObj);
      res.render("index", passingObj);
    });
});