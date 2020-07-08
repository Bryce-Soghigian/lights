const LedController = require('ws2801-pi').default;

const amountOfLeds = 160;

const ledController = new LedController(amountOfLeds);


// let color = {
//     red: 255,
//     green: 120,
//     blue: 0,
//   };


async function sleep(ms){
return new Promise((resolve) => {
    setTimeout(resolve,ms)
})
}


async function animationLoopRedGreenBlue() {
/**
 * This function loops through all of the primary colors in an animation 
 * It will loop through all reds then reset,
 * After looping through all reds it will do greens and then blues.
 */
    let ledStripColor = {red:0,green:0,blue:0}
    for(let i =0;i<256;i++){//red loop
        ledStripColor.red += 1
        console.log(ledStripColor.red,`red color at index ${i}`)
        ledController.clearLeds();//Turns all leds off

        //Sets color of the strip and then applys it
        ledController.fillLeds(ledStripColor);
        ledController.show();

        await sleep(30)//its 30ms because javascripts default time is in ms for setTimeout && setInterval
    }

ledStripColor = {red:0,green:0,blue:0}

    for(let i =0;i<256;i++){//green loop
        ledStripColor.green += 1
        console.log(ledStripColor.green,`green color at index ${i}`)
        ledController.clearLeds();
        ledController.fillLeds(ledStripColor);
        ledController.show();
        await sleep(30)
    }
ledStripColor = {red:0,green:0,blue:0}

    for(let i =0;i<256;i++){//blue loop
        ledStripColor.blue += 1
        console.log(ledStripColor.blue,`blue color at index ${i}`)
        ledController.clearLeds();
        ledController.fillLeds(ledStripcolor);
        ledController.show();
        await sleep(30)
    }
    
}

setInterval(() => {
    animationLoopRedGreenBlue()
}, 25620);
