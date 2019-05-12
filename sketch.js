function loadFile() {

}

function saveFile() {

}

function resetFile() {

}

function preload() {
  loadFile();
}

function setup() {
  createCanvas(600, 700);
  spieler = new player(width / 2, height / 2);

  createButtons();

  makeCoins();
}

function draw() {
  background(0);

  buttonTexts();

  spieler.update();
  spieler.edges();
  spieler.show();

  stroke(255);
  line(0, height - boxSize, width, height - boxSize);


  calcUpBenefit();

  for (let i = coins.length - 1; i >= 0; i--) {
    coins[i].show();
    coins[i].update();
    if (coins[i].pos.y > height - boxSize) {
      destroyCoin(i);
    }
    let hit = circleRect(coins[i].pos.x, coins[i].pos.y, coins[i].d, spieler.pos.x, spieler.pos.y, spieler.h, spieler.h);
    if (hit) {
      destroyCoin(i);
      if (random(100) < cc) {
        totalDest += cd * wert;
        currentCoins += cd * wert;
      } else {
        totalDest += wert;
        currentCoins += wert;
      }
    }
  }

  calcUpCosts();

  textSize(24);
  textAlign(LEFT, CENTER);
  text("Münzen gesammelt: " + prettify(totalDest), 0, height - boxSize + 12);
  textAlign(RIGHT, CENTER);
  text("Münzen aktuell: " + prettify(currentCoins), width, height - boxSize + 12);
}

function prettify(value) {
  return round(value * 10) / 10;
}

function keyPressed() {
  setMove(true);
}

function keyReleased() {
  setMove(false);
}

function setMove(b) {
  switch (keyCode) {
    case UP_ARROW:
      return (isUp = b);

    case DOWN_ARROW:
      return (isDown = b);

    case LEFT_ARROW:
      return (isLeft = b);

    case RIGHT_ARROW:
      return (isRight = b);

    case 87:
      return (isUp = b);

    case 83:
      return (isDown = b);

    case 65:
      return (isLeft = b);

    case 68:
      return (isRight = b);
    default:
      return b;
  }
}

function circleRect(cx, cy, radius, rx, ry, rw, rh) {
  // temporary variables to set edges for testing
  let testX = cx;
  let testY = cy;

  // which edge is closest?
  if (cx < rx) testX = rx; // test left edge
  else if (cx > rx + rw) testX = rx + rw; // right edge
  if (cy < ry) testY = ry; // top edge
  else if (cy > ry + rh) testY = ry + rh; // bottom edge

  // get distance from closest edges
  let distX = cx - testX;
  let distY = cy - testY;
  let distance = sqrt((distX * distX) + (distY * distY));

  // if the distance is less than the radius, collision!
  if (distance <= radius) {
    return true;
  }
  return false;
}

function makeCoins() {
  len = 10 + MoreObjectsLevel;
  coins = [];
  for (let i = 0; i < len; i++) coins.push(new Coin(random(width), -100));
}

function destroyCoin(i) {
  coins.splice(i, 1);
  coins.push(new Coin(random(width), 0 - random(100)));
}

function calcUpBenefit() {
  cc = CcLevel;
  cd = 1 + CdLevel;
  spd = 5 + speedLevel;
  minSpeed = 2 + minSpeedLevel;
  maxSpeed = 5 + maxSpeedLevel;
}

function calcUpCosts() {
  CcPrice = CcBasePrice * pow(CcPriceMulti, CcLevel);
  CdPrice = CdBasePrice * pow(CdPriceMulti, CdLevel);
  speedPrice = speedBasePrice * pow(speedPriceMulti, speedLevel);
  minSpeedPrice = minSpeedBasePrice * pow(minSpeedPriceMulti, minSpeedLevel);
  maxSpeedPrice = maxSpeedBasePrice * pow(maxSpeedPriceMulti, maxSpeedLevel);
  MoreObjectsPrice = MoreObjectsBasePrice * pow(MoreObjectsPriceMulti, MoreObjectsLevel);
}