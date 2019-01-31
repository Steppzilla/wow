

  //Anzahlfunktion. Mindestens 1 Anzahl muss hierfür gegeben sein! Aus dieser rechnen wir zunächst zahlen um, die anders gegeben sind:


var a1icon='<img class="images" src="https://img.icons8.com/wired/50/000000/blunt-bulb.png"> ';////Glühbirne
var a2icon='<img class="images" src="https://img.icons8.com/ios/50/000000/forward-punch.png">';//Faust'
var a3icon='<img class="images" src="https://img.icons8.com/wired/64/000000/chimpanzee.png">';//schimpanse
var a4icon='<img class="images" src="https://img.icons8.com/wired/64/000000/gold-bars.png">';//Goldbarren
var a5icon=  '<img class="images" src="https://img.icons8.com/wired/64/000000/cat-footprint.png">';//Tatze
var a6icon='<img class="images" src="https://img.icons8.com/ios/50/000000/frog.png">';//Frosch
var a7icon='<img class="images" src="https://img.icons8.com/ios/50/000000/bot.png">';//ro-bot
var a8icon='<img class="images" src="https://img.icons8.com/ios/50/000000/viking-ship.png">';//Schiff
var a9icon='<img class="images" src="https://img.icons8.com/wired/64/000000/snow-storm.png">';//Schneesturm
var a10icon='<img class="images" src="https://img.icons8.com/ios/50/000000/test-failed.png">';//Test misslungen//Gym
var a11icon='<img class="images" src="https://img.icons8.com/ios/50/000000/alarm-clock.png">';//Uhrenhersteler
var a12icon='<img class="images" src="https://img.icons8.com/wired/64/000000/syringe.png">';//Spritze//Impfung
var a13icon='<img class="images" src="https://img.icons8.com/ios/50/000000/virus.png">';//virus?//Virus
var a14icon='<img class="images" src="https://img.icons8.com/wired/64/000000/nurse-female.png">';// //krankenschwester//Krankenpfleger:

//für die images folgenden link einfügen:
//<a href="https://icons8.com/icon/104374/feld">Feld icon by Icons8</a>

var iconString = [a1icon, a2icon, a3icon, a4icon, a5icon, a6icon, a7icon, a8icon, a9icon, a10icon, a11icon,a12icon, a13icon, a14icon];

var ü1="<h1> Champions des Lichts </h1>";
var a1Text="Movement-Anforderung:";
var a1Text1 = " Nicht zwischen Boss+Adds stehen, ggf. der goldenen Woge ausweichen (Berührung hinterlässt DOT)";
var a1Text2 = " ggf. aus der Weihe moven (Kreis vom dicken Melee-Add)";
var a1Text3 = "Bei 'blendender Glaube' -> vom Melee-Add wegdrehen (sonst Fear)";
var a1ü2 = "<h2 class='h11'> 0-100% Energie - Boss-Buff: <span class='greentext'> Siegel der Vergeltung </span> </h2> <h2 class='h22'> Phase 1 </h2>";
var a1Auftrag1 = "DMG auf den BOSS! (wenn Add stirbt -> erhöhter Raid-DMG durch 'Unermüdlichkeit')";
var ü12 = "<h2 class='h11'> 0-100% Energie - Boss-Buff: <span class='greentext'> Siegel der Abrechnung </span> </h2> <h2 class='h22'> Phase 2 </h2>";
var a1Auftrag3 = "KEIN DMG AUF BOSS, wechsel auf ADDS! (sonst -> höherer Raiddmg inc. durch 'Unermüdlichkeit')";
var a1Auftrag4 = "kick: 'Heilung' / 'Sühne'";
var a1Auftrag6 = "Purge auf Gegner, die von der Welle getroffen wurden. (Sie heilen sich)";
var a1Auftrag7 = "Wenn Adds tot sind, WARTEN bis Energie voll ist und PH 1 erneut beginnt";
var ü13 = "<h2 class='h11'> 30% Boss-HP </h2> <h2 class='h22'> HT </h2>";
var a1Array00 = [ü1, a1Text, a1Text1, a1Text2, a1Text3];
var a1Array0 = [ a1ü2,a1Auftrag1];
var a1Array1 =[ ü12, a1Auftrag3, a1Auftrag4,a1Auftrag6, a1Auftrag7];
var a1Array2 = [ ü13];
var a1Array = [a1Array00, a1Array0, a1Array1, a1Array2];


