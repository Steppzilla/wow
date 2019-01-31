

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
//var a1Text="Movement-Anforderung:";
var a1Text1 = " Nicht zwischen Boss+Adds stehen, ggf. der goldenen <span class='greentext'> Woge des Lichts </span> ausweichen, die sich richtung Adds bewegt (Berührung -> DOT)";
var a1Text2 = " ggf. aus der Weihe moven (Kreis vom dicken Melee-Add)";
var a1Text3 = "Bei <span class = 'greentext'> blendender Glaube </span> -> vom Melee-Add wegdrehen (sonst Fear)";
var a1ü2 = "<h2 class='h11'> 0-100% Energie - Boss-Buff: <span class='greentext'> Siegel der Vergeltung </span> </h2> <h2 class='h22'> Phase 1 </h2>";
var a1Auftrag1 = "DMG auf den BOSS! (wenn Add stirbt -> erhöhter Raid-DMG durch 'Unermüdlichkeit')";
var ü12 = "<h2 class='h11'> 0-100% Energie - Boss-Buff: <span class='greentext'> Siegel der Abrechnung </span> </h2> <h2 class='h22'> Phase 2 </h2>";
var a1Auftrag3 = "KEIN DMG AUF BOSS, wechsel auf ADDS! (sonst -> höherer Raiddmg inc. durch 'Unermüdlichkeit')";
var a1Auftrag4 = "kick: <span class='greentext'> Heilung </span> / <span class='greentext'> Sühne </span>";
var a1Auftrag6 = "Purge auf Gegner, die von der Welle getroffen wurden. (Sie heilen sich)";
var a1Auftrag7 = "Wenn Adds tot sind, WARTEN bis Energie voll ist und PH 1 erneut beginnt";
var ü13 = "<h2 class='h11'> 30% Boss-HP </h2> <h2 class='h22'> HT </h2>";
var a1Array00 = [ü1, a1Text1, a1Text2, a1Text3];
var a1Array0 = [ a1ü2,a1Auftrag1];
var a1Array1 =[ ü12, a1Auftrag3, a1Auftrag4,a1Auftrag6, a1Auftrag7];
var a1Array2 = [ ü13];
var a1Array = [a1Array00, a1Array0, a1Array1, a1Array2];


var ü2 = "Jadefeuermeister (Mara & Anathos)";
var a2A='Heiler: "sengeder Funken" vor Ablauf dispeln';
var a2Text0 = "Hauptsächlich DMG auf Mara, sie muss immer niedriger in der HP sein und verschwindet alle 30 sek (Schlag der 100 Fäuste)"
var a2Text = "Wenn Anathros (Mage) sich wegportet muss sein Schild durch DMG entfernt werden, dann Pyroschlag->kickbar!"
var a2Text2 = "Wenn Mara (Monk) abhaut und 'wirbelnder Jadesturm' castet -> MELEESCHLAG ";
var a2Auftrag1 = "HC: einzelne Spieler werden vom 'Geist von Xuen' verfolgt. Dieser muss aus dem Raid und kiten, die anderen slowen + töten den Geist.";
var a2Auftrag2 = 'HC: Es entstehen Magmafallen, die Leute hochwerfen. Diese müssen mit Immunität bzw. von unterschiedlichen Spielern durch Auslösen entfernt werden/ggf. "langsamer Fall" benutzen o.ä.. (Spieler bekommen einen Debuff  mit dem sie mehr Schaden von der nächsten Falle erhalten)';
var a2Auftrag3='30 Energie: 3 Bomben entstehn. ';
var a2Auftrag30 = 'In Bomben-Kuppel hineinlaufen, DMG auf sie, ihrem Strahl ausweichen! Vorige Fähigkeiten Pyro+Fallen beachten!' ;
var a2Auftrag4='60 Energie:  Labyrinth durchqueren';
var a2Auftrag40='Feuer ausweichen, nicht durch die Kreise! Hexerportal nutzen';
var a2Auftrag41='Das "Minispiel" für die Tanks kann auch andere Spieler treffen!';

