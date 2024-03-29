const express = require("express")
const router = express.Router()
const MENU = require('../models/Menu')

router.get('/', async (req, res) => {
    try {
        let data = await MENU.find()
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        let detail = req.body
        let data1 = new MENU(detail)
        let saveddata = await data1.save()
        res.status(200).json(saveddata)

    }
    catch (err) {
        console.log(err)
    }
})

module.exports = router