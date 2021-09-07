canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
color= blue;
ctx.strokeStyle = color;
 ctx.lineWidth = 5;
 ctx.arc(300,300,40,0,2*Math.PI);
 ctx.stroke();

ctx.beginPath();
color= black;
ctx.strokeStyle = color;
 ctx.lineWidth = 5;
 ctx.arc(300,300,40,0,2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 color= red;
ctx.strokeStyle = color;
 ctx.lineWidth = 5;
 ctx.arc(300,300,40,0,2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 color= yellow;
ctx.strokeStyle = color;
 ctx.lineWidth = 5;
 ctx.arc(300,300,40,0,2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 color= green;
ctx.strokeStyle = color;
 ctx.lineWidth = 5;
 ctx.arc(300,300,40,0,2*Math.PI);
 ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = color;
 ctx.lineWidth = 2;
 ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
 ctx.stroke();
}