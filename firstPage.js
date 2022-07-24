const backgroundColors = [0xC0392B, 0x884EA0, 0x2471A3, 0x17A589, 0xF39C12, 0xA6ACAF];
let soundTextvalue = "Sound:On";
let soundOn = true;
//let soundOf = false;


if (localStorage.hasOwnProperty("sound")) {

    soundOn = localStorage.getItem("sound");
    if(soundOn == "on"){
        soundTextvalue = "Sound:On";
    }
    else{
        soundTextvalue = "Sound:Off";
    }
} else {
    soundOn = "on";
    localStorage.setItem("sound", soundOn);
}


localStorage.setItem("TimeD",false)

let app = new PIXI.Application({
    width: 240,
    height: 320,
    backgroundColor:  backgroundColors[Math.floor(Math.random()*backgroundColors.length)]

});

document.body.appendChild(app.view);


const firstTextStyle = new PIXI.TextStyle({
    align: "center",
    fill: "white",
    fontSize: 30,
   // wordWrap: true,
    //wordWrapWidth: 130
});
const firstText = new PIXI.Text('IBI', firstTextStyle);
firstText.anchor.set(0.5, 0.5);
firstText.x = 200;
firstText.y = 20;
app.stage.addChild(firstText);  


const title = new PIXI.Sprite.from("/sprites/Kakashi.png");
title.anchor.set(0.5);
title.scale.set(0.3, 0.3);
title.x = 120;
title.y = 140;

app.stage.addChild(title);


app.ticker.add((delta) => {
    title.rotation += 0.06 * delta;
 

});

const soundTextStyle = new PIXI.TextStyle({
    align: "left",
    fill: "white",
    fontSize: 15
});

const TextStyle = new PIXI.TextStyle({
    align: "center",
    fill: "white",
    fontSize: 20,
   // wordWrap: true,
    //wordWrapWidth: 130
});
const Text = new PIXI.Text('Press any key to play', TextStyle);
Text.anchor.set(0.5, 0.5);
Text.x = 120;
Text.y = 280;
app.stage.addChild(Text);
const soundText = new PIXI.Text(soundTextvalue, soundTextStyle);
soundText.x = 5;
soundText.y = 300;
app.stage.addChild(soundText);

function soundToggle(){
   
    if(soundOn == "on"){
        soundText.text = "Sound:off"
        soundOn = "off";
    }
    else{
        
        soundText.text = "Sound:on"
        soundOn = "on";
    }
    localStorage.setItem("sound", soundOn);
    /*else {
        soundOn = "on";
        localStorage.setItem("sound", soundOn);
    }*/
    //localStorage.setItem("sound", soundOn);
}

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown(et) {
    
    if (et.code == "Enter") {
        startGame();
    }
    else
    soundToggle();
    

};

function startGame() {
    window.open("index.html", "_self");
}