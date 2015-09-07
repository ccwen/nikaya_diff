(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\ksana2015\\nikaya_diff\\index.js":[function(require,module,exports){
var React=require("react");
require("ksana2015-webruntime/livereload")(); 
var ksanagap=require("ksana2015-webruntime/ksanagap");
ksanagap.boot("nikaya_diff",function(){
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});
},{"./src/main.jsx":"C:\\ksana2015\\nikaya_diff\\src\\main.jsx","ksana2015-webruntime/ksanagap":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\ksanagap.js","ksana2015-webruntime/livereload":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\livereload.js","react":"react"}],"C:\\ksana2015\\nikaya_diff\\src\\main.jsx":[function(require,module,exports){
var React=require("react");
var E=React.createElement;
var s56_11=require("./s56-11.json");
var versions=Object.keys(s56_11)
var Diff=require("diff");
var VersionSelector=require("./versionselector");

var normalize=function(s){
  var o="";
  s=s.replace(/ṁ/g,"ṃ").replace(/—/g,"-").replace(/­/g,"-").toLowerCase();
  return s.replace(/[^abcdefghijklmnopqrstuvwxyzāīūṅṃñṭḍṇḷ]/g," ");//there is 00AD at the last
};

var maincomponent = React.createClass({displayName: "maincomponent",
  getInitialState:function() {
    return {from:"bjt",to:"vri",charmode:false};
  }
  ,setcomparemode:function(e) {
      this.setState({charmode:e.target.checked});
  }
  ,renderDiff:function(diff){
    var html=[];
    for (var j=0;j<diff.length;j++) {
      var d=diff[j];
      if (d.added) {
        html.push(React.createElement("span", {className: "ins"}, d.value));
      } else if (d.removed) {
        html.push(React.createElement("span", {className: "del"}, d.value));
      } else html.push(d.value)
    }
    return html;
  }
  ,renderText:function(){
    var o=[];
    for (var i in s56_11[this.state.from]) {
      var from=normalize(s56_11[this.state.from][i]).trim();
      var to=normalize(s56_11[this.state.to][i]).trim();
      var diff= this.state.charmode?Diff.diffChars(from,to):Diff.diffWords(from,to);
      o.push(E("span",{key:i},React.createElement("br", null),i,")",this.renderDiff(diff)));
    }
    return o;
  }
  ,selectversion:function(value,name){
    var obj={};
    obj[name]=value;
    this.setState(obj);
  }
  ,render: function() {
    return React.createElement("div", null, 
    React.createElement("h1", null, "Dhammacakkappavattanasuttaṃ S56-11"), 
        "Compare From:", React.createElement(VersionSelector, {onChange: this.selectversion, defaultValue: this.state.from, name: "from", versions: versions}), 
        ", Compare to:", React.createElement(VersionSelector, {onChange: this.selectversion, defaultValue: this.state.to, name: "to", versions: versions}), 
        React.createElement("label", null, React.createElement("input", {type: "checkbox", onClick: this.setcomparemode}, "Char Mode")), 
        React.createElement("br", null), 
      this.renderText()
    );
  }
});
module.exports=maincomponent;
},{"./s56-11.json":"C:\\ksana2015\\nikaya_diff\\src\\s56-11.json","./versionselector":"C:\\ksana2015\\nikaya_diff\\src\\versionselector.js","diff":"C:\\ksana2015\\node_modules\\diff\\diff.js","react":"react"}],"C:\\ksana2015\\nikaya_diff\\src\\s56-11.json":[function(require,module,exports){
module.exports={
 "bjt": {
  "1": "evaṁ me sutaṁ, ekaṁ samayaṁ bhagavā bārāṇasiyaṁ viharati isipatane migadāye ",
  "2": "tatra kho bhagavā pañcavaggiye bhikkhū āmantesi: ",
  "3": "'dve me bhikkhave, antā pabbajitena na sevitabbā.",
  "4": "yocayāṁ kāmesu kāmasukhallikānuyogo hīno gammo pothujjaniko anariyo anatthasaṁhito, yo cāyaṁ attakilamathānuyogo dukkho anariyo anatthasaṁhito, ",
  "5": "ete te bhikkhave, ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṁvattati.",
  "6": "katamā ca sā bhikkhave, majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṁvattati: ",
  "7": "ayameva ariyo aṭṭhaṅgiko maggo seyyathīdaṁ: sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.",
  "8": "ayaṁ kho sā bhikkhave, majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṁvattati.",
  "9": "idaṁ kho pana bhikkhave, dukkhaṁ ariyasaccaṁ: jātipi dukkhā jarāpi dukkhā vyādhipi dukkho maraṇampi dukkhaṁ appiyehi sampayogo dukkho piyehi vippayogo dukkho yampicchaṁ na labhati tampi dukkhaṁ saṅkhittena pañcupādānakkhandhā dukkhā'.",
  "10": "idaṁ kho pana bhikkhave, dukkhasamudayo ariyasaccaṁ: 'yāyaṁ taṇhā ponobhavikā nandirāgasahagatā tatra tatrābhinandinī, seyyathīdaṁ: kāmataṇhā bhavataṇhā vibhavataṇhā'.",
  "11": "idaṁ kho pana bhikkhave, dukkhanirodho ariyasaccaṁ: yo tassāyeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo.",
  "12": "idaṁ kho pana bhikkhave, dukkhanirodhagāminī paṭipadā ariyasaccaṁ: ayameva ariyo aṭṭhaṅgiko maggo, seyyathīdaṁ: sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.",
  "13": "'idaṁ dukkhaṁ ariyasaccanti' me bhikkhave pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "14": "taṁ kho panidaṁ dukkhaṁ ariyasaccaṁ pariññeyyanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "15": "taṁ kho panidaṁ dukkhaṁ ariyasaccaṁ pariññātanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "16": "'idaṁ dukkhasamudayo ariyasaccanti' me bhikkhave pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "17": "taṁ kho panidaṁ dukkhasamudayo ariyasaccaṁ pahātabbanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "18": "taṁ kho panidaṁ dukkhasamudayo ariyasaccaṁ pahīnanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "19": "'idaṁ dukkhanirodho ariyasaccanti' me bhikkhave pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "20": "taṁ kho panidaṁ dukkhanirodho ariyasaccaṁ sacchikātabbanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "21": "taṁ kho panidaṁ dukkhanirodho ariyasaccaṁ sacchikatanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "22": "'idaṁ dukkhanirodhagāminī paṭipadā ariyasaccanti' me bhikkhave pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "23": "taṁ kho panidaṁ dukkhanirodhagāminī paṭipadā ariyasaccaṁ bhāvetabbanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "24": "taṁ kho panidaṁ dukkhanirodhagāminī paṭipadā ariyasaccaṁ bhāvitanti me bhikkhave, pubbe ananussutesu dhammesu cakkhuṁ udapādi ñāṇaṁ udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "25": "yāvakīvañca me bhikkhave, imesu catusu ariyasaccesu evaṁ tiparivaṭṭaṁ dvādasākāraṁ yathābhūtaṁ ñāṇadassanaṁ na suvisuddhaṁ ahosi, neva tāvāhaṁ bhikkhave, sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya anuttaraṁ sammāsambodhiṁ abhisambuddho paccaññāsiṁ.",
  "26": "yato ca kho me bhikkhave, imesu catusu ariyasaccesu evaṁ tiparivaṭṭaṁ dvādasākāraṁ yathābhūtaṁ ñāṇadassanaṁ suvisuddhaṁ ahosi, athāhaṁ bhikkhave, sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya anuttaraṁ sammāsambodhiṁ abhisambuddho paccaññāsiṁ.",
  "27": "Ñāṇañca pana me dassanaṁ udapādi akuppā me cetovimutti, ayamantimā jāti natthidāni punabbhavoti.",
  "28": "idamavoca bhagavā ",
  "29": "attamanā pañcavaggiyā bhikkhū bhagavato bhāsitaṁ abhinandunti.",
  "30": "imasamiñca pana veyyākaraṇasmiṁ bhaññamāne āyasmato koṇḍaññassa virajaṁ vītamalaṁ dhammacakkhuṁ udapādi: 'yaṁ kiñci samudayadhammaṁ sabbantaṁ nirodhadhammanti'.",
  "31": "pavattite ca pana bhagavatā dhammacakke bhummā devā saddamanussāvesu: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "32": "bhummānaṁ devānaṁ saddaṁ sutvā cātummahārājikā devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārānasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "33": "cātummahārājikānaṁ devānaṁ saddaṁ sutvā tāvatiṁsā devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "34": "tāvatiṁsānaṁ devānaṁ saddaṁ sutvā yāmā devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "35": "yāmānaṁ devānaṁ saddaṁ sutvā tusitā devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "36": "tusitānaṁ devānaṁ saddaṁ sutvā nimmāṇaratī devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "37": "tusitānaṁ devānaṁ saddaṁ sutvā paranimmitavasavattī devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "38": "paranimmitavasavattīnaṁ devānaṁ saddaṁ sutvā brahmakāyikā devā saddamanussāvesuṁ: 'etaṁ bhagavatā bārāṇasiyaṁ isipatane migadāye anuttaraṁ dhammacakkaṁ pavattitaṁ appativattiyaṁ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasminti'.",
  "39": "itiha tena khaṇena tena muhuttena yāva brahmalokā saddo abbhuggañchi.",
  "40": "ayañca dasasahassī lokadhātu saṅkampi sampakampi sampavedhi.",
  "41": "appamāṇo ca uḷāro obhāso loke pāturahosi: atikkamma devānaṁ devānubhāvanti.",
  "42": "atha kho bhagavā udānaṁ udānesi: 'aññāsi vata bho koṇḍañño, aññāsi vata bho koṇḍaññoti'.",
  "43": "itihidaṁ āyasmato koṇḍaññassa aññākoṇḍaññottheva nāmaṁ ahosīti."
 },
 "pts": {
  "1": " Evam me sutaṃ ekaṃ samayam Bhagavā Bārāṇasiyaṃ viharati Isipatane Migadāye.",
  "2": "Tatra kho Bhagavā pañcavaggiye bhikkhū āmantesi.",
  "3": "Dve me bhikkhave antā pabbajitena na sevittabbā, Katame dve.",
  "4": " Yo cāyaṃ kāmesu kāmesu khallikānuyogo hīno gammo puthujjanīko anariyo anatthasaṃhito, yo cāyam attakilamathānuyogo dukkho anariyo anatthasaṃhito.",
  "5": "Ete te, bhikkhave ubho ante anupakamma majjhimā paṭipadā Tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati.",
  "6": " Katamā ca sā bhikkhave majjhimā paṭipadā Tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati.",
  "7": "Ayam eva ariyo aṭṭhaṅgiko maggo, seyyathīdaṃ, sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.",
  "8": " Ayam kho sā bhikkhave majjhimā paṭipadā Tathāgatena abhisambuddhā cakkhuº ñaṇaº karaṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati.",
  "9": " Idaṃ kho pana bhikkhave dukkham ariyasaccaṃ. Jāti pi dukkhā jarā pi dukkhā vyādhi pi dukkhā maraṇam pi dukkhaṃ sokaparidevadukkhadomanassupāyāsā pi dukkhā, appiyehi sampayogo dukkho piyehi vippayogo dukkho, yam picchaṃ na labhati tam pi dukkhaṃ, saṃkhittena pañcupādānakkhandhā pi dukkhā.",
  "10": " Idam kho pana bhikkhave dukkhasamudayam ariyasaccaṃ. Yāyaṃ taṇhā ponobbhavikā nandī rāgasahagatā tatra tatrābhinandinī, seyyathīdaṃ. Kāmataṇhā bhavataṇhā vibhavataṇhā.",
  "11": " Idaṃ kho pana bhikkhave dukkhanirodham ariyasaccaṃ. Yo tassā yeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo.",
  "12": " Idaṃ kho pana bhikkhave dukkhanirodhagāminī paṭipadā ariyasaccam. Ayam eva ariyo aṭṭhaṅgiko maggo ║ seyyathīdaṃ, sammādiṭṭhi, la-pe, sammāsamādhi.",
  "13": " Idaṃ dukkham ariyasaccan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi ñāṇam udapādi paññā udapādi vijjā udapādi āloko udapādi. ",
  "14": "Taṃ kho panidaṃ dukkham ariyasaccam pariññeyyan ti me bhikkhave pubbe, la, ",
  "15": "pariññātan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi, pe, āloko udapādi.  ",
  "16": "Idaṃ dukkhasamudayaṃ ariyasaccan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi ñāṇam udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "17": "Taṃ kho panidaṃ dukkhasamudayam ariyasaccam pahātabban ti me bhikkhave pubbe, la-pe, ",
  "18": " pahīnan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi ║ pe, āloko udapādi.",
  "19": " Idaṃ dukkhanirodham ariyasaccan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi ñāṇam udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "20": " Taṃ kho panidaṃ dukkhanirodham ariyasaccaṃ sacchikātabban ti me bhikkhave pubbe, la-pe, ",
  "21": "sacchikatan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi, pe, āloko udapādi.",
  "22": " Idaṃ dukkhanirodhagāminī paṭipadā ariyasaccan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi ñāṇam udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "23": "Tam kho panidaṃ dukkhanirodhagāminī paṭipadā ariyasaccam bhāvetabban ti me bhikkhave, pa ║ ",
  "24": "bhāvitan ti me bhikkhave pubbe ananussutesu dhammesu cakkhum udapādi ñāṇam udapādi paññā udapādi vijjā udapādi āloko udapādi.",
  "25": " Yāva kīvañca me bhikkhave imesu catusu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇaḍassanaṃ na suvisuddham ahosi, neva tāvāham bhikkhave sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya anuttaraṃ sammāsambodhim abhisambuddho ti paccaññāsiṃ.",
  "26": " Yato ca kho me bhikkhave imesu catusu ariyasaccesu evaṃ tiparivaṭṭam dvādasākāraṃ yathābhūtam ñāṇadassanaṃ suvisuddham ahosi, athāham bhikkhave sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya anuttaram sammāsambodhim abhisambuddho ti paccaññāsiṃ, ",
  "27": "ñāṇañca pana me dassanam udapādi Akuppā me cetovimutti ayam antimā jāti natthidāni punabbhavo ti.",
  "28": "Idam avoca Bhagavā, ",
  "29": "attamanā pañcavaggiyā bhikkhū Bhagavato bhāsitam abhinanduṃ, ",
  "30": "imasmiṃ ca pana veyyākaraṇasmim bhaññamāne āyasmato Koṇḍaññassa virajaṃ vītamalaṃ dhammacakkhum udapādi, yaṃ kiñci samudayadhammaṃ sabban taṃ nirodhadhamman ti.",
  "31": " Evam pavattite ca pana Bhagavatā dhammacakke Bhummā devā saddam anussāvesuṃ. Etam Bhagavatā Bārāṇasiyam Isipatane Migadāye anuttaraṃ dhammacakkam pavattitaṃ appativattiyaṃ samaṇena vā brāhmaṇena vā devena vā Mārena vā Brahmunā vā kenaci vā lokasmin ti.",
  "32": " Bhummānaṃ devānaṃ saddaṃ sutvā Cātummahārājikā devā saddam anussāvesuṃ. Etam Bhagavatā Bārāṇasiyam Isipatane Migadāye anuttaraṃ dhammacakkam pavattitam appativattiyaṃ samaṇena vā brāhmaṇena vā devena vā Mārena vā Brahmuṇā vā kenaci vā lokasmin ti.",
  "33": " Cātummahārājikānaṃ devānaṃ saddaṃ sutvā ",
  "34": "Tāvaṭiṃsā devā ",
  "35": "Yāmā devā ",
  "36": "Tusitā devā ",
  "37": "Nimmānaratī devā",
  "38": "Paranimmittavasavattino devā Brahmakāyikā devā saddam anussāvesuṃ. Etam Bhagavatā Bārāṇasiyaṃ Isipatane Migadāye anuttaraṃ dhammacakkam pavattitaṃ appativattiyaṃ samaṇena vā brāhmaṇena vā devena vāMārena vā Brahmunā vā kenaci vā lokasmin ti.",
  "39": " Iti ha tena khaṇena tena layena tena muhuttena yāva Brahmalokā saddo abbhuggacchi, ",
  "40": "ayañ ca dasasahassī lokadhātu saṃkampi sampakampi sampavedhi, ",
  "41": "appamāṇo ca uḷāro obhāso loke pātur ahosi atikkamma devānaṃ devānubhāvan ti.",
  "42": " Atha kho Bhagavā udānam udānesi. Aññāsi vata bho {Koṇḍañño} aññāsi vata bho Koṇḍañño ti. ",
  "43": "Iti hidam āyasmato Koṇḍaññassa Aññāta-Koṇḍañño tveva nāmam ahosī ti."
 },
 "wte": {
  "1": "Ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye.",
  "2": "Tatra kho bhagavā pañcavaggiye bhikkhū āmantesi:",
  "3": "“Dveme, bhikkhave, antā pabbajitena na sevitabbā.",
  "4": "Katame dve? Yo cāyaṃ kāmesu kāma­su­khal­li­kānu­yogo hīno gammo pothujjaniko anariyo anatthasaṃhito, yo cāyaṃ atta­kila­mathā­nuyogo dukkho anariyo anatthasaṃhito.",
  "5": "Ete kho, bhikkhave, ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati.",
  "6": "Katamā ca sā, bhikkhave, majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati? ",
  "7": "Ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ—sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi.",
  "8": "Ayaṃ kho sā, bhikkhave, majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati.",
  "9": "Idaṃ kho pana, bhikkhave, dukkhaṃ ariyasaccaṃ—jātipi dukkhā, jarāpi dukkhā, byādhipi dukkho, maraṇampi dukkhaṃ, appiyehi sampayogo dukkho, piyehi vippayogo dukkho, yampicchaṃ na labhati tampi dukkhaṃ—saṃkhittena pañcu­pādā­nak­khan­dhā dukkhā.",
  "10": "Idaṃ kho pana, bhikkhave, duk­kha­sa­muda­yaṃ ariyasaccaṃ—yāyaṃ taṇhā ponobbhavik nandi­rāga­saha­gatā tatra­tat­rā­bhinan­dinī, seyyathidaṃ—kāmataṇhā, bhavataṇhā, vibhavataṇhā.",
  "11": "Idaṃ kho pana, bhikkhave, dukkhanirodhaṃ ariyasaccaṃ—yo tassāyeva taṇhāya asesa­virāga­nirodho cāgo paṭinissaggo mutti anālayo.",
  "12": "Idaṃ kho pana, bhikkhave, duk­kha­nirodha­gāminī paṭipadā ariyasaccaṃ— ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ—sammādiṭṭhi … pe … sammāsamādhi.",
  "13": "‘Idaṃ dukkhaṃ ariyasaccan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "14": " ‘Taṃ kho panidaṃ dukkhaṃ ariyasaccaṃ pariññeyyan’ti me, bhikkhave, pubbe … pe … udapādi.",
  "15": " ‘Taṃ kho panidaṃ dukkhaṃ ariyasaccaṃ pariññātan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "16": "‘Idaṃ duk­kha­sa­muda­yaṃ ariyasaccan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "17": " ‘Taṃ kho panidaṃ duk­kha­sa­muda­yaṃ ariyasaccaṃ pahātabban’ti me, bhikkhave, pubbe … pe … udapādi.",
  "18": " ‘Taṃ kho panidaṃ duk­kha­sa­muda­yaṃ ariyasaccaṃ pahīnan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "19": "‘Idaṃ dukkhanirodhaṃ ariyasaccan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "20": " ‘Taṃ kho panidaṃ dukkhanirodhaṃ ariyasaccaṃ sacchikātabban’ti me, bhikkhave, pubbe … pe … udapādi.",
  "21": " ‘Taṃ kho panidaṃ dukkhanirodhaṃ ariyasaccaṃ sacchikatan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "22": "‘Idaṃ duk­kha­nirodha­gāminī paṭipadā ariyasaccan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "23": " ‘Taṃ kho panidaṃ duk­kha­nirodha­gāminī paṭipadā ariyasaccaṃ bhāvetabban’ti me, bhikkhave, pubbe … pe … udapādi.",
  "24": " ‘Taṃ kho panidaṃ duk­kha­nirodha­gāminī paṭipadā ariyasaccaṃ bhāvitan’ti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi.",
  "25": "Yāvakīvañca me, bhikkhave, imesu catūsu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇadassanaṃ na suvisuddhaṃ ahosi, neva tāvāhaṃ, bhikkhave, sadevake loke samārake sabrahmake ­sassama­ṇab­rāhma­ṇiyā pajāya sade­va­manus­sāya ‘anuttaraṃ sammāsambodhiṃ abhisambuddho’ti paccaññāsiṃ.",
  "26": "Yato ca kho me, bhikkhave, imesu catūsu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇadassanaṃ suvisuddhaṃ ahosi, athāhaṃ, bhikkhave, sadevake loke samārake sabrahmake ­sassama­ṇab­rāhma­ṇiyā pajāya sade­va­manus­sāya ‘anuttaraṃ sammāsambodhiṃ abhisambuddho’ti paccaññāsiṃ.",
  "27": "Ñāṇañca pana me dassanaṃ udapādi: ‘akuppā me vimutti, ayamantimā jāti, natthi dāni punabbhavo’”ti.",
  "28": "Idamavoca bhagavā.",
  "29": "Attamanā pañcavaggiyā bhikkhū bhagavato bhāsitaṃ abhinandunti.",
  "30": "Imasmiñca pana vey­yāka­ra­ṇas­miṃ bhaññamāne āyasmato koṇḍaññassa virajaṃ vītamalaṃ dhammacakkhuṃ udapādi: “yaṃ kiñci samuda­ya­dhammaṃ sabbaṃ taṃ nirodhadhamman”ti.",
  "31": "Pavattite ca pana bhagavatā dhammacakke bhummā devā sad­da­manus­sā­vesuṃ: “etaṃ bhagavatā bārāṇasiyaṃ isipatane migadāye anuttaraṃ dhammacakkaṃ pavattitaṃ appaṭivattiyaṃ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmin”ti.",
  "32": "Bhummānaṃ devānaṃ saddaṃ sutvā cātumahārājikā devā sad­da­manus­sā­vesuṃ: “etaṃ bhagavatā bārāṇasiyaṃ isipatane migadāye anuttaraṃ dhammacakkaṃ pavattitaṃ, appaṭivattiyaṃ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmin”ti.",
  "33": " ­Cātuma­hārāji­kānaṃ devānaṃ saddaṃ sutvā ",
  "34": "tāvatiṃsā devā … pe … ",
  "35": "yāmā devā … pe … ",
  "36": "tusitā devā … pe … ",
  "37": "nimmānaratī devā … pe … ",
  "38": "para­nimmita­vasavattī devā … pe … brahmakāyikā devā sad­da­manus­sā­vesuṃ: “etaṃ bhagavatā bārāṇasiyaṃ isipatane migadāye anuttaraṃ dhammacakkaṃ pavattitaṃ appaṭivattiyaṃ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmin”ti.",
  "39": "Itiha tena khaṇena tena layena tena muhuttena yāva brahmalokā saddo abbhuggacchi.",
  "40": "Ayañca dasasa­has­siloka­dhātu saṅkampi sampakampi sampavedhi, ",
  "41": "appamāṇo ca uḷāro obhāso loke pāturahosi atikkamma devānaṃ devānubhāvanti.",
  "42": "Atha kho bhagavā imaṃ udānaṃ udānesi: “aññāsi vata bho, koṇḍañño, aññāsi vata bho, koṇḍañño”ti.",
  "43": "Iti hidaṃ āyasmato koṇḍaññassa “aññāsikoṇḍañño” tveva nāmaṃ ahosīti."
 },
 "vri": {
  "1": "ekaṃ samayaṃ bhagavā bārāṇasiyaṃ viharati isipatane migadāye| ",
  "2": "tatra kho bhagavā pañcavaggiye bhikkhū āmantesi – ",
  "3": "‘‘dveme, bhikkhave, antā pabbajitena na sevitabbā| ",
  "4": "katame dve? yo cāyaṃ kāmesu kāmasukhallikānuyogo hīno gammo pothujjaniko anariyo anatthasaṃhito, yo cāyaṃ attakilamathānuyogo dukkho anariyo anatthasaṃhito| ",
  "5": "ete kho, bhikkhave, ubho ante anupagamma majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati’’|",
  "6": "‘‘katamā ca sā, bhikkhave, majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati? ",
  "7": "ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ – sammādiṭṭhi sammāsaṅkappo sammāvācā sammākammanto sammāājīvo sammāvāyāmo sammāsati sammāsamādhi| ",
  "8": "ayaṃ kho sā, bhikkhave, majjhimā paṭipadā tathāgatena abhisambuddhā cakkhukaraṇī ñāṇakaraṇī upasamāya abhiññāya sambodhāya nibbānāya saṃvattati|",
  "9": "‘‘idaṃ kho pana, bhikkhave, dukkhaṃ ariyasaccaṃ – jātipi dukkhā, jarāpi dukkhā, byādhipi dukkho, maraṇampi dukkhaṃ, appiyehi sampayogo dukkho, piyehi vippayogo dukkho, yampicchaṃ na labhati tampi dukkhaṃ – saṃkhittena pañcupādānakkhandhā dukkhā| ",
  "10": "idaṃ kho pana, bhikkhave, dukkhasamudayaṃ ariyasaccaṃ – yāyaṃ taṇhā ponobbhavikā nandirāgasahagatā tatratatrābhinandinī, seyyathidaṃ – kāmataṇhā, bhavataṇhā, vibhavataṇhā| ",
  "11": "idaṃ kho pana, bhikkhave, dukkhanirodhaṃ ariyasaccaṃ – yo tassāyeva taṇhāya asesavirāganirodho cāgo paṭinissaggo mutti anālayo| ",
  "12": "idaṃ kho pana, bhikkhave, dukkhanirodhagāminī paṭipadā ariyasaccaṃ – ayameva ariyo aṭṭhaṅgiko maggo, seyyathidaṃ – sammādiṭṭhi…pe.… sammāsamādhi|",
  "13": "‘‘‘idaṃ dukkhaṃ ariyasacca’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi|",
  "14": " ‘taṃ kho panidaṃ dukkhaṃ ariyasaccaṃ pariññeyya’nti me, bhikkhave, pubbe…pe.… udapādi|",
  "15": " ‘taṃ kho panidaṃ dukkhaṃ ariyasaccaṃ pariññāta’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi|",
  "16": "‘‘‘idaṃ dukkhasamudayaṃ ariyasacca’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi| ",
  "17": "‘taṃ kho panidaṃ dukkhasamudayaṃ ariyasaccaṃ pahātabba’nti me, bhikkhave, pubbe…pe.… udapādi|",
  "18": "‘taṃ kho panidaṃ dukkhasamudayaṃ ariyasaccaṃ pahīna’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi|",
  "19": "‘‘‘idaṃ dukkhanirodhaṃ ariyasacca’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi| ",
  "20": "‘taṃ kho panidaṃ dukkhanirodhaṃ ariyasaccaṃ sacchikātabba’nti me, bhikkhave, pubbe…pe.… udapādi| ",
  "21": "‘taṃ kho panidaṃ dukkhanirodhaṃ ariyasaccaṃ sacchikata’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi|",
  "22": "‘‘‘idaṃ dukkhanirodhagāminī paṭipadā ariyasacca’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi| ",
  "23": "taṃ kho panidaṃ dukkhanirodhagāminī paṭipadā ariyasaccaṃ bhāvetabba’nti me, bhikkhave, pubbe…pe.… udapādi| ",
  "24": "‘taṃ kho panidaṃ dukkhanirodhagāminī paṭipadā ariyasaccaṃ bhāvita’nti me, bhikkhave, pubbe ananussutesu dhammesu cakkhuṃ udapādi, ñāṇaṃ udapādi, paññā udapādi, vijjā udapādi, āloko udapādi|",
  "25": "‘‘yāvakīvañca me, bhikkhave, imesu catūsu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇadassanaṃ na suvisuddhaṃ ahosi, neva tāvāhaṃ, bhikkhave, sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya ‘anuttaraṃ sammāsambodhiṃ abhisambuddho’ti paccaññāsiṃ |",
  "26": "‘‘yato ca kho me, bhikkhave, imesu catūsu ariyasaccesu evaṃ tiparivaṭṭaṃ dvādasākāraṃ yathābhūtaṃ ñāṇadassanaṃ suvisuddhaṃ ahosi, athāhaṃ, bhikkhave, sadevake loke samārake sabrahmake sassamaṇabrāhmaṇiyā pajāya sadevamanussāya ‘anuttaraṃ sammāsambodhiṃ abhisambuddho’ti paccaññāsiṃ| ",
  "27": "ñāṇañca pana me dassanaṃ udapādi – ‘akuppā me vimutti , ayamantimā jāti, natthidāni punabbhavo’’’ti| ",
  "28": "idamavoca bhagavā| ",
  "29": "attamanā pañcavaggiyā bhikkhū bhagavato bhāsitaṃ abhinandunti|",
  "30": "imasmiñca pana veyyākaraṇasmiṃ bhaññamāne āyasmato koṇḍaññassa virajaṃ vītamalaṃ dhammacakkhuṃ udapādi – ‘‘yaṃ kiñci samudayadhammaṃ, sabbaṃ taṃ nirodhadhamma’’nti|",
  "31": "pavattite ca pana bhagavatā dhammacakke bhummā devā saddamanussāvesuṃ – ‘‘etaṃ bhagavatā bārāṇasiyaṃ isipatane migadāye anuttaraṃ dhammacakkaṃ pavattitaṃ appaṭivattiyaṃ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmi’’nti| ",
  "32": "bhummānaṃ devānaṃ saddaṃ sutvā cātumahārājikā devā saddamanussāvesuṃ – ‘‘etaṃ bhagavatā bārāṇasiyaṃ isipatane migadāye anuttaraṃ dhammacakkaṃ pavattitaṃ, appaṭivattiyaṃ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmi’’nti| ",
  "33": "cātumahārājikānaṃ devānaṃ saddaṃ sutvā ",
  "34": "tāvatiṃsā devā…pe.… ",
  "35": "yāmā devā…pe.… ",
  "36": "tusitā devā…pe.… ",
  "37": "nimmānaratī devā…pe.… ",
  "38": "paranimmitavasavattī devā…pe.… brahmakāyikā devā saddamanussāvesuṃ – ‘‘etaṃ bhagavatā bārāṇasiyaṃ isipatane migadāye anuttaraṃ dhammacakkaṃ pavattitaṃ appaṭivattiyaṃ samaṇena vā brāhmaṇena vā devena vā mārena vā brahmunā vā kenaci vā lokasmi’’nti|",
  "39": "itiha tena khaṇena (tena layena) tena muhuttena yāva brahmalokā saddo abbhuggacchi| ",
  "40": "ayañca dasasahassilokadhātu saṅkampi sampakampi sampavedhi, ",
  "41": "appamāṇo ca uḷāro obhāso loke pāturahosi atikkamma devānaṃ devānubhāvanti|",
  "42": "atha kho bhagavā imaṃ udānaṃ udānesi – ‘‘aññāsi vata, bho, koṇḍañño, aññāsi vata, bho, koṇḍañño’’ti! ",
  "43": "iti hidaṃ āyasmato koṇḍaññassa ‘aññāsikoṇḍañño’ tveva nāmaṃ ahosīti| paṭhamaṃ|"
 }
}
},{}],"C:\\ksana2015\\nikaya_diff\\src\\versionselector.js":[function(require,module,exports){
var React=require("react");
var VersionSelector=React.createClass({displayName: "VersionSelector",
	select:function(e){
			this.props.onChange(e.target.dataset.value,this.props.name);
	}
	,renderButton:function(item){
		var checked=item==this.props.defaultValue;
		return React.createElement("label", null, React.createElement("input", {"data-value": item, onClick: this.select, checked: checked, 
				name: this.props.name, type: "radio"}, item))
	}
	,render:function(){
		return React.createElement("span", null, 
			this.props.versions.map(this.renderButton)
		)
	}
});
module.exports=VersionSelector;
},{"react":"react"}],"C:\\ksana2015\\node_modules\\diff\\diff.js":[function(require,module,exports){
/* See LICENSE file for terms of use */

/*
 * Text diff implementation.
 *
 * This library supports the following APIS:
 * JsDiff.diffChars: Character by character diff
 * JsDiff.diffWords: Word (as defined by \b regex) diff which ignores whitespace
 * JsDiff.diffLines: Line based diff
 *
 * JsDiff.diffCss: Diff targeted at CSS content
 *
 * These methods are based on the implementation proposed in
 * "An O(ND) Difference Algorithm and its Variations" (Myers, 1986).
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.4.6927
 */
(function(global, undefined) {
  var objectPrototypeToString = Object.prototype.toString;

  /*istanbul ignore next*/
  function map(arr, mapper, that) {
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, mapper, that);
    }

    var other = new Array(arr.length);

    for (var i = 0, n = arr.length; i < n; i++) {
      other[i] = mapper.call(that, arr[i], i, arr);
    }
    return other;
  }
  function clonePath(path) {
    return { newPos: path.newPos, components: path.components.slice(0) };
  }
  function removeEmpty(array) {
    var ret = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }
    return ret;
  }
  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');

    return n;
  }

  // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed.
  function canonicalize(obj, stack, replacementStack) {
    stack = stack || [];
    replacementStack = replacementStack || [];

    var i;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);
      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
      }
      stack.pop();
      replacementStack.pop();
    } else if (typeof obj === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);
      var sortedKeys = [],
          key;
      for (key in obj) {
        sortedKeys.push(key);
      }
      sortedKeys.sort();
      for (i = 0; i < sortedKeys.length; i += 1) {
        key = sortedKeys[i];
        canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
      }
      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }
    return canonicalizedObj;
  }

  function buildValues(components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];
      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = map(value, function(value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });

          component.value = value.join('');
        } else {
          component.value = newString.slice(newPos, newPos + component.count).join('');
        }
        newPos += component.count;

        // Common case
        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = oldString.slice(oldPos, oldPos + component.count).join('');
        oldPos += component.count;

        // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.
        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    }

    return components;
  }

  function Diff(ignoreWhitespace) {
    this.ignoreWhitespace = ignoreWhitespace;
  }
  Diff.prototype = {
    diff: function(oldString, newString, callback) {
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function() { callback(undefined, value); }, 0);
          return true;
        } else {
          return value;
        }
      }

      // Handle the identity case (this is due to unrolling editLength == 0
      if (newString === oldString) {
        return done([{ value: newString }]);
      }
      if (!newString) {
        return done([{ value: oldString, removed: true }]);
      }
      if (!oldString) {
        return done([{ value: newString, added: true }]);
      }

      newString = this.tokenize(newString);
      oldString = this.tokenize(oldString);

      var newLen = newString.length, oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{ newPos: -1, components: [] }];

      // Seed editLength = 0, i.e. the content starts with the same values
      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{value: newString.join('')}]);
      }

      // Main worker method. checks all permutations of a given edit length for acceptance.
      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath;
          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= oldPos && oldPos < oldLen;
          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          }

          // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph
          if (!canAdd || (canRemove && addPath.newPos < removePath.newPos)) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath;   // No need to clone, we've pulled it from the list
            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);

          // If we have hit the end of both strings, then we are done
          if (basePath.newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
            return done(buildValues(basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      }

      // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.
      if (callback) {
        (function exec() {
          setTimeout(function() {
            // This should not happen, but we want to be safe.
            /*istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        }());
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();
          if (ret) {
            return ret;
          }
        }
      }
    },

    pushComponent: function(components, added, removed) {
      var last = components[components.length - 1];
      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {count: last.count + 1, added: added, removed: removed };
      } else {
        components.push({count: 1, added: added, removed: removed });
      }
    },
    extractCommon: function(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,

          commonCount = 0;
      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({count: commonCount});
      }

      basePath.newPos = newPos;
      return oldPos;
    },

    equals: function(left, right) {
      var reWhitespace = /\S/;
      return left === right || (this.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right));
    },
    tokenize: function(value) {
      return value.split('');
    }
  };

  var CharDiff = new Diff();

  var WordDiff = new Diff(true);
  var WordWithSpaceDiff = new Diff();
  WordDiff.tokenize = WordWithSpaceDiff.tokenize = function(value) {
    return removeEmpty(value.split(/(\s+|\b)/));
  };

  var CssDiff = new Diff(true);
  CssDiff.tokenize = function(value) {
    return removeEmpty(value.split(/([{}:;,]|\s+)/));
  };

  var LineDiff = new Diff();

  var TrimmedLineDiff = new Diff();
  TrimmedLineDiff.ignoreTrim = true;

  LineDiff.tokenize = TrimmedLineDiff.tokenize = function(value) {
    var retLines = [],
        lines = value.split(/^/m);
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i],
          lastLine = lines[i - 1],
          lastLineLastChar = lastLine && lastLine[lastLine.length - 1];

      // Merge lines that may contain windows new lines
      if (line === '\n' && lastLineLastChar === '\r') {
          retLines[retLines.length - 1] = retLines[retLines.length - 1].slice(0, -1) + '\r\n';
      } else {
        if (this.ignoreTrim) {
          line = line.trim();
          // add a newline unless this is the last line.
          if (i < lines.length - 1) {
            line += '\n';
          }
        }
        retLines.push(line);
      }
    }

    return retLines;
  };

  var PatchDiff = new Diff();
  PatchDiff.tokenize = function(value) {
    var ret = [],
        linesAndNewlines = value.split(/(\n|\r\n)/);

    // Ignore the final empty token that occurs if the string ends with a new line
    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    }

    // Merge the content and line separators into single tokens
    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2) {
        ret[ret.length - 1] += line;
      } else {
        ret.push(line);
      }
    }
    return ret;
  };

  var SentenceDiff = new Diff();
  SentenceDiff.tokenize = function(value) {
    return removeEmpty(value.split(/(\S.+?[.!?])(?=\s+|$)/));
  };

  var JsonDiff = new Diff();
  // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:
  JsonDiff.useLongestToken = true;
  JsonDiff.tokenize = LineDiff.tokenize;
  JsonDiff.equals = function(left, right) {
    return LineDiff.equals(left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
  };

  var JsDiff = {
    Diff: Diff,

    diffChars: function(oldStr, newStr, callback) { return CharDiff.diff(oldStr, newStr, callback); },
    diffWords: function(oldStr, newStr, callback) { return WordDiff.diff(oldStr, newStr, callback); },
    diffWordsWithSpace: function(oldStr, newStr, callback) { return WordWithSpaceDiff.diff(oldStr, newStr, callback); },
    diffLines: function(oldStr, newStr, callback) { return LineDiff.diff(oldStr, newStr, callback); },
    diffTrimmedLines: function(oldStr, newStr, callback) { return TrimmedLineDiff.diff(oldStr, newStr, callback); },

    diffSentences: function(oldStr, newStr, callback) { return SentenceDiff.diff(oldStr, newStr, callback); },

    diffCss: function(oldStr, newStr, callback) { return CssDiff.diff(oldStr, newStr, callback); },
    diffJson: function(oldObj, newObj, callback) {
      return JsonDiff.diff(
        typeof oldObj === 'string' ? oldObj : JSON.stringify(canonicalize(oldObj), undefined, '  '),
        typeof newObj === 'string' ? newObj : JSON.stringify(canonicalize(newObj), undefined, '  '),
        callback
      );
    },

    createTwoFilesPatch: function(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader) {
      var ret = [];

      if (oldFileName == newFileName) {
        ret.push('Index: ' + oldFileName);
      }
      ret.push('===================================================================');
      ret.push('--- ' + oldFileName + (typeof oldHeader === 'undefined' ? '' : '\t' + oldHeader));
      ret.push('+++ ' + newFileName + (typeof newHeader === 'undefined' ? '' : '\t' + newHeader));

      var diff = PatchDiff.diff(oldStr, newStr);
      diff.push({value: '', lines: []});   // Append an empty value to make cleanup easier

      // Formats a given set of lines for printing as context lines in a patch
      function contextLines(lines) {
        return map(lines, function(entry) { return ' ' + entry; });
      }

      // Outputs the no newline at end of file warning if needed
      function eofNL(curRange, i, current) {
        var last = diff[diff.length - 2],
            isLast = i === diff.length - 2,
            isLastOfType = i === diff.length - 3 && current.added !== last.added;

        // Figure out if this is the last line for the given file and missing NL
        if (!(/\n$/.test(current.value)) && (isLast || isLastOfType)) {
          curRange.push('\\ No newline at end of file');
        }
      }

      var oldRangeStart = 0, newRangeStart = 0, curRange = [],
          oldLine = 1, newLine = 1;
      for (var i = 0; i < diff.length; i++) {
        var current = diff[i],
            lines = current.lines || current.value.replace(/\n$/, '').split('\n');
        current.lines = lines;

        if (current.added || current.removed) {
          // If we have previous context, start with that
          if (!oldRangeStart) {
            var prev = diff[i - 1];
            oldRangeStart = oldLine;
            newRangeStart = newLine;

            if (prev) {
              curRange = contextLines(prev.lines.slice(-4));
              oldRangeStart -= curRange.length;
              newRangeStart -= curRange.length;
            }
          }

          // Output our changes
          curRange.push.apply(curRange, map(lines, function(entry) {
            return (current.added ? '+' : '-') + entry;
          }));
          eofNL(curRange, i, current);

          // Track the updated file position
          if (current.added) {
            newLine += lines.length;
          } else {
            oldLine += lines.length;
          }
        } else {
          // Identical context lines. Track line changes
          if (oldRangeStart) {
            // Close out any changes that have been output (or join overlapping)
            if (lines.length <= 8 && i < diff.length - 2) {
              // Overlapping
              curRange.push.apply(curRange, contextLines(lines));
            } else {
              // end the range and output
              var contextSize = Math.min(lines.length, 4);
              ret.push(
                  '@@ -' + oldRangeStart + ',' + (oldLine - oldRangeStart + contextSize)
                  + ' +' + newRangeStart + ',' + (newLine - newRangeStart + contextSize)
                  + ' @@');
              ret.push.apply(ret, curRange);
              ret.push.apply(ret, contextLines(lines.slice(0, contextSize)));
              if (lines.length <= 4) {
                eofNL(ret, i, current);
              }

              oldRangeStart = 0;
              newRangeStart = 0;
              curRange = [];
            }
          }
          oldLine += lines.length;
          newLine += lines.length;
        }
      }

      return ret.join('\n') + '\n';
    },

    createPatch: function(fileName, oldStr, newStr, oldHeader, newHeader) {
      return JsDiff.createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader);
    },

    applyPatch: function(oldStr, uniDiff) {
      var diffstr = uniDiff.split('\n'),
          hunks = [],
          i = 0,
          remEOFNL = false,
          addEOFNL = false;

      // Skip to the first change hunk
      while (i < diffstr.length && !(/^@@/.test(diffstr[i]))) {
        i++;
      }

      // Parse the unified diff
      for (; i < diffstr.length; i++) {
        if (diffstr[i][0] === '@') {
          var chnukHeader = diffstr[i].split(/@@ -(\d+),(\d+) \+(\d+),(\d+) @@/);
          hunks.unshift({
            start: chnukHeader[3],
            oldlength: +chnukHeader[2],
            removed: [],
            newlength: chnukHeader[4],
            added: []
          });
        } else if (diffstr[i][0] === '+') {
          hunks[0].added.push(diffstr[i].substr(1));
        } else if (diffstr[i][0] === '-') {
          hunks[0].removed.push(diffstr[i].substr(1));
        } else if (diffstr[i][0] === ' ') {
          hunks[0].added.push(diffstr[i].substr(1));
          hunks[0].removed.push(diffstr[i].substr(1));
        } else if (diffstr[i][0] === '\\') {
          if (diffstr[i - 1][0] === '+') {
            remEOFNL = true;
          } else if (diffstr[i - 1][0] === '-') {
            addEOFNL = true;
          }
        }
      }

      // Apply the diff to the input
      var lines = oldStr.split('\n');
      for (i = hunks.length - 1; i >= 0; i--) {
        var hunk = hunks[i];
        // Sanity check the input string. Bail if we don't match.
        for (var j = 0; j < hunk.oldlength; j++) {
          if (lines[hunk.start - 1 + j] !== hunk.removed[j]) {
            return false;
          }
        }
        Array.prototype.splice.apply(lines, [hunk.start - 1, hunk.oldlength].concat(hunk.added));
      }

      // Handle EOFNL insertion/removal
      if (remEOFNL) {
        while (!lines[lines.length - 1]) {
          lines.pop();
        }
      } else if (addEOFNL) {
        lines.push('');
      }
      return lines.join('\n');
    },

    convertChangesToXML: function(changes) {
      var ret = [];
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        if (change.added) {
          ret.push('<ins>');
        } else if (change.removed) {
          ret.push('<del>');
        }

        ret.push(escapeHTML(change.value));

        if (change.added) {
          ret.push('</ins>');
        } else if (change.removed) {
          ret.push('</del>');
        }
      }
      return ret.join('');
    },

    // See: http://code.google.com/p/google-diff-match-patch/wiki/API
    convertChangesToDMP: function(changes) {
      var ret = [],
          change,
          operation;
      for (var i = 0; i < changes.length; i++) {
        change = changes[i];
        if (change.added) {
          operation = 1;
        } else if (change.removed) {
          operation = -1;
        } else {
          operation = 0;
        }

        ret.push([operation, change.value]);
      }
      return ret;
    },

    canonicalize: canonicalize
  };

  /*istanbul ignore next */
  /*global module */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = JsDiff;
  } else if (typeof define === 'function' && define.amd) {
    /*global define */
    define([], function() { return JsDiff; });
  } else if (typeof global.JsDiff === 'undefined') {
    global.JsDiff = JsDiff;
  }
}(this));

},{}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\downloader.js":[function(require,module,exports){

var userCancel=false;
var files=[];
var totalDownloadByte=0;
var targetPath="";
var tempPath="";
var nfile=0;
var baseurl="";
var result="";
var downloading=false;
var startDownload=function(dbid,_baseurl,_files) { //return download id
	var fs     = require("fs");
	var path   = require("path");

	
	files=_files.split("\uffff");
	if (downloading) return false; //only one session
	userCancel=false;
	totalDownloadByte=0;
	nextFile();
	downloading=true;
	baseurl=_baseurl;
	if (baseurl[baseurl.length-1]!='/')baseurl+='/';
	targetPath=ksanagap.rootPath+dbid+'/';
	tempPath=ksanagap.rootPath+".tmp/";
	result="";
	return true;
}

var nextFile=function() {
	setTimeout(function(){
		if (nfile==files.length) {
			nfile++;
			endDownload();
		} else {
			downloadFile(nfile++);	
		}
	},100);
}

var downloadFile=function(nfile) {
	var url=baseurl+files[nfile];
	var tmpfilename=tempPath+files[nfile];
	var mkdirp = require("./mkdirp");
	var fs     = require("fs");
	var http   = require("http");

	mkdirp.sync(path.dirname(tmpfilename));
	var writeStream = fs.createWriteStream(tmpfilename);
	var datalength=0;
	var request = http.get(url, function(response) {
		response.on('data',function(chunk){
			writeStream.write(chunk);
			totalDownloadByte+=chunk.length;
			if (userCancel) {
				writeStream.end();
				setTimeout(function(){nextFile();},100);
			}
		});
		response.on("end",function() {
			writeStream.end();
			setTimeout(function(){nextFile();},100);
		});
	});
}

var cancelDownload=function() {
	userCancel=true;
	endDownload();
}
var verify=function() {
	return true;
}
var endDownload=function() {
	nfile=files.length+1;//stop
	result="cancelled";
	downloading=false;
	if (userCancel) return;
	var fs     = require("fs");
	var mkdirp = require("./mkdirp");

	for (var i=0;i<files.length;i++) {
		var targetfilename=targetPath+files[i];
		var tmpfilename   =tempPath+files[i];
		mkdirp.sync(path.dirname(targetfilename));
		fs.renameSync(tmpfilename,targetfilename);
	}
	if (verify()) {
		result="success";
	} else {
		result="error";
	}
}

var downloadedByte=function() {
	return totalDownloadByte;
}
var doneDownload=function() {
	if (nfile>files.length) return result;
	else return "";
}
var downloadingFile=function() {
	return nfile-1;
}

var downloader={startDownload:startDownload, downloadedByte:downloadedByte,
	downloadingFile:downloadingFile, cancelDownload:cancelDownload,doneDownload:doneDownload};
module.exports=downloader;
},{"./mkdirp":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\mkdirp.js","fs":false,"http":false,"path":false}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\html5fs.js":[function(require,module,exports){
/* emulate filesystem on html5 browser */
var get_head=function(url,field,cb){
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, true);
	xhr.onreadystatechange = function() {
			if (this.readyState == this.DONE) {
				cb(xhr.getResponseHeader(field));
			} else {
				if (this.status!==200&&this.status!==206) {
					cb("");
				}
			}
	};
	xhr.send();
}
var get_date=function(url,cb) {
	get_head(url,"Last-Modified",function(value){
		cb(value);
	});
}
var get_size=function(url, cb) {
	get_head(url,"Content-Length",function(value){
		cb(parseInt(value));
	});
};
var checkUpdate=function(url,fn,cb) {
	if (!url) {
		cb(false);
		return;
	}
	get_date(url,function(d){
		API.fs.root.getFile(fn, {create: false, exclusive: false}, function(fileEntry) {
			fileEntry.getMetadata(function(metadata){
				var localDate=Date.parse(metadata.modificationTime);
				var urlDate=Date.parse(d);
				cb(urlDate>localDate);
			});
		},function(){
			cb(false);
		});
	});
}
var download=function(url,fn,cb,statuscb,context) {
	 var totalsize=0,batches=null,written=0;
	 var fileEntry=0, fileWriter=0;
	 var createBatches=function(size) {
		var bytes=1024*1024, out=[];
		var b=Math.floor(size / bytes);
		var last=size %bytes;
		for (var i=0;i<=b;i++) {
			out.push(i*bytes);
		}
		out.push(b*bytes+last);
		return out;
	 }
	 var finish=function() {
		 rm(fn,function(){
				fileEntry.moveTo(fileEntry.filesystem.root, fn,function(){
					setTimeout( cb.bind(context,false) , 0) ;
				},function(e){
					console.log("failed",e)
				});
		 },this);
	 };
		var tempfn="temp.kdb";
		var batch=function(b) {
		var abort=false;
		var xhr = new XMLHttpRequest();
		var requesturl=url+"?"+Math.random();
		xhr.open('get', requesturl, true);
		xhr.setRequestHeader('Range', 'bytes='+batches[b]+'-'+(batches[b+1]-1));
		xhr.responseType = 'blob';
		xhr.addEventListener('load', function() {
			var blob=this.response;
			fileEntry.createWriter(function(fileWriter) {
				fileWriter.seek(fileWriter.length);
				fileWriter.write(blob);
				written+=blob.size;
				fileWriter.onwriteend = function(e) {
					if (statuscb) {
						abort=statuscb.apply(context,[ fileWriter.length / totalsize,totalsize ]);
						if (abort) setTimeout( cb.bind(context,false) , 0) ;
				 	}
					b++;
					if (!abort) {
						if (b<batches.length-1) setTimeout(batch.bind(context,b),0);
						else                    finish();
				 	}
			 	};
			}, console.error);
		},false);
		xhr.send();
	}

	get_size(url,function(size){
		totalsize=size;
		if (!size) {
			if (cb) cb.apply(context,[false]);
		} else {//ready to download
			rm(tempfn,function(){
				 batches=createBatches(size);
				 if (statuscb) statuscb.apply(context,[ 0, totalsize ]);
				 API.fs.root.getFile(tempfn, {create: 1, exclusive: false}, function(_fileEntry) {
							fileEntry=_fileEntry;
						batch(0);
				 });
			},this);
		}
	});
}

var readFile=function(filename,cb,context) {
	API.fs.root.getFile(filename, {create: false, exclusive: false},function(fileEntry) {
		fileEntry.file(function(file){
			var reader = new FileReader();
			reader.onloadend = function(e) {
				if (cb) cb.call(cb,this.result);
			};
			reader.readAsText(file,"utf8");
		});
	}, console.error);
}

function createDir(rootDirEntry, folders,  cb) {
  // Throw out './' or '/' and move on to prevent something like '/foo/.//bar'.
  if (folders[0] == '.' || folders[0] == '') {
    folders = folders.slice(1);
  }
  rootDirEntry.getDirectory(folders[0], {create: true}, function(dirEntry) {
    // Recursively add the new subfolder (if we still have another to create).
    if (folders.length) {
      createDir(dirEntry, folders.slice(1),cb);
    } else {
			cb();
		}
  }, cb);
};


var writeFile=function(filename,buf,cb,context){
	var write=function(fileEntry){
		fileEntry.createWriter(function(fileWriter) {
			fileWriter.write(buf);
			fileWriter.onwriteend = function(e) {
				if (cb) cb.apply(cb,[buf.byteLength]);
			};
		}, console.error);
	}

	var getFile=function(filename){
		API.fs.root.getFile(filename, {exclusive:true}, function(fileEntry) {
			write(fileEntry);
		}, function(){
				API.fs.root.getFile(filename, {create:true,exclusive:true}, function(fileEntry) {
					write(fileEntry);
				});

		});
	}
	var slash=filename.lastIndexOf("/");
	if (slash>-1) {
		createDir(API.fs.root, filename.substr(0,slash).split("/"),function(){
			getFile(filename);
		});
	} else {
		getFile(filename);
	}
}

var readdir=function(cb,context) {
	var dirReader = API.fs.root.createReader();
	var out=[],that=this;
	dirReader.readEntries(function(entries) {
		if (entries.length) {
			for (var i = 0, entry; entry = entries[i]; ++i) {
				if (entry.isFile) {
					out.push([entry.name,entry.toURL ? entry.toURL() : entry.toURI()]);
				}
			}
		}
		API.files=out;
		if (cb) cb.apply(context,[out]);
	}, function(){
		if (cb) cb.apply(context,[null]);
	});
}
var getFileURL=function(filename) {
	if (!API.files ) return null;
	var file= API.files.filter(function(f){return f[0]==filename});
	if (file.length) return file[0][1];
}
var rm=function(filename,cb,context) {
	var url=getFileURL(filename);
	if (url) rmURL(url,cb,context);
	else if (cb) cb.apply(context,[false]);
}

var rmURL=function(filename,cb,context) {
	webkitResolveLocalFileSystemURL(filename, function(fileEntry) {
		fileEntry.remove(function() {
			if (cb) cb.apply(context,[true]);
		}, console.error);
	},  function(e){
		if (cb) cb.apply(context,[false]);//no such file
	});
}
function errorHandler(e) {
	console.error('Error: ' +e.name+ " "+e.message);
}
var initfs=function(grantedBytes,cb,context) {
	webkitRequestFileSystem(PERSISTENT, grantedBytes,  function(fs) {
		API.fs=fs;
		API.quota=grantedBytes;
		readdir(function(){
			API.initialized=true;
			cb.apply(context,[grantedBytes,fs]);
		},context);
	}, errorHandler);
}
var init=function(quota,cb,context) {
	navigator.webkitPersistentStorage.requestQuota(quota,
			function(grantedBytes) {
				initfs(grantedBytes,cb,context);
		}, errorHandler
	);
}
var queryQuota=function(cb,context) {
	var that=this;
	navigator.webkitPersistentStorage.queryUsageAndQuota(
	 function(usage,quota){
			initfs(quota,function(){
				cb.apply(context,[usage,quota]);
			},context);
	});
}
var API={
	init:init
	,readdir:readdir
	,checkUpdate:checkUpdate
	,rm:rm
	,rmURL:rmURL
	,getFileURL:getFileURL
	,writeFile:writeFile
	,readFile:readFile
	,download:download
	,get_head:get_head
	,get_date:get_date
	,get_size:get_size
	,getDownloadSize:get_size
	,queryQuota:queryQuota
}
module.exports=API;

},{}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\ksanagap.js":[function(require,module,exports){
var appname="installer";
if (typeof ksana=="undefined") {
	window.ksana={platform:"chrome"};
	if (typeof process!=="undefined" && 
		process.versions && process.versions["node-webkit"]) {
		window.ksana.platform="node-webkit";
	}
}
var switchApp=function(path) {
	var fs=require("fs");
	path="../"+path;
	appname=path;
	document.location.href= path+"/index.html"; 
	process.chdir(path);
}
var downloader={};
var rootPath="";

var deleteApp=function(app) {
	console.error("not allow on PC, do it in File Explorer/ Finder");
}
var username=function() {
	return "";
}
var useremail=function() {
	return ""
}
var runtime_version=function() {
	return "1.4";
}

//copy from liveupdate
var jsonp=function(url,dbid,callback,context) {
  var script=document.getElementById("jsonp2");
  if (script) {
    script.parentNode.removeChild(script);
  }
  window.jsonp_handler=function(data) {
    if (typeof data=="object") {
      data.dbid=dbid;
      callback.apply(context,[data]);    
    }  
  }
  window.jsonp_error_handler=function() {
    console.error("url unreachable",url);
    callback.apply(context,[null]);
  }
  script=document.createElement('script');
  script.setAttribute('id', "jsonp2");
  script.setAttribute('onerror', "jsonp_error_handler()");
  url=url+'?'+(new Date().getTime());
  script.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(script); 
}


var loadKsanajs=function(){

	if (typeof process!="undefined" && !process.browser) {
		var ksanajs=require("fs").readFileSync("./ksana.js","utf8").trim();
		downloader=require("./downloader");
		ksana.js=JSON.parse(ksanajs.substring(14,ksanajs.length-1));
		rootPath=process.cwd();
		rootPath=require("path").resolve(rootPath,"..").replace(/\\/g,"/")+'/';
		ksana.ready=true;
	} else{
		var url=window.location.origin+window.location.pathname.replace("index.html","")+"ksana.js";
		jsonp(url,appname,function(data){
			ksana.js=data;
			ksana.ready=true;
		});
	}
}

loadKsanajs();

var boot=function(appId,cb) {
	if (typeof appId=="function") {
		cb=appId;
		appId="unknownapp";
	}
	if (!ksana.js && ksana.platform=="node-webkit") {
		loadKsanajs();
	}
	ksana.appId=appId;
	if (ksana.ready) {
		cb();
		return;
	}
	var timer=setInterval(function(){
			if (ksana.ready){
				clearInterval(timer);
				cb();
			}
		},1000);
}


var ksanagap={
	platform:"node-webkit",
	startDownload:downloader.startDownload,
	downloadedByte:downloader.downloadedByte,
	downloadingFile:downloader.downloadingFile,
	cancelDownload:downloader.cancelDownload,
	doneDownload:downloader.doneDownload,
	switchApp:switchApp,
	rootPath:rootPath,
	deleteApp: deleteApp,
	username:username, //not support on PC
	useremail:username,
	runtime_version:runtime_version,
	boot:boot
}
module.exports=ksanagap;
},{"./downloader":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\downloader.js","fs":false,"path":false}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\livereload.js":[function(require,module,exports){
var started=false;
var timer=null;
var bundledate=null;
var get_date=require("./html5fs").get_date;
var checkIfBundleUpdated=function() {
	get_date("bundle.js",function(date){
		if (bundledate &&bundledate!=date){
			location.reload();
		}
		bundledate=date;
	});
}
var livereload=function() {
	if(window.location.origin.indexOf("//127.0.0.1")===-1) return;

	if (started) return;

	timer1=setInterval(function(){
		checkIfBundleUpdated();
	},2000);
	started=true;
}

module.exports=livereload;
},{"./html5fs":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\html5fs.js"}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\mkdirp.js":[function(require,module,exports){
function mkdirP (p, mode, f, made) {
     var path = nodeRequire('path');
     var fs = nodeRequire('fs');
	
    if (typeof mode === 'function' || mode === undefined) {
        f = mode;
        mode = 0x1FF & (~process.umask());
    }
    if (!made) made = null;

    var cb = f || function () {};
    if (typeof mode === 'string') mode = parseInt(mode, 8);
    p = path.resolve(p);

    fs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), mode, function (er, made) {
                    if (er) cb(er, made);
                    else mkdirP(p, mode, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                fs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync (p, mode, made) {
    var path = nodeRequire('path');
    var fs = nodeRequire('fs');
    if (mode === undefined) {
        mode = 0x1FF & (~process.umask());
    }
    if (!made) made = null;

    if (typeof mode === 'string') mode = parseInt(mode, 8);
    p = path.resolve(p);

    try {
        fs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT' :
                made = sync(path.dirname(p), mode, made);
                sync(p, mode, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = fs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

},{}]},{},["C:\\ksana2015\\nikaya_diff\\index.js"])
//# sourceMappingURL=bundle.js.map
