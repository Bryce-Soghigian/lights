const router = require('express').Router();
const {hexToRgb} = require("../../utils/helpers.js")

router.get("/:color",(req,res) => {
    let color = req.params.color;
    color = "#" + color
    console.log(color,"COLOR in hex")
    let results = hexToRgb(color)
    let resultsObject = {
        red:results[0],
        green:results[1],
        blue:results[2]

    }
    if(results !== null && color.length > 0){
        res.status(200).json(resultsObject)
    }else{
        res.status(500).json({message:"Error with the request or the server"})
    }

})

module.exports = router