
var canvas = new fabric.Canvas("canvas");

player_x= 10;
player_y= 10;

block_image_width = 50;
block_image_height = 50;

var player_object= "";
var block_image_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){

        player_object = Img;

        player_object.scaleToWidth(200);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    })




    function new_image(get_image)){
        fabric.Image.fromURL("get_image", function(Img){
    
            block_image_object = Img;
    
            block_image_object.scaleToWidth(200);
            block_image_object.scaleToHeight(150);
            block_image_object.set({
                top:player_y,
                left:player_x
            })
            canvas.add(block_image_object);
        })






}