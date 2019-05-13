class Button {
  constructor(x, y, fun) {
    this.b = createButton();
    this.b.position(x, y);
    this.b.mousePressed(fun);
    this.b.size(200, 25);
  }

  text(text) {
    this.b.html(text);
  }
}

function createButtons() {
  butt[0] = new Button(0, height - 75, moreCoins);
  butt[1] = new Button(0, height - 50, slowerCoins);
  butt[2] = new Button(0, height - 25, fasterCoins);
  butt[3] = new Button(200, height - 75, fasterPlayer);
  butt[4] = new Button(200, height - 50, critChance);
  butt[5] = new Button(200, height - 25, critDmg);
  butt[6] = new Button(400, height - 75, moreValue);
  butt[7] = new Button(400, height - 50, selfMove);
  butt[8] = new Button(400, height - 25, fasterMove);
  butt[100] = new Button(0, height - 100, saveFile);
  butt[101] = new Button(200, height - 100, loadFile);
  butt[102] = new Button(400, height - 100, resetFile);
}

function buttonTexts() {
  //Objects
  if (MoreObjectsPrice <= currentCoins) butt[0].text('+1 Falling Coin, buy now!');
  else butt[0].text('Amount: ' + (MoreObjectsLevel+10) + '; Cost: ' + prettify(MoreObjectsPrice, 3));

  //MinSpeed
  if (minSpeed >= maxMinSpeed) butt[1].text('Max Speed reached: ' + minSpeed);
  else if (minSpeed >= maxSpeed) butt[1].text('Buy maxSpeed first!');
  else if (minSpeedPrice <= currentCoins) butt[1].text('+1 minSpeed, buy now!');
  else butt[1].text('MinSpeed: ' + minSpeed + '; Cost: ' + prettify(minSpeedPrice, 3));

  //MaxSpeed
  if (maxSpeed >= maxMaxSpeed) butt[2].text('Max Speed reached: ' + maxSpeed);
  else if (maxSpeedPrice <= currentCoins) butt[2].text('+1 maxSpeed, buy now!');
  else butt[2].text('MaxSpeed: ' + maxSpeed + '; Cost: ' + prettify(maxSpeedPrice, 3));

  //Player Speed
  if (spd >= maxSpd) butt[3].text('Max Player Speed reached: ' + spd);
  else if (speedPrice <= currentCoins) butt[3].text('+1 Player Speed, buy now!');
  else butt[3].text('Speed: ' + spd + '; Cost: ' + prettify(speedPrice, 3));

  //Crit Chance
  if (cc >= maxCc) butt[4].text('Max Crit% reached: ' + cc + "%");
  else if (CcPrice <= currentCoins) butt[4].text('+1% Crit Chance, buy now!');
  else butt[4].text('Crit%: ' + cc + '; Cost: ' + prettify(CcPrice, 3));

  //Crit Damage
  if (cd >= maxCd) butt[5].text('Max Crit Multi reached: x' + cd);
  else if (CdPrice <= currentCoins) butt[5].text('+2x Crit Damage, buy now!');
  else butt[5].text('Crit Multi: ' + cd + '; Cost: ' + prettify(CdPrice, 3));
  
  //Base Value
  if (ValuePrice <= currentCoins) butt[6].text('More Base Value, buy now!');
  else butt[6].text('Base Gain: ' + prettify(value, 1) + '; Cost: ' + prettify(ValuePrice, 1));
  
  //Self Moving
  if (selfMoving) butt[7].text('Automatic moving enabled!');
  else if (SelfMovingPrice <= currentCoins) butt[7].text('Enable Automatic Moving!');
  else butt[7].text('Self Moving; Cost: ' + prettify(SelfMovingPrice, 3));
  
  //Faster Self Moving
  if (!selfMoving) butt[8].text('Buy Self Moving First!');
  else if (FasterMovingLevel >= MaxFasterMovingLevel) butt[8].text('Max Auto Speed reached!');
  else if (FasterMovingPrice <= currentCoins) butt[8].text('Faster Self Moving, buy now!');
  else butt[8].text('Auto Spd: ' + movSpeed*100 + '%; Cost: ' + prettify(FasterMovingPrice, 1));
  
  
  butt[100].text('Save Game');
  butt[101].text('Load Game');
  butt[102].text('Reset Game');
}

function moreCoins() {
  if (MoreObjectsPrice < currentCoins) {
    currentCoins -= MoreObjectsPrice;
    MoreObjectsLevel++;
    makeCoins();
  }
}

function slowerCoins() {
  if (minSpeedPrice < currentCoins && minSpeed < maxSpeed && minSpeed < maxMinSpeed) {
    currentCoins -= minSpeedPrice;
    minSpeedLevel++;
  }
}

function fasterCoins() {
  if (maxSpeedPrice < currentCoins && maxSpeed >= minSpeed && maxSpeed < maxMaxSpeed) {
    currentCoins -= maxSpeedPrice;
    maxSpeedLevel++;
  }
}

function fasterPlayer() {
  if (speedPrice < currentCoins && spd < maxSpd) {
    currentCoins -= speedPrice;
    speedLevel++;
  }
}

function critChance() {
  if (CcPrice < currentCoins && cc < maxCc) {
    currentCoins -= CcPrice;
    CcLevel++;
  }
}

function critDmg() {
  if (CdPrice < currentCoins && cd < maxCd) {
    currentCoins -= CdPrice;
    CdLevel++;
  }
}

function moreValue() {
  if (ValuePrice < currentCoins) {
    ValueLevel++;
    currentCoins -= ValuePrice;
  }
}

function selfMove() {
  if (!selfMoving && SelfMovingPrice < currentCoins && SelfMovingLevel == 0) {
    selfMoving = true;
    SelfMovingLevel++;
    currentCoins -= SelfMovingPrice;
  }
}

function fasterMove() {
 if (FasterMovingPrice < currentCoins && FasterMovingLevel < MaxFasterMovingLevel) {
   FasterMovingLevel++;
   currentCoins -= FasterMovingPrice;
 }
}