var ü2 = "Jadefeuermeister (Mara & Anathos)";
var a2Text = "Wenn Anathros (Mage) sich wegportet muss sein Schild durch DMG entfernt werden, dann Pyroschlag->kickbar!"
var a2Auftrag1 = "HC: einzelne Spieler werden vom 'Geist von Xuen' verfolgt. Dieser muss aus dem Raid und kiten, die anderen slowen + töten den Geist.";
var a2Auftrag2 = 'HC: Es entstehen Magmafallen, die Leute hochwerfen. Diese müssen mit Immunität bzw. von unterschiedlichen Spielern durch Auslösen entfernt werden/ggf. "langsamer Fall" benutzen o.ä.. (Spieler bekommen einen Debuff  mit dem sie mehr Schaden von der nächsten Falle erhalten)';
var a2Auftrag3='30 Energie: 3 Bomben entstehn. ';
var a2Auftrag30 = 'In Bomben-Kuppel hineinlaufen, DMG auf sie, ihrem Strahl ausweichen! Vorige Fähigkeiten Pyro+Fallen beachten!' ;
var a2Auftrag4='60 Energie:  Labyrinth durchqueren';
var a2Auftrag40='Feuer ausweichen, nicht durch die Kreise! Hexerportal nutzen';

var a2Array0 = [ü2, a2Text, a2Auftrag1, a2Auftrag2];
var a2Array1 = [a2Auftrag3, a2Auftrag30];
var a2Array2 = [a2Auftrag4, a2Auftrag40];
var a2Array = [a2Array0, a2Array1, a2Array2];


var ü3 = "Grong der Zurückgekehrte";
var a3Text = "Meist entfernt voneinander stehen ('Vodooentladung' mgl. 10 m Range), bei 'wildes Brüllen' in 4 meter Range zu jemandem sein! (HC)";
var a3Auftrag0 = "Add spawnt immer wieder am Rand -> fokus dmg/kicken!";
var a3Auftrag00 = "Es hinterlässt eine Kugel. Wer hineinläuft bekommt für 20 Sek die Chance, eine Kugel auf den Boss zu werfen. Damit sollte er möglichst warten bis er 50- max 75 Energie hat.";
var a3Auftrag1 = "HC: Range im Target mit 'Bestialischer Wurf' -> von Gruppe entfernen (auf ihn wird der Tank geworfen)";
var a3Auftrag2 = "aus Bodeneffekten gehn (Schmettern)";
var a3Auftrag3 = "40% - HT";
var a3Array0 = [ü3, a3Text, a3Auftrag0, a3Auftrag00, a3Auftrag1, a3Auftrag2];
var a3Array1 = [a3Auftrag3];
var a3Array = [a3Array0, a3Array1];


var ü4 = "Schatzwächter/Opulenz";
var a4Text="";
var a4Auftrag1 = "";
var a4Auftrag2 = "";
var a4Auftrag3 = "";
var a4Auftrag4 = "";
var a4Auftrag5 = "";
var a4Array0 = [ü4, a4Text, a4Auftrag1, a4Auftrag2, a4Auftrag3, a4Auftrag4, a4Auftrag5];
var a4Array = [a4Array0];



var ü5 = "Konklave der Auserwählten";
var a5Text="";
var a5Auftrag1 = "";
var a5Auftrag2 = '';
var a5Auftrag3 = '';
var a5Array0 = [ü5, a5Text, a5Auftrag1, a5Auftrag2];
var a5Array = [a5Array0];


var ü6 = "König Rastakhan";
var a6Text= "";
var a6Auftrag1 = "";
var a6Auftrag2 = "";
var a6Array0 = [ü6, a6Text, a6Auftrag1, a6Auftrag2];
var a6Array = [a6Array0];



//var uh = "hallo " + bs + '(a' + bs+'ne 0' + bs + ")";


var ü7 = "Hochtüftler Mekkadrill";
var a7Text ="";
var a7Auftrag1 = "";
var a7Array0 = [ü7, a7Text, a7Auftrag1];
var a7Array = [a7Array0];


