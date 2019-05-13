function preload() {
  if (localStorage.getItem("CurrCoins") != null) loadFile();
  if (SelfMovingLevel == 1) selfMoving = true;
}

function setup() {
  createCanvas(800, 800);
  spieler = new player(width / 2, height / 2);

  createButtons();

  makeCoins();

  calcUpCosts();
  calcUpBenefit();
}

function draw() {
  background(0);

  buttonTexts();

  spieler.update();
  spieler.edges();
  spieler.show();

  strokeWeight(0.1);
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
        totalDest += cd * value;
        currentCoins += cd * value;
      } else {
        totalDest += value;
        currentCoins += value;
      }
    }
  }

  calcUpCosts();

  textSize(22);
  textAlign(LEFT, CENTER);
  text("Total Coins: " + prettify(totalDest, 3), 0, height - boxSize + 12);
  textAlign(RIGHT, CENTER);
  text("Current Coins: " + prettify(currentCoins, 3), width, height - boxSize + 12);

  //60 FPS times 60 seconds per minute * 5 minutes
  if (frameCount % (60 * 60 * 5) == 0) saveFile();
}

function keyPressed() {
  setMove(true);
}

window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

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
  if (CcLevel > maxCc) CcLevel = maxCc;
  cc = CcLevel;
  if (CdLevel > maxCd) CdLevel = maxCd;
  cd = 1 + CdLevel;
  if (speedLevel > maxSpd) speedLevel = maxSpd;
  spd = 5 + speedLevel;
  if (minSpeedLevel > maxMinSpeed) minSpeedLevel = maxMinSpeed;
  minSpeed = 2 + minSpeedLevel;
  if (maxSpeedLevel > maxMaxSpeed) maxSpeedLevel = maxMaxSpeed;
  maxSpeed = 5 + maxSpeedLevel;
  value = pow(1.1, ValueLevel);
  if (FasterMovingLevel > MaxFasterMovingLevel) FasterMovingLevel = MaxFasterMovingLevel;
  movSpeed = 5 * (FasterMovingLevel + 1) / 100;
}

function calcUpCosts() {
  CcPrice = CcBasePrice * pow(CcPriceMulti, CcLevel);
  CdPrice = CdBasePrice * pow(CdPriceMulti, CdLevel);
  speedPrice = speedBasePrice * pow(speedPriceMulti, speedLevel);
  minSpeedPrice = minSpeedBasePrice * pow(minSpeedPriceMulti, minSpeedLevel);
  maxSpeedPrice = maxSpeedBasePrice * pow(maxSpeedPriceMulti, maxSpeedLevel);
  MoreObjectsPrice = MoreObjectsBasePrice * pow(MoreObjectsPriceMulti, MoreObjectsLevel);
  ValuePrice = BaseValuePrice * pow(ValuePriceMulti, ValueLevel);
  FasterMovingPrice = FasterMovingBasePrice * pow(FasterMovingPriceMulti, FasterMovingLevel);
}

function prettify(value, digits) {
  if (value < 999) return round(value * 10) / 10;
  if (ScientNum) {
    let l = log(value) / log(10);
    let rl = floor(l);
    let d = pow(10, digits);
    return round(pow(10, l - rl) * d) / d + "e" + rl;
  }
  return round(value * 10) / 10;
}
