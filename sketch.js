let gameState = "menu";
let pathState = 0; // Tracks progression

function preload() {
  
  Pic1 = loadImage('Enemy 1.png'); 
  Pic2 = loadImage('Enemy 2.png'); 
  Pic3 = loadImage('Enemy 3.png'); 
  Pic4 = loadImage('Enemy 4.png'); 
  bg = loadImage('BG.png');
  bg0 = loadImage('BG0.jpg');
  bg1 = loadImage('BG1.jpg');
  bg2 = loadImage('BG2.jpg');
  bg3 = loadImage('BG3.jpg');
  bg4 = loadImage('BG4.jpg');
  bg5 = loadImage('BG5.jpg');
  ed1 = loadImage('ED1.jpg');
  d1= loadImage('Dreadnought.png');
}


function setup() {
  createCanvas(800, 600);
  textSize(18);
  textAlign(CENTER);
}

function draw() {
  background(30);
  fill(255);

  if (gameState === "menu") {
    displayMenu();
  } 
  else if (gameState === "stage1") {
    stage1();}
   else if (gameState === "path1A") {
    path1A();
  } else if (gameState === "path2A") {
    path2A();
  } else if (gameState === "path3A") {
    path3A();
  } else if (gameState === "path3B") {
    path3B();
  } else if (gameState === "path4A") {
    path4A();
  } else if (gameState === "path4B") {
    path4B();
  } else if (gameState === "path4C") {
    path4C();
  }else if (gameState === "path4D") {
    path4D();
  }else if (gameState === "path5A") {
    path5A();
  }
  else if (gameState === "path5B") {
    path5B();
  }else if (gameState === "path5C") {
    path5C();
  }else if (gameState === "path5D") {
    path5D();
  }else if (gameState === "path5E") {
    path5E();
  }else if (gameState === "path5F") {
    path5F();
  }else if (gameState === "path5G") {
    path5G();
  }else if (gameState === "path6A") {
    path6A();
  }else if (gameState === "path6B") {
    path6B();
  }else if (gameState === "pathex") {
    pathex();
  }else if (gameState === "path7A") {
    path7A();
  }else if (gameState === "path7B") {
    path7B();
  }else if (gameState === "pathex1") {
    pathex1();
  }else if (gameState === "path8A") {
    path8A();
  }
  
  else if (gameState === "gameOver") {
    displayGameOver();
  }
}

function displayMenu() {
  background(bg);
  text("Begin your journey as a space marine in Warhammer 40K!", width / 2, height / 4+140);
  text("Press [Enter] to start your journey.", width / 2, height / 4+180);
  
  
  
  

  

}

function stage1() {
  background(bg0);
 text("The thunderous roar of a drop pod fills your ears.  ",width/2,height/4);
    text("You crash into the ruins of a manufactorum, the landing shaking the ground beneath you.",width/2,height/4+40);
    text("Vox chatter confirms your squad has been scattered. You must proceed alone.",width/2,height/4+80)
    text("Options: \n1.Check your own status", width / 2, height / 4 + 120);
    text("Press [1] to choose.", width / 2, height / 4+200);
}
function path1A() {
  background(0)
  background(bg0);
   text("You checked around different sections of your power armour.  ", width / 2, height / 4);
      text("You find out that you carry a boltgun(a standard weapon carried by all space marines,  ", width / 2, height / 4+40);
      text("You also find some coins. What's the use of this on the battlefield, you wonder.", width / 2, height / 4+80);
      text(" Options: \n1.Proceed!", width / 2, height / 4+120);
      text("Press [1] to choose.", width / 2, height / 4+160);
}

function path2A() {
  background(0)
  background(bg1);
  image(Pic1, 50, 325, 150, 200);
  image(Pic1, 550, 325, 150, 200);
  text("You step into the manufactorum, its halls dimly lit by the fires of battle. ", width / 2, height / 4);
  text("Servo-skulls hover aimlessly, and the air reeks of machine oil and death.", width / 2, height / 4+40);
  text("A pack of Chaos Cultists appears, chanting blasphemous hymns. They spot you ", width / 2, height / 4 + 80);
  text("and charge, brandishing rusted weapons.", width/2, height /4+120);
  text("Options: \n1.Fight them with your bolter\n2. Use your plasma cannon.", width / 2, height / 4+160);
}