////$(".test").html(a7Text +'<p> \\( a^2 \\) </p>');
//$(".test").append('<div style="font-size: 40; height:40pt;"> \\( a^2 \\) </div>');

var ü8 ="Sturmwallblockade";
var a8Text = "";
var a8Auftrag1 = "";
var a8Array0 = [ü8, a8Text, a8Auftrag1];
var a8Array = [a8Array0];


var ü9 = "<h1> Lady Jaina Prachtmeer </h1> ";
var ü91 = "DMG: Spieler aus Eisblöcken befreien!";
var ü92 = 'Möglichst vielem ausweichen! ';
var ü93 = 'Eiskalte Berührungs-Stacks beobachten/gering halten! ';
var a9Text="<h2 class='h11'> 100%- 60% HP </h2> <h2 class='h22'> Phase 1 </h2>";
var a9Auftrag1 = "Anvisiert mit <span class='greentext'> Lawine </span> -> weg von Spielern, ZU FEUERFLÄCHEN oder Ballisten (zum löschen/Einfrieren wegnehmen)";
var a9Auftrag2 = "Adds töten, Bomben über Bord werfen";
var a9Auftrag3 = "Bei 100 Energie: <span class='greentext'> Ring des Eises </span>-> in Feuerfläche stellen + 30 Meter von Jaina weg! (7 sek Cast, ca. 170k Frostdmg und für 30 sek eingefroren, Reichweite: 30m. weiter entfernte Spieler werden aber auch 8 sek eingefroren und bekommen ca 30k dmg.)";
var a9Auftrag4 = 'Ballisten benutzen um das Schiff anzugreifen. (6 mal)';


var a9Auftrag5 ="<h2 class='h11'> 60%-40% HP </h2> <h2 class='h22'> Phase 2 </h2>";
var a9Auftrag40 = 'Zwischenphase: Jaina suchen + kicken, Winden und Eis ausweichen';
var a9Auftrag6 = '<span class="greentext"> Belagerungsbrecherschlag </span> -> aus der Gruppe moven! (ca. 130k dmg + knockback, je weiter entfernt von diesem desto geringer der dmg)';
var a9Auftrag7 ='Spieler mit  <span class="greentext"> Breitseite </span> müssen weg oder damit sinnvoll 1/3 Blindgängern (gelbe Nameplates) zerstören';
var a9Auftrag8 = 'move, move, move! (Gletscherstrahl, Hand des Frosts-Projektile aus der Lawine, Eismeteor+Kometen...)';

var a9Int21= "<h2 class='h11'> 40% HP </h2> <h2 class='h22'> HT ->Phase3 </h2>";
var a9Int22= 'weg von Jaina (300m), Eiswand zerstören';
var a9Int23= 'weg von Spielern mit "Frostherz, weg von Elementar bei 100% ENergie ("Frostnova")."';
var a9Int24= 'Nathan (kurz bevor GezeitenEle stirbt) befreien, dann Arkanbeschuss ausweichen';
var a9Int25= 'vor 20 Stacks eiskalte Berührung zum Boss, spieler im Eis schnell befreien!';
var a9Int26= 'Abbilder + in Eis gefangene Spieler schnell töten';
var a9Int27= 'move (Eismeteor, Gletscherstrahl...)';


var a9Array0= [ü9, ü91,ü92, ü93];
var a9Array1= [a9Text, a9Auftrag1, a9Auftrag2, a9Auftrag3, a9Auftrag4];
var a9Array2= [a9Auftrag5,a9Auftrag40, a9Auftrag6, a9Auftrag7, a9Auftrag8];
var a9Array3= [a9Int21, a9Int22, a9Int23, a9Int24, a9Int25, a9Int26, a9Int27]
var a9Array= [a9Array0, a9Array1, a9Array2, a9Array3];


var aufgabenVierfelder = [a1Array, a2Array, a3Array, a4Array, a5Array, a6Array, a7Array, a8Array, a9Array];
//var lösungenVierfelder = [a1LösungsString, a2LösungsString, a3LösungsString, a4LösungsString, a5LösungsString,  a6LösungsString, a7LösungsString, a8LösungsString,a9LösungsString];
