let slider = 0;
let size = 400;

let bezierP1 = [[250, 57], [306, 141], [341, 210], [300, 270]];
let bezierP2 = [[300, 75], [350, 159], [341, 256], [283, 301]];
let bezierP3 = [[324, 119], [361, 202], [311, 278], [241, 304]];
let bezierP4 = [[300, 150], [325, 223], [282, 271], [213, 284]];

function setup() {
  slider = createSlider(0, 600, 400);
}

function draw() {
  createCanvas(size, size);
  background("white");
  size = slider.value();
  fill("brown");
  quad(248/400*size, 285/400*size, (200-48)/400*size, 285/400*size, (200-61)/400*size, 400/400*size, 261/400*size, 400/400*size);
  fill("white");
  bezier(248/400*size, 285/400*size, 235/400*size, 320/400*size, 238/400*size, 364/400*size, 261/400*size, 400/400*size);
  bezier((200-48)/400*size, 285/400*size, (200-35)/400*size, 320/400*size, (200-38)/400*size, 364/400*size, (200-61)/400*size, 400/400*size);  
  fill("green");
  noStroke();
  circle(size/2, 50/400*size, 100/400*size);
  stroke("green");
  bezier(225/400*size, 291/400*size, 210/400*size, 304/400*size, 190/400*size, 304/400*size, 175/400*size, 291/400*size);
  Tree();
  quad(150/400*size, 57/400*size, 250/400*size, 56/400*size, 331/400*size, 218/400*size, 68/400*size, 221/400*size);
  triangle(93/400*size, 120/400*size, 153/400*size, 68/400*size, 80/400*size, 208/400*size);
  triangle(259/400*size, 78/400*size, 306/400*size, 140/400*size, 320/400*size, 202/400*size);
  quad(63/400*size, 216/400*size, 336/400*size, 212/400*size, 291/400*size, 275/400*size, 110/400*size, 275/400*size); 
  quad(120/400*size, 270/400*size, 285/400*size, 268/400*size, 224/400*size, 291/400*size, 174/400*size, 291/400*size); 
  noStroke();
}

function Tree(){
for (i = 0; i < 4; i++){
  let x1 = bezierP1[i][0] / 400 * size;
  let y1 = bezierP1[i][1] / 400 * size;
  let x2 = bezierP2[i][0] / 400 * size;
  let y2 = bezierP2[i][1] / 400 * size;
  let x3 = bezierP3[i][0] / 400 * size;
  let y3 = bezierP3[i][1] / 400 * size;
  let x4 = bezierP4[i][0] / 400 * size;
  let y4 = bezierP4[i][1] / 400 * size;
  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  bezier(size - x1, y1, size-x2, y2, size-x3, y3, size-x4, y4);
}
}
