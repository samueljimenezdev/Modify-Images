var image, canvas

var img = new SimpleImage(200,200);
for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    if (x < img.getWidth()/2){
        px.setBlue(255);
    }
    else {
        if (y < img.getHeight()/2){
            px.setGreen(255);
        }
    }
}
print (img);

function upload(){
    canvas = document.getElementById("miCanvas");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

function makeGray(){
    for (var pixel of image.values()){
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var grayImage = image;
    console.log(grayImage);
    grayImage.drawTo(canvas);
}