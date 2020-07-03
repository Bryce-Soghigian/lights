const router = require('express').Router();
const {hexToRgb} = require("../../utils/helpers.js")
// const LedController = require('ws2801-pi').default;

// async function wait(ms) {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
 
  
router.get("/:color",(req,res) => {
    let color = req.params.color;
    color = "#" + color
    console.log(color,"COLOR in hex")
    let results = hexToRgb(color)
    //led logic 
    // let colorObj = {red:results[0],green:results[1],blue:results[2]}
    // const amountOfLedsOnStrip = 100;
    // const ledController = new LedController(amountOfLedsOnStrip);
    // //Set color of strip
    // ledController.fillLeds(colorObj)
    // ledController.show();






    // await wait(30)
    if(results !== null && color.length > 0){
        res.status(200).json(results)
    }else{
        res.status(500).json({message:"Error with the request or the server"})
    }

})

module.exports = router