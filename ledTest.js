const LedController = require('ws2801-pi');

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
    //Loop through all te reds
    //Loop through all the greens
    //Loop through all the blues
    let ledStripColor = {red:0,green:0,blue:0}
    for(let i =0;i<256;i++){//red loop
        ledStripColor.red += 1
        console.log(ledStripColor.red,`red color at index ${i}`)
        ledController.fillLeds(ledStripColor)
        ledController.show()

        await sleep(30)
    }

ledStripColor = {red:0,green:0,blue:0}

    for(let i =0;i<256;i++){//green loop
        ledStripColor.green += 1
        console.log(ledStripColor.green,`green color at index ${i}`)
        ledController.fillLeds(ledStripColor)
        ledController.show()
        await sleep(30)
    }
ledStripColor = {red:0,green:0,blue:0}

    for(let i =0;i<256;i++){//blue loop
        ledStripColor.blue += 1
        console.log(ledStripColor.blue,`blue color at index ${i}`)
        ledController.fillLeds(ledStripcolor)
        ledController.show()
        await sleep(30)
    }
    
}

setInterval(() => {
    animationLoopRedGreenBlue()
}, 25620);





//   ledController.fillLeds(color);
//   ledController.show();