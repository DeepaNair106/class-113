function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(300,200);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";

}

function draw(){
    image(video, 0 , 0, 600,500);
    tint_color = document.getElementById("colour_name").value;
    tint(tint_color);
    
}



function apply_filter(){}
    

function take_snapshot(){
    save("selfie.png");
}