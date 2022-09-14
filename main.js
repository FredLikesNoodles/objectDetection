status1 = "";
width1 = "";
height1 = "";
width2 = "";
height2 = "";
function preload(){
    image1 = loadImage("dog_cat.jpg")
}
function setup(){
    canvas = createCanvas(600, 500)
    canvas.center()
    objectDetection = ml5.objectDetector("cocossd", modelLoaded)
    objectDetection.detect(image1, gotResult)
}
function modelLoaded(){
    console.log("Model has been loaded")
    status1 = true;
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}
function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
    }
    width1 = results[0].width;
    height1 = results[0].height;
    width2 = results[1].width;
    height2 = results[1].height;
    console.log(width1, height1, width2, height2)
}
function draw(){
    image(image1, 0, 0, 600, 500)
    fill("red")
    text("Dog",45, 75)
    noFill() 
    stroke("red")
    rect(70, 90, width2, height2 )
    fill("red")
    text("Cat",300, 75)
    noFill() 
    stroke("red")
    rect(300, 90, width1, height1 )
}