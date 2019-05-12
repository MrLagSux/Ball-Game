//Coin amount
let currentCoins = 0;
let totalDest = 0;

//Upgrade "Coin Value"
let BaseValuePrice = 250;
let ValueLevel = 0;
let ValuePriceMulti = 2.01;
let ValuePrice;
let value;

//Upgrade "More Coins"
let MoreObjectsBasePrice = 10;
let MoreObjectsLevel = 0;
let MoreObjectsPriceMulti = 1.05;
let MoreObjectsPrice;

//Upgrade "minSpeed for Coins"
let minSpeed = 2;
let maxMinSpeed = 40;
let minSpeedBasePrice = 25;
let minSpeedLevel = 0;
let minSpeedPriceMulti = 1.1;
let minSpeedPrice;

//Upgrade "maxSpeed for Coins"
let maxSpeed = 5;
let maxMaxSpeed = 50;
let maxSpeedBasePrice = 50;
let maxSpeedLevel = 0;
let maxSpeedPriceMulti = 1.15;
let maxSpeedPrice;

//Upgrade "Player Speed"
let spd = 5;
let maxSpd = 25;
let speedBasePrice = 50;
let speedLevel = 0;
let speedPriceMulti = 1.25;
let speedPrice;

//Upgrade "Crit Chance"
let cc = 0;
let maxCc = 50;
let CcBasePrice = 75;
let CcLevel = 0;
let CcPriceMulti = 1.31;
let CcPrice;

//Upgrade "Crit Damage"
let cd = 0;
let maxCd = 100;
let CdBasePrice = 100;
let CdLevel = 0;
let CdPriceMulti = 1.32;
let CdPrice;


let isLeft, isRight, isDown, isUp;
let selfMoving = true;

let coins = [];
let butt = [];

let boxSize = 150;
let LongNum = false;
let ScientNum = true;