var a2Auftrag5='100 Energie:  verwandlung';
var a2Auftrag51='Um Mara herum verteilen, aus "Drachenodem" moven.';


var a2Array0 = [ü2, a2Text0, a2Text,a2Text2, a2Auftrag1, a2Auftrag2];
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
var a4Text="<div class='halbzeit'>  links: Yalats Bollwerk </div> <div class='halbzeit'> rechts: Hand von In'zashi </div>";
var a4Auftrag1 = "<div class='halbzeit'> R1: 100-90%: <span class='greentext'> Unstete Ladung </span> -> raus, hinterlässt Kugel </div> <div class='halbzeit'> <span class='greentext'>Flammende Bestrafung</span>->timer beobachten, direkt hinter ihn und im Uhrzeigersinn ausweichen</div>";
var a4Auftrag2 = "<div>  rechts+links: <span class='greentext'>Zermalmen </span> -> ausweichen! Er habt meist beide Arme, dann muss man schnell hinter ihn </div>";
var a4Auftrag3 = "<div> R2: 90-80%: <span class='greentext'> Flammenstrahl </span> (aus der Wand)-> 2x ausweichen (weniger gefährlich als rechts die Bestrafung) </div>";
var a4Auftrag4 = "<div> R3: 80-70%:  <span class='greentext'>Rubinstrahl </span> (aus der Wand)-> möglichst nach aussen tragen/ausweichen </div>";
var a4Auftrag5 = "<div> R4: 70-60%:  <span class='greentext'>Pulsbeschleunigendes Gift </span> macht alle 2 sek ca. 10k Naturschaden, der sich erhöht! Wer unter 50% HP droppt und dadurch Schaden erleidet bekommt <span class='greentext'> Beschleunigter Puls</span> (10 sek lang ca. 260 haste/krit/versa/mastery)</div>";
var a4Auftrag6 = "<div> R5: 60-50%:  <span class='greentext'>Verhexung der Lethargie </span> nicht moven, dispeln!</div>";
var a4Auftrag7 = "<div> R6: 50-40%:  Fähigkeiten aus R2+R3<span class='greentext'>Pulsbeschleunigendes Gift </span> macht alle 2 sek ca. 10k Naturschaden, der sich erhöht! Wer unter 50% HP droppt und dadurch Schaden erleidet bekommt <span class='greentext'> Beschleunigter Puls</span> (10 sek lang ca. 260 haste/krit/versa/mastery)</div>";
var a4Auftrag8 = "<div> R7: 40-30%:  Juwelen";
var a4Auftrag9 = "<div> R8: 30-0%:  ggf. HT oder private CDS... (achtung rechts: Bestrafung füllt den halben Raum! Noch besser moven!)";
var a4Auftrag10 = "<div> R8: 0%:  WARTEN bis anderer Wächter tot ist, denn sobald man den Raum betritt bufft er sich für jedes dann noch lebende Add. Auch auf Tanks warten :)";
var ü41 = " Bosskampf";
var ü41A1 = "<div> <span class='greentext'> Flüssiges Gold </span> -> zum Rand bringen! </div>";
var ü41A2 = "Add-Spawn in der Mitte: STUNNEN, damit sie sich nicht verteilen, AE! </div>";
var ü41A3 = "<div> <span class='greentext'> Münzregen </span> ->alle REIN/Meteor-effekt </div>";
var ü41A31 = "Heiler mit lila Stein bei <div> <span class='greentext'> Klagelied der Gier: </span> -> buff auf allen aktiv halten!</div>";
var ü41A4 = " Wissenswertes über die Steine:";
var ü41A5 = "  Diamant (weiß)/TANK ist ein Schild, der nach Verbrauch 30 sek aufladen muss.  50% Absorb, max 300% der Spieler-HP ";
var ü41A6 = "  Saphir (blau)/HEAL bufft geheilte Targets mit   <span class='greentext'>Rückenwind </span> (hält 30 sek, + 5% dmg), bei 5 Stacks:  <span class='greentext'>Beruhigende Brise </span> (12 sek 200% dmg/heal)  ";
var ü41A7 = "  Amethyst (lila)/HEAL +50% Tempo, bufft Ziele mit  <span class='greentext'>Schattenberührt</span> (90% weniger erlittener shadow-dmg, wenn er Schattendmg bekommt erhalten Spieler in 10 meter Range 1% mana)   ";
var ü41A8 = "  Rubin (rot)/2DD bufft <span class='greentext'>Fokussierter Animus</span> (dauer 5 sek, erhöht den erlittenen DMG des Ziels um 1%). Stackt maximal 1 mal pro Sek."
var ü41A9 = "  Topaz (gelb)/2DD bufft <span class='greentext'>Strahlen</span> wenn kein Spieler in der Nähe ist. Ziel: 100 Stapel (nach 95 sek alleinsein) gewährt   <span class='greentext'>Gütiges Strahlen</span>, mit diesem lauft ihr in die Gruppe, welche dann für 20 sek 100% Krit gebufft bekommt";
var ü41A10 = "  Opal (dunkelgrün)/DD bufft dir selbst <span class='greentext'>Entfesselte Wut</span> (+2% dmg) pro neu angegriffenem Target"
var ü41A11 = "  Smaragd (hellgrün)/DD bufft dir selbst <span class='greentext'>irdene Wurzeln</span> (+1% dmg) wenn ihr euch nicht bewegt! Sonst verschwindet er schnell...."