function path3A() {
  background(bg1);
  text("The blessed roar of your boltgun fills the air. Explosive rounds tear ", width / 2, height / 4);
  text("through the heretics, bursting insider their bodies. Their corporse shattered,",width / 2, height / 4+40);                  
  text("fragments of bullets and organs spilled everywhere.", width / 2, height / 4+80);
  text("Boltgun is clearly not a merciful weapon, but clearly it's the only thing you have.",width / 2, height / 4+120);
  text("There are two doors in the hall,one leads to the main chamber,the other one",width / 2, height / 4+160);
  text("has a small, dark corridor behind it.",width / 2, height / 4+200);
  text("Options: \n1.Go to the main chamber\n2. Go to the dark corridor.", width / 2, height / 4+240);
  
}

function path3B() {
  background(bg1);
  text("You hear a click sound. Transaction complete, a mechnical voice says.",width / 2, height / 4);
  text("That seems to happen in somewhere close. But you don't have time to think about it. ",width / 2, height / 4+40);
  text("You suddenly find out that you carry a plasma cannon. You aim it at the enemies",width / 2, height / 4+80);
  text("The plasma cannon shines, quickly bursts out a lightning ball",width / 2, height / 4+120);
  text("It charges through the heretics, burning their bodies into ashes",width / 2, height / 4+160);
  text("The weapon is powerful. But its ammo is rare.",width / 2, height / 4+200);
  text("There are two doors in the hall,one leads to the main chamber,the other one",width / 2, height / 4+240);
  text("has a small, dark corridor behind it.",width / 2, height / 4+280);
  text("Options: \n1.Go to the main chamber\n2. Go to the dark corridor.", width / 2, height / 4 + 320);
  
}

function path4A() {
  background(bg2);
  image(Pic2, 0, 325, 150, 200);
  image(Pic2, 650, 325, 150, 200);
  text("In the main chamber, there stands several chaos space marine.", width / 2, height / 4);
  text("The armor is an unholy masterpiece, a blackened shell that seems to ", width / 2, height / 4+40);
  text("drink in the light, leaving only shadows in its wake.", width / 2, height / 4 + 80);
  text("Glowing, malevolent eyes shine from the visor—blazing ", width / 2, height / 4 + 120);
  text("with the unholy light of the Warp, as though they are windows into the very heart of hell.", width / 2, height / 4 + 160);
  text("Traitors!You shouts angrily at those heavily-armored monsters.", width / 2, height / 4 + 200 );
  text("Options: \n1.Get your chainswords out, let them suffer！ \n2. Use your plasma cannon, pierce through their armor!", width / 2, height / 4 + 240);
}

function path4B() {
  background(bg3);
  image(Pic3, 400, 150, 150, 200);
  text("A wraith-like shadow sprints in front of you like lightning.", width / 2, height / 4-100);
  text("It kicked your boltgun to the other side. ", width / 2, height / 4-60);
  text("Realizing this, you decide to counter.", width / 2, height / 4 -40);
  text("Options: \n1.Pull out your chainsword, fight it blade to blade! \n2. Use your plasma cannon, most efficient way to kill it!", width / 2, height / 2 + 80);

}

function path4C() {
  background(bg2);
  image(Pic2, 0, 325, 150, 200);
  image(Pic2, 650, 325, 150, 200);
 text("In the main chamber, there stands several chaos space marine.", width / 2, height / 4);
  text("The armor is an unholy masterpiece, a blackened shell that seems to ", width / 2, height / 4+40);
  text("drink in the light, leaving only shadows in its wake.", width / 2, height / 4 + 80);
  text("Glowing, malevolent eyes shine from the visor—blazing ", width / 2, height / 4 + 120);
  text("with the unholy light of the Warp, as though they are windows into the very heart of hell.", width / 2, height / 4 + 160);
  text("Traitors!You shouts angrily at those heavily-armored monsters.", width / 2, height / 4 + 200);
  text("Options: \n1.Get your chainswords out, let them suffer！ \n2. Use your plasma cannon, pierce through their armor!", width / 2, height / 4 + 240);
}

function path4D() {
  background(bg3);
  image(Pic3, 400, 150, 150, 200);
  text("A wraith-like shadow sprints in front of you like lightning.", width / 2, height / 4-100);
  text("It kicked your plasma cannon to the other side. ", width / 2, height / 4-60);
  text("Realizing this, you decide to counter.", width / 2, height / 4 -40);
  text("Options: \n1.Pull out your chainsword, fight it blade to blade! \n2. Use your bolter,  Within seven steps, the gun is accurate and fast.", width / 2, height / 2 + 80);

}

