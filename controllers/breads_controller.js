const express = require(`express`)
const router = express.Router()
const Bread = require(`../models/bread`)

// Get all bread
router.get(`/`, (req, res) => {
    res.render('index', {
        breads: Bread
    })
})

// Get bread by index
router.get(`/:arrayIndex`, (req, res) => {
    const { arrayIndex }= req.params
    res.send(Bread[arrayIndex])
})

module.exports = router