var a4Array0 = [ü4, a4Text, a4Auftrag1, a4Auftrag2, a4Auftrag3, a4Auftrag4, a4Auftrag5, a4Auftrag5, a4Auftrag6, a4Auftrag7, a4Auftrag8, a4Auftrag9, a4Auftrag10];
var a4Array1 = [ü41,ü41A1,ü41A2,ü41A3];
var a4Array2 = [ü41A4,ü41A5,ü41A6,ü41A7,ü41A8,ü41A9,ü41A10,ü41A11];
var a4Array = [a4Array0, a4Array1,a4Array2 ];



var ü5 = "Konklave der Auserwählten";
var a5A = 'Achtung, vorm Boss stehn ist nicht gut!';
var a5Text="1. Target: Paku (achtung, reihenfolge ist variabel)";
var a5Text1="Pakus Zorn -> schauen, wo Drache hinfliegt, in den Kreis hinein!";
var a5Auftrag1 = "Buff: 'greentext'>Geschenk des Windes</span> -> Gegner purgen oder Zauberraub";
var a5Auftrag2 = '2. Target: Gonk. bei 100% Energie verflucht er Spieler zu kleinen Dinos ->rauslaufen, dispeln lassen';
var a5Auftrag3 = 'Alle 60 sek: Gonks Zorn -> Raptoren töten, Dispeln , slowen (HC: Nicht näher als 5 meter zusammenkiten)';
var a5Auftrag4 = 'Kimbul: "Blutende Winde  - 5 Meter range einhalten"';
var a5Auftrag5 = 'Aspekt von Akunda: "donnernder Sturm", "Gedankentilgung"';
var a5Auftrag6 = 'Akundas Zorn: 5 Meter range, Kugel spawnen aus einem';
var a5Auftrag7 = 'hc: springendem Frosch ausweichen';
var a5Auftrag8 = 'hc: Wenn einer der Typen stirbt, gibt es AE-Schaden der gegenzuheilen ist.';
var a5Array0 = [ü5,a5A, a5Text,a5Text1, a5Auftrag1, a5Auftrag2];
var a5Array = [a5Array0];