function path5A() {
  background(bg2);
  text("You charges forward. Your chainsword roares to life.", width / 2, height / 4);
  text("The terminator reacts. Their autocannons are blazing, raining cartridge cases. ", width / 2, height / 4+40);
  text("You get hit. The rounds pierced through your chest plate. You can feel your organs crushed inside, ", width / 2, height / 4 + 80);
  text("as if struck by a moving vehicle. You staggered, and eventually fell down.  ", width / 2, height / 4 + 120);
  text("Suddenly, a line of words appeared on the screen   ", width / 2, height / 4 + 160);
  text("Unlock the Emperor's Wrath DLC for 4.99 dollars to access the holy flamethrower!", width/2, height/4+200);
  text("Options: \n1.Take off your headphone. ", width / 2, height / 4 + 240);

}

function path5B() {
  background(bg2);
  text("You hear a click sound. Transaction complete, a mechnical voice says.",width / 2, height / 4);
  text("That seems to happen in somewhere close. But you don't have time to think about it. ",width / 2, height / 4+40);
  text("You suddenly find out that you carry a plasma cannon. You aim it at the enemies",width / 2, height / 4+80);
  text("It's supposed to be undercharged. But now it's surprisingly functional.",width / 2, height / 4+120);
  text("You fires the plasma cannon, The plasma bolt struck him center mass, ", width / 2, height / 4+160);
  text("its superheated fury tearing through his corrupted armor. ", width / 2, height / 4+200);
  text("The bolt vaporizes his chest cavity, incinerating any trace of his twisted humanity. ", width / 2, height / 4 + 240);
  text("Filthy traitor! You steps forward, spit on what remains of the terminator.", width / 2, height / 4 + 260);
  text(" Now the time has come, enter the center spire and end this madness!  ", width / 2, height / 4 + 300);
  text("Options: \n1.Enter the next area.", width/2, height/4+340);

}

function path5C() {
  background(bg3);
  text("You charges on, with the disciplined fury as the emperor's loyal servant. ", width / 2, height / 4);
  text("Sparks explode in the air as metal meets metal,the air around you  ", width / 2, height / 4+40);
  text(" vibrates with the tension of your struggle. ", width / 2, height / 4 + 80);
  text("Eventually, you duck beneath the spinning blade and drive   ", width / 2, height / 4 + 120);
  text(" you power sword into the side of the Aspiring Champion’s armored chest. ", width / 2, height / 4 + 160);
  text("The enemy stumbles, and fall down. He gasps for breath but eventually fails.", width/2, height/4+200);
  text("After checking on your own situation, you found out that you are slightly hurt.  ", width / 2, height / 4 + 240);
  text("You decide to move on quickly, for this is not a place safe of staying. ", width / 2, height / 4 + 280);
  text("Options: \n1.Enter the next area.", width/2, height/4+320);

}

function path5D() {
  background(bg3);
  text("You hear a click sound. Transaction complete, a mechnical voice says.",width / 2, height / 4-120);
  text("That seems to happen in somewhere close. But you don't have time to think about it. ",width / 2, height / 4-80);
  text("You suddenly find out that you carry a plasma cannon. You aim it at the enemies",width / 2, height / 4-40);
  text("You aim the plasma cannon at the Chaos warrior, your heart pounding in chest.",width / 2, height / 4);
  text("You know the dangers of using such a weapon at close range, but this is no ordinary enemy. ", width / 2, height / 4+40);
  text("You squeezed the trigger on his plasma cannon. The plasma beam cutting through the air like a spear. ", width / 2, height / 4 + 80);
  text("The plasma beam slammed into his chest, tearing through his corrupted armor like it was paper.   ", width / 2, height / 4 + 120);
  text("The force of the plasma cannon sent a violent shockwave through the air,",width / 2, height / 4 + 160);
  text("knocking you off balance. You feel the intensity of the plasma energy wash over your whole body." , width / 2, height / 4 + 200);
  text("You failed. A line of text appeared on the screen: Emperor’s finest armor doesn’t come cheap." , width / 2, height / 4 + 240);
  text("20 dollars for a set of Terminator Armor!" , width / 2, height / 4 + 280);
  text("Options: \n1.Take off your headphone." , width / 2, height / 4 + 320);
}

function path5E() {
  background(bg2);
  text("You charges forward. Your chainsword roares to life.", width / 2, height / 4);
  text("The terminator reacts. Their autocannons are blazing, raining cartridge cases. ", width / 2, height / 4+40);
  text("You get hit. The rounds pierced through your chest plate. You can feel your organs crushed inside, ", width / 2, height / 4 + 80);
  text("as if struck by a moving vehicle. You staggered, and eventually fell down.  ", width / 2, height / 4 + 120);
  text("Suddenly, a line of words appeared on the screen   ", width / 2, height / 4 + 160);
  text("Unlock the Emperor's Wrath DLC for $4.99 to access the holy flamethrower!", width/2, height/4+200);
  text("Options: \n1.Take off your headphone. ", width / 2, height / 4 + 240);
}

