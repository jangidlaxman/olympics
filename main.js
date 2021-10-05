canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
color1="black";
color2="yellow";
color3="green";
color4="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=2;
ctx.arc(300,200,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=2;
ctx.arc(400,200,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=2;
ctx.arc(250,300,100,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=2;
ctx.arc(350,300,100,0,2*Math.PI);
ctx.stroke();
