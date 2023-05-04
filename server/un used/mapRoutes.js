const express = require('express')
const router = express.Router()
const mapController = require('./mapContoller')
//const verifyJWT = require("../middleware/verifyJWT")
//router.use(verifyJWT)


router.route('/address')
    .post(mapController.placeAutocomplete)
router.route('/geocode')
    .post(mapController.geocodeAddress)
router.route('/direction')
    .post(mapController.direction)
module.exports = router