const express = require('express')
const router = express.Router()
const  {createauction_get , createauction_post} = require("../../controllers/seller/create_auction")

router.get("/:seller",createauction_get )
      .post("/:seller", createauction_post)

module.exports= router