function path5F() {
  background(bg3);
text("You charges on, with the disciplined fury as the emperor's loyal servant. ", width / 2, height / 4);
  text("Sparks explode in the air as metal meets metal,the air around you  ", width / 2, height / 4+40);
  text(" vibrates with the tension of your struggle. ", width / 2, height / 4 + 80);
  text("Eventually, you duck beneath the spinning blade and drive", width / 2, height / 4 + 120);
  text(" you power sword into the side of the Aspiring Champion’s armored chest. ", width / 2, height / 4 + 160);
  text("The enemy stumbles, and fall down. He gasps for breath but eventually fails.", width/2, height/4+200);
  text("After checking on your own situation, you found out that you are slightly hurt.  ", width / 2, height / 4 + 240);
  text("You decide to move on quickly, for this is not a place safe of staying. ", width / 2, height / 4 + 280);
  text("Options: \n1.Enter the next area.", width/2, height/4+320);
}

function path5G() {
  background(bg3);
text("The bolt round struck the Aspiring Champion in the throat, ", width / 2, height / 4);
text("the explosive payload detonating inside his neck.The corrupted warrior let out a gurgling roar as the detonation tore through his body,", width / 2, height / 4+40)
text("The corrupted warrior let out a gurgling roar as the detonation tore through his body, ", width / 2, height / 4 + 80);
text("severing his helm from his shoulders in a spray of ichor and molten ceramite.", width / 2, height / 4 + 120);
text("You finished him with almost no losses. Now the time has come, enter the center spire and end this madness! ", width / 2, height / 4 + 160);
text("Options: \n1.Enter the next area.", width/2, height/4+200);

}


function path6A() {
  background(bg5);
  text("You took off your headphone, feeling frustrated. You should have killed the enemies.", width / 2, height / 2);
  text("Your character data is far more superior than them. It shouldn't be like this.", width / 2, height / 2+40);
  text("You sit on your gaming chair, feeling furious and puzzled. ", width / 2, height / 2 + 80);
  text("Suddenly, you realizes something changes in the screen.", width / 2, height / 2 + 120);
  text("The ad pops up.", width / 2, height / 2 + 160);
  
}
function path6B() {
  background(bg4);
  text("The Chaos Sorcerer stands atop a jagged obsidian spire, framed against a blood-red sky. ", width / 2, height / 2+60);
  text("He proclaims, “Chaos shall consume all!”.", width / 2, height / 2+100);
  text("Options: \n1.Fight with it, with your weapons and your loyalty to the emperor", width/2, height/2+160);
}
function pathex() {
  background(bg5);
 image(d1, 150, 150, 150, 200);
  
}
function pathex1() {
  background(d1);
  fill("black");
 text("Options: \n1.There is only one option, pay!", width/2, height/2+160);
  
}
function path7A() {
  background(ed1);
  fill("yellow");
  text("The dreadnought's twin-linked autocannons spat streams of explosive shells, ", width / 2, height / 4);
  fill("yellow");
  text("shredding heretics who dared to defy the Emperor's will.  ", width / 2, height / 4+40);
  fill("yellow");
  text("It'been a long time since you last in-game purchase. ", width / 2, height / 4 + 80);
  fill("yellow");
  text("After each level, the game gets much more harder. You began to purchase ", width / 2, height / 4 + 120);
  fill("yellow");
  text("more and more items. From small perks to large weapons, more and more.", width / 2, height / 4 + 160);
  fill("yellow");
  text("itms that are much more expensive, you keep purchasing and playing.  ", width / 2, height / 4 + 200);
  fill("yellow");
  text("In the grim darkness of the far future, there is only war...", width / 2, height / 4 + 240);
  fill("yellow");
  text("and a premium subscription model to access the good weapons", width / 2, height / 4 + 280);
  fill("yellow");
  text("This is ending one, press R, go back to the menu and explore more!", width / 2, height / 4 + 320);
 fill("yellow");
}

