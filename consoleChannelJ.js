/* 
 * VERSION : consoleChanneJ
 * BASEURL is a variable existing in the page calling this framework
 * through a script element referencing this specific javascript file
 * the repo rest is then determined from here and accessed accordingly
*/
var VIEWINGPROHIBITED = "images/scavecgraph-viewBrohibited.svg";
const PORTAL_SVGCHANNEL = "/@/svgChannel.html?config=";
var DEBUG = false;
var PARENTORIGIN = null;
var CSSSTYLES = "";
var PUBLICKEY = "";
var VISITORIP = "";
var CDNROOTDIR = "";
var CURRENTCONTEXT = "22222222222222222222222222222222";
var ISTOUCHDEVICE = window.matchMedia("(pointer: coarse)").matches;
var DEVICE = window.matchMedia("(pointer: coarse)").matches ? "Mobile" : "PC";
var DEVICEWIDTH = 0;
var DEVICEHEIGHT = 0;
var WIDTH = "600";
var HEIGHT = "500";
var FITWIDTH = "600";
var FITHEIGHT = "500";
var PARFITWIDTH = 0;
var PARFITHEIGHT = 0;
var PARWHEXIST = false;
var SHOWTRACKER = "true";
var TRACKERSCALE = "";
var DARKESTCLR = "";
var GLASS = "";
var FONTSIZE = 40;
var ICONSIZE = 50;
var BARWIDTH_PC = 60;
var BARWIDTH_MOBILE = 56;
var BARWIDTH = BARWIDTH_PC;
var PARENTURL = "";
var PARENTREGISTERED = false;
var SITEURL = "";
var rootData;
var rootDataStr = "";
var rootFitBoundsData;
var rootFitBoundsDataStr = "";
var DARKESTCOLOR = "#0178af";
var DARKCOLOR = "#188fc6";
var LIGHTCOLOR = "#34abe2";
var LIGHTERCOLOR = "#4ec5fc";
var LIGHTESTCOLOR = "#5ad1ff";
var NAVCOLOR = "#b5d7e8";
var HTML = null;

var trackingTd = null;
var trackerTd = null;
var searchTd = null;
var search = document.getElementById("search");
var rootTd = null;
var defHeight = "430px";
var varHeight = "480px";
var adjustHeight = 0;

var shrinkToFitBounds = false;
var expandToFitBounds = false;

var FINAL_TABLE_HEIGHT = 0;
var FINAL_TABLE_WIDTH = 0;
var FINAL_TRACKBAR_HEIGHT = 0;
var FINAL_TRACKBAR_WIDTH = 0;

const CACHE_BASE64 = new Map();
const CACHE_SVG = new Map();
const CACHE_JS = new Map();

var styleDefault = "topLeft{background-color: NAVCOLOR;} div.horscroll {margin:0 !important;padding:0 !important;height:60px;overflow-x: auto;overflow-y:hidden;white-space:nowrap;background-color: NAVCOLOR;}div.verscroll {margin:0 !important;padding:0 !important;width:60px;overflow-y:auto;overflow-x:hidden;white-space:nowrap;background-color: NAVCOLOR;} .trackerImage{cursor:pointer;margin-right:4px !important;margin-top:2px !important;} .rootImage{cursor:pointer;margin-right:2px !important;margin-top:2px !important;display:table-column;} a {color:#0178af;font-weight:bold;font-size:12px;} * {margin:0 !important;padding:0 !important;} .topLeft{padding: 0px 0px 5px 2px !important;}";
var styleScroll = "*{scrollbar-width:thin;scrollbar-height:thin;scrollbar-color: #ffffff;} *::-webkit-scrollbar {height:4px;width:4px;} *::-webkit-scrollbar-track {background-color: NAVCOLOR;} *::-webkit-scrollbar-thumb {background-color:#ffffff;border-radius:2px;border: 1px solid #ffffff;}";
var styleScroller = ".scroller {--scrollbar-color-thumb: #ffffff;--scrollbar-color-track: NAVCOLOR;--scrollbar-width: thin;--scrollbar-width-legacy: 0.5rem;}";
var styleTrackerScroller = "#trackerDiv::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.0);background-color:NAVCOLOR;}#trackerDiv::-webkit-scrollbar {width:4px;height:4px;background-color: #ffffff;}#trackerDiv::-webkit-scrollbar-thumb {background-color:#ffffff;}";
var styleRootScroller = "#rootDiv::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.0);background-color:NAVCOLOR;}#rootDiv::-webkit-scrollbar {width:4px;height:4px;background-color: #ffffff;}#rootDiv::-webkit-scrollbar-thumb {background-color:#ffffff;}";
var styleSupport1 = "@supports (scrollbar-width: auto) {.scroller {scrollbar-color: var(--scrollbar-color-thumb) var(--scrollbar-color-track);scrollbar-width: var(--scrollbar-width);}}";
var styleSupport2 = "@supports selector(::-webkit-scrollbar) {.scroller {text-align: justify;}.scroller::-webkit-scrollbar-thumb {background: var(--scrollbar-color-thumb);}.scroller::-webkit-scrollbar-track {background: var(--scrollbar-color-track);}.scroller::-webkit-scrollbar {max-width: var(--scrollbar-width-legacy);max-height: var(--scrollbar-width-legacy);}}";
var styleGlass = ".glass{position:relative;display:inline-block;background-color:DARKCOLOR;background-image:linear-gradient(DARKCOLOR,LIGHTCOLOR);padding: 0px 0px 0px FONTMARGINLEFTGLASSpx !important;height:50px;width:50px;color:#fff;font-size:40px;font-family:sans-serif;font-weight:bold;border-radius:3px;box-shadow:0px 1px 4px -2px DARKESTCOLOR;text-shadow:0px -1px DARKESTCOLOR;cursor:pointer;}.glass:after{content:'';position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:50%;background:linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.2));}.glass:hover{background:linear-gradient(LIGHTCOLOR,LIGHTERCOLOR);}";
var styleMat = ".mat{position: relative;display: inline-block;background-color: DARKCOLOR;border-radius: 3px;border: 2px solid DARKESTCOLOR;padding: 0px 0px FONTMARGINBOTMATpx FONTMARGINLEFTMATpx !important;height:50px;width:50px;color:#fff;font-size:40px;font-family:sans-serif;font-weight:bold;cursor:pointer;}";

$(document).ready(function () {

    console.log("JQUERY READY");

    
    var body = $("#body");
    
    console.log('CDNORIGIN : ' + CDNROOTDIR);
    console.log('PUBLICKEY : ' + PUBLICKEY);
    console.log('VISITORIP : ' + VISITORIP);
    console.log('ISTOUCHDEVICE : ' + ISTOUCHDEVICE);

});
