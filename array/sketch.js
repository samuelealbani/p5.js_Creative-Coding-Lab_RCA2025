let xPos = [50, 100, 250];
let y;

let speed = 2;

function setup() {
  createCanvas(400, 400);
  y = height/2;
 
  console.log( xPos );
  console.log( xPos.length ) // returns the number of elements
  console.log( xPos[2] ); //access the single value by index
  for(let i = 0; i < xPos.length; i++){
    console.log(i)
  }

  xPos.push(295); // adding a new value at the end
  console.log('now xPos is:', xPos, 'and has', xPos.length, 'elements' )
  for(let i = 0; i < xPos.length; i++){
    console.log(i)
  }

  xPos.pop(); // removes the last one
  console.log('now xPos is:', xPos, 'and has', xPos.length, 'elements' )
    for(let i = 0; i < xPos.length; i++){
    console.log(i)
  }
}

function draw() {
  background(220);

  for(let i = 0; i < xPos.length; i++){
    circle(xPos[i], y, 40)
  }
}
