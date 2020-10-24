function setup() {
  createCanvas(600, 600);
}


function draw() {
// background
  background(209, 246, 243);

  // colors
  skin = color(255, 233, 208);
  red = color(210, 42, 46);
  black = color(0, 0, 0);
  lightred = color(255, 113, 120);
  blush = color(255, 188, 176);
  white = color(255, 255, 255);
  shadow = color(244,170,117);
  shirtshadow = color(231,231,231);
  glassshadow = color (236,204,154);
  
  // face
  fill(skin);
  noStroke();
  circle(309,287,350);
  
  // neck shadow
  fill(shadow);
  noStroke();
  beginShape();
  vertex(281,417);
  vertex(305,417);
  vertex(335,415);
  vertex(360,414);
  vertex(361,425);
  vertex(345,431);
  vertex(326,436);
  vertex(307,440);
  vertex(285,442);
  vertex(279,431);
  endShape();
  
  // left eye
  fill(black);
  noStroke();
  circle(217,286,42);
  
  // right eye
  fill(black);
  noStroke();
  circle(396,276,42);
  
  // shirt
  fill(white);
  noStroke();
  beginShape();
  vertex(278,431);
  vertex(294,449);
  vertex(314,457);
  vertex(334,455);
  vertex(349,446);
  vertex(363,428);
  vertex(370,599);
  vertex(271,599);
  endShape();
  
    // shirt shadow
  fill(shirtshadow);
  noStroke();
  beginShape();
  vertex(285,439);
  vertex(297,450);
  vertex(310,455);
  vertex(322,456);
  vertex(334,454);
  vertex(346,446);
  vertex(356,438);
  vertex(361,471);
  vertex(362,517);
  vertex(362,553);
  vertex(352,498);
  vertex(347,467);
  vertex(326,471);
  vertex(308,469);
  vertex(296,464);
  vertex(283,535);
  endShape();
  
  // jacket right
  fill(red);
  noStroke();
  beginShape();
  vertex(355,415);
  vertex(361,524);
  vertex(364,598);
  vertex(493,598);
  vertex(481,544);
  vertex(465,493);
  vertex(443,438);
  vertex(419,397);
  endShape();
  
  // jacket left
  fill(red);
  noStroke();
  beginShape();
  vertex(216,406);
  vertex(255,414);
  vertex(285,417);
  vertex(286,476);
  vertex(280,598);
  vertex(150,599);
  vertex(161,544);
  vertex(175,494);
  vertex(196,449);
  endShape();
  
      // blush
  fill(blush);
  circle(175,366,70);
  circle(459,344,70);
  
      // hair shadow
  fill(shadow);
  noStroke();
  beginShape();
  vertex(167,231);
  vertex(192,225);
  vertex(224,217);  
  vertex(253,210);
  vertex(284,195);
  vertex(306,185);  
  vertex(323,174);
  vertex(334,156);
  vertex(345,171); 
  vertex(362,180);
  vertex(381,188);
  vertex(400,194);  
  vertex(425,202);
  vertex(442,213);
  vertex(459,232);  
  vertex(472,246);
  vertex(470,224);
  vertex(441,169); 
  vertex(372,124);
  vertex(322,112);
  vertex(279,131);  
  vertex(187,173);
  endShape();
  
    // hair left
  fill(black);
  beginShape();
  vertex(329,63);
  vertex(334,141);
  vertex(320,166);
  vertex(298,182);
  vertex(262,197);
  vertex(230,206);
  vertex(180,223);
  vertex(153,246);
  vertex(141,274);
  vertex(138,315);
  vertex(144,342);
  vertex(160,369);
  vertex(175,385);
  vertex(200,400);
  vertex(220,407);
  vertex(208,425);
  vertex(190,462);
  vertex(187,473);
  vertex(160,445);
  vertex(143,408);
  vertex(136,382);
  vertex(130,414);
  vertex(115,434);
  vertex(116,407);
  vertex(109,361);
  vertex(100,315);
  vertex(94,340);
  vertex(91,373);
  vertex(83,352);
  vertex(83,314);
  vertex(91,261);
  vertex(103,211);
  vertex(125,157);
  vertex(151,126);
  vertex(175,102);
  vertex(212,82);
  vertex(251,66);
  vertex(289,59);
  endShape();
 
    // hair right
  fill(black);
  beginShape();
  vertex(319,62);
  vertex(327,153);
  vertex(334,137);
  vertex(344,153);
  vertex(364,169);
  vertex(386,179);
  vertex(417,190);
  vertex(442,206);
  vertex(465,228);
  vertex(479,265);
  vertex(479,295);
  vertex(475,326);
  vertex(462,363);
  vertex(448,378);
  vertex(415,399);
  vertex(431,421);
  vertex(451,464);
  vertex(467,436);
  vertex(471,407);
  vertex(475,375);
  vertex(483,405);
  vertex(490,422);
  vertex(498,381);
  vertex(507,334);
  vertex(517,358);
  vertex(538,379);
  vertex(522,325);
  vertex(520,288);
  vertex(518,223);
  vertex(506,181);
  vertex(478,138);
  vertex(444,104);
  vertex(399,81);
  vertex(357,65);
  endShape();
  
   // mouth
  fill(red);
  circle(268,343,31);
  circle(357,342,31);
  beginShape();
  vertex(278,331);
  vertex(257,354);
  vertex(276,365);
  vertex(291,370);
  vertex(307,372);
  vertex(325,371);
  vertex(340,367);
  vertex(361,357);
  vertex(348,330);
  vertex(338,334);
  vertex(323,339);
  vertex(311,343);
  vertex(299,341);
  vertex(289,335);
  endShape();
  
  // teeth 
  fill(white);
  beginShape();
  vertex(276,330);
  vertex(277,347);
  vertex(288,342);  
  vertex(298,346);
  vertex(309,347);
  vertex(320,346);
  vertex(330,344);
  vertex(336,340);
  vertex(347,345);  
  vertex(348,328);
  vertex(332,334);
  vertex(320,338);
  vertex(307,340);
  vertex(295,337);
  vertex(285,333);
  endShape();

  // tongue 
  fill(lightred);
  beginShape();
  vertex(275,365);
  vertex(286,357);
  vertex(296,354);  
  vertex(306,353);
  vertex(316,353);
  vertex(326,355);
  vertex(335,359);
  vertex(343,366);
  vertex(326,371);  
  vertex(310,372);
  vertex(290,370);
  endShape();
  
    // left collar 
  fill(lightred);
  beginShape();
  vertex(285,417);
  vertex(262,473);
  vertex(221,406);  
  endShape();
  
    // right collar 
  fill(lightred);
  beginShape();
  vertex(357,414);
  vertex(416,397);
  vertex(390,467);  
  endShape();
  
      // button
  fill(white);
  circle(378,484,10);
  circle(378,517,10);
  circle(380,553,10);
  circle(382,586,10);
  
      // button hole
  fill(white);
  rect(270,477,4,15);
  rect(268,510,4,15);
  rect(267,541,4,15);
  rect(265,574,4,15);
 
    // glasses shadow left
  fill(glassshadow);
  noStroke();
  beginShape();
  vertex(225,235);
  vertex(235,237);
  vertex(246,243);  
  vertex(256,252);
  vertex(263,265);
  vertex(265,275);  
  vertex(265,290);
  vertex(246,259);
  vertex(238,249);  
  endShape();
  
   // glasses shadow right
  fill(glassshadow);
  noStroke();
  beginShape();
  vertex(400,223);
  vertex(419,228);
  vertex(434,237);  
  vertex(444,248);
  vertex(448,262);
  vertex(449,279);  
  vertex(435,259);
  vertex(420,241);
  endShape();
  
       // lenses
  noFill();
  strokeWeight(5);
  stroke(black);
  circle(217,286,100); 
  circle(398,275,100); 
  
    // frame
  noFill();
  strokeWeight(5);
  stroke(black);
  beginShape();
  vertex(265,273);
  vertex(275,267);
  vertex(288,261); 
  vertex(302,259);
  vertex(318,260);
  vertex(333,263);  
  vertex(346,270); 
  endShape();
  
    // side frame 
  noFill();
  strokeWeight(5);
  stroke(black);
  line(163,284,136,289);
  line(449,272,481,277);
  
   // highlights 1
  fill(white);
  noStroke();
   beginShape();
  vertex(174,291);
  vertex(176,284);
  vertex(188,307); 
  vertex(188,319);
  endShape();
  
  
     // highlights 2
  fill(white);
  noStroke();
   beginShape();
  vertex(187,300);
  vertex(189,293);
  vertex(201,316); 
  vertex(201,328);
  endShape();
  
      // highlights 3
  fill(white);
  noStroke();
   beginShape();
  vertex(355,283);
  vertex(357,276);
  vertex(369,299); 
  vertex(369,311);
  endShape();
  
     // highlights 4
  fill(white);
  noStroke();
   beginShape();
  vertex(369,292);
  vertex(371,285);
  vertex(383,308); 
  vertex(383,320);
  endShape();

}