function path7B() {
  background(bg4);
  text("You charges through the crackling Warp energy with unwavering resolve. ", width / 2, height / 4);
  text("Boltgun in hand, you unleashes a hail of explosive rounds, each one detonating   ", width / 2, height / 4+40);
  text("against the sorcerer’s Warp shield in bursts of flame and shrapnel. ", width / 2, height / 4 + 80);
  text("Closing the distance, you discards his bolter and draws his chainsword,  ", width / 2, height / 4 + 120);
  text("its teeth roaring to life as you leaps toward the sorcerer. ", width / 2, height / 4 + 160);
  text("With one final, decisive strike, your chainsword finds its mark,   ", width / 2, height / 4 + 200);
  text("carving through corrupted armor as the sorcerer’s unholy screams ", width / 2, height / 4 + 240);
  text("are drowned by the roar of the blade.", width / 2, height / 4 + 280);
  text("Options: \n1.Finally!.", width / 2, height / 4 + 320);
}


function path8A() {
  background(bg5);
  text("Finishing the game, you put your headphone down in relieve. ", width / 2, height / 4);
  text("With your exceptional abilities in gaming, you beat the level.", width / 2, height / 4+40);
  text("But you still almost failed. You began to wonder.  ", width / 2, height / 4 + 80);
  text("The equipment of yours is far better than your enemy.", width / 2, height / 4 + 120);
  text(" However, when actually playing it, the enemies still seem impossible to beat.  ", width / 2, height / 4 + 160);
  text("You realize that this is just another pay-to-win game. But still you are happy  ", width / 2, height / 4 + 200);
  text("that you beat it using exceptional skills.But suddenly, you realize something  ", width / 2, height / 4 + 240);
  text("on the screen. It is an ad. Want to see the stories after this? ", width / 2, height / 4 + 280);
  text("For $4.99, get Emperor's Wrath DLC! It writes.", width / 2, height / 4 + 320);
  text("Options: \n1.This is ending two, press R, go back to the menu and explore more!", width / 2, height / 4 + 360);
}

function displayGameOver() {
  text("Your journey ends here. Press [R] to restart.", width / 2, height / 2);
}

function keyPressed() {
  if (gameState === "menu" && key === 'Enter') {
    gameState = "stage1";
      print(gameState)
  } 
  else if (gameState === "stage1" && keyCode === 49) {
    
      print(gameState)
      gameState = "path1A"
     
  }
   else if (gameState === "path1A") {
    if (keyCode === 49) gameState = "path2A"; 

  } else if (gameState === "path2A") {

    if (keyCode === 49) gameState = "path3A"; 
    else if (keyCode === 50) gameState = "path3B"; 

  } else if (gameState === "path3A") {
    if (keyCode === 49) gameState = "path4A"; 
    else if (keyCode === 50) gameState = "path4B";
  } else if (gameState === "path3B") {
    if (keyCode === 49) gameState = "path4C"; 
    else if (keyCode === 50) gameState = "path4D";
  }
  else if (gameState === "path4A") {
    if (keyCode === 49) gameState = "path5A"; 
    else if (keyCode === 50) gameState = "path5B";
  }
  else if (gameState === "path4B") {
    if (keyCode === 49) gameState = "path5C"; 
    else if (keyCode === 50) gameState = "path5D";
  }
  else if (gameState === "path4C") {
    if (keyCode === 49) gameState = "path5E"; 
    else if (keyCode === 50) gameState = "path5D";
  }
  else if (gameState === "path4D") {
    if (keyCode === 49) gameState = "path5F"; 
    else if (keyCode === 50) gameState = "path5G";
  }
  else if (gameState === "path5A") {
    if (keyCode === 49) gameState = "path6A"; 
  }
 else if (gameState === "path5B") {
    if (keyCode === 49) gameState = "path6B"; 
  }
  else if (gameState === "path5C") {
    if (keyCode === 49) gameState = "path6B"; 
  }
  else if (gameState === "path5D") {
    if (keyCode === 49) gameState = "path6A"; 
  }
   else if (gameState === "path5E") {
    if (keyCode === 49) gameState = "path6A"; 
  }
    else if (gameState === "path5F") {
    if (keyCode === 49) gameState = "path6B"; 
  }
    else if (gameState === "path5G") {
    if (keyCode === 49) gameState = "path6B"; 
  }
  else if (gameState === "path6A") {
    if (keyCode === 49) gameState = "pathex"; 
  }
  else if (gameState === "path6B") {
    if (keyCode === 49) gameState = "path7B"; 
  }
   else if (gameState === "pathex") {
    if (keyCode === 49) gameState = "pathex1"; 
  }
  else if (gameState === "path7B") {
    if (keyCode === 49) gameState = "path8A"; 
  }
   else if (gameState === "pathex1") {
    if (keyCode === 49) gameState = "path7A"; 
  }
  if (key === 'r' || key === 'R') {
    gameState = "menu";
  }
}
