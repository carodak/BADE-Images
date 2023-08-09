/************************ 
 * Bade-Images-Pre Test *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'BADE-Images-Pre';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
/* 
Use danfos to convert the data into dataframe
We will be able to make calculations on the data more easily
and in a clearer way for a future reading of the code.
The calculations are also similar to those with Python and Pandas,
so it is less work.
*/

var danfosUrl = 'resources/bundle.min.js';


function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

dynamicallyLoadScript(danfosUrl);
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(langRoutineBegin());
flowScheduler.add(langRoutineEachFrame());
flowScheduler.add(langRoutineEnd());
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(instr2RoutineBegin());
flowScheduler.add(instr2RoutineEachFrame());
flowScheduler.add(instr2RoutineEnd());
const practicesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practicesLoopBegin(practicesLoopScheduler));
flowScheduler.add(practicesLoopScheduler);
flowScheduler.add(practicesLoopEnd);
flowScheduler.add(readyRoutineBegin());
flowScheduler.add(readyRoutineEachFrame());
flowScheduler.add(readyRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/NN_ring_img2.png', 'path': 'stimuli/NN_ring_img2.png'},
    {'name': 'stimuli/strawberry_img3.png', 'path': 'stimuli/strawberry_img3.png'},
    {'name': 'bundle.min.js', 'path': 'bundle.min.js'},
    {'name': 'stimuli/YY_book_img1.png', 'path': 'stimuli/YY_book_img1.png'},
    {'name': 'stimuli/airplane_img3.png', 'path': 'stimuli/airplane_img3.png'},
    {'name': 'stimuli/YY_windmill_img2.png', 'path': 'stimuli/YY_windmill_img2.png'},
    {'name': 'stimuli/NN_snake_img1.png', 'path': 'stimuli/NN_snake_img1.png'},
    {'name': 'stimuli/saw_img3.png', 'path': 'stimuli/saw_img3.png'},
    {'name': 'stimuli/YY_windmill_img1.png', 'path': 'stimuli/YY_windmill_img1.png'},
    {'name': 'BADEImgConditions_Eng.csv', 'path': 'BADEImgConditions_Eng.csv'},
    {'name': 'stimuli/YN_bat_img2.png', 'path': 'stimuli/YN_bat_img2.png'},
    {'name': 'stimuli/YN_iron_img1.png', 'path': 'stimuli/YN_iron_img1.png'},
    {'name': 'stimuli/YY_carrot_img1.png', 'path': 'stimuli/YY_carrot_img1.png'},
    {'name': 'stimuli/iron_img3.png', 'path': 'stimuli/iron_img3.png'},
    {'name': 'stimuli/NN_turkey_img2.png', 'path': 'stimuli/NN_turkey_img2.png'},
    {'name': 'stimuli/swing set_img3.png', 'path': 'stimuli/swing set_img3.png'},
    {'name': 'stimuli/NN_palm tree_img1.png', 'path': 'stimuli/NN_palm tree_img1.png'},
    {'name': 'stimuli/YY_ballerina_img2.png', 'path': 'stimuli/YY_ballerina_img2.png'},
    {'name': 'stimuli/crown_img3.png', 'path': 'stimuli/crown_img3.png'},
    {'name': 'stimuli/YY_rocket_img1.png', 'path': 'stimuli/YY_rocket_img1.png'},
    {'name': 'stimuli/NY_sunflower_img1.png', 'path': 'stimuli/NY_sunflower_img1.png'},
    {'name': 'stimuli/YN_astronaut_img1.png', 'path': 'stimuli/YN_astronaut_img1.png'},
    {'name': 'stimuli/NY_clown_img1.png', 'path': 'stimuli/NY_clown_img1.png'},
    {'name': 'stimuli/dress_img3.png', 'path': 'stimuli/dress_img3.png'},
    {'name': 'stimuli/fishbowl_img3.png', 'path': 'stimuli/fishbowl_img3.png'},
    {'name': 'stimuli/NY_mouse_img2.png', 'path': 'stimuli/NY_mouse_img2.png'},
    {'name': 'stimuli/sailboat_img3.png', 'path': 'stimuli/sailboat_img3.png'},
    {'name': 'stimuli/rocket_img3.png', 'path': 'stimuli/rocket_img3.png'},
    {'name': 'stimuli/NN_beehive_img2.png', 'path': 'stimuli/NN_beehive_img2.png'},
    {'name': 'stimuli/sunflower_img3.png', 'path': 'stimuli/sunflower_img3.png'},
    {'name': 'stimuli/YN_sailboat_img2.png', 'path': 'stimuli/YN_sailboat_img2.png'},
    {'name': 'stimuli/angel_img3.png', 'path': 'stimuli/angel_img3.png'},
    {'name': 'stimuli/cactus_img3.png', 'path': 'stimuli/cactus_img3.png'},
    {'name': 'stimuli/ballerina_img3.png', 'path': 'stimuli/ballerina_img3.png'},
    {'name': 'stimuli/clown_img3.png', 'path': 'stimuli/clown_img3.png'},
    {'name': 'stimuli/NY_strawberry_img2.png', 'path': 'stimuli/NY_strawberry_img2.png'},
    {'name': 'button.png', 'path': 'button.png'},
    {'name': 'stimuli/palm tree_img3.png', 'path': 'stimuli/palm tree_img3.png'},
    {'name': 'stimuli/ring_img3.png', 'path': 'stimuli/ring_img3.png'},
    {'name': 'stimuli/YN_acorn_img1.png', 'path': 'stimuli/YN_acorn_img1.png'},
    {'name': 'stimuli/turkey_img3.png', 'path': 'stimuli/turkey_img3.png'},
    {'name': 'stimuli/YY_cake_img2.png', 'path': 'stimuli/YY_cake_img2.png'},
    {'name': 'stimuli/canoe_img3.png', 'path': 'stimuli/canoe_img3.png'},
    {'name': 'stimuli/YN_astronaut_img2.png', 'path': 'stimuli/YN_astronaut_img2.png'},
    {'name': 'stimuli/YN_washing machine_img1.png', 'path': 'stimuli/YN_washing machine_img1.png'},
    {'name': 'stimuli/YN_dress_img1.png', 'path': 'stimuli/YN_dress_img1.png'},
    {'name': 'stimuli/NN_guitar_img2.png', 'path': 'stimuli/NN_guitar_img2.png'},
    {'name': 'stimuli/NY_backpack_img1.png', 'path': 'stimuli/NY_backpack_img1.png'},
    {'name': 'stimuli/acorn_img3.png', 'path': 'stimuli/acorn_img3.png'},
    {'name': 'stimuli/YY_key_img1.png', 'path': 'stimuli/YY_key_img1.png'},
    {'name': 'stimuli/YY_milk carton_img1.png', 'path': 'stimuli/YY_milk carton_img1.png'},
    {'name': 'stimuli/NY_fishbowl_img1.png', 'path': 'stimuli/NY_fishbowl_img1.png'},
    {'name': 'stimuli/carousel_img3.png', 'path': 'stimuli/carousel_img3.png'},
    {'name': 'stimuli/NN_palm tree_img2.png', 'path': 'stimuli/NN_palm tree_img2.png'},
    {'name': 'stimuli/NY_church_img2.png', 'path': 'stimuli/NY_church_img2.png'},
    {'name': 'stimuli/NY_strawberry_img1.png', 'path': 'stimuli/NY_strawberry_img1.png'},
    {'name': 'stimuli/YY_fireplace_img2.png', 'path': 'stimuli/YY_fireplace_img2.png'},
    {'name': 'stimuli/YN_saw_img2.png', 'path': 'stimuli/YN_saw_img2.png'},
    {'name': 'stimuli/YY_rocket_img2.png', 'path': 'stimuli/YY_rocket_img2.png'},
    {'name': 'stimuli/guitar_img3.png', 'path': 'stimuli/guitar_img3.png'},
    {'name': 'stimuli/YN_carousel_img1.png', 'path': 'stimuli/YN_carousel_img1.png'},
    {'name': 'stimuli/astronaut_img3.png', 'path': 'stimuli/astronaut_img3.png'},
    {'name': 'stimuli/YN_monkey_img1.png', 'path': 'stimuli/YN_monkey_img1.png'},
    {'name': 'stimuli/NN_garbage can_img1.png', 'path': 'stimuli/NN_garbage can_img1.png'},
    {'name': 'ballet slippers_img1.png', 'path': 'ballet slippers_img1.png'},
    {'name': 'stimuli/windmill_img3.png', 'path': 'stimuli/windmill_img3.png'},
    {'name': 'stimuli/anchor_img3.png', 'path': 'stimuli/anchor_img3.png'},
    {'name': 'BADEImgConditions_Fr.csv', 'path': 'BADEImgConditions_Fr.csv'},
    {'name': 'stimuli/YY_tent_img2.png', 'path': 'stimuli/YY_tent_img2.png'},
    {'name': 'stimuli/NN_garbage can_img2.png', 'path': 'stimuli/NN_garbage can_img2.png'},
    {'name': 'stimuli/tent_img3.png', 'path': 'stimuli/tent_img3.png'},
    {'name': 'stimuli/YN_saw_img1.png', 'path': 'stimuli/YN_saw_img1.png'},
    {'name': 'stimuli/castle_img3.png', 'path': 'stimuli/castle_img3.png'},
    {'name': 'stimuli/backpack_img3.png', 'path': 'stimuli/backpack_img3.png'},
    {'name': 'stimuli/YN_carousel_img2.png', 'path': 'stimuli/YN_carousel_img2.png'},
    {'name': 'stimuli/NY_clown_img2.png', 'path': 'stimuli/NY_clown_img2.png'},
    {'name': 'stimuli/YN_telephone_img2.png', 'path': 'stimuli/YN_telephone_img2.png'},
    {'name': 'stimuli/YN_canoe_img1.png', 'path': 'stimuli/YN_canoe_img1.png'},
    {'name': 'stimuli/fireplace_img3.png', 'path': 'stimuli/fireplace_img3.png'},
    {'name': 'stimuli/NY_football_img2.png', 'path': 'stimuli/NY_football_img2.png'},
    {'name': 'stimuli/YN_acorn_img2.png', 'path': 'stimuli/YN_acorn_img2.png'},
    {'name': 'stimuli/football_img3.png', 'path': 'stimuli/football_img3.png'},
    {'name': 'stimuli/bat_img3.png', 'path': 'stimuli/bat_img3.png'},
    {'name': 'stimuli/NY_cactus_img2.png', 'path': 'stimuli/NY_cactus_img2.png'},
    {'name': 'stimuli/YN_bat_img1.png', 'path': 'stimuli/YN_bat_img1.png'},
    {'name': 'stimuli/NY_airplane_img1.png', 'path': 'stimuli/NY_airplane_img1.png'},
    {'name': 'stimuli/NY_mouse_img1.png', 'path': 'stimuli/NY_mouse_img1.png'},
    {'name': 'stimuli/YN_canoe_img2.png', 'path': 'stimuli/YN_canoe_img2.png'},
    {'name': 'stimuli/NN_scissors_img2.png', 'path': 'stimuli/NN_scissors_img2.png'},
    {'name': 'stimuli/YY_key_img2.png', 'path': 'stimuli/YY_key_img2.png'},
    {'name': 'stimuli/YY_ballerina_img1.png', 'path': 'stimuli/YY_ballerina_img1.png'},
    {'name': 'stimuli/YN_sailboat_img1.png', 'path': 'stimuli/YN_sailboat_img1.png'},
    {'name': 'stimuli/YY_fireplace_img1.png', 'path': 'stimuli/YY_fireplace_img1.png'},
    {'name': 'stimuli/monkey_img3.png', 'path': 'stimuli/monkey_img3.png'},
    {'name': 'stimuli/YN_iron_img2.png', 'path': 'stimuli/YN_iron_img2.png'},
    {'name': 'BADEImgConditions_practice_Fr.csv', 'path': 'BADEImgConditions_practice_Fr.csv'},
    {'name': 'BADEImgConditions_practice_Eng.csv', 'path': 'BADEImgConditions_practice_Eng.csv'},
    {'name': 'stimuli/YY_crown_img1.png', 'path': 'stimuli/YY_crown_img1.png'},
    {'name': 'stimuli/snake_img3.png', 'path': 'stimuli/snake_img3.png'},
    {'name': 'stimuli/NY_ladybug_img2.png', 'path': 'stimuli/NY_ladybug_img2.png'},
    {'name': 'stimuli/YY_crown_img2.png', 'path': 'stimuli/YY_crown_img2.png'},
    {'name': 'stimuli/NY_football_img1.png', 'path': 'stimuli/NY_football_img1.png'},
    {'name': 'stimuli/ladybug_img3.png', 'path': 'stimuli/ladybug_img3.png'},
    {'name': 'stimuli/YY_corn_img2.png', 'path': 'stimuli/YY_corn_img2.png'},
    {'name': 'stimuli/carrot_img3.png', 'path': 'stimuli/carrot_img3.png'},
    {'name': 'stimuli/NY_airplane_img2.png', 'path': 'stimuli/NY_airplane_img2.png'},
    {'name': 'stimuli/NN_ring_img1.png', 'path': 'stimuli/NN_ring_img1.png'},
    {'name': 'stimuli/NY_cactus_img1.png', 'path': 'stimuli/NY_cactus_img1.png'},
    {'name': 'stimuli/beehive_img3.png', 'path': 'stimuli/beehive_img3.png'},
    {'name': 'stimuli/NY_sunflower_img2.png', 'path': 'stimuli/NY_sunflower_img2.png'},
    {'name': 'stimuli/YY_carrot_img2.png', 'path': 'stimuli/YY_carrot_img2.png'},
    {'name': 'stimuli/YY_cake_img1.png', 'path': 'stimuli/YY_cake_img1.png'},
    {'name': 'stimuli/washing machine_img3.png', 'path': 'stimuli/washing machine_img3.png'},
    {'name': 'stimuli/milk carton_img3.png', 'path': 'stimuli/milk carton_img3.png'},
    {'name': 'stimuli/NY_church_img1.png', 'path': 'stimuli/NY_church_img1.png'},
    {'name': 'ballet slippers_img3.png', 'path': 'ballet slippers_img3.png'},
    {'name': 'stimuli/YN_washing machine_img2.png', 'path': 'stimuli/YN_washing machine_img2.png'},
    {'name': 'stimuli/YY_tent_img1.png', 'path': 'stimuli/YY_tent_img1.png'},
    {'name': 'ballet slippers_img2.png', 'path': 'ballet slippers_img2.png'},
    {'name': 'stimuli/gate_img3.png', 'path': 'stimuli/gate_img3.png'},
    {'name': 'stimuli/NN_angel_img1.png', 'path': 'stimuli/NN_angel_img1.png'},
    {'name': 'stimuli/NN_guitar_img1.png', 'path': 'stimuli/NN_guitar_img1.png'},
    {'name': 'stimuli/NN_castle_img1.png', 'path': 'stimuli/NN_castle_img1.png'},
    {'name': 'stimuli/YY_corn_img1.png', 'path': 'stimuli/YY_corn_img1.png'},
    {'name': 'stimuli/NY_anchor_img1.png', 'path': 'stimuli/NY_anchor_img1.png'},
    {'name': 'stimuli/NN_castle_img2.png', 'path': 'stimuli/NN_castle_img2.png'},
    {'name': 'stimuli/NN_turkey_img1.png', 'path': 'stimuli/NN_turkey_img1.png'},
    {'name': 'stimuli/telephone_img3.png', 'path': 'stimuli/telephone_img3.png'},
    {'name': 'stimuli/church_img3.png', 'path': 'stimuli/church_img3.png'},
    {'name': 'stimuli/book_img3.png', 'path': 'stimuli/book_img3.png'},
    {'name': 'stimuli/NY_anchor_img2.png', 'path': 'stimuli/NY_anchor_img2.png'},
    {'name': 'stimuli/YN_telephone_img1.png', 'path': 'stimuli/YN_telephone_img1.png'},
    {'name': 'stimuli/NN_swing set_img2.png', 'path': 'stimuli/NN_swing set_img2.png'},
    {'name': 'stimuli/YY_book_img2.png', 'path': 'stimuli/YY_book_img2.png'},
    {'name': 'stimuli/scissors_img3.png', 'path': 'stimuli/scissors_img3.png'},
    {'name': 'stimuli/NN_swing set_img1.png', 'path': 'stimuli/NN_swing set_img1.png'},
    {'name': 'stimuli/YN_monkey_img2.png', 'path': 'stimuli/YN_monkey_img2.png'},
    {'name': 'stimuli/corn_img3.png', 'path': 'stimuli/corn_img3.png'},
    {'name': 'stimuli/NY_backpack_img2.png', 'path': 'stimuli/NY_backpack_img2.png'},
    {'name': 'stimuli/garbage can_img3.png', 'path': 'stimuli/garbage can_img3.png'},
    {'name': 'stimuli/NN_snake_img2.png', 'path': 'stimuli/NN_snake_img2.png'},
    {'name': 'stimuli/cake_img3.png', 'path': 'stimuli/cake_img3.png'},
    {'name': 'stimuli/YN_dress_img2.png', 'path': 'stimuli/YN_dress_img2.png'},
    {'name': 'stimuli/NN_angel_img2.png', 'path': 'stimuli/NN_angel_img2.png'},
    {'name': 'stimuli/NN_gate_img2.png', 'path': 'stimuli/NN_gate_img2.png'},
    {'name': 'stimuli/YY_milk carton_img2.png', 'path': 'stimuli/YY_milk carton_img2.png'},
    {'name': 'stimuli/mouse_img3.png', 'path': 'stimuli/mouse_img3.png'},
    {'name': 'stimuli/NN_scissors_img1.png', 'path': 'stimuli/NN_scissors_img1.png'},
    {'name': 'stimuli/NY_ladybug_img1.png', 'path': 'stimuli/NY_ladybug_img1.png'},
    {'name': 'stimuli/NY_fishbowl_img2.png', 'path': 'stimuli/NY_fishbowl_img2.png'},
    {'name': 'stimuli/NN_gate_img1.png', 'path': 'stimuli/NN_gate_img1.png'},
    {'name': 'stimuli/key_img3.png', 'path': 'stimuli/key_img3.png'},
    {'name': 'stimuli/NN_beehive_img1.png', 'path': 'stimuli/NN_beehive_img1.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var langClock;
var date1;
var d;
var startingDate;
var red;
var french;
var english;
var trialConditions;
var practiceConditions;
var redcapVars;
var rect1;
var rect2;
var txt_instr;
var txt_rect1;
var txt_rect2;
var mouse1;
var instrClock;
var thisExp;
var win;
var event;
var kb;
var img1_i;
var text1_i;
var slider_i;
var instr_text1;
var label1_i;
var label2_i;
var next_i;
var txt_next_i;
var mouse_i;
var instr2Clock;
var img1_i2;
var img2_i2;
var text1_i2;
var slider_i2;
var instr_text2;
var label1_i2;
var label2_i2;
var next_i2;
var txt_next_i2;
var mouse_i2;
var practiceClock;
var text_1pr;
var text_2pr;
var text_3pr;
var image_1pr;
var image_2pr;
var image_3pr;
var slider_pr;
var slider_pr2;
var label1_pr;
var label2_pr;
var rating_val_pr;
var mouse_pr;
var readyClock;
var ready_2;
var next_3;
var txt_next_3;
var mouse_3;
var trialClock;
var nbRating;
var currentTrial;
var text_1;
var text_2;
var text_3;
var image_1;
var image_2;
var image_3;
var slider;
var slider2;
var label1;
var label2;
var rating_val;
var mouse;
var thanksClock;
var thx;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "lang"
  langClock = new util.Clock();
  // Run 'Begin Experiment' code from code_2
  
  // Initialize starting date
  date1 = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  d = new Date(date1);
  startingDate =  d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " +
  d.getHours() + ":" + d.getMinutes();
  
  //Initialize variables to change the color of highlighed rect
  red = new util.Color("red");
  
  //Set french or english variable to true when the language is selected
  french = false;
  english = false;
  
  trialConditions = "";
  practiceConditions = "";
  redcapVars = [];
  
  //Remove illegal characters in participants' name to avoid errors in filenames
  function CheckFilename(){
     expInfo['participant']= expInfo['participant'].replace(/([^.a-z0-9]+)/gi, '-');
  }
  
  // Load redcap variables from Google Spreadsheet
  function LoadRedcapVars(redcapVars){
      try {
          // Retrieve data between B2 and max range
          let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2HrrKB78yxkxRABtTlghA1reADPaQN32V5oJ2BbRXEZOhr8YrkGDZaIVZtjqNMXWTLzeG6-xRaEBl/pub?gid=489716065&range=B2:AA2&output=csv";
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4) {
                  let array = xmlhttp.responseText.split(',');
                  for (let i = 0; i < array.length; i++) {
                      redcapVars.push(array[i]);
                  }
              }
          };
          xmlhttp.open("GET", url, true);
          xmlhttp.send(null);
          return redcapVars;
      }
      catch(err) {
          console.log("Erreur while loading Redcap variables", err.message);
      }
      
  }
  
  CheckFilename();
  redcapVars = LoadRedcapVars(redcapVars);
  rect1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rect1', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, 0.02], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  rect2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rect2', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.07)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  txt_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_instr',
    text: 'Veuillez sélectionner votre langue.\n\nPlease select your language.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.18], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -3.0 
  });
  
  txt_rect1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_rect1',
    text: 'FRANÇAIS',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 0.73,
    depth: -4.0 
  });
  
  txt_rect2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_rect2',
    text: 'ENGLISH',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 0.73,
    depth: -5.0 
  });
  
  mouse1 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse1.mouseClock = new util.Clock();
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  Array.prototype.append = [].push;
  
  kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  img1_i = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img1_i', units : undefined, 
    image : 'ballet slippers_img1.png', mask : undefined,
    ori : 0, pos : [0, 0.25], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  text1_i = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1_i',
    text: 'BALLET SLIPPERS',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -2.0 
  });
  
  slider_i = new visual.Slider({
    win: psychoJS.window, name: 'slider_i',
    startValue: undefined,
    size: [0.05, 0.35], pos: [0.3, 0.25], ori: 0, units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [(- 100), 0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Arial', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  instr_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text1',
    text: 'In this task, you will be asked to identify pictures. You will be shown a picture gradually with a word listed below it, just like in the example above. Your job is to rate whether you think the word accurately describes what the full picture will be.\n\nPractice using your mouse to select your rating by clicking or dragging the slider up and down the scale. You can make your rating at any point along the scale, depending on how confident you are in your response.\n\nWhen you are comfortable, click on “next” to move on.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -4.0 
  });
  
  label1_i = new visual.TextStim({
    win: psychoJS.window,
    name: 'label1_i',
    text: '100% YES',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.462], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -5.0 
  });
  
  label2_i = new visual.TextStim({
    win: psychoJS.window,
    name: 'label2_i',
    text: '100% NO',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.038], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -6.0 
  });
  
  next_i = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_i', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.469)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -7.0 
  });
  txt_next_i = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next_i',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 0.73,
    depth: -8.0 
  });
  
  mouse_i = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_i.mouseClock = new util.Clock();
  // Initialize components for Routine "instr2"
  instr2Clock = new util.Clock();
  img1_i2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img1_i2', units : undefined, 
    image : 'ballet slippers_img1.png', mask : undefined,
    ori : 0, pos : [0, 0.25], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -1.0 
  });
  img2_i2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'img2_i2', units : undefined, 
    image : 'ballet slippers_img2.png', mask : undefined,
    ori : 0, pos : [0, 0.25], size : [0.4, 0.4],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  text1_i2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1_i2',
    text: 'BALLET SLIPPERS',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -3.0 
  });
  
  slider_i2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_i2',
    startValue: undefined,
    size: [0.05, 0.35], pos: [0.3, 0.25], ori: 0, units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [(- 100), 0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: false,
  });
  
  instr_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text2',
    text: 'Once you respond, more of the picture will begin to appear. Reconsider the rating you made. You may change your rating as much or as little as you like. Once you make your second response, you will see the full picture and the correct word.\n\nYou will now complete several practice trials before beginning the experiment. Try to respond as quickly as you can.\n\nWhen you are comfortable, click on “next” to move on.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.23)], height: 0.03,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -5.0 
  });
  
  label1_i2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label1_i2',
    text: '100% YES',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.462], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -6.0 
  });
  
  label2_i2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label2_i2',
    text: '100% NO',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0.038], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -7.0 
  });
  
  next_i2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_i2', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.455)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -8.0 
  });
  txt_next_i2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next_i2',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 0.73,
    depth: -9.0 
  });
  
  mouse_i2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_i2.mouseClock = new util.Clock();
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  text_1pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  text_2pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -2.0 
  });
  
  text_3pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  image_1pr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1pr', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -4.0 
  });
  image_2pr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2pr', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -5.0 
  });
  image_3pr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3pr', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  slider_pr = new visual.Slider({
    win: psychoJS.window, name: 'slider_pr',
    startValue: undefined,
    size: [0.05, 0.45], pos: [0.5, 0], ori: 0, units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [(- 100), 0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Arial', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  slider_pr2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_pr2',
    startValue: undefined,
    size: [0.05, 0.45], pos: [0.5, 0], ori: 0, units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [(- 100), 0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: 1, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  label1_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'label1_pr',
    text: '100% YES',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.266], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -9.0 
  });
  
  label2_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'label2_pr',
    text: '100% NO',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.266)], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -10.0 
  });
  
  rating_val_pr = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_val_pr',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -11.0 
  });
  
  mouse_pr = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_pr.mouseClock = new util.Clock();
  // Initialize components for Routine "ready"
  readyClock = new util.Clock();
  ready_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'ready_2',
    text: 'Ready to begin?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  next_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'next_3', units : undefined, 
    image : 'button.png', mask : undefined,
    ori : 0, pos : [0, (- 0.12)], size : [0.25, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 0.73,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  txt_next_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'txt_next_3',
    text: 'BEGIN',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 0.73,
    depth: -3.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  nbRating = Number.POSITIVE_INFINITY;
  
  // Save additionals data later
  var condition_type, response_condition, degree_change;
  currentTrial = 1;
  text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -2.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -3.0 
  });
  
  image_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_1', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -4.0 
  });
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -5.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.6, 0.6],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [0.05, 0.45], pos: [0.5, 0], ori: 0, units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [(- 100), 0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -7, 
    flip: false,
  });
  
  slider2 = new visual.Slider({
    win: psychoJS.window, name: 'slider2',
    startValue: undefined,
    size: [0.05, 0.45], pos: [0.5, 0], ori: 0, units: 'height',
    labels: undefined, fontSize: 0.05, ticks: [(- 100), 0, 100],
    granularity: 0, style: ["RATING"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color('black'), 
    opacity: 1.0, fontFamily: 'Arial', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  label1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label1',
    text: '100% YES',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, 0.266], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -9.0 
  });
  
  label2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'label2',
    text: '100% NO',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.266)], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -10.0 
  });
  
  rating_val = new visual.TextStim({
    win: psychoJS.window,
    name: 'rating_val',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -11.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thx = new visual.TextStim({
    win: psychoJS.window,
    name: 'thx',
    text: 'Thank you for your participation!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1), (- 1), (- 1)]),  opacity: 1,
    depth: -1.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var langComponents;
function langRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'lang' ---
    t = 0;
    langClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    thisExp=psychoJS.experiment;
    win=psychoJS.window;
    event=psychoJS.eventManager;
    Array.prototype.append = [].push;
    txt_rect1.setPos(rect1.pos);
    txt_rect2.setPos(rect2.pos);
    // setup some python lists for storing info about the mouse1
    mouse1.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse1.mouseClock.reset();
    // keep track of which components have finished
    langComponents = [];
    langComponents.push(rect1);
    langComponents.push(rect2);
    langComponents.push(txt_instr);
    langComponents.push(txt_rect1);
    langComponents.push(txt_rect2);
    langComponents.push(mouse1);
    
    for (const thisComponent of langComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function langRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'lang' ---
    // get current time
    t = langClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_2
    //Change the color of highlighed rect
    function HighlightRect(rec1, rec2, txt_rec1, txt_rec2, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
         if (rec2.contains(mouse)) {
            rec2.setOpacity(0.99);
            txt_rec2.setOpacity(2);
         } 
        else{
            rec2.setOpacity(0.73);
            txt_rec2.setOpacity(0.73);
        }
    }
    
    //Function that is going to set the chosen language
    function SelectLanguage(rec1, rec2, mouse){
        if (rec1.contains(mouse) && mouse.getPressed()[0] === 1 ) {
            french = true;
            practiceConditions = "BADEImgConditions_practice_Fr.csv";
            trialConditions = "BADEImgConditions_Fr.csv";
        }
        else if (rec2.contains(mouse) && mouse.getPressed()[0] === 1 ) {
            english = true;
            practiceConditions = "BADEImgConditions_practice_Eng.csv";
            trialConditions = "BADEImgConditions_Eng.csv";
        }
    }
    
    HighlightRect(rect1,  rect2, txt_rect1, txt_rect2, mouse1);
    SelectLanguage(rect1,  rect2, mouse1);
    
    
    // *rect1* updates
    if (t >= 0.0 && rect1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rect1.tStart = t;  // (not accounting for frame time here)
      rect1.frameNStart = frameN;  // exact frame index
      
      rect1.setAutoDraw(true);
    }

    
    // *rect2* updates
    if (t >= 0.0 && rect2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rect2.tStart = t;  // (not accounting for frame time here)
      rect2.frameNStart = frameN;  // exact frame index
      
      rect2.setAutoDraw(true);
    }

    
    // *txt_instr* updates
    if (t >= 0.0 && txt_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_instr.tStart = t;  // (not accounting for frame time here)
      txt_instr.frameNStart = frameN;  // exact frame index
      
      txt_instr.setAutoDraw(true);
    }

    
    // *txt_rect1* updates
    if (t >= 0.0 && txt_rect1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_rect1.tStart = t;  // (not accounting for frame time here)
      txt_rect1.frameNStart = frameN;  // exact frame index
      
      txt_rect1.setAutoDraw(true);
    }

    
    // *txt_rect2* updates
    if (t >= 0.0 && txt_rect2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_rect2.tStart = t;  // (not accounting for frame time here)
      txt_rect2.frameNStart = frameN;  // exact frame index
      
      txt_rect2.setAutoDraw(true);
    }

    // *mouse1* updates
    if (t >= 0.0 && mouse1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse1.tStart = t;  // (not accounting for frame time here)
      mouse1.frameNStart = frameN;  // exact frame index
      
      mouse1.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse1.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse1.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse1.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [rect1, rect2]) {
            if (obj.contains(mouse1)) {
              gotValidClick = true;
              mouse1.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of langComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function langRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'lang' ---
    for (const thisComponent of langComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_2
    thisExp.addData("Language", english===true ? "en" : "fr");
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "lang" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var img1start;
var slider_is_initialized;
var col;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_JS
    kb.clock.reset();
    kb.start();
    kb.clearEvents();
    
    img1start = false;
    img1_i.setOpacity(0);
    
     slider_is_initialized = false;
    
    //Adapt the color and size of the marker to the slider
    col = new util.Color('black');
    
    //Change the text according to the selected language, function SetTxtInstr()
    function SetTxtInstr(){
        if (english){
            text1_i.text = "BALLET SLIPPERS";
            instr_text1.text = "\nIn this task, you will be asked to identify pictures. You will be shown a picture gradually with a word listed below it, just like in the example above. Your job is to rate whether you think the word accurately describes what the full picture will be.\n \n Practice using your mouse or touchpad to select your rating by clicking or dragging the slider up and down the scale. You can make your rating at any point along the scale, depending on how confident you are in your response.\n \n When you are comfortable, click on \"NEXT\" to move on.";
            label1_i.text = "100% YES";
            label2_i.text = "100% NO";
            txt_next_i.text = "NEXT";
        }
        else{
            text1_i.text = "CHAUSSONS DE BALLET";
            instr_text1.text = "Dans cette tâche, vous devrez identifier des images. Vous allez voir graduellement une image, avec un mot écrit en-dessous. Évaluez si vous croyez que le mot décrit de manière adéquate l’image entière.\n \n Vous allez utiliser la souris ou le pavé tactile pour évaluer. Cliquez sur le bouton gauche sur l'échelle ou appuyez et maintenez le bouton pour déplacer le curseur vers oui ou non. Vous pouvez faire vos évaluations à n’importe quel endroit sur l’échelle, dépendamment à quel point vous êtes confiant de votre réponse.\n \n Quand vous serez prêt, cliquez sur \"SUIVANT\" pour commencer.";
            label1_i.text = "100% OUI";
            label2_i.text = "100% NON";
            txt_next_i.text = "SUIVANT";
        }
    }
    
    SetTxtInstr();
    slider_i.reset()
    txt_next_i.setPos(next_i.pos);
    // setup some python lists for storing info about the mouse_i
    // current position of the mouse:
    mouse_i.x = [];
    mouse_i.y = [];
    mouse_i.leftButton = [];
    mouse_i.midButton = [];
    mouse_i.rightButton = [];
    mouse_i.time = [];
    mouse_i.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_i.mouseClock.reset();
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(img1_i);
    instrComponents.push(text1_i);
    instrComponents.push(slider_i);
    instrComponents.push(instr_text1);
    instrComponents.push(label1_i);
    instrComponents.push(label2_i);
    instrComponents.push(next_i);
    instrComponents.push(txt_next_i);
    instrComponents.push(mouse_i);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _mouseXYs;
function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_JS
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    HighlightRect(next_i, txt_next_i, mouse_i);
    
    //Initialise the slider marker..
    function InitializeSlider(){
        try {
                slider_i._skin.STANDARD.MARKER_COLOR = col;
                slider_i._skin.MARKER_SIZE = [0.05, 0.05];
                slider_i.markerPos = 0;
                slider_i._onChange(true)();
        } catch (err) {}
    }
    
    //Initialize slider1 marker at 0 position
    if (!slider_is_initialized && img1_i.status === STARTED){
        InitializeSlider();
        slider_i.setOpacity(1);
        slider_is_initialized  = true;
    }
    
    function movingSliderWArrowKeys(mySlider){
        let keys = kb.getKeys({keyList: ["up", "down"], waitRelease: false, clear: true});
        let key_name = "";
        let key_duration = "";
        
        if (keys.length <= 0) return;
        
        key_name = keys[0].name;
        key_duration = keys[0].duration;
        
        if (slider_is_initialized && key_name === "up" && key_duration == undefined){
            mySlider.markerPos += 10;
            mySlider.recordRating(mySlider.markerPos);
        }
            
        else if (slider_is_initialized && key_name === "down" && key_duration == undefined){
            mySlider.markerPos -= 10;
            mySlider.recordRating(mySlider.markerPos);
        }
    }
    
    movingSliderWArrowKeys(slider_i);
    
    if ((((t >= 0.02) && (img1_i.status === NOT_STARTED)))) {
        img1start = true;
    }
    
    // *img1_i* updates
    if (((img1start == 1)) && img1_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_i.tStart = t;  // (not accounting for frame time here)
      img1_i.frameNStart = frameN;  // exact frame index
      
      img1_i.setAutoDraw(true);
    }

    
    if (img1_i.status === PsychoJS.Status.STARTED){ // only update if being drawn
      img1_i.setOpacity((frameN / 300), false);
    }
    
    // *text1_i* updates
    if (frameN >= 0.0 && text1_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1_i.tStart = t;  // (not accounting for frame time here)
      text1_i.frameNStart = frameN;  // exact frame index
      
      text1_i.setAutoDraw(true);
    }

    
    // *slider_i* updates
    if (t >= 0.0 && slider_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_i.tStart = t;  // (not accounting for frame time here)
      slider_i.frameNStart = frameN;  // exact frame index
      
      slider_i.setAutoDraw(true);
    }

    
    // *instr_text1* updates
    if (t >= 0.0 && instr_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text1.tStart = t;  // (not accounting for frame time here)
      instr_text1.frameNStart = frameN;  // exact frame index
      
      instr_text1.setAutoDraw(true);
    }

    
    // *label1_i* updates
    if (t >= 0.0 && label1_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label1_i.tStart = t;  // (not accounting for frame time here)
      label1_i.frameNStart = frameN;  // exact frame index
      
      label1_i.setAutoDraw(true);
    }

    
    // *label2_i* updates
    if (t >= 0.0 && label2_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label2_i.tStart = t;  // (not accounting for frame time here)
      label2_i.frameNStart = frameN;  // exact frame index
      
      label2_i.setAutoDraw(true);
    }

    
    // *next_i* updates
    if (t >= 0.0 && next_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_i.tStart = t;  // (not accounting for frame time here)
      next_i.frameNStart = frameN;  // exact frame index
      
      next_i.setAutoDraw(true);
    }

    
    // *txt_next_i* updates
    if (t >= 0.0 && txt_next_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next_i.tStart = t;  // (not accounting for frame time here)
      txt_next_i.frameNStart = frameN;  // exact frame index
      
      txt_next_i.setAutoDraw(true);
    }

    // *mouse_i* updates
    if (t >= 0.0 && mouse_i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_i.tStart = t;  // (not accounting for frame time here)
      mouse_i.frameNStart = frameN;  // exact frame index
      
      mouse_i.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_i.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_i.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_i.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_i]) {
            if (obj.contains(mouse_i)) {
              gotValidClick = true;
              mouse_i.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_i.getPos();
          mouse_i.x.push(_mouseXYs[0]);
          mouse_i.y.push(_mouseXYs[1]);
          mouse_i.leftButton.push(_mouseButtons[0]);
          mouse_i.midButton.push(_mouseButtons[1]);
          mouse_i.rightButton.push(_mouseButtons[2]);
          mouse_i.time.push(mouse_i.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    kb.clock.reset();
    kb.stop();
    kb.clearEvents();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_i.x) {  psychoJS.experiment.addData('mouse_i.x', mouse_i.x[0])};
    if (mouse_i.y) {  psychoJS.experiment.addData('mouse_i.y', mouse_i.y[0])};
    if (mouse_i.leftButton) {  psychoJS.experiment.addData('mouse_i.leftButton', mouse_i.leftButton[0])};
    if (mouse_i.midButton) {  psychoJS.experiment.addData('mouse_i.midButton', mouse_i.midButton[0])};
    if (mouse_i.rightButton) {  psychoJS.experiment.addData('mouse_i.rightButton', mouse_i.rightButton[0])};
    if (mouse_i.time) {  psychoJS.experiment.addData('mouse_i.time', mouse_i.time[0])};
    if (mouse_i.clicked_name) {  psychoJS.experiment.addData('mouse_i.clicked_name', mouse_i.clicked_name[0])};
    
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var img2start;
var frameNstart;
var instr2Components;
function instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr2' ---
    t = 0;
    instr2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_i2
    kb.clock.reset();
    kb.start();
    kb.clearEvents();
    
    img2start = false;
    frameNstart = 0;
    img2_i2.setOpacity(0);
    slider_is_initialized = false;
    
    //Adapt the color and size of the marker to the slider
    col = new util.Color('black');
    
    //Change the text according to the selected language, function SetTxtInstr2()
    function SetTxtInstr2(){
        if (english){
            text1_i2.text = "BALLET SLIPPERS";
            instr_text2.text = "Once you respond, more of the picture will begin to appear. Reconsider the rating you made. If you wish to keep your previous rating, you must click again in the same place on the scale. You may change your rating as much or as little as you like. Once you make your second response, you will see the full picture and the correct word.\n \n You will now complete several practice trials before beginning the experiment. Try to respond as quickly as you can.\n \n When you are comfortable, click on \"PRACTICE\" to move on.";
            label1_i2.text = "100% YES";
            label2_i2.text = "100% NO";
            txt_next_i2.text = "PRACTICE";
        }
        else{
            text1_i2.text = "CHAUSSONS DE BALLET";
            instr_text2.text = "Une fois que vous avez répondu, plus de détails de l’image commenceront à apparaître. Reconsidérez l’évaluation que vous avez faite. Si vous souhaitez conserver votre évaluation précédente, vous devez cliquer de nouveau au même endroit sur l’échelle. Vous pouvez changer votre évaluation autant que vous le voulez. Une fois votre deuxième évaluation faite, vous verrez l’image entière et le mot correct.\n \n Vous allez maintenant compléter plusieurs essais de pratique, avant de commencer l’exercice. Essayez de répondre le plus vite que vous pouvez.\n \n Quand vous serez prêt, cliquez sur \"S’ENTRAÎNER\" pour commencer.";
            label1_i2.text = "100% OUI";
            label2_i2.text = "100% NON";
            txt_next_i2.text = "S’ENTRAÎNER";
        }
    }
    
    SetTxtInstr2();
    
    slider_i2.reset()
    // setup some python lists for storing info about the mouse_i2
    // current position of the mouse:
    mouse_i2.x = [];
    mouse_i2.y = [];
    mouse_i2.leftButton = [];
    mouse_i2.midButton = [];
    mouse_i2.rightButton = [];
    mouse_i2.time = [];
    mouse_i2.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_i2.mouseClock.reset();
    // keep track of which components have finished
    instr2Components = [];
    instr2Components.push(img1_i2);
    instr2Components.push(img2_i2);
    instr2Components.push(text1_i2);
    instr2Components.push(slider_i2);
    instr2Components.push(instr_text2);
    instr2Components.push(label1_i2);
    instr2Components.push(label2_i2);
    instr2Components.push(next_i2);
    instr2Components.push(txt_next_i2);
    instr2Components.push(mouse_i2);
    
    for (const thisComponent of instr2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr2' ---
    // get current time
    t = instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_i2
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    HighlightRect(next_i2, txt_next_i2, mouse_i2);
    
    //Initialise the slider marker..
    function InitializeSlider(){
        try {
                slider_i2._skin.STANDARD.MARKER_COLOR = col;
                slider_i2._skin.MARKER_SIZE = [0.05, 0.05];
                slider_i2.markerPos = slider_i.markerPos;
                slider_i2._onChange(true)();
        } catch (err) {}
    }
    
    //Initialize slider1 marker at 0 position
    if (!slider_is_initialized && img1_i2.status === STARTED){
        InitializeSlider();
        slider_i2.setOpacity(1);
        slider_is_initialized  = true;
    }
    
    function movingSliderWArrowKeys(mySlider){
        let keys = kb.getKeys({keyList: ["up", "down"], waitRelease: false, clear: true});
        let key_name = "";
        let key_duration = "";
        
        if (keys.length <= 0) return;
        
        key_name = keys[0].name;
        key_duration = keys[0].duration;
        
        if (slider_is_initialized && key_name === "up" && key_duration == undefined){
            mySlider.markerPos += 10;
            mySlider.recordRating(mySlider.markerPos);
        }
            
        else if (slider_is_initialized && key_name === "down" && key_duration == undefined){
            mySlider.markerPos -= 10;
            mySlider.recordRating(mySlider.markerPos);
        }
    }
    
    movingSliderWArrowKeys(slider_i2);
    
    if ((((t >= 0.2) && (img2_i2.status === NOT_STARTED)))) {
        img2start = true;
    }
    
    
    
    
    
    // *img1_i2* updates
    if (t >= 0.0 && img1_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img1_i2.tStart = t;  // (not accounting for frame time here)
      img1_i2.frameNStart = frameN;  // exact frame index
      
      img1_i2.setAutoDraw(true);
    }

    
    // *img2_i2* updates
    if (((img2start == 1)) && img2_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      img2_i2.tStart = t;  // (not accounting for frame time here)
      img2_i2.frameNStart = frameN;  // exact frame index
      
      img2_i2.setAutoDraw(true);
    }

    
    if (img2_i2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      img2_i2.setOpacity((frameN / 600), false);
    }
    
    // *text1_i2* updates
    if (frameN >= 0.0 && text1_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1_i2.tStart = t;  // (not accounting for frame time here)
      text1_i2.frameNStart = frameN;  // exact frame index
      
      text1_i2.setAutoDraw(true);
    }

    
    // *slider_i2* updates
    if (t >= 0 && slider_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_i2.tStart = t;  // (not accounting for frame time here)
      slider_i2.frameNStart = frameN;  // exact frame index
      
      slider_i2.setAutoDraw(true);
    }

    
    // *instr_text2* updates
    if (t >= 0.0 && instr_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text2.tStart = t;  // (not accounting for frame time here)
      instr_text2.frameNStart = frameN;  // exact frame index
      
      instr_text2.setAutoDraw(true);
    }

    
    // *label1_i2* updates
    if (t >= 0.0 && label1_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label1_i2.tStart = t;  // (not accounting for frame time here)
      label1_i2.frameNStart = frameN;  // exact frame index
      
      label1_i2.setAutoDraw(true);
    }

    
    // *label2_i2* updates
    if (t >= 0.0 && label2_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label2_i2.tStart = t;  // (not accounting for frame time here)
      label2_i2.frameNStart = frameN;  // exact frame index
      
      label2_i2.setAutoDraw(true);
    }

    
    // *next_i2* updates
    if (t >= 0.0 && next_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_i2.tStart = t;  // (not accounting for frame time here)
      next_i2.frameNStart = frameN;  // exact frame index
      
      next_i2.setAutoDraw(true);
    }

    
    // *txt_next_i2* updates
    if (t >= 0.0 && txt_next_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next_i2.tStart = t;  // (not accounting for frame time here)
      txt_next_i2.frameNStart = frameN;  // exact frame index
      
      txt_next_i2.setAutoDraw(true);
    }

    
    if (txt_next_i2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      txt_next_i2.setPos(next_i2.pos, false);
    }
    // *mouse_i2* updates
    if (t >= 0.0 && mouse_i2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_i2.tStart = t;  // (not accounting for frame time here)
      mouse_i2.frameNStart = frameN;  // exact frame index
      
      mouse_i2.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_i2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_i2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_i2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_i2]) {
            if (obj.contains(mouse_i2)) {
              gotValidClick = true;
              mouse_i2.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse_i2.getPos();
          mouse_i2.x.push(_mouseXYs[0]);
          mouse_i2.y.push(_mouseXYs[1]);
          mouse_i2.leftButton.push(_mouseButtons[0]);
          mouse_i2.midButton.push(_mouseButtons[1]);
          mouse_i2.rightButton.push(_mouseButtons[2]);
          mouse_i2.time.push(mouse_i2.mouseClock.getTime());
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr2' ---
    for (const thisComponent of instr2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_i2
    img1_i2.setOpacity(0);
    kb.clock.reset();
    kb.stop();
    kb.clearEvents();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_i2.x) {  psychoJS.experiment.addData('mouse_i2.x', mouse_i2.x[0])};
    if (mouse_i2.y) {  psychoJS.experiment.addData('mouse_i2.y', mouse_i2.y[0])};
    if (mouse_i2.leftButton) {  psychoJS.experiment.addData('mouse_i2.leftButton', mouse_i2.leftButton[0])};
    if (mouse_i2.midButton) {  psychoJS.experiment.addData('mouse_i2.midButton', mouse_i2.midButton[0])};
    if (mouse_i2.rightButton) {  psychoJS.experiment.addData('mouse_i2.rightButton', mouse_i2.rightButton[0])};
    if (mouse_i2.time) {  psychoJS.experiment.addData('mouse_i2.time', mouse_i2.time[0])};
    if (mouse_i2.clicked_name) {  psychoJS.experiment.addData('mouse_i2.clicked_name', mouse_i2.clicked_name[0])};
    
    // the Routine "instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practices;
function practicesLoopBegin(practicesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practices = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: practiceConditions,
      seed: undefined, name: 'practices'
    });
    psychoJS.experiment.addLoop(practices); // add the loop to the experiment
    currentLoop = practices;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractice of practices) {
      snapshot = practices.getSnapshot();
      practicesLoopScheduler.add(importConditions(snapshot));
      practicesLoopScheduler.add(practiceRoutineBegin(snapshot));
      practicesLoopScheduler.add(practiceRoutineEachFrame());
      practicesLoopScheduler.add(practiceRoutineEnd(snapshot));
      practicesLoopScheduler.add(practicesLoopEndIteration(practicesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practicesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practices);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practicesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: trialConditions,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var img3start;
var img1stop;
var startingPos1;
var startingPos2;
var preview_pos;
var slider1_is_initialized;
var slider2_is_initialized;
var txtScoreY;
var txtScoreN;
var timer1;
var timer2;
var opacity1;
var opacity2;
var practiceComponents;
function practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice' ---
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_pr
    kb.clock.reset();
    kb.start();
    kb.clearEvents();
    
    img2start = false;
    img3start = false;
    img1stop = false;
    image_1pr.setOpacity(0);
    image_2pr.setOpacity(0);
    startingPos1 = true;
    startingPos2 = true;
    //Adapt the color and size of the marker to the slider
    col = new util.Color('black');
    
    //Display rating
    rating_val_pr.setAlignHoriz('right');
    preview_pos = [0.613, 0];
    rating_val_pr.setPos(preview_pos);
    
    //Sliders
    slider1_is_initialized = false;
    slider2_is_initialized = false;
    
    slider_pr.lastrating = "";
    
    txtScoreY = "";
    txtScoreN = "";
    //opacity timers
    timer1 = new util.Clock();
    timer2 = new util.Clock();
    opacity1 = 0;
    opacity2 = 0;
    
    //Change the text according to the selected language, function SetTxtPractice()
    function SetTxtPractice(){
        if (english){
            label1_pr.text = "100% YES";
            label2_pr.text = "100% NO";
            txtScoreY = "% YES";
            txtScoreN = "% NO";
            //rate_instr_pr.text = "Select your rating";
        }
        else{
            label1_pr.text = "100% OUI";
            label2_pr.text = "100% NON";
            txtScoreY = "% OUI";
            txtScoreN = "% NON";
            //rate_instr_pr.text = "Choisissez votre note";
        }
    }
    SetTxtPractice();
    
    text_1pr.setText(txt_1);
    text_2pr.setText(txt_2);
    text_3pr.setText(txt_3);
    image_1pr.setImage(img_1);
    image_2pr.setImage(img_2);
    image_3pr.setImage(img_3);
    slider_pr.reset()
    slider_pr2.reset()
    rating_val_pr.setPos(preview_pos);
    rating_val_pr.setText('');
    // setup some python lists for storing info about the mouse_pr
    // current position of the mouse:
    mouse_pr.x = [];
    mouse_pr.y = [];
    mouse_pr.leftButton = [];
    mouse_pr.midButton = [];
    mouse_pr.rightButton = [];
    mouse_pr.time = [];
    mouse_pr.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_pr.mouseClock.reset();
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(text_1pr);
    practiceComponents.push(text_2pr);
    practiceComponents.push(text_3pr);
    practiceComponents.push(image_1pr);
    practiceComponents.push(image_2pr);
    practiceComponents.push(image_3pr);
    practiceComponents.push(slider_pr);
    practiceComponents.push(slider_pr2);
    practiceComponents.push(label1_pr);
    practiceComponents.push(label2_pr);
    practiceComponents.push(rating_val_pr);
    practiceComponents.push(mouse_pr);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var key_name;
var key_duration;
var val;
function practiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice' ---
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_pr
    function InitializeSlider1(){
         try {
            slider_pr._skin.STANDARD.MARKER_COLOR = col;
            slider_pr._skin.MARKER_SIZE = [0.05, 0.05];
            slider_pr.markerPos = 0;
            slider_pr._onChange(true)();
            //slider._setupSlider();
        } catch (err) {}
        slider1_is_initialized  = true;
    }
    
    //Initialize slider 2
    function InitializeSlider2(){
        try {
            slider_pr2._skin.STANDARD.MARKER_COLOR = col;
            slider_pr2._skin.MARKER_SIZE = [0.05, 0.05];
            slider_pr2._onChange(true)();
            //slider_pr2._setupSlider();
            slider_pr2.draw();
            slider_pr2.setAutoDraw(true);
        } catch (err) {}
        slider2_is_initialized  = true;
    }
    
    //Initialize slider1 marker at 0 position
    if (!slider1_is_initialized && image_1pr.status === STARTED){
        InitializeSlider1();
    }
    
    //Initialize slider2 marker at slider1 marker position
    if (!slider2_is_initialized && image_2pr.status === STARTED){
        slider_pr2.markerPos = slider_pr.lastrating;
        InitializeSlider2();
    }
    
    // Compute opacities
    if(opacity1<1 && !img2start){
        opacity1 = (timer1.getTime())/5;
    }
    else if(opacity2<1 && img2start){
        opacity2 = (timer2.getTime())/5;
    }
    
    //Detect if we moved the marker using mouse position
    if (startingPos1 && !img2start && mouse_pr.getPressed()[0] === 1 && mouse_pr.getPos()[0] >= 0.475 && mouse_pr.getPos()[0] <= 0.525 && mouse_pr.getPos()[1] >= -0.25 && mouse_pr.getPos()[1] <= 0.25){
        startingPos1 = false;
    }
    
    // Get keys
    let keys = kb.getKeys({keyList: ["up", "down"], waitRelease: false, clear: true});
    let key_name = "";
    let key_duration = "";
    
    function movingSlider1WArrowKeys(mySlider){
        if (!img2start && key_name === "up" && key_duration == undefined){
            mySlider.markerPos += 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos1 = false;
        }
            
        else if (!img2start && key_name === "down" && key_duration == undefined){
            mySlider.markerPos -= 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos1 = false;
        }
    }
    
    if (keys.length > 0){
        key_name = keys[0].name;
        key_duration = keys[0].duration;
        movingSlider1WArrowKeys(slider_pr);
    }
        
    // print rating next to slider before releasing the mouse
    if (!img2start && !startingPos1) {
        // display rating value
        val = Math.round(slider_pr.markerPos)
        rating_val_pr.text = val >= 0 ? Math.abs(val)+txtScoreY : Math.abs(val)+txtScoreN;
    }
    
    if (startingPos2 && img2start && mouse_pr.getPressed()[0] === 1 && mouse_pr.getPos()[0] >= 0.475 && mouse_pr.getPos()[0] <= 0.525 && mouse_pr.getPos()[1] >= -0.25 && mouse_pr.getPos()[1] <= 0.25){
        startingPos2 = false;
        img1stop = true;
    }
    
    function movingSlider2WArrowKeys(mySlider){
        if (img2start && key_name === "up" && key_duration == undefined){
            mySlider.markerPos += 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos2 = false;
            img1stop = true;
        }
            
        else if (img2start && key_name === "down" && key_duration == undefined){
            mySlider.markerPos -= 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos2 = false;
            img1stop = true;
        }
    }
    
    if (keys.length > 0){
        key_name = keys[0].name;
        key_duration = keys[0].duration;
        movingSlider2WArrowKeys(slider_pr2);
    }
    
    //Save rating of slider_pr on img2
    if (img2start && !startingPos2) {
        // display rating value
        val = Math.round(slider_pr2.markerPos)
        rating_val_pr.text = val >= 0 ? Math.abs(val)+txtScoreY : Math.abs(val)+txtScoreN;
    }
    
    //Start img2 and img3
    if (index > 0) {
        if (t >= 5.0 && image_2pr.status === NOT_STARTED && image_1pr.opacity >= 1) {
            img2start = true;
            //slider_pr2.reset();
            slider_pr.lastrating = slider_pr.markerPos;
            timer2.reset();
            rating_val_pr.text = "";
        } else {
            if (t >= 10.0 && image_3pr.status === NOT_STARTED && image_2pr.opacity >= 1) {
                img3start = true;
                img1stop = true;
            }
        }
    } else {
        if (slider_pr.getRating() !== undefined && image_2pr.status === NOT_STARTED && image_1pr.opacity >= 1) {
            img2start = true;
            //slider_pr2.reset();
            slider_pr.lastrating = slider_pr.markerPos;
            timer2.reset();
            rating_val_pr.text = "";
        }
        if (slider_pr2.getRating() !== undefined && image_3pr.status === NOT_STARTED && image_2pr.opacity >= 1) {
            img3start = true;
            img1stop = true;
        }
    }
    
    
    // *text_1pr* updates
    if (frameN >= 0.0 && text_1pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1pr.tStart = t;  // (not accounting for frame time here)
      text_1pr.frameNStart = frameN;  // exact frame index
      
      text_1pr.setAutoDraw(true);
    }

    if (text_1pr.status === PsychoJS.Status.STARTED && Boolean((img2start == 1))) {
      text_1pr.setAutoDraw(false);
    }
    
    // *text_2pr* updates
    if (((img2start == 1)) && text_2pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2pr.tStart = t;  // (not accounting for frame time here)
      text_2pr.frameNStart = frameN;  // exact frame index
      
      text_2pr.setAutoDraw(true);
    }

    if (text_2pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      text_2pr.setAutoDraw(false);
    }
    
    // *text_3pr* updates
    if (((img3start == 1)) && text_3pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3pr.tStart = t;  // (not accounting for frame time here)
      text_3pr.frameNStart = frameN;  // exact frame index
      
      text_3pr.setAutoDraw(true);
    }

    if (text_3pr.status === PsychoJS.Status.STARTED && t >= (text_3pr.tStart + 1)) {
      text_3pr.setAutoDraw(false);
    }
    
    // *image_1pr* updates
    if (t >= 0.0 && image_1pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1pr.tStart = t;  // (not accounting for frame time here)
      image_1pr.frameNStart = frameN;  // exact frame index
      
      image_1pr.setAutoDraw(true);
    }

    if (image_1pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      image_1pr.setAutoDraw(false);
    }
    
    if (image_1pr.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_1pr.setOpacity(opacity1, false);
    }
    
    // *image_2pr* updates
    if (((img2start == 1)) && image_2pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2pr.tStart = t;  // (not accounting for frame time here)
      image_2pr.frameNStart = frameN;  // exact frame index
      
      image_2pr.setAutoDraw(true);
    }

    if (image_2pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      image_2pr.setAutoDraw(false);
    }
    
    if (image_2pr.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_2pr.setOpacity(opacity2, false);
    }
    
    // *image_3pr* updates
    if (((img3start == 1)) && image_3pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3pr.tStart = t;  // (not accounting for frame time here)
      image_3pr.frameNStart = frameN;  // exact frame index
      
      image_3pr.setAutoDraw(true);
    }

    if (image_3pr.status === PsychoJS.Status.STARTED && t >= (image_3pr.tStart + 1)) {
      image_3pr.setAutoDraw(false);
    }
    
    // *slider_pr* updates
    if (t >= 0.0 && slider_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_pr.tStart = t;  // (not accounting for frame time here)
      slider_pr.frameNStart = frameN;  // exact frame index
      
      slider_pr.setAutoDraw(true);
    }

    if (slider_pr.status === PsychoJS.Status.STARTED && Boolean((img1stop == 1))) {
      slider_pr.setAutoDraw(false);
    }
    
    // *slider_pr2* updates
    if (((img2start == 1)) && slider_pr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_pr2.tStart = t;  // (not accounting for frame time here)
      slider_pr2.frameNStart = frameN;  // exact frame index
      
      slider_pr2.setAutoDraw(true);
    }

    if (slider_pr2.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      slider_pr2.setAutoDraw(false);
    }
    
    // *label1_pr* updates
    if (t >= 0.0 && label1_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label1_pr.tStart = t;  // (not accounting for frame time here)
      label1_pr.frameNStart = frameN;  // exact frame index
      
      label1_pr.setAutoDraw(true);
    }

    if (label1_pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      label1_pr.setAutoDraw(false);
    }
    
    // *label2_pr* updates
    if (t >= 0.0 && label2_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label2_pr.tStart = t;  // (not accounting for frame time here)
      label2_pr.frameNStart = frameN;  // exact frame index
      
      label2_pr.setAutoDraw(true);
    }

    if (label2_pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      label2_pr.setAutoDraw(false);
    }
    
    // *rating_val_pr* updates
    if (t >= 0.0 && rating_val_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_val_pr.tStart = t;  // (not accounting for frame time here)
      rating_val_pr.frameNStart = frameN;  // exact frame index
      
      rating_val_pr.setAutoDraw(true);
    }

    if (rating_val_pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      rating_val_pr.setAutoDraw(false);
    }
    // *mouse_pr* updates
    if (t >= 0.0 && mouse_pr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_pr.tStart = t;  // (not accounting for frame time here)
      mouse_pr.frameNStart = frameN;  // exact frame index
      
      mouse_pr.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_pr.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_pr.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      mouse_pr.status = PsychoJS.Status.FINISHED;
  }
    if (mouse_pr.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_pr.getPressed();
      // check if the mouse was inside our 'clickable' objects
      gotValidClick = false;
      for (const obj of [slider_pr, slider_pr2]) {
        if (obj.contains(mouse_pr)) {
          gotValidClick = true;
          mouse_pr.clicked_name.push(obj.name)
        }
      }
      _mouseXYs = mouse_pr.getPos();
      mouse_pr.x.push(_mouseXYs[0]);
      mouse_pr.y.push(_mouseXYs[1]);
      mouse_pr.leftButton.push(_mouseButtons[0]);
      mouse_pr.midButton.push(_mouseButtons[1]);
      mouse_pr.rightButton.push(_mouseButtons[2]);
      mouse_pr.time.push(mouse_pr.mouseClock.getTime());
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice' ---
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    kb.clock.reset();
    kb.stop();
    kb.clearEvents();
    psychoJS.experiment.addData('slider_pr.response', slider_pr.getRating());
    psychoJS.experiment.addData('slider_pr.rt', slider_pr.getRT());
    psychoJS.experiment.addData('slider_pr.history', slider_pr.getHistory());
    psychoJS.experiment.addData('slider_pr2.response', slider_pr2.getRating());
    psychoJS.experiment.addData('slider_pr2.rt', slider_pr2.getRT());
    psychoJS.experiment.addData('slider_pr2.history', slider_pr2.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_pr.x', mouse_pr.x);
    psychoJS.experiment.addData('mouse_pr.y', mouse_pr.y);
    psychoJS.experiment.addData('mouse_pr.leftButton', mouse_pr.leftButton);
    psychoJS.experiment.addData('mouse_pr.midButton', mouse_pr.midButton);
    psychoJS.experiment.addData('mouse_pr.rightButton', mouse_pr.rightButton);
    psychoJS.experiment.addData('mouse_pr.time', mouse_pr.time);
    psychoJS.experiment.addData('mouse_pr.clicked_name', mouse_pr.clicked_name);
    
    // the Routine "practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var readyComponents;
function readyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ready' ---
    t = 0;
    readyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_3
    //Change the text according to the selected language, function SetTxtInstr2()
    function SetTxtReady(){
        if (english){
            ready_2.text = "Ready to begin?";
            txt_next_3.text = "BEGIN";
        }
        else{
            ready_2.text = "Prêt à commencer ?";
            txt_next_3.text = "COMMENCER";
        }
    }
    SetTxtReady();
    
    
    
    txt_next_3.setPos(next_3.pos);
    // setup some python lists for storing info about the mouse_3
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse_3.mouseClock.reset();
    // keep track of which components have finished
    readyComponents = [];
    readyComponents.push(ready_2);
    readyComponents.push(next_3);
    readyComponents.push(txt_next_3);
    readyComponents.push(mouse_3);
    
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function readyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ready' ---
    // get current time
    t = readyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    //Change the color of highlighed rect
    function HighlightRect(rec1, txt_rec1, mouse) {
         if (rec1.contains(mouse)) {
            rec1.setOpacity(0.99);
            txt_rec1.setOpacity(2);
         } 
        else{
            rec1.setOpacity(0.73);
            txt_rec1.setOpacity(0.73);
        }
    }
    
    HighlightRect(next_3, txt_next_3, mouse_3);
    
    // *ready_2* updates
    if (t >= 0.0 && ready_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ready_2.tStart = t;  // (not accounting for frame time here)
      ready_2.frameNStart = frameN;  // exact frame index
      
      ready_2.setAutoDraw(true);
    }

    
    // *next_3* updates
    if (t >= 0.0 && next_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_3.tStart = t;  // (not accounting for frame time here)
      next_3.frameNStart = frameN;  // exact frame index
      
      next_3.setAutoDraw(true);
    }

    
    // *txt_next_3* updates
    if (t >= 0.0 && txt_next_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      txt_next_3.tStart = t;  // (not accounting for frame time here)
      txt_next_3.frameNStart = frameN;  // exact frame index
      
      txt_next_3.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [next_3]) {
            if (obj.contains(mouse_3)) {
              gotValidClick = true;
              mouse_3.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of readyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function readyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ready' ---
    for (const thisComponent of readyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "ready" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    kb.clock.reset();
    kb.start();
    kb.clearEvents();
    
    img2start = false;
    img3start = false;
    img1stop = false;
    image_1.setOpacity(0);
    image_2.setOpacity(0);
    startingPos1 = true;
    startingPos2 = true;
    //Adapt the color and size of the marker to the slider
    col = new util.Color('black');
    
    //Display rating
    rating_val.setAlignHoriz('right');
    preview_pos = [0.613, 0];
    rating_val.setPos(preview_pos);
    
    //Sliders
    slider1_is_initialized = false;
    slider2_is_initialized = false;
    
    slider.lastrating = "";
    
    txtScoreY = "";
    txtScoreN = "";
    //opacity timers
    timer1 = new util.Clock();
    timer2 = new util.Clock();
    opacity1 = 0;
    opacity2 = 0;
    
    //Change the text according to the selected language, function SetTxtPractice()
    function SetTxtPractice(){
        if (english){
            label1.text = "100% YES";
            label2.text = "100% NO";
            txtScoreY = "% YES";
            txtScoreN = "% NO";
            //rate_instr_pr.text = "Select your rating";
        }
        else{
            label1.text = "100% OUI";
            label2.text = "100% NON";
            txtScoreY = "% OUI";
            txtScoreN = "% NON";
            //rate_instr_pr.text = "Choisissez votre note";
        }
    }
    SetTxtPractice();
    
    text_1.setText(txt_1);
    text_2.setText(txt_2);
    text_3.setText(txt_3);
    image_1.setImage(img_1);
    image_2.setImage(img_2);
    image_3.setImage(img_3);
    slider.reset()
    slider2.reset()
    rating_val.setPos(preview_pos);
    rating_val.setText('');
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    mouse.mouseClock.reset();
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(text_1);
    trialComponents.push(text_2);
    trialComponents.push(text_3);
    trialComponents.push(image_1);
    trialComponents.push(image_2);
    trialComponents.push(image_3);
    trialComponents.push(slider);
    trialComponents.push(slider2);
    trialComponents.push(label1);
    trialComponents.push(label2);
    trialComponents.push(rating_val);
    trialComponents.push(mouse);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    function InitializeSlider1(){
         try {
            slider._skin.STANDARD.MARKER_COLOR = col;
            slider._skin.MARKER_SIZE = [0.05, 0.05];
            slider.markerPos = 0;
            slider._onChange(true)();
            //slider._setupSlider();
        } catch (err) {}
        slider1_is_initialized  = true;
    }
    
    //Initialize slider 2
    function InitializeSlider2(){
        try {
            slider2._skin.STANDARD.MARKER_COLOR = col;
            slider2._skin.MARKER_SIZE = [0.05, 0.05];
            slider2._onChange(true)();
            //slider2._setupSlider();
            slider2.draw();
            slider2.setAutoDraw(true);
        } catch (err) {}
        slider2_is_initialized  = true;
    }
    
    //Initialize slider1 marker at 0 position
    if (!slider1_is_initialized && image_1.status === STARTED){
        InitializeSlider1();
    }
    
    //Initialize slider2 marker at slider1 marker position
    if (!slider2_is_initialized && image_2.status === STARTED){
        slider2.markerPos = slider.lastrating;
        InitializeSlider2();
    }
    
    // Compute opacities
    if(opacity1<1 && !img2start){
        opacity1 = (timer1.getTime())/5;
    }
    else if(opacity2<1 && img2start){
        opacity2 = (timer2.getTime())/5;
    }
    
    //Detect if we moved the marker using mouse position
    if (startingPos1 && !img2start && mouse.getPressed()[0] === 1 && mouse.getPos()[0] >= 0.475 && mouse.getPos()[0] <= 0.525 && mouse.getPos()[1] >= -0.25 && mouse.getPos()[1] <= 0.25){
        startingPos1 = false;
    }
    
    // Get keys
    let keys = kb.getKeys({keyList: ["up", "down"], waitRelease: false, clear: true});
    let key_name = "";
    let key_duration = "";
    
    function movingSlider1WArrowKeys(mySlider){
        if (!img2start && key_name === "up" && key_duration == undefined){
            mySlider.markerPos += 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos1 = false;
        }
            
        else if (!img2start && key_name === "down" && key_duration == undefined){
            mySlider.markerPos -= 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos1 = false;
        }
    }
    
    if (keys.length > 0){
        key_name = keys[0].name;
        key_duration = keys[0].duration;
        movingSlider1WArrowKeys(slider);
    }
        
    // print rating next to slider before releasing the mouse
    if (!img2start && !startingPos1) {
        // display rating value
        val = Math.round(slider.markerPos)
        rating_val.text = val >= 0 ? Math.abs(val)+txtScoreY : Math.abs(val)+txtScoreN;
    }
    
    if (startingPos2 && img2start && mouse.getPressed()[0] === 1 && mouse.getPos()[0] >= 0.475 && mouse.getPos()[0] <= 0.525 && mouse.getPos()[1] >= -0.25 && mouse.getPos()[1] <= 0.25){
        startingPos2 = false;
        img1stop = true;
    }
    
    function movingSlider2WArrowKeys(mySlider){
        if (img2start && key_name === "up" && key_duration == undefined){
            mySlider.markerPos += 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos2 = false;
            img1stop = true;
        }
            
        else if (img2start && key_name === "down" && key_duration == undefined){
            mySlider.markerPos -= 10;
            mySlider.recordRating(mySlider.markerPos);
            startingPos2 = false;
            img1stop = true;
        }
    }
    
    if (keys.length > 0){
        key_name = keys[0].name;
        key_duration = keys[0].duration;
        movingSlider2WArrowKeys(slider2);
    }
    
    //Save rating of slider_pr on img2
    if (img2start && !startingPos2) {
        // display rating value
        val = Math.round(slider2.markerPos)
        rating_val.text = val >= 0 ? Math.abs(val)+txtScoreY : Math.abs(val)+txtScoreN;
    }
    
    //Start img2 and img3
    if (t >= 5.0 && image_2.status === NOT_STARTED && image_1.opacity >= 1) {
        img2start = true;
        //slider2.reset();
        slider.lastrating = slider.markerPos;
        timer2.reset();
        rating_val.text = "";
    } else {
        if (t >= 10.0 && image_3.status === NOT_STARTED && image_2.opacity >= 1) {
            img3start = true;
            img1stop = true;
        }
    }
    
    // *text_1* updates
    if (frameN >= 0.0 && text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1.tStart = t;  // (not accounting for frame time here)
      text_1.frameNStart = frameN;  // exact frame index
      
      text_1.setAutoDraw(true);
    }

    if (text_1.status === PsychoJS.Status.STARTED && Boolean((img2start == 1))) {
      text_1.setAutoDraw(false);
    }
    
    // *text_2* updates
    if (((img2start == 1)) && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    if (text_2.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      text_2.setAutoDraw(false);
    }
    
    // *text_3* updates
    if (((img3start == 1)) && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    if (text_3.status === PsychoJS.Status.STARTED && t >= (text_3.tStart + 1)) {
      text_3.setAutoDraw(false);
    }
    
    // *image_1* updates
    if (t >= 0.0 && image_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_1.tStart = t;  // (not accounting for frame time here)
      image_1.frameNStart = frameN;  // exact frame index
      
      image_1.setAutoDraw(true);
    }

    if (image_1.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      image_1.setAutoDraw(false);
    }
    
    if (image_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_1.setOpacity(opacity1, false);
    }
    
    // *image_2* updates
    if (((img2start == 1)) && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    if (image_2.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      image_2.setAutoDraw(false);
    }
    
    if (image_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      image_2.setOpacity(opacity2, false);
    }
    
    // *image_3* updates
    if (((img3start == 1)) && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    if (image_3.status === PsychoJS.Status.STARTED && t >= (image_3.tStart + 1)) {
      image_3.setAutoDraw(false);
    }
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }

    if (slider.status === PsychoJS.Status.STARTED && Boolean((img1stop == 1))) {
      slider.setAutoDraw(false);
    }
    
    // *slider2* updates
    if (((img2start == 1)) && slider2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider2.tStart = t;  // (not accounting for frame time here)
      slider2.frameNStart = frameN;  // exact frame index
      
      slider2.setAutoDraw(true);
    }

    if (slider2.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      slider2.setAutoDraw(false);
    }
    
    // *label1* updates
    if (t >= 0.0 && label1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label1.tStart = t;  // (not accounting for frame time here)
      label1.frameNStart = frameN;  // exact frame index
      
      label1.setAutoDraw(true);
    }

    if (label1.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      label1.setAutoDraw(false);
    }
    
    // *label2* updates
    if (t >= 0.0 && label2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      label2.tStart = t;  // (not accounting for frame time here)
      label2.frameNStart = frameN;  // exact frame index
      
      label2.setAutoDraw(true);
    }

    if (label2.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      label2.setAutoDraw(false);
    }
    
    // *rating_val* updates
    if (t >= 0.0 && rating_val.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_val.tStart = t;  // (not accounting for frame time here)
      rating_val.frameNStart = frameN;  // exact frame index
      
      rating_val.setAutoDraw(true);
    }

    if (rating_val.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      rating_val.setAutoDraw(false);
    }
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED && Boolean((img3start == 1))) {
      mouse.status = PsychoJS.Status.FINISHED;
  }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      // check if the mouse was inside our 'clickable' objects
      gotValidClick = false;
      for (const obj of [slider, slider2]) {
        if (obj.contains(mouse)) {
          gotValidClick = true;
          mouse.clicked_name.push(obj.name)
        }
      }
      _mouseXYs = mouse.getPos();
      mouse.x.push(_mouseXYs[0]);
      mouse.y.push(_mouseXYs[1]);
      mouse.leftButton.push(_mouseButtons[0]);
      mouse.midButton.push(_mouseButtons[1]);
      mouse.rightButton.push(_mouseButtons[2]);
      mouse.time.push(mouse.mouseClock.getTime());
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var condition_type;
var response_condition;
var match;
var answeredTrial;
var degree_change;
function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code
    // Save images times
    psychoJS.experiment.addData('image_1.started', image_1.tStart); 
    psychoJS.experiment.addData('image_1.stopped', image_1.tStop); 
    if (slider.getRT() != null && image_1.tStart != null){
        psychoJS.experiment.addData('image_1.rt', slider.getRT()-image_1.tStart); 
    }
    else{
        psychoJS.experiment.addData('image_1.rt', ''); 
    }
    psychoJS.experiment.addData('image_2.started', image_2.tStart); 
    psychoJS.experiment.addData('image_2.stopped', image_2.tStop); 
    if (slider2.getRT() != null && image_2.tStart != null){
        psychoJS.experiment.addData('image_2.rt', slider2.getRT()-image_2.tStart);
    }
    else{
        psychoJS.experiment.addData('image_2.rt', ''); 
    }
    psychoJS.experiment.addData('image_3.started', image_3.tStart); 
    psychoJS.experiment.addData('image_3.stopped', image_3.tStop);
    
    // Save additionals data
    
    //condition_type
    condition_type = (condition[0] === condition[1]) ? 'confirm' : 'disconfirm';
    psychoJS.experiment.addData('condition_type', condition_type);
    
    //response_condition
    response_condition = (slider.getRating() == null || slider2.getRating() == null) ? '' : 
    (slider.getRating() < 0 && slider2.getRating() <= slider.getRating()) ? 'NN' :
    (slider.getRating() < 0 && slider2.getRating() > slider.getRating()) ? 'NY' :
    (slider.getRating() > 0 && slider2.getRating() < slider.getRating()) ? 'YN' :
    (slider.getRating() > 0 && slider2.getRating() >= slider.getRating()) ? 'YY' : 'ERROR';
    psychoJS.experiment.addData('response_condition', response_condition);
    
    // match and answered trial
    match = (condition && response_condition && condition == response_condition) ? 1 :
    (condition && response_condition && condition != response_condition) ? 0 : "";
    psychoJS.experiment.addData('match', match);
    answeredTrial = (match.toString().length === 0) ? 0 : 1;
    psychoJS.experiment.addData('answeredTrial', answeredTrial);
    
    // degree_change
    degree_change = (slider.getRating() == null || slider2.getRating() == null) ? "" :
    Math.abs(slider.getRating()-slider2.getRating());
    psychoJS.experiment.addData('degree_change', degree_change);
    
    thisExp.addData('currentTrial', currentTrial);
    currentTrial = currentTrial + 1;
    
    kb.clock.reset();
    kb.stop();
    kb.clearEvents();
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    psychoJS.experiment.addData('slider.history', slider.getHistory());
    psychoJS.experiment.addData('slider2.response', slider2.getRating());
    psychoJS.experiment.addData('slider2.rt', slider2.getRT());
    psychoJS.experiment.addData('slider2.history', slider2.getHistory());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_4
    
    //Change the text according to the selected language, function SetTxtThx()
    function SetTxtThx(){
        if (english){
            thx.text = "Thank you for your participation!";
        }
        else{
            thx.text = "Merci de votre participation!";
        }
    }
    
    // Compute additional scores, save them to the data file and send them to Redcap 
    function GetData(){
        try{
            let data = thisExp._trialsData;
            
            /* Make array objects all have the same keys */
            let defaults = { "Language" : "", "participant" : "", "date" : "", "session": "", "expName:":"", 
            "psychopyVersion": "", "OS": "", "frameRate": "", "slider.response": "", "slider.rt": "", 
            "slider2.response": "", "slider2.rt": "", "mouse_i.x": "", "mouse_i.y": "", "mouse_i.leftButton": "",
            "mouse_i.midButton": "", "mouse_i.rightButton": "", "mouse_i.time": "", "mouse_i.clicked_name": "",
            "mouse_i2.x": "", "mouse_i2.y": "", "mouse_i2.leftButton": "", "mouse_i2.midButton": "",
            "mouse_i2.rightButton": "", "mouse_i2.time": "", "mouse_i2.clicked_name": "","slider_pr.response": "",
            "slider_pr.rt": "", "slider_pr.history": "", "slider_pr2.response": "", "slider_pr2.rt": "", 
            "slider_pr2.history": "", "mouse_pr.x": "", "mouse_pr.y": "", "mouse_pr.leftButton": "",
            "mouse_pr.midButton": "", "mouse_pr.rightButton": "", "mouse_pr.time": "", "mouse_pr.clicked_name": "",
            "image_1.started": "","image_1.stopped": "", "image_1.rt": "","image_2.started": "",
            "image_2.stopped": "", "image_2.rt": "", "image_3.started": "", "image_3.stopped": "",
            "condition_type": "", "response_condition": "", "match": "", "answeredTrial": "", "degree_change": "",
            "currentTrial": "", "mouse.x": "", "mouse.y": "", "mouse.leftButton": "", "mouse.midButton": "",
            "mouse.rightButton": "", "mouse.time": "", "mouse.clicked_name": "", 
            "slider.history": "", "slider2.history": ""};
            
            data = $.map( data, function( item ){
                return $.extend( {}, defaults, item ); 
            });
            
            // Rename "index" key to avoid errors
            data = data.map(elem => {
                elem.given_index = elem.index;
                delete elem.index;
                return elem;
            });
            
            // Create all the variables we will need
            let data2 = ["percent_trials_considered", "acc_confirm", "acc_disconfirm", "total_acc", 
            "ratingchg_correctC", "ratingchg_correctD", "ratingchg_incorrectC",
            "ratingchg_incorrectD","total_ratingchg", "rt_correctC", "rt_correctD",
            "rt_incorrectC","rt_incorrectD", "total_rt"];
            
            for (let i = 0; i < data2.length; i++) {
                data[data2[i]] = "";
            }
            
            // Create our dataframe where we will compute all the values
            
            let df1 = new dfd.DataFrame(data);
            
            // Count rows where match or deg change is empty so we can compute the pourcentage of trials answered
            let df1_answered_trials = df1.loc({
                rows: df1["answeredTrial"].eq(1)
            });
            
            let df1_not_answered_trials = df1.loc({
                rows: df1["answeredTrial"].eq(0)
            });
            
            let nb_answered_trials = df1_answered_trials.$data.length;
            let nb_trials = nb_answered_trials+df1_not_answered_trials.$data.length;
            
            // Remove rows where match or deg change is empty so that it won't perturn means
            df1 = df1.loc({
                rows: df1["answeredTrial"].eq(1)
            });
            df1.resetIndex({ inplace: true });
            
            // We will compute the scores
            
            let sub_df_confirm = df1.loc({
                rows: df1["condition_type"].eq("confirm")
            });
            
            let sub_df_disconfirm = df1.loc({
                rows: df1["condition_type"].eq("disconfirm")
            });
            
            let sub_df_confirm_match, sub_df_confirm_nomatch, sub_df_disconfirm_match, sub_df_disconfirm_nomatch;
            sub_df_confirm_match = sub_df_confirm_nomatch = sub_df_disconfirm_match = sub_df_disconfirm_nomatch = new dfd.DataFrame([]);
            
            // If we have confirm and disconfirm trials
            if (sub_df_confirm.size>0){
                sub_df_confirm_match = sub_df_confirm.loc({
                    rows: sub_df_confirm["match"].eq(1)
                });
                
                sub_df_confirm_nomatch = sub_df_confirm.loc({
                    rows: sub_df_confirm["match"].eq(0)
                });
            }
            if (sub_df_disconfirm.size>0){
                sub_df_disconfirm_match = sub_df_disconfirm.loc({
                    rows: sub_df_disconfirm["match"].eq(1)
                });
                sub_df_disconfirm_nomatch = sub_df_disconfirm.loc({
                    rows: sub_df_disconfirm["match"].eq(0)
                });
            }
            
            
            // Compute means only when it is possible and we don't have empty values (no matches found or no degree changes)
            df1["percent_trials_considered"] = (nb_answered_trials/nb_trials)*100;
            df1["acc_confirm"] = (sub_df_confirm["match"] == null || sub_df_confirm["match"].$data.length == 0) ? "" : sub_df_confirm["match"].mean();
            df1["acc_disconfirm"] = (sub_df_disconfirm["match"] == null || sub_df_disconfirm["match"].$data.length == 0) ? "" : sub_df_disconfirm["match"].mean();
            df1["total_acc"] = (df1["match"] == null || df1["match"].$data.length == 0) ? "" : df1["match"].mean();
            df1["ratingchg_correctC"] = (sub_df_confirm_match["degree_change"] == null || sub_df_confirm_match["degree_change"].$data.length == 0) ? "" : sub_df_confirm_match["degree_change"].mean();
            df1["ratingchg_correctD"] = (sub_df_disconfirm_match["degree_change"] == null || sub_df_disconfirm_match["degree_change"].$data.length == 0) ? "" : sub_df_disconfirm_match["degree_change"].mean();
            df1["ratingchg_incorrectC"] = (sub_df_confirm_nomatch["degree_change"] == null || sub_df_confirm_nomatch["degree_change"].$data.length == 0) ? "" : sub_df_confirm_nomatch["degree_change"].mean();
            df1["ratingchg_incorrectD"] = (sub_df_disconfirm_nomatch["degree_change"] == null || sub_df_disconfirm_nomatch["degree_change"].$data.length == 0) ? "" : sub_df_disconfirm_nomatch["degree_change"].mean();
            df1["total_ratingchg"] = (df1["degree_change"] == null || df1["degree_change"].$data.length == 0) ? "" : df1["degree_change"].mean();
            df1["rt_correctC"] = (sub_df_confirm_match["slider2.rt"] == null || sub_df_confirm_match["slider2.rt"].$data.length == 0) ? "" : sub_df_confirm_match["slider2.rt"].mean();
            df1["rt_correctD"] = (sub_df_disconfirm_match["slider2.rt"] == null || sub_df_disconfirm_match["slider2.rt"].$data.length == 0) ? "" : sub_df_disconfirm_match["slider2.rt"].mean();
            df1["rt_incorrectC"] = (sub_df_confirm_nomatch["slider2.rt"] == null || sub_df_confirm_nomatch["slider2.rt"].$data.length == 0) ? "" : sub_df_confirm_nomatch["slider2.rt"].mean();
            df1["rt_incorrectD"] = (sub_df_disconfirm_nomatch["slider2.rt"] == null || sub_df_disconfirm_nomatch["slider2.rt"].$data.length == 0) ? "" : sub_df_disconfirm_nomatch["slider2.rt"].mean();
            df1["total_rt"] = (df1["slider2.rt"] == null || df1["slider2.rt"].$data.length == 0) ? "" : df1["slider2.rt"].mean();
            
            //df1.print();
            //console.log("new dataframe: ", df1);
            
            let taskVersion = "Online_v3.0.3"; // Version of the task
            
            const exp_name = "BADE_images";
            
            df1["date_exp"] = startingDate;
            df1["task_version"] = taskVersion;
            
            // Save dataframe inside the logfile
            psychoJS.experiment.addData('date_exp', df1["date_exp"]);
            psychoJS.experiment.addData('task_version', df1["task_version"]);
            psychoJS.experiment.addData('percent_trials_considered', df1["percent_trials_considered"]);
            psychoJS.experiment.addData('acc_confirm', df1["acc_confirm"]);
            psychoJS.experiment.addData('acc_disconfirm', df1["acc_disconfirm"]);
            psychoJS.experiment.addData('total_acc', df1["total_acc"]);
            psychoJS.experiment.addData('ratingchg_correctC', df1["ratingchg_correctC"]);
            psychoJS.experiment.addData('ratingchg_correctD', df1["ratingchg_correctD"]);
            psychoJS.experiment.addData('ratingchg_incorrectC', df1["ratingchg_incorrectC"]);
            psychoJS.experiment.addData('ratingchg_incorrectD', df1["ratingchg_incorrectD"]);
            psychoJS.experiment.addData('total_ratingchg', df1["total_ratingchg"]);
            psychoJS.experiment.addData('rt_correctC', df1["rt_correctC"]);
            psychoJS.experiment.addData('rt_correctD', df1["rt_correctD"]);
            psychoJS.experiment.addData('rt_incorrectC', df1["rt_incorrectC"]);
            psychoJS.experiment.addData('rt_incorrectD', df1["rt_incorrectD"]);
            psychoJS.experiment.addData('total_rt', df1["total_rt"]);
            
            return df1;
        }
        catch(err) {
          console.log("Error while computing the scores.");
          dumpError(err);
        }
    }
    
    function REDCapImportRecord(df1) {
        try{
          const url = 'https://portal.rimuhc.ca/cim/redcap/api/';
          let testdata;
          // Warning: If we add or remove columns in the Google file, we must also change the variables here
          testdata = [{
                    record_id: df1.loc({rows: [0], columns: ["participant"]}).values[0][0],
                    [redcapVars[1]]: df1.loc({rows: [0], columns: ["session"]}).values[0][0],
                    [redcapVars[2]]: df1["date_exp"],
                    [redcapVars[3]]: df1["task_version"],
                    [redcapVars[4]]: df1["percent_trials_considered"],
                    [redcapVars[5]]: df1["acc_confirm"],
                    [redcapVars[6]]: df1["acc_disconfirm"],
                    [redcapVars[7]]: df1["total_acc"],
                    [redcapVars[8]]: df1["ratingchg_correctC"],
                    [redcapVars[9]]: df1["ratingchg_correctD"],
                    [redcapVars[10]]: df1["ratingchg_incorrectC"],
                    [redcapVars[11]]: df1["ratingchg_incorrectD"],
                    [redcapVars[12]]: df1["total_ratingchg"],
                    [redcapVars[13]]: df1["rt_correctC"],
                    [redcapVars[14]]: df1["rt_correctD"],
                    [redcapVars[15]]: df1["rt_incorrectC"],
                    [redcapVars[16]]: df1["rt_incorrectD"],
                    [redcapVars[17]]: df1["total_rt"]
          }];
          
          testdata = JSON.stringify(testdata);
          //console.log("testdata: ", testdata);
    
          const body = new FormData();
          body.append('token', redcapVars[0]);
          body.append('content', 'record');
          body.append('format', 'json');
          body.append('overwriteBehavior', 'normal');
          body.append('data', testdata);
          body.append('returnContent', 'ids');
    
          const params = {
            method: 'POST',
            body,
          }
    
        return fetch(url, params)
          .then(data => {
            console.log('fetch data: ', data)
          })
          .catch(error => console.log('Error: ', error))
     
        }
        catch(err) {
          console.log("Error while sending data to redcap: ", err.message);
          dumpError(err);
        }
    }
    
    function dumpError(err) {
      if (typeof err === 'object') {
        if (err.message) {
          console.log('\nMessage: ' + err.message);
        }
        if (err.stack) {
          console.log('\nStacktrace:');
          console.log('====================');
          console.log(err.stack);
        }
      } else {
        console.log('dumpError :: argument is not an object');
      }
    }
    
    //Call functions
    SetTxtThx();
    var res = GetData();
    REDCapImportRecord(res);
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thx);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thx* updates
    if (t >= 0.0 && thx.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thx.tStart = t;  // (not accounting for frame time here)
      thx.frameNStart = frameN;  // exact frame index
      
      thx.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thx.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thx.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