var ü6 = "<h1> König Rastakhan </h1>";
var a6Text= "Tank: 'sengende Detonation'-> weg (Entfernung reduziert dmg)";
var a6Text0= "Weicht allen Effekten aus!"

var ü61 = "<h2 class='h11'>  </h2> <h2 class='h22'> Phase 1 </h2>";
var a6Auftrag1 = "Spieler mit 'Verheerender Axt -> ü 90% hp heilen!', ggf. Rastakhan weit weg tanken";
var a6Auftrag2 = "In den 'Meteorsprung' laufen";

var ü62 = "<h2 class='h11'> Alle Adds tot </h2> <h2 class='h22'> Phase 2 </h2>";

var a6A21 = "Sofort auf das 'Zombiestaubtotem' wechseln! (Nicht auf den übernommenen Spieler)";
var a6A22 = "Verteilt stehn, Krötenplage ausweichen (3 Kröten spawnen kegelförmig von ihm weg)";
var a6A23 = "'Feuerplage' - verteilt stehn, Kreise nicht spreaden";
var a6A24 = "'Todesriss'-> am Rand ablegen (werden die Portale, aus denen später Kugeln spawnen bzw unten Stacks resettet wrden können)";

var ü63 = "<h2 class='h11'> Rasta 60% HP </h2> <h2 class='h22'> Phase 3 </h2>";
var a63A1 = "Beste DDs + Heal zu Bwondsami -> Reich des Todes. Viel Movement (Kugeln), dort im Todesriss Stacks regelmäßig resetten (nicht unnötig oft, möglichst wenn Raid stabil, da es auch ein AE ist)";
var a63A2 = "Phase 2. Fähigkeiten weiterhin beachten!";
var a63A3 = "'Unausweichliches Ende -> weglaufen /gegen das Heranziehen anlaufen'";
var a63A4 = "'Todesriss'-> am Rand ablegen (werden die Portale, aus denen später Kugeln spawnen bzw unten Stacks resettet wrden können)";
var a63A5 = "'Sigel von Bwondamdi' -> ein spieler rein! (110k dmg) . Wenn nicht: Bwonsamdis Zorn (40m 90k pro Spieler)"

var ü64 = "<h2 class='h11'> Rasta im Reich des Todes 50% HP </h2> <h2 class='h22'> Phase 4 </h2>";
var a64A1 = "Wie sonst: Ausweichen! Es werden immer mehr Kugeln und weiterhin Detonation auf Tanks, Feuerringe, Todesrisse und das unausweichliche Ende!";

var a6Array0 = [ü6, a6Text, a6Text0];
var a6Array1 = [ü61, a6Auftrag1, a6Auftrag2];
var a6Array2 = [ü62, a6A21, a6A22, a6A23,a6A24];
var a6Array3 = [ü63, a63A1, a63A2,a63A3,a63A4,a63A5];
var a6Array4 = [ü64, a64A1];

var a6Array = [a6Array0,a6Array1,a6Array2,a6Array3,a6Array4];



//var uh = "hallo " + bs + '(a' + bs+'ne 0' + bs + ")";


var ü7 = "Hochtüftler Mekkadrill";
var a7Text ="Boss dreht sich in eine richtung und lädt eine blaue Kugel auf -> Vor ihm weg! (Sprengkanone)";
var a7Auftrag1 = "'Gigavoltentladung' -> hinter eine Mauer!";
var a7Auftrag2 = "'schwere Schubdüse'  -> ausweichen!";
var a7Auftrag3 = "Nicht unnötig moven, achtet auf geschrumpfte Spieler! (mini-leute bekommen sonst 130k dmg + 1sek stun)";
var a7Auftrag4 = " Spieler, die geschrumpft wurden, gehen in die Funkbots";
var a7Auftrag5 = " Funkbots: Wer einen Bot betritt hat 45 Sek zeit, den Code einzugeben, den aber nur Leute in anderen BOts sehen.";
var a7Auftrag6 = "<h2 class='h11'> Boss auf 40% HP </h2> <h2 class='h22'> Phase 2 </h2>";
var a7Auftrag7 = "Schafen + Schrapnellen, die aus den Schafen kommen ausweichen!"
var a7Array0 = [ü7, a7Text, a7Auftrag1,a7Auftrag2,a7Auftrag3,a7Auftrag4,a7Auftrag5];
var a7Array1=[a7Auftrag6,a7Auftrag7];
var a7Array = [a7Array0, a7Array1];


