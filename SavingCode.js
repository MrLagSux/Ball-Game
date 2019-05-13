function loadFile() {
  let currCoin = localStorage.getItem("CurrCoins");
  if (currCoin != null)
    currentCoins = parseFloat(currCoin);
  let totalD = localStorage.getItem("totalDes");
  if (totalD != null)
    totalDest = parseFloat(totalD);
  let coinL = localStorage.getItem("CoinLevel");
  if (coinL != null)
    MoreObjectsLevel = parseInt(coinL);
  let misL = localStorage.getItem("minSpeedLevel");
  if (misL != null)
    minSpeedLevel = parseInt(misL);
  let masL = localStorage.getItem("maxSpeedLevel");
  if (masL != null)
    maxSpeedLevel = parseInt(masL);
  let ps = localStorage.getItem("PlayerSpeed");
  if (ps != null)
    speedLevel = parseInt(ps);
  let crc = localStorage.getItem("CritChance");
  if (crc != null)
    CcLevel = parseInt(crc);
  let crd = localStorage.getItem("CritDmg");
  if (crd != null)
    CdLevel = parseInt(crd);
  let val = localStorage.getItem("Val");
  if (val != null)
    ValueLevel = parseInt(val);
  let selfm = localStorage.getItem("SelfMv");
  if (selfm != null)
    SelfMovingLevel = parseInt(selfm);
  let fasmv = localStorage.getItem("FasterMv");
  if (fasmv != null)
    FasterMovingLevel = parseInt(fasmv);

}

function saveFile() {
  localStorage.setItem("CurrCoins", currentCoins);
  localStorage.setItem("totalDes", totalDest);
  localStorage.setItem("CoinLevel", MoreObjectsLevel);
  localStorage.setItem("minSpeedLevel", minSpeedLevel);
  localStorage.setItem("maxSpeedLevel", maxSpeedLevel);
  localStorage.setItem("PlayerSpeed", speedLevel);
  localStorage.setItem("CritChance", CcLevel);
  localStorage.setItem("CritDmg", CdLevel);
  localStorage.setItem("Val", ValueLevel);
  localStorage.setItem("SelfMv", SelfMovingLevel);
  localStorage.setItem("FasterMv", FasterMovingLevel);
  console.log("Successfully saved!");
}

function resetFile() {
  speedLevel = 0;
  CcLevel = 0;
  CdLevel = 0;
  minSpeedLevel = 0;
  maxSpeedLevel = 0;
  MoreObjectsLevel = 0;
  ValueLevel = 0;
  SelfMovingLevel = 0;
  selfMoving = false;
  spieler.acc.mult(0);
  spieler.vel.mult(0);
  FasterMovingLevel = 0;
  currentCoins = 0;
  totalDest = 0;

  makeCoins();
}
