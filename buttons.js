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
  butt[100] = new Button(0, height - 100, saveFile);
  butt[101] = new Button(200, height - 100, loadFile);
  butt[102] = new Button(400, height - 100, resetFile);
}

function buttonTexts() {
  if (MoreObjectsPrice <= currentCoins) butt[0].text('+1 Objekt, jetzt kaufen!');
  else butt[0].text('Anzahl: ' + MoreObjectsLevel + '; Kosten: ' + prettify(MoreObjectsPrice));
  if (minSpeed >= maxMinSpeed) butt[1].text('Max Speed erreicht: ' + minSpeed);
  else if (minSpeed >= maxSpeed) butt[1].text('Erst maxSpeed kaufen!');
  else if (minSpeedPrice <= currentCoins) butt[1].text('+1 minSpeed, jetzt kaufen!');
  else butt[1].text('MinSpeed: ' + minSpeed + '; Kosten: ' + prettify(minSpeedPrice));
  if (maxSpeed >= maxMaxSpeed) butt[2].text('Max Speed erreicht: ' + maxSpeed);
  else if (maxSpeedPrice <= currentCoins) butt[2].text('+1 maxSpeed, jetzt kaufen!');
  else butt[2].text('MaxSpeed: ' + maxSpeed + '; Kosten: ' + prettify(maxSpeedPrice));
  if (spd >= maxSpd) butt[3].text('Max Player Speed erreicht: ' + spd);
  else if (speedPrice <= currentCoins) butt[3].text('+1 Player Speed, jetzt kaufen!');
  else butt[3].text('Speed: ' + spd + '; Kosten: ' + prettify(speedPrice));
  if (cc >= maxCc) butt[4].text('Max Crit Chance erreicht: ' + cc + "%");
  else if (CcPrice <= currentCoins) butt[4].text('+1% Crit Chance, jetzt kaufen!');
  else butt[4].text('Crit%: ' + cc + '; Kosten: ' + prettify(CcPrice));
  if (cd >= maxCd) butt[5].text('Max Crit Multi erreicht: x' + cd);
  else if (CdPrice <= currentCoins) butt[5].text('+2x Crit Damage, jetzt kaufen!');
  else butt[5].text('Crit Multi: ' + cd + '; Kosten: ' + prettify(CdPrice));

  butt[100].text('Spielstand speichern');
  butt[101].text('Spielstand laden');
  butt[102].text('Spielstand zurücksetzen');
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