////$(".test").html(a7Text +'<p> \\( a^2 \\) </p>');
//$(".test").append('<div style="font-size: 40; height:40pt;"> \\( a^2 \\) </div>');

var ü8 ="Sturmwallblockade";
var a8Text = "<div class='halbzeit'>  links: Bruder Joseph </div><div class='halbzeit'> Schwester Katharina </div>";
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



var ü10 = "<h1> Myth+ Breakpoints </h1> ";
var a10A = "Kronsteig";
var a10A1 = " normal: 1. Treppe: 67,47 %, 2. Treppe: 82,7 %.";
var a10A2 = "<span class='bluetext'> wimmelnd: 1. Treppe: 68,79 %, 2. Treppe: 83,82 %.<span>";

var a10B = " Schrein des Sturms (mit Brücken-skip)";
var a10B1 = "beim 2. Boss: 63,44%, vorm Brücken-skip 75,98% ! später auslassbar: 1Tentakelseite: 2,42%, 3 gruppen Endbossraum: 10,88 %";
var a10B2 =  "<span class='bluetext'> beim 2. Boss: 67,13%, vorm Brücken-skip 79,97% ! später auslassbar: 1Tentakelseite : 2,02%, 3 Gruppen Endbossraum: 9,07 % </span>";

var a10E = "Boralus";
var a10E1 = " normal: Kommandantin: ca. 49,84  - 'Treppe hoch' 76,18%";
var a10E2 = " <span class='bluetext'> wimmelnd:  Kommandantin: ca. 54,05  -  'Treppe hoch' 80,16% </span>";


var a10C = "Tol Dagor";
var a10C1 = " normal: ohne Bombentyp: 60,06% (mit ihm: 62,07%)";
var a10C2 = " <span class='bluetext'> wimmelnd: ohne Bombentyp: 61,15% (mit ihm: 62,83%) </span>";

var a10D = "Tempel von Sethralis";
var a10D1 = " Bei Galvazzt:  65,91 %, Herzwächter: 2,73";
var a10D2 =  "<span class='bluetext'> Bei Galvazzt:  71,59 %, Herzwächter: 2,27 </span>";


var a10F = "Freihafen";
var a10F1 = " normal: 'Brücke': mind 67,05 %.";
var a10F2 = "<span class='bluetext'> wimmelnd: 'Brücke': mind 70,61 %. </span>";

var a10Array00 = [ü10];
var a10Array0 = [a10A, a10A1, a10A2];
var a10Array1 = [ a10B, a10B1, a10B2];
var a10Array2 = [ a10C, a10C1, a10C2];
var a10Array3 = [ a10D, a10D1, a10D2];
var a10Array4 = [ a10E, a10E1, a10E2];
var a10Array5 = [ a10F, a10F1, a10F2];


var a10Array = [a10Array00, a10Array0,a10Array4,a10Array1,a10Array2,a10Array5,a10Array3];


var aufgabenVierfelder = [a1Array, a2Array, a3Array, a4Array, a5Array, a6Array, a7Array, a8Array, a9Array, a10Array];
//var lösungenVierfelder = [a1LösungsString, a2LösungsString, a3LösungsString, a4LösungsString, a5LösungsString,  a6LösungsString, a7LösungsString, a8LösungsString,a9LösungsString];
