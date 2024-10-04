!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      a = new Error().stack;
    a &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[a] = "6535dce8-f315-4541-9c35-600b4c3b5d51"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-6535dce8-f315-4541-9c35-600b4c3b5d51"));
  } catch (e) {}
})();
var _global =
  "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};
(_global.SENTRY_RELEASE = { id: "90199bea12d0307073a61899b1597cc5c29360f3" }),
  (self.webpackChunk_xwords_phoenix =
    self.webpackChunk_xwords_phoenix || []).push([
    [9673],
    {
      66203: function (e, a, t) {
        t.d(a, {
          HB: function () {
            return l;
          },
          NI: function () {
            return i;
          },
        });
        const o = "nyt-wordle-refresh",
          s = window.localStorage,
          r = 432e5;
        let n;
        function l() {
          try {
            s.setItem(o, !0);
          } catch (e) {
            console.error(e);
          }
        }
        function i() {
          return (
            n ||
            ((n = setInterval(() => {
              s.getItem(o) &&
                (s.removeItem(o),
                (function () {
                  if (!window.isHybridWebView) {
                    const e = /.*\.nytimes\.com/g;
                    document.location.href.match(e)
                      ? document.location.reload(!0)
                      : document.location.replace("/games/wordle");
                  }
                })());
            }, r)),
            n)
          );
        }
      },
      96329: function (e, a, t) {
        t.d(a, {
          l: function () {
            return o;
          },
        });
        const o = [
          "aahed",
          "aalii",
          "aapas",
          "aargh",
          "aarti",
          "abaca",
          "abaci",
          "abacs",
          "abaft",
          "abaht",
          "abaka",
          "abamp",
          "aband",
          "abash",
          "abask",
          "abaya",
          "abbas",
          "abbed",
          "abbes",
          "abcee",
          "abeam",
          "abear",
          "abeat",
          "abeer",
          "abele",
          "abeng",
          "abers",
          "abets",
          "abeys",
          "abies",
          "abius",
          "abjad",
          "abjud",
          "abler",
          "ables",
          "ablet",
          "ablow",
          "abmho",
          "abnet",
          "abohm",
          "aboil",
          "aboma",
          "aboon",
          "abord",
          "abore",
          "aborn",
          "abram",
          "abray",
          "abrim",
          "abrin",
          "abris",
          "absey",
          "absit",
          "abuna",
          "abune",
          "abura",
          "aburn",
          "abuts",
          "abuzz",
          "abyes",
          "abysm",
          "acais",
          "acara",
          "acari",
          "accas",
          "accha",
          "accoy",
          "accra",
          "acedy",
          "acene",
          "acerb",
          "acers",
          "aceta",
          "achar",
          "ached",
          "acher",
          "aches",
          "achey",
          "achoo",
          "acids",
          "acidy",
          "acies",
          "acing",
          "acini",
          "ackee",
          "acker",
          "acmes",
          "acmic",
          "acned",
          "acnes",
          "acock",
          "acoel",
          "acold",
          "acone",
          "acral",
          "acred",
          "acres",
          "acron",
          "acros",
          "acryl",
          "actas",
          "acted",
          "actin",
          "acton",
          "actus",
          "acyls",
          "adats",
          "adawn",
          "adaws",
          "adays",
          "adbot",
          "addas",
          "addax",
          "added",
          "adder",
          "addin",
          "addio",
          "addle",
          "addra",
          "adead",
          "adeem",
          "adhan",
          "adhoc",
          "adieu",
          "adios",
          "adits",
          "adlib",
          "adman",
          "admen",
          "admix",
          "adnex",
          "adobo",
          "adoon",
          "adorb",
          "adown",
          "adoze",
          "adrad",
          "adraw",
          "adred",
          "adret",
          "adrip",
          "adsum",
          "aduki",
          "adunc",
          "adust",
          "advew",
          "advts",
          "adyta",
          "adyts",
          "adzed",
          "adzes",
          "aecia",
          "aedes",
          "aeger",
          "aegis",
          "aeons",
          "aerie",
          "aeros",
          "aesir",
          "aevum",
          "afald",
          "afanc",
          "afara",
          "afars",
          "afear",
          "affly",
          "afion",
          "afizz",
          "aflaj",
          "aflap",
          "aflow",
          "afoam",
          "afore",
          "afret",
          "afrit",
          "afros",
          "aftos",
          "agals",
          "agama",
          "agami",
          "agamy",
          "agars",
          "agasp",
          "agast",
          "agaty",
          "agave",
          "agaze",
          "agbas",
          "agene",
          "agers",
          "aggag",
          "agger",
          "aggie",
          "aggri",
          "aggro",
          "aggry",
          "aghas",
          "agidi",
          "agila",
          "agios",
          "agism",
          "agist",
          "agita",
          "aglee",
          "aglet",
          "agley",
          "agloo",
          "aglus",
          "agmas",
          "agoge",
          "agogo",
          "agone",
          "agons",
          "agood",
          "agora",
          "agria",
          "agrin",
          "agros",
          "agrum",
          "agued",
          "agues",
          "aguey",
          "aguna",
          "agush",
          "aguti",
          "aheap",
          "ahent",
          "ahigh",
          "ahind",
          "ahing",
          "ahint",
          "ahold",
          "ahole",
          "ahull",
          "ahuru",
          "aidas",
          "aided",
          "aides",
          "aidoi",
          "aidos",
          "aiery",
          "aigas",
          "aight",
          "ailed",
          "aimag",
          "aimak",
          "aimed",
          "aimer",
          "ainee",
          "ainga",
          "aioli",
          "aired",
          "airer",
          "airns",
          "airth",
          "airts",
          "aitch",
          "aitus",
          "aiver",
          "aixes",
          "aiyah",
          "aiyee",
          "aiyoh",
          "aiyoo",
          "aizle",
          "ajies",
          "ajiva",
          "ajuga",
          "ajupa",
          "ajwan",
          "akara",
          "akees",
          "akela",
          "akene",
          "aking",
          "akita",
          "akkas",
          "akker",
          "akoia",
          "akoja",
          "akoya",
          "aksed",
          "akses",
          "alaap",
          "alack",
          "alala",
          "alamo",
          "aland",
          "alane",
          "alang",
          "alans",
          "alant",
          "alapa",
          "alaps",
          "alary",
          "alata",
          "alate",
          "alays",
          "albas",
          "albee",
          "albid",
          "alcea",
          "alces",
          "alcid",
          "alcos",
          "aldea",
          "alder",
          "aldol",
          "aleak",
          "aleck",
          "alecs",
          "aleem",
          "alefs",
          "aleft",
          "aleph",
          "alews",
          "aleye",
          "alfas",
          "algal",
          "algas",
          "algid",
          "algin",
          "algor",
          "algos",
          "algum",
          "alias",
          "alick",
          "alifs",
          "alims",
          "aline",
          "alios",
          "alist",
          "aliya",
          "alkie",
          "alkin",
          "alkos",
          "alkyd",
          "alkyl",
          "allan",
          "allee",
          "allel",
          "allen",
          "aller",
          "allin",
          "allis",
          "allod",
          "allus",
          "allyl",
          "almah",
          "almas",
          "almeh",
          "almes",
          "almud",
          "almug",
          "alods",
          "aloed",
          "aloes",
          "aloha",
          "aloin",
          "aloos",
          "alose",
          "alowe",
          "altho",
          "altos",
          "alula",
          "alums",
          "alumy",
          "alure",
          "alurk",
          "alvar",
          "alway",
          "amahs",
          "amain",
          "amari",
          "amaro",
          "amate",
          "amaut",
          "amban",
          "ambit",
          "ambos",
          "ambry",
          "ameba",
          "ameer",
          "amene",
          "amens",
          "ament",
          "amias",
          "amice",
          "amici",
          "amide",
          "amido",
          "amids",
          "amies",
          "amiga",
          "amigo",
          "amine",
          "amino",
          "amins",
          "amirs",
          "amlas",
          "amman",
          "ammas",
          "ammon",
          "ammos",
          "amnia",
          "amnic",
          "amnio",
          "amoks",
          "amole",
          "amore",
          "amort",
          "amour",
          "amove",
          "amowt",
          "amped",
          "ampul",
          "amrit",
          "amuck",
          "amyls",
          "anana",
          "anata",
          "ancho",
          "ancle",
          "ancon",
          "andic",
          "andro",
          "anear",
          "anele",
          "anent",
          "angas",
          "anglo",
          "anigh",
          "anile",
          "anils",
          "anima",
          "animi",
          "anion",
          "anise",
          "anker",
          "ankhs",
          "ankus",
          "anlas",
          "annal",
          "annan",
          "annas",
          "annat",
          "annum",
          "annus",
          "anoas",
          "anole",
          "anomy",
          "ansae",
          "ansas",
          "antae",
          "antar",
          "antas",
          "anted",
          "antes",
          "antis",
          "antra",
          "antre",
          "antsy",
          "anura",
          "anyon",
          "apace",
          "apage",
          "apaid",
          "apayd",
          "apays",
          "apeak",
          "apeek",
          "apers",
          "apert",
          "apery",
          "apgar",
          "aphis",
          "apian",
          "apiol",
          "apish",
          "apism",
          "apode",
          "apods",
          "apols",
          "apoop",
          "aport",
          "appal",
          "appam",
          "appay",
          "appel",
          "appro",
          "appts",
          "appui",
          "appuy",
          "apres",
          "apses",
          "apsis",
          "apsos",
          "apted",
          "apter",
          "aquae",
          "aquas",
          "araba",
          "araks",
          "arame",
          "arars",
          "arbah",
          "arbas",
          "arced",
          "archi",
          "arcos",
          "arcus",
          "ardeb",
          "ardri",
          "aread",
          "areae",
          "areal",
          "arear",
          "areas",
          "areca",
          "aredd",
          "arede",
          "arefy",
          "areic",
          "arene",
          "arepa",
          "arere",
          "arete",
          "arets",
          "arett",
          "argal",
          "argan",
          "argil",
          "argle",
          "argol",
          "argon",
          "argot",
          "argus",
          "arhat",
          "arias",
          "ariel",
          "ariki",
          "arils",
          "ariot",
          "arish",
          "arith",
          "arked",
          "arled",
          "arles",
          "armed",
          "armer",
          "armet",
          "armil",
          "arnas",
          "arnis",
          "arnut",
          "aroba",
          "aroha",
          "aroid",
          "arpas",
          "arpen",
          "arrah",
          "arras",
          "arret",
          "arris",
          "arroz",
          "arsed",
          "arses",
          "arsey",
          "arsis",
          "artal",
          "artel",
          "arter",
          "artic",
          "artis",
          "artly",
          "aruhe",
          "arums",
          "arval",
          "arvee",
          "arvos",
          "aryls",
          "asada",
          "asana",
          "ascon",
          "ascus",
          "asdic",
          "ashed",
          "ashes",
          "ashet",
          "asity",
          "askar",
          "asked",
          "asker",
          "askoi",
          "askos",
          "aspen",
          "asper",
          "aspic",
          "aspie",
          "aspis",
          "aspro",
          "assai",
          "assam",
          "assed",
          "asses",
          "assez",
          "assot",
          "aster",
          "astir",
          "astun",
          "asura",
          "asway",
          "aswim",
          "asyla",
          "ataps",
          "ataxy",
          "atigi",
          "atilt",
          "atimy",
          "atlas",
          "atman",
          "atmas",
          "atmos",
          "atocs",
          "atoke",
          "atoks",
          "atoms",
          "atomy",
          "atony",
          "atopy",
          "atria",
          "atrip",
          "attap",
          "attar",
          "attas",
          "atter",
          "atuas",
          "aucht",
          "audad",
          "audax",
          "augen",
          "auger",
          "auges",
          "aught",
          "aulas",
          "aulic",
          "auloi",
          "aulos",
          "aumil",
          "aunes",
          "aunts",
          "aurae",
          "aural",
          "aurar",
          "auras",
          "aurei",
          "aures",
          "auric",
          "auris",
          "aurum",
          "autos",
          "auxin",
          "avale",
          "avant",
          "avast",
          "avels",
          "avens",
          "avers",
          "avgas",
          "avine",
          "avion",
          "avise",
          "aviso",
          "avize",
          "avows",
          "avyze",
          "awari",
          "awarn",
          "awato",
          "awave",
          "aways",
          "awdls",
          "aweel",
          "aweto",
          "awing",
          "awkin",
          "awmry",
          "awned",
          "awner",
          "awols",
          "awork",
          "axels",
          "axile",
          "axils",
          "axing",
          "axite",
          "axled",
          "axles",
          "axman",
          "axmen",
          "axoid",
          "axone",
          "axons",
          "ayahs",
          "ayaya",
          "ayelp",
          "aygre",
          "ayins",
          "aymag",
          "ayont",
          "ayres",
          "ayrie",
          "azans",
          "azide",
          "azido",
          "azine",
          "azlon",
          "azoic",
          "azole",
          "azons",
          "azote",
          "azoth",
          "azuki",
          "azurn",
          "azury",
          "azygy",
          "azyme",
          "azyms",
          "baaed",
          "baals",
          "baaps",
          "babas",
          "babby",
          "babel",
          "babes",
          "babka",
          "baboo",
          "babul",
          "babus",
          "bacca",
          "bacco",
          "baccy",
          "bacha",
          "bachs",
          "backs",
          "backy",
          "bacne",
          "badam",
          "baddy",
          "baels",
          "baffs",
          "baffy",
          "bafta",
          "bafts",
          "baghs",
          "bagie",
          "bagsy",
          "bagua",
          "bahts",
          "bahus",
          "bahut",
          "baiks",
          "baile",
          "bails",
          "bairn",
          "baisa",
          "baith",
          "baits",
          "baiza",
          "baize",
          "bajan",
          "bajra",
          "bajri",
          "bajus",
          "baked",
          "baken",
          "bakes",
          "bakra",
          "balas",
          "balds",
          "baldy",
          "baled",
          "bales",
          "balks",
          "balky",
          "ballo",
          "balls",
          "bally",
          "balms",
          "baloi",
          "balon",
          "baloo",
          "balot",
          "balsa",
          "balti",
          "balun",
          "balus",
          "balut",
          "bamas",
          "bambi",
          "bamma",
          "bammy",
          "banak",
          "banco",
          "bancs",
          "banda",
          "bandh",
          "bands",
          "bandy",
          "baned",
          "banes",
          "bangs",
          "bania",
          "banks",
          "banky",
          "banns",
          "bants",
          "bantu",
          "banty",
          "bantz",
          "banya",
          "baons",
          "baozi",
          "bappu",
          "bapus",
          "barbe",
          "barbs",
          "barby",
          "barca",
          "barde",
          "bardo",
          "bards",
          "bardy",
          "bared",
          "barer",
          "bares",
          "barfi",
          "barfs",
          "barfy",
          "baric",
          "barks",
          "barky",
          "barms",
          "barmy",
          "barns",
          "barny",
          "barps",
          "barra",
          "barre",
          "barro",
          "barry",
          "barye",
          "basan",
          "basas",
          "based",
          "basen",
          "baser",
          "bases",
          "basha",
          "basho",
          "basij",
          "basks",
          "bason",
          "basse",
          "bassi",
          "basso",
          "bassy",
          "basta",
          "basti",
          "basto",
          "basts",
          "bated",
          "bates",
          "baths",
          "batik",
          "batos",
          "batta",
          "batts",
          "battu",
          "bauds",
          "bauks",
          "baulk",
          "baurs",
          "bavin",
          "bawds",
          "bawks",
          "bawls",
          "bawns",
          "bawrs",
          "bawty",
          "bayas",
          "bayed",
          "bayer",
          "bayes",
          "bayle",
          "bayts",
          "bazar",
          "bazas",
          "bazoo",
          "bball",
          "bdays",
          "beads",
          "beaks",
          "beaky",
          "beals",
          "beams",
          "beamy",
          "beano",
          "beans",
          "beany",
          "beare",
          "bears",
          "beath",
          "beats",
          "beaty",
          "beaus",
          "beaut",
          "beaux",
          "bebop",
          "becap",
          "becke",
          "becks",
          "bedad",
          "bedel",
          "bedes",
          "bedew",
          "bedim",
          "bedye",
          "beedi",
          "beefs",
          "beeps",
          "beers",
          "beery",
          "beets",
          "befog",
          "begad",
          "begar",
          "begem",
          "begob",
          "begot",
          "begum",
          "beige",
          "beigy",
          "beins",
          "beira",
          "beisa",
          "bekah",
          "belah",
          "belar",
          "belay",
          "belee",
          "belga",
          "belit",
          "belli",
          "bello",
          "bells",
          "belon",
          "belts",
          "belve",
          "bemad",
          "bemas",
          "bemix",
          "bemud",
          "bends",
          "bendy",
          "benes",
          "benet",
          "benga",
          "benis",
          "benji",
          "benne",
          "benni",
          "benny",
          "bento",
          "bents",
          "benty",
          "bepat",
          "beray",
          "beres",
          "bergs",
          "berko",
          "berks",
          "berme",
          "berms",
          "berob",
          "beryl",
          "besat",
          "besaw",
          "besee",
          "beses",
          "besit",
          "besom",
          "besot",
          "besti",
          "bests",
          "betas",
          "beted",
          "betes",
          "beths",
          "betid",
          "beton",
          "betta",
          "betty",
          "bevan",
          "bever",
          "bevor",
          "bevue",
          "bevvy",
          "bewdy",
          "bewet",
          "bewig",
          "bezes",
          "bezil",
          "bezzy",
          "bhais",
          "bhaji",
          "bhang",
          "bhats",
          "bhava",
          "bhels",
          "bhoot",
          "bhuna",
          "bhuts",
          "biach",
          "biali",
          "bialy",
          "bibbs",
          "bibes",
          "bibis",
          "biccy",
          "bices",
          "bicky",
          "bided",
          "bider",
          "bides",
          "bidet",
          "bidis",
          "bidon",
          "bidri",
          "bield",
          "biers",
          "biffo",
          "biffs",
          "biffy",
          "bifid",
          "bigae",
          "biggs",
          "biggy",
          "bigha",
          "bight",
          "bigly",
          "bigos",
          "bihon",
          "bijou",
          "biked",
          "biker",
          "bikes",
          "bikie",
          "bikky",
          "bilal",
          "bilat",
          "bilbo",
          "bilby",
          "biled",
          "biles",
          "bilgy",
          "bilks",
          "bills",
          "bimah",
          "bimas",
          "bimbo",
          "binal",
          "bindi",
          "binds",
          "biner",
          "bines",
          "bings",
          "bingy",
          "binit",
          "binks",
          "binky",
          "bints",
          "biogs",
          "bions",
          "biont",
          "biose",
          "biota",
          "biped",
          "bipod",
          "bippy",
          "birdo",
          "birds",
          "biris",
          "birks",
          "birle",
          "birls",
          "biros",
          "birrs",
          "birse",
          "birsy",
          "birze",
          "birzz",
          "bises",
          "bisks",
          "bisom",
          "bitch",
          "biter",
          "bites",
          "bitey",
          "bitos",
          "bitou",
          "bitsy",
          "bitte",
          "bitts",
          "bivia",
          "bivvy",
          "bizes",
          "bizzo",
          "bizzy",
          "blabs",
          "blads",
          "blady",
          "blaer",
          "blaes",
          "blaff",
          "blags",
          "blahs",
          "blain",
          "blams",
          "blanc",
          "blart",
          "blase",
          "blash",
          "blate",
          "blats",
          "blatt",
          "blaud",
          "blawn",
          "blaws",
          "blays",
          "bleah",
          "blear",
          "blebs",
          "blech",
          "blees",
          "blent",
          "blert",
          "blest",
          "blets",
          "bleys",
          "blimy",
          "bling",
          "blini",
          "blins",
          "bliny",
          "blips",
          "blist",
          "blite",
          "blits",
          "blive",
          "blobs",
          "blocs",
          "blogs",
          "blonx",
          "blook",
          "bloop",
          "blore",
          "blots",
          "blows",
          "blowy",
          "blubs",
          "blude",
          "bluds",
          "bludy",
          "blued",
          "blues",
          "bluet",
          "bluey",
          "bluid",
          "blume",
          "blunk",
          "blurs",
          "blype",
          "boabs",
          "boaks",
          "boars",
          "boart",
          "boats",
          "boaty",
          "bobac",
          "bobak",
          "bobas",
          "bobol",
          "bobos",
          "bocca",
          "bocce",
          "bocci",
          "boche",
          "bocks",
          "boded",
          "bodes",
          "bodge",
          "bodgy",
          "bodhi",
          "bodle",
          "bodoh",
          "boeps",
          "boers",
          "boeti",
          "boets",
          "boeuf",
          "boffo",
          "boffs",
          "bogan",
          "bogey",
          "boggy",
          "bogie",
          "bogle",
          "bogue",
          "bogus",
          "bohea",
          "bohos",
          "boils",
          "boing",
          "boink",
          "boite",
          "boked",
          "bokeh",
          "bokes",
          "bokos",
          "bolar",
          "bolas",
          "boldo",
          "bolds",
          "boles",
          "bolet",
          "bolix",
          "bolks",
          "bolls",
          "bolos",
          "bolts",
          "bolus",
          "bomas",
          "bombe",
          "bombo",
          "bombs",
          "bomoh",
          "bomor",
          "bonce",
          "bonds",
          "boned",
          "boner",
          "bones",
          "bongs",
          "bonie",
          "bonks",
          "bonne",
          "bonny",
          "bonum",
          "bonza",
          "bonze",
          "booai",
          "booay",
          "boobs",
          "boody",
          "booed",
          "boofy",
          "boogy",
          "boohs",
          "books",
          "booky",
          "bools",
          "booms",
          "boomy",
          "boong",
          "boons",
          "boord",
          "boors",
          "boose",
          "boots",
          "boppy",
          "borak",
          "boral",
          "boras",
          "borde",
          "bords",
          "bored",
          "boree",
          "borek",
          "borel",
          "borer",
          "bores",
          "borgo",
          "boric",
          "borks",
          "borms",
          "borna",
          "boron",
          "borts",
          "borty",
          "bortz",
          "bosey",
          "bosie",
          "bosks",
          "bosky",
          "boson",
          "bossa",
          "bosun",
          "botas",
          "boteh",
          "botel",
          "botes",
          "botew",
          "bothy",
          "botos",
          "botte",
          "botts",
          "botty",
          "bouge",
          "bouks",
          "boult",
          "bouns",
          "bourd",
          "bourg",
          "bourn",
          "bouse",
          "bousy",
          "bouts",
          "boutu",
          "bovid",
          "bowat",
          "bowed",
          "bower",
          "bowes",
          "bowet",
          "bowie",
          "bowls",
          "bowne",
          "bowrs",
          "bowse",
          "boxed",
          "boxen",
          "boxes",
          "boxla",
          "boxty",
          "boyar",
          "boyau",
          "boyed",
          "boyey",
          "boyfs",
          "boygs",
          "boyla",
          "boyly",
          "boyos",
          "boysy",
          "bozos",
          "braai",
          "brach",
          "brack",
          "bract",
          "brads",
          "braes",
          "brags",
          "brahs",
          "brail",
          "braks",
          "braky",
          "brame",
          "brane",
          "brank",
          "brans",
          "brant",
          "brast",
          "brats",
          "brava",
          "bravi",
          "braws",
          "braxy",
          "brays",
          "braza",
          "braze",
          "bream",
          "brede",
          "breds",
          "breem",
          "breer",
          "brees",
          "breid",
          "breis",
          "breme",
          "brens",
          "brent",
          "brere",
          "brers",
          "breve",
          "brews",
          "breys",
          "brier",
          "bries",
          "brigs",
          "briki",
          "briks",
          "brill",
          "brims",
          "brins",
          "brios",
          "brise",
          "briss",
          "brith",
          "brits",
          "britt",
          "brize",
          "broch",
          "brock",
          "brods",
          "brogh",
          "brogs",
          "brome",
          "bromo",
          "bronc",
          "brond",
          "brool",
          "broos",
          "brose",
          "brosy",
          "brows",
          "bruck",
          "brugh",
          "bruhs",
          "bruin",
          "bruit",
          "bruja",
          "brujo",
          "brule",
          "brume",
          "brung",
          "brusk",
          "brust",
          "bruts",
          "bruvs",
          "buats",
          "buaze",
          "bubal",
          "bubas",
          "bubba",
          "bubbe",
          "bubby",
          "bubus",
          "buchu",
          "bucko",
          "bucks",
          "bucku",
          "budas",
          "buded",
          "budes",
          "budis",
          "budos",
          "buena",
          "buffa",
          "buffe",
          "buffi",
          "buffo",
          "buffs",
          "buffy",
          "bufos",
          "bufty",
          "bugan",
          "buhls",
          "buhrs",
          "buiks",
          "buist",
          "bukes",
          "bukos",
          "bulbs",
          "bulgy",
          "bulks",
          "bulla",
          "bulls",
          "bulse",
          "bumbo",
          "bumfs",
          "bumph",
          "bumps",
          "bumpy",
          "bunas",
          "bunce",
          "bunco",
          "bunde",
          "bundh",
          "bunds",
          "bundt",
          "bundu",
          "bundy",
          "bungs",
          "bungy",
          "bunia",
          "bunje",
          "bunjy",
          "bunko",
          "bunks",
          "bunns",
          "bunts",
          "bunty",
          "bunya",
          "buoys",
          "buppy",
          "buran",
          "buras",
          "burbs",
          "burds",
          "buret",
          "burfi",
          "burgh",
          "burgs",
          "burin",
          "burka",
          "burke",
          "burks",
          "burls",
          "burns",
          "buroo",
          "burps",
          "burqa",
          "burra",
          "burro",
          "burrs",
          "burry",
          "bursa",
          "burse",
          "busby",
          "buses",
          "busks",
          "busky",
          "bussu",
          "busti",
          "busts",
          "busty",
          "buteo",
          "butes",
          "butle",
          "butoh",
          "butts",
          "butty",
          "butut",
          "butyl",
          "buyin",
          "buzzy",
          "bwana",
          "bwazi",
          "byded",
          "bydes",
          "byked",
          "bykes",
          "byres",
          "byrls",
          "byssi",
          "bytes",
          "byway",
          "caaed",
          "cabas",
          "caber",
          "cabob",
          "caboc",
          "cabre",
          "cacas",
          "cacks",
          "cacky",
          "cadee",
          "cades",
          "cadge",
          "cadgy",
          "cadie",
          "cadis",
          "cadre",
          "caeca",
          "caese",
          "cafes",
          "caffe",
          "caffs",
          "caged",
          "cager",
          "cages",
          "cagot",
          "cahow",
          "caids",
          "cains",
          "caird",
          "cajon",
          "cajun",
          "caked",
          "cakes",
          "cakey",
          "calfs",
          "calid",
          "calif",
          "calix",
          "calks",
          "calla",
          "calle",
          "calls",
          "calms",
          "calmy",
          "calos",
          "calpa",
          "calps",
          "calve",
          "calyx",
          "caman",
          "camas",
          "cames",
          "camis",
          "camos",
          "campi",
          "campo",
          "camps",
          "campy",
          "camus",
          "cando",
          "caned",
          "caneh",
          "caner",
          "canes",
          "cangs",
          "canid",
          "canna",
          "canns",
          "canso",
          "canst",
          "canti",
          "canto",
          "cants",
          "canty",
          "capas",
          "capax",
          "caped",
          "capes",
          "capex",
          "caphs",
          "capiz",
          "caple",
          "capon",
          "capos",
          "capot",
          "capri",
          "capul",
          "carap",
          "carbo",
          "carbs",
          "carby",
          "cardi",
          "cards",
          "cardy",
          "cared",
          "carer",
          "cares",
          "caret",
          "carex",
          "carks",
          "carle",
          "carls",
          "carne",
          "carns",
          "carny",
          "carob",
          "carom",
          "caron",
          "carpe",
          "carpi",
          "carps",
          "carrs",
          "carse",
          "carta",
          "carte",
          "carts",
          "carvy",
          "casas",
          "casco",
          "cased",
          "caser",
          "cases",
          "casks",
          "casky",
          "casts",
          "casus",
          "cates",
          "cauda",
          "cauks",
          "cauld",
          "cauls",
          "caums",
          "caups",
          "cauri",
          "causa",
          "cavas",
          "caved",
          "cavel",
          "caver",
          "caves",
          "cavie",
          "cavus",
          "cawed",
          "cawks",
          "caxon",
          "ceaze",
          "cebid",
          "cecal",
          "cecum",
          "ceded",
          "ceder",
          "cedes",
          "cedis",
          "ceiba",
          "ceili",
          "ceils",
          "celeb",
          "cella",
          "celli",
          "cells",
          "celly",
          "celom",
          "celts",
          "cense",
          "cento",
          "cents",
          "centu",
          "ceorl",
          "cepes",
          "cerci",
          "cered",
          "ceres",
          "cerge",
          "ceria",
          "ceric",
          "cerne",
          "ceroc",
          "ceros",
          "certs",
          "certy",
          "cesse",
          "cesta",
          "cesti",
          "cetes",
          "cetyl",
          "cezve",
          "chaap",
          "chaat",
          "chace",
          "chack",
          "chaco",
          "chado",
          "chads",
          "chaft",
          "chais",
          "chals",
          "chams",
          "chana",
          "chang",
          "chank",
          "chape",
          "chaps",
          "chapt",
          "chara",
          "chare",
          "chark",
          "charr",
          "chars",
          "chary",
          "chats",
          "chava",
          "chave",
          "chavs",
          "chawk",
          "chawl",
          "chaws",
          "chaya",
          "chays",
          "cheba",
          "chedi",
          "cheeb",
          "cheep",
          "cheet",
          "chefs",
          "cheka",
          "chela",
          "chelp",
          "chemo",
          "chems",
          "chere",
          "chert",
          "cheth",
          "chevy",
          "chews",
          "chewy",
          "chiao",
          "chias",
          "chiba",
          "chibs",
          "chica",
          "chich",
          "chico",
          "chics",
          "chiel",
          "chiko",
          "chiks",
          "chile",
          "chimb",
          "chimo",
          "chimp",
          "chine",
          "ching",
          "chink",
          "chino",
          "chins",
          "chips",
          "chirk",
          "chirl",
          "chirm",
          "chiro",
          "chirr",
          "chirt",
          "chiru",
          "chiti",
          "chits",
          "chiva",
          "chive",
          "chivs",
          "chivy",
          "chizz",
          "choco",
          "chocs",
          "chode",
          "chogs",
          "choil",
          "choko",
          "choky",
          "chola",
          "choli",
          "cholo",
          "chomp",
          "chons",
          "choof",
          "chook",
          "choom",
          "choon",
          "chops",
          "choss",
          "chota",
          "chott",
          "chout",
          "choux",
          "chowk",
          "chows",
          "chubs",
          "chufa",
          "chuff",
          "chugs",
          "chums",
          "churl",
          "churr",
          "chuse",
          "chuts",
          "chyle",
          "chyme",
          "chynd",
          "cibol",
          "cided",
          "cides",
          "ciels",
          "ciggy",
          "cilia",
          "cills",
          "cimar",
          "cimex",
          "cinct",
          "cines",
          "cinqs",
          "cions",
          "cippi",
          "circs",
          "cires",
          "cirls",
          "cirri",
          "cisco",
          "cissy",
          "cists",
          "cital",
          "cited",
          "citee",
          "citer",
          "cites",
          "cives",
          "civet",
          "civie",
          "civvy",
          "clach",
          "clade",
          "clads",
          "claes",
          "clags",
          "clair",
          "clame",
          "clams",
          "clans",
          "claps",
          "clapt",
          "claro",
          "clart",
          "clary",
          "clast",
          "clats",
          "claut",
          "clave",
          "clavi",
          "claws",
          "clays",
          "cleck",
          "cleek",
          "cleep",
          "clefs",
          "clegs",
          "cleik",
          "clems",
          "clepe",
          "clept",
          "cleve",
          "clews",
          "clied",
          "clies",
          "clift",
          "clime",
          "cline",
          "clint",
          "clipe",
          "clips",
          "clipt",
          "clits",
          "cloam",
          "clods",
          "cloff",
          "clogs",
          "cloke",
          "clomb",
          "clomp",
          "clonk",
          "clons",
          "cloop",
          "cloot",
          "clops",
          "clote",
          "clots",
          "clour",
          "clous",
          "clows",
          "cloye",
          "cloys",
          "cloze",
          "clubs",
          "clues",
          "cluey",
          "clunk",
          "clype",
          "cnida",
          "coact",
          "coady",
          "coala",
          "coals",
          "coaly",
          "coapt",
          "coarb",
          "coate",
          "coati",
          "coats",
          "cobbs",
          "cobby",
          "cobia",
          "coble",
          "cobot",
          "cobza",
          "cocas",
          "cocci",
          "cocco",
          "cocks",
          "cocky",
          "cocos",
          "cocus",
          "codas",
          "codec",
          "coded",
          "coden",
          "coder",
          "codes",
          "codex",
          "codon",
          "coeds",
          "coffs",
          "cogie",
          "cogon",
          "cogue",
          "cohab",
          "cohen",
          "cohoe",
          "cohog",
          "cohos",
          "coifs",
          "coign",
          "coils",
          "coins",
          "coirs",
          "coits",
          "coked",
          "cokes",
          "cokey",
          "colas",
          "colby",
          "colds",
          "coled",
          "coles",
          "coley",
          "colic",
          "colin",
          "colle",
          "colls",
          "colly",
          "colog",
          "colts",
          "colza",
          "comae",
          "comal",
          "comas",
          "combe",
          "combi",
          "combo",
          "combs",
          "comby",
          "comer",
          "comes",
          "comix",
          "comme",
          "commo",
          "comms",
          "commy",
          "compo",
          "comps",
          "compt",
          "comte",
          "comus",
          "coned",
          "cones",
          "conex",
          "coney",
          "confs",
          "conga",
          "conge",
          "congo",
          "conia",
          "conin",
          "conks",
          "conky",
          "conne",
          "conns",
          "conte",
          "conto",
          "conus",
          "convo",
          "cooch",
          "cooed",
          "cooee",
          "cooer",
          "cooey",
          "coofs",
          "cooks",
          "cooky",
          "cools",
          "cooly",
          "coomb",
          "cooms",
          "coomy",
          "coons",
          "coops",
          "coopt",
          "coost",
          "coots",
          "cooty",
          "cooze",
          "copal",
          "copay",
          "coped",
          "copen",
          "coper",
          "copes",
          "copha",
          "coppy",
          "copra",
          "copsy",
          "coqui",
          "coram",
          "corbe",
          "corby",
          "corda",
          "cords",
          "cored",
          "cores",
          "corey",
          "corgi",
          "coria",
          "corks",
          "corky",
          "corms",
          "corni",
          "corno",
          "corns",
          "cornu",
          "corps",
          "corse",
          "corso",
          "cosec",
          "cosed",
          "coses",
          "coset",
          "cosey",
          "cosie",
          "costa",
          "coste",
          "costs",
          "cotan",
          "cotch",
          "coted",
          "cotes",
          "coths",
          "cotta",
          "cotts",
          "coude",
          "coups",
          "courb",
          "courd",
          "coure",
          "cours",
          "couta",
          "couth",
          "coved",
          "coves",
          "covin",
          "cowal",
          "cowan",
          "cowed",
          "cowks",
          "cowls",
          "cowps",
          "cowry",
          "coxae",
          "coxal",
          "coxed",
          "coxes",
          "coxib",
          "coyau",
          "coyed",
          "coyer",
          "coypu",
          "cozed",
          "cozen",
          "cozes",
          "cozey",
          "cozie",
          "craal",
          "crabs",
          "crags",
          "craic",
          "craig",
          "crake",
          "crame",
          "crams",
          "crans",
          "crape",
          "craps",
          "crapy",
          "crare",
          "craws",
          "crays",
          "creds",
          "creel",
          "crees",
          "crein",
          "crema",
          "crems",
          "crena",
          "creps",
          "crepy",
          "crewe",
          "crews",
          "crias",
          "cribo",
          "cribs",
          "cries",
          "crims",
          "crine",
          "crink",
          "crins",
          "crios",
          "cripe",
          "crips",
          "crise",
          "criss",
          "crith",
          "crits",
          "croci",
          "crocs",
          "croft",
          "crogs",
          "cromb",
          "crome",
          "cronk",
          "crons",
          "crool",
          "croon",
          "crops",
          "crore",
          "crost",
          "crout",
          "crowl",
          "crows",
          "croze",
          "cruck",
          "crudo",
          "cruds",
          "crudy",
          "crues",
          "cruet",
          "cruft",
          "crunk",
          "cruor",
          "crura",
          "cruse",
          "crusy",
          "cruve",
          "crwth",
          "cryer",
          "cryne",
          "ctene",
          "cubby",
          "cubeb",
          "cubed",
          "cuber",
          "cubes",
          "cubit",
          "cucks",
          "cudda",
          "cuddy",
          "cueca",
          "cuffo",
          "cuffs",
          "cuifs",
          "cuing",
          "cuish",
          "cuits",
          "cukes",
          "culch",
          "culet",
          "culex",
          "culls",
          "cully",
          "culms",
          "culpa",
          "culti",
          "cults",
          "culty",
          "cumec",
          "cundy",
          "cunei",
          "cunit",
          "cunny",
          "cunts",
          "cupel",
          "cupid",
          "cuppa",
          "cuppy",
          "cupro",
          "curat",
          "curbs",
          "curch",
          "curds",
          "curdy",
          "cured",
          "curer",
          "cures",
          "curet",
          "curfs",
          "curia",
          "curie",
          "curli",
          "curls",
          "curns",
          "curny",
          "currs",
          "cursi",
          "curst",
          "cusec",
          "cushy",
          "cusks",
          "cusps",
          "cuspy",
          "cusso",
          "cusum",
          "cutch",
          "cuter",
          "cutes",
          "cutey",
          "cutin",
          "cutis",
          "cutto",
          "cutty",
          "cutup",
          "cuvee",
          "cuzes",
          "cwtch",
          "cyano",
          "cyans",
          "cycad",
          "cycas",
          "cyclo",
          "cyder",
          "cylix",
          "cymae",
          "cymar",
          "cymas",
          "cymes",
          "cymol",
          "cysts",
          "cytes",
          "cyton",
          "czars",
          "daals",
          "dabba",
          "daces",
          "dacha",
          "dacks",
          "dadah",
          "dadas",
          "dadis",
          "dadla",
          "dados",
          "daffs",
          "daffy",
          "dagga",
          "daggy",
          "dagos",
          "dahis",
          "dahls",
          "daiko",
          "daine",
          "daint",
          "daker",
          "daled",
          "dalek",
          "dales",
          "dalis",
          "dalle",
          "dalts",
          "daman",
          "damar",
          "dames",
          "damme",
          "damna",
          "damns",
          "damps",
          "dampy",
          "dancy",
          "danda",
          "dangs",
          "danio",
          "danks",
          "danny",
          "danse",
          "dants",
          "dappy",
          "daraf",
          "darbs",
          "darcy",
          "dared",
          "darer",
          "dares",
          "darga",
          "dargs",
          "daric",
          "daris",
          "darks",
          "darky",
          "darls",
          "darns",
          "darre",
          "darts",
          "darzi",
          "dashi",
          "dashy",
          "datal",
          "dated",
          "dater",
          "dates",
          "datil",
          "datos",
          "datto",
          "daube",
          "daubs",
          "dauby",
          "dauds",
          "dault",
          "daurs",
          "dauts",
          "daven",
          "davit",
          "dawah",
          "dawds",
          "dawed",
          "dawen",
          "dawgs",
          "dawks",
          "dawns",
          "dawts",
          "dayal",
          "dayan",
          "daych",
          "daynt",
          "dazed",
          "dazer",
          "dazes",
          "dbags",
          "deads",
          "deair",
          "deals",
          "deans",
          "deare",
          "dearn",
          "dears",
          "deary",
          "deash",
          "deave",
          "deaws",
          "deawy",
          "debag",
          "debby",
          "debel",
          "debes",
          "debts",
          "debud",
          "debur",
          "debus",
          "debye",
          "decad",
          "decaf",
          "decan",
          "decim",
          "decko",
          "decks",
          "decos",
          "decyl",
          "dedal",
          "deeds",
          "deedy",
          "deely",
          "deems",
          "deens",
          "deeps",
          "deere",
          "deers",
          "deets",
          "deeve",
          "deevs",
          "defat",
          "deffo",
          "defis",
          "defog",
          "degas",
          "degum",
          "degus",
          "deice",
          "deids",
          "deify",
          "deils",
          "deink",
          "deism",
          "deist",
          "deked",
          "dekes",
          "dekko",
          "deled",
          "deles",
          "delfs",
          "delft",
          "delis",
          "della",
          "dells",
          "delly",
          "delos",
          "delph",
          "delts",
          "deman",
          "demes",
          "demic",
          "demit",
          "demob",
          "demoi",
          "demos",
          "demot",
          "dempt",
          "denar",
          "denay",
          "dench",
          "denes",
          "denet",
          "denis",
          "dente",
          "dents",
          "deoch",
          "deoxy",
          "derat",
          "deray",
          "dered",
          "deres",
          "derig",
          "derma",
          "derms",
          "derns",
          "derny",
          "deros",
          "derpy",
          "derro",
          "derry",
          "derth",
          "dervs",
          "desex",
          "deshi",
          "desis",
          "desks",
          "desse",
          "detag",
          "devas",
          "devel",
          "devis",
          "devon",
          "devos",
          "devot",
          "dewan",
          "dewar",
          "dewax",
          "dewed",
          "dexes",
          "dexie",
          "dexys",
          "dhaba",
          "dhaks",
          "dhals",
          "dhikr",
          "dhobi",
          "dhole",
          "dholl",
          "dhols",
          "dhoni",
          "dhoti",
          "dhows",
          "dhuti",
          "diact",
          "dials",
          "diana",
          "diane",
          "diazo",
          "dibbs",
          "diced",
          "dicer",
          "dices",
          "dicht",
          "dicks",
          "dicky",
          "dicot",
          "dicta",
          "dicto",
          "dicts",
          "dictu",
          "dicty",
          "diddy",
          "didie",
          "didis",
          "didos",
          "didst",
          "diebs",
          "diels",
          "diene",
          "diets",
          "diffs",
          "dight",
          "dikas",
          "diked",
          "diker",
          "dikes",
          "dikey",
          "dildo",
          "dilli",
          "dills",
          "dimbo",
          "dimer",
          "dimes",
          "dimps",
          "dinar",
          "dined",
          "dines",
          "dinge",
          "dings",
          "dinic",
          "dinks",
          "dinky",
          "dinlo",
          "dinna",
          "dinos",
          "dints",
          "dioch",
          "diols",
          "diota",
          "dippy",
          "dipso",
          "diram",
          "direr",
          "dirke",
          "dirks",
          "dirls",
          "dirts",
          "disas",
          "disci",
          "discs",
          "dishy",
          "disks",
          "disme",
          "dital",
          "ditas",
          "dited",
          "dites",
          "ditsy",
          "ditts",
          "ditzy",
          "divan",
          "divas",
          "dived",
          "dives",
          "divey",
          "divis",
          "divna",
          "divos",
          "divot",
          "divvy",
          "diwan",
          "dixie",
          "dixit",
          "diyas",
          "dizen",
          "djinn",
          "djins",
          "doabs",
          "doats",
          "dobby",
          "dobes",
          "dobie",
          "dobla",
          "doble",
          "dobra",
          "dobro",
          "docht",
          "docks",
          "docos",
          "docus",
          "doddy",
          "dodos",
          "doeks",
          "doers",
          "doest",
          "doeth",
          "doffs",
          "dogal",
          "dogan",
          "doges",
          "dogey",
          "doggo",
          "doggy",
          "dogie",
          "dogly",
          "dohyo",
          "doilt",
          "doily",
          "doits",
          "dojos",
          "dolce",
          "dolci",
          "doled",
          "dolee",
          "doles",
          "doley",
          "dolia",
          "dolie",
          "dolls",
          "dolma",
          "dolor",
          "dolos",
          "dolts",
          "domal",
          "domed",
          "domes",
          "domic",
          "donah",
          "donas",
          "donee",
          "doner",
          "donga",
          "dongs",
          "donko",
          "donna",
          "donne",
          "donny",
          "donsy",
          "doobs",
          "dooce",
          "doody",
          "doofs",
          "dooks",
          "dooky",
          "doole",
          "dools",
          "dooly",
          "dooms",
          "doomy",
          "doona",
          "doorn",
          "doors",
          "doozy",
          "dopas",
          "doped",
          "doper",
          "dopes",
          "doppe",
          "dorad",
          "dorba",
          "dorbs",
          "doree",
          "dores",
          "doric",
          "doris",
          "dorje",
          "dorks",
          "dorky",
          "dorms",
          "dormy",
          "dorps",
          "dorrs",
          "dorsa",
          "dorse",
          "dorts",
          "dorty",
          "dosai",
          "dosas",
          "dosed",
          "doseh",
          "doser",
          "doses",
          "dosha",
          "dotal",
          "doted",
          "doter",
          "dotes",
          "dotty",
          "douar",
          "douce",
          "doucs",
          "douks",
          "doula",
          "douma",
          "doums",
          "doups",
          "doura",
          "douse",
          "douts",
          "doved",
          "doven",
          "dover",
          "doves",
          "dovie",
          "dowak",
          "dowar",
          "dowds",
          "dowed",
          "dower",
          "dowfs",
          "dowie",
          "dowle",
          "dowls",
          "dowly",
          "downa",
          "downs",
          "dowps",
          "dowse",
          "dowts",
          "doxed",
          "doxes",
          "doxie",
          "doyen",
          "doyly",
          "dozed",
          "dozer",
          "dozes",
          "drabs",
          "drack",
          "draco",
          "draff",
          "drags",
          "drail",
          "drams",
          "drant",
          "draps",
          "drapy",
          "drats",
          "drave",
          "draws",
          "drays",
          "drear",
          "dreck",
          "dreed",
          "dreer",
          "drees",
          "dregs",
          "dreks",
          "drent",
          "drere",
          "drest",
          "dreys",
          "dribs",
          "drice",
          "dries",
          "drily",
          "drips",
          "dript",
          "drock",
          "droid",
          "droil",
          "droke",
          "drole",
          "drome",
          "drony",
          "droob",
          "droog",
          "drook",
          "drops",
          "dropt",
          "drouk",
          "drows",
          "drubs",
          "drugs",
          "drums",
          "drupe",
          "druse",
          "drusy",
          "druxy",
          "dryad",
          "dryas",
          "dsobo",
          "dsomo",
          "duads",
          "duals",
          "duans",
          "duars",
          "dubbo",
          "dubby",
          "ducal",
          "ducat",
          "duces",
          "ducks",
          "ducky",
          "ducti",
          "ducts",
          "duddy",
          "duded",
          "dudes",
          "duels",
          "duets",
          "duett",
          "duffs",
          "dufus",
          "duing",
          "duits",
          "dukas",
          "duked",
          "dukes",
          "dukka",
          "dukun",
          "dulce",
          "dules",
          "dulia",
          "dulls",
          "dulse",
          "dumas",
          "dumbo",
          "dumbs",
          "dumka",
          "dumky",
          "dumps",
          "dunam",
          "dunch",
          "dunes",
          "dungs",
          "dungy",
          "dunks",
          "dunno",
          "dunny",
          "dunsh",
          "dunts",
          "duomi",
          "duomo",
          "duped",
          "duper",
          "dupes",
          "duple",
          "duply",
          "duppy",
          "dural",
          "duras",
          "dured",
          "dures",
          "durgy",
          "durns",
          "duroc",
          "duros",
          "duroy",
          "durra",
          "durrs",
          "durry",
          "durst",
          "durum",
          "durzi",
          "dusks",
          "dusts",
          "duxes",
          "dwaal",
          "dwale",
          "dwalm",
          "dwams",
          "dwamy",
          "dwang",
          "dwaum",
          "dweeb",
          "dwile",
          "dwine",
          "dyads",
          "dyers",
          "dyked",
          "dykes",
          "dykey",
          "dykon",
          "dynel",
          "dynes",
          "dynos",
          "dzhos",
          "eagly",
          "eagre",
          "ealed",
          "eales",
          "eaned",
          "eards",
          "eared",
          "earls",
          "earns",
          "earnt",
          "earst",
          "eased",
          "easer",
          "eases",
          "easle",
          "easts",
          "eathe",
          "eatin",
          "eaved",
          "eaver",
          "eaves",
          "ebank",
          "ebbed",
          "ebbet",
          "ebena",
          "ebene",
          "ebike",
          "ebons",
          "ebook",
          "ecads",
          "ecard",
          "ecash",
          "eched",
          "eches",
          "echos",
          "ecigs",
          "ecole",
          "ecrus",
          "edema",
          "edged",
          "edger",
          "edges",
          "edile",
          "edits",
          "educe",
          "educt",
          "eejit",
          "eensy",
          "eeven",
          "eever",
          "eevns",
          "effed",
          "effer",
          "efits",
          "egads",
          "egers",
          "egest",
          "eggar",
          "egged",
          "egger",
          "egmas",
          "ehing",
          "eider",
          "eidos",
          "eigne",
          "eiked",
          "eikon",
          "eilds",
          "eiron",
          "eisel",
          "ejido",
          "ekdam",
          "ekkas",
          "elain",
          "eland",
          "elans",
          "elchi",
          "eldin",
          "eleet",
          "elemi",
          "elfed",
          "eliad",
          "elint",
          "elmen",
          "eloge",
          "elogy",
          "eloin",
          "elops",
          "elpee",
          "elsin",
          "elute",
          "elvan",
          "elven",
          "elver",
          "elves",
          "emacs",
          "embar",
          "embay",
          "embog",
          "embow",
          "embox",
          "embus",
          "emeer",
          "emend",
          "emerg",
          "emery",
          "emeus",
          "emics",
          "emirs",
          "emits",
          "emmas",
          "emmer",
          "emmet",
          "emmew",
          "emmys",
          "emoji",
          "emong",
          "emote",
          "emove",
          "empts",
          "emule",
          "emure",
          "emyde",
          "emyds",
          "enarm",
          "enate",
          "ended",
          "ender",
          "endew",
          "endue",
          "enews",
          "enfix",
          "eniac",
          "enlit",
          "enmew",
          "ennog",
          "enoki",
          "enols",
          "enorm",
          "enows",
          "enrol",
          "ensew",
          "ensky",
          "entia",
          "entre",
          "enure",
          "enurn",
          "envoi",
          "enzym",
          "eolid",
          "eorls",
          "eosin",
          "epact",
          "epees",
          "epena",
          "epene",
          "ephah",
          "ephas",
          "ephod",
          "ephor",
          "epics",
          "epode",
          "epopt",
          "eppie",
          "epris",
          "eques",
          "equid",
          "erbia",
          "erevs",
          "ergon",
          "ergos",
          "ergot",
          "erhus",
          "erica",
          "erick",
          "erics",
          "ering",
          "erned",
          "ernes",
          "erose",
          "erred",
          "erses",
          "eruct",
          "erugo",
          "eruvs",
          "erven",
          "ervil",
          "escar",
          "escot",
          "esile",
          "eskar",
          "esker",
          "esnes",
          "esrog",
          "esses",
          "estoc",
          "estop",
          "estro",
          "etage",
          "etape",
          "etats",
          "etens",
          "ethal",
          "ethne",
          "ethyl",
          "etics",
          "etnas",
          "etrog",
          "ettin",
          "ettle",
          "etuis",
          "etwee",
          "etyma",
          "eughs",
          "euked",
          "eupad",
          "euros",
          "eusol",
          "evegs",
          "evens",
          "evert",
          "evets",
          "evhoe",
          "evils",
          "evite",
          "evohe",
          "ewers",
          "ewest",
          "ewhow",
          "ewked",
          "exams",
          "exeat",
          "execs",
          "exeem",
          "exeme",
          "exfil",
          "exier",
          "exies",
          "exine",
          "exing",
          "exite",
          "exits",
          "exode",
          "exome",
          "exons",
          "expat",
          "expos",
          "exude",
          "exuls",
          "exurb",
          "eyass",
          "eyers",
          "eyots",
          "eyras",
          "eyres",
          "eyrie",
          "eyrir",
          "ezine",
          "fabbo",
          "fabby",
          "faced",
          "facer",
          "faces",
          "facey",
          "facia",
          "facie",
          "facta",
          "facto",
          "facts",
          "facty",
          "faddy",
          "faded",
          "fader",
          "fades",
          "fadge",
          "fados",
          "faena",
          "faery",
          "faffs",
          "faffy",
          "faggy",
          "fagin",
          "fagot",
          "faiks",
          "fails",
          "faine",
          "fains",
          "faire",
          "fairs",
          "faked",
          "faker",
          "fakes",
          "fakey",
          "fakie",
          "fakir",
          "falaj",
          "fales",
          "falls",
          "falsy",
          "famed",
          "fames",
          "fanal",
          "fands",
          "fanes",
          "fanga",
          "fango",
          "fangs",
          "fanks",
          "fanon",
          "fanos",
          "fanum",
          "faqir",
          "farad",
          "farci",
          "farcy",
          "fards",
          "fared",
          "farer",
          "fares",
          "farle",
          "farls",
          "farms",
          "faros",
          "farro",
          "farse",
          "farts",
          "fasci",
          "fasti",
          "fasts",
          "fated",
          "fates",
          "fatly",
          "fatso",
          "fatwa",
          "fauch",
          "faugh",
          "fauld",
          "fauns",
          "faurd",
          "faute",
          "fauts",
          "fauve",
          "favas",
          "favel",
          "faver",
          "faves",
          "favus",
          "fawns",
          "fawny",
          "faxed",
          "faxes",
          "fayed",
          "fayer",
          "fayne",
          "fayre",
          "fazed",
          "fazes",
          "feals",
          "feard",
          "feare",
          "fears",
          "feart",
          "fease",
          "feats",
          "feaze",
          "feces",
          "fecht",
          "fecit",
          "fecks",
          "fedai",
          "fedex",
          "feebs",
          "feeds",
          "feels",
          "feely",
          "feens",
          "feers",
          "feese",
          "feeze",
          "fehme",
          "feint",
          "feist",
          "felch",
          "felid",
          "felix",
          "fells",
          "felly",
          "felts",
          "felty",
          "femal",
          "femes",
          "femic",
          "femmy",
          "fends",
          "fendy",
          "fenis",
          "fenks",
          "fenny",
          "fents",
          "feods",
          "feoff",
          "ferer",
          "feres",
          "feria",
          "ferly",
          "fermi",
          "ferms",
          "ferns",
          "ferny",
          "ferox",
          "fesse",
          "festa",
          "fests",
          "festy",
          "fetas",
          "feted",
          "fetes",
          "fetor",
          "fetta",
          "fetts",
          "fetwa",
          "feuar",
          "feuds",
          "feued",
          "feyed",
          "feyer",
          "feyly",
          "fezes",
          "fezzy",
          "fiars",
          "fiats",
          "fibre",
          "fibro",
          "fices",
          "fiche",
          "fichu",
          "ficin",
          "ficos",
          "ficta",
          "fides",
          "fidge",
          "fidos",
          "fidus",
          "fiefs",
          "fient",
          "fiere",
          "fieri",
          "fiers",
          "fiest",
          "fifed",
          "fifer",
          "fifes",
          "fifis",
          "figgy",
          "figos",
          "fiked",
          "fikes",
          "filar",
          "filch",
          "filed",
          "files",
          "filii",
          "filks",
          "fille",
          "fillo",
          "fills",
          "filmi",
          "films",
          "filon",
          "filos",
          "filum",
          "finca",
          "finds",
          "fined",
          "fines",
          "finis",
          "finks",
          "finny",
          "finos",
          "fiord",
          "fiqhs",
          "fique",
          "fired",
          "firer",
          "fires",
          "firie",
          "firks",
          "firma",
          "firms",
          "firni",
          "firns",
          "firry",
          "firth",
          "fiscs",
          "fisho",
          "fisks",
          "fists",
          "fisty",
          "fitch",
          "fitly",
          "fitna",
          "fitte",
          "fitts",
          "fiver",
          "fives",
          "fixed",
          "fixes",
          "fixie",
          "fixit",
          "fjeld",
          "flabs",
          "flaff",
          "flags",
          "flaks",
          "flamm",
          "flams",
          "flamy",
          "flane",
          "flans",
          "flaps",
          "flary",
          "flats",
          "flava",
          "flawn",
          "flaws",
          "flawy",
          "flaxy",
          "flays",
          "fleam",
          "fleas",
          "fleek",
          "fleer",
          "flees",
          "flegs",
          "fleme",
          "fleur",
          "flews",
          "flexi",
          "flexo",
          "fleys",
          "flics",
          "flied",
          "flies",
          "flimp",
          "flims",
          "flips",
          "flirs",
          "flisk",
          "flite",
          "flits",
          "flitt",
          "flobs",
          "flocs",
          "floes",
          "flogs",
          "flong",
          "flops",
          "flore",
          "flors",
          "flory",
          "flosh",
          "flota",
          "flote",
          "flows",
          "flowy",
          "flubs",
          "flued",
          "flues",
          "fluey",
          "fluky",
          "flump",
          "fluor",
          "flurr",
          "fluty",
          "fluyt",
          "flyby",
          "flyin",
          "flype",
          "flyte",
          "fnarr",
          "foals",
          "foams",
          "foehn",
          "fogey",
          "fogie",
          "fogle",
          "fogos",
          "fogou",
          "fohns",
          "foids",
          "foils",
          "foins",
          "folds",
          "foley",
          "folia",
          "folic",
          "folie",
          "folks",
          "folky",
          "fomes",
          "fonda",
          "fonds",
          "fondu",
          "fones",
          "fonio",
          "fonly",
          "fonts",
          "foods",
          "foody",
          "fools",
          "foots",
          "footy",
          "foram",
          "forbs",
          "forby",
          "fordo",
          "fords",
          "forel",
          "fores",
          "forex",
          "forks",
          "forky",
          "forma",
          "forme",
          "forms",
          "forts",
          "forza",
          "forze",
          "fossa",
          "fosse",
          "fouat",
          "fouds",
          "fouer",
          "fouet",
          "foule",
          "fouls",
          "fount",
          "fours",
          "fouth",
          "fovea",
          "fowls",
          "fowth",
          "foxed",
          "foxes",
          "foxie",
          "foyle",
          "foyne",
          "frabs",
          "frack",
          "fract",
          "frags",
          "fraim",
          "frais",
          "franc",
          "frape",
          "fraps",
          "frass",
          "frate",
          "frati",
          "frats",
          "fraus",
          "frays",
          "frees",
          "freet",
          "freit",
          "fremd",
          "frena",
          "freon",
          "frere",
          "frets",
          "fribs",
          "frier",
          "fries",
          "frigs",
          "frise",
          "frist",
          "frita",
          "frite",
          "frith",
          "frits",
          "fritt",
          "frize",
          "frizz",
          "froes",
          "frogs",
          "fromm",
          "frons",
          "froom",
          "frore",
          "frorn",
          "frory",
          "frosh",
          "frows",
          "frowy",
          "froyo",
          "frugs",
          "frump",
          "frush",
          "frust",
          "fryer",
          "fubar",
          "fubby",
          "fubsy",
          "fucks",
          "fucus",
          "fuddy",
          "fudgy",
          "fuels",
          "fuero",
          "fuffs",
          "fuffy",
          "fugal",
          "fuggy",
          "fugie",
          "fugio",
          "fugis",
          "fugle",
          "fugly",
          "fugus",
          "fujis",
          "fulla",
          "fulls",
          "fulth",
          "fulwa",
          "fumed",
          "fumer",
          "fumes",
          "fumet",
          "funda",
          "fundi",
          "fundo",
          "funds",
          "fundy",
          "fungo",
          "fungs",
          "funic",
          "funis",
          "funks",
          "funsy",
          "funts",
          "fural",
          "furan",
          "furca",
          "furls",
          "furol",
          "furos",
          "furrs",
          "furth",
          "furze",
          "furzy",
          "fused",
          "fusee",
          "fusel",
          "fuses",
          "fusil",
          "fusks",
          "fusts",
          "fusty",
          "futon",
          "fuzed",
          "fuzee",
          "fuzes",
          "fuzil",
          "fyces",
          "fyked",
          "fykes",
          "fyles",
          "fyrds",
          "fytte",
          "gabba",
          "gabby",
          "gable",
          "gaddi",
          "gades",
          "gadge",
          "gadgy",
          "gadid",
          "gadis",
          "gadje",
          "gadjo",
          "gadso",
          "gaffs",
          "gaged",
          "gager",
          "gages",
          "gaids",
          "gains",
          "gairs",
          "gaita",
          "gaits",
          "gaitt",
          "gajos",
          "galah",
          "galas",
          "galax",
          "galea",
          "galed",
          "gales",
          "galia",
          "galis",
          "galls",
          "gally",
          "galop",
          "galut",
          "galvo",
          "gamas",
          "gamay",
          "gamba",
          "gambe",
          "gambo",
          "gambs",
          "gamed",
          "games",
          "gamey",
          "gamic",
          "gamin",
          "gamme",
          "gammy",
          "gamps",
          "ganch",
          "gandy",
          "ganef",
          "ganev",
          "gangs",
          "ganja",
          "ganks",
          "ganof",
          "gants",
          "gaols",
          "gaped",
          "gaper",
          "gapes",
          "gapos",
          "gappy",
          "garam",
          "garba",
          "garbe",
          "garbo",
          "garbs",
          "garda",
          "garde",
          "gares",
          "garis",
          "garms",
          "garni",
          "garre",
          "garri",
          "garth",
          "garum",
          "gases",
          "gashy",
          "gasps",
          "gaspy",
          "gasts",
          "gatch",
          "gated",
          "gater",
          "gates",
          "gaths",
          "gator",
          "gauch",
          "gaucy",
          "gauds",
          "gauje",
          "gault",
          "gaums",
          "gaumy",
          "gaups",
          "gaurs",
          "gauss",
          "gauzy",
          "gavot",
          "gawcy",
          "gawds",
          "gawks",
          "gawps",
          "gawsy",
          "gayal",
          "gazal",
          "gazar",
          "gazed",
          "gazes",
          "gazon",
          "gazoo",
          "geals",
          "geans",
          "geare",
          "gears",
          "geasa",
          "geats",
          "gebur",
          "gecks",
          "geeks",
          "geeps",
          "geest",
          "geist",
          "geits",
          "gelds",
          "gelee",
          "gelid",
          "gelly",
          "gelts",
          "gemel",
          "gemma",
          "gemmy",
          "gemot",
          "genae",
          "genal",
          "genas",
          "genes",
          "genet",
          "genic",
          "genii",
          "genin",
          "genio",
          "genip",
          "genny",
          "genoa",
          "genom",
          "genro",
          "gents",
          "genty",
          "genua",
          "genus",
          "geode",
          "geoid",
          "gerah",
          "gerbe",
          "geres",
          "gerle",
          "germs",
          "germy",
          "gerne",
          "gesse",
          "gesso",
          "geste",
          "gests",
          "getas",
          "getup",
          "geums",
          "geyan",
          "geyer",
          "ghast",
          "ghats",
          "ghaut",
          "ghazi",
          "ghees",
          "ghest",
          "ghusl",
          "ghyll",
          "gibed",
          "gibel",
          "giber",
          "gibes",
          "gibli",
          "gibus",
          "gifts",
          "gigas",
          "gighe",
          "gigot",
          "gigue",
          "gilas",
          "gilds",
          "gilet",
          "gilia",
          "gills",
          "gilly",
          "gilpy",
          "gilts",
          "gimel",
          "gimme",
          "gimps",
          "gimpy",
          "ginch",
          "ginga",
          "ginge",
          "gings",
          "ginks",
          "ginny",
          "ginzo",
          "gipon",
          "gippo",
          "gippy",
          "girds",
          "girlf",
          "girls",
          "girns",
          "giron",
          "giros",
          "girrs",
          "girsh",
          "girts",
          "gismo",
          "gisms",
          "gists",
          "gitch",
          "gites",
          "giust",
          "gived",
          "gives",
          "gizmo",
          "glace",
          "glads",
          "glady",
          "glaik",
          "glair",
          "glamp",
          "glams",
          "glans",
          "glary",
          "glatt",
          "glaum",
          "glaur",
          "glazy",
          "gleba",
          "glebe",
          "gleby",
          "glede",
          "gleds",
          "gleed",
          "gleek",
          "glees",
          "gleet",
          "gleis",
          "glens",
          "glent",
          "gleys",
          "glial",
          "glias",
          "glibs",
          "gliff",
          "glift",
          "glike",
          "glime",
          "glims",
          "glisk",
          "glits",
          "glitz",
          "gloam",
          "globi",
          "globs",
          "globy",
          "glode",
          "glogg",
          "gloms",
          "gloop",
          "glops",
          "glost",
          "glout",
          "glows",
          "glowy",
          "gloze",
          "glued",
          "gluer",
          "glues",
          "gluey",
          "glugg",
          "glugs",
          "glume",
          "glums",
          "gluon",
          "glute",
          "gluts",
          "gnapi",
          "gnarl",
          "gnarr",
          "gnars",
          "gnats",
          "gnawn",
          "gnaws",
          "gnows",
          "goads",
          "goafs",
          "goaft",
          "goals",
          "goary",
          "goats",
          "goaty",
          "goave",
          "goban",
          "gobar",
          "gobbe",
          "gobbi",
          "gobbo",
          "gobby",
          "gobis",
          "gobos",
          "godet",
          "godso",
          "goels",
          "goers",
          "goest",
          "goeth",
          "goety",
          "gofer",
          "goffs",
          "gogga",
          "gogos",
          "goier",
          "gojis",
          "gokes",
          "golds",
          "goldy",
          "goles",
          "golfs",
          "golpe",
          "golps",
          "gombo",
          "gomer",
          "gompa",
          "gonch",
          "gonef",
          "gongs",
          "gonia",
          "gonif",
          "gonks",
          "gonna",
          "gonof",
          "gonys",
          "gonzo",
          "gooby",
          "goodo",
          "goods",
          "goofs",
          "googs",
          "gooks",
          "gooky",
          "goold",
          "gools",
          "gooly",
          "goomy",
          "goons",
          "goony",
          "goops",
          "goopy",
          "goors",
          "goory",
          "goosy",
          "gopak",
          "gopik",
          "goral",
          "goras",
          "goray",
          "gorbs",
          "gordo",
          "gored",
          "gores",
          "goris",
          "gorms",
          "gormy",
          "gorps",
          "gorse",
          "gorsy",
          "gosht",
          "gosse",
          "gotch",
          "goths",
          "gothy",
          "gotta",
          "gouch",
          "gouks",
          "goura",
          "gouts",
          "gouty",
          "goved",
          "goves",
          "gowan",
          "gowds",
          "gowfs",
          "gowks",
          "gowls",
          "gowns",
          "goxes",
          "goyim",
          "goyle",
          "graal",
          "grabs",
          "grads",
          "graff",
          "graip",
          "grama",
          "grame",
          "gramp",
          "grams",
          "grana",
          "grano",
          "grans",
          "grapy",
          "grata",
          "grats",
          "gravs",
          "grays",
          "grebe",
          "grebo",
          "grece",
          "greek",
          "grees",
          "grege",
          "grego",
          "grein",
          "grens",
          "greps",
          "grese",
          "greve",
          "grews",
          "greys",
          "grice",
          "gride",
          "grids",
          "griff",
          "grift",
          "grigs",
          "grike",
          "grins",
          "griot",
          "grips",
          "gript",
          "gripy",
          "grise",
          "grist",
          "grisy",
          "grith",
          "grits",
          "grize",
          "groat",
          "grody",
          "grogs",
          "groks",
          "groma",
          "groms",
          "grone",
          "groof",
          "grosz",
          "grots",
          "grouf",
          "grovy",
          "grows",
          "grrls",
          "grrrl",
          "grubs",
          "grued",
          "grues",
          "grufe",
          "grume",
          "grump",
          "grund",
          "gryce",
          "gryde",
          "gryke",
          "grype",
          "grypt",
          "guaco",
          "guana",
          "guano",
          "guans",
          "guars",
          "gubba",
          "gucks",
          "gucky",
          "gudes",
          "guffs",
          "gugas",
          "guggl",
          "guido",
          "guids",
          "guimp",
          "guiro",
          "gulab",
          "gulag",
          "gular",
          "gulas",
          "gules",
          "gulet",
          "gulfs",
          "gulfy",
          "gulls",
          "gulph",
          "gulps",
          "gulpy",
          "gumma",
          "gummi",
          "gumps",
          "gunas",
          "gundi",
          "gundy",
          "gunge",
          "gungy",
          "gunks",
          "gunky",
          "gunny",
          "guqin",
          "gurdy",
          "gurge",
          "gurks",
          "gurls",
          "gurly",
          "gurns",
          "gurry",
          "gursh",
          "gurus",
          "gushy",
          "gusla",
          "gusle",
          "gusli",
          "gussy",
          "gusts",
          "gutsy",
          "gutta",
          "gutty",
          "guyed",
          "guyle",
          "guyot",
          "guyse",
          "gwine",
          "gyals",
          "gyans",
          "gybed",
          "gybes",
          "gyeld",
          "gymps",
          "gynae",
          "gynie",
          "gynny",
          "gynos",
          "gyoza",
          "gypes",
          "gypos",
          "gyppo",
          "gyppy",
          "gyral",
          "gyred",
          "gyres",
          "gyron",
          "gyros",
          "gyrus",
          "gytes",
          "gyved",
          "gyver",
          "gyves",
          "haafs",
          "haars",
          "haats",
          "hable",
          "habus",
          "hacek",
          "hacks",
          "hacky",
          "hadal",
          "haded",
          "hades",
          "hadji",
          "hadst",
          "haems",
          "haere",
          "haets",
          "haffs",
          "hafiz",
          "hafta",
          "hafts",
          "haggs",
          "haham",
          "hahas",
          "haick",
          "haika",
          "haiks",
          "haiku",
          "hails",
          "haily",
          "hains",
          "haint",
          "hairs",
          "haith",
          "hajes",
          "hajis",
          "hajji",
          "hakam",
          "hakas",
          "hakea",
          "hakes",
          "hakim",
          "hakus",
          "halal",
          "haldi",
          "haled",
          "haler",
          "hales",
          "halfa",
          "halfs",
          "halid",
          "hallo",
          "halls",
          "halma",
          "halms",
          "halon",
          "halos",
          "halse",
          "halsh",
          "halts",
          "halva",
          "halwa",
          "hamal",
          "hamba",
          "hamed",
          "hamel",
          "hames",
          "hammy",
          "hamza",
          "hanap",
          "hance",
          "hanch",
          "handi",
          "hands",
          "hangi",
          "hangs",
          "hanks",
          "hanky",
          "hansa",
          "hanse",
          "hants",
          "haole",
          "haoma",
          "hapas",
          "hapax",
          "haply",
          "happi",
          "hapus",
          "haram",
          "hards",
          "hared",
          "hares",
          "harim",
          "harks",
          "harls",
          "harms",
          "harns",
          "haros",
          "harps",
          "harts",
          "hashy",
          "hasks",
          "hasps",
          "hasta",
          "hated",
          "hates",
          "hatha",
          "hathi",
          "hatty",
          "hauds",
          "haufs",
          "haugh",
          "haugo",
          "hauld",
          "haulm",
          "hauls",
          "hault",
          "hauns",
          "hause",
          "havan",
          "havel",
          "haver",
          "haves",
          "hawed",
          "hawks",
          "hawms",
          "hawse",
          "hayed",
          "hayer",
          "hayey",
          "hayle",
          "hazan",
          "hazed",
          "hazer",
          "hazes",
          "hazle",
          "heads",
          "heald",
          "heals",
          "heame",
          "heaps",
          "heapy",
          "heare",
          "hears",
          "heast",
          "heats",
          "heaty",
          "heben",
          "hebes",
          "hecht",
          "hecks",
          "heder",
          "hedgy",
          "heeds",
          "heedy",
          "heels",
          "heeze",
          "hefte",
          "hefts",
          "heiau",
          "heids",
          "heigh",
          "heils",
          "heirs",
          "hejab",
          "hejra",
          "heled",
          "heles",
          "helio",
          "hella",
          "hells",
          "helly",
          "helms",
          "helos",
          "helot",
          "helps",
          "helve",
          "hemal",
          "hemes",
          "hemic",
          "hemin",
          "hemps",
          "hempy",
          "hench",
          "hends",
          "henge",
          "henna",
          "henny",
          "henry",
          "hents",
          "hepar",
          "herbs",
          "herby",
          "herds",
          "heres",
          "herls",
          "herma",
          "herms",
          "herns",
          "heros",
          "herps",
          "herry",
          "herse",
          "hertz",
          "herye",
          "hesps",
          "hests",
          "hetes",
          "heths",
          "heuch",
          "heugh",
          "hevea",
          "hevel",
          "hewed",
          "hewer",
          "hewgh",
          "hexad",
          "hexed",
          "hexer",
          "hexes",
          "hexyl",
          "heyed",
          "hiant",
          "hibas",
          "hicks",
          "hided",
          "hider",
          "hides",
          "hiems",
          "hifis",
          "highs",
          "hight",
          "hijab",
          "hijra",
          "hiked",
          "hiker",
          "hikes",
          "hikoi",
          "hilar",
          "hilch",
          "hillo",
          "hills",
          "hilsa",
          "hilts",
          "hilum",
          "hilus",
          "himbo",
          "hinau",
          "hinds",
          "hings",
          "hinky",
          "hinny",
          "hints",
          "hiois",
          "hiped",
          "hiper",
          "hipes",
          "hiply",
          "hired",
          "hiree",
          "hirer",
          "hires",
          "hissy",
          "hists",
          "hithe",
          "hived",
          "hiver",
          "hives",
          "hizen",
          "hoach",
          "hoaed",
          "hoagy",
          "hoars",
          "hoary",
          "hoast",
          "hobos",
          "hocks",
          "hocus",
          "hodad",
          "hodja",
          "hoers",
          "hogan",
          "hogen",
          "hoggs",
          "hoghs",
          "hogoh",
          "hogos",
          "hohed",
          "hoick",
          "hoied",
          "hoiks",
          "hoing",
          "hoise",
          "hokas",
          "hoked",
          "hokes",
          "hokey",
          "hokis",
          "hokku",
          "hokum",
          "holds",
          "holed",
          "holes",
          "holey",
          "holks",
          "holla",
          "hollo",
          "holme",
          "holms",
          "holon",
          "holos",
          "holts",
          "homas",
          "homed",
          "homes",
          "homey",
          "homie",
          "homme",
          "homos",
          "honan",
          "honda",
          "honds",
          "honed",
          "honer",
          "hones",
          "hongi",
          "hongs",
          "honks",
          "honky",
          "hooch",
          "hoods",
          "hoody",
          "hooey",
          "hoofs",
          "hoogo",
          "hooha",
          "hooka",
          "hooks",
          "hooky",
          "hooly",
          "hoons",
          "hoops",
          "hoord",
          "hoors",
          "hoosh",
          "hoots",
          "hooty",
          "hoove",
          "hopak",
          "hoped",
          "hoper",
          "hopes",
          "hoppy",
          "horah",
          "horal",
          "horas",
          "horis",
          "horks",
          "horme",
          "horns",
          "horst",
          "horsy",
          "hosed",
          "hosel",
          "hosen",
          "hoser",
          "hoses",
          "hosey",
          "hosta",
          "hosts",
          "hotch",
          "hoten",
          "hotis",
          "hotte",
          "hotty",
          "houff",
          "houfs",
          "hough",
          "houri",
          "hours",
          "houts",
          "hovea",
          "hoved",
          "hoven",
          "hoves",
          "howay",
          "howbe",
          "howes",
          "howff",
          "howfs",
          "howks",
          "howls",
          "howre",
          "howso",
          "howto",
          "hoxed",
          "hoxes",
          "hoyas",
          "hoyed",
          "hoyle",
          "hubba",
          "hubby",
          "hucks",
          "hudna",
          "hudud",
          "huers",
          "huffs",
          "huffy",
          "huger",
          "huggy",
          "huhus",
          "huias",
          "huies",
          "hukou",
          "hulas",
          "hules",
          "hulks",
          "hulky",
          "hullo",
          "hulls",
          "hully",
          "humas",
          "humfs",
          "humic",
          "humps",
          "humpy",
          "hundo",
          "hunks",
          "hunts",
          "hurds",
          "hurls",
          "hurly",
          "hurra",
          "hurst",
          "hurts",
          "hurty",
          "hushy",
          "husks",
          "husos",
          "hutia",
          "huzza",
          "huzzy",
          "hwyls",
          "hydel",
          "hydra",
          "hyens",
          "hygge",
          "hying",
          "hykes",
          "hylas",
          "hyleg",
          "hyles",
          "hylic",
          "hymns",
          "hynde",
          "hyoid",
          "hyped",
          "hypes",
          "hypha",
          "hyphy",
          "hypos",
          "hyrax",
          "hyson",
          "hythe",
          "iambi",
          "iambs",
          "ibrik",
          "icers",
          "iched",
          "iches",
          "ichor",
          "icier",
          "icker",
          "ickle",
          "icons",
          "ictal",
          "ictic",
          "ictus",
          "idant",
          "iddah",
          "iddat",
          "iddut",
          "ideas",
          "idees",
          "ident",
          "idled",
          "idles",
          "idlis",
          "idola",
          "idols",
          "idyls",
          "iftar",
          "igapo",
          "igged",
          "iglus",
          "ignis",
          "ihram",
          "iiwis",
          "ikans",
          "ikats",
          "ikons",
          "ileac",
          "ileal",
          "ileum",
          "ileus",
          "iliad",
          "ilial",
          "ilium",
          "iller",
          "illth",
          "imago",
          "imagy",
          "imams",
          "imari",
          "imaum",
          "imbar",
          "imbed",
          "imbos",
          "imide",
          "imido",
          "imids",
          "imine",
          "imino",
          "imlis",
          "immew",
          "immit",
          "immix",
          "imped",
          "impis",
          "impot",
          "impro",
          "imshi",
          "imshy",
          "inapt",
          "inarm",
          "inbye",
          "incas",
          "incel",
          "incle",
          "incog",
          "incus",
          "incut",
          "indew",
          "india",
          "indie",
          "indol",
          "indow",
          "indri",
          "indue",
          "inerm",
          "infix",
          "infos",
          "infra",
          "ingan",
          "ingle",
          "inion",
          "inked",
          "inker",
          "inkle",
          "inned",
          "innie",
          "innit",
          "inorb",
          "inros",
          "inrun",
          "insee",
          "inset",
          "inspo",
          "intel",
          "intil",
          "intis",
          "intra",
          "inula",
          "inure",
          "inurn",
          "inust",
          "invar",
          "inver",
          "inwit",
          "iodic",
          "iodid",
          "iodin",
          "ioras",
          "iotas",
          "ippon",
          "irade",
          "irids",
          "iring",
          "irked",
          "iroko",
          "irone",
          "irons",
          "isbas",
          "ishes",
          "isled",
          "isles",
          "isnae",
          "issei",
          "istle",
          "items",
          "ither",
          "ivied",
          "ivies",
          "ixias",
          "ixnay",
          "ixora",
          "ixtle",
          "izard",
          "izars",
          "izzat",
          "jaaps",
          "jabot",
          "jacal",
          "jacet",
          "jacks",
          "jacky",
          "jaded",
          "jades",
          "jafas",
          "jaffa",
          "jagas",
          "jager",
          "jaggs",
          "jaggy",
          "jagir",
          "jagra",
          "jails",
          "jaker",
          "jakes",
          "jakey",
          "jakie",
          "jalap",
          "jaleo",
          "jalop",
          "jambe",
          "jambo",
          "jambs",
          "jambu",
          "james",
          "jammy",
          "jamon",
          "jamun",
          "janes",
          "janky",
          "janns",
          "janny",
          "janty",
          "japan",
          "japed",
          "japer",
          "japes",
          "jarks",
          "jarls",
          "jarps",
          "jarta",
          "jarul",
          "jasey",
          "jaspe",
          "jasps",
          "jatha",
          "jatis",
          "jatos",
          "jauks",
          "jaune",
          "jaups",
          "javas",
          "javel",
          "jawan",
          "jawed",
          "jawns",
          "jaxie",
          "jeans",
          "jeats",
          "jebel",
          "jedis",
          "jeels",
          "jeely",
          "jeeps",
          "jeera",
          "jeers",
          "jeeze",
          "jefes",
          "jeffs",
          "jehad",
          "jehus",
          "jelab",
          "jello",
          "jells",
          "jembe",
          "jemmy",
          "jenny",
          "jeons",
          "jerid",
          "jerks",
          "jerry",
          "jesse",
          "jessy",
          "jests",
          "jesus",
          "jetee",
          "jetes",
          "jeton",
          "jeune",
          "jewed",
          "jewie",
          "jhala",
          "jheel",
          "jhils",
          "jiaos",
          "jibba",
          "jibbs",
          "jibed",
          "jiber",
          "jibes",
          "jiffs",
          "jiggy",
          "jigot",
          "jihad",
          "jills",
          "jilts",
          "jimmy",
          "jimpy",
          "jingo",
          "jings",
          "jinks",
          "jinne",
          "jinni",
          "jinns",
          "jirds",
          "jirga",
          "jirre",
          "jisms",
          "jitis",
          "jitty",
          "jived",
          "jiver",
          "jives",
          "jivey",
          "jnana",
          "jobed",
          "jobes",
          "jocko",
          "jocks",
          "jocky",
          "jocos",
          "jodel",
          "joeys",
          "johns",
          "joins",
          "joked",
          "jokes",
          "jokey",
          "jokol",
          "joled",
          "joles",
          "jolie",
          "jollo",
          "jolls",
          "jolts",
          "jolty",
          "jomon",
          "jomos",
          "jones",
          "jongs",
          "jonty",
          "jooks",
          "joram",
          "jorts",
          "jorum",
          "jotas",
          "jotty",
          "jotun",
          "joual",
          "jougs",
          "jouks",
          "joule",
          "jours",
          "jowar",
          "jowed",
          "jowls",
          "jowly",
          "joyed",
          "jubas",
          "jubes",
          "jucos",
          "judas",
          "judgy",
          "judos",
          "jugal",
          "jugum",
          "jujus",
          "juked",
          "jukes",
          "jukus",
          "julep",
          "julia",
          "jumar",
          "jumby",
          "jumps",
          "junco",
          "junks",
          "junky",
          "jupes",
          "jupon",
          "jural",
          "jurat",
          "jurel",
          "jures",
          "juris",
          "juste",
          "justs",
          "jutes",
          "jutty",
          "juves",
          "juvie",
          "kaama",
          "kabab",
          "kabar",
          "kabob",
          "kacha",
          "kacks",
          "kadai",
          "kades",
          "kadis",
          "kafir",
          "kagos",
          "kagus",
          "kahal",
          "kaiak",
          "kaids",
          "kaies",
          "kaifs",
          "kaika",
          "kaiks",
          "kails",
          "kaims",
          "kaing",
          "kains",
          "kajal",
          "kakas",
          "kakis",
          "kalam",
          "kalas",
          "kales",
          "kalif",
          "kalis",
          "kalpa",
          "kalua",
          "kamas",
          "kames",
          "kamik",
          "kamis",
          "kamme",
          "kanae",
          "kanal",
          "kanas",
          "kanat",
          "kandy",
          "kaneh",
          "kanes",
          "kanga",
          "kangs",
          "kanji",
          "kants",
          "kanzu",
          "kaons",
          "kapai",
          "kapas",
          "kapha",
          "kaphs",
          "kapok",
          "kapow",
          "kapur",
          "kapus",
          "kaput",
          "karai",
          "karas",
          "karat",
          "karee",
          "karez",
          "karks",
          "karns",
          "karoo",
          "karos",
          "karri",
          "karst",
          "karsy",
          "karts",
          "karzy",
          "kasha",
          "kasme",
          "katal",
          "katas",
          "katis",
          "katti",
          "kaugh",
          "kauri",
          "kauru",
          "kaury",
          "kaval",
          "kavas",
          "kawas",
          "kawau",
          "kawed",
          "kayle",
          "kayos",
          "kazis",
          "kazoo",
          "kbars",
          "kcals",
          "keaki",
          "kebar",
          "kebob",
          "kecks",
          "kedge",
          "kedgy",
          "keech",
          "keefs",
          "keeks",
          "keels",
          "keema",
          "keeno",
          "keens",
          "keeps",
          "keets",
          "keeve",
          "kefir",
          "kehua",
          "keirs",
          "kelep",
          "kelim",
          "kells",
          "kelly",
          "kelps",
          "kelpy",
          "kelts",
          "kelty",
          "kembo",
          "kembs",
          "kemps",
          "kempt",
          "kempy",
          "kenaf",
          "kench",
          "kendo",
          "kenos",
          "kente",
          "kents",
          "kepis",
          "kerbs",
          "kerel",
          "kerfs",
          "kerky",
          "kerma",
          "kerne",
          "kerns",
          "keros",
          "kerry",
          "kerve",
          "kesar",
          "kests",
          "ketas",
          "ketch",
          "ketes",
          "ketol",
          "kevel",
          "kevil",
          "kexes",
          "keyed",
          "keyer",
          "khadi",
          "khads",
          "khafs",
          "khana",
          "khans",
          "khaph",
          "khats",
          "khaya",
          "khazi",
          "kheda",
          "kheer",
          "kheth",
          "khets",
          "khirs",
          "khoja",
          "khors",
          "khoum",
          "khuds",
          "khula",
          "khyal",
          "kiaat",
          "kiack",
          "kiaki",
          "kiang",
          "kiasu",
          "kibbe",
          "kibbi",
          "kibei",
          "kibes",
          "kibla",
          "kicks",
          "kicky",
          "kiddo",
          "kiddy",
          "kidel",
          "kideo",
          "kidge",
          "kiefs",
          "kiers",
          "kieve",
          "kievs",
          "kight",
          "kikay",
          "kikes",
          "kikoi",
          "kiley",
          "kilig",
          "kilim",
          "kills",
          "kilns",
          "kilos",
          "kilps",
          "kilts",
          "kilty",
          "kimbo",
          "kimet",
          "kinas",
          "kinda",
          "kinds",
          "kindy",
          "kines",
          "kings",
          "kingy",
          "kinin",
          "kinks",
          "kinos",
          "kiore",
          "kipah",
          "kipas",
          "kipes",
          "kippa",
          "kipps",
          "kipsy",
          "kirby",
          "kirks",
          "kirns",
          "kirri",
          "kisan",
          "kissy",
          "kists",
          "kitab",
          "kited",
          "kiter",
          "kites",
          "kithe",
          "kiths",
          "kitke",
          "kitul",
          "kivas",
          "kiwis",
          "klang",
          "klaps",
          "klett",
          "klick",
          "klieg",
          "kliks",
          "klong",
          "kloof",
          "kluge",
          "klutz",
          "knags",
          "knaps",
          "knarl",
          "knars",
          "knaur",
          "knawe",
          "knees",
          "knell",
          "knick",
          "knish",
          "knits",
          "knive",
          "knobs",
          "knoop",
          "knops",
          "knosp",
          "knots",
          "knoud",
          "knout",
          "knowd",
          "knowe",
          "knows",
          "knubs",
          "knule",
          "knurl",
          "knurr",
          "knurs",
          "knuts",
          "koans",
          "koaps",
          "koban",
          "kobos",
          "koels",
          "koffs",
          "kofta",
          "kogal",
          "kohas",
          "kohen",
          "kohls",
          "koine",
          "koiwi",
          "kojis",
          "kokam",
          "kokas",
          "koker",
          "kokra",
          "kokum",
          "kolas",
          "kolos",
          "kombi",
          "kombu",
          "konbu",
          "kondo",
          "konks",
          "kooks",
          "kooky",
          "koori",
          "kopek",
          "kophs",
          "kopje",
          "koppa",
          "korai",
          "koran",
          "koras",
          "korat",
          "kores",
          "koris",
          "korma",
          "koros",
          "korun",
          "korus",
          "koses",
          "kotch",
          "kotos",
          "kotow",
          "koura",
          "kraal",
          "krabs",
          "kraft",
          "krais",
          "krait",
          "krang",
          "krans",
          "kranz",
          "kraut",
          "krays",
          "kreef",
          "kreen",
          "kreep",
          "kreng",
          "krewe",
          "kriol",
          "krona",
          "krone",
          "kroon",
          "krubi",
          "krump",
          "krunk",
          "ksars",
          "kubie",
          "kudos",
          "kudus",
          "kudzu",
          "kufis",
          "kugel",
          "kuias",
          "kukri",
          "kukus",
          "kulak",
          "kulan",
          "kulas",
          "kulfi",
          "kumis",
          "kumys",
          "kunas",
          "kunds",
          "kuris",
          "kurre",
          "kurta",
          "kurus",
          "kusso",
          "kusti",
          "kutai",
          "kutas",
          "kutch",
          "kutis",
          "kutus",
          "kuyas",
          "kuzus",
          "kvass",
          "kvell",
          "kwaai",
          "kwela",
          "kwink",
          "kwirl",
          "kyack",
          "kyaks",
          "kyang",
          "kyars",
          "kyats",
          "kybos",
          "kydst",
          "kyles",
          "kylie",
          "kylin",
          "kylix",
          "kyloe",
          "kynde",
          "kynds",
          "kypes",
          "kyrie",
          "kytes",
          "kythe",
          "kyudo",
          "laarf",
          "laari",
          "labda",
          "labia",
          "labis",
          "labne",
          "labra",
          "laccy",
          "laced",
          "lacer",
          "laces",
          "lacet",
          "lacey",
          "lacis",
          "lacka",
          "lacks",
          "lacky",
          "laddu",
          "laddy",
          "laded",
          "ladee",
          "lader",
          "lades",
          "ladoo",
          "laers",
          "laevo",
          "lagan",
          "lagar",
          "laggy",
          "lahal",
          "lahar",
          "laich",
          "laics",
          "laide",
          "laids",
          "laigh",
          "laika",
          "laiks",
          "laird",
          "lairs",
          "lairy",
          "laith",
          "laity",
          "laked",
          "laker",
          "lakes",
          "lakhs",
          "lakin",
          "laksa",
          "laldy",
          "lalls",
          "lamas",
          "lambs",
          "lamby",
          "lamed",
          "lamer",
          "lames",
          "lamia",
          "lammy",
          "lamps",
          "lanai",
          "lanas",
          "lanch",
          "lande",
          "lands",
          "laned",
          "lanes",
          "lanks",
          "lants",
          "lapas",
          "lapin",
          "lapis",
          "lapje",
          "lappa",
          "lappy",
          "larch",
          "lards",
          "lardy",
          "laree",
          "lares",
          "larfs",
          "larga",
          "largo",
          "laris",
          "larks",
          "larky",
          "larns",
          "larnt",
          "larum",
          "lased",
          "laser",
          "lases",
          "lassi",
          "lassu",
          "lassy",
          "lasts",
          "latah",
          "lated",
          "laten",
          "latex",
          "lathi",
          "laths",
          "lathy",
          "latke",
          "latus",
          "lauan",
          "lauch",
          "laude",
          "lauds",
          "laufs",
          "laund",
          "laura",
          "laval",
          "lavas",
          "laved",
          "laver",
          "laves",
          "lavra",
          "lavvy",
          "lawed",
          "lawer",
          "lawin",
          "lawks",
          "lawns",
          "lawny",
          "lawsy",
          "laxed",
          "laxer",
          "laxes",
          "laxly",
          "layby",
          "layed",
          "layin",
          "layup",
          "lazar",
          "lazed",
          "lazes",
          "lazos",
          "lazzi",
          "lazzo",
          "leads",
          "leady",
          "leafs",
          "leaks",
          "leams",
          "leans",
          "leany",
          "leaps",
          "leare",
          "lears",
          "leary",
          "leats",
          "leavy",
          "leaze",
          "leben",
          "leccy",
          "leche",
          "ledes",
          "ledgy",
          "ledum",
          "leear",
          "leeks",
          "leeps",
          "leers",
          "leese",
          "leets",
          "leeze",
          "lefte",
          "lefts",
          "leger",
          "leges",
          "legge",
          "leggo",
          "legit",
          "legno",
          "lehrs",
          "lehua",
          "leirs",
          "leish",
          "leman",
          "lemed",
          "lemel",
          "lemes",
          "lemma",
          "lemme",
          "lends",
          "lenes",
          "lengs",
          "lenis",
          "lenos",
          "lense",
          "lenti",
          "lento",
          "leone",
          "lepak",
          "lepid",
          "lepra",
          "lepta",
          "lered",
          "leres",
          "lerps",
          "lesbo",
          "leses",
          "lesos",
          "lests",
          "letch",
          "lethe",
          "letty",
          "letup",
          "leuch",
          "leuco",
          "leuds",
          "leugh",
          "levas",
          "levee",
          "leves",
          "levin",
          "levis",
          "lewis",
          "lexes",
          "lexis",
          "lezes",
          "lezza",
          "lezzo",
          "lezzy",
          "liana",
          "liane",
          "liang",
          "liard",
          "liars",
          "liart",
          "liber",
          "libor",
          "libra",
          "libre",
          "libri",
          "licet",
          "lichi",
          "licht",
          "licit",
          "licks",
          "lidar",
          "lidos",
          "liefs",
          "liens",
          "liers",
          "lieus",
          "lieve",
          "lifer",
          "lifes",
          "lifey",
          "lifts",
          "ligan",
          "liger",
          "ligge",
          "ligne",
          "liked",
          "liker",
          "likes",
          "likin",
          "lills",
          "lilos",
          "lilts",
          "lilty",
          "liman",
          "limas",
          "limax",
          "limba",
          "limbi",
          "limbs",
          "limby",
          "limed",
          "limen",
          "limes",
          "limey",
          "limma",
          "limns",
          "limos",
          "limpa",
          "limps",
          "linac",
          "linch",
          "linds",
          "lindy",
          "lined",
          "lines",
          "liney",
          "linga",
          "lings",
          "lingy",
          "linin",
          "links",
          "linky",
          "linns",
          "linny",
          "linos",
          "lints",
          "linty",
          "linum",
          "linux",
          "lions",
          "lipas",
          "lipes",
          "lipin",
          "lipos",
          "lippy",
          "liras",
          "lirks",
          "lirot",
          "lises",
          "lisks",
          "lisle",
          "lisps",
          "lists",
          "litai",
          "litas",
          "lited",
          "litem",
          "liter",
          "lites",
          "litho",
          "liths",
          "litie",
          "litre",
          "lived",
          "liven",
          "lives",
          "livor",
          "livre",
          "liwaa",
          "liwas",
          "llano",
          "loach",
          "loads",
          "loafs",
          "loams",
          "loans",
          "loast",
          "loave",
          "lobar",
          "lobed",
          "lobes",
          "lobos",
          "lobus",
          "loche",
          "lochs",
          "lochy",
          "locie",
          "locis",
          "locks",
          "locky",
          "locos",
          "locum",
          "loden",
          "lodes",
          "loess",
          "lofts",
          "logan",
          "loges",
          "loggy",
          "logia",
          "logie",
          "logoi",
          "logon",
          "logos",
          "lohan",
          "loids",
          "loins",
          "loipe",
          "loirs",
          "lokes",
          "lokey",
          "lokum",
          "lolas",
          "loled",
          "lollo",
          "lolls",
          "lolly",
          "lolog",
          "lolos",
          "lomas",
          "lomed",
          "lomes",
          "loner",
          "longa",
          "longe",
          "longs",
          "looby",
          "looed",
          "looey",
          "loofa",
          "loofs",
          "looie",
          "looks",
          "looky",
          "looms",
          "loons",
          "loony",
          "loops",
          "loord",
          "loots",
          "loped",
          "loper",
          "lopes",
          "loppy",
          "loral",
          "loran",
          "lords",
          "lordy",
          "lorel",
          "lores",
          "loric",
          "loris",
          "losed",
          "losel",
          "losen",
          "loses",
          "lossy",
          "lotah",
          "lotas",
          "lotes",
          "lotic",
          "lotos",
          "lotsa",
          "lotta",
          "lotte",
          "lotto",
          "lotus",
          "loued",
          "lough",
          "louie",
          "louis",
          "louma",
          "lound",
          "louns",
          "loupe",
          "loups",
          "loure",
          "lours",
          "loury",
          "louts",
          "lovat",
          "loved",
          "lovee",
          "loves",
          "lovey",
          "lovie",
          "lowan",
          "lowed",
          "lowen",
          "lowes",
          "lownd",
          "lowne",
          "lowns",
          "lowps",
          "lowry",
          "lowse",
          "lowth",
          "lowts",
          "loxed",
          "loxes",
          "lozen",
          "luach",
          "luaus",
          "lubed",
          "lubes",
          "lubra",
          "luces",
          "lucks",
          "lucre",
          "ludes",
          "ludic",
          "ludos",
          "luffa",
          "luffs",
          "luged",
          "luger",
          "luges",
          "lulls",
          "lulus",
          "lumas",
          "lumbi",
          "lumme",
          "lummy",
          "lumps",
          "lunas",
          "lunes",
          "lunet",
          "lungi",
          "lungs",
          "lunks",
          "lunts",
          "lupin",
          "lured",
          "lurer",
          "lures",
          "lurex",
          "lurgi",
          "lurgy",
          "lurks",
          "lurry",
          "lurve",
          "luser",
          "lushy",
          "lusks",
          "lusts",
          "lusus",
          "lutea",
          "luted",
          "luter",
          "lutes",
          "luvvy",
          "luxed",
          "luxer",
          "luxes",
          "lweis",
          "lyams",
          "lyard",
          "lyart",
          "lyase",
          "lycea",
          "lycee",
          "lycra",
          "lymes",
          "lynch",
          "lynes",
          "lyres",
          "lysed",
          "lyses",
          "lysin",
          "lysis",
          "lysol",
          "lyssa",
          "lyted",
          "lytes",
          "lythe",
          "lytic",
          "lytta",
          "maaed",
          "maare",
          "maars",
          "maban",
          "mabes",
          "macas",
          "macca",
          "maced",
          "macer",
          "maces",
          "mache",
          "machi",
          "machs",
          "macka",
          "macks",
          "macle",
          "macon",
          "macte",
          "madal",
          "madar",
          "maddy",
          "madge",
          "madid",
          "mados",
          "madre",
          "maedi",
          "maerl",
          "mafic",
          "mafts",
          "magas",
          "mages",
          "maggs",
          "magna",
          "magot",
          "magus",
          "mahal",
          "mahem",
          "mahis",
          "mahoe",
          "mahrs",
          "mahua",
          "mahwa",
          "maids",
          "maiko",
          "maiks",
          "maile",
          "maill",
          "mailo",
          "mails",
          "maims",
          "mains",
          "maire",
          "mairs",
          "maise",
          "maist",
          "majas",
          "majat",
          "majoe",
          "majos",
          "makaf",
          "makai",
          "makan",
          "makar",
          "makee",
          "makes",
          "makie",
          "makis",
          "makos",
          "malae",
          "malai",
          "malam",
          "malar",
          "malas",
          "malax",
          "maleo",
          "males",
          "malic",
          "malik",
          "malis",
          "malky",
          "malls",
          "malms",
          "malmy",
          "malts",
          "malty",
          "malus",
          "malva",
          "malwa",
          "mamak",
          "mamas",
          "mamba",
          "mambu",
          "mamee",
          "mamey",
          "mamie",
          "mamil",
          "manas",
          "manat",
          "mandi",
          "mands",
          "mandy",
          "maneb",
          "maned",
          "maneh",
          "manes",
          "manet",
          "mangi",
          "mangs",
          "manie",
          "manis",
          "manks",
          "manky",
          "manna",
          "manny",
          "manoa",
          "manos",
          "manse",
          "manso",
          "manta",
          "mante",
          "manto",
          "mants",
          "manty",
          "manul",
          "manus",
          "manzo",
          "mapau",
          "mapes",
          "mapou",
          "mappy",
          "maqam",
          "maqui",
          "marae",
          "marah",
          "maral",
          "maran",
          "maras",
          "maray",
          "marcs",
          "mards",
          "mardy",
          "mares",
          "marga",
          "marge",
          "margo",
          "margs",
          "maria",
          "marid",
          "maril",
          "marka",
          "marks",
          "marle",
          "marls",
          "marly",
          "marma",
          "marms",
          "maron",
          "maror",
          "marra",
          "marri",
          "marse",
          "marts",
          "marua",
          "marvy",
          "masas",
          "mased",
          "maser",
          "mases",
          "masha",
          "mashy",
          "masks",
          "massa",
          "massy",
          "masts",
          "masty",
          "masur",
          "masus",
          "masut",
          "matai",
          "mated",
          "mater",
          "mates",
          "mathe",
          "maths",
          "matin",
          "matlo",
          "matra",
          "matsu",
          "matte",
          "matts",
          "matty",
          "matza",
          "matzo",
          "mauby",
          "mauds",
          "mauka",
          "maula",
          "mauls",
          "maums",
          "maumy",
          "maund",
          "maunt",
          "mauri",
          "mausy",
          "mauts",
          "mauvy",
          "mauzy",
          "maven",
          "mavie",
          "mavin",
          "mavis",
          "mawed",
          "mawks",
          "mawky",
          "mawla",
          "mawns",
          "mawps",
          "mawrs",
          "maxed",
          "maxes",
          "maxis",
          "mayan",
          "mayas",
          "mayed",
          "mayos",
          "mayst",
          "mazac",
          "mazak",
          "mazar",
          "mazas",
          "mazed",
          "mazel",
          "mazer",
          "mazes",
          "mazet",
          "mazey",
          "mazut",
          "mbari",
          "mbars",
          "mbila",
          "mbira",
          "mbret",
          "mbube",
          "mbuga",
          "meads",
          "meake",
          "meaks",
          "meals",
          "meane",
          "means",
          "meany",
          "meare",
          "mease",
          "meath",
          "meats",
          "mebbe",
          "mebos",
          "mecha",
          "mechs",
          "mecks",
          "mecum",
          "medii",
          "medin",
          "medle",
          "meech",
          "meeds",
          "meeja",
          "meeps",
          "meers",
          "meets",
          "meffs",
          "meids",
          "meiko",
          "meils",
          "meins",
          "meint",
          "meiny",
          "meism",
          "meith",
          "mekka",
          "melam",
          "melas",
          "melba",
          "melch",
          "melds",
          "meles",
          "melic",
          "melik",
          "mells",
          "meloe",
          "melos",
          "melts",
          "melty",
          "memes",
          "memic",
          "memos",
          "menad",
          "mence",
          "mends",
          "mened",
          "menes",
          "menge",
          "mengs",
          "menil",
          "mensa",
          "mense",
          "mensh",
          "menta",
          "mento",
          "ments",
          "menus",
          "meous",
          "meows",
          "merch",
          "mercs",
          "merde",
          "merds",
          "mered",
          "merel",
          "merer",
          "meres",
          "meril",
          "meris",
          "merks",
          "merle",
          "merls",
          "merse",
          "mersk",
          "mesad",
          "mesal",
          "mesas",
          "mesca",
          "mesel",
          "mesem",
          "meses",
          "meshy",
          "mesia",
          "mesic",
          "mesne",
          "meson",
          "messy",
          "mesto",
          "mesyl",
          "metas",
          "meted",
          "meteg",
          "metel",
          "metes",
          "methi",
          "metho",
          "meths",
          "methy",
          "metic",
          "metif",
          "metis",
          "metol",
          "metre",
          "metta",
          "meums",
          "meuse",
          "meved",
          "meves",
          "mewed",
          "mewls",
          "meynt",
          "mezes",
          "mezza",
          "mezze",
          "mezzo",
          "mgals",
          "mhorr",
          "miais",
          "miaou",
          "miaow",
          "miasm",
          "miaul",
          "micas",
          "miche",
          "michi",
          "micht",
          "micks",
          "micky",
          "micos",
          "micra",
          "middy",
          "midgy",
          "midis",
          "miens",
          "mieux",
          "mieve",
          "miffs",
          "miffy",
          "mifty",
          "miggs",
          "migma",
          "migod",
          "mihas",
          "mihis",
          "mikan",
          "miked",
          "mikes",
          "mikos",
          "mikra",
          "mikva",
          "milch",
          "milds",
          "miler",
          "miles",
          "milfs",
          "milia",
          "milko",
          "milks",
          "mille",
          "mills",
          "milly",
          "milor",
          "milos",
          "milpa",
          "milts",
          "milty",
          "miltz",
          "mimed",
          "mimeo",
          "mimer",
          "mimes",
          "mimis",
          "mimsy",
          "minae",
          "minar",
          "minas",
          "mincy",
          "mindi",
          "minds",
          "mined",
          "mines",
          "minge",
          "mingi",
          "mings",
          "mingy",
          "minis",
          "minke",
          "minks",
          "minny",
          "minos",
          "minse",
          "mints",
          "minxy",
          "miraa",
          "mirah",
          "mirch",
          "mired",
          "mires",
          "mirex",
          "mirid",
          "mirin",
          "mirkn",
          "mirks",
          "mirky",
          "mirls",
          "mirly",
          "miros",
          "mirrl",
          "mirrs",
          "mirvs",
          "mirza",
          "misal",
          "misch",
          "misdo",
          "mises",
          "misgo",
          "misky",
          "misls",
          "misos",
          "missa",
          "misto",
          "mists",
          "misty",
          "mitas",
          "mitch",
          "miter",
          "mites",
          "mitey",
          "mitie",
          "mitis",
          "mitre",
          "mitry",
          "mitta",
          "mitts",
          "mivey",
          "mivvy",
          "mixed",
          "mixen",
          "mixer",
          "mixes",
          "mixie",
          "mixis",
          "mixte",
          "mixup",
          "miyas",
          "mizen",
          "mizes",
          "mizzy",
          "mmkay",
          "mneme",
          "moais",
          "moaky",
          "moals",
          "moana",
          "moans",
          "moany",
          "moars",
          "moats",
          "mobby",
          "mobed",
          "mobee",
          "mobes",
          "mobey",
          "mobie",
          "moble",
          "mobos",
          "mocap",
          "mochi",
          "mochs",
          "mochy",
          "mocks",
          "mocky",
          "mocos",
          "mocus",
          "moder",
          "modes",
          "modge",
          "modii",
          "modin",
          "modoc",
          "modom",
          "modus",
          "moeni",
          "moers",
          "mofos",
          "mogar",
          "mogas",
          "moggy",
          "mogos",
          "mogra",
          "mogue",
          "mohar",
          "mohel",
          "mohos",
          "mohrs",
          "mohua",
          "mohur",
          "moile",
          "moils",
          "moira",
          "moire",
          "moits",
          "moity",
          "mojos",
          "moker",
          "mokes",
          "mokey",
          "mokis",
          "mokky",
          "mokos",
          "mokus",
          "molal",
          "molas",
          "molds",
          "moled",
          "moler",
          "moles",
          "moley",
          "molie",
          "molla",
          "molle",
          "mollo",
          "molls",
          "molly",
          "moloi",
          "molos",
          "molto",
          "molts",
          "molue",
          "molvi",
          "molys",
          "momes",
          "momie",
          "momma",
          "momme",
          "mommy",
          "momos",
          "mompe",
          "momus",
          "monad",
          "monal",
          "monas",
          "monde",
          "mondo",
          "moner",
          "mongo",
          "mongs",
          "monic",
          "monie",
          "monks",
          "monos",
          "monpe",
          "monte",
          "monty",
          "moobs",
          "mooch",
          "moods",
          "mooed",
          "mooey",
          "mooks",
          "moola",
          "mooli",
          "mools",
          "mooly",
          "moong",
          "mooni",
          "moons",
          "moony",
          "moops",
          "moors",
          "moory",
          "mooth",
          "moots",
          "moove",
          "moped",
          "moper",
          "mopes",
          "mopey",
          "moppy",
          "mopsy",
          "mopus",
          "morae",
          "morah",
          "moran",
          "moras",
          "morat",
          "moray",
          "moree",
          "morel",
          "mores",
          "morgy",
          "moria",
          "morin",
          "mormo",
          "morna",
          "morne",
          "morns",
          "moror",
          "morra",
          "morro",
          "morse",
          "morts",
          "moruk",
          "mosed",
          "moses",
          "mosey",
          "mosks",
          "mosso",
          "moste",
          "mosto",
          "mosts",
          "moted",
          "moten",
          "motes",
          "motet",
          "motey",
          "moths",
          "mothy",
          "motis",
          "moton",
          "motte",
          "motts",
          "motty",
          "motus",
          "motza",
          "mouch",
          "moues",
          "moufs",
          "mould",
          "moule",
          "mouls",
          "mouly",
          "moups",
          "moust",
          "mousy",
          "moved",
          "moves",
          "mowas",
          "mowed",
          "mowie",
          "mowra",
          "moxas",
          "moxie",
          "moyas",
          "moyle",
          "moyls",
          "mozed",
          "mozes",
          "mozos",
          "mpret",
          "mrads",
          "msasa",
          "mtepe",
          "mucho",
          "mucic",
          "mucid",
          "mucin",
          "mucko",
          "mucks",
          "mucor",
          "mucro",
          "mudar",
          "mudge",
          "mudif",
          "mudim",
          "mudir",
          "mudra",
          "muffs",
          "muffy",
          "mufti",
          "mugga",
          "muggs",
          "muggy",
          "mugho",
          "mugil",
          "mugos",
          "muhly",
          "muids",
          "muils",
          "muirs",
          "muiry",
          "muist",
          "mujik",
          "mukim",
          "mukti",
          "mulai",
          "mulct",
          "muled",
          "mules",
          "muley",
          "mulga",
          "mulie",
          "mulla",
          "mulls",
          "mulse",
          "mulsh",
          "mumbo",
          "mumms",
          "mumph",
          "mumps",
          "mumsy",
          "mumus",
          "munds",
          "mundu",
          "munga",
          "munge",
          "mungi",
          "mungo",
          "mungs",
          "mungy",
          "munia",
          "munis",
          "munja",
          "munjs",
          "munts",
          "muntu",
          "muons",
          "muras",
          "mured",
          "mures",
          "murex",
          "murgh",
          "murgi",
          "murid",
          "murks",
          "murls",
          "murly",
          "murra",
          "murre",
          "murri",
          "murrs",
          "murry",
          "murth",
          "murti",
          "muruk",
          "murva",
          "musar",
          "musca",
          "mused",
          "musee",
          "muser",
          "muses",
          "muset",
          "musha",
          "musit",
          "musks",
          "musos",
          "musse",
          "mussy",
          "musta",
          "musth",
          "musts",
          "mutas",
          "mutch",
          "muted",
          "muter",
          "mutes",
          "mutha",
          "mutic",
          "mutis",
          "muton",
          "mutti",
          "mutts",
          "mutum",
          "muvva",
          "muxed",
          "muxes",
          "muzak",
          "muzzy",
          "mvula",
          "mvule",
          "mvuli",
          "myall",
          "myals",
          "mylar",
          "mynah",
          "mynas",
          "myoid",
          "myoma",
          "myons",
          "myope",
          "myops",
          "myopy",
          "mysid",
          "mysie",
          "mythi",
          "myths",
          "mythy",
          "myxos",
          "mzees",
          "naams",
          "naans",
          "naats",
          "nabam",
          "nabby",
          "nabes",
          "nabis",
          "nabks",
          "nabla",
          "nabob",
          "nache",
          "nacho",
          "nacre",
          "nadas",
          "naeve",
          "naevi",
          "naffs",
          "nagar",
          "nagas",
          "nages",
          "naggy",
          "nagor",
          "nahal",
          "naiad",
          "naibs",
          "naice",
          "naids",
          "naieo",
          "naifs",
          "naiks",
          "nails",
          "naily",
          "nains",
          "naios",
          "naira",
          "nairu",
          "najib",
          "nakas",
          "naked",
          "naker",
          "nakfa",
          "nalas",
          "naled",
          "nalla",
          "namad",
          "namak",
          "namaz",
          "named",
          "namer",
          "names",
          "namma",
          "namus",
          "nanas",
          "nance",
          "nancy",
          "nandu",
          "nanna",
          "nanos",
          "nante",
          "nanti",
          "nanto",
          "nants",
          "nanty",
          "nanua",
          "napas",
          "naped",
          "napes",
          "napoh",
          "napoo",
          "nappa",
          "nappe",
          "nappy",
          "naras",
          "narco",
          "narcs",
          "nards",
          "nares",
          "naric",
          "naris",
          "narks",
          "narky",
          "narod",
          "narra",
          "narre",
          "nashi",
          "nasho",
          "nasis",
          "nason",
          "nasus",
          "natak",
          "natch",
          "nates",
          "natis",
          "natto",
          "natty",
          "natya",
          "nauch",
          "naunt",
          "navar",
          "naved",
          "naves",
          "navew",
          "navvy",
          "nawab",
          "nawal",
          "nazar",
          "nazes",
          "nazir",
          "nazis",
          "nazzy",
          "nduja",
          "neafe",
          "neals",
          "neant",
          "neaps",
          "nears",
          "neath",
          "neato",
          "neats",
          "nebby",
          "nebek",
          "nebel",
          "neche",
          "necks",
          "neddy",
          "neebs",
          "needs",
          "neefs",
          "neeld",
          "neele",
          "neemb",
          "neems",
          "neeps",
          "neese",
          "neeze",
          "nefie",
          "negri",
          "negro",
          "negus",
          "neifs",
          "neist",
          "neive",
          "nelia",
          "nelis",
          "nelly",
          "nemas",
          "nemic",
          "nemns",
          "nempt",
          "nenes",
          "nenta",
          "neons",
          "neosa",
          "neoza",
          "neper",
          "nepit",
          "neral",
          "neram",
          "nerds",
          "nerfs",
          "nerka",
          "nerks",
          "nerol",
          "nerts",
          "nertz",
          "nervy",
          "neski",
          "nests",
          "nesty",
          "netas",
          "netes",
          "netop",
          "netta",
          "netts",
          "netty",
          "neuks",
          "neume",
          "neums",
          "nevel",
          "neves",
          "nevis",
          "nevus",
          "nevvy",
          "newbs",
          "newed",
          "newel",
          "newie",
          "newsy",
          "newts",
          "nexal",
          "nexin",
          "nexts",
          "nexum",
          "nexus",
          "ngaio",
          "ngaka",
          "ngana",
          "ngapi",
          "ngati",
          "ngege",
          "ngoma",
          "ngoni",
          "ngram",
          "ngwee",
          "nibby",
          "nicad",
          "niced",
          "nicey",
          "nicht",
          "nicks",
          "nicky",
          "nicol",
          "nidal",
          "nided",
          "nides",
          "nidor",
          "nidus",
          "niefs",
          "niess",
          "nieve",
          "nifes",
          "niffs",
          "niffy",
          "nifle",
          "nifty",
          "niger",
          "nigga",
          "nighs",
          "nigre",
          "nigua",
          "nihil",
          "nikab",
          "nikah",
          "nikau",
          "nilas",
          "nills",
          "nimbi",
          "nimbs",
          "nimby",
          "nimps",
          "niner",
          "nines",
          "ninon",
          "ninta",
          "niopo",
          "nioza",
          "nipas",
          "nipet",
          "nippy",
          "niqab",
          "nirls",
          "nirly",
          "nisei",
          "nisin",
          "nisse",
          "nisus",
          "nital",
          "niter",
          "nites",
          "nitid",
          "niton",
          "nitre",
          "nitro",
          "nitry",
          "nitta",
          "nitto",
          "nitty",
          "nival",
          "nivas",
          "nivel",
          "nixed",
          "nixer",
          "nixes",
          "nixie",
          "nizam",
          "njirl",
          "nkosi",
          "nmoli",
          "nmols",
          "noahs",
          "nobby",
          "nocks",
          "nodal",
          "noddy",
          "noded",
          "nodes",
          "nodum",
          "nodus",
          "noels",
          "noema",
          "noeme",
          "nogal",
          "noggs",
          "noggy",
          "nohow",
          "noias",
          "noils",
          "noily",
          "noint",
          "noire",
          "noirs",
          "nokes",
          "noles",
          "nolle",
          "nolls",
          "nolos",
          "nomas",
          "nomen",
          "nomes",
          "nomic",
          "nomoi",
          "nomos",
          "nonan",
          "nonas",
          "nonce",
          "noncy",
          "nonda",
          "nondo",
          "nones",
          "nonet",
          "nongs",
          "nonic",
          "nonis",
          "nonna",
          "nonno",
          "nonny",
          "nonyl",
          "noobs",
          "noois",
          "nooit",
          "nooks",
          "nooky",
          "noone",
          "noons",
          "noops",
          "noove",
          "nopal",
          "noria",
          "norie",
          "noris",
          "norks",
          "norma",
          "norms",
          "nosed",
          "noser",
          "noses",
          "noshi",
          "nosir",
          "notal",
          "notam",
          "noted",
          "noter",
          "notes",
          "notum",
          "nougs",
          "nouja",
          "nould",
          "noule",
          "nouls",
          "nouns",
          "nouny",
          "noups",
          "noust",
          "novae",
          "novas",
          "novia",
          "novio",
          "novum",
          "noway",
          "nowds",
          "nowed",
          "nowls",
          "nowts",
          "nowty",
          "noxal",
          "noxas",
          "noxes",
          "noyau",
          "noyed",
          "noyes",
          "nrtta",
          "nrtya",
          "nsima",
          "nubby",
          "nubia",
          "nucha",
          "nucin",
          "nuddy",
          "nuder",
          "nudes",
          "nudgy",
          "nudie",
          "nudzh",
          "nuevo",
          "nuffs",
          "nugae",
          "nujol",
          "nuked",
          "nukes",
          "nulla",
          "nullo",
          "nulls",
          "nully",
          "numbs",
          "numen",
          "nummy",
          "numps",
          "nunks",
          "nunky",
          "nunny",
          "nunus",
          "nuque",
          "nurds",
          "nurdy",
          "nurls",
          "nurrs",
          "nurts",
          "nurtz",
          "nused",
          "nuses",
          "nutso",
          "nutsy",
          "nyaff",
          "nyala",
          "nyams",
          "nying",
          "nyong",
          "nyssa",
          "nyung",
          "nyuse",
          "nyuze",
          "oafos",
          "oaked",
          "oaker",
          "oakum",
          "oared",
          "oarer",
          "oasal",
          "oases",
          "oasis",
          "oasts",
          "oaten",
          "oater",
          "oaths",
          "oaves",
          "obang",
          "obbos",
          "obeah",
          "obeli",
          "obeys",
          "obias",
          "obied",
          "obiit",
          "obits",
          "objet",
          "oboes",
          "obole",
          "oboli",
          "obols",
          "occam",
          "ocher",
          "oches",
          "ochre",
          "ochry",
          "ocker",
          "ocote",
          "ocrea",
          "octad",
          "octan",
          "octas",
          "octic",
          "octli",
          "octyl",
          "oculi",
          "odahs",
          "odals",
          "odeon",
          "odeum",
          "odism",
          "odist",
          "odium",
          "odoom",
          "odors",
          "odour",
          "odums",
          "odyle",
          "odyls",
          "ofays",
          "offed",
          "offie",
          "oflag",
          "ofter",
          "ofuro",
          "ogams",
          "ogeed",
          "ogees",
          "oggin",
          "ogham",
          "ogive",
          "ogled",
          "ogler",
          "ogles",
          "ogmic",
          "ogres",
          "ohelo",
          "ohias",
          "ohing",
          "ohmic",
          "ohone",
          "oicks",
          "oidia",
          "oiled",
          "oiler",
          "oilet",
          "oinks",
          "oints",
          "oiran",
          "ojime",
          "okapi",
          "okays",
          "okehs",
          "okies",
          "oking",
          "okole",
          "okras",
          "okrug",
          "oktas",
          "olate",
          "oldie",
          "oldly",
          "olehs",
          "oleic",
          "olein",
          "olent",
          "oleos",
          "oleum",
          "oleyl",
          "oligo",
          "olios",
          "oliva",
          "ollas",
          "ollav",
          "oller",
          "ollie",
          "ology",
          "olona",
          "olpae",
          "olpes",
          "omasa",
          "omber",
          "ombus",
          "omdah",
          "omdas",
          "omdda",
          "omdeh",
          "omees",
          "omens",
          "omers",
          "omiai",
          "omits",
          "omlah",
          "ommel",
          "ommin",
          "omnes",
          "omovs",
          "omrah",
          "omuls",
          "oncer",
          "onces",
          "oncet",
          "oncus",
          "ondes",
          "ondol",
          "onely",
          "oners",
          "onery",
          "ongon",
          "onium",
          "onkus",
          "onlap",
          "onlay",
          "onmun",
          "onned",
          "onsen",
          "ontal",
          "ontic",
          "ooaas",
          "oobit",
          "oohed",
          "ooids",
          "oojah",
          "oomph",
          "oonts",
          "oopak",
          "ooped",
          "oopsy",
          "oorie",
          "ooses",
          "ootid",
          "ooyah",
          "oozed",
          "oozes",
          "oozie",
          "oozle",
          "opahs",
          "opals",
          "opens",
          "opepe",
          "opery",
          "opgaf",
          "opihi",
          "oping",
          "oppos",
          "opsat",
          "opsin",
          "opsit",
          "opted",
          "opter",
          "opzit",
          "orach",
          "oracy",
          "orals",
          "orang",
          "orans",
          "orant",
          "orate",
          "orbat",
          "orbed",
          "orbic",
          "orcas",
          "orcin",
          "ordie",
          "ordos",
          "oread",
          "orfes",
          "orful",
          "orgia",
          "orgic",
          "orgue",
          "oribi",
          "oriel",
          "origo",
          "orixa",
          "orles",
          "orlon",
          "orlop",
          "ormer",
          "ornee",
          "ornis",
          "orped",
          "orpin",
          "orris",
          "ortet",
          "ortho",
          "orval",
          "orzos",
          "osars",
          "oscar",
          "osetr",
          "oseys",
          "oshac",
          "osier",
          "oskin",
          "oslin",
          "osmic",
          "osmol",
          "osone",
          "ossia",
          "ostia",
          "otaku",
          "otary",
          "othyl",
          "otium",
          "ottar",
          "ottos",
          "oubit",
          "ouche",
          "oucht",
          "oueds",
          "ouens",
          "ouija",
          "oulks",
          "oumas",
          "oundy",
          "oupas",
          "ouped",
          "ouphe",
          "ouphs",
          "ourey",
          "ourie",
          "ousel",
          "ousia",
          "ousts",
          "outby",
          "outed",
          "outen",
          "outie",
          "outre",
          "outro",
          "outta",
          "ouzel",
          "ouzos",
          "ovals",
          "ovels",
          "ovens",
          "overs",
          "ovism",
          "ovist",
          "ovoli",
          "ovolo",
          "ovule",
          "oware",
          "owari",
          "owche",
          "owers",
          "owies",
          "owled",
          "owler",
          "owlet",
          "owned",
          "ownio",
          "owres",
          "owrie",
          "owsen",
          "oxbow",
          "oxeas",
          "oxers",
          "oxeye",
          "oxids",
          "oxies",
          "oxime",
          "oxims",
          "oxine",
          "oxlip",
          "oxman",
          "oxmen",
          "oxter",
          "oyama",
          "oyers",
          "ozeki",
          "ozena",
          "ozzie",
          "paaho",
          "paals",
          "paans",
          "pacai",
          "pacas",
          "pacay",
          "paced",
          "pacer",
          "paces",
          "pacey",
          "pacha",
          "packs",
          "packy",
          "pacos",
          "pacta",
          "pacts",
          "padam",
          "padas",
          "paddo",
          "padis",
          "padle",
          "padma",
          "padou",
          "padre",
          "padri",
          "paean",
          "paedo",
          "paeon",
          "paged",
          "pager",
          "pages",
          "pagle",
          "pagne",
          "pagod",
          "pagri",
          "pahit",
          "pahos",
          "pahus",
          "paiks",
          "pails",
          "pains",
          "paipe",
          "paips",
          "paire",
          "pairs",
          "paisa",
          "paise",
          "pakay",
          "pakka",
          "pakki",
          "pakua",
          "pakul",
          "palak",
          "palar",
          "palas",
          "palay",
          "palea",
          "paled",
          "pales",
          "palet",
          "palis",
          "palki",
          "palla",
          "palls",
          "pallu",
          "pally",
          "palms",
          "palmy",
          "palpi",
          "palps",
          "palsa",
          "palus",
          "pamby",
          "pampa",
          "panax",
          "pance",
          "panch",
          "panda",
          "pands",
          "pandy",
          "paned",
          "panes",
          "panga",
          "pangs",
          "panim",
          "panir",
          "panko",
          "panks",
          "panna",
          "panne",
          "panni",
          "panny",
          "panto",
          "pants",
          "panty",
          "paoli",
          "paolo",
          "papad",
          "papas",
          "papaw",
          "papes",
          "papey",
          "pappi",
          "pappy",
          "papri",
          "parae",
          "paras",
          "parch",
          "parcs",
          "pardi",
          "pards",
          "pardy",
          "pared",
          "paren",
          "pareo",
          "pares",
          "pareu",
          "parev",
          "parge",
          "pargo",
          "parid",
          "paris",
          "parki",
          "parks",
          "parky",
          "parle",
          "parly",
          "parma",
          "parmo",
          "parms",
          "parol",
          "parps",
          "parra",
          "parrs",
          "parte",
          "parti",
          "parts",
          "parve",
          "parvo",
          "pasag",
          "pasar",
          "pasch",
          "paseo",
          "pases",
          "pasha",
          "pashm",
          "paska",
          "pasmo",
          "paspy",
          "passe",
          "passu",
          "pasts",
          "patas",
          "pated",
          "patee",
          "patel",
          "paten",
          "pater",
          "pates",
          "paths",
          "patia",
          "patin",
          "patka",
          "patly",
          "patta",
          "patte",
          "pattu",
          "patus",
          "pauas",
          "pauls",
          "pauxi",
          "pavan",
          "pavas",
          "paved",
          "paven",
          "paver",
          "paves",
          "pavid",
          "pavie",
          "pavin",
          "pavis",
          "pavon",
          "pavvy",
          "pawas",
          "pawaw",
          "pawed",
          "pawer",
          "pawks",
          "pawky",
          "pawls",
          "pawns",
          "paxes",
          "payed",
          "payor",
          "paysd",
          "peage",
          "peags",
          "peake",
          "peaks",
          "peaky",
          "peals",
          "peans",
          "peare",
          "pears",
          "peart",
          "pease",
          "peasy",
          "peats",
          "peaty",
          "peavy",
          "peaze",
          "pebas",
          "pechs",
          "pecia",
          "pecke",
          "pecks",
          "pecky",
          "pects",
          "pedes",
          "pedis",
          "pedon",
          "pedos",
          "pedro",
          "peece",
          "peeks",
          "peeky",
          "peels",
          "peely",
          "peens",
          "peent",
          "peeoy",
          "peepe",
          "peeps",
          "peepy",
          "peers",
          "peery",
          "peeve",
          "peevo",
          "peggy",
          "peghs",
          "pegma",
          "pegos",
          "peine",
          "peins",
          "peise",
          "peisy",
          "peize",
          "pekan",
          "pekau",
          "pekea",
          "pekes",
          "pekid",
          "pekin",
          "pekoe",
          "pelas",
          "pelau",
          "pelch",
          "peles",
          "pelfs",
          "pells",
          "pelma",
          "pelog",
          "pelon",
          "pelsh",
          "pelta",
          "pelts",
          "pelus",
          "pends",
          "pendu",
          "pened",
          "penes",
          "pengo",
          "penie",
          "penis",
          "penks",
          "penna",
          "penni",
          "pense",
          "pensy",
          "pents",
          "peola",
          "peons",
          "peony",
          "pepla",
          "peple",
          "pepon",
          "pepos",
          "peppy",
          "pepsi",
          "pequi",
          "perae",
          "perai",
          "perce",
          "percs",
          "perdu",
          "perdy",
          "perea",
          "peres",
          "perfs",
          "peris",
          "perks",
          "perle",
          "perls",
          "perms",
          "permy",
          "perne",
          "perns",
          "perog",
          "perps",
          "perry",
          "perse",
          "persp",
          "perst",
          "perts",
          "perve",
          "pervo",
          "pervs",
          "pervy",
          "pesch",
          "pesos",
          "pesta",
          "pests",
          "pesty",
          "petar",
          "peter",
          "petit",
          "petos",
          "petre",
          "petri",
          "petti",
          "petto",
          "pewed",
          "pewee",
          "pewit",
          "peyse",
          "pfftt",
          "phage",
          "phang",
          "phare",
          "pharm",
          "phasm",
          "pheer",
          "pheme",
          "phene",
          "pheon",
          "phese",
          "phial",
          "phies",
          "phish",
          "phizz",
          "phlox",
          "phobe",
          "phoca",
          "phono",
          "phons",
          "phooh",
          "phooo",
          "phota",
          "phots",
          "photy",
          "phpht",
          "phubs",
          "phuts",
          "phutu",
          "phwat",
          "phyla",
          "phyle",
          "phyma",
          "phynx",
          "physa",
          "piais",
          "piani",
          "pians",
          "pibal",
          "pical",
          "picas",
          "piccy",
          "picey",
          "pichi",
          "picks",
          "picon",
          "picot",
          "picra",
          "picul",
          "pieds",
          "piend",
          "piers",
          "piert",
          "pieta",
          "piets",
          "piezo",
          "pight",
          "pigly",
          "pigmy",
          "piing",
          "pikas",
          "pikau",
          "piked",
          "pikel",
          "piker",
          "pikes",
          "pikey",
          "pikis",
          "pikul",
          "pilae",
          "pilaf",
          "pilao",
          "pilar",
          "pilau",
          "pilaw",
          "pilch",
          "pilea",
          "piled",
          "pilei",
          "piler",
          "piles",
          "piley",
          "pilin",
          "pilis",
          "pills",
          "pilon",
          "pilow",
          "pilum",
          "pilus",
          "pimas",
          "pimps",
          "pinas",
          "pinax",
          "pince",
          "pinda",
          "pinds",
          "pined",
          "piner",
          "pines",
          "pinga",
          "pinge",
          "pingo",
          "pings",
          "pinko",
          "pinks",
          "pinna",
          "pinny",
          "pinol",
          "pinon",
          "pinot",
          "pinta",
          "pints",
          "pinup",
          "pions",
          "piony",
          "pious",
          "pioye",
          "pioys",
          "pipal",
          "pipas",
          "piped",
          "pipes",
          "pipet",
          "pipid",
          "pipis",
          "pipit",
          "pippy",
          "pipul",
          "piqui",
          "pirai",
          "pirks",
          "pirls",
          "pirns",
          "pirog",
          "pirre",
          "pirri",
          "pirrs",
          "pisco",
          "pises",
          "pisky",
          "pisos",
          "pissy",
          "piste",
          "pitas",
          "piths",
          "piton",
          "pitot",
          "pitso",
          "pitsu",
          "pitta",
          "pittu",
          "piuma",
          "piums",
          "pivos",
          "pixes",
          "piyut",
          "pized",
          "pizer",
          "pizes",
          "plaas",
          "plack",
          "plaga",
          "plage",
          "plaig",
          "planc",
          "planh",
          "plans",
          "plaps",
          "plash",
          "plasm",
          "plast",
          "plats",
          "platt",
          "platy",
          "plaud",
          "plaur",
          "plavs",
          "playa",
          "plays",
          "pleas",
          "plebe",
          "plebs",
          "pleck",
          "pleep",
          "plein",
          "plena",
          "plene",
          "pleno",
          "pleon",
          "plesh",
          "plets",
          "plews",
          "plexi",
          "plica",
          "plies",
          "pligs",
          "plims",
          "pling",
          "plink",
          "plips",
          "plish",
          "ploat",
          "ploce",
          "plock",
          "plods",
          "ploit",
          "plomb",
          "plong",
          "plonk",
          "plook",
          "ploot",
          "plops",
          "plore",
          "plots",
          "plotz",
          "plouk",
          "plout",
          "plows",
          "plowt",
          "ploye",
          "ploys",
          "pluds",
          "plues",
          "pluff",
          "plugs",
          "pluke",
          "plums",
          "plumy",
          "plung",
          "pluot",
          "plups",
          "plute",
          "pluto",
          "pluty",
          "plyer",
          "pneus",
          "poach",
          "poaka",
          "poake",
          "poalo",
          "pobby",
          "poboy",
          "pocan",
          "poche",
          "pocho",
          "pocks",
          "pocky",
          "podal",
          "poddy",
          "podex",
          "podge",
          "podgy",
          "podia",
          "podos",
          "podus",
          "poems",
          "poena",
          "poeps",
          "poete",
          "poets",
          "pogey",
          "pogge",
          "poggy",
          "pogos",
          "pogue",
          "pohed",
          "poilu",
          "poind",
          "poire",
          "pokal",
          "poked",
          "pokes",
          "pokey",
          "pokie",
          "pokit",
          "poled",
          "poler",
          "poles",
          "poley",
          "polio",
          "polis",
          "polje",
          "polks",
          "pollo",
          "polls",
          "polly",
          "polos",
          "polts",
          "polys",
          "pomas",
          "pombe",
          "pomes",
          "pomme",
          "pommy",
          "pomos",
          "pompa",
          "pomps",
          "ponce",
          "poncy",
          "ponds",
          "pondy",
          "pones",
          "poney",
          "ponga",
          "pongo",
          "pongs",
          "pongy",
          "ponks",
          "ponor",
          "ponto",
          "ponts",
          "ponty",
          "ponzu",
          "pooay",
          "poods",
          "pooed",
          "pooey",
          "poofs",
          "poofy",
          "poohs",
          "poohy",
          "pooja",
          "pooka",
          "pooks",
          "pools",
          "pooly",
          "poons",
          "poopa",
          "poops",
          "poopy",
          "poori",
          "poort",
          "poots",
          "pooty",
          "poove",
          "poovy",
          "popes",
          "popia",
          "popos",
          "poppa",
          "popsy",
          "popup",
          "porae",
          "poral",
          "pored",
          "porer",
          "pores",
          "porey",
          "porge",
          "porgy",
          "porin",
          "porks",
          "porky",
          "porno",
          "porns",
          "porny",
          "porta",
          "porte",
          "porth",
          "ports",
          "porty",
          "porus",
          "posca",
          "posed",
          "poses",
          "poset",
          "posey",
          "posho",
          "posol",
          "poste",
          "posts",
          "potae",
          "potai",
          "potch",
          "poted",
          "potes",
          "potin",
          "potoo",
          "potro",
          "potsy",
          "potto",
          "potts",
          "potty",
          "pouce",
          "pouff",
          "poufs",
          "poufy",
          "pouis",
          "pouke",
          "pouks",
          "poule",
          "poulp",
          "poult",
          "poupe",
          "poupt",
          "pours",
          "pousy",
          "pouts",
          "povos",
          "powan",
          "powie",
          "powin",
          "powis",
          "powlt",
          "pownd",
          "powns",
          "powny",
          "powre",
          "powsy",
          "poxed",
          "poxes",
          "poyas",
          "poynt",
          "poyou",
          "poyse",
          "pozzy",
          "praam",
          "prads",
          "prags",
          "prahu",
          "prams",
          "prana",
          "prang",
          "praos",
          "praps",
          "prase",
          "prate",
          "prats",
          "pratt",
          "praty",
          "praus",
          "prays",
          "preak",
          "predy",
          "preed",
          "preem",
          "prees",
          "preif",
          "preke",
          "prems",
          "premy",
          "prent",
          "preon",
          "preop",
          "preps",
          "presa",
          "prese",
          "prest",
          "preta",
          "preux",
          "preve",
          "prexy",
          "preys",
          "prial",
          "prian",
          "pricy",
          "pridy",
          "prief",
          "prier",
          "pries",
          "prigs",
          "prill",
          "prima",
          "primi",
          "primp",
          "prims",
          "primy",
          "pring",
          "prink",
          "prion",
          "prise",
          "priss",
          "prius",
          "proal",
          "proas",
          "probs",
          "proby",
          "prodd",
          "prods",
          "proem",
          "profs",
          "progs",
          "proin",
          "proke",
          "prole",
          "proll",
          "promo",
          "proms",
          "pronk",
          "prook",
          "proot",
          "props",
          "prora",
          "prore",
          "proso",
          "pross",
          "prost",
          "prosy",
          "proto",
          "proul",
          "prowk",
          "prows",
          "proyn",
          "pruno",
          "prunt",
          "pruny",
          "pruta",
          "pryan",
          "pryer",
          "pryse",
          "pseud",
          "pshaw",
          "pshut",
          "psias",
          "psion",
          "psoae",
          "psoai",
          "psoas",
          "psora",
          "psych",
          "psyop",
          "ptish",
          "ptype",
          "pubby",
          "pubco",
          "pubes",
          "pubis",
          "pubsy",
          "pucan",
          "pucer",
          "puces",
          "pucka",
          "pucks",
          "puddy",
          "pudge",
          "pudic",
          "pudor",
          "pudsy",
          "pudus",
          "puers",
          "puffa",
          "puffs",
          "puggy",
          "pugil",
          "puhas",
          "pujah",
          "pujas",
          "pukas",
          "puked",
          "puker",
          "pukes",
          "pukey",
          "pukka",
          "pukus",
          "pulao",
          "pulas",
          "puled",
          "puler",
          "pules",
          "pulik",
          "pulis",
          "pulka",
          "pulks",
          "pulli",
          "pulls",
          "pully",
          "pulmo",
          "pulps",
          "pulus",
          "pulut",
          "pumas",
          "pumie",
          "pumps",
          "pumpy",
          "punas",
          "punce",
          "punga",
          "pungi",
          "pungo",
          "pungs",
          "pungy",
          "punim",
          "punji",
          "punka",
          "punks",
          "punky",
          "punny",
          "punto",
          "punts",
          "punty",
          "pupae",
          "pupal",
          "pupas",
          "puppa",
          "pupus",
          "purao",
          "purau",
          "purda",
          "purdy",
          "pured",
          "pures",
          "purga",
          "purin",
          "puris",
          "purls",
          "puros",
          "purps",
          "purpy",
          "purre",
          "purrs",
          "purry",
          "pursy",
          "purty",
          "puses",
          "pusle",
          "pussy",
          "putas",
          "puter",
          "putid",
          "putin",
          "puton",
          "putos",
          "putti",
          "putto",
          "putts",
          "puttu",
          "putza",
          "puuko",
          "puyas",
          "puzel",
          "puzta",
          "pwned",
          "pyats",
          "pyets",
          "pygal",
          "pyins",
          "pylon",
          "pyned",
          "pynes",
          "pyoid",
          "pyots",
          "pyral",
          "pyran",
          "pyres",
          "pyrex",
          "pyric",
          "pyros",
          "pyrus",
          "pyuff",
          "pyxed",
          "pyxes",
          "pyxie",
          "pyxis",
          "pzazz",
          "qadis",
          "qaids",
          "qajaq",
          "qanat",
          "qapik",
          "qibla",
          "qilas",
          "qipao",
          "qophs",
          "qorma",
          "quabs",
          "quads",
          "quaff",
          "quags",
          "quair",
          "quais",
          "quaky",
          "quale",
          "qualy",
          "quank",
          "quant",
          "quare",
          "quarl",
          "quass",
          "quate",
          "quats",
          "quawk",
          "quaws",
          "quayd",
          "quays",
          "qubit",
          "quean",
          "queck",
          "queek",
          "queem",
          "queme",
          "quena",
          "quern",
          "queso",
          "quete",
          "queyn",
          "queys",
          "queyu",
          "quibs",
          "quich",
          "quids",
          "quies",
          "quiff",
          "quila",
          "quims",
          "quina",
          "quine",
          "quink",
          "quino",
          "quins",
          "quint",
          "quipo",
          "quips",
          "quipu",
          "quire",
          "quirl",
          "quirt",
          "quist",
          "quits",
          "quoad",
          "quods",
          "quoif",
          "quoin",
          "quois",
          "quoit",
          "quoll",
          "quonk",
          "quops",
          "quork",
          "quorl",
          "quouk",
          "quoys",
          "quran",
          "qursh",
          "quyte",
          "raads",
          "raake",
          "rabat",
          "rabic",
          "rabis",
          "raced",
          "races",
          "rache",
          "racks",
          "racon",
          "raddi",
          "raddy",
          "radge",
          "radgy",
          "radif",
          "radix",
          "radon",
          "rafee",
          "raffs",
          "raffy",
          "rafik",
          "rafiq",
          "rafts",
          "rafty",
          "ragas",
          "ragde",
          "raged",
          "ragee",
          "rager",
          "rages",
          "ragga",
          "raggs",
          "raggy",
          "ragis",
          "ragus",
          "rahed",
          "rahui",
          "raiah",
          "raias",
          "raids",
          "raike",
          "raiks",
          "raile",
          "rails",
          "raine",
          "rains",
          "raird",
          "raita",
          "raith",
          "raits",
          "rajas",
          "rajes",
          "raked",
          "rakee",
          "raker",
          "rakes",
          "rakhi",
          "rakia",
          "rakis",
          "rakki",
          "raksi",
          "rakus",
          "rales",
          "ralli",
          "ramal",
          "ramee",
          "rames",
          "ramet",
          "ramie",
          "ramin",
          "ramis",
          "rammy",
          "ramon",
          "ramps",
          "ramse",
          "ramsh",
          "ramus",
          "ranas",
          "rance",
          "rando",
          "rands",
          "raned",
          "ranee",
          "ranes",
          "ranga",
          "rangi",
          "rangs",
          "rangy",
          "ranid",
          "ranis",
          "ranke",
          "ranks",
          "ranns",
          "ranny",
          "ranse",
          "rants",
          "ranty",
          "raped",
          "rapee",
          "raper",
          "rapes",
          "raphe",
          "rapin",
          "rappe",
          "rapso",
          "rared",
          "raree",
          "rares",
          "rarks",
          "rasam",
          "rasas",
          "rased",
          "raser",
          "rases",
          "rasps",
          "rasse",
          "rasta",
          "ratal",
          "ratan",
          "ratas",
          "ratch",
          "rated",
          "ratel",
          "rater",
          "rates",
          "ratha",
          "rathe",
          "raths",
          "ratoo",
          "ratos",
          "ratti",
          "ratus",
          "rauli",
          "rauns",
          "raupo",
          "raved",
          "ravel",
          "raver",
          "raves",
          "ravey",
          "ravin",
          "rawdy",
          "rawer",
          "rawin",
          "rawks",
          "rawly",
          "rawns",
          "raxed",
          "raxes",
          "rayah",
          "rayas",
          "rayed",
          "rayle",
          "rayls",
          "rayne",
          "razai",
          "razed",
          "razee",
          "razer",
          "razes",
          "razet",
          "razoo",
          "readd",
          "reads",
          "reais",
          "reaks",
          "realo",
          "reals",
          "reame",
          "reams",
          "reamy",
          "reans",
          "reaps",
          "reard",
          "rears",
          "reast",
          "reata",
          "reate",
          "reave",
          "rebab",
          "rebbe",
          "rebec",
          "rebid",
          "rebit",
          "rebop",
          "rebud",
          "rebuy",
          "recal",
          "recce",
          "recco",
          "reccy",
          "recep",
          "recit",
          "recks",
          "recon",
          "recta",
          "recte",
          "recti",
          "recto",
          "recue",
          "redan",
          "redds",
          "reddy",
          "reded",
          "redes",
          "redia",
          "redid",
          "redif",
          "redig",
          "redip",
          "redly",
          "redon",
          "redos",
          "redox",
          "redry",
          "redub",
          "redug",
          "redux",
          "redye",
          "reeaf",
          "reech",
          "reede",
          "reeds",
          "reefs",
          "reefy",
          "reeks",
          "reeky",
          "reels",
          "reely",
          "reems",
          "reens",
          "reerd",
          "reest",
          "reeve",
          "reeze",
          "refan",
          "refed",
          "refel",
          "reffo",
          "refis",
          "refix",
          "refly",
          "refry",
          "regar",
          "reges",
          "reget",
          "regex",
          "reggo",
          "regia",
          "regie",
          "regle",
          "regma",
          "regna",
          "regos",
          "regot",
          "regur",
          "rehem",
          "reifs",
          "reify",
          "reiki",
          "reiks",
          "reine",
          "reing",
          "reink",
          "reins",
          "reird",
          "reist",
          "reive",
          "rejas",
          "rejig",
          "rejon",
          "reked",
          "rekes",
          "rekey",
          "relet",
          "relie",
          "relit",
          "rello",
          "relos",
          "reman",
          "remap",
          "remen",
          "remet",
          "remex",
          "remix",
          "remou",
          "renay",
          "rends",
          "rendu",
          "reney",
          "renga",
          "rengs",
          "renig",
          "renin",
          "renks",
          "renne",
          "renos",
          "rente",
          "rents",
          "reoil",
          "reorg",
          "repas",
          "repat",
          "repeg",
          "repen",
          "repin",
          "repla",
          "repos",
          "repot",
          "repps",
          "repro",
          "repun",
          "reput",
          "reran",
          "rerig",
          "resam",
          "resat",
          "resaw",
          "resay",
          "resee",
          "reses",
          "resew",
          "resid",
          "resit",
          "resod",
          "resol",
          "resow",
          "resto",
          "rests",
          "resty",
          "resue",
          "resus",
          "retag",
          "retam",
          "retax",
          "retem",
          "retia",
          "retie",
          "retin",
          "retip",
          "retox",
          "reune",
          "reups",
          "revet",
          "revie",
          "revow",
          "rewan",
          "rewax",
          "rewed",
          "rewet",
          "rewin",
          "rewon",
          "rewth",
          "rexes",
          "rezes",
          "rhabd",
          "rheas",
          "rheid",
          "rheme",
          "rheum",
          "rhies",
          "rhime",
          "rhine",
          "rhody",
          "rhomb",
          "rhone",
          "rhumb",
          "rhymy",
          "rhyne",
          "rhyta",
          "riads",
          "rials",
          "riant",
          "riata",
          "riato",
          "ribas",
          "ribby",
          "ribes",
          "riced",
          "ricer",
          "rices",
          "ricey",
          "riche",
          "richt",
          "ricin",
          "ricks",
          "rides",
          "ridgy",
          "ridic",
          "riels",
          "riems",
          "rieve",
          "rifer",
          "riffs",
          "riffy",
          "rifte",
          "rifts",
          "rifty",
          "riggs",
          "rigmo",
          "rigol",
          "rikka",
          "rikwa",
          "riled",
          "riles",
          "riley",
          "rille",
          "rills",
          "rilly",
          "rimae",
          "rimed",
          "rimer",
          "rimes",
          "rimon",
          "rimus",
          "rince",
          "rinds",
          "rindy",
          "rines",
          "ringe",
          "rings",
          "ringy",
          "rinks",
          "rioja",
          "rione",
          "riots",
          "rioty",
          "riped",
          "ripes",
          "ripps",
          "riqqs",
          "rises",
          "rishi",
          "risks",
          "risps",
          "rists",
          "risus",
          "rites",
          "rithe",
          "ritts",
          "ritzy",
          "rivas",
          "rived",
          "rivel",
          "riven",
          "rives",
          "riyal",
          "rizas",
          "roads",
          "roady",
          "roake",
          "roaky",
          "roams",
          "roans",
          "roany",
          "roars",
          "roary",
          "roate",
          "robbo",
          "robed",
          "rober",
          "robes",
          "roble",
          "robug",
          "robur",
          "roche",
          "rocks",
          "roded",
          "rodes",
          "rodny",
          "roers",
          "rogan",
          "roguy",
          "rohan",
          "rohes",
          "rohun",
          "rohus",
          "roids",
          "roils",
          "roily",
          "roins",
          "roist",
          "rojak",
          "rojis",
          "roked",
          "roker",
          "rokes",
          "rokey",
          "rokos",
          "rolag",
          "roleo",
          "roles",
          "rolfs",
          "rolls",
          "rolly",
          "romal",
          "roman",
          "romeo",
          "romer",
          "romps",
          "rompu",
          "rompy",
          "ronde",
          "rondo",
          "roneo",
          "rones",
          "ronin",
          "ronne",
          "ronte",
          "ronts",
          "ronuk",
          "roods",
          "roofs",
          "roofy",
          "rooks",
          "rooky",
          "rooms",
          "roons",
          "roops",
          "roopy",
          "roosa",
          "roose",
          "roots",
          "rooty",
          "roped",
          "roper",
          "ropes",
          "ropey",
          "roque",
          "roral",
          "rores",
          "roric",
          "rorid",
          "rorie",
          "rorts",
          "rorty",
          "rosal",
          "rosco",
          "rosed",
          "roses",
          "roset",
          "rosha",
          "roshi",
          "rosin",
          "rosit",
          "rosps",
          "rossa",
          "rosso",
          "rosti",
          "rosts",
          "rotal",
          "rotan",
          "rotas",
          "rotch",
          "roted",
          "rotes",
          "rotis",
          "rotls",
          "roton",
          "rotos",
          "rotta",
          "rotte",
          "rotto",
          "rotty",
          "rouen",
          "roues",
          "rouet",
          "roufs",
          "rougy",
          "rouks",
          "rouky",
          "roule",
          "rouls",
          "roums",
          "roups",
          "roupy",
          "roust",
          "routh",
          "routs",
          "roved",
          "roven",
          "roves",
          "rowan",
          "rowed",
          "rowel",
          "rowen",
          "rowet",
          "rowie",
          "rowme",
          "rownd",
          "rowns",
          "rowth",
          "rowts",
          "royet",
          "royne",
          "royst",
          "rozes",
          "rozet",
          "rozit",
          "ruach",
          "ruana",
          "rubai",
          "ruban",
          "rubby",
          "rubel",
          "rubes",
          "rubin",
          "rubio",
          "ruble",
          "rubli",
          "rubor",
          "rubus",
          "ruche",
          "ruchy",
          "rucks",
          "rudas",
          "rudds",
          "rudes",
          "rudie",
          "rudis",
          "rueda",
          "ruers",
          "ruffe",
          "ruffs",
          "ruffy",
          "rufus",
          "rugae",
          "rugal",
          "rugas",
          "ruggy",
          "ruice",
          "ruing",
          "ruins",
          "rukhs",
          "ruled",
          "rules",
          "rully",
          "rumal",
          "rumbo",
          "rumen",
          "rumes",
          "rumly",
          "rummy",
          "rumpo",
          "rumps",
          "rumpy",
          "runce",
          "runch",
          "runds",
          "runed",
          "runer",
          "runes",
          "rungs",
          "runic",
          "runny",
          "runos",
          "runts",
          "runty",
          "runup",
          "ruote",
          "rupia",
          "rurps",
          "rurus",
          "rusas",
          "ruses",
          "rushy",
          "rusks",
          "rusky",
          "rusma",
          "russe",
          "rusts",
          "ruths",
          "rutin",
          "rutty",
          "ruvid",
          "ryals",
          "rybat",
          "ryiji",
          "ryijy",
          "ryked",
          "rykes",
          "rymer",
          "rymme",
          "rynds",
          "ryoti",
          "ryots",
          "ryper",
          "rypin",
          "rythe",
          "ryugi",
          "saags",
          "sabal",
          "sabed",
          "saber",
          "sabes",
          "sabha",
          "sabin",
          "sabir",
          "sabji",
          "sable",
          "sabos",
          "sabot",
          "sabra",
          "sabre",
          "sabzi",
          "sacks",
          "sacra",
          "sacre",
          "saddo",
          "saddy",
          "sades",
          "sadhe",
          "sadhu",
          "sadic",
          "sadis",
          "sados",
          "sadza",
          "saeta",
          "safed",
          "safes",
          "sagar",
          "sagas",
          "sager",
          "sages",
          "saggy",
          "sagos",
          "sagum",
          "sahab",
          "saheb",
          "sahib",
          "saice",
          "saick",
          "saics",
          "saids",
          "saiga",
          "sails",
          "saims",
          "saine",
          "sains",
          "sairs",
          "saist",
          "saith",
          "sajou",
          "sakai",
          "saker",
          "sakes",
          "sakia",
          "sakis",
          "sakti",
          "salal",
          "salas",
          "salat",
          "salep",
          "sales",
          "salet",
          "salic",
          "salis",
          "salix",
          "salle",
          "salmi",
          "salol",
          "salop",
          "salpa",
          "salps",
          "salse",
          "salto",
          "salts",
          "salud",
          "salue",
          "salut",
          "saman",
          "samas",
          "samba",
          "sambo",
          "samek",
          "samel",
          "samen",
          "sames",
          "samey",
          "samfi",
          "samfu",
          "sammy",
          "sampi",
          "samps",
          "sanad",
          "sands",
          "saned",
          "sanes",
          "sanga",
          "sangh",
          "sango",
          "sangs",
          "sanko",
          "sansa",
          "santo",
          "sants",
          "saola",
          "sapan",
          "sapid",
          "sapor",
          "saran",
          "sards",
          "sared",
          "saree",
          "sarge",
          "sargo",
          "sarin",
          "sarir",
          "saris",
          "sarks",
          "sarky",
          "sarod",
          "saros",
          "sarus",
          "sarvo",
          "saser",
          "sasin",
          "sasse",
          "satai",
          "satay",
          "sated",
          "satem",
          "sater",
          "sates",
          "satis",
          "sauba",
          "sauch",
          "saugh",
          "sauls",
          "sault",
          "saunf",
          "saunt",
          "saury",
          "sauts",
          "sauve",
          "saved",
          "saver",
          "saves",
          "savey",
          "savin",
          "sawah",
          "sawed",
          "sawer",
          "saxes",
          "sayas",
          "sayed",
          "sayee",
          "sayer",
          "sayid",
          "sayne",
          "sayon",
          "sayst",
          "sazes",
          "scabs",
          "scads",
          "scaff",
          "scags",
          "scail",
          "scala",
          "scall",
          "scams",
          "scand",
          "scans",
          "scapa",
          "scape",
          "scapi",
          "scarp",
          "scars",
          "scart",
          "scath",
          "scats",
          "scatt",
          "scaud",
          "scaup",
          "scaur",
          "scaws",
          "sceat",
          "scena",
          "scend",
          "schav",
          "schif",
          "schmo",
          "schul",
          "schwa",
          "scifi",
          "scind",
          "scire",
          "sclim",
          "scobe",
          "scody",
          "scogs",
          "scoog",
          "scoot",
          "scopa",
          "scops",
          "scorp",
          "scote",
          "scots",
          "scoug",
          "scoup",
          "scowp",
          "scows",
          "scrab",
          "scrae",
          "scrag",
          "scran",
          "scrat",
          "scraw",
          "scray",
          "scrim",
          "scrip",
          "scrob",
          "scrod",
          "scrog",
          "scroo",
          "scrow",
          "scudi",
          "scudo",
          "scuds",
          "scuff",
          "scuft",
          "scugs",
          "sculk",
          "scull",
          "sculp",
          "sculs",
          "scums",
          "scups",
          "scurf",
          "scurs",
          "scuse",
          "scuta",
          "scute",
          "scuts",
          "scuzz",
          "scyes",
          "sdayn",
          "sdein",
          "seals",
          "seame",
          "seams",
          "seamy",
          "seans",
          "seare",
          "sears",
          "sease",
          "seats",
          "seaze",
          "sebum",
          "secco",
          "sechs",
          "sects",
          "seder",
          "sedes",
          "sedge",
          "sedgy",
          "sedum",
          "seeds",
          "seeks",
          "seeld",
          "seels",
          "seely",
          "seems",
          "seeps",
          "seepy",
          "seers",
          "sefer",
          "segar",
          "segas",
          "segni",
          "segno",
          "segol",
          "segos",
          "sehri",
          "seifs",
          "seils",
          "seine",
          "seirs",
          "seise",
          "seism",
          "seity",
          "seiza",
          "sekos",
          "sekts",
          "selah",
          "seles",
          "selfs",
          "selfy",
          "selky",
          "sella",
          "selle",
          "sells",
          "selva",
          "semas",
          "semee",
          "semes",
          "semie",
          "semis",
          "senas",
          "sends",
          "senes",
          "senex",
          "sengi",
          "senna",
          "senor",
          "sensa",
          "sensi",
          "sensu",
          "sente",
          "senti",
          "sents",
          "senvy",
          "senza",
          "sepad",
          "sepal",
          "sepic",
          "sepoy",
          "seppo",
          "septa",
          "septs",
          "serac",
          "serai",
          "seral",
          "sered",
          "serer",
          "seres",
          "serfs",
          "serge",
          "seria",
          "seric",
          "serin",
          "serir",
          "serks",
          "seron",
          "serow",
          "serra",
          "serre",
          "serrs",
          "serry",
          "servo",
          "sesey",
          "sessa",
          "setae",
          "setal",
          "seter",
          "seths",
          "seton",
          "setts",
          "sevak",
          "sevir",
          "sewan",
          "sewar",
          "sewed",
          "sewel",
          "sewen",
          "sewin",
          "sexed",
          "sexer",
          "sexes",
          "sexor",
          "sexto",
          "sexts",
          "seyen",
          "sezes",
          "shads",
          "shags",
          "shahs",
          "shaka",
          "shako",
          "shakt",
          "shalm",
          "shaly",
          "shama",
          "shams",
          "shand",
          "shans",
          "shaps",
          "sharn",
          "shart",
          "shash",
          "shaul",
          "shawm",
          "shawn",
          "shaws",
          "shaya",
          "shays",
          "shchi",
          "sheaf",
          "sheal",
          "sheas",
          "sheds",
          "sheel",
          "shend",
          "sheng",
          "shent",
          "sheol",
          "sherd",
          "shere",
          "shero",
          "shets",
          "sheva",
          "shewn",
          "shews",
          "shiai",
          "shiel",
          "shier",
          "shies",
          "shill",
          "shily",
          "shims",
          "shins",
          "shiok",
          "ships",
          "shirr",
          "shirs",
          "shish",
          "shiso",
          "shist",
          "shite",
          "shits",
          "shiur",
          "shiva",
          "shive",
          "shivs",
          "shlep",
          "shlub",
          "shmek",
          "shmoe",
          "shoat",
          "shoed",
          "shoer",
          "shoes",
          "shogi",
          "shogs",
          "shoji",
          "shojo",
          "shola",
          "shonk",
          "shool",
          "shoon",
          "shoos",
          "shope",
          "shops",
          "shorl",
          "shote",
          "shots",
          "shott",
          "shoud",
          "showd",
          "shows",
          "shoyu",
          "shred",
          "shris",
          "shrow",
          "shtar",
          "shtik",
          "shtum",
          "shtup",
          "shuba",
          "shule",
          "shuln",
          "shuls",
          "shuns",
          "shura",
          "shute",
          "shuts",
          "shwas",
          "shyer",
          "sials",
          "sibbs",
          "sibia",
          "sibyl",
          "sices",
          "sicht",
          "sicko",
          "sicks",
          "sicky",
          "sidas",
          "sided",
          "sider",
          "sides",
          "sidey",
          "sidha",
          "sidhe",
          "sidle",
          "sield",
          "siens",
          "sient",
          "sieth",
          "sieur",
          "sifts",
          "sighs",
          "sigil",
          "sigla",
          "signa",
          "signs",
          "sigri",
          "sijos",
          "sikas",
          "siker",
          "sikes",
          "silds",
          "siled",
          "silen",
          "siler",
          "siles",
          "silex",
          "silks",
          "sills",
          "silos",
          "silts",
          "silty",
          "silva",
          "simar",
          "simas",
          "simba",
          "simis",
          "simps",
          "simul",
          "sinds",
          "sined",
          "sines",
          "sings",
          "sinhs",
          "sinks",
          "sinky",
          "sinsi",
          "sinus",
          "siped",
          "sipes",
          "sippy",
          "sired",
          "siree",
          "sires",
          "sirih",
          "siris",
          "siroc",
          "sirra",
          "sirup",
          "sisal",
          "sises",
          "sista",
          "sists",
          "sitar",
          "sitch",
          "sited",
          "sites",
          "sithe",
          "sitka",
          "situp",
          "situs",
          "siver",
          "sixer",
          "sixes",
          "sixmo",
          "sixte",
          "sizar",
          "sized",
          "sizel",
          "sizer",
          "sizes",
          "skags",
          "skail",
          "skald",
          "skank",
          "skarn",
          "skart",
          "skats",
          "skatt",
          "skaws",
          "skean",
          "skear",
          "skeds",
          "skeed",
          "skeef",
          "skeen",
          "skeer",
          "skees",
          "skeet",
          "skeev",
          "skeez",
          "skegg",
          "skegs",
          "skein",
          "skelf",
          "skell",
          "skelm",
          "skelp",
          "skene",
          "skens",
          "skeos",
          "skeps",
          "skerm",
          "skers",
          "skets",
          "skews",
          "skids",
          "skied",
          "skies",
          "skiey",
          "skimo",
          "skims",
          "skink",
          "skins",
          "skint",
          "skios",
          "skips",
          "skirl",
          "skirr",
          "skite",
          "skits",
          "skive",
          "skivy",
          "sklim",
          "skoal",
          "skobe",
          "skody",
          "skoff",
          "skofs",
          "skogs",
          "skols",
          "skool",
          "skort",
          "skosh",
          "skran",
          "skrik",
          "skroo",
          "skuas",
          "skugs",
          "skyed",
          "skyer",
          "skyey",
          "skyfs",
          "skyre",
          "skyrs",
          "skyte",
          "slabs",
          "slade",
          "slaes",
          "slags",
          "slaid",
          "slake",
          "slams",
          "slane",
          "slank",
          "slaps",
          "slart",
          "slats",
          "slaty",
          "slave",
          "slaws",
          "slays",
          "slebs",
          "sleds",
          "sleer",
          "slews",
          "sleys",
          "slier",
          "slily",
          "slims",
          "slipe",
          "slips",
          "slipt",
          "slish",
          "slits",
          "slive",
          "sloan",
          "slobs",
          "sloes",
          "slogs",
          "sloid",
          "slojd",
          "sloka",
          "slomo",
          "sloom",
          "sloot",
          "slops",
          "slopy",
          "slorm",
          "slots",
          "slove",
          "slows",
          "sloyd",
          "slubb",
          "slubs",
          "slued",
          "slues",
          "sluff",
          "slugs",
          "sluit",
          "slums",
          "slurb",
          "slurs",
          "sluse",
          "sluts",
          "slyer",
          "slype",
          "smaak",
          "smaik",
          "smalm",
          "smalt",
          "smarm",
          "smaze",
          "smeek",
          "smees",
          "smeik",
          "smeke",
          "smerk",
          "smews",
          "smick",
          "smily",
          "smirr",
          "smirs",
          "smits",
          "smize",
          "smogs",
          "smoko",
          "smolt",
          "smoor",
          "smoot",
          "smore",
          "smorg",
          "smout",
          "smowt",
          "smugs",
          "smurs",
          "smush",
          "smuts",
          "snabs",
          "snafu",
          "snags",
          "snaps",
          "snarf",
          "snark",
          "snars",
          "snary",
          "snash",
          "snath",
          "snaws",
          "snead",
          "sneap",
          "snebs",
          "sneck",
          "sneds",
          "sneed",
          "snees",
          "snell",
          "snibs",
          "snick",
          "snied",
          "snies",
          "snift",
          "snigs",
          "snips",
          "snipy",
          "snirt",
          "snits",
          "snive",
          "snobs",
          "snods",
          "snoek",
          "snoep",
          "snogs",
          "snoke",
          "snood",
          "snook",
          "snool",
          "snoot",
          "snots",
          "snowk",
          "snows",
          "snubs",
          "snugs",
          "snush",
          "snyes",
          "soaks",
          "soaps",
          "soare",
          "soars",
          "soave",
          "sobas",
          "socas",
          "soces",
          "socia",
          "socko",
          "socks",
          "socle",
          "sodas",
          "soddy",
          "sodic",
          "sodom",
          "sofar",
          "sofas",
          "softa",
          "softs",
          "softy",
          "soger",
          "sohur",
          "soils",
          "soily",
          "sojas",
          "sojus",
          "sokah",
          "soken",
          "sokes",
          "sokol",
          "solah",
          "solan",
          "solas",
          "solde",
          "soldi",
          "soldo",
          "solds",
          "soled",
          "solei",
          "soler",
          "soles",
          "solon",
          "solos",
          "solum",
          "solus",
          "soman",
          "somas",
          "sonce",
          "sonde",
          "sones",
          "songo",
          "songs",
          "songy",
          "sonly",
          "sonne",
          "sonny",
          "sonse",
          "sonsy",
          "sooey",
          "sooks",
          "sooky",
          "soole",
          "sools",
          "sooms",
          "soops",
          "soote",
          "soots",
          "sophs",
          "sophy",
          "sopor",
          "soppy",
          "sopra",
          "soral",
          "soras",
          "sorbi",
          "sorbo",
          "sorbs",
          "sorda",
          "sordo",
          "sords",
          "sored",
          "soree",
          "sorel",
          "sorer",
          "sores",
          "sorex",
          "sorgo",
          "sorns",
          "sorra",
          "sorta",
          "sorts",
          "sorus",
          "soths",
          "sotol",
          "sotto",
          "souce",
          "souct",
          "sough",
          "souks",
          "souls",
          "souly",
          "soums",
          "soups",
          "soupy",
          "sours",
          "souse",
          "souts",
          "sowar",
          "sowce",
          "sowed",
          "sowff",
          "sowfs",
          "sowle",
          "sowls",
          "sowms",
          "sownd",
          "sowne",
          "sowps",
          "sowse",
          "sowth",
          "soxes",
          "soyas",
          "soyle",
          "soyuz",
          "sozin",
          "spack",
          "spacy",
          "spado",
          "spads",
          "spaed",
          "spaer",
          "spaes",
          "spags",
          "spahi",
          "spail",
          "spain",
          "spait",
          "spake",
          "spald",
          "spale",
          "spall",
          "spalt",
          "spams",
          "spane",
          "spang",
          "spans",
          "spard",
          "spars",
          "spart",
          "spate",
          "spats",
          "spaul",
          "spawl",
          "spaws",
          "spayd",
          "spays",
          "spaza",
          "spazz",
          "speal",
          "spean",
          "speat",
          "specs",
          "spect",
          "speel",
          "speer",
          "speil",
          "speir",
          "speks",
          "speld",
          "spelk",
          "speos",
          "spesh",
          "spets",
          "speug",
          "spews",
          "spewy",
          "spial",
          "spica",
          "spick",
          "spics",
          "spide",
          "spier",
          "spies",
          "spiff",
          "spifs",
          "spiks",
          "spile",
          "spims",
          "spina",
          "spink",
          "spins",
          "spirt",
          "spiry",
          "spits",
          "spitz",
          "spivs",
          "splay",
          "splog",
          "spode",
          "spods",
          "spoom",
          "spoor",
          "spoot",
          "spork",
          "sposa",
          "sposh",
          "sposo",
          "spots",
          "sprad",
          "sprag",
          "sprat",
          "spred",
          "sprew",
          "sprit",
          "sprod",
          "sprog",
          "sprue",
          "sprug",
          "spuds",
          "spued",
          "spuer",
          "spues",
          "spugs",
          "spule",
          "spume",
          "spumy",
          "spurs",
          "sputa",
          "spyal",
          "spyre",
          "squab",
          "squaw",
          "squee",
          "squeg",
          "squid",
          "squit",
          "squiz",
          "srsly",
          "stabs",
          "stade",
          "stags",
          "stagy",
          "staig",
          "stane",
          "stang",
          "stans",
          "staph",
          "staps",
          "starn",
          "starr",
          "stars",
          "stary",
          "stats",
          "statu",
          "staun",
          "staws",
          "stays",
          "stean",
          "stear",
          "stedd",
          "stede",
          "steds",
          "steek",
          "steem",
          "steen",
          "steez",
          "steik",
          "steil",
          "stela",
          "stele",
          "stell",
          "steme",
          "stems",
          "stend",
          "steno",
          "stens",
          "stent",
          "steps",
          "stept",
          "stere",
          "stets",
          "stews",
          "stewy",
          "steys",
          "stich",
          "stied",
          "sties",
          "stilb",
          "stile",
          "stime",
          "stims",
          "stimy",
          "stipa",
          "stipe",
          "stire",
          "stirk",
          "stirp",
          "stirs",
          "stive",
          "stivy",
          "stoae",
          "stoai",
          "stoas",
          "stoat",
          "stobs",
          "stoep",
          "stogs",
          "stogy",
          "stoit",
          "stoln",
          "stoma",
          "stond",
          "stong",
          "stonk",
          "stonn",
          "stook",
          "stoor",
          "stope",
          "stops",
          "stopt",
          "stoss",
          "stots",
          "stott",
          "stoun",
          "stoup",
          "stour",
          "stown",
          "stowp",
          "stows",
          "strad",
          "strae",
          "strag",
          "strak",
          "strep",
          "strew",
          "stria",
          "strig",
          "strim",
          "strop",
          "strow",
          "stroy",
          "strum",
          "stubs",
          "stucs",
          "stude",
          "studs",
          "stull",
          "stulm",
          "stumm",
          "stums",
          "stuns",
          "stupa",
          "stupe",
          "sture",
          "sturt",
          "stush",
          "styed",
          "styes",
          "styli",
          "stylo",
          "styme",
          "stymy",
          "styre",
          "styte",
          "subah",
          "subak",
          "subas",
          "subby",
          "suber",
          "subha",
          "succi",
          "sucks",
          "sucky",
          "sucre",
          "sudan",
          "sudds",
          "sudor",
          "sudsy",
          "suede",
          "suent",
          "suers",
          "suete",
          "suets",
          "suety",
          "sugan",
          "sughs",
          "sugos",
          "suhur",
          "suids",
          "suint",
          "suits",
          "sujee",
          "sukhs",
          "sukis",
          "sukuk",
          "sulci",
          "sulfa",
          "sulfo",
          "sulks",
          "sulls",
          "sulph",
          "sulus",
          "sumis",
          "summa",
          "sumos",
          "sumph",
          "sumps",
          "sunis",
          "sunks",
          "sunna",
          "sunns",
          "sunts",
          "sunup",
          "suona",
          "suped",
          "supes",
          "supra",
          "surah",
          "sural",
          "suras",
          "surat",
          "surds",
          "sured",
          "sures",
          "surfs",
          "surfy",
          "surgy",
          "surra",
          "sused",
          "suses",
          "susus",
          "sutor",
          "sutra",
          "sutta",
          "swabs",
          "swack",
          "swads",
          "swage",
          "swags",
          "swail",
          "swain",
          "swale",
          "swaly",
          "swamy",
          "swang",
          "swank",
          "swans",
          "swaps",
          "swapt",
          "sward",
          "sware",
          "swarf",
          "swart",
          "swats",
          "swayl",
          "sways",
          "sweal",
          "swede",
          "sweed",
          "sweel",
          "sweer",
          "swees",
          "sweir",
          "swelt",
          "swerf",
          "sweys",
          "swies",
          "swigs",
          "swile",
          "swims",
          "swink",
          "swipe",
          "swire",
          "swiss",
          "swith",
          "swits",
          "swive",
          "swizz",
          "swobs",
          "swole",
          "swoll",
          "swoln",
          "swops",
          "swopt",
          "swots",
          "swoun",
          "sybbe",
          "sybil",
          "syboe",
          "sybow",
          "sycee",
          "syces",
          "sycon",
          "syeds",
          "syens",
          "syker",
          "sykes",
          "sylis",
          "sylph",
          "sylva",
          "symar",
          "synch",
          "syncs",
          "synds",
          "syned",
          "synes",
          "synth",
          "syped",
          "sypes",
          "syphs",
          "syrah",
          "syren",
          "sysop",
          "sythe",
          "syver",
          "taals",
          "taata",
          "tabac",
          "taber",
          "tabes",
          "tabid",
          "tabis",
          "tabla",
          "tabls",
          "tabor",
          "tabos",
          "tabun",
          "tabus",
          "tacan",
          "taces",
          "tacet",
          "tache",
          "tachi",
          "tacho",
          "tachs",
          "tacks",
          "tacos",
          "tacts",
          "tadah",
          "taels",
          "tafia",
          "taggy",
          "tagma",
          "tagua",
          "tahas",
          "tahrs",
          "taiga",
          "taigs",
          "taiko",
          "tails",
          "tains",
          "taira",
          "taish",
          "taits",
          "tajes",
          "takas",
          "takes",
          "takhi",
          "takht",
          "takin",
          "takis",
          "takky",
          "talak",
          "talaq",
          "talar",
          "talas",
          "talcs",
          "talcy",
          "talea",
          "taler",
          "tales",
          "talik",
          "talks",
          "talky",
          "talls",
          "talma",
          "talpa",
          "taluk",
          "talus",
          "tamal",
          "tamas",
          "tamed",
          "tames",
          "tamin",
          "tamis",
          "tammy",
          "tamps",
          "tanas",
          "tanga",
          "tangi",
          "tangs",
          "tanhs",
          "tania",
          "tanka",
          "tanks",
          "tanky",
          "tanna",
          "tansu",
          "tansy",
          "tante",
          "tanti",
          "tanto",
          "tanty",
          "tapas",
          "taped",
          "tapen",
          "tapes",
          "tapet",
          "tapis",
          "tappa",
          "tapus",
          "taras",
          "tardo",
          "tards",
          "tared",
          "tares",
          "targa",
          "targe",
          "tarka",
          "tarns",
          "taroc",
          "tarok",
          "taros",
          "tarps",
          "tarre",
          "tarry",
          "tarse",
          "tarsi",
          "tarte",
          "tarts",
          "tarty",
          "tarzy",
          "tasar",
          "tasca",
          "tased",
          "taser",
          "tases",
          "tasks",
          "tassa",
          "tasse",
          "tasso",
          "tasto",
          "tatar",
          "tater",
          "tates",
          "taths",
          "tatie",
          "tatou",
          "tatts",
          "tatus",
          "taube",
          "tauld",
          "tauon",
          "taupe",
          "tauts",
          "tauty",
          "tavah",
          "tavas",
          "taver",
          "tawaf",
          "tawai",
          "tawas",
          "tawed",
          "tawer",
          "tawie",
          "tawse",
          "tawts",
          "taxed",
          "taxer",
          "taxes",
          "taxis",
          "taxol",
          "taxon",
          "taxor",
          "taxus",
          "tayra",
          "tazza",
          "tazze",
          "teade",
          "teads",
          "teaed",
          "teaks",
          "teals",
          "teams",
          "tears",
          "teats",
          "teaze",
          "techs",
          "techy",
          "tecta",
          "tecum",
          "teels",
          "teems",
          "teend",
          "teene",
          "teens",
          "teeny",
          "teers",
          "teets",
          "teffs",
          "teggs",
          "tegua",
          "tegus",
          "tehee",
          "tehrs",
          "teiid",
          "teils",
          "teind",
          "teins",
          "tekke",
          "telae",
          "telco",
          "teles",
          "telex",
          "telia",
          "telic",
          "tells",
          "telly",
          "teloi",
          "telos",
          "temed",
          "temes",
          "tempi",
          "temps",
          "tempt",
          "temse",
          "tench",
          "tends",
          "tendu",
          "tenes",
          "tenge",
          "tenia",
          "tenne",
          "tenno",
          "tenny",
          "tenon",
          "tents",
          "tenty",
          "tenue",
          "tepal",
          "tepas",
          "tepoy",
          "terai",
          "teras",
          "terce",
          "terek",
          "teres",
          "terfe",
          "terfs",
          "terga",
          "terms",
          "terne",
          "terns",
          "terre",
          "terry",
          "terts",
          "terza",
          "tesla",
          "testa",
          "teste",
          "tests",
          "tetes",
          "teths",
          "tetra",
          "tetri",
          "teuch",
          "teugh",
          "tewed",
          "tewel",
          "tewit",
          "texas",
          "texes",
          "texta",
          "texts",
          "thack",
          "thagi",
          "thaim",
          "thale",
          "thali",
          "thana",
          "thane",
          "thang",
          "thans",
          "thanx",
          "tharm",
          "thars",
          "thaws",
          "thawt",
          "thawy",
          "thebe",
          "theca",
          "theed",
          "theek",
          "thees",
          "thegn",
          "theic",
          "thein",
          "thelf",
          "thema",
          "thens",
          "theor",
          "theow",
          "therm",
          "thesp",
          "thete",
          "thews",
          "thewy",
          "thigs",
          "thilk",
          "thill",
          "thine",
          "thins",
          "thiol",
          "thirl",
          "thoft",
          "thole",
          "tholi",
          "thoro",
          "thorp",
          "thots",
          "thous",
          "thowl",
          "thrae",
          "thraw",
          "thrid",
          "thrip",
          "throe",
          "thuds",
          "thugs",
          "thuja",
          "thunk",
          "thurl",
          "thuya",
          "thymi",
          "thymy",
          "tians",
          "tiare",
          "tiars",
          "tical",
          "ticca",
          "ticed",
          "tices",
          "tichy",
          "ticks",
          "ticky",
          "tiddy",
          "tided",
          "tides",
          "tiefs",
          "tiers",
          "tiffs",
          "tifos",
          "tifts",
          "tiges",
          "tigon",
          "tikas",
          "tikes",
          "tikia",
          "tikis",
          "tikka",
          "tilak",
          "tiled",
          "tiler",
          "tiles",
          "tills",
          "tilly",
          "tilth",
          "tilts",
          "timbo",
          "timed",
          "times",
          "timon",
          "timps",
          "tinas",
          "tinct",
          "tinds",
          "tinea",
          "tined",
          "tines",
          "tinge",
          "tings",
          "tinks",
          "tinny",
          "tinto",
          "tints",
          "tinty",
          "tipis",
          "tippy",
          "tipup",
          "tired",
          "tires",
          "tirls",
          "tiros",
          "tirrs",
          "tirth",
          "titar",
          "titas",
          "titch",
          "titer",
          "tithi",
          "titin",
          "titir",
          "titis",
          "titre",
          "titty",
          "titup",
          "tiyin",
          "tiyns",
          "tizes",
          "tizzy",
          "toads",
          "toady",
          "toaze",
          "tocks",
          "tocky",
          "tocos",
          "todde",
          "todea",
          "todos",
          "toeas",
          "toffs",
          "toffy",
          "tofts",
          "tofus",
          "togae",
          "togas",
          "toged",
          "toges",
          "togue",
          "tohos",
          "toidy",
          "toile",
          "toils",
          "toing",
          "toise",
          "toits",
          "toity",
          "tokay",
          "toked",
          "toker",
          "tokes",
          "tokos",
          "tolan",
          "tolar",
          "tolas",
          "toled",
          "toles",
          "tolls",
          "tolly",
          "tolts",
          "tolus",
          "tolyl",
          "toman",
          "tombo",
          "tombs",
          "tomen",
          "tomes",
          "tomia",
          "tomin",
          "tomme",
          "tommy",
          "tomos",
          "tomoz",
          "tondi",
          "tondo",
          "toned",
          "toner",
          "tones",
          "toney",
          "tongs",
          "tonka",
          "tonks",
          "tonne",
          "tonus",
          "tools",
          "tooms",
          "toons",
          "toots",
          "toped",
          "topee",
          "topek",
          "toper",
          "topes",
          "tophe",
          "tophi",
          "tophs",
          "topis",
          "topoi",
          "topos",
          "toppy",
          "toque",
          "torah",
          "toran",
          "toras",
          "torcs",
          "tores",
          "toric",
          "torii",
          "toros",
          "torot",
          "torrs",
          "torse",
          "torsi",
          "torsk",
          "torta",
          "torte",
          "torts",
          "tosas",
          "tosed",
          "toses",
          "toshy",
          "tossy",
          "tosyl",
          "toted",
          "toter",
          "totes",
          "totty",
          "touks",
          "touns",
          "tours",
          "touse",
          "tousy",
          "touts",
          "touze",
          "touzy",
          "towai",
          "towed",
          "towie",
          "towno",
          "towns",
          "towny",
          "towse",
          "towsy",
          "towts",
          "towze",
          "towzy",
          "toyed",
          "toyer",
          "toyon",
          "toyos",
          "tozed",
          "tozes",
          "tozie",
          "trabs",
          "trads",
          "trady",
          "traga",
          "tragi",
          "trags",
          "tragu",
          "traik",
          "trams",
          "trank",
          "tranq",
          "trans",
          "trant",
          "trape",
          "trapo",
          "traps",
          "trapt",
          "trass",
          "trats",
          "tratt",
          "trave",
          "trayf",
          "trays",
          "treck",
          "treed",
          "treen",
          "trees",
          "trefa",
          "treif",
          "treks",
          "trema",
          "trems",
          "tress",
          "trest",
          "trets",
          "trews",
          "treyf",
          "treys",
          "triac",
          "tride",
          "trier",
          "tries",
          "trifa",
          "triff",
          "trigo",
          "trigs",
          "trike",
          "trild",
          "trill",
          "trims",
          "trine",
          "trins",
          "triol",
          "trior",
          "trios",
          "trips",
          "tripy",
          "trist",
          "troad",
          "troak",
          "troat",
          "trock",
          "trode",
          "trods",
          "trogs",
          "trois",
          "troke",
          "tromp",
          "trona",
          "tronc",
          "trone",
          "tronk",
          "trons",
          "trooz",
          "tropo",
          "troth",
          "trots",
          "trows",
          "troys",
          "trued",
          "trues",
          "trugo",
          "trugs",
          "trull",
          "tryer",
          "tryke",
          "tryma",
          "tryps",
          "tsade",
          "tsadi",
          "tsars",
          "tsked",
          "tsuba",
          "tsubo",
          "tuans",
          "tuart",
          "tuath",
          "tubae",
          "tubar",
          "tubas",
          "tubby",
          "tubed",
          "tubes",
          "tucks",
          "tufas",
          "tuffe",
          "tuffs",
          "tufts",
          "tufty",
          "tugra",
          "tuile",
          "tuina",
          "tuism",
          "tuktu",
          "tules",
          "tulpa",
          "tulps",
          "tulsi",
          "tumid",
          "tummy",
          "tumps",
          "tumpy",
          "tunas",
          "tunds",
          "tuned",
          "tuner",
          "tunes",
          "tungs",
          "tunny",
          "tupek",
          "tupik",
          "tuple",
          "tuque",
          "turds",
          "turfs",
          "turfy",
          "turks",
          "turme",
          "turms",
          "turns",
          "turnt",
          "turon",
          "turps",
          "turrs",
          "tushy",
          "tusks",
          "tusky",
          "tutee",
          "tutes",
          "tutti",
          "tutty",
          "tutus",
          "tuxes",
          "tuyer",
          "twaes",
          "twain",
          "twals",
          "twank",
          "twats",
          "tways",
          "tweel",
          "tween",
          "tweep",
          "tweer",
          "twerk",
          "twerp",
          "twier",
          "twigs",
          "twill",
          "twilt",
          "twink",
          "twins",
          "twiny",
          "twire",
          "twirk",
          "twirp",
          "twite",
          "twits",
          "twocs",
          "twoer",
          "twonk",
          "twyer",
          "tyees",
          "tyers",
          "tyiyn",
          "tykes",
          "tyler",
          "tymps",
          "tynde",
          "tyned",
          "tynes",
          "typal",
          "typed",
          "types",
          "typey",
          "typic",
          "typos",
          "typps",
          "typto",
          "tyran",
          "tyred",
          "tyres",
          "tyros",
          "tythe",
          "tzars",
          "ubacs",
          "ubity",
          "udals",
          "udons",
          "udyog",
          "ugali",
          "ugged",
          "uhlan",
          "uhuru",
          "ukase",
          "ulama",
          "ulans",
          "ulema",
          "ulmin",
          "ulmos",
          "ulnad",
          "ulnae",
          "ulnar",
          "ulnas",
          "ulpan",
          "ulvas",
          "ulyie",
          "ulzie",
          "umami",
          "umbel",
          "umber",
          "umble",
          "umbos",
          "umbre",
          "umiac",
          "umiak",
          "umiaq",
          "ummah",
          "ummas",
          "ummed",
          "umped",
          "umphs",
          "umpie",
          "umpty",
          "umrah",
          "umras",
          "unagi",
          "unais",
          "unapt",
          "unarm",
          "unary",
          "unaus",
          "unbag",
          "unban",
          "unbar",
          "unbed",
          "unbid",
          "unbox",
          "uncap",
          "unces",
          "uncia",
          "uncos",
          "uncoy",
          "uncus",
          "undam",
          "undee",
          "undos",
          "undug",
          "uneth",
          "unfix",
          "ungag",
          "unget",
          "ungod",
          "ungot",
          "ungum",
          "unhat",
          "unhip",
          "unica",
          "unios",
          "units",
          "unjam",
          "unked",
          "unket",
          "unkey",
          "unkid",
          "unkut",
          "unlap",
          "unlaw",
          "unlay",
          "unled",
          "unleg",
          "unlet",
          "unlid",
          "unmad",
          "unman",
          "unmew",
          "unmix",
          "unode",
          "unold",
          "unown",
          "unpay",
          "unpeg",
          "unpen",
          "unpin",
          "unply",
          "unpot",
          "unput",
          "unred",
          "unrid",
          "unrig",
          "unrip",
          "unsaw",
          "unsay",
          "unsee",
          "unsew",
          "unsex",
          "unsod",
          "unsub",
          "untag",
          "untax",
          "untin",
          "unwet",
          "unwit",
          "unwon",
          "upbow",
          "upbye",
          "updos",
          "updry",
          "upend",
          "upful",
          "upjet",
          "uplay",
          "upled",
          "uplit",
          "upped",
          "upran",
          "uprun",
          "upsee",
          "upsey",
          "uptak",
          "upter",
          "uptie",
          "uraei",
          "urali",
          "uraos",
          "urare",
          "urari",
          "urase",
          "urate",
          "urbex",
          "urbia",
          "urdee",
          "ureal",
          "ureas",
          "uredo",
          "ureic",
          "ureid",
          "urena",
          "urent",
          "urged",
          "urger",
          "urges",
          "urial",
          "urite",
          "urman",
          "urnal",
          "urned",
          "urped",
          "ursae",
          "ursid",
          "urson",
          "urubu",
          "urupa",
          "urvas",
          "usens",
          "users",
          "useta",
          "usnea",
          "usnic",
          "usque",
          "ustad",
          "uster",
          "usure",
          "usury",
          "uteri",
          "utero",
          "uveal",
          "uveas",
          "uvula",
          "vacas",
          "vacay",
          "vacua",
          "vacui",
          "vacuo",
          "vadas",
          "vaded",
          "vades",
          "vadge",
          "vagal",
          "vagus",
          "vaids",
          "vails",
          "vaire",
          "vairs",
          "vairy",
          "vajra",
          "vakas",
          "vakil",
          "vales",
          "valis",
          "valli",
          "valse",
          "vamps",
          "vampy",
          "vanda",
          "vaned",
          "vanes",
          "vanga",
          "vangs",
          "vants",
          "vaped",
          "vaper",
          "vapes",
          "varan",
          "varas",
          "varda",
          "vardo",
          "vardy",
          "varec",
          "vares",
          "varia",
          "varix",
          "varna",
          "varus",
          "varve",
          "vasal",
          "vases",
          "vasts",
          "vasty",
          "vatas",
          "vatha",
          "vatic",
          "vatje",
          "vatos",
          "vatus",
          "vauch",
          "vaute",
          "vauts",
          "vawte",
          "vaxes",
          "veale",
          "veals",
          "vealy",
          "veena",
          "veeps",
          "veers",
          "veery",
          "vegas",
          "veges",
          "veggo",
          "vegie",
          "vegos",
          "vehme",
          "veils",
          "veily",
          "veins",
          "veiny",
          "velar",
          "velds",
          "veldt",
          "veles",
          "vells",
          "velum",
          "venae",
          "venal",
          "venas",
          "vends",
          "vendu",
          "veney",
          "venge",
          "venin",
          "venti",
          "vents",
          "venus",
          "verba",
          "verbs",
          "verde",
          "verra",
          "verre",
          "verry",
          "versa",
          "verst",
          "verte",
          "verts",
          "vertu",
          "vespa",
          "vesta",
          "vests",
          "vetch",
          "veuve",
          "veves",
          "vexed",
          "vexer",
          "vexes",
          "vexil",
          "vezir",
          "vials",
          "viand",
          "vibed",
          "vibes",
          "vibex",
          "vibey",
          "viced",
          "vices",
          "vichy",
          "vicus",
          "viers",
          "vieux",
          "views",
          "viewy",
          "vifda",
          "viffs",
          "vigas",
          "vigia",
          "vilde",
          "viler",
          "ville",
          "villi",
          "vills",
          "vimen",
          "vinal",
          "vinas",
          "vinca",
          "vined",
          "viner",
          "vines",
          "vinew",
          "vinho",
          "vinic",
          "vinny",
          "vinos",
          "vints",
          "viold",
          "viols",
          "vired",
          "vireo",
          "vires",
          "virga",
          "virge",
          "virgo",
          "virid",
          "virls",
          "virtu",
          "visas",
          "vised",
          "vises",
          "visie",
          "visna",
          "visne",
          "vison",
          "visto",
          "vitae",
          "vitas",
          "vitex",
          "vitro",
          "vitta",
          "vivas",
          "vivat",
          "vivda",
          "viver",
          "vives",
          "vivos",
          "vivre",
          "vizir",
          "vizor",
          "vlast",
          "vleis",
          "vlies",
          "vlogs",
          "voars",
          "vobla",
          "vocab",
          "voces",
          "voddy",
          "vodou",
          "vodun",
          "voema",
          "vogie",
          "voici",
          "voids",
          "voile",
          "voips",
          "volae",
          "volar",
          "voled",
          "voles",
          "volet",
          "volke",
          "volks",
          "volta",
          "volte",
          "volti",
          "volts",
          "volva",
          "volve",
          "vomer",
          "voted",
          "votes",
          "vouge",
          "voulu",
          "vowed",
          "vower",
          "voxel",
          "voxes",
          "vozhd",
          "vraic",
          "vrils",
          "vroom",
          "vrous",
          "vrouw",
          "vrows",
          "vuggs",
          "vuggy",
          "vughs",
          "vughy",
          "vulgo",
          "vulns",
          "vulva",
          "vutty",
          "vygie",
          "waacs",
          "wacke",
          "wacko",
          "wacks",
          "wadas",
          "wadds",
          "waddy",
          "waded",
          "wader",
          "wades",
          "wadge",
          "wadis",
          "wadts",
          "waffs",
          "wafts",
          "waged",
          "wages",
          "wagga",
          "wagyu",
          "wahay",
          "wahey",
          "wahoo",
          "waide",
          "waifs",
          "waift",
          "wails",
          "wains",
          "wairs",
          "waite",
          "waits",
          "wakas",
          "waked",
          "waken",
          "waker",
          "wakes",
          "wakfs",
          "waldo",
          "walds",
          "waled",
          "waler",
          "wales",
          "walie",
          "walis",
          "walks",
          "walla",
          "walls",
          "wally",
          "walty",
          "wamed",
          "wames",
          "wamus",
          "wands",
          "waned",
          "wanes",
          "waney",
          "wangs",
          "wanks",
          "wanky",
          "wanle",
          "wanly",
          "wanna",
          "wanta",
          "wants",
          "wanty",
          "wanze",
          "waqfs",
          "warbs",
          "warby",
          "wards",
          "wared",
          "wares",
          "warez",
          "warks",
          "warms",
          "warns",
          "warps",
          "warre",
          "warst",
          "warts",
          "wases",
          "washi",
          "washy",
          "wasms",
          "wasps",
          "waspy",
          "wasts",
          "watap",
          "watts",
          "wauff",
          "waugh",
          "wauks",
          "waulk",
          "wauls",
          "waurs",
          "waved",
          "waves",
          "wavey",
          "wawas",
          "wawes",
          "wawls",
          "waxed",
          "waxer",
          "waxes",
          "wayed",
          "wazir",
          "wazoo",
          "weald",
          "weals",
          "weamb",
          "weans",
          "wears",
          "webby",
          "weber",
          "wecht",
          "wedel",
          "wedgy",
          "weeds",
          "weeis",
          "weeke",
          "weeks",
          "weels",
          "weems",
          "weens",
          "weeny",
          "weeps",
          "weepy",
          "weest",
          "weete",
          "weets",
          "wefte",
          "wefts",
          "weids",
          "weils",
          "weirs",
          "weise",
          "weize",
          "wekas",
          "welds",
          "welke",
          "welks",
          "welkt",
          "wells",
          "welly",
          "welts",
          "wembs",
          "wench",
          "wends",
          "wenge",
          "wenny",
          "wents",
          "werfs",
          "weros",
          "wersh",
          "wests",
          "wetas",
          "wetly",
          "wexed",
          "wexes",
          "whamo",
          "whams",
          "whang",
          "whaps",
          "whare",
          "whata",
          "whats",
          "whaup",
          "whaur",
          "wheal",
          "whear",
          "wheek",
          "wheen",
          "wheep",
          "wheft",
          "whelk",
          "whelm",
          "whens",
          "whets",
          "whews",
          "wheys",
          "whids",
          "whies",
          "whift",
          "whigs",
          "whilk",
          "whims",
          "whins",
          "whios",
          "whips",
          "whipt",
          "whirr",
          "whirs",
          "whish",
          "whiss",
          "whist",
          "whits",
          "whity",
          "whizz",
          "whomp",
          "whoof",
          "whoot",
          "whops",
          "whore",
          "whorl",
          "whort",
          "whoso",
          "whows",
          "whump",
          "whups",
          "whyda",
          "wicca",
          "wicks",
          "wicky",
          "widdy",
          "wides",
          "wiels",
          "wifed",
          "wifes",
          "wifey",
          "wifie",
          "wifts",
          "wifty",
          "wigan",
          "wigga",
          "wiggy",
          "wikis",
          "wilco",
          "wilds",
          "wiled",
          "wiles",
          "wilga",
          "wilis",
          "wilja",
          "wills",
          "wilts",
          "wimps",
          "winds",
          "wined",
          "wines",
          "winey",
          "winge",
          "wings",
          "wingy",
          "winks",
          "winky",
          "winna",
          "winns",
          "winos",
          "winze",
          "wiped",
          "wiper",
          "wipes",
          "wired",
          "wirer",
          "wires",
          "wirra",
          "wirri",
          "wised",
          "wises",
          "wisha",
          "wisht",
          "wisps",
          "wists",
          "witan",
          "wited",
          "wites",
          "withe",
          "withs",
          "withy",
          "wived",
          "wiver",
          "wives",
          "wizen",
          "wizes",
          "wizzo",
          "woads",
          "woady",
          "woald",
          "wocks",
          "wodge",
          "wodgy",
          "woful",
          "wojus",
          "woker",
          "wokka",
          "wolds",
          "wolfs",
          "wolly",
          "wolve",
          "womas",
          "wombs",
          "womby",
          "womyn",
          "wonga",
          "wongi",
          "wonks",
          "wonky",
          "wonts",
          "woods",
          "wooed",
          "woofs",
          "woofy",
          "woold",
          "wools",
          "woons",
          "woops",
          "woopy",
          "woose",
          "woosh",
          "wootz",
          "words",
          "works",
          "worky",
          "worms",
          "wormy",
          "worts",
          "wowed",
          "wowee",
          "wowse",
          "woxen",
          "wrang",
          "wraps",
          "wrapt",
          "wrast",
          "wrate",
          "wrawl",
          "wrens",
          "wrick",
          "wried",
          "wrier",
          "wries",
          "writs",
          "wroke",
          "wroot",
          "wroth",
          "wryer",
          "wuddy",
          "wudus",
          "wuffs",
          "wulls",
          "wunga",
          "wurst",
          "wuses",
          "wushu",
          "wussy",
          "wuxia",
          "wyled",
          "wyles",
          "wynds",
          "wynns",
          "wyted",
          "wytes",
          "wythe",
          "xebec",
          "xenia",
          "xenic",
          "xenon",
          "xeric",
          "xerox",
          "xerus",
          "xoana",
          "xolos",
          "xrays",
          "xviii",
          "xylan",
          "xylem",
          "xylic",
          "xylol",
          "xylyl",
          "xysti",
          "xysts",
          "yaars",
          "yaass",
          "yabas",
          "yabba",
          "yabby",
          "yacca",
          "yacka",
          "yacks",
          "yadda",
          "yaffs",
          "yager",
          "yages",
          "yagis",
          "yagna",
          "yahoo",
          "yaird",
          "yajna",
          "yakka",
          "yakow",
          "yales",
          "yamen",
          "yampa",
          "yampy",
          "yamun",
          "yandy",
          "yangs",
          "yanks",
          "yapok",
          "yapon",
          "yapps",
          "yappy",
          "yarak",
          "yarco",
          "yards",
          "yarer",
          "yarfa",
          "yarks",
          "yarns",
          "yarra",
          "yarrs",
          "yarta",
          "yarto",
          "yates",
          "yatra",
          "yauds",
          "yauld",
          "yaups",
          "yawed",
          "yawey",
          "yawls",
          "yawns",
          "yawny",
          "yawps",
          "yayas",
          "ybore",
          "yclad",
          "ycled",
          "ycond",
          "ydrad",
          "ydred",
          "yeads",
          "yeahs",
          "yealm",
          "yeans",
          "yeard",
          "years",
          "yecch",
          "yechs",
          "yechy",
          "yedes",
          "yeeds",
          "yeeek",
          "yeesh",
          "yeggs",
          "yelks",
          "yells",
          "yelms",
          "yelps",
          "yelts",
          "yenta",
          "yente",
          "yerba",
          "yerds",
          "yerks",
          "yeses",
          "yesks",
          "yests",
          "yesty",
          "yetis",
          "yetts",
          "yeuch",
          "yeuks",
          "yeuky",
          "yeven",
          "yeves",
          "yewen",
          "yexed",
          "yexes",
          "yfere",
          "yiked",
          "yikes",
          "yills",
          "yince",
          "yipes",
          "yippy",
          "yirds",
          "yirks",
          "yirrs",
          "yirth",
          "yites",
          "yitie",
          "ylems",
          "ylide",
          "ylids",
          "ylike",
          "ylkes",
          "ymolt",
          "ympes",
          "yobbo",
          "yobby",
          "yocks",
          "yodel",
          "yodhs",
          "yodle",
          "yogas",
          "yogee",
          "yoghs",
          "yogic",
          "yogin",
          "yogis",
          "yohah",
          "yohay",
          "yoick",
          "yojan",
          "yokan",
          "yoked",
          "yokeg",
          "yokel",
          "yoker",
          "yokes",
          "yokul",
          "yolks",
          "yolky",
          "yolps",
          "yomim",
          "yomps",
          "yonic",
          "yonis",
          "yonks",
          "yonny",
          "yoofs",
          "yoops",
          "yopos",
          "yoppo",
          "yores",
          "yorga",
          "yorks",
          "yorps",
          "youks",
          "yourn",
          "yours",
          "yourt",
          "youse",
          "yowed",
          "yowes",
          "yowie",
          "yowls",
          "yowsa",
          "yowza",
          "yoyos",
          "yrapt",
          "yrent",
          "yrivd",
          "yrneh",
          "ysame",
          "ytost",
          "yuans",
          "yucas",
          "yucca",
          "yucch",
          "yucko",
          "yucks",
          "yucky",
          "yufts",
          "yugas",
          "yuked",
          "yukes",
          "yukky",
          "yukos",
          "yulan",
          "yules",
          "yummo",
          "yummy",
          "yumps",
          "yupon",
          "yuppy",
          "yurta",
          "yurts",
          "yuzus",
          "zabra",
          "zacks",
          "zaida",
          "zaide",
          "zaidy",
          "zaire",
          "zakat",
          "zamac",
          "zamak",
          "zaman",
          "zambo",
          "zamia",
          "zamis",
          "zanja",
          "zante",
          "zanza",
          "zanze",
          "zappy",
          "zarda",
          "zarfs",
          "zaris",
          "zatis",
          "zawns",
          "zaxes",
          "zayde",
          "zayin",
          "zazen",
          "zeals",
          "zebec",
          "zebub",
          "zebus",
          "zedas",
          "zeera",
          "zeins",
          "zendo",
          "zerda",
          "zerks",
          "zeros",
          "zests",
          "zetas",
          "zexes",
          "zezes",
          "zhomo",
          "zhush",
          "zhuzh",
          "zibet",
          "ziffs",
          "zigan",
          "zikrs",
          "zilas",
          "zilch",
          "zilla",
          "zills",
          "zimbi",
          "zimbs",
          "zinco",
          "zincs",
          "zincy",
          "zineb",
          "zines",
          "zings",
          "zingy",
          "zinke",
          "zinky",
          "zinos",
          "zippo",
          "zippy",
          "ziram",
          "zitis",
          "zitty",
          "zizel",
          "zizit",
          "zlote",
          "zloty",
          "zoaea",
          "zobos",
          "zobus",
          "zocco",
          "zoeae",
          "zoeal",
          "zoeas",
          "zoism",
          "zoist",
          "zokor",
          "zolle",
          "zombi",
          "zonae",
          "zonda",
          "zoned",
          "zoner",
          "zones",
          "zonks",
          "zooea",
          "zooey",
          "zooid",
          "zooks",
          "zooms",
          "zoomy",
          "zoons",
          "zooty",
          "zoppa",
          "zoppo",
          "zoril",
          "zoris",
          "zorro",
          "zorse",
          "zouks",
          "zowee",
          "zowie",
          "zulus",
          "zupan",
          "zupas",
          "zuppa",
          "zurfs",
          "zuzim",
          "zygal",
          "zygon",
          "zymes",
          "zymic",
          "cigar",
          "rebut",
          "sissy",
          "humph",
          "awake",
          "blush",
          "focal",
          "evade",
          "naval",
          "serve",
          "heath",
          "dwarf",
          "model",
          "karma",
          "stink",
          "grade",
          "quiet",
          "bench",
          "abate",
          "feign",
          "major",
          "death",
          "fresh",
          "crust",
          "stool",
          "colon",
          "abase",
          "marry",
          "react",
          "batty",
          "pride",
          "floss",
          "helix",
          "croak",
          "staff",
          "paper",
          "unfed",
          "whelp",
          "trawl",
          "outdo",
          "adobe",
          "crazy",
          "sower",
          "repay",
          "digit",
          "crate",
          "cluck",
          "spike",
          "mimic",
          "pound",
          "maxim",
          "linen",
          "unmet",
          "flesh",
          "booby",
          "forth",
          "first",
          "stand",
          "belly",
          "ivory",
          "seedy",
          "print",
          "yearn",
          "drain",
          "bribe",
          "stout",
          "panel",
          "crass",
          "flume",
          "offal",
          "agree",
          "error",
          "swirl",
          "argue",
          "bleed",
          "delta",
          "flick",
          "totem",
          "wooer",
          "front",
          "shrub",
          "parry",
          "biome",
          "lapel",
          "start",
          "greet",
          "goner",
          "golem",
          "lusty",
          "loopy",
          "round",
          "audit",
          "lying",
          "gamma",
          "labor",
          "islet",
          "civic",
          "forge",
          "corny",
          "moult",
          "basic",
          "salad",
          "agate",
          "spicy",
          "spray",
          "essay",
          "fjord",
          "spend",
          "kebab",
          "guild",
          "aback",
          "motor",
          "alone",
          "hatch",
          "hyper",
          "thumb",
          "dowry",
          "ought",
          "belch",
          "dutch",
          "pilot",
          "tweed",
          "comet",
          "jaunt",
          "enema",
          "steed",
          "abyss",
          "growl",
          "fling",
          "dozen",
          "boozy",
          "erode",
          "world",
          "gouge",
          "click",
          "briar",
          "great",
          "altar",
          "pulpy",
          "blurt",
          "coast",
          "duchy",
          "groin",
          "fixer",
          "group",
          "rogue",
          "badly",
          "smart",
          "pithy",
          "gaudy",
          "chill",
          "heron",
          "vodka",
          "finer",
          "surer",
          "radio",
          "rouge",
          "perch",
          "retch",
          "wrote",
          "clock",
          "tilde",
          "store",
          "prove",
          "bring",
          "solve",
          "cheat",
          "grime",
          "exult",
          "usher",
          "epoch",
          "triad",
          "break",
          "rhino",
          "viral",
          "conic",
          "masse",
          "sonic",
          "vital",
          "trace",
          "using",
          "peach",
          "champ",
          "baton",
          "brake",
          "pluck",
          "craze",
          "gripe",
          "weary",
          "picky",
          "acute",
          "ferry",
          "aside",
          "tapir",
          "troll",
          "unify",
          "rebus",
          "boost",
          "truss",
          "siege",
          "tiger",
          "banal",
          "slump",
          "crank",
          "gorge",
          "query",
          "drink",
          "favor",
          "abbey",
          "tangy",
          "panic",
          "solar",
          "shire",
          "proxy",
          "point",
          "robot",
          "prick",
          "wince",
          "crimp",
          "knoll",
          "sugar",
          "whack",
          "mount",
          "perky",
          "could",
          "wrung",
          "light",
          "those",
          "moist",
          "shard",
          "pleat",
          "aloft",
          "skill",
          "elder",
          "frame",
          "humor",
          "pause",
          "ulcer",
          "ultra",
          "robin",
          "cynic",
          "aroma",
          "caulk",
          "shake",
          "dodge",
          "swill",
          "tacit",
          "other",
          "thorn",
          "trove",
          "bloke",
          "vivid",
          "spill",
          "chant",
          "choke",
          "rupee",
          "nasty",
          "mourn",
          "ahead",
          "brine",
          "cloth",
          "hoard",
          "sweet",
          "month",
          "lapse",
          "watch",
          "today",
          "focus",
          "smelt",
          "tease",
          "cater",
          "movie",
          "saute",
          "allow",
          "renew",
          "their",
          "slosh",
          "purge",
          "chest",
          "depot",
          "epoxy",
          "nymph",
          "found",
          "shall",
          "stove",
          "lowly",
          "snout",
          "trope",
          "fewer",
          "shawl",
          "natal",
          "comma",
          "foray",
          "scare",
          "stair",
          "black",
          "squad",
          "royal",
          "chunk",
          "mince",
          "shame",
          "cheek",
          "ample",
          "flair",
          "foyer",
          "cargo",
          "oxide",
          "plant",
          "olive",
          "inert",
          "askew",
          "heist",
          "shown",
          "zesty",
          "trash",
          "larva",
          "forgo",
          "story",
          "hairy",
          "train",
          "homer",
          "badge",
          "midst",
          "canny",
          "shine",
          "gecko",
          "farce",
          "slung",
          "tipsy",
          "metal",
          "yield",
          "delve",
          "being",
          "scour",
          "glass",
          "gamer",
          "scrap",
          "money",
          "hinge",
          "album",
          "vouch",
          "asset",
          "tiara",
          "crept",
          "bayou",
          "atoll",
          "manor",
          "creak",
          "showy",
          "phase",
          "froth",
          "depth",
          "gloom",
          "flood",
          "trait",
          "girth",
          "piety",
          "goose",
          "float",
          "donor",
          "atone",
          "primo",
          "apron",
          "blown",
          "cacao",
          "loser",
          "input",
          "gloat",
          "awful",
          "brink",
          "smite",
          "beady",
          "rusty",
          "retro",
          "droll",
          "gawky",
          "hutch",
          "pinto",
          "egret",
          "lilac",
          "sever",
          "field",
          "fluff",
          "agape",
          "voice",
          "stead",
          "berth",
          "madam",
          "night",
          "bland",
          "liver",
          "wedge",
          "roomy",
          "wacky",
          "flock",
          "angry",
          "trite",
          "aphid",
          "tryst",
          "midge",
          "power",
          "elope",
          "cinch",
          "motto",
          "stomp",
          "upset",
          "bluff",
          "cramp",
          "quart",
          "coyly",
          "youth",
          "rhyme",
          "buggy",
          "alien",
          "smear",
          "unfit",
          "patty",
          "cling",
          "glean",
          "label",
          "hunky",
          "khaki",
          "poker",
          "gruel",
          "twice",
          "twang",
          "shrug",
          "treat",
          "waste",
          "merit",
          "woven",
          "needy",
          "clown",
          "irony",
          "ruder",
          "gauze",
          "chief",
          "onset",
          "prize",
          "fungi",
          "charm",
          "gully",
          "inter",
          "whoop",
          "taunt",
          "leery",
          "class",
          "theme",
          "lofty",
          "tibia",
          "booze",
          "alpha",
          "thyme",
          "doubt",
          "parer",
          "chute",
          "stick",
          "trice",
          "alike",
          "recap",
          "saint",
          "glory",
          "grate",
          "admit",
          "brisk",
          "soggy",
          "usurp",
          "scald",
          "scorn",
          "leave",
          "twine",
          "sting",
          "bough",
          "marsh",
          "sloth",
          "dandy",
          "vigor",
          "howdy",
          "enjoy",
          "valid",
          "ionic",
          "equal",
          "floor",
          "catch",
          "spade",
          "stein",
          "exist",
          "quirk",
          "denim",
          "grove",
          "spiel",
          "mummy",
          "fault",
          "foggy",
          "flout",
          "carry",
          "sneak",
          "libel",
          "waltz",
          "aptly",
          "piney",
          "inept",
          "aloud",
          "photo",
          "dream",
          "stale",
          "unite",
          "snarl",
          "baker",
          "there",
          "glyph",
          "pooch",
          "hippy",
          "spell",
          "folly",
          "louse",
          "gulch",
          "vault",
          "godly",
          "threw",
          "fleet",
          "grave",
          "inane",
          "shock",
          "crave",
          "spite",
          "valve",
          "skimp",
          "claim",
          "rainy",
          "musty",
          "pique",
          "daddy",
          "quasi",
          "arise",
          "aging",
          "valet",
          "opium",
          "avert",
          "stuck",
          "recut",
          "mulch",
          "genre",
          "plume",
          "rifle",
          "count",
          "incur",
          "total",
          "wrest",
          "mocha",
          "deter",
          "study",
          "lover",
          "safer",
          "rivet",
          "funny",
          "smoke",
          "mound",
          "undue",
          "sedan",
          "pagan",
          "swine",
          "guile",
          "gusty",
          "equip",
          "tough",
          "canoe",
          "chaos",
          "covet",
          "human",
          "udder",
          "lunch",
          "blast",
          "stray",
          "manga",
          "melee",
          "lefty",
          "quick",
          "paste",
          "given",
          "octet",
          "risen",
          "groan",
          "leaky",
          "grind",
          "carve",
          "loose",
          "sadly",
          "spilt",
          "apple",
          "slack",
          "honey",
          "final",
          "sheen",
          "eerie",
          "minty",
          "slick",
          "derby",
          "wharf",
          "spelt",
          "coach",
          "erupt",
          "singe",
          "price",
          "spawn",
          "fairy",
          "jiffy",
          "filmy",
          "stack",
          "chose",
          "sleep",
          "ardor",
          "nanny",
          "niece",
          "woozy",
          "handy",
          "grace",
          "ditto",
          "stank",
          "cream",
          "usual",
          "diode",
          "valor",
          "angle",
          "ninja",
          "muddy",
          "chase",
          "reply",
          "prone",
          "spoil",
          "heart",
          "shade",
          "diner",
          "arson",
          "onion",
          "sleet",
          "dowel",
          "couch",
          "palsy",
          "bowel",
          "smile",
          "evoke",
          "creek",
          "lance",
          "eagle",
          "idiot",
          "siren",
          "built",
          "embed",
          "award",
          "dross",
          "annul",
          "goody",
          "frown",
          "patio",
          "laden",
          "humid",
          "elite",
          "lymph",
          "edify",
          "might",
          "reset",
          "visit",
          "gusto",
          "purse",
          "vapor",
          "crock",
          "write",
          "sunny",
          "loath",
          "chaff",
          "slide",
          "queer",
          "venom",
          "stamp",
          "sorry",
          "still",
          "acorn",
          "aping",
          "pushy",
          "tamer",
          "hater",
          "mania",
          "awoke",
          "brawn",
          "swift",
          "exile",
          "birch",
          "lucky",
          "freer",
          "risky",
          "ghost",
          "plier",
          "lunar",
          "winch",
          "snare",
          "nurse",
          "house",
          "borax",
          "nicer",
          "lurch",
          "exalt",
          "about",
          "savvy",
          "toxin",
          "tunic",
          "pried",
          "inlay",
          "chump",
          "lanky",
          "cress",
          "eater",
          "elude",
          "cycle",
          "kitty",
          "boule",
          "moron",
          "tenet",
          "place",
          "lobby",
          "plush",
          "vigil",
          "index",
          "blink",
          "clung",
          "qualm",
          "croup",
          "clink",
          "juicy",
          "stage",
          "decay",
          "nerve",
          "flier",
          "shaft",
          "crook",
          "clean",
          "china",
          "ridge",
          "vowel",
          "gnome",
          "snuck",
          "icing",
          "spiny",
          "rigor",
          "snail",
          "flown",
          "rabid",
          "prose",
          "thank",
          "poppy",
          "budge",
          "fiber",
          "moldy",
          "dowdy",
          "kneel",
          "track",
          "caddy",
          "quell",
          "dumpy",
          "paler",
          "swore",
          "rebar",
          "scuba",
          "splat",
          "flyer",
          "horny",
          "mason",
          "doing",
          "ozone",
          "amply",
          "molar",
          "ovary",
          "beset",
          "queue",
          "cliff",
          "magic",
          "truce",
          "sport",
          "fritz",
          "edict",
          "twirl",
          "verse",
          "llama",
          "eaten",
          "range",
          "whisk",
          "hovel",
          "rehab",
          "macaw",
          "sigma",
          "spout",
          "verve",
          "sushi",
          "dying",
          "fetid",
          "brain",
          "buddy",
          "thump",
          "scion",
          "candy",
          "chord",
          "basin",
          "march",
          "crowd",
          "arbor",
          "gayly",
          "musky",
          "stain",
          "dally",
          "bless",
          "bravo",
          "stung",
          "title",
          "ruler",
          "kiosk",
          "blond",
          "ennui",
          "layer",
          "fluid",
          "tatty",
          "score",
          "cutie",
          "zebra",
          "barge",
          "matey",
          "bluer",
          "aider",
          "shook",
          "river",
          "privy",
          "betel",
          "frisk",
          "bongo",
          "begun",
          "azure",
          "weave",
          "genie",
          "sound",
          "glove",
          "braid",
          "scope",
          "wryly",
          "rover",
          "assay",
          "ocean",
          "bloom",
          "irate",
          "later",
          "woken",
          "silky",
          "wreck",
          "dwelt",
          "slate",
          "smack",
          "solid",
          "amaze",
          "hazel",
          "wrist",
          "jolly",
          "globe",
          "flint",
          "rouse",
          "civil",
          "vista",
          "relax",
          "cover",
          "alive",
          "beech",
          "jetty",
          "bliss",
          "vocal",
          "often",
          "dolly",
          "eight",
          "joker",
          "since",
          "event",
          "ensue",
          "shunt",
          "diver",
          "poser",
          "worst",
          "sweep",
          "alley",
          "creed",
          "anime",
          "leafy",
          "bosom",
          "dunce",
          "stare",
          "pudgy",
          "waive",
          "choir",
          "stood",
          "spoke",
          "outgo",
          "delay",
          "bilge",
          "ideal",
          "clasp",
          "seize",
          "hotly",
          "laugh",
          "sieve",
          "block",
          "meant",
          "grape",
          "noose",
          "hardy",
          "shied",
          "drawl",
          "daisy",
          "putty",
          "strut",
          "burnt",
          "tulip",
          "crick",
          "idyll",
          "vixen",
          "furor",
          "geeky",
          "cough",
          "naive",
          "shoal",
          "stork",
          "bathe",
          "aunty",
          "check",
          "prime",
          "brass",
          "outer",
          "furry",
          "razor",
          "elect",
          "evict",
          "imply",
          "demur",
          "quota",
          "haven",
          "cavil",
          "swear",
          "crump",
          "dough",
          "gavel",
          "wagon",
          "salon",
          "nudge",
          "harem",
          "pitch",
          "sworn",
          "pupil",
          "excel",
          "stony",
          "cabin",
          "unzip",
          "queen",
          "trout",
          "polyp",
          "earth",
          "storm",
          "until",
          "taper",
          "enter",
          "child",
          "adopt",
          "minor",
          "fatty",
          "husky",
          "brave",
          "filet",
          "slime",
          "glint",
          "tread",
          "steal",
          "regal",
          "guest",
          "every",
          "murky",
          "share",
          "spore",
          "hoist",
          "buxom",
          "inner",
          "otter",
          "dimly",
          "level",
          "sumac",
          "donut",
          "stilt",
          "arena",
          "sheet",
          "scrub",
          "fancy",
          "slimy",
          "pearl",
          "silly",
          "porch",
          "dingo",
          "sepia",
          "amble",
          "shady",
          "bread",
          "friar",
          "reign",
          "dairy",
          "quill",
          "cross",
          "brood",
          "tuber",
          "shear",
          "posit",
          "blank",
          "villa",
          "shank",
          "piggy",
          "freak",
          "which",
          "among",
          "fecal",
          "shell",
          "would",
          "algae",
          "large",
          "rabbi",
          "agony",
          "amuse",
          "bushy",
          "copse",
          "swoon",
          "knife",
          "pouch",
          "ascot",
          "plane",
          "crown",
          "urban",
          "snide",
          "relay",
          "abide",
          "viola",
          "rajah",
          "straw",
          "dilly",
          "crash",
          "amass",
          "third",
          "trick",
          "tutor",
          "woody",
          "blurb",
          "grief",
          "disco",
          "where",
          "sassy",
          "beach",
          "sauna",
          "comic",
          "clued",
          "creep",
          "caste",
          "graze",
          "snuff",
          "frock",
          "gonad",
          "drunk",
          "prong",
          "lurid",
          "steel",
          "halve",
          "buyer",
          "vinyl",
          "utile",
          "smell",
          "adage",
          "worry",
          "tasty",
          "local",
          "trade",
          "finch",
          "ashen",
          "modal",
          "gaunt",
          "clove",
          "enact",
          "adorn",
          "roast",
          "speck",
          "sheik",
          "missy",
          "grunt",
          "snoop",
          "party",
          "touch",
          "mafia",
          "emcee",
          "array",
          "south",
          "vapid",
          "jelly",
          "skulk",
          "angst",
          "tubal",
          "lower",
          "crest",
          "sweat",
          "cyber",
          "adore",
          "tardy",
          "swami",
          "notch",
          "groom",
          "roach",
          "hitch",
          "young",
          "align",
          "ready",
          "frond",
          "strap",
          "puree",
          "realm",
          "venue",
          "swarm",
          "offer",
          "seven",
          "dryer",
          "diary",
          "dryly",
          "drank",
          "acrid",
          "heady",
          "theta",
          "junto",
          "pixie",
          "quoth",
          "bonus",
          "shalt",
          "penne",
          "amend",
          "datum",
          "build",
          "piano",
          "shelf",
          "lodge",
          "suing",
          "rearm",
          "coral",
          "ramen",
          "worth",
          "psalm",
          "infer",
          "overt",
          "mayor",
          "ovoid",
          "glide",
          "usage",
          "poise",
          "randy",
          "chuck",
          "prank",
          "fishy",
          "tooth",
          "ether",
          "drove",
          "idler",
          "swath",
          "stint",
          "while",
          "begat",
          "apply",
          "slang",
          "tarot",
          "radar",
          "credo",
          "aware",
          "canon",
          "shift",
          "timer",
          "bylaw",
          "serum",
          "three",
          "steak",
          "iliac",
          "shirk",
          "blunt",
          "puppy",
          "penal",
          "joist",
          "bunny",
          "shape",
          "beget",
          "wheel",
          "adept",
          "stunt",
          "stole",
          "topaz",
          "chore",
          "fluke",
          "afoot",
          "bloat",
          "bully",
          "dense",
          "caper",
          "sneer",
          "boxer",
          "jumbo",
          "lunge",
          "space",
          "avail",
          "short",
          "slurp",
          "loyal",
          "flirt",
          "pizza",
          "conch",
          "tempo",
          "droop",
          "plate",
          "bible",
          "plunk",
          "afoul",
          "savoy",
          "steep",
          "agile",
          "stake",
          "dwell",
          "knave",
          "beard",
          "arose",
          "motif",
          "smash",
          "broil",
          "glare",
          "shove",
          "baggy",
          "mammy",
          "swamp",
          "along",
          "rugby",
          "wager",
          "quack",
          "squat",
          "snaky",
          "debit",
          "mange",
          "skate",
          "ninth",
          "joust",
          "tramp",
          "spurn",
          "medal",
          "micro",
          "rebel",
          "flank",
          "learn",
          "nadir",
          "maple",
          "comfy",
          "remit",
          "gruff",
          "ester",
          "least",
          "mogul",
          "fetch",
          "cause",
          "oaken",
          "aglow",
          "meaty",
          "gaffe",
          "shyly",
          "racer",
          "prowl",
          "thief",
          "stern",
          "poesy",
          "rocky",
          "tweet",
          "waist",
          "spire",
          "grope",
          "havoc",
          "patsy",
          "truly",
          "forty",
          "deity",
          "uncle",
          "swish",
          "giver",
          "preen",
          "bevel",
          "lemur",
          "draft",
          "slope",
          "annoy",
          "lingo",
          "bleak",
          "ditty",
          "curly",
          "cedar",
          "dirge",
          "grown",
          "horde",
          "drool",
          "shuck",
          "crypt",
          "cumin",
          "stock",
          "gravy",
          "locus",
          "wider",
          "breed",
          "quite",
          "chafe",
          "cache",
          "blimp",
          "deign",
          "fiend",
          "logic",
          "cheap",
          "elide",
          "rigid",
          "false",
          "renal",
          "pence",
          "rowdy",
          "shoot",
          "blaze",
          "envoy",
          "posse",
          "brief",
          "never",
          "abort",
          "mouse",
          "mucky",
          "sulky",
          "fiery",
          "media",
          "trunk",
          "yeast",
          "clear",
          "skunk",
          "scalp",
          "bitty",
          "cider",
          "koala",
          "duvet",
          "segue",
          "creme",
          "super",
          "grill",
          "after",
          "owner",
          "ember",
          "reach",
          "nobly",
          "empty",
          "speed",
          "gipsy",
          "recur",
          "smock",
          "dread",
          "merge",
          "burst",
          "kappa",
          "amity",
          "shaky",
          "hover",
          "carol",
          "snort",
          "synod",
          "faint",
          "haunt",
          "flour",
          "chair",
          "detox",
          "shrew",
          "tense",
          "plied",
          "quark",
          "burly",
          "novel",
          "waxen",
          "stoic",
          "jerky",
          "blitz",
          "beefy",
          "lyric",
          "hussy",
          "towel",
          "quilt",
          "below",
          "bingo",
          "wispy",
          "brash",
          "scone",
          "toast",
          "easel",
          "saucy",
          "value",
          "spice",
          "honor",
          "route",
          "sharp",
          "bawdy",
          "radii",
          "skull",
          "phony",
          "issue",
          "lager",
          "swell",
          "urine",
          "gassy",
          "trial",
          "flora",
          "upper",
          "latch",
          "wight",
          "brick",
          "retry",
          "holly",
          "decal",
          "grass",
          "shack",
          "dogma",
          "mover",
          "defer",
          "sober",
          "optic",
          "crier",
          "vying",
          "nomad",
          "flute",
          "hippo",
          "shark",
          "drier",
          "obese",
          "bugle",
          "tawny",
          "chalk",
          "feast",
          "ruddy",
          "pedal",
          "scarf",
          "cruel",
          "bleat",
          "tidal",
          "slush",
          "semen",
          "windy",
          "dusty",
          "sally",
          "igloo",
          "nerdy",
          "jewel",
          "shone",
          "whale",
          "hymen",
          "abuse",
          "fugue",
          "elbow",
          "crumb",
          "pansy",
          "welsh",
          "syrup",
          "terse",
          "suave",
          "gamut",
          "swung",
          "drake",
          "freed",
          "afire",
          "shirt",
          "grout",
          "oddly",
          "tithe",
          "plaid",
          "dummy",
          "broom",
          "blind",
          "torch",
          "enemy",
          "again",
          "tying",
          "pesky",
          "alter",
          "gazer",
          "noble",
          "ethos",
          "bride",
          "extol",
          "decor",
          "hobby",
          "beast",
          "idiom",
          "utter",
          "these",
          "sixth",
          "alarm",
          "erase",
          "elegy",
          "spunk",
          "piper",
          "scaly",
          "scold",
          "hefty",
          "chick",
          "sooty",
          "canal",
          "whiny",
          "slash",
          "quake",
          "joint",
          "swept",
          "prude",
          "heavy",
          "wield",
          "femme",
          "lasso",
          "maize",
          "shale",
          "screw",
          "spree",
          "smoky",
          "whiff",
          "scent",
          "glade",
          "spent",
          "prism",
          "stoke",
          "riper",
          "orbit",
          "cocoa",
          "guilt",
          "humus",
          "shush",
          "table",
          "smirk",
          "wrong",
          "noisy",
          "alert",
          "shiny",
          "elate",
          "resin",
          "whole",
          "hunch",
          "pixel",
          "polar",
          "hotel",
          "sword",
          "cleat",
          "mango",
          "rumba",
          "puffy",
          "filly",
          "billy",
          "leash",
          "clout",
          "dance",
          "ovate",
          "facet",
          "chili",
          "paint",
          "liner",
          "curio",
          "salty",
          "audio",
          "snake",
          "fable",
          "cloak",
          "navel",
          "spurt",
          "pesto",
          "balmy",
          "flash",
          "unwed",
          "early",
          "churn",
          "weedy",
          "stump",
          "lease",
          "witty",
          "wimpy",
          "spoof",
          "saner",
          "blend",
          "salsa",
          "thick",
          "warty",
          "manic",
          "blare",
          "squib",
          "spoon",
          "probe",
          "crepe",
          "knack",
          "force",
          "debut",
          "order",
          "haste",
          "teeth",
          "agent",
          "widen",
          "icily",
          "slice",
          "ingot",
          "clash",
          "juror",
          "blood",
          "abode",
          "throw",
          "unity",
          "pivot",
          "slept",
          "troop",
          "spare",
          "sewer",
          "parse",
          "morph",
          "cacti",
          "tacky",
          "spool",
          "demon",
          "moody",
          "annex",
          "begin",
          "fuzzy",
          "patch",
          "water",
          "lumpy",
          "admin",
          "omega",
          "limit",
          "tabby",
          "macho",
          "aisle",
          "skiff",
          "basis",
          "plank",
          "verge",
          "botch",
          "crawl",
          "lousy",
          "slain",
          "cubic",
          "raise",
          "wrack",
          "guide",
          "foist",
          "cameo",
          "under",
          "actor",
          "revue",
          "fraud",
          "harpy",
          "scoop",
          "climb",
          "refer",
          "olden",
          "clerk",
          "debar",
          "tally",
          "ethic",
          "cairn",
          "tulle",
          "ghoul",
          "hilly",
          "crude",
          "apart",
          "scale",
          "older",
          "plain",
          "sperm",
          "briny",
          "abbot",
          "rerun",
          "quest",
          "crisp",
          "bound",
          "befit",
          "drawn",
          "suite",
          "itchy",
          "cheer",
          "bagel",
          "guess",
          "broad",
          "axiom",
          "chard",
          "caput",
          "leant",
          "harsh",
          "curse",
          "proud",
          "swing",
          "opine",
          "taste",
          "lupus",
          "gumbo",
          "miner",
          "green",
          "chasm",
          "lipid",
          "topic",
          "armor",
          "brush",
          "crane",
          "mural",
          "abled",
          "habit",
          "bossy",
          "maker",
          "dusky",
          "dizzy",
          "lithe",
          "brook",
          "jazzy",
          "fifty",
          "sense",
          "giant",
          "surly",
          "legal",
          "fatal",
          "flunk",
          "began",
          "prune",
          "small",
          "slant",
          "scoff",
          "torus",
          "ninny",
          "covey",
          "viper",
          "taken",
          "moral",
          "vogue",
          "owing",
          "token",
          "entry",
          "booth",
          "voter",
          "chide",
          "elfin",
          "ebony",
          "neigh",
          "minim",
          "melon",
          "kneed",
          "decoy",
          "voila",
          "ankle",
          "arrow",
          "mushy",
          "tribe",
          "cease",
          "eager",
          "birth",
          "graph",
          "odder",
          "terra",
          "weird",
          "tried",
          "clack",
          "color",
          "rough",
          "weigh",
          "uncut",
          "ladle",
          "strip",
          "craft",
          "minus",
          "dicey",
          "titan",
          "lucid",
          "vicar",
          "dress",
          "ditch",
          "gypsy",
          "pasta",
          "taffy",
          "flame",
          "swoop",
          "aloof",
          "sight",
          "broke",
          "teary",
          "chart",
          "sixty",
          "wordy",
          "sheer",
          "leper",
          "nosey",
          "bulge",
          "savor",
          "clamp",
          "funky",
          "foamy",
          "toxic",
          "brand",
          "plumb",
          "dingy",
          "butte",
          "drill",
          "tripe",
          "bicep",
          "tenor",
          "krill",
          "worse",
          "drama",
          "hyena",
          "think",
          "ratio",
          "cobra",
          "basil",
          "scrum",
          "bused",
          "phone",
          "court",
          "camel",
          "proof",
          "heard",
          "angel",
          "petal",
          "pouty",
          "throb",
          "maybe",
          "fetal",
          "sprig",
          "spine",
          "shout",
          "cadet",
          "macro",
          "dodgy",
          "satyr",
          "rarer",
          "binge",
          "trend",
          "nutty",
          "leapt",
          "amiss",
          "split",
          "myrrh",
          "width",
          "sonar",
          "tower",
          "baron",
          "fever",
          "waver",
          "spark",
          "belie",
          "sloop",
          "expel",
          "smote",
          "baler",
          "above",
          "north",
          "wafer",
          "scant",
          "frill",
          "awash",
          "snack",
          "scowl",
          "frail",
          "drift",
          "limbo",
          "fence",
          "motel",
          "ounce",
          "wreak",
          "revel",
          "talon",
          "prior",
          "knelt",
          "cello",
          "flake",
          "debug",
          "anode",
          "crime",
          "salve",
          "scout",
          "imbue",
          "pinky",
          "stave",
          "vague",
          "chock",
          "fight",
          "video",
          "stone",
          "teach",
          "cleft",
          "frost",
          "prawn",
          "booty",
          "twist",
          "apnea",
          "stiff",
          "plaza",
          "ledge",
          "tweak",
          "board",
          "grant",
          "medic",
          "bacon",
          "cable",
          "brawl",
          "slunk",
          "raspy",
          "forum",
          "drone",
          "women",
          "mucus",
          "boast",
          "toddy",
          "coven",
          "tumor",
          "truer",
          "wrath",
          "stall",
          "steam",
          "axial",
          "purer",
          "daily",
          "trail",
          "niche",
          "mealy",
          "juice",
          "nylon",
          "plump",
          "merry",
          "flail",
          "papal",
          "wheat",
          "berry",
          "cower",
          "erect",
          "brute",
          "leggy",
          "snipe",
          "sinew",
          "skier",
          "penny",
          "jumpy",
          "rally",
          "umbra",
          "scary",
          "modem",
          "gross",
          "avian",
          "greed",
          "satin",
          "tonic",
          "parka",
          "sniff",
          "livid",
          "stark",
          "trump",
          "giddy",
          "reuse",
          "taboo",
          "avoid",
          "quote",
          "devil",
          "liken",
          "gloss",
          "gayer",
          "beret",
          "noise",
          "gland",
          "dealt",
          "sling",
          "rumor",
          "opera",
          "thigh",
          "tonga",
          "flare",
          "wound",
          "white",
          "bulky",
          "etude",
          "horse",
          "circa",
          "paddy",
          "inbox",
          "fizzy",
          "grain",
          "exert",
          "surge",
          "gleam",
          "belle",
          "salvo",
          "crush",
          "fruit",
          "sappy",
          "taker",
          "tract",
          "ovine",
          "spiky",
          "frank",
          "reedy",
          "filth",
          "spasm",
          "heave",
          "mambo",
          "right",
          "clank",
          "trust",
          "lumen",
          "borne",
          "spook",
          "sauce",
          "amber",
          "lathe",
          "carat",
          "corer",
          "dirty",
          "slyly",
          "affix",
          "alloy",
          "taint",
          "sheep",
          "kinky",
          "wooly",
          "mauve",
          "flung",
          "yacht",
          "fried",
          "quail",
          "brunt",
          "grimy",
          "curvy",
          "cagey",
          "rinse",
          "deuce",
          "state",
          "grasp",
          "milky",
          "bison",
          "graft",
          "sandy",
          "baste",
          "flask",
          "hedge",
          "girly",
          "swash",
          "boney",
          "coupe",
          "endow",
          "abhor",
          "welch",
          "blade",
          "tight",
          "geese",
          "miser",
          "mirth",
          "cloud",
          "cabal",
          "leech",
          "close",
          "tenth",
          "pecan",
          "droit",
          "grail",
          "clone",
          "guise",
          "ralph",
          "tango",
          "biddy",
          "smith",
          "mower",
          "payee",
          "serif",
          "drape",
          "fifth",
          "spank",
          "glaze",
          "allot",
          "truck",
          "kayak",
          "virus",
          "testy",
          "tepee",
          "fully",
          "zonal",
          "metro",
          "curry",
          "grand",
          "banjo",
          "axion",
          "bezel",
          "occur",
          "chain",
          "nasal",
          "gooey",
          "filer",
          "brace",
          "allay",
          "pubic",
          "raven",
          "plead",
          "gnash",
          "flaky",
          "munch",
          "dully",
          "eking",
          "thing",
          "slink",
          "hurry",
          "theft",
          "shorn",
          "pygmy",
          "ranch",
          "wring",
          "lemon",
          "shore",
          "mamma",
          "froze",
          "newer",
          "style",
          "moose",
          "antic",
          "drown",
          "vegan",
          "chess",
          "guppy",
          "union",
          "lever",
          "lorry",
          "image",
          "cabby",
          "druid",
          "exact",
          "truth",
          "dopey",
          "spear",
          "cried",
          "chime",
          "crony",
          "stunk",
          "timid",
          "batch",
          "gauge",
          "rotor",
          "crack",
          "curve",
          "latte",
          "witch",
          "bunch",
          "repel",
          "anvil",
          "soapy",
          "meter",
          "broth",
          "madly",
          "dried",
          "scene",
          "known",
          "magma",
          "roost",
          "woman",
          "thong",
          "punch",
          "pasty",
          "downy",
          "knead",
          "whirl",
          "rapid",
          "clang",
          "anger",
          "drive",
          "goofy",
          "email",
          "music",
          "stuff",
          "bleep",
          "rider",
          "mecca",
          "folio",
          "setup",
          "verso",
          "quash",
          "fauna",
          "gummy",
          "happy",
          "newly",
          "fussy",
          "relic",
          "guava",
          "ratty",
          "fudge",
          "femur",
          "chirp",
          "forte",
          "alibi",
          "whine",
          "petty",
          "golly",
          "plait",
          "fleck",
          "felon",
          "gourd",
          "brown",
          "thrum",
          "ficus",
          "stash",
          "decry",
          "wiser",
          "junta",
          "visor",
          "daunt",
          "scree",
          "impel",
          "await",
          "press",
          "whose",
          "turbo",
          "stoop",
          "speak",
          "mangy",
          "eying",
          "inlet",
          "crone",
          "pulse",
          "mossy",
          "staid",
          "hence",
          "pinch",
          "teddy",
          "sully",
          "snore",
          "ripen",
          "snowy",
          "attic",
          "going",
          "leach",
          "mouth",
          "hound",
          "clump",
          "tonal",
          "bigot",
          "peril",
          "piece",
          "blame",
          "haute",
          "spied",
          "undid",
          "intro",
          "basal",
          "rodeo",
          "guard",
          "steer",
          "loamy",
          "scamp",
          "scram",
          "manly",
          "hello",
          "vaunt",
          "organ",
          "feral",
          "knock",
          "extra",
          "condo",
          "adapt",
          "willy",
          "polka",
          "rayon",
          "skirt",
          "faith",
          "torso",
          "match",
          "mercy",
          "tepid",
          "sleek",
          "riser",
          "twixt",
          "peace",
          "flush",
          "catty",
          "login",
          "eject",
          "roger",
          "rival",
          "untie",
          "refit",
          "aorta",
          "adult",
          "judge",
          "rower",
          "artsy",
          "rural",
          "shave",
          "bobby",
          "eclat",
          "fella",
          "gaily",
          "harry",
          "hasty",
          "hydro",
          "liege",
          "octal",
          "ombre",
          "payer",
          "sooth",
          "unset",
          "unlit",
          "vomit",
          "fanny",
          "fetus",
          "butch",
          "stalk",
          "flack",
          "widow",
          "augur",
        ];
      },
      96390: function (e, a, t) {
        new Date("02/27/2023 06:00:00 GMT-0400").getTime(),
          new Date("04/01/2023 10:00:00 GMT-0400").getTime(),
          new Date("03/31/2023 13:00:00 GMT-0400").getTime(),
          new Date("03/31/2023 06:00:00 GMT-0400").getTime(),
          new Date("03/30/2023 06:00:00 GMT-0400").getTime(),
          new Date("03/13/2023 06:00:00 GMT-0400").getTime(),
          new Date("02/27/2023 06:00:00 GMT-0400").getTime();
      },
      98087: function (e, a, t) {
        t.d(a, {
          B8: function () {
            return c;
          },
          El: function () {
            return p;
          },
          K4: function () {
            return u;
          },
          MQ: function () {
            return h;
          },
          Nj: function () {
            return y;
          },
          SK: function () {
            return o;
          },
          TW: function () {
            return d;
          },
          W9: function () {
            return b;
          },
          Wz: function () {
            return f;
          },
          jM: function () {
            return s;
          },
          k2: function () {
            return g;
          },
          l7: function () {
            return l;
          },
          pi: function () {
            return r;
          },
          sU: function () {
            return i;
          },
          v9: function () {
            return n;
          },
          vA: function () {
            return m;
          },
          w_: function () {
            return k;
          },
          yw: function () {
            return w;
          },
        });
        const o = "The Crossword",
          s = "The Mini",
          r = "Gameplay Stories",
          n = "Spelling Bee",
          l = "Wordle",
          i = "Letter Boxed",
          c = "Tiles",
          u = "Sudoku",
          d = "Vertex",
          m = "Connections",
          p = "All Games",
          y = "Statistics",
          g = "Crossword Archives",
          h = "How to Solve The New York Times Crossword",
          b = "Featured Article",
          f = "download-app",
          w = "monthly-bonus",
          k = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
          ];
      },
      91776: function (e, a, t) {
        t.d(a, {
          Z: function () {
            return tr;
          },
        });
        var o = t(89526),
          s = t(53789),
          r = t(14237),
          n = t(66203),
          l = t(32873),
          i = t(26171),
          c = {
            moment: "MomentSystem-module_moment__G9hyw",
            momentExit: "MomentSystem-module_momentExit__ssPqu",
            momentExitActive: "MomentSystem-module_momentExitActive__DuPSj",
            momentEnter: "MomentSystem-module_momentEnter__pKkpt",
            momentEnterActive: "MomentSystem-module_momentEnterActive__UJVVz",
          };
        function u(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function d(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? u(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : u(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const m = 400;
        function p(e) {
          let { hasLoaded: a, config: t, initialMoment: s } = e;
          const [r, n] = o.useState(s),
            u = t[r],
            p = { exit: c.momentExit, exitActive: c.momentExitActive },
            y = { enter: c.momentEnter, enterActive: c.momentEnterActive },
            g = d(d({}, u.animateIn ? y : {}), u.animateOut ? p : {});
          return o.createElement(
            l.Z,
            null,
            o.createElement(
              i.Z,
              {
                key: r,
                timeout: {
                  enter: u.animateIn ? m : 0,
                  exit: u.animateOut ? m : 0,
                },
                classNames: g,
              },
              o.createElement(
                "div",
                { className: c.moment },
                o.createElement(u.component, { hasLoaded: a, transition: n })
              )
            )
          );
        }
        var y = t(28229),
          g = t(39385),
          h = t(69623),
          b = t(24064),
          f = t(5123),
          w = t(83910);
        const k = () => {
          const e = (0, b.D)(h.cK),
            a = (0, b.D)(h.F_);
          (0, o.useEffect)(() => {
            const a = document.querySelector("body");
            if (
              a &&
              ((0, w.rl)(f.eY, e),
              e && !a.classList.contains("dark")
                ? a.classList.add("dark")
                : e || a.classList.remove("dark"),
              window.isHybridWebView && window.NativeBridge)
            ) {
              const a = e ? g.PU.DARK : g.PU.LIGHT;
              window.NativeBridge.gamesSetNativeColorTheme(a).catch((e) => {
                console.error(
                  "Failed to set native color theme: ".concat(a),
                  e
                ),
                  (0, y.Z)("Failed to set native color theme: ".concat(a));
              });
            }
          }, [e]),
            (0, o.useEffect)(() => {
              const e = document.querySelector("body");
              e &&
                (a && !e.classList.contains("colorblind")
                  ? e.classList.add("colorblind")
                  : a || e.classList.remove("colorblind"));
            }, [a]);
        };
        var v = t(97476),
          _ = t(36629),
          E = t(56470),
          x = t(33805),
          C = t(37126),
          S = t(42659);
        function z(e, a, t, o, s, r, n) {
          try {
            var l = e[r](n),
              i = l.value;
          } catch (e) {
            return void t(e);
          }
          l.done ? a(i) : Promise.resolve(i).then(o, s);
        }
        function N(e) {
          return function () {
            var a = this,
              t = arguments;
            return new Promise(function (o, s) {
              var r = e.apply(a, t);
              function n(e) {
                z(r, o, s, n, l, "next", e);
              }
              function l(e) {
                z(r, o, s, n, l, "throw", e);
              }
              n(void 0);
            });
          };
        }
        const T = () =>
            (function () {
              var e = N(function* (e) {
                try {
                  const a = e((e, a) => {
                    const t = (0, C.wt)(a()),
                      o = t ? new Date("".concat(t, "T12:00:00")) : new Date(),
                      s = (0, _.Z)(new Date(), "yyyy-MM-dd"),
                      r = t === s;
                    return (0, E.Z)(
                      new Date("".concat(t, "T12:00:00")),
                      new Date("".concat(s, "T12:00:00"))
                    )
                      ? (e((0, v.Eh)("notFound")), null)
                      : (r &&
                          window.location.replace("/wordle.html"),
                        o);
                  });
                  if (!a) throw new Error("Attempting to load a future puzzle");
                  yield Promise.all([
                    e((0, S.eD)({ today: a })),
                    e((0, x.ri)()),
                  ]),
                    yield e((0, x.yu)()),
                    e((0, S.eL)());
                } catch (e) {
                  console.error("loadApp promise rejected", e);
                }
              });
              return function (a) {
                return e.apply(this, arguments);
              };
            })(),
          j = (e) =>
            (function () {
              var a = N(function* (a) {
                const t = new Date("".concat(e, "T12:00:00"));
                try {
                  yield a((0, S.eD)({ today: t })), a((0, S.eL)());
                } catch (e) {
                  console.error("loadApp promise rejected", e);
                }
              });
              return function (e) {
                return a.apply(this, arguments);
              };
            })();
        var O = t(64403),
          P = t.n(O),
          D = t(53248);
        const I = (e) => {
          let { winHeight: a, winWidth: t } = e;
          const o = t / a;
          return (a <= 650 && o > 1.8) || (a < 400 && o > 1);
        };
        var A = () => {
            const e = (0, D.Z)(I),
              a = (0, b.D)(h.cK);
            return e
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    "div",
                    {
                      "data-testid": "landscape-warning",
                      className: P()(
                        "LandscapeWarning-module_landscapeWarning__MFIwn",
                        a ? "LandscapeWarning-module_darkMode__Y36XD" : ""
                      ),
                    },
                    o.createElement("i", {
                      className: "LandscapeWarning-module_rotate__Qrx4Q",
                    }),
                    o.createElement(
                      "p",
                      null,
                      "Oh no! We can’t fit everything on your screen.",
                      o.createElement("br", null),
                      o.createElement(
                        "span",
                        null,
                        "Please rotate your device."
                      )
                    )
                  )
                )
              : null;
          },
          L = t(6425),
          M = t(21451),
          R = t(39371),
          B = t(10297),
          W = t(28557),
          H = t(65489),
          G = (e) => {
            let { buttonStyle: a, textStyle: t, handler: s, trackData: r } = e;
            return o.createElement(
              "button",
              {
                type: "button",
                "data-testid": "back-button",
                className: P()("BackButton-module_backButton__W2d63", a),
                onClick: () => {
                  var e;
                  const {
                      elementName: a,
                      context: t,
                      moduleLabel: o,
                      moduleName: n,
                    } = r,
                    l = null != n ? n : "click";
                  (0, H.$g)(l, t, a, "back", o),
                    s && s(),
                    null === (e = window.NativeBridge) ||
                      void 0 === e ||
                      e.gamesBackToHub();
                },
              },
              o.createElement(
                "span",
                {
                  className: P()("BackButton-module_backButtonText__myVSA", t),
                },
                "Back"
              )
            );
          };
        const F = (e) => {
            let { children: a } = e;
            return window.isHybridWebView || window.newsreaderAppPlatform
              ? null
              : a;
          },
          q = (e) => {
            let { children: a } = e;
            return window.isHybridWebView && window.NativeBridge ? a : null;
          };
        var V = t(57256),
          U = t(85203),
          Z = t(43972),
          X = t(3254);
        const K = "ON_wordle_regi_modal",
          Y = "AUD_wordleShareUrl",
          Q = "DFP_WordleSkip",
          J = "1_Variant",
          $ = "DFP_WordlePrefetch_AA",
          ee = "DFP_WordlePrefetch_0524",
          ae = "1_Variant",
          te = "GAMES_wordleMoreContent_0824",
          oe = "1_gamesTop";
        var se = t(8508);
        const re = (e) => {
          const a = (0, b.D)(C.Hh),
            t = (0, b.D)(se.eQ),
            o = (0, w.fp)((0, se.OU)(null));
          return (
            e &&
            !a &&
            !!t &&
            !!o &&
            !!t.autoOptInTimestamp &&
            !t.hasMadeStatsChoice &&
            o.gamesPlayed > 0 &&
            o.autoOptInTimestamp !== t.autoOptInTimestamp
          );
        };
        var ne = t(69802),
          le = () => {
            var e, a, t, o;
            const s =
                /Tablet|iPad|GT-P|SM-T|Xoom|SC-|LG-V|Nexus 7|Nexus 10|KFAPWI|KFTHWI|KFOT|KFTBWI|SGP/i.test(
                  null === (e = navigator) || void 0 === e
                    ? void 0
                    : e.userAgent
                ),
              r =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  null === (a = navigator) || void 0 === a
                    ? void 0
                    : a.userAgent
                );
            return (
              !(
                null === (t = window) ||
                void 0 === t ||
                null === (o = t.matchMedia) ||
                void 0 === o ||
                null === (o = o.call(t, "(max-width: 640px)")) ||
                void 0 === o ||
                !o.matches
              ) &&
              r &&
              !s
            );
          };
        const ie = "DFP_WordleGamesApp",
          ce = "DFP_WordleGamesApp_AA",
          ue = (e) => H.abra.getVariant(e),
          de = "DFP_WordleMobile_0423",
          me = "DFP_WordleMobile_Mock";
        const pe = () => {
            return (
              !(0, ne._7)() &&
              ((e = ["phone"]),
              (0, ne.Xj)() &&
                (null === (a = window.config) || void 0 === a
                  ? void 0
                  : a.AdRequirements) &&
                e.includes(
                  null === (t = window.config) ||
                    void 0 === t ||
                    null === (t = t.AdRequirements) ||
                    void 0 === t
                    ? void 0
                    : t.plat
                )) &&
              (() => {
                const { reportHybridExposure: e } = H.abra,
                  a = ue(ie);
                return (
                  a && e(ie),
                  (() => {
                    const { reportHybridExposure: e } = H.abra;
                    ue(ce) && e(ce);
                  })(),
                  "1_Variant" === a
                );
              })()
            );
            var e, a, t;
          },
          ye = () => !(0, ne._7)() && !(0, ne.Xj)() && le(),
          ge = () =>
            ye() &&
            (() => {
              const { reportExposure: e } = H.abra,
                a = ue(de);
              return (
                a && e(de),
                (() => {
                  const { reportExposure: e } = H.abra;
                  ue(me) && e(me);
                })(),
                "1_Interstitial" === a
              );
            })();
        const he = (e) => {
            let { hideView: a, onClose: t } = e;
            const s = (0, V.Z)(),
              r = s.getVariant(Q),
              n = s.getVariant(X.w);
            return (
              (0, o.useEffect)(() => {
                r && s.reportExposure(Q);
              }, [r]),
              (0, o.useEffect)(() => {
                n && s.reportExposure(X.w);
              }, [n]),
              o.createElement(
                "div",
                {
                  className: P()("adMomentPrefetch-module_container__wSCXn", {
                    "adMomentPrefetch-module_hidden__jTopd": a,
                  }),
                },
                o.createElement(Z.Z, {
                  hideView: a,
                  id: "intsl",
                  position: "intsl",
                  onClose: t,
                  isSpecialAdUnit: !0,
                  enableCountdown: r === J,
                  ctaCopy: "Continue to Wordle",
                  delaySkip: n === X.$,
                })
              )
            );
          },
          be = () => {
            const e = (0, b.D)(L.rp),
              a = (0, b.D)(L.wJ);
            return {
              trackWordleClick: (t) => {
                let {
                  region: o,
                  elementLabel: s,
                  name: r,
                  label: n,
                  context: l,
                  useBeacon: i,
                } = t;
                (0, H.LW)({
                  context: l || e,
                  element: s ? { name: "wordle", label: s } : null,
                  name: r || a,
                  label: n,
                  region: o,
                  useBeacon: i,
                });
              },
              trackWordleImpression: (a, t, o) => {
                (0, H.hX)(a, t, o, e);
              },
            };
          };
        var fe,
          we = t(54988);
        function ke(e, a) {
          return function (t) {
            return (function (e, a, t) {
              var o, s;
              const r = null == e ? void 0 : e[a];
              let n = [];
              return (
                null == r ||
                  null === (o = r.if) ||
                  void 0 === o ||
                  o.forEach((e) => {
                    e.hasOwnProperty("abtest_partition") &&
                      (n = e.abtest_partition);
                  }),
                n && (null === (s = n) || void 0 === s ? void 0 : s.includes(t))
              );
            })(t, e, a);
          };
        }
        function ve(e) {
          const a = (function (e) {
              if (e && e.search) {
                const a = e.search("date-override"),
                  t = e.substring(a);
                return new URLSearchParams(t).get("date-override");
              }
            })(e),
            t = a ? new Date(a).getTime() : new Date().getTime();
          return t >= we.ne && t < we.cr;
        }
        ke(we.I, we.Vb), ke(we.DQ, we.Vb), ke(we.XS, we.Vb);
        const _e =
            (null === (fe = window.env) || void 0 === fe ? void 0 : fe.name) ||
            "dev",
          Ee = (e) => e[_e] || e.dev,
          xe = Ee({
            prod: "https://myaccount.nytimes.com",
            stg: "https://myaccount.stg.nytimes.com",
            dev: "https://myaccount.dev.nytimes.com",
          }),
          Ce = Ee({
            prod: "/subscription/games?campaignId=8RRFW",
            stg: "https://www.stg.nytimes.com/subscription/games?campaignId=8RRFW",
            dev: "https://www.stg.nytimes.com/subscription/games?campaignId=8RRFW",
          }),
          Se = Ee({
            prod: "/subscription/games-offer?campaignId=8YUQL",
            stg: "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL",
            dev: "https://www.stg.nytimes.com/subscription/games-offer?campaignId=8YUQL",
          }),
          ze = Ee({
            prod: "/wordle.html",
            stg: "".concat(window.location.origin, "/wordle.html"),
            dev: "https://local.nytimes.com/wordle.html",
          }),
          Ne = ""
            .concat(window.location.origin)
            .concat(window.location.pathname),
          Te = (e) =>
            ""
              .concat(Ne, "#source=")
              .concat(e ? "wordleRegiwallCongrats" : "wordleRegiwallStats"),
          je = (e) => {
            const a = encodeURIComponent(e);
            return "".concat(Se, "&EXIT_URI=").concat(a);
          },
          Oe = encodeURIComponent(Ne),
          Pe =
            "/auth/enter-email?response_type=cookie&client_id=games&application=nyt-lires",
          De = "".concat(xe).concat(Pe, "&redirect_uri=").concat(Oe),
          Ie = (e) =>
            ""
              .concat(xe)
              .concat(Pe, "&display=,")
              .concat(e, "&redirect_uri=")
              .concat(Oe),
          Ae = encodeURIComponent("".concat(Se, "&EXIT_URI=").concat(Oe)),
          Le = (e) =>
            ""
              .concat(xe)
              .concat(Pe, "&asset=")
              .concat(e, "&redirect_uri=")
              .concat(Ae),
          Me = "".concat(xe, "/auth/logout?redirect_uri=").concat(ze),
          Re = new Date() >= new Date("3/4/2024 10:00 AM EST");
        var Be = t(89064),
          We = t(86128);
        const He = window.isHybridWebView,
          Ge = function (e) {
            let a =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ((0, ne._7)()) {
              const e = "nytimes://login";
              (0, We.Hu)(e);
            } else if (He) {
              var t;
              null === (t = window.NativeBridge) ||
                void 0 === t ||
                t.gamesAuthenticateUser("login").then((t) => {
                  var o;
                  const s =
                      null === (o = t.values) || void 0 === o
                        ? void 0
                        : o.aborted,
                    r = !0 === s || "true" === s;
                  t.success &&
                    !r &&
                    (a
                      ? (e((0, S.SH)()),
                        e((0, v.h7)("stats")),
                        e(
                          (0, v.fz)({
                            text: "You are now logged in to your Times account.",
                            duration: 2e3,
                            isSystem: !0,
                          })
                        ))
                      : e((0, S.SH)()));
                });
            }
          };
        function Fe(e) {
          let {
            children: a,
            lireOfferAsset: t,
            styles: s = "",
            trackEvent: r,
            handleClick: n,
          } = e;
          const l = (0, b.z)(),
            i = (0, Be.Z)("loginOffer"),
            c =
              null === H.abra || void 0 === H.abra
                ? void 0
                : H.abra.getVariant("MAPS_wordleRegisNewsletterOptIn_0324"),
            u = window.isHybridWebView;
          let d = De;
          t && i && !(0, ne._7)() ? (d = Le(t)) : null != c && (d = Ie(c));
          const m = u ? void 0 : d,
            p = (e) => {
              const { eventName: a, sendContext: t, element: o } = e;
              l((0, v.uO)(a, t, o));
            },
            y = () => {
              n && n();
            };
          return (0, ne._7)() || u
            ? o.createElement(
                "button",
                {
                  type: "button",
                  className: s,
                  onClick: () => {
                    r && p(r), y(), Ge(l);
                  },
                },
                a
              )
            : o.createElement(
                "a",
                {
                  className: s,
                  href: m,
                  onClick: () => {
                    r && p(r), y();
                  },
                },
                a
              );
        }
        var qe = t(95280),
          Ve = t(64145),
          Ue = t(18540),
          Ze = t(9861);
        const Xe = () =>
            o.createElement("div", {
              className: "LargeCTABanner-module_inlineGames__fenqr",
            }),
          Ke = () =>
            o.createElement(
              "div",
              { className: "LargeCTABanner-module_playButton__if85L" },
              o.createElement(Ze.Z, { icon: "crossword-app" }),
              o.createElement("span", null, "Play in the NYT Games App")
            ),
          Ye = () =>
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "p",
                { className: "LargeCTABanner-module_headline__Kv4ow" },
                "Play in the",
                o.createElement("br", null),
                "NYT Games App"
              ),
              o.createElement(Xe, null),
              o.createElement(Ke, null)
            );
        var Qe = (e) => {
            let {
              ctaLink: a,
              newTab: t,
              onVisible: s,
              onClickLink: r,
              positionRelative: n,
            } = e;
            return (
              (0, o.useEffect)(() => {
                s && s();
              }, [s]),
              o.createElement(
                "a",
                {
                  href: a,
                  target: t ? "_blank" : "_self",
                  className: P()("LargeCTABanner-module_banner__Wrm0P", {
                    "LargeCTABanner-module_relative__vctEf": n,
                  }),
                  onClick: r,
                  rel: "noopener noreferrer",
                  "aria-live": "polite",
                  "data-testid": "large-app-cta",
                },
                o.createElement(Ye, null)
              )
            );
          },
          Je = t(75593),
          $e = t(38661),
          ea = "Welcome-module_contentWelcome__TL17B",
          aa = "Welcome-module_contentWelcomeContainer__UO4Ei",
          ta = "Welcome-module_title__uhLqe",
          oa = "Welcome-module_small__gRQGu",
          sa = "Welcome-module_noWrap__ThSVO",
          ra = "Welcome-module_wordleMeta__P_0lJ",
          na = "Welcome-module_back__cUvW3";
        const la = (e) => {
            let { small: a, dayOffset: t } = e;
            const s = (0, b.D)(R.s$),
              r = (0, b.D)(R.u1),
              n = (0, b.D)(C.Hh),
              l = (0, b.D)(C.wt),
              { icon: i, iconAriaLabel: c } = ((e, a, t) => {
                const o = { icon: "--wordle-icon", iconAriaLabel: "wordle" };
                return t
                  ? a > 0 && "IN_PROGRESS" === e
                    ? {
                        icon: "--wordle-progress-".concat(a),
                        iconAriaLabel: "in progress",
                      }
                    : "WIN" === e
                    ? { icon: "--wordle-star", iconAriaLabel: "won" }
                    : "FAIL" === e
                    ? { icon: "--wordle-fail", iconAriaLabel: "lost" }
                    : o
                  : o;
              })(s, r, n),
              u = l
                ? (0, _.Z)(new Date("".concat(l, "T12:00:00")), "MMMM d, yyyy")
                : "Wordle";
            return o.createElement(
              o.Fragment,
              null,
              o.createElement("div", {
                role: "img",
                "aria-label": c,
                "data-testid": i,
                className: P()("Welcome-module_icon__iYwGT", { [oa]: a }),
                style: { backgroundImage: "var(".concat(i, ")") },
              }),
              o.createElement(
                "h1",
                { "data-testid": "title", className: P()(ta, { [oa]: a }) },
                u
              )
            );
          },
          ia = (e) => {
            let { children: a } = e;
            return o.createElement(
              "h2",
              { className: "Welcome-module_subtitle__rL8EE" },
              a
            );
          },
          ca = (e) => {
            let { dayOffset: a, editor: t } = e;
            const s = (0, b.D)(C.Hh);
            if ("number" != typeof a) return null;
            const r = (0, qe.RV)(a).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              n = t && null != a && a >= 506;
            return o.createElement(
              "div",
              { className: "Welcome-module_dateContainer__GTeM2" },
              !s &&
                o.createElement(
                  "h3",
                  { className: "Welcome-module_date__Fmbmx" },
                  r
                ),
              o.createElement("p", { className: ra }, "No. ", a),
              n && o.createElement("p", { className: ra }, "Edited by ", t)
            );
          },
          ua = (e) => {
            let { buttons: a } = e;
            const t = (0, b.D)(C.Hh),
              s = ve(document.location.href);
            return o.createElement(
              "div",
              { className: "Welcome-module_buttonContainer__K4GEw" },
              a
                .filter((e) => !e.hide)
                .map((e) => {
                  let {
                    onClick: a,
                    text: r,
                    secondary: n,
                    isLogin: l,
                    href: i,
                  } = e;
                  const c = P()("Welcome-module_button__ZG0Zh", {
                    "Welcome-module_secondary__fv3cc": n,
                    "Welcome-module_large__bla_O": t,
                    "Welcome-module_gameSaleStyle__duVA4": s,
                  });
                  return i
                    ? o.createElement(
                        "a",
                        { href: i, key: r, className: c, onClick: a },
                        r
                      )
                    : l
                    ? o.createElement(
                        Fe,
                        {
                          key: r,
                          styles: c,
                          handleClick: () => {
                            a && a(),
                              (null === H.abra || void 0 === H.abra
                                ? void 0
                                : H.abra.getVariant(
                                    "MAPS_wordleRegisNewsletterOptIn_0324"
                                  )) &&
                                H.abra.reportExposure(
                                  "MAPS_wordleRegisNewsletterOptIn_0324"
                                );
                          },
                        },
                        r
                      )
                    : o.createElement(
                        "button",
                        {
                          key: r,
                          "data-testid": r,
                          type: "button",
                          onClick: a,
                          className: P()(c),
                        },
                        r
                      );
                })
            );
          },
          da = (e) => "You’ve made ".concat(e, " of 6 guesses."),
          ma = (e) =>
            "You solved it in "
              .concat(e, " ")
              .concat(e > 1 ? "guesses" : "guess", "."),
          pa = () => {
            const e = (0, b.D)(C.Hh),
              a = (0, U.T4)() && !e,
              { winHeight: t } = (0, $e.Z)();
            return a && t > 667;
          };
        function ya(e) {
          let { closeMoment: a, trackLink: t } = e;
          const s = (0, b.z)();
          return o.createElement(
            "div",
            { className: "Note-module_container__TXglF" },
            o.createElement(
              "div",
              { className: "Note-module_note__lbrbA" },
              o.createElement(
                "div",
                { className: "Note-module_statsIcon__RRy1C" },
                o.createElement("img", {
                  alt: "Wordle",
                  style: { content: "var(--wordle-stats-mini)" },
                })
              ),
              o.createElement(
                "div",
                null,
                o.createElement(
                  "div",
                  { className: "Note-module_noteHeader__jt707" },
                  "NOTE"
                ),
                o.createElement(
                  "div",
                  { className: "Note-module_noteDescription__QmvW2" },
                  "See your stats wherever you play."
                ),
                o.createElement(
                  "div",
                  { className: "Note-module_noteSummary__niOPe" },
                  "To see your stats in the app, go to where you normally play and link them to a free account."
                ),
                o.createElement(
                  "button",
                  {
                    className: "Note-module_moreLink__uzCuy",
                    type: "button",
                    onClick: () => {
                      a(), s((0, v.oh)("linkInfo")), t();
                    },
                  },
                  "Tell me more"
                )
              )
            )
          );
        }
        var ga = t(85171),
          ha = t(43401);
        const ba = () =>
            !(0, ne._7)() &&
            (!window.gamesAppPlatform ||
              (0, ha.Cb)(window.gamesAppVersion, "5.15")),
          fa = () =>
            ba() ? ["wordle-archive", "spelling-bee"] : ["spelling-bee"];
        var wa = t(78961),
          ka = {
            flexContainer: "Header-module_flexContainer__ySFsd",
            expandToRow:
              "Header-module_expandToRow__nhW3k Header-module_flexContainer__ySFsd",
            mobileColumn: "Header-module_mobileColumn___nCFN",
            "visually-hidden": "Header-module_visually-hidden__cGU4S",
            flexCenter: "Header-module_flexCenter__B5aPn",
            regiwallText: "Header-module_regiwallText__iNXVa",
            regiwallText_hideDTMC: "Header-module_regiwallText_hideDTMC__mzUug",
            regiwallText_heading: "Header-module_regiwallText_heading__JhUCz",
            regiwallText_heading_condensed:
              "Header-module_regiwallText_heading_condensed__Tv8Qb",
            regiwallText_subheading:
              "Header-module_regiwallText_subheading__x0Sp_",
            regiwallText_link: "Header-module_regiwallText_link__grL8P",
            icon: "Header-module_icon__g9flM",
            icon_wordle: "Header-module_icon_wordle__Ft04D",
            icon_hideDTMC: "Header-module_icon_hideDTMC__xdck8",
            icon_congrats: "Header-module_icon_congrats__QjMFb",
            icon_fail: "Header-module_icon_fail__UL_9n",
            slideDown: "Header-module_slideDown__CG7bJ",
            flyIn: "Header-module_flyIn__Jf7HG",
            flyOut: "Header-module_flyOut__mos_H",
            fadeIn: "Header-module_fadeIn__B2QY9",
          };
        let va = (function (e) {
          return (
            (e[(e.stats = 0)] = "stats"), (e[(e.regiwall = 1)] = "regiwall"), e
          );
        })({});
        function _a(e) {
          let { type: a, isEndScreen: t, gameStatus: s } = e;
          const r = (0, b.z)(),
            [n, l] = (0, o.useState)("Wordle"),
            [i, c] = (0, o.useState)(""),
            [u, d] = (0, o.useState)(ka.icon_wordle),
            [m, p] = (0, o.useState)(ka.regiwallText_heading);
          return (
            (0, o.useEffect)(() => {
              r((0, wa.LQ)("IN_PROGRESS" !== s));
            }, []),
            (0, o.useEffect)(() => {
              const e = new URLSearchParams(window.location.search).get(
                "source"
              );
              t &&
                ("WIN" === s || (e && e === Va[Va.wordleRegiwallCongrats])
                  ? (c(
                      a === va.stats
                        ? ""
                        : "Want to see your stats and streaks?"
                    ),
                    l("Congratulations!"),
                    d(ka.icon_congrats),
                    p(ka.regiwallText_heading))
                  : "FAIL" === s
                  ? (c(
                      a === va.stats
                        ? ""
                        : "Want to see your stats and streaks?"
                    ),
                    l("Thanks for playing today!"),
                    d(ka.icon_fail),
                    p(ka.regiwallText_heading))
                  : "IN_PROGRESS" === s &&
                    a === va.regiwall &&
                    (l("Here to see your stats and streaks?"),
                    c(""),
                    p(ka.regiwallText_heading_condensed))),
                t ||
                  (c(""),
                  a === va.regiwall
                    ? (l("Here to see your stats and streaks?"),
                      c(""),
                      p(ka.regiwallText_heading_condensed))
                    : a === va.stats &&
                      (l("Wordle"),
                      d(ka.icon_wordle),
                      p(ka.regiwallText_heading),
                      c("")));
            }, []),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: P()(ka.flexCenter) },
                o.createElement("div", { className: P()(ka.icon, u) })
              ),
              o.createElement(
                "div",
                { className: P()(ka.flexCenter) },
                o.createElement("h1", { className: P()(ka.regiwallText, m) }, n)
              ),
              i &&
                o.createElement(
                  "div",
                  { className: P()(ka.flexCenter) },
                  o.createElement(
                    "h2",
                    {
                      className: P()(
                        ka.regiwallText,
                        ka.regiwallText_subheading
                      ),
                    },
                    i
                  )
                )
            )
          );
        }
        const Ea = { width: "20", height: "20", viewBox: "0 0 24 24" },
          xa = { width: "24", height: "24", viewBox: "4 4 24 24" },
          Ca = { width: "28", height: "28", viewBox: "4 4 24 24" };
        var Sa = (e) => {
          const [a, t] = (0, o.useState)(xa),
            s = "help" === e || "statistics" === e || "settings" === e;
          return (
            (0, o.useEffect)(() => {
              function e() {
                let e = xa;
                window.matchMedia("(min-width: 768px)").matches && (e = Ca),
                  t(e);
              }
              return (
                s ? (e(), window.addEventListener("resize", e)) : t(Ea),
                () => {
                  s && window.removeEventListener("resize", e);
                }
              );
            }, []),
            a
          );
        };
        const za = {
          help: "M14.8333 23H17.1666V20.6667H14.8333V23ZM15.9999 4.33334C9.55992 4.33334 4.33325 9.56001 4.33325 16C4.33325 22.44 9.55992 27.6667 15.9999 27.6667C22.4399 27.6667 27.6666 22.44 27.6666 16C27.6666 9.56001 22.4399 4.33334 15.9999 4.33334ZM15.9999 25.3333C10.8549 25.3333 6.66659 21.145 6.66659 16C6.66659 10.855 10.8549 6.66668 15.9999 6.66668C21.1449 6.66668 25.3333 10.855 25.3333 16C25.3333 21.145 21.1449 25.3333 15.9999 25.3333ZM15.9999 9.00001C13.4216 9.00001 11.3333 11.0883 11.3333 13.6667H13.6666C13.6666 12.3833 14.7166 11.3333 15.9999 11.3333C17.2833 11.3333 18.3333 12.3833 18.3333 13.6667C18.3333 16 14.8333 15.7083 14.8333 19.5H17.1666C17.1666 16.875 20.6666 16.5833 20.6666 13.6667C20.6666 11.0883 18.5783 9.00001 15.9999 9.00001Z",
          settings:
            "M25.52 17.2534C25.5733 16.8534 25.6 16.44 25.6 16C25.6 15.5734 25.5733 15.1467 25.5067 14.7467L28.2133 12.64C28.4533 12.4534 28.52 12.0934 28.3733 11.8267L25.8133 7.40004C25.6533 7.10671 25.32 7.01338 25.0267 7.10671L21.84 8.38671C21.1733 7.88004 20.4667 7.45338 19.68 7.13338L19.2 3.74671C19.1467 3.42671 18.88 3.20004 18.56 3.20004H13.44C13.12 3.20004 12.8666 3.42671 12.8133 3.74671L12.3333 7.13338C11.5467 7.45338 10.8267 7.89338 10.1733 8.38671L6.98665 7.10671C6.69332 7.00004 6.35998 7.10671 6.19998 7.40004L3.65332 11.8267C3.49332 12.1067 3.54665 12.4534 3.81332 12.64L6.51998 14.7467C6.45332 15.1467 6.39998 15.5867 6.39998 16C6.39998 16.4134 6.42665 16.8534 6.49332 17.2534L3.78665 19.36C3.54665 19.5467 3.47998 19.9067 3.62665 20.1734L6.18665 24.6C6.34665 24.8934 6.67998 24.9867 6.97332 24.8934L10.16 23.6134C10.8267 24.12 11.5333 24.5467 12.32 24.8667L12.8 28.2534C12.8667 28.5734 13.12 28.8 13.44 28.8H18.56C18.88 28.8 19.1467 28.5734 19.1867 28.2534L19.6667 24.8667C20.4533 24.5467 21.1733 24.12 21.8267 23.6134L25.0133 24.8934C25.3067 25 25.64 24.8934 25.8 24.6L28.36 20.1734C28.52 19.88 28.4533 19.5467 28.2 19.36L25.52 17.2534ZM16 20.8C13.36 20.8 11.2 18.64 11.2 16C11.2 13.36 13.36 11.2 16 11.2C18.64 11.2 20.8 13.36 20.8 16C20.8 18.64 18.64 20.8 16 20.8Z",
          backspace:
            "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
          close:
            "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          share:
            "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
          statistics:
            "M20.6666 14.8333V5.5H11.3333V12.5H4.33325V26.5H27.6666V14.8333H20.6666ZM13.6666 7.83333H18.3333V24.1667H13.6666V7.83333ZM6.66659 14.8333H11.3333V24.1667H6.66659V14.8333ZM25.3333 24.1667H20.6666V17.1667H25.3333V24.1667Z",
        };
        function Na(e) {
          let {
            icon: a,
            onClick: t,
            disabled: s = !1,
            id: r,
            fillColor: n,
          } = e;
          const l = Sa(a);
          return o.createElement(
            "svg",
            {
              id: r,
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              height: l.height,
              viewBox: l.viewBox,
              width: l.width,
              className: "game-icon",
              onClick: t,
              "data-testid": "icon-".concat(a),
            },
            o.createElement("path", {
              fill:
                n ||
                (s
                  ? "var(--icon-disabled)"
                  : "share" === a
                  ? "var(--white)"
                  : "var(--color-tone-1)"),
              d: za[a],
            })
          );
        }
        var Ta = t(13628);
        const ja = (e, a, t, o) => {
          try {
            const t = o.target,
              s = document.createElement("textarea");
            (s.style.position = "absolute"),
              (s.style.left = "-1000px"),
              (s.style.top = "-1000px"),
              (s.value = e.text),
              t.parentElement.appendChild(s),
              s.select(),
              document.execCommand("copy"),
              t.parentElement.removeChild(s),
              a();
          } catch (e) {
            t(), console.warn("Share failed", e);
          }
        };
        var Oa = t(6249),
          Pa = {
            container: "NextGameCTA-module_container__Pu1ub",
            cardEmphasis: "NextGameCTA-module_cardEmphasis__LJ1PN",
            promoIcon: "NextGameCTA-module_promoIcon__pvybW",
            cardText: "NextGameCTA-module_cardText__kCbPP",
            arrow: "NextGameCTA-module_arrow__GRqP_",
            cardDescription: "NextGameCTA-module_cardDescription__bYdbb",
            newLabel: "NextGameCTA-module_newLabel__daqZm",
            spellingBeeCard: "NextGameCTA-module_spellingBeeCard__FsAXc",
            spellingBeeIcon: "NextGameCTA-module_spellingBeeIcon__K8JGw",
            wordleArchiveCard: "NextGameCTA-module_wordleArchiveCard__foyIl",
            wordleArchiveIcon: "NextGameCTA-module_wordleArchiveIcon__VXYfT",
          };
        function Da(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function Ia(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? Da(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : Da(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const Aa = {
            selectUrl: () => "/puzzles/spelling-bee",
            iconClass: Pa.spellingBeeIcon,
            cardClass: Pa.spellingBeeCard,
            ctaText: "Play today’s Spelling Bee",
            trackingData: { context: "spelling-bee", label: "next-game" },
          },
          La = {
            selectUrl: () => "/games/wordle/archive",
            iconClass: Pa.wordleArchiveIcon,
            cardClass: Pa.wordleArchiveCard,
            containerClass: Pa.wordleArchiveContainer,
            ctaText: "Explore the Wordle archive",
            trackingData: { label: "archive", region: "congrats" },
          },
          Ma = {
            "spelling-bee": Aa,
            "wordle-archive": La,
            "wordle-archive-congrats": Ia(
              Ia({}, La),
              {},
              {
                ctaText: "Keep playing the Wordle archive",
                isNew: !1,
                containerClass: Pa.wordleArchiveCongratsContainer,
                selectUrl: C.UQ,
              }
            ),
          };
        function Ra(e) {
          let { nextGame: a, promoParam: t = "" } = e;
          const {
              selectUrl: s,
              ctaText: r,
              cardClass: n,
              iconClass: l,
              containerClass: i,
              isNew: c,
              trackingData: u,
            } = Ma[a],
            d = (0, b.D)(s),
            { trackWordleClick: m, trackWordleImpression: p } = be(),
            { label: y, context: g, region: h } = u;
          return (
            o.useEffect(() => {
              p("next-game", "wordle", y);
            }, []),
            o.createElement(
              "div",
              { className: P()(Pa.container, i), "data-testid": "nextGameCta" },
              o.createElement(
                "a",
                {
                  href: (0, Oa.Z)("".concat(d).concat(t)),
                  className: P()(Pa.cardEmphasis, n),
                  onClick: () => {
                    m({
                      elementLabel: y,
                      context: g,
                      useBeacon: !0,
                      region: h,
                    });
                  },
                },
                o.createElement("span", {
                  className: P()(Pa.promoIcon, l),
                  "aria-hidden": "true",
                }),
                o.createElement(
                  "div",
                  { className: Pa.cardText },
                  o.createElement(
                    "span",
                    { className: Pa.cardDescription },
                    r,
                    c &&
                      o.createElement("span", { className: Pa.newLabel }, "NEW")
                  )
                ),
                o.createElement("span", { className: Pa.arrow })
              )
            )
          );
        }
        var Ba = {
          container: "Footer-module_container__Xnn0r",
          icon: "Footer-module_icon__S_vdW",
          promoIcon: "Footer-module_promoIcon__z2T7Q",
          textContainer: "Footer-module_textContainer__LWkeW",
          bold: "Footer-module_bold__g62FY",
          subText: "Footer-module_subText__cQvRy",
          title: "Footer-module_title__CzTdf",
          line1: "Footer-module_line1__lLInr",
          line2: "Footer-module_line2__m1O4_",
          buttonsContainer: "Footer-module_buttonsContainer__YNxCQ",
          moreLink: "Footer-module_moreLink__gHL9Q",
          loginButton: "Footer-module_loginButton__abKD3",
          promoButton: "Footer-module_promoButton__UcPmY",
          sbButtonFooter: "Footer-module_sbButtonFooter__X3LsB",
          sbPlayButton: "Footer-module_sbPlayButton__kNigc",
          shareButton: "Footer-module_shareButton__cHprS",
          shareIcon: "Footer-module_shareIcon__wOwOt",
          shareText: "Footer-module_shareText__m7yUa",
          bottomSheet: "Footer-module_bottomSheet__XnX4f",
          bottomSheetContainer: "Footer-module_bottomSheetContainer__rNfdr",
          archive: "Footer-module_archive__eiDL6",
          nextWordle: "Footer-module_nextWordle__Bzpb0",
          buttonContainer: "Footer-module_buttonContainer__hP4ut",
          mediumText: "Footer-module_mediumText__jHtfj",
        };
        function Wa(e) {
          let { hideNextGameCTA: a = !1, nextGames: t } = e;
          const r = (0, b.D)(h.F_) ? "var(--black)" : "",
            n = (0, b.D)(C.Hh),
            l = (0, b.z)(),
            i = (0, b.D)(R.gO),
            c = (0, ha.x0)() ? "?embed=ios&entry=playTab" : "",
            { trackWordleClick: u } = be();
          return o.createElement(
            "div",
            { className: P()(Ba.bottomSheet, Ba.sbButtonFooter) },
            o.createElement(
              "div",
              { className: P()(Ba.bottomSheetContainer, { [Ba.archive]: n }) },
              o.createElement(
                "button",
                {
                  type: "button",
                  className: Ba.shareButton,
                  onClick: (e) => {
                    e.preventDefault(), e.stopPropagation();
                    u({ elementLabel: "share" }),
                      (function (e, a, t, o) {
                        var r, n;
                        (0, ha.Og)()
                          ? ((r = null == e ? void 0 : e.text),
                            null === (n = window.NativeBridge) ||
                              void 0 === n ||
                              n.share(r, "", ""))
                          : "android" === window.newsreaderAppPlatform
                          ? ja(e, a, t, o)
                          : (function (e, a, t) {
                              (0, s.K1)() &&
                              !(0, ne.vU)() &&
                              void 0 !== navigator.share &&
                              navigator.canShare &&
                              navigator.canShare(e)
                                ? navigator.share(e).catch(() => {})
                                : Ta.nx(e.text)
                                    .then(a, t)
                                    .catch((e) => {
                                      t(), console.warn("Share failed", e);
                                    });
                            })(e, a, t);
                      })(
                        i,
                        () => {
                          l(
                            (0, v.fz)({
                              text: "Copied results to clipboard",
                              duration: 2e3,
                              isSystem: !0,
                            })
                          );
                        },
                        () => {
                          l(
                            (0, v.fz)({
                              text: "Share failed",
                              duration: 2e3,
                              isSystem: !0,
                            })
                          );
                        },
                        e
                      );
                  },
                },
                o.createElement("span", { className: Ba.shareText }, "Share"),
                o.createElement(Na, {
                  id: Ba.shareIcon,
                  icon: "share",
                  fillColor: r,
                })
              ),
              !a &&
                t.map((e) =>
                  o.createElement(Ra, { key: e, nextGame: e, promoParam: c })
                )
            )
          );
        }
        var Ha = {
          botLink: "BotLink-module_botLink__uRdNy",
          botIcon: "BotLink-module_botIcon__fF161",
          largeIcon: "BotLink-module_largeIcon__UPgbp",
          botLinkContent: "BotLink-module_botLinkContent__RR4ri",
          botLinkHref: "BotLink-module_botLinkHref__F6jaf",
          botLinkHref__gamesApp: "BotLink-module_botLinkHref__gamesApp__szK58",
          archive: "BotLink-module_archive__KK8aj",
          mobileOnly: "BotLink-module_mobileOnly__XMO4b",
        };
        const Ga = "5.5";
        function Fa() {
          const e = !!window.gamesAppPlatform,
            { trackWordleClick: a } = be(),
            t = (0, b.D)(C.Hh),
            s = (0, b.D)(C.wt),
            r = t
              ? "Did you beat the bot?"
              : "WordleBot gives an analysis of your guesses.",
            n = t
              ? "See your analysis for ".concat(
                  (0, _.Z)(new Date("".concat(s, "T12:00:00")), "MMMM d, yyyy")
                )
              : "Did you beat the bot? ›",
            l = "/interactive/2022/upshot/wordle-bot.html",
            i = t ? "".concat(l, "?date=").concat(s) : l;
          return o.createElement(
            "a",
            {
              href: i,
              className: Ha.botLink,
              onClick: () => {
                a({ elementLabel: "wordlebot" });
              },
            },
            o.createElement("div", {
              className: P()(Ha.botIcon, { [Ha.largeIcon]: t }),
              "aria-label": "wordlebot",
              role: "img",
            }),
            o.createElement(
              "div",
              { className: P()(Ha.botLinkContent, { [Ha.archive]: t }) },
              o.createElement(
                "p",
                null,
                r,
                o.createElement("br", null),
                o.createElement(
                  "span",
                  {
                    className: P()(
                      Ha.botLinkHref,
                      e ? Ha.botLinkHref__gamesApp : ""
                    ),
                  },
                  n
                )
              )
            )
          );
        }
        var qa = {
          flexContainer: "RegiwallPrompt-module_flexContainer__kQLQ3",
          expandToRow:
            "RegiwallPrompt-module_expandToRow__d8iMO RegiwallPrompt-module_flexContainer__kQLQ3 RegiwallPrompt-module_flexContainer__kQLQ3",
          mobileColumn: "RegiwallPrompt-module_mobileColumn__ralDy",
          "visually-hidden": "RegiwallPrompt-module_visually-hidden__krkC5",
          flexCenter: "RegiwallPrompt-module_flexCenter__uO4pd",
          regiwallText: "RegiwallPrompt-module_regiwallText__sKAdI",
          regiwallText_hideDTMC:
            "RegiwallPrompt-module_regiwallText_hideDTMC__gBxM6",
          regiwallText_heading:
            "RegiwallPrompt-module_regiwallText_heading__NVhzp",
          regiwallText_heading_condensed:
            "RegiwallPrompt-module_regiwallText_heading_condensed__D4F3u",
          regiwallText_subheading:
            "RegiwallPrompt-module_regiwallText_subheading__deF_s",
          regiwallText_link: "RegiwallPrompt-module_regiwallText_link__S_3Z6",
          parentContainer: "RegiwallPrompt-module_parentContainer__liHHb",
          regiButton: "RegiwallPrompt-module_regiButton__uaOG2",
          regiButtonContainer:
            "RegiwallPrompt-module_regiButtonContainer__g7g5M",
          loginButton: "RegiwallPrompt-module_loginButton__R6IJg",
          bot: "RegiwallPrompt-module_bot__ddO9Q",
          slideDown: "RegiwallPrompt-module_slideDown__wSRd2",
          flyIn: "RegiwallPrompt-module_flyIn__yAmAB",
          flyOut: "RegiwallPrompt-module_flyOut__IXBqf",
          fadeIn: "RegiwallPrompt-module_fadeIn__OyRiD",
        };
        let Va = (function (e) {
          return (
            (e[(e.wordleRegiwallCongrats = 0)] = "wordleRegiwallCongrats"),
            (e[(e.wordleRegiwallStats = 1)] = "wordleRegiwallStats"),
            e
          );
        })({});
        function Ua(e) {
          let { hideNextGameCTA: a = !1 } = e;
          const t = (0, b.z)(),
            s = !(0, b.D)(M.PE),
            r = (0, b.D)(R.s$),
            n = !!window.gamesAppPlatform,
            { trackWordleClick: l, trackWordleImpression: i } = be(),
            { reportExposure: c } = (0, V.Z)(),
            u = !n || (n && (0, ha.Cb)(window.gamesAppVersion, Ga)),
            d = !(window.gamesAppPlatform || window.newsreaderAppPlatform),
            m = fa();
          (0, o.useEffect)(() => {
            i("softregiwall", "wordle", "congrats-modal");
          }, []);
          const p = (e) => {
              d
                ? t((0, v.h7)("loginPrompt", !s))
                : ((0, ne._7)() &&
                    window.history.replaceState(
                      null,
                      "",
                      ((e) => {
                        let a = window.location.href;
                        const t = new URLSearchParams(window.location.search),
                          o = t.get("source");
                        return (
                          0 === t.size
                            ? (a = "".concat(a, "?source=").concat(Va[e]))
                            : t.size > 0 &&
                              !o &&
                              (a = "".concat(a, "&source=").concat(Va[e])),
                          a
                        );
                      })(e)
                    ),
                  Ge(t, !0));
            },
            y = n ? "stats" : "stats-regiwall";
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: P()(qa.flexCenter) },
              o.createElement(
                "div",
                { className: P()(qa.parentContainer) },
                o.createElement(_a, {
                  type: va.regiwall,
                  isEndScreen: s,
                  gameStatus: r,
                }),
                o.createElement(
                  "button",
                  {
                    type: "button",
                    className: P()(qa.regiButton),
                    onClick: () => {
                      l({
                        elementLabel: "register",
                        region: s ? "congrats" : y,
                      }),
                        p(
                          s ? Va.wordleRegiwallCongrats : Va.wordleRegiwallStats
                        );
                    },
                  },
                  o.createElement("span", null, "Create a free account")
                ),
                o.createElement(
                  "button",
                  {
                    className: P()(qa.loginButton),
                    type: "button",
                    onClick: () => {
                      l({
                        elementLabel: "log-in-stats",
                        region: s ? "congrats" : "stats",
                      }),
                        p(
                          s ? Va.wordleRegiwallCongrats : Va.wordleRegiwallStats
                        );
                    },
                  },
                  o.createElement(
                    "h3",
                    { className: P()(qa.regiwallText, qa.regiwallText_link) },
                    "Already Registered? Log In"
                  )
                ),
                u &&
                  o.createElement(
                    "div",
                    { className: qa.flexCenter },
                    o.createElement(
                      "div",
                      { className: P()(qa.bot, qa.flexCenter) },
                      o.createElement(Fa, null)
                    )
                  ),
                o.createElement(Wa, { hideNextGameCTA: a, nextGames: m })
              )
            )
          );
        }
        var Za = {
          spinner: "Spinner-module_spinner__yyUcI",
          spin: "Spinner-module_spin__htETY",
        };
        function Xa(e) {
          let { circleColor: a = "#DFDFDF", barColor: t = "#959595" } = e;
          return o.createElement(
            "svg",
            {
              className: Za.spinner,
              "data-testid": "spinner",
              width: "82",
              height: "82",
              viewBox: "0 0 82 82",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("circle", {
              cx: "41",
              cy: "41",
              r: "40.0391",
              stroke: a,
              strokeWidth: "1.92188",
            }),
            o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19.4763 73.6983L18.4497 75.3237C24.8956 79.5452 32.6028 82 40.8834 82C62.8396 82 80.7649 64.7413 81.833 43.05H79.9087C78.8425 63.6793 61.778 80.0781 40.8834 80.0781C32.9802 80.0781 25.6251 77.732 19.4763 73.6983Z",
              fill: t,
            })
          );
        }
        var Ka = t(84510),
          Ya = t(52787),
          Qa = t(71670),
          Ja = t(23153),
          $a = t(73961),
          et = {
            tile: "Tile-module_tile__UWEHN",
            small: "Tile-module_small__dKW39",
            PopIn: "Tile-module_PopIn__CmX51",
            FlipIn: "Tile-module_FlipIn__PCdh1",
            FlipOut: "Tile-module_FlipOut__xeJcb",
          };
        const at = {
            unknown: "unknown",
            absent: "absent",
            present: "present in another position",
            correct: "correct",
            empty: "empty",
            tbd: "tbd",
          },
          tt = (e, a, t, o) => {
            const s = (0, qe.xw)(t + 1),
              r = null == a ? void 0 : a.toUpperCase();
            return o
              ? "".concat(s, " letter, ").concat(r, ", ").concat(e)
              : r
              ? "".concat(s, " letter, ").concat(r)
              : "".concat(s, " letter, empty");
          };
        function ot(e) {
          let {
            letter: a,
            letterIndex: t,
            evaluation: s,
            flipDelay: r = 0,
            onFlipEnd: n,
            small: l = !1,
            isAriaLiveActive: i = !1,
          } = e;
          const [c, u] = o.useState("idle"),
            [d, m] = o.useState(!1),
            p = o.useRef(!1);
          o.useEffect(() => {
            p.current && a && u("pop"), (p.current = !0);
          }, [a]);
          const y = !!s && !d && "flip-in" !== c;
          (0, ga.Z)(() => u("flip-in"), y ? r : null);
          let g = "empty";
          d && s ? (g = s) : a && (g = "tbd");
          const h = tt(at[g], a, t, d && Boolean(s));
          return o.createElement(
            "div",
            {
              className: P()(et.tile, { [et.small]: l }),
              onAnimationEnd: (e) => {
                (0, $a.flushSync)(() => {
                  e.animationName === et.PopIn && "pop" === c && u("idle"),
                    e.animationName === et.FlipIn && (m(!0), u("flip-out")),
                    e.animationName === et.FlipOut && (u("idle"), n && n());
                });
              },
              role: "img",
              "aria-roledescription": "tile",
              "aria-label": h,
              "data-state": g,
              "data-animation": c || "idle",
              "data-testid": "tile",
              "aria-live": i ? "polite" : "off",
            },
            a
          );
        }
        var st = {
          row: "Row-module_row__pwpBq",
          invalid: "Row-module_invalid__RNDXZ",
          Shake: "Row-module_Shake__LeteU",
          win: "Row-module_win__U9cQp",
          Bounce: "Row-module_Bounce__TMGbC",
        };
        function rt(e) {
          const {
              letters: a,
              evaluation: t,
              rowIndex: s,
              length: r,
              invalid: n,
              win: l,
              removeInvalid: i,
              onFlipEnd: c,
            } = e,
            u = (0, b.D)(Ja.Sv) ? 100 : 300;
          return o.createElement(
            "div",
            {
              className: P()(st.row, { [st.invalid]: n }),
              onAnimationEnd: (e) => {
                e.animationName === st.Shake && i();
              },
              role: "group",
              "aria-label": "Row ".concat(s + 1),
            },
            Array(r)
              .fill(!0)
              .map((e, s) =>
                o.createElement(
                  "div",
                  {
                    key: s,
                    className: l ? st.win : "",
                    style: { animationDelay: "".concat(100 * s, "ms") },
                  },
                  o.createElement(ot, {
                    letter: a[s] || "",
                    letterIndex: s,
                    evaluation: t && t[s],
                    flipDelay: s * u,
                    onFlipEnd: s === r - 1 ? c : void 0,
                    isAriaLiveActive: !!a[s],
                  })
                )
              )
          );
        }
        var nt = "Board-module_boardContainer__TBHNL",
          lt = "Board-module_board__jeoPS";
        function it(e) {
          let { adProps: a = {} } = e;
          const { couldHaveAd: t, hasAd: s, pageScrollable: r } = a,
            n = (0, $e.Z)(),
            l = (0, b.D)(R.kr),
            i = (0, b.D)(R.b1),
            c = (0, b.D)(R.u1),
            u = (0, b.D)(Ja.gw),
            d = (0, b.D)(Ja.x9),
            m = (0, b.z)(),
            p = o.useRef(null),
            y = o.useRef(null);
          return (
            o.useEffect(() => {
              (() => {
                const e = p.current,
                  a = y.current;
                if (!e || !a) return;
                const o = t && s ? 300 : 0,
                  r = Math.floor(e.clientHeight * (Ya.yX / Ya.Ac)),
                  n =
                    ((i = r), (c = o), (u = 350), Math.min(Math.max(i, c), u)),
                  l = Math.floor(n / Ya.yX) * Ya.Ac;
                var i, c, u;
                (a.style.width = "".concat(n, "px")),
                  (a.style.height = "".concat(l, "px")),
                  (e.style.overflow = t && s && n === o ? "unset" : "");
              })();
            }, [s, n, r]),
            o.createElement(
              "div",
              { className: nt, ref: p },
              o.createElement(
                "div",
                { className: lt, ref: y },
                Array(Ya.Ac)
                  .fill(!0)
                  .map((e, a) =>
                    o.createElement(rt, {
                      key: a,
                      letters: l[a] || "",
                      length: Ya.yX,
                      evaluation: i[a],
                      rowIndex: a,
                      invalid: a === c && u,
                      win: a === c - 1 && d,
                      removeInvalid: () => m((0, Qa.IV)()),
                      onFlipEnd: () => m((0, Qa.yU)(a)),
                    })
                  )
              )
            )
          );
        }
        var ct = "Loading-module_container__JOli8",
          ut = "Loading-module_loadingContainer__bVEha";
        const dt = 300;
        function mt(e) {
          let { waitFor: a = dt, setBackground: t = "dark" } = e;
          const [s, r] = o.useState(!1),
            n = (0, b.D)(h.cK),
            l = "light" !== t && n,
            i = l ? "#121213" : "#FFF";
          return (
            (0, ga.Z)(() => r(!0), a),
            s
              ? o.createElement(
                  "div",
                  {
                    className: ct,
                    style: i ? { backgroundColor: i } : {},
                    "data-testid": "loading",
                  },
                  o.createElement(
                    "div",
                    { className: ut },
                    o.createElement(Xa, {
                      circleColor: l ? "#666666" : "#DFDFDF",
                      barColor: l ? "#DFDFDF" : "#959595",
                    })
                  )
                )
              : null
          );
        }
        var pt = t(87987),
          yt = t(36797),
          gt = t(3655),
          ht = {
            flexContainer: "DesktopCarousel-module_flexContainer__AmqRp",
            expandToRow:
              "DesktopCarousel-module_expandToRow__xo4y2 DesktopCarousel-module_flexContainer__AmqRp",
            mobileColumn: "DesktopCarousel-module_mobileColumn__pQtYq",
            "visually-hidden": "DesktopCarousel-module_visually-hidden__X6Vfk",
            desktopCarouselParentContainer:
              "DesktopCarousel-module_desktopCarouselParentContainer__aclCi",
            desktopCarouselContainer:
              "DesktopCarousel-module_desktopCarouselContainer__opKBv",
            controlContainer: "DesktopCarousel-module_controlContainer__ZdSC0",
            carouselControl: "DesktopCarousel-module_carouselControl__nmD74",
            next: "DesktopCarousel-module_next__i7Gf0",
            previous: "DesktopCarousel-module_previous__Wb5Bk",
            slideDown: "DesktopCarousel-module_slideDown__dqYov",
            flyIn: "DesktopCarousel-module_flyIn__OZJlV",
            flyOut: "DesktopCarousel-module_flyOut__nXUNW",
            fadeIn: "DesktopCarousel-module_fadeIn__T31Dl",
          };
        const bt = (e) => {
          let { onClick: a, buttonType: t, disabled: s } = e;
          return o.createElement(
            "button",
            {
              type: "button",
              className: P()(ht.carouselControl, ht[t]),
              onClick: a,
              "aria-label": t,
              disabled: s,
            },
            o.createElement(
              "svg",
              { viewBox: "0 0 26 26" },
              o.createElement("circle", {
                cx: "13",
                cy: "13",
                r: "12.5",
                stroke: s ? "#DFDFDF" : "#000000",
              }),
              o.createElement("path", {
                d: "M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998",
                strokeWidth: "1.5",
                fill: "none",
              })
            )
          );
        };
        let ft = (function (e) {
          return (e.NEWS = "news"), (e.GAMES = "games"), e;
        })({});
        function wt(e) {
          let { type: a, numberOfItems: t, children: s } = e;
          const r = a === ft.GAMES ? 5 : 4,
            n = (0, o.useCallback)(
              (e, a) => {
                let { type: o } = a,
                  s = e.firstItem;
                if ("next" === o) {
                  const e = s + r - 1;
                  s = e + r >= t ? s + t - e - 1 : e + 1;
                }
                return (
                  "previous" === o && (s = Math.max(s - r, 0)),
                  "reset" === o && (s = 0),
                  { firstItem: s }
                );
              },
              [r, t]
            ),
            [l, i] = (0, o.useReducer)(n, { firstItem: 0 }),
            c = (0, o.useRef)(null),
            [u, d] = (0, o.useState)(107),
            { firstItem: m } = l,
            p = m + r < t,
            y = m > 0,
            g = p ? () => i({ type: "next" }) : void 0,
            h = y ? () => i({ type: "previous" }) : void 0,
            b = a === ft.NEWS ? 100 / r + 8.25 : 82 / r,
            f = (16 * (r - 1)) / r;
          return (
            (0, o.useEffect)(() => {
              i({ type: "reset" });
            }, [r]),
            (0, o.useEffect)(() => {
              var e;
              const a =
                null === (e = c.current) || void 0 === e
                  ? void 0
                  : e.querySelector("img");
              a && (a.onload = () => d(a.offsetHeight));
            }, [c]),
            o.createElement(
              "div",
              { ref: c, className: ht.desktopCarouselParentContainer },
              u &&
                o.createElement(
                  "div",
                  {
                    role: "group",
                    style: { top: "".concat(u / 2 - 13, "px") },
                    className: ht.controlContainer,
                  },
                  o.createElement(bt, {
                    buttonType: "next",
                    disabled: !p,
                    onClick: g,
                  }),
                  o.createElement(bt, {
                    buttonType: "previous",
                    disabled: !y,
                    onClick: h,
                  })
                ),
              o.createElement(
                "div",
                { style: { overflowX: "hidden" } },
                o.createElement(
                  "div",
                  {
                    className: ht.desktopCarouselContainer,
                    style: ((e, o, s) => ({
                      display: "grid",
                      gridColumnGap: "".concat(16, "px"),
                      transform: "translateX("
                        .concat(e * s, "%) translateX(")
                        .concat(-o, "px)"),
                      gridTemplateColumns:
                        a === ft.GAMES
                          ? "auto"
                          : "repeat("
                              .concat(t, ", calc((1 / ")
                              .concat(r, " * 100%) - ")
                              .concat(f, "px))"),
                    }))(b, (m / r) * 16, -m),
                  },
                  s
                )
              )
            )
          );
        }
        var kt = t(13264),
          vt = {
            flexContainer: "LoginPrompt-module_flexContainer__hNNau",
            expandToRow:
              "LoginPrompt-module_expandToRow__BR9Qn LoginPrompt-module_flexContainer__hNNau",
            mobileColumn: "LoginPrompt-module_mobileColumn__XfvZp",
            "visually-hidden": "LoginPrompt-module_visually-hidden__BsBEE",
            flexCenter: "LoginPrompt-module_flexCenter__pzLCi",
            regiwallText: "LoginPrompt-module_regiwallText__LYKvu",
            regiwallText_hideDTMC:
              "LoginPrompt-module_regiwallText_hideDTMC__XQPuo",
            regiwallText_heading:
              "LoginPrompt-module_regiwallText_heading__FtdSV",
            regiwallText_heading_condensed:
              "LoginPrompt-module_regiwallText_heading_condensed__vx_V3",
            cta: "LoginPrompt-module_cta__mvqcL",
            heading: "LoginPrompt-module_heading__CdJSh",
            regiwallText_subheading:
              "LoginPrompt-module_regiwallText_subheading__OZCWi",
            regiwallText_link: "LoginPrompt-module_regiwallText_link__RI4mW",
            parent: "LoginPrompt-module_parent___ZoZ4",
            icon: "LoginPrompt-module_icon__ecPL6",
            subheading: "LoginPrompt-module_subheading__ajwOT",
            loginForm: "LoginPrompt-module_loginForm__mHplY",
            slideDown: "LoginPrompt-module_slideDown__L9Nvm",
            flyIn: "LoginPrompt-module_flyIn__iGuzu",
            flyOut: "LoginPrompt-module_flyOut__WdC_v",
            fadeIn: "LoginPrompt-module_fadeIn__YsO3R",
          };
        const _t = (e) =>
          e.indexOf(".dev.") > -1 ||
          e.indexOf("local.") > -1 ||
          e.indexOf(".stg.") > -1
            ? "staging"
            : "production";
        function Et() {
          const e = H.abra.getVariant("MAPS_wordleRegisNewsletterOptIn_0324");
          (0, o.useEffect)(() => {
            e && H.abra.reportExposure("MAPS_wordleRegisNewsletterOptIn_0324");
          }, []);
          const a = window.location.href,
            t = _t(a),
            s = !(0, b.D)(M.PE),
            r = Te(s),
            n = je(r);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { "data-testid": "login-container", className: P()(vt.parent) },
              o.createElement(
                "div",
                { className: P()(vt.cta) },
                o.createElement(
                  "div",
                  { className: P()(vt.flexCenter) },
                  o.createElement("div", { className: P()(vt.icon) })
                ),
                o.createElement(
                  "div",
                  { className: P()(vt.flexCenter) },
                  o.createElement(
                    "h1",
                    { className: P()(vt.heading) },
                    "Create a free account to access your stats and streaks"
                  ),
                  o.createElement(
                    "h2",
                    { className: P()(vt.subheading) },
                    "You need one to track your stats online and in our apps."
                  )
                )
              )
            ),
            o.createElement(kt.Z, {
              onSuccess: (e) => {
                window.location.href = n;
              },
              env: t,
              params: {
                client_id: "games",
                response_type: "cookie",
                redirect_uri: n,
                application: "nyt-lire",
                asset: "wordle",
                display: e ? "regiwallLire,".concat(e) : "regiwallLire",
              },
            })
          );
        }
        const xt = (e) => {
          const a = {
            operationName: "GetRecommendedArticles",
            query:
              '\n  query GetRecommendedArticles {\n      lists {\n        personalizedList(\n          first: 6\n          listUri: "'
                .concat(
                  e,
                  '"\n        ) {\n          edges {\n            interactive: node {\n              ... on Interactive {\n                headline {\n                  default\n                }\n                uri\n                url\n                promotionalMedia {\n                  ... on Image {\n                    altText\n                    crops(renditionNames: ["thumbWide" "threeByTwoSmallAt2X"]) {\n                      renditions {\n                        name\n                        url\n                        width\n                        height\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            article: node {\n              ... on Article {\n                promotionalHeadline\n                sourceId\n                uri\n                url\n                firstPublished\n                promotionalMedia {\n                  __typename\n                  ... on Image {\n                    credit\n                    altText\n                    crops(renditionNames: ["thumbWide" "threeByTwoSmallAt2X"]) {\n                      renditions {\n                        name\n                        url\n                        width\n                        height\n                      }\n                    }\n                  }\n                }\n              }\n            }\n            trackingParams {\n              key\n              value\n            }\n          }\n        }\n      }\n    }\n  '
                )
                .replace(/\n/g, " "),
          };
          return H.Be.post("".concat(H.OB.samizdat.host, "/graphql/v2"), a, {
            headers: {
              "Content-Type": "application/json",
              "nyt-app-type": H.OB.samizdat.appType,
              "nyt-app-version": H.OB.samizdat.appVersion,
              "nyt-token": H.OB.samizdat.token,
            },
          });
        };
        var Ct = t(2652),
          St = t.n(Ct);
        const zt = "undefined" == typeof window ? {} : window,
          Nt = "__viewers__";
        let Tt;
        "IntersectionObserver" in zt &&
          "IntersectionObserverEntry" in zt &&
          "intersectionRatio" in zt.IntersectionObserverEntry.prototype &&
          ("isIntersecting" in zt.IntersectionObserverEntry.prototype ||
            Object.defineProperty(
              zt.IntersectionObserverEntry.prototype,
              "isIntersecting",
              {
                get() {
                  return this.intersectionRatio > 0;
                },
              }
            ),
          (zt.__observeInView__ = !0));
        function jt() {
          return (
            (jt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
            jt.apply(this, arguments)
          );
        }
        const Ot = {
            tagName: St().string,
            event: St().string.isRequired,
            eventRegion: St().string,
            eventLabel: St().string,
            eventContext: St().string,
            onClick: St().func,
            data: St().object,
          },
          Pt = {};
        class Dt extends o.PureComponent {
          constructor(e) {
            super(e), (this.wrapper = o.createRef());
          }
          componentDidMount() {
            var e, a;
            this.wrapper.current &&
              ((e = this.wrapper.current),
              (a = () => {
                var e;
                const {
                    event: a,
                    eventRegion: t,
                    eventLabel: o,
                    eventContext: s,
                    data: r,
                  } = this.props,
                  n = a + t + o,
                  l =
                    null == r || null === (e = r.card) || void 0 === e
                      ? void 0
                      : e.uri;
                var i, c, u, d;
                l
                  ? Pt[l] ||
                    (window.foundationTrack("impression", r), (Pt[l] = !0))
                  : Pt[n] ||
                    ((i = a),
                    (c = t),
                    (u = o),
                    (d = s),
                    "undefined" != typeof window &&
                      window.foundationTrack &&
                      window.foundationTrack("impression", {
                        module: {
                          name: i,
                          context: d,
                          region: c || "",
                          label: u || void 0,
                        },
                      }),
                    (Pt[n] = !0));
              }),
              window.__observeInView__ &&
                (Tt ||
                  (Tt = new zt.IntersectionObserver(
                    (e) => {
                      e.forEach((e) => {
                        e.isIntersecting && e.target[Nt].forEach((a) => a(e));
                      });
                    },
                    { threshold: 0.4 }
                  )),
                e[Nt] ? e[Nt].push(a) : ((e[Nt] = [a]), Tt.observe(e))));
          }
          render() {
            const { tagName: e, onClick: a } = this.props,
              t = e,
              s = {};
            return (
              Object.entries(this.props).forEach((e) => {
                let [a, t] = e;
                Ot[a] || (s[a] = t);
              }),
              o.createElement(t, jt({}, s, { ref: this.wrapper, onClick: a }))
            );
          }
        }
        (Dt.propTypes = Ot),
          (Dt.defaultProps = {
            tagName: "div",
            eventRegion: "scroll-to",
            eventLabel: "",
            eventContext: "",
            onClick: () => {},
            data: null,
          });
        var It = Dt,
          At = {
            flexContainer: "GamesCarouselStack-module_flexContainer__zNNGz",
            expandToRow:
              "GamesCarouselStack-module_expandToRow__tSmur GamesCarouselStack-module_flexContainer__zNNGz",
            mobileColumn: "GamesCarouselStack-module_mobileColumn__AEMBF",
            "visually-hidden":
              "GamesCarouselStack-module_visually-hidden__tH9Gh",
            wa: "GamesCarouselStack-module_wa__PO5Is",
            icon: "GamesCarouselStack-module_icon__CKQtP",
            strands: "GamesCarouselStack-module_strands__zcUW0",
            sb: "GamesCarouselStack-module_sb__XZl13",
            mini: "GamesCarouselStack-module_mini__feuak",
            connections: "GamesCarouselStack-module_connections__fEg4q",
            sudoku: "GamesCarouselStack-module_sudoku__wyNQo",
            tiles: "GamesCarouselStack-module_tiles__vHSCe",
            crossword: "GamesCarouselStack-module_crossword__ThgcK",
            carouselGameItem:
              "GamesCarouselStack-module_carouselGameItem__xwlh9",
            gamesGridItem: "GamesCarouselStack-module_gamesGridItem__zaFFS",
            slideDown: "GamesCarouselStack-module_slideDown__l1Hja",
            flyIn: "GamesCarouselStack-module_flyIn__J88Nh",
            flyOut: "GamesCarouselStack-module_flyOut__z0dbt",
            fadeIn: "GamesCarouselStack-module_fadeIn__QX6EP",
          };
        const Lt = (e) => {
          let {
            label: a,
            className: t,
            href: s,
            title: r,
            description: n,
            icon: l,
            tracking: i,
            onClick: c,
          } = e;
          const { context: u, event: d, eventRegion: m } = i;
          return o.createElement(
            It,
            {
              tagName: "a",
              event: d,
              eventRegion: m,
              eventLabel: a,
              eventContext: u,
              href: s,
              className: P()(At[t], At[l]),
              onClick: () => c && c(),
            },
            o.createElement(
              o.Fragment,
              null,
              o.createElement("div", {
                role: "img",
                "aria-label": r,
                className: At.icon,
              }),
              o.createElement("p", null, r),
              o.createElement("span", null, n)
            )
          );
        };
        var Mt = {
            flexContainer: "DriveToMoreContent-module_flexContainer__ioLDd",
            expandToRow:
              "DriveToMoreContent-module_expandToRow__swlkd DriveToMoreContent-module_flexContainer__ioLDd",
            mobileColumn: "DriveToMoreContent-module_mobileColumn__EQYxd",
            "visually-hidden":
              "DriveToMoreContent-module_visually-hidden__xW3Sl",
            bottom: "DriveToMoreContent-module_bottom__v8mPw",
            fitContent: "DriveToMoreContent-module_fitContent__h6S25",
            grid: "DriveToMoreContent-module_grid__pBQEx",
            fitContentGrid: "DriveToMoreContent-module_fitContentGrid__TDzaq",
            carouselContainer:
              "DriveToMoreContent-module_carouselContainer__buFnq",
            gridContainer: "DriveToMoreContent-module_gridContainer__vWpCc",
            desktopCarouselNewsItem:
              "DriveToMoreContent-module_desktopCarouselNewsItem__SOP26",
            topCarousel: "DriveToMoreContent-module_topCarousel__gItkL",
            slideDown: "DriveToMoreContent-module_slideDown__a9Gqy",
            flyIn: "DriveToMoreContent-module_flyIn__Y9gZk",
            flyOut: "DriveToMoreContent-module_flyOut__IGFQZ",
            fadeIn: "DriveToMoreContent-module_fadeIn__BTsCV",
          },
          Rt = t(18489);
        const Bt = [
            {
              interactive: {},
              article: {
                promotionalHeadline:
                  "Are These Topics Too Adult for the Youngest Readers? Take a Look.",
                sourceId: "100000009203653",
                uri: "nyt://article/b22f4dce-1553-5b4c-88f3-64247581c811",
                url: "/2023/12/23/books/banned-picture-books.html",
                firstPublished: "2023-12-23T17:20:46.000Z",
                promotionalMedia: {
                  __typename: "Image",
                  credit:
                    "A detail from “Milo Imagines the World” by Matt de la Peña. Illustrated by Christian Robinson",
                  altText:
                    "In this illustration, from the picture book “Milo Imagines the World,” a woman in an orange jumpsuit is in a group hug with a girl and a small boy inside what looks like a detention facility. A security officer in a gray uniform looks on. ",
                  crops: [
                    {
                      renditions: [
                        {
                          name: "thumbWide",
                          url: "https://static01.nyt.com/images/2023/11/30/books/00BANNEDPICTUREBOOKS-MILO-PROMO/00BANNEDPICTUREBOOKS-MILO-PROMO-thumbWide.jpg",
                          width: 190,
                          height: 126,
                        },
                        {
                          name: "threeByTwoSmallAt2X",
                          url: "https://static01.nyt.com/images/2023/11/30/books/00BANNEDPICTUREBOOKS-MILO-PROMO/00BANNEDPICTUREBOOKS-MILO-PROMO-threeByTwoSmallAt2X.jpg",
                          width: 600,
                          height: 400,
                        },
                      ],
                    },
                  ],
                },
              },
              trackingParams: [
                { key: "alpha", value: "0.1" },
                { key: "surface", value: "games-wordle-curated" },
                { key: "fellback", value: "false" },
                { key: "req_id", value: "8194763058562219" },
                {
                  key: "algo",
                  value: "engagedBandit_decay6_alpha01_click_imp_dedupe",
                },
                { key: "variant", value: "0_engagedBandit_curated" },
                { key: "pool", value: "games-wordle-curated-evergreen-ls" },
                { key: "imp_id", value: "4660157644776312" },
              ],
            },
            {
              interactive: {},
              article: {
                promotionalHeadline: "How Group Chats Rule the World",
                sourceId: "100000009261966",
                uri: "nyt://article/ae002001-5014-5f30-8aee-4e6c750010e3",
                url: "/2024/01/16/magazine/group-chats.html",
                firstPublished: "2024-01-16T10:02:01.000Z",
                promotionalMedia: {
                  __typename: "Image",
                  credit: "Igor Bastidas",
                  altText:
                    "An illustration of people falling into chat bubbles.",
                  crops: [
                    {
                      renditions: [
                        {
                          name: "thumbWide",
                          url: "https://static01.nyt.com/images/2024/01/21/magazine/21Mag-Chats-1/21Mag-Chats-1-thumbWide.jpg",
                          width: 190,
                          height: 126,
                        },
                        {
                          name: "threeByTwoSmallAt2X",
                          url: "https://static01.nyt.com/images/2024/01/21/magazine/21Mag-Chats-1/21Mag-Chats-1-threeByTwoSmallAt2X.jpg",
                          width: 600,
                          height: 400,
                        },
                      ],
                    },
                  ],
                },
              },
              trackingParams: [
                { key: "alpha", value: "0.1" },
                { key: "surface", value: "games-wordle-curated" },
                { key: "fellback", value: "false" },
                { key: "req_id", value: "8194763058562219" },
                {
                  key: "algo",
                  value: "engagedBandit_decay6_alpha01_click_imp_dedupe",
                },
                { key: "variant", value: "0_engagedBandit_curated" },
                { key: "pool", value: "games-wordle-curated-evergreen-ls" },
                { key: "imp_id", value: "5416434056897666" },
              ],
            },
            {
              interactive: {
                headline: {
                  default:
                    "Flashback: Your Weekly History Quiz, January 20, 2024",
                },
                uri: "nyt://interactive/ecf610e1-1686-5b9e-80a9-aa0d439cd0af",
                url: "/interactive/2024/01/19/upshot/flashback.html",
                promotionalMedia: {
                  altText: "",
                  crops: [
                    {
                      renditions: [
                        {
                          name: "thumbWide",
                          url: "https://static01.nyt.com/images/2024/01/19/upshot/flashback-promo-20240120/flashback-promo-thumbWide.jpg",
                          width: 190,
                          height: 126,
                        },
                        {
                          name: "threeByTwoSmallAt2X",
                          url: "https://static01.nyt.com/images/2024/01/19/upshot/flashback-promo-20240120/flashback-promo-threeByTwoSmallAt2X.jpg",
                          width: 600,
                          height: 400,
                        },
                      ],
                    },
                  ],
                },
              },
              article: {},
              trackingParams: [
                { key: "alpha", value: "0.1" },
                { key: "surface", value: "games-wordle-curated" },
                { key: "fellback", value: "false" },
                { key: "req_id", value: "8194763058562219" },
                {
                  key: "algo",
                  value: "engagedBandit_decay6_alpha01_click_imp_dedupe",
                },
                { key: "variant", value: "0_engagedBandit_curated" },
                { key: "pool", value: "games-wordle-curated-evergreen-ls" },
                { key: "imp_id", value: "3423983381750718" },
              ],
            },
            {
              interactive: {},
              article: {
                promotionalHeadline:
                  "‘American Fiction,’ ‘Origin’ and the Pressures Black Writers Face",
                sourceId: "100000009270583",
                uri: "nyt://article/f7e5db5a-7098-5836-957b-4f395e6055bf",
                url: "/2024/01/19/movies/origin-american-fiction.html",
                firstPublished: "2024-01-19T17:12:04.000Z",
                promotionalMedia: {
                  __typename: "Image",
                  credit: "Neon",
                  altText:
                    "In a darkly lighted interior scene, a woman with glasses looks down at a stack of paper.",
                  crops: [
                    {
                      renditions: [
                        {
                          name: "thumbWide",
                          url: "https://static01.nyt.com/images/2024/01/20/multimedia/19author-notebook-01-fbgq/19author-notebook-01-fbgq-thumbWide.jpg",
                          width: 190,
                          height: 126,
                        },
                        {
                          name: "threeByTwoSmallAt2X",
                          url: "https://static01.nyt.com/images/2024/01/20/multimedia/19author-notebook-01-fbgq/19author-notebook-01-fbgq-threeByTwoSmallAt2X.jpg",
                          width: 600,
                          height: 400,
                        },
                      ],
                    },
                  ],
                },
              },
              trackingParams: [
                { key: "alpha", value: "0.1" },
                { key: "surface", value: "games-wordle-curated" },
                { key: "fellback", value: "false" },
                { key: "req_id", value: "8194763058562219" },
                {
                  key: "algo",
                  value: "engagedBandit_decay6_alpha01_click_imp_dedupe",
                },
                { key: "variant", value: "0_engagedBandit_curated" },
                { key: "pool", value: "games-wordle-curated-evergreen-ls" },
                { key: "imp_id", value: "7833514222261106" },
              ],
            },
            {
              interactive: {
                headline: {
                  default: "Test Yourself: Which Faces Were Made by A.I.?",
                },
                uri: "nyt://interactive/b09ba196-6557-503d-b509-789ac0fdd543",
                url: "/interactive/2024/01/19/technology/artificial-intelligence-image-generators-faces-quiz.html",
                promotionalMedia: {
                  altText: "",
                  crops: [
                    {
                      renditions: [
                        {
                          name: "thumbWide",
                          url: "https://static01.nyt.com/images/2024/01/24/reader-center/24-AI-FACES-QUIZ-HP-PROMO-COVER-copy/24-AI-FACES-QUIZ-HP-PROMO-COVER-copy-thumbWide-v3.png",
                          width: 190,
                          height: 126,
                        },
                        {
                          name: "threeByTwoSmallAt2X",
                          url: "https://static01.nyt.com/images/2024/01/24/reader-center/24-AI-FACES-QUIZ-HP-PROMO-COVER-copy/24-AI-FACES-QUIZ-HP-PROMO-COVER-copy-threeByTwoSmallAt2X-v3.png",
                          width: 600,
                          height: 400,
                        },
                      ],
                    },
                  ],
                },
              },
              article: {},
              trackingParams: [
                { key: "alpha", value: "0.1" },
                { key: "surface", value: "games-wordle-curated" },
                { key: "fellback", value: "false" },
                { key: "req_id", value: "8194763058562219" },
                {
                  key: "algo",
                  value: "engagedBandit_decay6_alpha01_click_imp_dedupe",
                },
                { key: "variant", value: "0_engagedBandit_curated" },
                { key: "pool", value: "games-wordle-curated-evergreen-ls" },
                { key: "imp_id", value: "920306522403825" },
              ],
            },
            {
              interactive: {},
              article: {
                promotionalHeadline:
                  "Six Reasons Drug Prices Are So High in the U.S.",
                sourceId: "100000009255116",
                uri: "nyt://article/805831b4-6a0a-5c5c-98f0-fa9e38289354",
                url: "/2024/01/17/health/us-drug-prices.html",
                firstPublished: "2024-01-17T15:05:30.000Z",
                promotionalMedia: {
                  __typename: "Image",
                  credit: "Paola Chapdelaine for The New York Times",
                  altText:
                    "A pharmacist crouching in front of a shelf, looking down at a box of medication. She is surrounded on three sides by shelves full of medications.",
                  crops: [
                    {
                      renditions: [
                        {
                          name: "thumbWide",
                          url: "https://static01.nyt.com/images/2024/01/18/multimedia/18drug-prices-us-vjkf/18drug-prices-us-vjkf-thumbWide.jpg",
                          width: 190,
                          height: 126,
                        },
                        {
                          name: "threeByTwoSmallAt2X",
                          url: "https://static01.nyt.com/images/2024/01/18/multimedia/18drug-prices-us-vjkf/18drug-prices-us-vjkf-threeByTwoSmallAt2X.jpg",
                          width: 600,
                          height: 400,
                        },
                      ],
                    },
                  ],
                },
              },
              trackingParams: [
                { key: "alpha", value: "0.1" },
                { key: "surface", value: "games-wordle-curated" },
                { key: "fellback", value: "false" },
                { key: "req_id", value: "8194763058562219" },
                {
                  key: "algo",
                  value: "engagedBandit_decay6_alpha01_click_imp_dedupe",
                },
                { key: "variant", value: "0_engagedBandit_curated" },
                { key: "pool", value: "games-wordle-curated-evergreen-ls" },
                { key: "imp_id", value: "5472780942421821" },
              ],
            },
          ],
          Wt = (e) =>
            e.map((e) => {
              var a;
              let { article: t, interactive: o, trackingParams: s } = e;
              const r = t.promotionalHeadline ? t : o,
                n =
                  t.promotionalHeadline ||
                  (null === (a = o.headline) || void 0 === a
                    ? void 0
                    : a.default) ||
                  "",
                { promotionalMedia: l, uri: i = "", url: c = "" } = r;
              return {
                headline: n,
                url: "".concat(c, "?ae=oa&aig=DTMC_a"),
                uri: i,
                promotionalMedia: l,
                trackingParams: s,
              };
            }),
          Ht = () => (0, Rt.Z)() && !window.isHybridWebView,
          Gt = [
            {
              label: "archive",
              icon: "wa",
              href: "/games/wordle/archive",
              title: "Wordle Archive",
              description: "Untangle terms",
            },
            {
              label: "spelling-bee",
              icon: "sb",
              href: "/puzzles/spelling-bee",
              title: "Spelling Bee",
              description: "Wrangle words",
            },
            {
              label: "connections",
              icon: "connections",
              href: "/connections.html",
              title: "Connections",
              description: "Group words",
            },
            {
              label: "mini-page",
              icon: "mini",
              href: "/crosswords/game/mini",
              title: "The Mini",
              description: "Solve in seconds",
            },
            {
              label: "strands",
              icon: "strands",
              href: "/strands.html",
              title: "Strands",
              description: "Find hidden words",
            },
            {
              label: "tiles",
              icon: "tiles",
              href: "/puzzles/tiles",
              title: "Tiles",
              description: "Match motifs",
            },
            {
              label: "sudoku",
              icon: "sudoku",
              href: "/puzzles/sudoku",
              title: "Sudoku",
              description: "Decode digits",
            },
            {
              label: "game-page",
              icon: "crossword",
              href: "/crosswords/game/daily",
              title: "The Crossword",
              description: "Crack clues",
            },
          ];
        var Ft = {
          flexContainer: "NewsCarousel-module_flexContainer___yphX",
          expandToRow:
            "NewsCarousel-module_expandToRow__zBHIU NewsCarousel-module_flexContainer___yphX",
          mobileColumn: "NewsCarousel-module_mobileColumn__BAz8m",
          "visually-hidden": "NewsCarousel-module_visually-hidden__zhcAQ",
          carouselContainer: "NewsCarousel-module_carouselContainer__C6Bua",
          carouselGrid: "NewsCarousel-module_carouselGrid__eBW_S",
          carouselNewsItem: "NewsCarousel-module_carouselNewsItem__iTjNZ",
          fadeIn: "NewsCarousel-module_fadeIn__XJI1h",
          imageBg: "NewsCarousel-module_imageBg__kauxU",
          slideDown: "NewsCarousel-module_slideDown__cHE4l",
          flyIn: "NewsCarousel-module_flyIn__EuGLP",
          flyOut: "NewsCarousel-module_flyOut__yuc6M",
        };
        function qt(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function Vt(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? qt(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : qt(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const Ut = (e) => {
          let {
            url: a,
            imgURL: t,
            altText: s,
            promotionalHeadline: n,
            className: l,
            tracking: i,
          } = e;
          const {
              userType: { regiId: c },
            } = (0, r.aF)(),
            u = (0, b.D)(L.rp),
            d = (0, b.D)(L.wJ),
            { card: m, algos: p } = i,
            y = JSON.stringify(
              p.reduce((e, a) => {
                let { key: t, value: o } = a;
                return (e[t] = o), e;
              }, {})
            ),
            g = { json_kidd: { user: { regi_id: c } }, type: "asset" },
            h = {
              module: {
                name: "article",
                region: "wordle",
                label: m.uri,
                context: u,
                algos: y,
              },
              card: m,
            },
            f = {
              eventData: {
                pageType: "game",
                type: "click",
                trigger: "module",
                status: "",
              },
              module: {
                element: { name: "wordle", label: "article" },
                label: m.uri,
                context: u,
                region: "congrats",
                algos: y,
                name: d,
              },
              card: m,
            };
          return o.createElement(
            It,
            {
              tagName: "a",
              href: a,
              context: "".concat(u),
              className: l,
              event: "article",
              eventRegion: "wordle",
              data: Vt(Vt({}, g), h),
              onClick: () => {
                window.foundationTrack("moduleInteraction", Vt({}, f));
              },
            },
            t &&
              o.createElement(
                "div",
                { className: Ft.imageBg },
                o.createElement("img", { src: t, alt: s })
              ),
            o.createElement("p", null, n)
          );
        };
        function Zt(e) {
          let { articles: a } = e;
          const { winWidth: t } = (0, $e.Z)(),
            s = t > 700 && !Ht(),
            r = s ? 4 : 2.75,
            n = s ? "50px" : "25px",
            l = s ? "30px" : "5px";
          return o.createElement(
            "div",
            { className: Ft.carouselContainer },
            o.createElement(
              "div",
              {
                className: Ft.carouselGrid,
                style: {
                  display: "grid",
                  gridAutoColumns: "1fr",
                  gridTemplateColumns: "repeat("
                    .concat(a.length, ", calc(100% / ")
                    .concat(r, ")) ")
                    .concat(l),
                  gridColumnGap: "20px",
                  gridAutoFlow: "column",
                  width: "100%",
                  marginLeft: n,
                },
              },
              a.map((e, a) => {
                var t, s;
                let {
                  url: r,
                  uri: n,
                  headline: l,
                  promotionalMedia: i,
                  trackingParams: c,
                } = e;
                const { altText: u } = null != i ? i : {},
                  { url: d } =
                    null !==
                      (t =
                        null == i || null === (s = i.crops) || void 0 === s
                          ? void 0
                          : s[0].renditions[0]) && void 0 !== t
                      ? t
                      : {};
                return o.createElement(
                  o.Fragment,
                  null,
                  l.length > 0 &&
                    o.createElement(Ut, {
                      key: "".concat(r, "-").concat(a),
                      url: r,
                      promotionalHeadline: l,
                      altText: u,
                      imgURL: d,
                      className: Ft.carouselNewsItem,
                      tracking: {
                        card: { uri: n, url: r, index: a },
                        algos: c,
                      },
                    })
                );
              })
            )
          );
        }
        function Xt() {
          return (
            (Xt = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = arguments[a];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
            Xt.apply(this, arguments)
          );
        }
        function Kt() {
          const { getVariant: e, reportExposure: a } = (0, V.Z)(),
            { trackWordleClick: t } = be(),
            s = (0, b.D)(L.rp),
            [r, n] = (0, o.useState)([]),
            l = e(te),
            i = (0, gt.Z)() || Ht();
          (0, o.useEffect)(() => {
            a(te),
              xt("nyt://per/personalized-list/games-wordle-news").then((e) => {
                const {
                  data: {
                    lists: {
                      personalizedList: { edges: a },
                    },
                  },
                } = e;
                "staging" === _t(window.location.href) ? n(Bt) : a && n(a);
              });
          }, []);
          const c = o.createElement(
              o.Fragment,
              null,
              Wt(r).map((e, a) => {
                var t, s;
                let {
                  trackingParams: r,
                  url: n,
                  uri: l,
                  headline: i,
                  promotionalMedia: c,
                } = e;
                const { altText: u } = null != c ? c : {},
                  { url: d } =
                    null !==
                      (t =
                        null == c || null === (s = c.crops) || void 0 === s
                          ? void 0
                          : s[0].renditions[1]) && void 0 !== t
                      ? t
                      : {};
                return (
                  i.length > 0 &&
                  o.createElement(Ut, {
                    key: "".concat(n, "-").concat(a),
                    className: Mt.desktopCarouselNewsItem,
                    url: n,
                    promotionalHeadline: i,
                    altText: u,
                    imgURL: d,
                    tracking: { card: { uri: l, url: n, index: a }, algos: r },
                  })
                );
              })
            ),
            u = i
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    "h4",
                    null,
                    "TIMES STORIES FOR WORDLE PLAYERS"
                  ),
                  o.createElement(Zt, { articles: Wt(r) })
                )
              : o.createElement(
                  "div",
                  { className: Mt.fitContentGrid },
                  o.createElement(
                    "h4",
                    null,
                    "TIMES STORIES FOR WORDLE PLAYERS"
                  ),
                  o.createElement(
                    wt,
                    { type: ft.NEWS, numberOfItems: r.length },
                    c
                  )
                ),
            d = o.createElement(
              o.Fragment,
              null,
              Gt.map((e) => {
                const { label: a } = e,
                  r = { event: "next-game", eventRegion: "wordle", context: s };
                return o.createElement(
                  Lt,
                  Xt(
                    {
                      key: a,
                      className: "carouselGameItem",
                      onClick: () =>
                        t({
                          context: "archive" === a ? s : a,
                          elementLabel:
                            "archive" === a ? "archive" : "next-game",
                          region: "congrats",
                        }),
                      href: "".concat(e.href, "?aig=DTMC_g"),
                      tracking: r,
                    },
                    e
                  )
                );
              })
            ),
            m = i
              ? o.createElement(
                  "div",
                  { className: Mt.fitContent },
                  o.createElement(
                    "div",
                    { className: Mt.carouselContainer },
                    o.createElement("div", { className: Mt.gridContainer }, d)
                  )
                )
              : o.createElement(
                  "div",
                  { className: Mt.grid },
                  o.createElement(
                    wt,
                    { type: ft.GAMES, numberOfItems: Gt.length },
                    d
                  )
                );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: Mt.bottom },
              l === oe
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement("div", { className: Mt.topCarousel }, m),
                    r.length > 0 && u
                  )
                : o.createElement(
                    o.Fragment,
                    null,
                    r.length > 0 &&
                      o.createElement("div", { className: Mt.topCarousel }, u),
                    m
                  )
            )
          );
        }
        var Yt = {
            modalOverlay: "Modal-module_modalOverlay__cdZDa",
            aboveNav: "Modal-module_aboveNav__Z1wwx",
            content: "Modal-module_content__TrPIX",
            SlideIn: "Modal-module_SlideIn__BF5gw",
            testExtraWidth: "Modal-module_testExtraWidth__Dptic",
            fullscreenStats: "Modal-module_fullscreenStats__dzhYf",
            awareness: "Modal-module_awareness__kb74K",
            topWrapper: "Modal-module_topWrapper__MvEd5",
            closeIcon: "Modal-module_closeIcon__TcEKb",
            archiveCongrats: "Modal-module_archiveCongrats__rb34B",
            paddingTop: "Modal-module_paddingTop__xhWdR",
            extraPadding: "Modal-module_extraPadding__XGzkT",
            closing: "Modal-module_closing__Ly9iT",
            SlideOut: "Modal-module_SlideOut__cmGvu",
            fullscreenStatsExit: "Modal-module_fullscreenStatsExit__DpWAs",
            buttonContainer: "Modal-module_buttonContainer__aEMIr",
            closeIconButton: "Modal-module_closeIconButton__y9b6c",
            AntiSlideIn: "Modal-module_AntiSlideIn__KUwJS",
            closeIconWrapper: "Modal-module_closeIconWrapper__dYLrI",
            condensedClose: "Modal-module_condensedClose__fcyS0",
            heading: "Modal-module_heading__u2uxI",
            newHeading: "Modal-module_newHeading__Ah45w",
            flexContainer: "Modal-module_flexContainer__avPDp",
            testNoMinHeight: "Modal-module_testNoMinHeight__w7_BF",
            shortStatsModal: "Modal-module_shortStatsModal__JqZJK",
            noPadding: "Modal-module_noPadding__O80OB",
            closeButtonText: "Modal-module_closeButtonText__K1NsA",
          },
          Qt = {
            flexContainer: "ArchiveCongrats-module_flexContainer__bnO0E",
            expandToRow:
              "ArchiveCongrats-module_expandToRow__Fez02 ArchiveCongrats-module_flexContainer__bnO0E",
            mobileColumn: "ArchiveCongrats-module_mobileColumn__SkuOj",
            "visually-hidden": "ArchiveCongrats-module_visually-hidden__Fe7fR",
            flexCenter: "ArchiveCongrats-module_flexCenter__qlndw",
            regiwallText: "ArchiveCongrats-module_regiwallText__qqE1r",
            regiwallText_hideDTMC:
              "ArchiveCongrats-module_regiwallText_hideDTMC___I8EA",
            regiwallText_heading:
              "ArchiveCongrats-module_regiwallText_heading__mN6bJ",
            regiwallText_heading_condensed:
              "ArchiveCongrats-module_regiwallText_heading_condensed__hUnxk",
            regiwallText_subheading:
              "ArchiveCongrats-module_regiwallText_subheading__GGy6n",
            regiwallText_link:
              "ArchiveCongrats-module_regiwallText_link__GHRbv",
            icon: "ArchiveCongrats-module_icon__gkuQY",
            iconFail: "ArchiveCongrats-module_iconFail__X854N",
            iconWin: "ArchiveCongrats-module_iconWin__Yn9oj",
            mainContent: "ArchiveCongrats-module_mainContent__T0tnv",
            slideDown: "ArchiveCongrats-module_slideDown__GUvdl",
            flyIn: "ArchiveCongrats-module_flyIn__OKjKz",
            flyOut: "ArchiveCongrats-module_flyOut__ZONOe",
            fadeIn: "ArchiveCongrats-module_fadeIn__iLOMy",
          };
        function Jt() {
          const e = (0, b.D)(R.s$),
            a = (0, b.z)(),
            t = (0, b.D)(R.u1);
          (0, o.useEffect)(() => {
            a((0, wa.LQ)("IN_PROGRESS" !== e));
          }, []);
          const s = "WIN" === e ? "Congratulations!" : "Thanks for playing!",
            r = "WIN" === e ? ma(t) : "You’re out of guesses.",
            n = "WIN" === e ? Qt.iconWin : Qt.iconFail;
          return o.createElement(
            "div",
            {
              className: P()(Qt.mainContent),
              "data-testid": "archiveCongratsModal",
            },
            o.createElement("div", {
              className: n,
              "aria-label": "WIN" === e ? "won" : "lost",
              role: "img",
            }),
            o.createElement(
              "h2",
              { className: P()(Qt.regiwallText, Qt.regiwallText_heading) },
              s
            ),
            o.createElement("h3", null, r),
            o.createElement(Fa, null),
            o.createElement(Wa, {
              hideNextGameCTA: !1,
              nextGames: ["wordle-archive-congrats"],
            })
          );
        }
        var $t = {
          help: "Help-module_help__fbOXF",
          subheading: "Help-module_subheading__mbRG9",
          instructions: "Help-module_instructions__uXsG6",
          examples: "Help-module_examples__W3VXL",
          example: "Help-module_example__gldBI",
          tileContainer: "Help-module_tileContainer__vGHuc",
          reminderSignUp: "Help-module_reminderSignUp__oQ42D",
          statsLogin: "Help-module_statsLogin__HkQec",
          loginArrow: "Help-module_loginArrow__VYc4x",
          loginText: "Help-module_loginText__lhtLY",
          statsIcon: "Help-module_statsIcon__gZPRN",
        };
        const eo = [
            {
              helpWord: "wordy",
              letters: [
                { letter: "w", evaluation: "correct" },
                { letter: "o" },
                { letter: "r" },
                { letter: "d" },
                { letter: "y" },
              ],
            },
            {
              helpWord: "light",
              letters: [
                { letter: "l" },
                { letter: "i", evaluation: "present" },
                { letter: "g" },
                { letter: "h" },
                { letter: "t" },
              ],
            },
            {
              helpWord: "rogue",
              letters: [
                { letter: "r" },
                { letter: "o" },
                { letter: "g" },
                { letter: "u", evaluation: "absent" },
                { letter: "e" },
              ],
            },
          ],
          ao = (e) => {
            let { helpWord: a, letters: t } = e;
            return o.createElement(
              o.Fragment,
              null,
              t.map((e, t) => {
                let { letter: s, evaluation: r } = e;
                return o.createElement(
                  "div",
                  {
                    "data-testid": "".concat(a, "-letter"),
                    className: $t.tileContainer,
                    key: "".concat(a, "-").concat(s, "-").concat(t),
                  },
                  o.createElement(ot, {
                    letterIndex: t,
                    letter: s,
                    evaluation: r,
                    small: !0,
                  })
                );
              })
            );
          };
        function to() {
          const e = !!(0, b.D)(L.yn),
            a = !(0, b.D)(M.PE),
            { trackWordleClick: t } = be();
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "h3",
              { className: $t.subheading },
              "Guess the Wordle in 6 tries."
            ),
            o.createElement(
              "section",
              { className: $t.help },
              o.createElement(
                "ul",
                { className: $t.instructions },
                o.createElement(
                  "li",
                  null,
                  "Each guess must be a valid 5-letter word."
                ),
                o.createElement(
                  "li",
                  null,
                  "The color of the tiles will change to show how close your guess was to the word."
                )
              ),
              o.createElement(
                "div",
                { className: $t.examples },
                o.createElement(
                  "p",
                  null,
                  o.createElement("strong", null, "Examples")
                ),
                o.createElement(
                  "div",
                  { "aria-label": eo[0].helpWord, className: $t.example },
                  ao(eo[0]),
                  o.createElement(
                    "p",
                    null,
                    o.createElement("strong", null, "W"),
                    " is in the word and in the correct spot."
                  )
                ),
                o.createElement(
                  "div",
                  { "aria-label": eo[1].helpWord, className: $t.example },
                  ao(eo[1]),
                  o.createElement(
                    "p",
                    null,
                    o.createElement("strong", null, "I"),
                    " is in the word but in the wrong spot."
                  )
                ),
                o.createElement(
                  "div",
                  { "aria-label": eo[2].helpWord, className: $t.example },
                  ao(eo[2]),
                  o.createElement(
                    "p",
                    null,
                    o.createElement("strong", null, "U"),
                    " is not in the word in any spot."
                  )
                )
              ),
              !e &&
                o.createElement(
                  "div",
                  { className: $t.statsLogin },
                  o.createElement(
                    "div",
                    { className: $t.statsIcon },
                    o.createElement("img", {
                      alt: "Green Bar Graph",
                      style: { content: "var(--wordle-stats-mini-check)" },
                    })
                  ),
                  o.createElement(
                    "div",
                    { className: $t.loginText },
                    o.createElement(
                      Fe,
                      {
                        trackEvent: {
                          eventName: a ? "log-in-welcome" : "help",
                          sendContext: !0,
                          element: { name: "wordle", label: "log-in-welcome" },
                        },
                        lireOfferAsset: "wordle-how-to-play",
                      },
                      "Log in or create a free NYT account"
                    ),
                    " ",
                    "to link your stats."
                  )
                ),
              o.createElement(
                "div",
                { className: $t.reminderSignUp },
                o.createElement(
                  "p",
                  null,
                  "A new puzzle is released daily at midnight. If you haven’t already, you can",
                  " ",
                  o.createElement(
                    "a",
                    {
                      href: "/newsletters/signup/NTWO",
                      target: "_blank",
                      rel: "noreferrer",
                      onClick: () => {
                        t({ elementLabel: "newsletter-sign-up" });
                      },
                    },
                    "sign up"
                  ),
                  " ",
                  "for our daily reminder email."
                )
              )
            )
          );
        }
        var oo = t(61582),
          so = {
            gameStats: "Stats-module_gameStats__X2eDU",
            statsContainer: "Stats-module_statsContainer__g23s0",
            statisticsHeading: "Stats-module_statisticsHeading__CExdL",
            statistics: "Stats-module_statistics__oFLEK",
            statisticContainer: "Stats-module_statisticContainer__woJli",
            statistic: "Stats-module_statistic__u5db0",
            small: "Stats-module_small__zkkbW",
            timer: "Stats-module_timer__ndCDz",
            label: "Stats-module_label__sQwFu",
            guessDistribution: "Stats-module_guessDistribution__ibfJS",
            graphContainer: "Stats-module_graphContainer__Al4D1",
            graph: "Stats-module_graph__f4tUv",
            graphBar: "Stats-module_graphBar__HvdG8",
            highlight: "Stats-module_highlight__lrZJU",
            alignRight: "Stats-module_alignRight__ljKmf",
            numGuesses: "Stats-module_numGuesses__jFa2m",
            footer: "Stats-module_footer__jx3ae",
            countdown: "Stats-module_countdown__C3zxv",
            share: "Stats-module_share__EvF2C",
            noData: "Stats-module_noData__J1mBk",
            shareButton: "Stats-module_shareButton__L4E0m",
            shareIconContainer: "Stats-module_shareIconContainer__RUxSV",
            statsBtnLeft: "Stats-module_statsBtnLeft__IyDkc",
            guessDistributionCopy: "Stats-module_guessDistributionCopy__ydhXT",
            statsBtnCenter: "Stats-module_statsBtnCenter__AG0A8",
            statsInfoBtn: "Stats-module_statsInfoBtn__bPz7C",
            promoButton: "Stats-module_promoButton__AfY3n",
            promoIcon: "Stats-module_promoIcon__YEC17",
            promoButtonContainer: "Stats-module_promoButtonContainer__jGI1r",
            ctaContainer: "Stats-module_ctaContainer__1Krdy",
            guess: "Stats-module_guess__Fc0Xn",
            testGameStats: "Stats-module_testGameStats__dznYC",
            testGameStats_regiwall:
              "Stats-module_testGameStats_regiwall__oBOlx",
            testTimer: "Stats-module_testTimer__GYTLQ",
          };
        const ro = [
          {
            label: "Played",
            ariaLabelPrefix: "Number of games played",
            getStat: (e) => e.gamesPlayed,
          },
          {
            label: "Win %",
            ariaLabelPrefix: "Win percentage",
            getStat: (e) =>
              e.gamesPlayed
                ? Math.round((e.gamesWon / e.gamesPlayed) * 100)
                : 0,
          },
          {
            label: "Current Streak",
            ariaLabelPrefix: "Current Streak count",
            getStat: (e) => e.currentStreak,
          },
          {
            label: "Max Streak",
            ariaLabelPrefix: "Max Streak count",
            getStat: (e) => e.maxStreak,
          },
        ];
        function no(e) {
          let { stats: a, small: t } = e;
          return o.createElement(
            "ul",
            { className: so.statistics },
            ro.map((e) => {
              const s = e.getStat(a);
              return o.createElement(
                "li",
                { className: so.statisticContainer, key: e.label },
                o.createElement(
                  "span",
                  { className: "visually-hidden" },
                  "".concat(e.ariaLabelPrefix, ", ").concat(s)
                ),
                o.createElement(
                  "div",
                  {
                    className: P()(so.statistic, { [so.small]: t }),
                    "aria-hidden": "true",
                  },
                  s
                ),
                o.createElement(
                  "div",
                  { className: so.label, "aria-hidden": "true" },
                  e.label
                )
              );
            })
          );
        }
        const lo = 7,
          io = (e) => {
            let {
              rowGuess: a,
              percentGuesses: t,
              numGuesses: s,
              addHighlight: r,
              index: n,
            } = e;
            const l = (0, qe.xw)(a);
            return o.createElement(
              "div",
              {
                className: so.graphContainer,
                key: n,
                role: "img",
                "aria-label": "".concat(s, " solved in ").concat(l, " attempt"),
              },
              o.createElement(
                "div",
                { className: so.guess, "aria-hidden": "true" },
                a
              ),
              o.createElement(
                "div",
                { className: so.graph, "aria-hidden": "true" },
                o.createElement(
                  "div",
                  {
                    style: { width: "".concat(t, "%") },
                    className: P()(so.graphBar, {
                      [so.alignRight]: s > 0,
                      [so.highlight]: r,
                    }),
                  },
                  o.createElement("div", { className: so.numGuesses }, s)
                )
              )
            );
          };
        function co(e) {
          let {
            guesses: a,
            rowIndex: t,
            gameStatus: s,
            loggedIn: r,
            endScreen: n,
          } = e;
          const l = [],
            i = Math.max(...Object.values(a)),
            c = Object.values(a).every((e) => 0 === e),
            u = (0, b.z)(),
            [d, m] = (0, o.useState)(n);
          if (c)
            return o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                { className: so.statsBtnLeft },
                o.createElement(
                  "h3",
                  { className: so.guessDistributionCopy },
                  "Guess Distribution"
                ),
                o.createElement("div", { className: so.noData }, "No Data")
              )
            );
          for (let e = 1; e < Object.keys(a).length; e += 1) {
            const o = e,
              r = a[e],
              n = Math.max(lo, Math.round((r / i) * 100)),
              c = io({
                rowGuess: o,
                percentGuesses: n,
                numGuesses: r,
                addHighlight: "WIN" === s && e === t,
                index: e,
              });
            l.push(c);
          }
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: so.statsBtnLeft },
              o.createElement(
                "h2",
                { className: so.guessDistributionCopy },
                "Guess Distribution"
              )
            ),
            o.createElement("div", { className: so.guessDistribution }, l),
            r &&
              !d &&
              o.createElement(
                "button",
                {
                  type: "button",
                  className: so.statsInfoBtn,
                  onClick: () => {
                    u((0, v.oh)("statsProblem"));
                  },
                },
                "My stats don't look right ›"
              )
          );
        }
        var uo = {
          container: "MiniAuthCTA-module_container__c9Atk",
          icon: "MiniAuthCTA-module_icon__xDcPq",
          buttonsContainer: "MiniAuthCTA-module_buttonsContainer__IoQWk",
          loginButton: "MiniAuthCTA-module_loginButton__x7_fR",
        };
        function mo(e) {
          let { driveToMoreVariant: a = !1 } = e;
          return o.createElement(
            "div",
            { className: P()(uo.container, { driveToMoreLogin: a }) },
            o.createElement(
              "div",
              null,
              o.createElement("img", { className: uo.icon, alt: "" })
            ),
            o.createElement(
              "div",
              { className: uo.buttonsContainer },
              o.createElement(
                Fe,
                {
                  trackEvent: { eventName: "log-in-congrats", sendContext: !0 },
                  styles: uo.loginButton,
                },
                "Log In or create a free account to link your stats."
              )
            )
          );
        }
        function po(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function yo(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? po(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : po(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        function go(e) {
          let { hideNextGameCTA: a = !1 } = e;
          const t = (0, b.z)(),
            s = (0, b.D)(R.s$),
            r = (0, b.D)(R.u1),
            n = !!(0, b.D)(L.yn),
            l = !!window.gamesAppPlatform,
            i = (0, b.D)(M.yE),
            c = !(0, b.D)(M.PE),
            u = (0, b.D)(B.nr),
            d = (0, b.D)(Ve.iW),
            m = (0, b.D)(Ve.ZQ),
            p = Do();
          !(function () {
            const {
                hasAbraLoadedWithUser: e,
                getVariant: a,
                reportExposure: t,
              } = (0, V.Z)(),
              s = (0, b.z)(),
              r = (0, b.D)(oo.cu),
              n = (0, b.D)(oo.a0),
              l = (0, b.D)(oo.xU),
              i = !n && !l;
            (0, o.useEffect)(() => {
              e &&
                r &&
                i &&
                "1_Data" === a("GAMES_calculatedStatsData_0824") &&
                (t("GAMES_calculatedStatsData_0824"), s((0, wa.uo)(r)));
            }, [e, r, i]);
          })();
          const y = yo(yo({}, u), {}, { currentStreak: m, maxStreak: d }),
            g = !l || (l && (0, ha.Cb)(window.gamesAppVersion, Ga)),
            h = fa();
          return (
            (0, o.useEffect)(() => {
              i && t((0, v.iB)());
            }, [i]),
            (0, o.useEffect)(() => {
              t((0, wa.LQ)("IN_PROGRESS" !== s));
            }, []),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                {
                  "data-testid": "authContainer",
                  className: P()(
                    so.gameStats,
                    so.testGameStats,
                    so.testGameStats_regiwall
                  ),
                },
                o.createElement(
                  "div",
                  { className: so.statsContainer },
                  !p &&
                    o.createElement(_a, {
                      type: va.stats,
                      isEndScreen: c,
                      gameStatus: s,
                    }),
                  o.createElement(
                    "h2",
                    { className: so.statisticsHeading },
                    "Statistics"
                  ),
                  o.createElement(no, { stats: y }),
                  o.createElement(co, {
                    guesses: y.guesses,
                    rowIndex: r,
                    gameStatus: s,
                    loggedIn: n,
                    endScreen: c,
                  })
                ),
                g && o.createElement(Fa, null),
                o.createElement(
                  "div",
                  { className: so.ctaContainer },
                  !n && o.createElement(mo, null),
                  o.createElement(Wa, { hideNextGameCTA: a, nextGames: h })
                )
              )
            )
          );
        }
        const ho = (e) => {
          let {
            title: a,
            description: t,
            buttonText: s,
            buttonIcon: r,
            asset: n,
            onButtonClick: l,
          } = e;
          const i = o.createElement(
            "div",
            { className: "AwarenessModule-module_ctaContainer__Aqrx_" },
            o.createElement(
              "p",
              { className: "AwarenessModule-module_title__hrvJA" },
              a
            ),
            t &&
              o.createElement(
                "p",
                { className: "AwarenessModule-module_description__rFWPx" },
                t
              ),
            o.createElement(
              "button",
              {
                type: "button",
                className: "AwarenessModule-module_button__TjTVg",
                onClick: l,
              },
              s,
              r && o.createElement(Na, { icon: r })
            )
          );
          return n
            ? o.createElement(
                "div",
                {
                  className:
                    "AwarenessModule-module_imageModalContainer__tQlvc",
                },
                n,
                i
              )
            : i;
        };
        function bo() {
          const e = (0, b.z)(),
            { trackWordleClick: a, trackWordleImpression: t } = be();
          return (
            o.useEffect(() => {
              t("tool-tip", "wordle", "hard-mode");
            }, []),
            o.createElement(ho, {
              title: "For an extra challenge, turn on Hard Mode.",
              buttonText: "Go to Settings",
              buttonIcon: "settings",
              onButtonClick: () => {
                a({
                  elementLabel: "settings",
                  region: "tool-tip",
                  useBeacon: !0,
                }),
                  e((0, v.h7)("settings"));
              },
            })
          );
        }
        var fo = {
          regiModalContainer:
            "ActivationRegiModal-module_regiModalContainer__YtnuA",
          copyContainer: "ActivationRegiModal-module_copyContainer__sveqD",
          copyHeader: "ActivationRegiModal-module_copyHeader__LnHo5",
          copyBody: "ActivationRegiModal-module_copyBody__Lpr_0",
          loginLink: "ActivationRegiModal-module_loginLink__qqJOJ",
          statsIcon: "ActivationRegiModal-module_statsIcon__E2E2U",
        };
        const wo = "activation-regi-modal",
          ko = 4,
          vo = () => {
            const e = document.cookie.split("; ").reduce((e, a) => {
              const t = a.split("=");
              return t[0] === wo ? t[1] : e;
            }, "");
            return Number.isNaN(parseInt(e)) ? 0 : parseInt(e);
          };
        function _o() {
          const e = !!(0, b.D)(L.yn),
            a = (0, V.Z)(),
            { trackWordleImpression: t } = be();
          return (
            (0, o.useEffect)(() => {
              t("regi-modal", "wordle-welcome", K),
                a.reportExposure(K),
                (() => {
                  const e = vo();
                  if (e < ko) {
                    const a = new Date();
                    a.setMonth(a.getMonth() + 12),
                      (document.cookie = ""
                        .concat(wo, "=")
                        .concat(e + 1, "; expires=")
                        .concat(a.toUTCString(), ";"));
                  }
                })();
            }, []),
            o.createElement(
              "div",
              {
                "data-testid": "activationRegiModalContainer",
                className: fo.regiModalContainer,
              },
              o.createElement("img", {
                alt: "Large sized wordle stats icon",
                className: fo.statsIcon,
                style: { content: "var(--large-stats)" },
              }),
              o.createElement(
                "div",
                { className: fo.copyContainer },
                o.createElement(
                  "div",
                  { className: fo.copyHeader },
                  "Wordle is even better with a free New York Times account."
                ),
                o.createElement(
                  "div",
                  { className: fo.copyBody },
                  "You can save your stats wherever you play and you’ll never lose a streak again."
                )
              ),
              !e &&
                o.createElement(
                  Fe,
                  {
                    lireOfferAsset: "wordle-regi-modal",
                    trackEvent: {
                      eventName: "moduleInteraction",
                      sendContext: !0,
                      element: { name: "wordle", label: "log-in-regi-modal" },
                    },
                    styles: fo.loginLink,
                  },
                  "Log in or create an account"
                )
            )
          );
        }
        var Eo = t(22152),
          xo = t(98026),
          Co = t(90901);
        const So = (e) => {
          let {
            disabled: a,
            name: t,
            handleClick: s,
            selected: r,
            showAlert: n,
          } = e;
          const l = (0, b.z)();
          return o.createElement(
            "div",
            {
              id: t,
              className: P()("Switch-module_container__PO0Ll", {
                "Switch-module_checked__R4Ixx": r,
              }),
            },
            o.createElement(
              "button",
              {
                "aria-disabled": a,
                "aria-checked": r,
                "aria-label": t,
                role: "switch",
                type: "button",
                className: P()("Switch-module_switch__isHE_", {
                  "Switch-module_disabled__I6C9c": a,
                }),
                onClick: a
                  ? (e) => {
                      null == e || e.preventDefault(),
                        n &&
                          l(
                            (0, v.fz)({
                              text: "Hard mode can only be enabled at the start of a round",
                              duration: 1500,
                              isSystem: !0,
                            })
                          );
                    }
                  : s,
              },
              o.createElement("span", {
                className: "Switch-module_knob__B3HtC",
              })
            )
          );
        };
        var zo = "Settings-module_setting__EaMz6",
          No = "Settings-module_title__NWAOC",
          To = "Settings-module_text__l3Wz3",
          jo = "Settings-module_feedbackLink__xHvaM",
          Oo = "Settings-module_description__m0Tpo";
        const Po = () => {
          const e = (0, b.z)(),
            a = (0, b.D)(C.Hh),
            t = (0, b.D)(L._w),
            s = (0, b.D)(R.u1),
            r = (0, b.D)(h.F_),
            n = (0, b.D)(h.cK),
            l = (0, b.D)(R.ld),
            i = !l && 0 !== s,
            { trackWordleClick: c } = be(),
            u = (0, b.D)(h.ee),
            d = !(
              window.isHybridWebView ||
              window.gamesAppPlatform ||
              window.newsreaderAppPlatform
            ),
            m = "0_control" !== H.abra.getVariant(Eo.dQ);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "Settings-module_container__utVKC" },
              o.createElement(
                "section",
                null,
                o.createElement(
                  "div",
                  { className: zo },
                  o.createElement(
                    "div",
                    { className: To },
                    o.createElement("h3", { className: No }, "Hard Mode"),
                    o.createElement(
                      "p",
                      { className: Oo },
                      "Any revealed hints must be used in subsequent guesses"
                    )
                  ),
                  o.createElement(So, {
                    disabled: i,
                    name: "Hard Mode",
                    handleClick: () => {
                      i || e((0, xo.oz)("hardMode", !l));
                    },
                    selected: l,
                    showAlert: i,
                  })
                ),
                o.createElement(
                  "div",
                  { className: zo },
                  o.createElement(
                    "div",
                    { className: To },
                    o.createElement("h3", { className: No }, "Dark Theme")
                  ),
                  o.createElement(So, {
                    name: "Dark Mode",
                    handleClick: () => e((0, xo.oz)("darkMode", !n)),
                    selected: n,
                  })
                ),
                o.createElement(
                  "div",
                  { className: zo },
                  o.createElement(
                    "div",
                    { className: To },
                    o.createElement(
                      "h3",
                      { className: No },
                      "High Contrast Mode"
                    ),
                    o.createElement(
                      "p",
                      { className: Oo },
                      "Contrast and colorblindness improvements"
                    )
                  ),
                  o.createElement(So, {
                    name: "High Contrast Mode",
                    handleClick: () => e((0, xo.oz)("colorblindMode", !r)),
                    selected: r,
                  })
                ),
                o.createElement(
                  "div",
                  { className: zo },
                  o.createElement(
                    "div",
                    { className: To },
                    o.createElement(
                      "h3",
                      { className: No },
                      "Onscreen Keyboard Input Only"
                    ),
                    o.createElement(
                      "p",
                      { className: Oo },
                      "Ignore key input except from the onscreen keyboard. Most helpful for users using speech recognition or other assistive devices."
                    )
                  ),
                  o.createElement(So, {
                    name: "Virtual Keyboard Input Only",
                    handleClick: () =>
                      e((0, xo.oz)("virtualKeyboardOnlyMode", !u)),
                    selected: Boolean(u),
                  })
                )
              ),
              (window.newsreaderAppPlatform ||
                window.gamesAppPlatform ||
                (d && !m)) &&
                o.createElement(
                  "section",
                  null,
                  o.createElement(
                    "div",
                    { className: zo },
                    o.createElement(
                      "div",
                      { className: To },
                      o.createElement("h3", { className: No }, "Feedback")
                    ),
                    o.createElement(
                      Co.Z,
                      {
                        subject: "Wordle Feedback",
                        styles: jo,
                        tracking: () => c({ elementLabel: "email-feedback" }),
                      },
                      "Email"
                    )
                  ),
                  (!window.isHybridWebView ||
                    (0, ha.Cb)(window.gamesAppVersion, "4.53")) &&
                    o.createElement(
                      "div",
                      { className: zo },
                      o.createElement(
                        "div",
                        { className: To },
                        o.createElement("h3", { className: No }, "Report a Bug")
                      ),
                      o.createElement(
                        Co.Z,
                        {
                          styles: jo,
                          description: "Report a bug to nytgames@nytimes.com",
                          subject: window.newsreaderAppPlatform
                            ? "News App: Wordle Bug Report"
                            : "ios" === window.gamesAppPlatform
                            ? "iOS Wordle Bug Report"
                            : "android" === window.gamesAppPlatform
                            ? "Android Wordle Bug Report"
                            : "Wordle Bug Report",
                          type: H.N1.CUSTOM,
                          tracking: () => c({ elementLabel: "report-bug" }),
                        },
                        "Email"
                      )
                    ),
                  !a &&
                    o.createElement(
                      "div",
                      { className: zo },
                      o.createElement(
                        "div",
                        { className: To },
                        o.createElement("h3", { className: No }, "Community")
                      ),
                      o.createElement(
                        "a",
                        { href: "/spotlight/wordle-review", target: "_blank" },
                        "Wordle Review"
                      )
                    ),
                  o.createElement(
                    "div",
                    { className: zo },
                    o.createElement(
                      "div",
                      { className: To },
                      o.createElement("h3", { className: No }, "Questions?")
                    ),
                    o.createElement(
                      "a",
                      {
                        href: "https://help.nytimes.com/hc/en-us/articles/24611727334932-Wordle",
                        target: "_blank",
                      },
                      "FAQ"
                    )
                  )
                )
            ),
            o.createElement(
              "div",
              { className: "Settings-module_footnote__TOUR0" },
              o.createElement(
                "p",
                { id: "copyright" },
                "© ",
                new Date().getFullYear(),
                " The New York Times Company"
              ),
              o.createElement("p", { "aria-label": "game number" }, "#", t)
            )
          );
        };
        function Do() {
          const e = (0, V.Z)(),
            a = (0, b.D)(R.s$),
            t = (0, b.D)(M.Vn),
            o = e.getVariant(te),
            s =
              !!o &&
              "0_control" !== o &&
              !(0, ne.Xj)() &&
              !(0, ne._7)() &&
              ("stats" === t || "regiwallModal" === t) &&
              ["WIN", "FAIL"].includes(a);
          return (
            !(0, ne.Xj)() && !(0, ne._7)() && !!o && e.reportExposure(te), s
          );
        }
        function Io() {
          const e = (0, b.z)(),
            [a, t] = (0, o.useState)(!1),
            s = (0, b.D)(M.Vn),
            { trackWordleClick: r } = be(),
            n = Do(),
            l = (0, o.useRef)(null);
          (0, pt.Z)(Boolean(s), l);
          const i = (0, o.useRef)(null);
          (0, yt.Z)(Boolean(s), i);
          const c = (function (e) {
            const a = !(0, b.D)(M.PE),
              t = (0, b.D)(L.ht),
              s = a ? "congrats" : "stats";
            return e
              ? {
                  help: {
                    content: () => o.createElement(to, null),
                    headingText: "How To Play",
                    closeTrackingProps: { region: "help" },
                    overlayClassName: Yt.paddingTop,
                    contentDivClassName: Yt.extraPadding,
                    topWrapperClassName: Yt.newHeading,
                  },
                  stats: {
                    content: (e) => o.createElement(go, { hideNextGameCTA: e }),
                    closeTrackingProps: { region: s },
                    fullScreen: !0,
                    contentDivClassName: P()(Yt.noPadding, {
                      [Yt.shortStatsModal]: t,
                    }),
                    overlayClassName: P()(Yt.aboveNav),
                  },
                  regiwallModal: {
                    content: (e) => o.createElement(Ua, { hideNextGameCTA: e }),
                    closeTrackingProps: { region: s },
                    onClose: () =>
                      (function () {
                        if ((0, ne._7)()) {
                          const e = new URLSearchParams(window.location.search);
                          e.delete("source");
                          const a = e.toString(),
                            t = ""
                              .concat(window.location.origin)
                              .concat(window.location.pathname)
                              .concat(a.length > 0 ? "?" : "")
                              .concat(a);
                          window.history.replaceState(null, "", t);
                        }
                      })(),
                    fullScreen: !0,
                    overlayClassName: P()(Yt.aboveNav),
                  },
                  loginPrompt: {
                    content: () => o.createElement(Et, null),
                    closeTrackingProps: { region: "stats-regiwall" },
                    nextModal: "regiwallModal",
                    fullScreen: !0,
                    overlayClassName: P()(Yt.aboveNav),
                  },
                  settings: {
                    content: () => o.createElement(Po, null),
                    headingText: "settings",
                    closeTrackingProps: { region: "settings" },
                    contentDivClassName: Yt.flexContainer,
                  },
                  activationRegiModal: {
                    content: () => o.createElement(_o, null),
                    closeTrackingProps: {
                      label: "close-regi-modal",
                      region: "",
                    },
                    contentDivClassName: Yt.testNoMinHeight,
                  },
                  hardModeAwareness: {
                    content: () => o.createElement(bo, null),
                    contentDivClassName: Yt.awareness,
                    closeTrackingProps: { region: "tool-tip" },
                  },
                  archiveCongrats: {
                    content: () => o.createElement(Jt, null),
                    closeText: "Back to puzzle",
                    closeTrackingProps: { region: "" },
                    fullScreen: !0,
                    topWrapperClassName: Yt.archiveCongrats,
                  },
                }[e]
              : null;
          })(s);
          if (!c) return null;
          const {
              content: u,
              headingText: d,
              onClose: m,
              closeText: p,
              closeTrackingProps: y,
              fullScreen: g,
              contentDivClassName: h,
              topWrapperClassName: f,
              overlayClassName: w,
              nextModal: k,
            } = c,
            _ = () => {
              (() => {
                const { region: e, label: a } = y;
                r({ elementLabel: null != a ? a : "close", region: e });
              })(),
                m && m(),
                k ? e((0, v.h7)(k)) : t(!0);
            };
          return o.createElement(
            "dialog",
            {
              ref: i,
              open: !0,
              className: P()(Yt.modalOverlay, w),
              "data-testid": "modal-overlay",
              "aria-label": "".concat(s, " Modal"),
              "aria-modal": "true",
              id: "".concat(s, "-dialog"),
              onClick: (e) => {
                e.currentTarget === e.target && _();
              },
              onAnimationEnd: (a) => {
                a.animationName === Yt.SlideOut &&
                  (t(!1),
                  (0, $a.flushSync)(() => {
                    e((0, v.Mr)());
                  }));
              },
              onKeyDown: (e) => {
                "Escape" === e.key && _();
              },
            },
            o.createElement(
              "div",
              {
                className: P()(Yt.content, Yt.testExtraWidth, h, {
                  [Yt.closing]: a,
                  [Yt.fullscreenStats]: g,
                  driveToMore: n,
                }),
              },
              o.createElement(
                "div",
                { className: P()(Yt.topWrapper, f) },
                d && o.createElement("h2", { className: P()(Yt.heading) }, d),
                g
                  ? o.createElement(
                      "div",
                      { className: P()(Yt.fullscreenStatsExit) },
                      o.createElement(
                        "div",
                        {
                          className: P()(Yt.buttonContainer, {
                            [Yt.condensedClose]: "string" == typeof p,
                          }),
                        },
                        o.createElement(
                          "button",
                          {
                            ref: l,
                            className: P()(Yt.closeIconButton),
                            type: "button",
                            "aria-label": "Close",
                            onClick: _,
                          },
                          p &&
                            o.createElement(
                              "span",
                              { className: Yt.closeButtonText },
                              p
                            ),
                          o.createElement(
                            "div",
                            { className: Yt.closeIconWrapper },
                            o.createElement(Na, { icon: "close" })
                          )
                        )
                      )
                    )
                  : o.createElement(
                      "button",
                      {
                        ref: l,
                        className: P()(Yt.closeIcon),
                        type: "button",
                        "aria-label": "Close",
                        onClick: _,
                      },
                      o.createElement(Na, { icon: "close" })
                    ),
                u(n)
              ),
              n && o.createElement(Kt, null)
            )
          );
        }
        var Ao = t(155),
          Lo = {
            container: "Nav-module_container__OHjbB",
            navLink: "Nav-module_navLink__zndY2",
            "connections-sports__container":
              "Nav-module_connections-sports__container__Rl6bP",
            "connections-sports__img":
              "Nav-module_connections-sports__img__b1DJ0",
            gameList: "Nav-module_gameList__IkaW6",
            nytList: "Nav-module_nytList__rVjMX",
            navItem: "Nav-module_navItem__khSKK",
            navDescription: "Nav-module_navDescription__UGPPw",
            navIcon: "Nav-module_navIcon__HFwtS",
            navHeader: "Nav-module_navHeader__JaDrY",
            moreText: "Nav-module_moreText__Jg_7K",
            privacy: "Nav-module_privacy__T32_r",
            privacyStatic: "Nav-module_privacyStatic__cQ4AX",
            privacyItem: "Nav-module_privacyItem__tSFYv",
            ccpaIcon: "Nav-module_ccpaIcon__q6Ohg",
            beta: "Nav-module_beta__x2SH0",
            nytIcon: "Nav-module_nytIcon__nPzNQ",
            newLabel: "Nav-module_newLabel__TPoAn",
          };
        function Mo() {
          const e =
            "1_showSportsConnLink" ===
            (0, V.Z)().getVariant("GAMES_connectionsSportsLinks_0924");
          (0, o.useEffect)(() => {
            (0, H.vO)();
          }, []);
          const a = (0, H.Xy)(),
            t = (0, Ao.UF)(),
            s = ba(),
            r = (0, Be.Z)("zorseNav"),
            n = [
              {
                id: "spelling-bee",
                name: "Spelling Bee",
                url: "/puzzles/spelling-bee?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                backgroundImage: "var(--spelling-bee)",
                dataTrackLabel: "spelling-bee-nav",
              },
              {
                id: "crossword",
                name: "The Crossword",
                url: "/crosswords/game/daily?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                backgroundImage: "var(--daily)",
                dataTrackLabel: "daily-page-nav",
              },
              {
                id: "mini",
                name: "The Mini",
                url: "/crosswords/game/mini?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                backgroundImage: "var(--mini)",
                dataTrackLabel: "mini-page-nav",
              },
              {
                id: "zorse",
                name: "Zorse",
                url: "/games/zorse",
                backgroundImage: "var(--zorse)",
                dataTrackLabel: "zorse-nav",
                isBeta: !0,
              },
              {
                id: "strands",
                name: "Strands",
                url: "/strands.html",
                backgroundImage: "var(--strands)",
                dataTrackLabel: "strands-nav",
              },
              {
                id: "connections",
                name: "Connections",
                url: "/connections.html",
                backgroundImage: "var(--connections)",
                dataTrackLabel: "connections-nav",
              },
              {
                id: "connections-archive",
                name: "Connections Archive",
                url: "/connections.html/archive",
                dataTrackLabel: "connections-archive-nav",
                isNew: !0,
              },
              {
                id: "wordlebot",
                name: "WordleBot: Your Daily, Personalized Wordle Score",
                url: "/interactive/2022/upshot/wordle-bot.html?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                backgroundImage: "var(--wordlebot-walking-icon)",
                dataTrackLabel: "wordle-bot-nav",
              },
              {
                id: "wordle-archive",
                name: "Wordle Archive",
                url: "/games/wordle/archive",
                backgroundImage: "var(--wordle-icon)",
                dataTrackLabel: "wordle-archive",
              },
              {
                id: "gameplay-stories",
                name: "Gameplay Stories",
                url: "/column/wordplay?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                dataTrackLabel: "gameplay-stories-nav",
              },
              {
                id: "more-games",
                name: "More Games",
                url: "/puzzles?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                dataTrackLabel: "all-games-nav",
              },
            ]
              .filter((e) => "strands" !== e.id || Re)
              .filter((e) => "wordle-archive" !== e.id || s)
              .filter((e) => "connections-archive" !== e.id || t)
              .filter((e) => "zorse" !== e.id || r),
            l = function () {
              return {
                backgroundImage:
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                backgroundSize: "20px",
              };
            },
            i = (0, b.z)();
          return o.createElement(
            "nav",
            { className: Lo.container },
            e &&
              o.createElement(
                "div",
                {
                  className: P()(
                    Lo["connections-sports"],
                    Lo["connections-sports__container"]
                  ),
                },
                o.createElement(
                  "a",
                  {
                    href: "/athletic/connections-sports-edition",
                    onClick: () =>
                      i(
                        (0, v.OO)("wordle", "sports-connections-nav", !0, null)
                      ),
                  },
                  o.createElement("img", {
                    className: P()(Lo["connections-sports__img"]),
                    src: "/games-assets/v2/assets/connections/connections-sports.svg",
                    alt: "Sports Connections",
                  })
                )
              ),
            o.createElement("h3", { className: Lo.moreText }, "News"),
            o.createElement(
              "ul",
              null,
              o.createElement(
                "li",
                null,
                o.createElement(
                  "a",
                  {
                    className: Lo.navLink,
                    href: "https://nytimes.com",
                    onClick: () => i((0, v.OO)("wordle", "nyt-nav", !0, null)),
                  },
                  o.createElement(
                    "div",
                    { className: Lo.navItem },
                    o.createElement("span", {
                      className: P()(Lo.navIcon, Lo.nytIcon),
                    }),
                    o.createElement(
                      "div",
                      { className: Lo.navDescription },
                      "The New York Times"
                    )
                  )
                )
              )
            ),
            o.createElement(
              "h3",
              { className: Lo.moreText },
              "More From New York Times Games"
            ),
            o.createElement(
              "div",
              { className: Lo.gameList },
              o.createElement(
                "ul",
                null,
                n.map((e) =>
                  o.createElement(
                    "li",
                    { key: e.id },
                    o.createElement(
                      "a",
                      {
                        className: Lo.navLink,
                        href: e.url,
                        onClick: () =>
                          i((0, v.OO)("wordle", e.dataTrackLabel, !0, null)),
                      },
                      o.createElement(
                        "div",
                        { className: Lo.navItem },
                        o.createElement("span", {
                          style: l(e.backgroundImage),
                          className: Lo.navIcon,
                        }),
                        o.createElement(
                          "div",
                          { className: Lo.navDescription },
                          e.name
                        ),
                        e.isNew &&
                          o.createElement(
                            "span",
                            { className: Lo.newLabel },
                            "NEW"
                          ),
                        e.isBeta &&
                          o.createElement(
                            "span",
                            { className: Lo.newLabel },
                            "BETA"
                          )
                      )
                    )
                  )
                )
              )
            ),
            o.createElement(
              "div",
              { className: Lo.nytList },
              o.createElement("hr", null),
              o.createElement(
                "ul",
                null,
                [
                  {
                    id: "nyt",
                    name: "The New York Times",
                    url: "/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--nyt)",
                    dataTrackLabel: "nyt-nav",
                  },
                  {
                    id: "cooking",
                    name: "New York Times Cooking",
                    url: "https://cooking.nytimes.com",
                    backgroundImage: "var(--cooking)",
                    dataTrackLabel: "cooking-nav",
                  },
                  {
                    id: "wirecutter",
                    name: "New York Times Wirecutter",
                    url: "/wirecutter/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--wirecutter)",
                    dataTrackLabel: "wirecutter-nav",
                  },
                  {
                    id: "athletic",
                    name: "The Athletic",
                    url: "https://theathletic.com/?utm_source=wordle&utm_medium=referral&utm_campaign=wordle_nav",
                    backgroundImage: "var(--athletic)",
                    dataTrackLabel: "athletic-nav",
                  },
                ].map((e) =>
                  o.createElement(
                    "li",
                    { key: e.id },
                    o.createElement(
                      "a",
                      {
                        href: e.url,
                        className: Lo.navLink,
                        onClick: () =>
                          i((0, v.OO)("wordle", e.dataTrackLabel, !0, null)),
                        id: e.id,
                        key: e.id,
                        "data-track-label": e.dataTrackLabel,
                      },
                      o.createElement(
                        "div",
                        { className: Lo.navItem },
                        o.createElement("span", {
                          style: l(e.backgroundImage),
                          className: Lo.navIcon,
                        }),
                        e.name
                      )
                    )
                  )
                )
              )
            ),
            o.createElement(
              "div",
              { className: Lo.privacyStatic },
              o.createElement("hr", null),
              o.createElement(
                "a",
                {
                  className: Lo.privacyItem,
                  href: "/privacy/privacy-policy",
                  "data-track-label": "privacy-policy-nav",
                  onClick: () =>
                    i((0, v.OO)("wordle", "privacy-policy-nav", !0, null)),
                },
                "Privacy Policy"
              ),
              o.createElement(
                o.Fragment,
                null,
                "show" === a.PURR_DataSaleOptOutUI_v2 &&
                  o.createElement(
                    "a",
                    {
                      href: "/privacy/your-privacy-choices",
                      "data-region": "menu",
                      "data-track": "linkOptOut",
                      className: P()(Lo.privacyItem, "ccpa-link"),
                    },
                    o.createElement("div", { className: Lo.ccpaIcon }),
                    "Your Privacy Choices"
                  ),
                "show" === a.PURR_CaliforniaNoticesUI &&
                  o.createElement(
                    "a",
                    {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      href: "/privacy/privacy-policy#california-notice",
                      "data-region": "menu",
                      "data-track": "linkCANotice",
                      className: P()(Lo.privacyItem, "ccpa-link"),
                    },
                    "California Notices"
                  )
              )
            )
          );
        }
        var Ro = t(45042);
        var Bo = {
          navLoggedIn: "NavAccount-module_navLoggedIn__DU0tY",
          navLoggedOut: "NavAccount-module_navLoggedOut__L52sW",
          navDrawerHeading: "NavAccount-module_navDrawerHeading__kKsMu",
          navDrawerAccount: "NavAccount-module_navDrawerAccount__f1pjJ",
          navProfileAccount: "NavAccount-module_navProfileAccount__cyEAP",
          navButton: "NavAccount-module_navButton__UTgBV",
          logoutButton: "NavAccount-module_logoutButton__Xiu49",
          subscribeButton: "NavAccount-module_subscribeButton__F3y0Z",
          loginButton: "NavAccount-module_loginButton__p4LNv",
          navDrawerLink: "NavAccount-module_navDrawerLink__RNbG5",
          subscribeGamesSale: "NavAccount-module_subscribeGamesSale__OSUGb",
          navGamesSale: "NavAccount-module_navGamesSale__sZGtR",
        };
        function Wo() {
          const e = (0, ha.mo)() || (0, ha.R7)(),
            { userType: a } = (0, r.aF)(),
            { isGamesSaleActive: t, getButtonText: s } =
              ((0, b.D)(L.rp),
              (function () {
                const {
                  isGamesSaleActive: e,
                  acqMessage: a,
                  getUrgencyMessage: t,
                } = (function () {
                  var e;
                  const a = (0, Be.Z)("gamesSaleCTA"),
                    { userType: t } = (0, r.aF)();
                  return {
                    isGamesSaleActive:
                      (0, Ro.ux)(
                        null === (e = window) ||
                          void 0 === e ||
                          null === (e = e.location) ||
                          void 0 === e
                          ? void 0
                          : e.href
                      ) &&
                      (0, Ro.yy)(t) &&
                      a,
                    getUrgencyMessage: (e) => {
                      const a = ((e) => {
                          const a = e || new Date(Date.now());
                          if (void 0 === typeof window) return a;
                          const t = new URLSearchParams(
                            window.location.search
                          ).get("date-override");
                          return t ? new Date(t) : a;
                        })(e).getTime(),
                        t = we.sN.urgency.find((e) => {
                          let { startDate: t } = e;
                          return a >= t && a < we.Bj.getTime();
                        });
                      return (null == t ? void 0 : t.copy) || "";
                    },
                    acqMessage: we.sN.acqMessage,
                    upgradeMessage: we.sN.upgradeMessage,
                  };
                })();
                return {
                  isGamesSaleActive: e,
                  getButtonText: () => (e ? a : "Subscribe"),
                  getUrgencyMessage: t,
                };
              })()),
            { trackWordleClick: n } = be(),
            l = s(),
            i = o.createElement(
              "a",
              {
                href: Ce,
                role: "button",
                className: P()(Bo.subscribeButton, {
                  [Bo.subscribeGamesSale]: t,
                }),
                onClick: () =>
                  n({ elementLabel: "subscribe-nav", useBeacon: !0 }),
              },
              l
            ),
            c = o.createElement(
              "a",
              {
                href: De,
                role: "button",
                className: Bo.loginButton,
                "data-track-label": "log-in-nav",
                onClick: () => n({ elementLabel: "log-in-nav", useBeacon: !0 }),
              },
              "Log In"
            ),
            u = o.createElement(
              "a",
              {
                href: Me,
                role: "button",
                className: Bo.logoutButton,
                "data-track-label": "log-out-nav",
                onClick: () =>
                  n({ elementLabel: "log-out-nav", useBeacon: !0 }),
              },
              "Log Out"
            ),
            d = o.createElement(
              "div",
              { className: Bo.navProfileAccount },
              o.createElement(
                "h4",
                { className: Bo.navDrawerHeading },
                "Profile"
              ),
              o.createElement(
                "a",
                {
                  href: window.navigationLinks.account,
                  className: Bo.navDrawerLink,
                },
                "Account details"
              ),
              o.createElement(
                "div",
                { className: Bo.navLoggedIn },
                !e && !a.hasXwd && i,
                u
              )
            ),
            m = o.createElement(
              "div",
              { className: Bo.navProfileAccount },
              o.createElement(
                "h4",
                { className: Bo.navDrawerHeading },
                "Profile"
              ),
              o.createElement(
                "a",
                {
                  href: window.navigationLinks.account,
                  className: Bo.navDrawerLink,
                },
                "Account details"
              ),
              o.createElement("div", { className: Bo.navGamesSale }, u, i)
            ),
            p = t ? m : d;
          return o.createElement(
            "div",
            { className: Bo.navDrawerAccount },
            a.isLoggedIn
              ? p
              : o.createElement(
                  "div",
                  { className: Bo.navLoggedOut },
                  !e && !a.hasXwd && i,
                  c
                )
          );
        }
        var Ho = t(53818),
          Go = t(86613),
          Fo = t(90875),
          qo = { burgerSvg: "NavIcon-module_burgerSvg__j9Cig" };
        function Vo() {
          return o.createElement(
            "svg",
            {
              "aria-hidden": "true",
              className: qo.burgerSvg,
              width: "20",
              height: "17",
              viewBox: "0 0 24 17",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            o.createElement("rect", {
              x: "0.172974",
              width: "20",
              height: "3",
              rx: "1.5",
              fill: "var(--color-tone-1)",
            }),
            o.createElement("rect", {
              x: "0.172974",
              y: "7",
              width: "20",
              height: "3",
              rx: "1.5",
              fill: "var(--color-tone-1)",
            }),
            o.createElement("rect", {
              x: "0.172974",
              y: "14",
              width: "20",
              height: "3",
              rx: "1.5",
              fill: "var(--color-tone-1)",
            })
          );
        }
        var Uo = t(50142),
          Zo = t(97092),
          Xo = t(62174),
          Ko = {
            subscribeLinkGamesSales:
              "AppHeader-module_subscribeLinkGamesSales__OUbRo",
            subscribeLink: "AppHeader-module_subscribeLink__VBUGi",
            subscribeSalesText: "AppHeader-module_subscribeSalesText__gQQ1X",
            subscribeBAUText: "AppHeader-module_subscribeBAUText__R5uKe",
            appHeader: "AppHeader-module_appHeader__Jn4R7",
            icon: "AppHeader-module_icon__qLz07",
            title: "AppHeader-module_title__EQr6V",
            menuLeft: "AppHeader-module_menuLeft__q6t_Z",
            menuRight: "AppHeader-module_menuRight__Noasd",
            longTextVariant: "AppHeader-module_longTextVariant__guJaD",
            navButton: "AppHeader-module_navButton__nKv2h",
            toolbar__menu: "AppHeader-module_toolbar__menu__MIxIr",
          };
        const Yo = "nav-modal";
        function Qo(e) {
          let { isGamesSales: a } = e;
          const { winWidth: t } = (0, $e.Z)();
          return o.createElement(
            o.Fragment,
            null,
            a
              ? o.createElement(
                  "span",
                  { className: Ko.subscribeSalesText },
                  we.sN.shortMessage
                )
              : o.createElement(
                  "span",
                  { className: Ko.subscribeBAUText },
                  t < 375 ? "Subscribe" : "Subscribe to Games"
                )
          );
        }
        function Jo(e) {
          let {
            isLoading: a,
            hideForumTooltip: t = { isHidden: !0, hide: () => {} },
          } = e;
          const s = (0, b.D)(L.rp),
            n = (0, b.D)(M.yE),
            l = !!(0, b.D)(L.yn),
            i = (0, b.z)(),
            { userType: c } = (0, r.aF)(),
            u = (0, b.D)(M.zh),
            d = (0, b.D)(L._w),
            { getVariant: m, hasAbraLoadedWithUser: p } = (0, V.Z)(),
            [y, g] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            const e = m(we.DQ) === we.Vb && ve(window.location.href);
            g(e);
          }, [m, p]);
          const h = {
              context: s || void 0,
              elementName: "wordle",
              moduleLabel: "in-game",
            },
            f = (0, b.D)(C.Hh),
            { trackWordleClick: w } = be(),
            { reportExposure: k } = (0, V.Z)(),
            _ = (0, qe.RV)(d).toISOString().split("T")[0],
            E = !!u || a,
            x = (0, Ho.oS)(),
            S = (e, a) => {
              (qe.fb.includes(a.toLowerCase()) || "Backspace" === a) &&
                e.blur();
            },
            z = (e) => {
              const { key: a, currentTarget: t } = e;
              S(t, a);
            },
            N = () => {
              w({ elementLabel: "stats" }),
                i((0, v.h7)(l ? "stats" : "regiwallModal", !0));
            },
            T = () => {
              w({ elementLabel: "settings", region: "toolbar", useBeacon: !0 }),
                i((0, v.h7)("settings", !0));
            },
            j = !(
              window.isHybridWebView ||
              window.gamesAppPlatform ||
              window.newsreaderAppPlatform
            ),
            O = H.abra.getVariant(Eo.dQ),
            D = j && "0_control" !== O,
            I = (0, o.useRef)(null);
          return (
            O && k(Eo.dQ),
            D
              ? o.createElement(
                  Uo.Z,
                  { isWordle: !0 },
                  o.createElement(
                    "div",
                    null,
                    o.createElement(
                      F,
                      null,
                      o.createElement(Zo.Eg, {
                        icon: Zo.qD.MENU,
                        itemType: Zo.uF.BUTTON,
                        "aria-expanded": n,
                        onClick: () => i((0, v.c2)()),
                        onKeyDown: (e) => z(e),
                        trackingProps: {
                          puzzleId: s,
                          puzzleDate: _,
                          hasArchive: !0,
                        },
                      })
                    ),
                    o.createElement(
                      q,
                      null,
                      o.createElement(G, { trackData: h })
                    )
                  ),
                  o.createElement(
                    "h1",
                    { className: "visually-hidden" },
                    "Wordle"
                  ),
                  o.createElement(
                    "menu",
                    {
                      className: P()(Ko.toolbar__menu),
                      onKeyDown: (e) => {
                        const { key: a, target: t } = e;
                        S(t, a);
                      },
                    },
                    !f &&
                      o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          "div",
                          { ref: I },
                          o.createElement(Zo.Eg, {
                            icon: Zo.qD.FORUM,
                            url: "/"
                              .concat(x, "/crosswords/wordle-review-")
                              .concat(d, ".html"),
                            itemType: Zo.uF.LINK,
                            trackingProps: {
                              puzzleId: s,
                              puzzleDate: _,
                              hasArchive: !0,
                            },
                          })
                        ),
                        o.createElement(Xo.u, {
                          currentMoment: "game",
                          targetRef: I,
                          hideForumTooltip: t,
                        }),
                        o.createElement(Zo.Eg, {
                          icon: Zo.qD.STATS,
                          itemType: Zo.uF.BUTTON,
                          onClick: () => N(),
                          disabled: E,
                          trackingProps: {
                            puzzleId: s,
                            puzzleDate: _,
                            hasArchive: !0,
                          },
                        })
                      ),
                    o.createElement(
                      Go.Z,
                      {
                        toolbarItemIcon: Zo.qD.HELP,
                        trackingProps: {
                          puzzleId: s,
                          puzzleDate: _,
                          hasArchive: !0,
                        },
                        dropdownAlignment: c.hasXwd ? "left" : "right",
                      },
                      o.createElement(Fo.Z, {
                        type: Fo.H.BUTTON,
                        label: "How to Play",
                        onClick: () => i((0, v.h7)("help", !0)),
                      }),
                      o.createElement(Fo.Z, {
                        type: Fo.H.LINK,
                        label: "Tips and Tricks",
                        url: "/2022/02/10/crosswords/best-wordle-tips.html",
                      }),
                      o.createElement(Fo.Z, {
                        type: Fo.H.LINK,
                        label: "Glossary",
                        url: "/2023/08/01/crosswords/how-to-talk-about-wordle.html",
                      }),
                      o.createElement(Fo.Z, {
                        isWordle: !0,
                        type: Fo.H.FEEDBACK_LINK,
                        label: "Feedback",
                        feedbackLinkProps: {
                          subject: "Wordle Feedback",
                          useEnhancedHybridDebugInfo: !1,
                          type: H.N1.CUSTOM,
                          tracking: () => w({ elementLabel: "email-feedback" }),
                        },
                      }),
                      o.createElement(Fo.Z, {
                        isWordle: !0,
                        type: Fo.H.FEEDBACK_LINK,
                        label: "Report a Bug",
                        feedbackLinkProps: {
                          subject: "Wordle Bug Report",
                          useEnhancedHybridDebugInfo: !1,
                          type: H.N1.CUSTOM,
                          tracking: () => w({ elementLabel: "bug-report" }),
                        },
                      }),
                      o.createElement(Fo.Z, {
                        type: Fo.H.LINK,
                        label: "Questions?",
                        url: "https://help.nytimes.com/hc/en-us/articles/24611727334932-Wordle",
                      })
                    ),
                    o.createElement(Zo.Eg, {
                      icon: Zo.qD.SETTINGS,
                      itemType: Zo.uF.BUTTON,
                      onClick: () => T(),
                      disabled: E,
                      trackingProps: { puzzleId: s, puzzleDate: _ },
                    }),
                    !c.hasXwd &&
                      o.createElement(
                        F,
                        null,
                        o.createElement(
                          "button",
                          {
                            type: "button",
                            className: P()(Ko.subscribeLink, {
                              [Ko.subscribeLinkGamesSales]: y,
                            }),
                            "aria-label": y
                              ? we.sN.shortMessage
                              : "Subscribe to Games",
                            onClick: () => {
                              (0, W.c)("wordle"),
                                w({
                                  elementLabel: "subscribe",
                                  region: "toolbar",
                                  useBeacon: !0,
                                });
                            },
                          },
                          o.createElement(Qo, { isGamesSales: y })
                        )
                      )
                  )
                )
              : o.createElement(
                  "header",
                  {
                    className: P()(Ko.appHeader, "wordle-app-header"),
                    onKeyDown: (e) => {
                      "Enter" === e.key && e.stopPropagation();
                    },
                  },
                  o.createElement(
                    "div",
                    { className: Ko.menuLeft },
                    o.createElement(
                      F,
                      null,
                      o.createElement(
                        "button",
                        {
                          type: "button",
                          id: Ko.navButton,
                          className: Ko.icon,
                          "aria-label": "Menu",
                          "aria-haspopup": "menu",
                          "aria-controls": Yo,
                          "aria-expanded": n,
                          onClick: () => i((0, v.c2)()),
                          onKeyDown: (e) => z(e),
                        },
                        o.createElement(Vo, null)
                      )
                    ),
                    o.createElement(
                      q,
                      null,
                      o.createElement(G, { trackData: h })
                    )
                  ),
                  o.createElement("h1", { className: Ko.title }, "Wordle"),
                  o.createElement(
                    "menu",
                    {
                      className: P()(Ko.menuRight, {
                        [Ko.longTextVariant]: !c.hasXwd,
                      }),
                      onKeyDown: (e) => {
                        const { key: a, target: t } = e;
                        S(t, a);
                      },
                    },
                    o.createElement(
                      "button",
                      {
                        type: "button",
                        id: "help-button",
                        className: Ko.icon,
                        "aria-label": "Help",
                        "aria-haspopup": "dialog",
                        "aria-controls": "help-dialog",
                        onClick: () => {
                          w({ elementLabel: "help", useBeacon: !0 }),
                            i((0, v.h7)("help", !0));
                        },
                      },
                      o.createElement(Na, { icon: "help" })
                    ),
                    !f &&
                      o.createElement(
                        "button",
                        {
                          type: "button",
                          id: "statistics-button",
                          className: Ko.icon,
                          "aria-label": "Statistics",
                          "aria-haspopup": "dialog",
                          "aria-controls": "stats-dialog",
                          onClick: () => N(),
                          disabled: E,
                        },
                        o.createElement(Na, { icon: "statistics", disabled: E })
                      ),
                    o.createElement(
                      "button",
                      {
                        type: "button",
                        id: "settings-button",
                        className: Ko.icon,
                        "aria-label": "Settings",
                        "aria-haspopup": "dialog",
                        "aria-controls": "settings-dialog",
                        onClick: () => T(),
                        disabled: E,
                      },
                      o.createElement(Na, { icon: "settings", disabled: E })
                    ),
                    !c.hasXwd &&
                      o.createElement(
                        F,
                        null,
                        o.createElement(
                          "button",
                          {
                            type: "button",
                            className: P()(Ko.subscribeLink, {
                              [Ko.subscribeLinkGamesSales]: y,
                            }),
                            "aria-label": y ? we.sN.shortMessage : "Subscribe",
                            onClick: () => {
                              (0, W.c)("wordle"),
                                w({ elementLabel: "subscribe", useBeacon: !0 });
                            },
                          },
                          o.createElement(Qo, { isGamesSales: y })
                        )
                      )
                  )
                )
          );
        }
        function $o() {
          const e = (0, b.z)();
          return o.createElement(
            "a",
            {
              href: "/crosswords",
              onClick: () => e((0, v.OO)("wordle", "games-logo-nav", !0, null)),
            },
            o.createElement(
              "svg",
              {
                className: "pz-nav__logo",
                width: "95",
                height: "18",
                viewBox: "0 0 138 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-label":
                  "New York Times Games Logo. Click for more puzzles",
              },
              o.createElement("rect", {
                width: "138",
                height: "25",
                fill: "none",
              }),
              o.createElement("path", {
                d: "M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z",
                fill: "var(--color-tone-1)",
              }),
              o.createElement("path", {
                d: "M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z",
                fill: "var(--color-tone-1)",
              }),
              o.createElement("path", {
                d: "M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z",
                fill: "var(--color-tone-1)",
              }),
              o.createElement("path", {
                d: "M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z",
                fill: "var(--color-tone-1)",
              }),
              o.createElement("path", {
                d: "M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z",
                fill: "var(--color-tone-1)",
              }),
              o.createElement("path", {
                d: "M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z",
                fill: "var(--color-tone-1)",
              }),
              o.createElement("path", {
                d: "M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z",
                fill: "var(--color-tone-1)",
              })
            )
          );
        }
        var es = {
          overlayNav: "NavModal-module_overlayNav__EewdW",
          contentNav: "NavModal-module_contentNav__gdDZp",
          SlideRight: "NavModal-module_SlideRight__OZJm6",
          closingNav: "NavModal-module_closingNav__vsGdD",
          SlideLeft: "NavModal-module_SlideLeft__bnLDK",
          headerContainer: "NavModal-module_headerContainer__Z0aay",
          toolbarVariant: "NavModal-module_toolbarVariant__lIBIx",
          closeIconNav: "NavModal-module_closeIconNav__P3kl2",
          nytIconContainer: "NavModal-module_nytIconContainer__B6b8p",
        };
        function as() {
          const e = (0, b.z)(),
            a = (0, b.D)(M.yE),
            [t, s] = (0, o.useState)(!1),
            r = !(
              window.isHybridWebView ||
              window.gamesAppPlatform ||
              window.newsreaderAppPlatform
            ),
            n = H.abra.getVariant(Eo.dQ),
            l = r && "0_control" !== n,
            i = (0, o.useRef)(null);
          (0, pt.Z)(Boolean(a), i);
          const c = (0, o.useRef)(null);
          return (
            (0, yt.Z)(Boolean(a), c),
            a
              ? o.createElement(
                  "section",
                  {
                    ref: c,
                    className: es.overlayNav,
                    id: Yo,
                    "data-testid": "nav-modal-overlay",
                    onClick: () => {
                      s(!0);
                    },
                    onKeyDown: (e) => {
                      "Escape" === e.key && s(!0),
                        "Enter" === e.key && e.stopPropagation();
                    },
                    onAnimationEnd: (a) => {
                      (0, $a.flushSync)(() => {
                        a.animationName === es.SlideLeft &&
                          (s(!1), e((0, v.iB)()));
                      });
                    },
                  },
                  o.createElement(
                    "div",
                    {
                      className: P()(es.contentNav, { [es.closingNav]: t }),
                      id: "content-nav",
                    },
                    o.createElement(
                      "div",
                      {
                        className: P()(es.headerContainer, {
                          [es.toolbarVariant]: l,
                        }),
                      },
                      o.createElement(
                        "button",
                        {
                          ref: i,
                          className: P()(es.closeIconNav, {
                            [es.toolbarVariant]: l,
                          }),
                          "aria-label": "Close",
                          type: "button",
                          onClick: (e) => {
                            s(!0);
                          },
                        },
                        o.createElement(Na, {
                          "aria-hidden": "true",
                          icon: "close",
                        })
                      ),
                      o.createElement(
                        "div",
                        {
                          className: P()(es.nytIconContainer, {
                            [es.toolbarVariant]: l,
                          }),
                        },
                        o.createElement($o, null)
                      )
                    ),
                    o.createElement(Mo, null),
                    o.createElement(Wo, null)
                  )
                )
              : null
          );
        }
        const ts = {
          linkInfo: {
            title:
              "You can now link your Wordle stats to a free New York Times account.",
            getText: () => [
              "Wordle stats are currently saved locally in the browser where you play, which means different devices may save different stats.",
              "If the browser memory is cleared, your stats will be lost.",
              "Linking your stats to a free account means keeping your streak and stats anywhere you're logged in.",
            ],
            text2:
              "<b>You can continue to play Wordle without an account,</b> but your stats will not appear across devices and may reset if the browser data is cleared.",
            icon: "var(--link-info)",
            alt: "Wordle Icon with NYT Logo",
          },
          statsProblem: {
            title: "Something doesn't look right.",
            getText: (e) =>
              e
                ? [
                    "Experiencing a problem? Wordle currently saves your stats and game progress to your New York Times account.",
                    "<b>If your data is incorrect,</b> make sure you are logged in to the correct account. If you share your account, you may be seeing game data from another user of your account.",
                    'For more information about playing Wordle, visit our <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/24611727334932-Wordle">Help Center</a> for assistance.',
                  ]
                : [
                    "Experiencing a problem? By default, Wordle saves your stats and game progress to your device or browser. You can also link your data to a New York Times account so your data is available anywhere.",
                    "<b>If your data is incorrect,</b> you may need to log in to your New York Times account. If you do not have an account, you may have played on a different device or browser today, or someone else may have played on the device or browser you are currently using.",
                    'For more information about playing Wordle, visit our <a target="_blank" href="https://help.nytimes.com/hc/en-us/articles/24611727334932-Wordle">Help Center</a> for assistance.',
                  ],
            icon: "var(--stats-problem)",
            alt: "Wordle Icon with Question Mark",
          },
        };
        var os = {
          title: "Explainer-module_title__pxagP",
          containerLink: "Explainer-module_containerLink__Eahjg",
          containerProblems: "Explainer-module_containerProblems__YkeXK",
          explainerFooterText: "Explainer-module_explainerFooterText__v5jPj",
          text: "Explainer-module_text__DosQz",
          statsLinkContainer: "Explainer-module_statsLinkContainer__UwtoZ",
          actionButton: "Explainer-module_actionButton__QMznh",
          helpButton: "Explainer-module_helpButton__Y3kVe",
          loginButton: "Explainer-module_loginButton__ndryx",
          gamesIcon: "Explainer-module_gamesIcon___J53J",
          headerNew: "Explainer-module_headerNew__y8y2y",
          close: "Explainer-module_close__wTSom",
        };
        function ss(e) {
          let {
            type: a,
            loggedIn: t = !1,
            closeButton: s,
            trackExplainerClick: r,
          } = e;
          const {
              getText: n,
              title: l,
              icon: i,
              alt: c,
              text2: u = "",
            } = ts[a],
            d = n(t),
            m = !!u && !t,
            p = "linkInfo" === a ? os.containerLink : os.containerProblems;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: os.headerNew },
              o.createElement(
                "p",
                null,
                o.createElement("img", {
                  className: os.gamesIcon,
                  alt: "NYT Games Logo",
                  style: { content: "var(--gameslogo)" },
                })
              ),
              s()
            ),
            o.createElement(
              "div",
              { className: p },
              o.createElement("img", { alt: c, style: { content: i } }),
              o.createElement("h2", { className: os.title }, l),
              o.createElement(
                "div",
                null,
                d.map((e, a) =>
                  o.createElement("p", {
                    key: a,
                    className: os.text,
                    dangerouslySetInnerHTML: { __html: e },
                  })
                )
              ),
              o.createElement(
                "div",
                { className: os.statsLinkContainer },
                o.createElement(
                  "a",
                  {
                    className: os.helpButton,
                    href: "https://help.nytimes.com/hc/en-us/articles/24611727334932-Wordle",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: () => r("help-center-broken-stats"),
                  },
                  "Visit the Help Center"
                ),
                !t &&
                  o.createElement(
                    Fe,
                    {
                      styles: os.loginButton,
                      trackEvent: {
                        eventName: "",
                        sendContext: !1,
                        element: {
                          label: "log-in-broken-stats",
                          name: "wordle",
                        },
                      },
                    },
                    "Log in or create a free account"
                  )
              )
            ),
            m &&
              o.createElement("p", {
                className: os.explainerFooterText,
                dangerouslySetInnerHTML: { __html: u },
              })
          );
        }
        var rs = "Page-module_closing__YdTL_",
          ns = "Page-module_SlideOut__Kn9ZJ",
          ls = "Page-module_pageNew__DnZEs",
          is = "Page-module_close__woWx7",
          cs = "Page-module_noDarkMode__g_QCc",
          us = "Page-module_content__ZZpzo",
          ds = "Page-module_pageFixed__Yu8Dx",
          ms = "Page-module_contentContainer__DXzS4";
        function ps(e) {
          let { adProps: a = {} } = e;
          const { couldHaveAd: t, hasAd: s } = a,
            r = (0, b.z)(),
            n = (0, b.D)(M.Zp),
            [l, i] = (0, o.useState)(!1),
            c = !!(0, b.D)(L.yn),
            u = (0, b.D)(M.td),
            d = (0, b.D)(L.MF),
            { trackWordleClick: m } = be();
          (0, o.useEffect)(() => {
            u && i(!0);
          }, [u]);
          const p = (0, o.useRef)(null);
          (0, pt.Z)(Boolean(n), p);
          const y = (0, o.useRef)(null);
          if (((0, yt.Z)(Boolean(n), y), !n)) return null;
          const g = (e) =>
              o.createElement(
                "button",
                {
                  ref: p,
                  type: "button",
                  "aria-label": "Close",
                  className: is,
                  "data-testid": "close",
                  onClick: () => {
                    i(!0),
                      "statsProblem" === e &&
                        d &&
                        r(
                          (0, v.uO)("", !1, {
                            label: "stats-link-error",
                            name: "wordle",
                          })
                        );
                  },
                },
                o.createElement(Na, { icon: "close" })
              ),
            h = {
              linkInfo: {
                content: o.createElement(ss, {
                  closeButton: () => g("linkInfo"),
                  type: "linkInfo",
                  loggedIn: c,
                  trackExplainerClick: () => r((0, v.uO)("more-info", !1)),
                }),
              },
              statsProblem: {
                content: o.createElement(ss, {
                  closeButton: () => g("statsProblem"),
                  loggedIn: c,
                  type: "statsProblem",
                  trackExplainerClick: (e) => m({ elementLabel: e }),
                }),
              },
            },
            { content: f } = h[n],
            w = ["statsLink"].includes(n);
          return o.createElement(
            "dialog",
            {
              ref: y,
              open: !0,
              "data-testid": "pageNew",
              className: P()(ls, { [ds]: t && s, [rs]: l, [cs]: w }),
              onAnimationEnd: (e) => {
                (0, $a.flushSync)(() => {
                  e.animationName === ns && (i(!1), r((0, v.I3)()));
                });
              },
              onKeyDown: (e) => {
                "Escape" === e.key && i(!0);
              },
            },
            o.createElement(
              "div",
              { className: us },
              o.createElement("div", { className: ms }, f)
            )
          );
        }
        var ys = "ToastContainer-module_toastContainer__SIgMB",
          gs = "ToastContainer-module_toaster__TYGMD",
          hs = "ToastContainer-module_gameToaster__HPkaC",
          bs = "ToastContainer-module_systemToaster__K3Q61",
          fs = {
            flexContainer: "Toast-module_flexContainer__UOBGz",
            expandToRow:
              "Toast-module_expandToRow__iaMp_ Toast-module_flexContainer__UOBGz",
            mobileColumn: "Toast-module_mobileColumn__vYBTF",
            "visually-hidden": "Toast-module_visually-hidden__zpIcn",
            flexCenter: "Toast-module_flexCenter__UiW52",
            regiwallText: "Toast-module_regiwallText__BdjzX",
            regiwallText_hideDTMC: "Toast-module_regiwallText_hideDTMC__nVQ3p",
            regiwallText_heading: "Toast-module_regiwallText_heading__LRCi3",
            regiwallText_heading_condensed:
              "Toast-module_regiwallText_heading_condensed__yXSJ8",
            regiwallText_subheading:
              "Toast-module_regiwallText_subheading__Hh2EZ",
            regiwallText_link: "Toast-module_regiwallText_link__iSu8I",
            toast: "Toast-module_toast__iiVsN",
            toast_regiwall: "Toast-module_toast_regiwall__oSBNY",
            win: "Toast-module_win__kqUor",
            fade: "Toast-module_fade__hF7us",
            slideDown: "Toast-module_slideDown__ivNba",
            flyIn: "Toast-module_flyIn__pUHyb",
            flyOut: "Toast-module_flyOut__OLBDV",
            fadeIn: "Toast-module_fadeIn__m3C3c",
          };
        function ws(e) {
          let { toast: a } = e;
          const { text: t, duration: s, timestamp: r } = a,
            n = (0, b.z)(),
            [l, i] = (0, o.useState)(!1),
            c = "You are now logged in to your Times account." === t;
          return (
            (0, ga.Z)(() => i(!0), s === 1 / 0 ? null : s),
            o.createElement(
              "div",
              {
                className: P()(fs.toast, c && fs.toast_regiwall, {
                  [fs.fade]: l,
                }),
                onTransitionEnd: () => {
                  n((0, v.RS)(t, r));
                },
                "aria-live": "polite",
              },
              t
            )
          );
        }
        function ks() {
          const e = (0, b.D)(M.BZ),
            a = e.filter((e) => e.isSystem),
            t = e.filter((e) => !e.isSystem),
            s = (e, a) =>
              o.createElement(
                "div",
                { className: ys },
                o.createElement(
                  "div",
                  { className: gs, id: a },
                  e.map((e) =>
                    o.createElement(ws, {
                      key: "".concat(e.text, "-").concat(e.timestamp),
                      toast: e,
                    })
                  )
                )
              );
          return o.createElement(o.Fragment, null, s(t, hs), s(a, bs));
        }
        var vs = {
          container: "Error-module_container__qq_q0",
          SlideIn: "Error-module_SlideIn__WlIVo",
          errorContainer: "Error-module_errorContainer__guLQP",
          errorText: "Error-module_errorText__m3mh6",
          errorTilesContainer: "Error-module_errorTilesContainer__V7shi",
          errorTiles: "Error-module_errorTiles__AE9kN",
          backButton: "Error-module_backButton___ydkt",
          errorBannerContainer: "Error-module_errorBannerContainer__pfK75",
          errorTitle: "Error-module_errorTitle__rS8xm",
          close: "Error-module_close__cXxlX",
          errorRow: "Error-module_errorRow__No1ux",
          hideBanner: "Error-module_hideBanner__Q6BVU",
          SlideOut: "Error-module_SlideOut__NeDv_",
        };
        function _s() {
          const [e, a] = (0, o.useState)(!1);
          return o.createElement(
            "div",
            {
              "aria-hidden": e,
              className: P()(vs.errorBannerContainer, { [vs.hideBanner]: e }),
            },
            o.createElement(
              "div",
              { className: vs.errorRow, "aria-hidden": e },
              o.createElement("p", { className: vs.errorTitle }, "Error"),
              o.createElement(
                "span",
                { role: "button", className: vs.close, onClick: () => a(!0) },
                o.createElement(Na, {
                  icon: "close",
                  fillColor: "var(--white)",
                })
              )
            ),
            o.createElement(
              "p",
              null,
              "Oops, something went wrong. Please try again later."
            )
          );
        }
        var Es = t(55968),
          xs = {
            key: "Key-module_key__kchQI",
            fade: "Key-module_fade__dc3AW",
            half: "Key-module_half__HooWu",
            one: "Key-module_one__zlfH6",
            oneAndAHalf: "Key-module_oneAndAHalf__bq8Tw",
          };
        const Cs = {
            backspace: {
              character: "←",
              text: "backspace",
              jsEventKeyName: " ",
            },
            enter: { character: "↵", text: "enter", jsEventKeyName: "Enter" },
          },
          Ss = (e) =>
            e === Cs.backspace.character
              ? o.createElement(Na, { icon: "backspace" })
              : e === Cs.enter.character
              ? Cs.enter.text
              : e >= "a" && e <= "z"
              ? e
              : void 0;
        function zs(e) {
          let { value: a, evaluation: t, isKeyDisabled: s } = e;
          const [r, n] = o.useState(!1),
            l = Ss(a);
          if (
            (o.useEffect(() => {
              t && n(!0);
            }, [t]),
            !l)
          )
            return o.createElement("div", {
              "data-testid": "spacer",
              className: 1 === a.length ? xs.half : xs.one,
            });
          let i = "add ".concat(a);
          return (
            a === Cs.backspace.character
              ? (i = Cs.backspace.text)
              : a === Cs.enter.character
              ? (i = Cs.enter.text)
              : t && (i = "".concat(a, " ").concat(t)),
            o.createElement(
              "button",
              {
                type: "button",
                "data-key": a,
                "data-state": t,
                "aria-label": i,
                onKeyDown: (e) => {
                  (e.key !== Cs.enter.jsEventKeyName &&
                    e.key !== Cs.backspace.jsEventKeyName) ||
                    e.stopPropagation();
                },
                "aria-disabled": s,
                className: P()(xs.key, {
                  [xs.oneAndAHalf]:
                    a === Cs.backspace.character || a === Cs.enter.character,
                  [xs.fade]: r,
                }),
                onTransitionEnd: () => n(!1),
              },
              l
            )
          );
        }
        var Ns = "Keyboard-module_keyboard__uYuqf",
          Ts = "Keyboard-module_row__ilOKU";
        const js = [
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
          ["-", "a", "s", "d", "f", "g", "h", "j", "k", "l", "-"],
          ["↵", "z", "x", "c", "v", "b", "n", "m", "←"],
        ];
        function Os() {
          const e = (0, o.useRef)(null),
            a = (0, b.z)(),
            t = (0, b.D)(Ja.$N),
            s = (0, b.D)(R.OC),
            r = (0, b.D)(h.ee),
            n = (e) => {
              "←" === e || "Backspace" === e
                ? a((0, Es.as)())
                : "↵" === e || "Enter" === e
                ? a((0, Es.EX)())
                : qe.fb.includes(e.toLowerCase()) &&
                  a((0, Es.lq)(e.toLowerCase()));
            },
            l = (e) => {
              if (!0 === e.repeat) return;
              const { key: a, metaKey: t, ctrlKey: o } = e;
              t ||
                o ||
                ((qe.fb.includes(a.toLowerCase()) ||
                  "Backspace" === a ||
                  "Enter" === a) &&
                  n(a));
            };
          return (
            (0, o.useEffect)(() => {
              if (!r)
                return (
                  window.addEventListener("keydown", l),
                  () => window.removeEventListener("keydown", l)
                );
            }, [r]),
            o.createElement(
              "div",
              {
                className: Ns,
                role: "group",
                "aria-label": "Keyboard",
                ref: e,
                onClick: (a) => {
                  const t = a.target.closest("button");
                  t &&
                    e.current &&
                    e.current.contains(t) &&
                    void 0 !== t.dataset.key &&
                    n(t.dataset.key);
                },
                onMouseDown: (e) => {
                  e.preventDefault();
                },
              },
              js.map((e, a) =>
                o.createElement(
                  "div",
                  { className: Ts, key: a },
                  e.map((e, r) =>
                    o.createElement(zs, {
                      key: "".concat(e, "-").concat(a, "-").concat(r),
                      value: e,
                      isKeyDisabled: null == s ? void 0 : s.includes(e),
                      evaluation: t[e],
                    })
                  )
                )
              )
            )
          );
        }
        var Ps = (e) => {
            var a;
            let { dismissIcon: t } = e;
            const [s, r] = o.useState(
              (null === (a = window.navigator) || void 0 === a
                ? void 0
                : a.onLine) || !1
            );
            o.useEffect(() => {
              const e = () => r(!0),
                a = () => r(!1);
              return (
                window.addEventListener("online", e),
                window.addEventListener("offline", a),
                () => {
                  window.removeEventListener("online", e),
                    window.removeEventListener("offline", a);
                }
              );
            }, []);
            const n = P()("pz-offline-ticker", { "is-offline": !s });
            return o.createElement(
              "div",
              {
                className: n,
                "aria-hidden": s,
                "data-testid": (function () {
                  const e = "pz-offline-ticker";
                  return s ? e : "".concat(e, "-is-offline");
                })(),
              },
              "You're offline! Progress may not be saved.",
              t &&
                o.createElement(
                  "span",
                  {
                    role: "button",
                    "aria-label": "Close",
                    className: "offline-ticker-dismiss",
                    onClick: () => r(!0),
                  },
                  t
                )
            );
          },
          Ds = t(78845),
          Is = t(10396),
          As = () => {
            const e = window.isMobileDevice,
              a = (0, H.Xy)();
            return o.createElement(
              "footer",
              { className: P()(Ds.Z.container, { [Ds.Z.mobile]: e }) },
              o.createElement(
                "section",
                null,
                o.createElement(Is.Z, {
                  navigationLinks: window.navigationLinks,
                  directives: a,
                })
              )
            );
          },
          Ls = (e) => {
            let { id: a, position: t, className: s } = e;
            const r = P()(
              "ad",
              "place-ad",
              "Ad-module_adContainer__ZAFEc",
              "Ad-module_hasAdLabel__IXofl",
              s
            );
            return o.createElement("div", {
              ref: (e) => {
                var o, s;
                null === (o = window) ||
                  void 0 === o ||
                  null === (o = o.AdSlot4) ||
                  void 0 === o ||
                  null === (s = o.initializeAd) ||
                  void 0 === s ||
                  s.call(o, e, { id: a, position: t });
              },
              className: r,
              id: a,
              "data-position": t,
            });
          },
          Ms = () => {
            const e = !(0, s.K1)() && !(0, ne.Xj)() && !(0, ne._7)(),
              [a, t] = (0, o.useState)(0),
              [r, n] = (0, o.useState)(!0),
              [l, i] = (0, o.useState)(!1),
              [c, u] = (0, o.useState)(!1),
              [d, m] = (0, o.useState)(!1);
            return (
              (0, o.useEffect)(() => {
                new Promise((e, a) => {
                  const t = new XMLHttpRequest();
                  t.open("HEAD", "/ads.txt", !0),
                    (t.onreadystatechange = () => {
                      t.readyState === t.HEADERS_RECEIVED && (t.abort(), e(!1));
                    }),
                    (t.onerror = (a) => {
                      e(!0);
                    }),
                    t.send();
                }).then((e) => {
                  i(e), n(!e);
                });
              }, []),
              (0, o.useEffect)(() => {
                document && !document.body.classList.contains("scrollable") && r
                  ? (document.body.classList.add("scrollable"), m(!0))
                  : r || (document.body.classList.remove("scrollable"), m(!1));
              }, [r]),
              (0, o.useEffect)(() => {
                if (!e || c) return;
                const o = (e) => (a) => {
                    const { slot: t, id: o, type: s, isEmpty: r } = a;
                    (0 === e || r) && (n(!1), i(!0));
                  },
                  s = (e) => (o) => {
                    var s;
                    const { slot: r, id: l, type: i } = o,
                      c =
                        null !== (s = l || (r && r.getSlotElementId())) &&
                        void 0 !== s
                          ? s
                          : "";
                    if (l || r) {
                      var u;
                      const o = document.getElementById(c),
                        { height: s = 0 } =
                          (null == o ||
                          null === (u = o.getBoundingClientRect) ||
                          void 0 === u
                            ? void 0
                            : u.call(o)) || {};
                      (s > a || "AdEmpty" === e) && (t(s - 1), t(s)),
                        n("AdEmpty" !== e);
                    }
                  };
                let r = [];
                return (
                  window.AdSlot4 &&
                    e &&
                    (u(!0),
                    window.AdSlot4.cmd.push(() => {
                      var e;
                      const a =
                        null === (e = window) ||
                        void 0 === e ||
                        null === (e = e.AdSlot4) ||
                        void 0 === e
                          ? void 0
                          : e.events;
                      r = [
                        null == a
                          ? void 0
                          : a.subscribe({
                              name: "script_loader_error",
                              callback: o(0),
                              scope: "all",
                            }),
                        null == a
                          ? void 0
                          : a.subscribe({
                              name: "BidderError",
                              callback: o(0),
                              scope: "all",
                            }),
                        null == a
                          ? void 0
                          : a.subscribe({
                              name: "AdEmpty",
                              callback: o(1),
                              scope: "all",
                            }),
                        null == a
                          ? void 0
                          : a.subscribe({
                              name: "AdEnteredViewport",
                              callback: s("AdEnteredViewport"),
                              scope: "all",
                            }),
                        null == a
                          ? void 0
                          : a.subscribe({
                              name: "AdViewable",
                              callback: s("AdViewable"),
                              scope: "all",
                            }),
                        null == a
                          ? void 0
                          : a.subscribe({
                              name: "AdRefreshed",
                              callback: s("AdRefreshed"),
                              scope: "all",
                            }),
                      ];
                    })),
                  () => {
                    for (; r.length; ) {
                      var e;
                      null === (e = r.pop()) || void 0 === e || e.remove();
                    }
                  }
                );
              }, [e, r]),
              {
                height: a,
                hasAd: r,
                couldHaveAd: e,
                hasAdError: l,
                pageScrollable: d,
              }
            );
          },
          Rs = t(34303);
        var Bs = "ArchiveAdmireButtons-module_buttonsContainer__ZLSYU",
          Ws = "ArchiveAdmireButtons-module_archiveAdmireButton__p1Ur5";
        function Hs() {
          const e = (0, b.z)(),
            { trackWordleClick: a } = be();
          return o.createElement(
            "div",
            { className: Bs },
            o.createElement(
              "button",
              {
                type: "button",
                className: Ws,
                onClick: () => {
                  a({ region: "in-game", elementLabel: "see-stats" }),
                    e((0, v.h7)("archiveCongrats", !1));
                },
              },
              "See results"
            ),
            o.createElement(
              "a",
              {
                className: Ws,
                href: (0, b.D)(C.UQ),
                onClick: () =>
                  a({ elementLabel: "archive", region: "in-game" }),
              },
              "Play the Wordle Archive"
            )
          );
        }
        var Gs = t(65944);
        const Fs = (e) => {
            let {
              option: a,
              selectedOption: t,
              todayStatus: s,
              label: r,
              stats: n,
              timestamp: l,
              setOption: i,
            } = e;
            const c = o.useRef(new Date()),
              u = "s4t-".concat(a),
              d = (0, Gs.Z)(new Date(1e3 * l), c.current);
            return o.createElement(
              "label",
              {
                className: "StatsSelectionTool-module_option___tbeV",
                htmlFor: u,
              },
              o.createElement(
                "div",
                { className: "StatsSelectionTool-module_optionHeader__PN2q0" },
                o.createElement(
                  "span",
                  { className: "StatsSelectionTool-module_label__HCsqe" },
                  r
                ),
                o.createElement(
                  "span",
                  { className: "StatsSelectionTool-module_lastSaved__EBJVD" },
                  "Last saved ",
                  d,
                  " ago"
                )
              ),
              o.createElement(
                "div",
                {
                  className: P()("StatsSelectionTool-module_box__KSSH_", {
                    "StatsSelectionTool-module_selected__UlXC4": t === a,
                    "StatsSelectionTool-module_unselected__CmIQE":
                      t !== a && null !== t,
                  }),
                },
                o.createElement(
                  "div",
                  { className: "StatsSelectionTool-module_boxTop__Jv24G" },
                  o.createElement("input", {
                    name: "statsSelection",
                    className: "StatsSelectionTool-module_radio__aXqLj",
                    value: a,
                    type: "radio",
                    id: u,
                    checked: t === a,
                    onChange: () => i(a),
                  }),
                  o.createElement(
                    "div",
                    { className: "StatsSelectionTool-module_stats__f99Fo" },
                    o.createElement(no, { stats: n, small: !0 })
                  )
                ),
                o.createElement(
                  "div",
                  {
                    className: P()(
                      "StatsSelectionTool-module_boxBottom__aFGVF",
                      {
                        "StatsSelectionTool-module_incomplete__oy1ka":
                          "completed" !== s,
                      }
                    ),
                  },
                  "Todayʼs puzzle ",
                  s
                )
              )
            );
          },
          qs = {
            welcome: {
              component: (e) => {
                let { transition: a, hasLoaded: t } = e;
                const s = (0, b.z)(),
                  n = (0, b.D)(R.u1),
                  l = !!(0, b.D)(L.yn),
                  i = (0, b.D)(L._w),
                  c = (0, b.D)(L.rp),
                  u = (0, b.D)(L.sw),
                  d = !!(0, b.D)(L.Xr),
                  m = ((0, b.D)(B.zu), (0, b.D)(C.Hh)),
                  p = (0, b.D)(C.UQ),
                  y = (0, b.D)(R.s$),
                  {
                    getVariant: g,
                    reportExposure: h,
                    hasAbraLoaded: f,
                  } = (0, V.Z)(),
                  {
                    userType: { hasXwd: w, isLoggedIn: k },
                    updateUserType: _,
                  } = (0, r.aF)(),
                  E = w && !l,
                  x = n > 0,
                  z = ((e, a) => {
                    const t = (0, b.D)(R.s$),
                      s = (0, b.D)(Ve.ZQ),
                      n = (0, b.D)(R.u1),
                      l = (0, b.D)(Ve.xL),
                      i = (0, b.D)(C.Hh),
                      {
                        userType: { hasXwd: c, regiId: u },
                      } = (0, r.aF)();
                    return i
                      ? ((e, a, t, s, r) => {
                          const n = s && !r,
                            l = da(t),
                            i = "Want to keep playing?",
                            c = "Want to play another past puzzle?",
                            u = "You’re out of guesses.";
                          if (e && "IN_PROGRESS" === a)
                            return n
                              ? "".concat(l, " ").concat(i)
                              : s
                              ? "".concat(l, " Keep it up!")
                              : "".concat(l, " ").concat(i);
                          if ("WIN" === a) {
                            const e = ma(t);
                            return n
                              ? "".concat(e, " ").concat(c)
                              : s
                              ? e
                              : "".concat(e, " ").concat(c);
                          }
                          return "FAIL" === a
                            ? n
                              ? "".concat(u, " ").concat(c)
                              : s
                              ? u
                              : "".concat(u, " ").concat(c)
                            : n
                            ? o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(
                                  "span",
                                  null,
                                  "Want to play this past puzzle?"
                                )
                              )
                            : s
                            ? o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(
                                  "span",
                                  { className: "visually-hidden" },
                                  "Get 6 chances to guess a 5-letter word."
                                ),
                                o.createElement(
                                  "span",
                                  { "aria-hidden": "true" },
                                  "Get 6 chances to guess a",
                                  " ",
                                  o.createElement(
                                    "span",
                                    { className: sa },
                                    "5-letter"
                                  ),
                                  " word."
                                )
                              )
                            : o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(
                                  "span",
                                  null,
                                  "Want to play this past puzzle?"
                                )
                              );
                        })(e, t, n, c, u)
                      : e && "IN_PROGRESS" === t
                      ? "".concat(da(n), " Keep it up!")
                      : "WIN" === t
                      ? "Great job on today’s puzzle! Check out your progress."
                      : "FAIL" === t
                      ? "Tomorrow’s a new day, with a new puzzle. See you then."
                      : a && !e && s > 0 && l
                      ? o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "Go ahead, add another day to your ",
                            s,
                            " day streak."
                          ),
                          o.createElement(
                            "span",
                            { "aria-hidden": "true" },
                            "Go ahead, add another day to your",
                            " ",
                            o.createElement(
                              "span",
                              { className: "Welcome-module_bold___70f6" },
                              s,
                              " day"
                            ),
                            " streak."
                          )
                        )
                      : o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(
                            "span",
                            { className: "visually-hidden" },
                            "Get 6 chances to guess a 5-letter word."
                          ),
                          o.createElement(
                            "span",
                            { "aria-hidden": "true" },
                            "Get 6 chances to guess a",
                            " ",
                            o.createElement(
                              "span",
                              { className: sa },
                              "5-letter"
                            ),
                            " word."
                          )
                        );
                  })(x, l),
                  N = ((e) => {
                    const a = (0, b.D)(R.s$);
                    return e
                      ? "IN_PROGRESS" !== a
                        ? "Hi Wordler"
                        : "Welcome Back"
                      : "";
                  })(x),
                  T = ((e) => {
                    const a = (0, b.D)(R.s$),
                      t = (0, b.D)(C.Hh);
                    return e
                      ? "IN_PROGRESS" === a
                        ? "Continue"
                        : t
                        ? "Admire Puzzle"
                        : "See Stats"
                      : "Play";
                  })(x),
                  [j, O] = (0, o.useState)(""),
                  [D, I] = (0, o.useState)(!1),
                  [A, M] = (0, o.useState)(!1),
                  { primaryCTALabel: H, primaryCTARegion: F } = ((e) => {
                    const a = (0, b.D)(R.s$),
                      t = (0, b.D)(C.Hh);
                    return e
                      ? "IN_PROGRESS" === a
                        ? { primaryCTALabel: "continue" }
                        : t
                        ? {
                            primaryCTALabel: "admire-puzzle",
                            primaryCTARegion: "welcome",
                          }
                        : { primaryCTALabel: "see-stats" }
                      : { primaryCTALabel: "play" };
                  })(x),
                  Z = (() => {
                    const { hasLoaded: e, userType: a } = (0, r.aF)(),
                      t = (0, b.D)(R.s$);
                    return (
                      e &&
                      !a.hasXwd &&
                      ((e) =>
                        le() &&
                        !(0, ne._7)() &&
                        ((e) => "IN_PROGRESS" === e)(e))(t)
                    );
                  })();
                (0, o.useEffect)(() => {
                  if (ye() && Z && f) {
                    g($) && h($);
                    const e = g(ee);
                    e && O(e);
                  }
                }, [f]),
                  (0, o.useEffect)(() => {
                    j && h(ee);
                  }, [j]),
                  (0, o.useEffect)(() => {
                    (0, U.Od)(), (0, U.ts)();
                  }, []);
                const {
                    name: X,
                    region: K,
                    label: Y,
                  } = ((e, a) => {
                    const t = (0, b.D)(Ve.ZQ),
                      o = (0, b.D)(R.s$);
                    let s = "",
                      r = "welcome-modal";
                    return (
                      (s = a ? "".concat(t) : "log-in"),
                      e &&
                        ((r = "welcome-back-modal"),
                        "IN_PROGRESS" !== o && (r = "welcome-see-stats-modal")),
                      { label: s, name: r, region: "wordle-welcome" }
                    );
                  })(x, l),
                  { trackWordleClick: Q, trackWordleImpression: J } = be(),
                  te = (0, b.D)(L.wJ),
                  oe = {
                    context: c || void 0,
                    elementName: "wordle",
                    moduleLabel: "welcome",
                    moduleName: "".concat(te),
                  };
                (0, o.useEffect)(() => {
                  J(X, K, Y);
                }, []);
                const se = (e, a) => {
                    Q({ elementLabel: e, region: a });
                  },
                  ie = re(t),
                  ce = () =>
                    Z && j !== ae && (pe() || ge())
                      ? "ad"
                      : ie
                      ? "statsSelection"
                      : "game",
                  ue = window.isHybridWebView && !d && !x && !m,
                  de = o.createElement(
                    "div",
                    { className: ea, "data-testid": "welcome-content" },
                    o.createElement(
                      q,
                      null,
                      o.createElement(
                        "div",
                        { className: na },
                        o.createElement(G, { trackData: oe })
                      )
                    ),
                    o.createElement(
                      "div",
                      {
                        className: P()(aa, {
                          "Welcome-module_largeCTA__SA0iW": pa(),
                        }),
                      },
                      x && !m && o.createElement(la, { small: !0 }),
                      o.createElement(
                        "div",
                        {
                          className: "Welcome-module_contentWelcomeMain__O6vot",
                        },
                        (m || !x) && o.createElement(la, { dayOffset: i }),
                        N && !m && o.createElement("div", { className: ta }, N),
                        o.createElement(ia, null, z),
                        o.createElement(ua, {
                          buttons: (function () {
                            const e = ve(document.location.href)
                              ? we.sN.acqMessage
                              : "Subscribe";
                            return m
                              ? E
                                ? [
                                    {
                                      text: "Register",
                                      isLogin: !0,
                                      onClick: () => {
                                        se("register-welcome");
                                      },
                                    },
                                  ]
                                : w
                                ? [
                                    {
                                      hide: "IN_PROGRESS" === y,
                                      text: "Play the Wordle Archive",
                                      secondary: !0,
                                      href: p,
                                      onClick: () => {
                                        se("archive");
                                      },
                                    },
                                    {
                                      text: T,
                                      onClick: () => {
                                        a(ce()), se(H, F);
                                      },
                                    },
                                  ]
                                : [
                                    {
                                      hide: k,
                                      text: "Log in",
                                      secondary: !0,
                                      isLogin: !0,
                                      onClick: () => {
                                        se("log-in-welcome");
                                      },
                                    },
                                    {
                                      text: "Subscribe",
                                      onClick: () => {
                                        (0, W.c)(
                                          "wordleArchiveWelcome",
                                          _,
                                          () => s((0, S.SH)())
                                        ),
                                          se("subscribe-welcome");
                                      },
                                    },
                                  ]
                              : [
                                  {
                                    hide: x || w,
                                    text: e,
                                    secondary: !0,
                                    onClick: () => {
                                      (0, W.c)("wordleArchiveWelcome", _, () =>
                                        s((0, S.SH)())
                                      ),
                                        se("subscribe-welcome");
                                    },
                                  },
                                  {
                                    hide: x || l,
                                    text: "Log in",
                                    secondary: !0,
                                    isLogin: !0,
                                    onClick: () => {
                                      se("log-in-welcome"),
                                        s(
                                          (0, v.uO)("log-in-welcome", !0, {
                                            name: "wordle",
                                            label: "log-in-welcome",
                                          })
                                        );
                                    },
                                  },
                                  {
                                    text: T,
                                    onClick: () => {
                                      Z && (pe() || ge()) && !A && j === ae
                                        ? I(!0)
                                        : a(ce()),
                                        se(H);
                                    },
                                  },
                                ];
                          })(),
                        }),
                        o.createElement(ca, { dayOffset: i, editor: u })
                      ),
                      ue &&
                        o.createElement(ya, {
                          closeMoment: () => a(ce()),
                          trackLink: () => se("welcome-more-info"),
                        })
                    ),
                    (() => {
                      const e = (0, b.D)(C.Hh),
                        { trackWordleClick: a, trackWordleImpression: t } =
                          be(),
                        s = () => {
                          t("welcome", "wordle", "download-app");
                        },
                        r = () => {
                          a({
                            elementLabel: "welcome-download-app",
                            label: "".concat((0, Je.Q)()),
                            region: "welcome",
                          });
                        },
                        n = (0, U.T4)() && !e,
                        l = pa(),
                        i = (0, U.Bm)();
                      return n
                        ? (0, U.iJ)()
                          ? l
                            ? o.createElement(Qe, {
                                ctaLink: "https://fpx3r.app.goo.gl/app-wordle",
                                newTab: !0,
                                onVisible: () => s(),
                                onClickLink: () => r(),
                              })
                            : o.createElement(Ue.j, {
                                title:
                                  "Play Wordle and more in the NYT Games app.",
                                icon: "crossword-app",
                                ctaLink: "https://fpx3r.app.goo.gl/app-wordle",
                                newTab: !0,
                                onVisible: () => s(),
                                onClickLink: () => r(),
                                type: Ue.Z.MULTI,
                              })
                          : i
                          ? o.createElement(Ue.j, {
                              ctaLink: "https://fpx3r.app.goo.gl/app-wordle",
                              position: "fixed",
                              newTab: !0,
                              onVisible: () => s(),
                              onClickLink: () => r(),
                              type: Ue.Z.GRID,
                            })
                          : o.createElement(Ue.j, {
                              title: "NEW IN THE APP",
                              message:
                                "WordleBot is now in the app!\nGuess smarter. Solve faster.\nCan you beat the bot?",
                              icon: "wordlebot",
                              ctaLink: "https://fpx3r.app.goo.gl/app-wordle",
                              newTab: !0,
                              onVisible: () => s(),
                              onClickLink: () => r(),
                              type: Ue.Z.SINGLE,
                            })
                        : null;
                    })()
                  );
                return j === ae
                  ? o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(he, {
                        onClose: (e) => {
                          D ? a(ce()) : e.error && M(!0);
                        },
                        hideView: !D,
                      }),
                      D ? null : de
                    )
                  : o.createElement(o.Fragment, null, de);
              },
              animateOut: !0,
            },
            loading: {
              component: (e) => {
                let { hasLoaded: a, transition: t } = e;
                const [s, r] = o.useState(!1),
                  n = !(0, ne._7)(),
                  l = (0, b.D)(C.Hh),
                  i = (0, b.z)(),
                  c = !!window.gamesAppPlatform;
                ((e) => {
                  const a = (0, b.z)();
                  if (e) {
                    let e = new URL(window.location.href);
                    const { hash: t } = window.location;
                    let o = null;
                    t &&
                      (([, o] = t.substring(1).split("=")),
                      (e = new URL(
                        window.location.origin + window.location.pathname
                      ))),
                      o &&
                        (a((0, v.U5)(o)),
                        window.history.replaceState(
                          window.history.state,
                          "",
                          e.href
                        ));
                  }
                })(!(window.gamesAppPlatform || window.newsreaderAppPlatform));
                const u = (0, b.D)(M.Uk);
                return (
                  (0, ga.Z)(() => r(!0), a ? null : 300),
                  o.useEffect(() => {
                    if (!a) return;
                    if (l && !n)
                      return i((0, v.Eh)("notFound")), void t("game");
                    const e = new URLSearchParams(window.location.search).get(
                      "source"
                    );
                    if (!c) {
                      if (
                        u === Va[Va.wordleRegiwallCongrats] ||
                        e === Va[Va.wordleRegiwallCongrats]
                      )
                        i((0, v.h7)("stats", !1));
                      else {
                        if (
                          u !== Va[Va.wordleRegiwallStats] &&
                          e !== Va[Va.wordleRegiwallStats]
                        )
                          return void t("welcome");
                        i((0, v.h7)("stats", !0));
                      }
                      return (
                        u &&
                          i(
                            (0, v.fz)({
                              text: "You are now logged in to your Times account.",
                              duration: 2e3,
                              isSystem: !0,
                            })
                          ),
                        void t("game")
                      );
                    }
                    t("welcome");
                  }, [a]),
                  o.createElement(
                    "div",
                    { className: ea },
                    o.createElement(
                      q,
                      null,
                      o.createElement(
                        "div",
                        { className: na },
                        o.createElement(G, {
                          trackData: {
                            elementName: "wordle",
                            moduleLabel: "loading",
                          },
                        })
                      )
                    ),
                    o.createElement(
                      "div",
                      { className: aa },
                      s &&
                        o.createElement(
                          o.Fragment,
                          null,
                          !l && o.createElement(la, { small: !0 }),
                          o.createElement(
                            "div",
                            { className: "Welcome-module_spinner__ko9gy" },
                            o.createElement(Xa, null)
                          )
                        )
                    )
                  )
                );
              },
            },
            game: {
              component: function (e) {
                let { hasLoaded: a, transition: t } = e;
                const s = Ms(),
                  n = (0, V.Z)(),
                  l = "wordle-app-game",
                  { couldHaveAd: i, hasAd: c, hasAdError: u } = s,
                  d = (0, b.D)(L.ht),
                  m = (0, b.D)(L.MF),
                  p = n.getVariant(Y),
                  {
                    userType: { regiId: y },
                  } = (0, r.aF)(),
                  g = (0, b.D)(M.Vn),
                  h = (0, b.D)(M.Zp),
                  f = g || h,
                  w = ((e) => {
                    const a = (0, b.z)(),
                      [t, s] = (0, o.useState)(!1),
                      r = (0, b.D)(C.Hh),
                      n = (0, b.D)(M.zh),
                      l = (0, b.D)(B.zu),
                      i = (0, b.D)(L.ht),
                      c = (0, b.D)(R.u1),
                      u = (0, b.D)(M.Uk),
                      d = c > 0,
                      m = (0, Be.Z)("activationRegiModal"),
                      p = (0, b.D)(R.ld),
                      y = ((e, a, t) => {
                        const s = (0, b.D)(M.Vn),
                          r = (0, o.useRef)(null),
                          { isHidden: n, hide: l } = (0, Rs.U)(
                            "wordle-hma-dismissed",
                            void 0
                          );
                        return (
                          (0, o.useEffect)(() => {
                            r.current === e && s !== e && l(), (r.current = s);
                          }, [s]),
                          n
                        );
                      })("hardModeAwareness"),
                      g = (() => {
                        const e = !(
                            window.isHybridWebView ||
                            window.gamesAppPlatform ||
                            window.newsreaderAppPlatform
                          ),
                          a = H.abra.getVariant(Eo.dQ),
                          t = e && "0_control" !== a,
                          o = (0, Rs.U)("wordle-toolbar-forum-tooltip", 2);
                        return { isHidden: !(t && !o.isHidden), hide: o.hide };
                      })(),
                      h =
                        t || !e || n || d || r || u
                          ? null
                          : l
                          ? (0, ne._7)() ||
                            (0, ne.Xj)() ||
                            vo() >= ko ||
                            i ||
                            !m
                            ? g.isHidden
                              ? p || y
                                ? null
                                : "hardModeAwareness"
                              : "companionAwareness"
                            : "activationRegiModal"
                          : "help";
                    if (
                      ((0, ga.Z)(
                        () => {
                          "companionAwareness" !== h &&
                            (a((0, v.h7)(h)), s(!0));
                        },
                        h ? 100 : null
                      ),
                      "companionAwareness" === h)
                    )
                      return g;
                  })(a);
                (0, o.useEffect)(() => {
                  p && n.reportExposure(Y);
                }, [p]);
                const k = (function () {
                    const e = (0, b.D)(Ja.Sv),
                      a = "archiveCongrats" === (0, b.D)(M.Vn),
                      t = (0, b.D)(R.s$),
                      s = "WIN" === t || "FAIL" === t,
                      r = (0, b.D)(C.Hh),
                      [n, l] = (0, o.useState)(!1);
                    return (
                      (0, o.useEffect)(() => {
                        ((r && e && s) || a) && l(!0);
                      }, [r, e, s, a]),
                      n
                    );
                  })(),
                  _ =
                    i && c
                      ? {
                          maxHeight:
                            "calc(100% - 210px - var(--header-height))",
                        }
                      : { maxHeight: "100%" },
                  E = o.createElement(
                    "main",
                    { className: "App-module_game__yruqo", id: l, style: _ },
                    d &&
                      o.createElement(Ps, {
                        dismissIcon: o.createElement(Na, { icon: "close" }),
                      }),
                    !!y && m && o.createElement(_s, null),
                    o.createElement(it, { adProps: s }),
                    k ? o.createElement(Hs, null) : o.createElement(Os, null)
                  );
                return o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(Ka.Z, { associatedSectionId: l }),
                  a &&
                    i &&
                    !u &&
                    o.createElement(Ls, { position: "top", id: "ad-top" }),
                  o.createElement(Io, null),
                  o.createElement(ps, { adProps: s }),
                  o.createElement(ks, null),
                  o.createElement(
                    "div",
                    {
                      className: "App-module_gameContainer__K_CBh",
                      inert: f ? "" : void 0,
                      "data-testid": "game-wrapper",
                    },
                    o.createElement(as, null),
                    o.createElement(Jo, { isLoading: !a, hideForumTooltip: w }),
                    a ? E : o.createElement(mt, null)
                  ),
                  o.createElement(As, null)
                );
              },
            },
            statsSelection: {
              component: (e) => {
                var a, t;
                let { transition: s } = e;
                const r = (0, b.z)(),
                  { trackWordleClick: n, trackWordleImpression: l } = be(),
                  i = (0, b.D)(L.pW),
                  c = (0, b.D)(L._w),
                  u = (0, b.D)(se.eQ),
                  d = (0, b.D)(L.xF),
                  m = (0, b.D)(L.fV),
                  p = (null == u ? void 0 : u.timestamp) || 0,
                  y = (0, w.fp)((0, se.OU)(null)),
                  g =
                    (null ===
                      (a = (0, w.w$)("wordleV2", i.toString(), !1, null)) ||
                    void 0 === a
                      ? void 0
                      : a.data) || null,
                  h =
                    (null ===
                      (t = (0, w.w$)("wordleV2", "settings", !0, null)) ||
                    void 0 === t
                      ? void 0
                      : t.data) || null,
                  f = (null == y ? void 0 : y.timestamp) || 0,
                  [k, v] = o.useState(null),
                  _ = (e) =>
                    e && 0 !== e.currentRowIndex
                      ? "IN_PROGRESS" === e.status
                        ? "in progress"
                        : "completed"
                      : "unplayed",
                  E = () => ("account" === k ? d : "device" === k ? g : null);
                if (
                  (o.useEffect(() => {
                    l("stats-self-select", "wordle", null);
                  }, []),
                  o.useEffect(() => {
                    (u && y) || s("game");
                  }, [u, y]),
                  !u || !y)
                )
                  return null;
                const x = {
                  context: "".concat(c),
                  elementName: "wordle",
                  moduleLabel: "stats-selection",
                };
                return o.createElement(
                  "div",
                  { className: "StatsSelectionTool-module_container__meUAX" },
                  o.createElement(
                    q,
                    null,
                    o.createElement(
                      "div",
                      { className: "StatsSelectionTool-module_back__fZ22v" },
                      o.createElement(G, { trackData: x })
                    )
                  ),
                  o.createElement(
                    "div",
                    { className: "StatsSelectionTool-module_header__oZIc5" },
                    o.createElement(
                      "h2",
                      { className: "visually-hidden" },
                      "Games"
                    ),
                    o.createElement("img", {
                      className: "StatsSelectionTool-module_gamesIcon__spDD2",
                      style: { content: "var(--gameslogo)" },
                      alt: "New York Times Games Logo",
                    })
                  ),
                  o.createElement(
                    "form",
                    {
                      className: "StatsSelectionTool-module_form__eOT7F",
                      onSubmit: (e) => {
                        e.preventDefault();
                        const a =
                            "account" === k ? u : "device" === k ? y : null,
                          t = E(),
                          o = "account" === k ? m : "device" === k ? h : null,
                          l = (0, se.ic)(a, c);
                        a &&
                          (n({
                            elementLabel: "save-stats",
                            region: "stats-self-select",
                            label: k || "",
                          }),
                          r((0, S.W2)(t, o, a, l)),
                          s("game"));
                      },
                      id: "",
                    },
                    o.createElement(
                      "fieldset",
                      null,
                      o.createElement(
                        "legend",
                        {
                          className:
                            "StatsSelectionTool-module_description__dmLIg",
                        },
                        "Your stats on this device donʼt match the stats saved to your account.",
                        " ",
                        o.createElement(
                          "span",
                          {
                            className: "StatsSelectionTool-module_bold__zqF2S",
                          },
                          "Select one"
                        ),
                        " to save permanently."
                      ),
                      o.createElement(Fs, {
                        option: "account",
                        stats: u,
                        label: "Saved to your account",
                        timestamp: p,
                        todayStatus: _(d),
                        selectedOption: k,
                        setOption: v,
                      }),
                      o.createElement(Fs, {
                        option: "device",
                        stats: y,
                        label: "Found on this device",
                        timestamp: f,
                        todayStatus: _(g),
                        selectedOption: k,
                        setOption: v,
                      })
                    ),
                    o.createElement(
                      "div",
                      {
                        className:
                          "StatsSelectionTool-module_buttonContainer__wiJe0",
                      },
                      o.createElement(
                        "button",
                        {
                          type: "submit",
                          className:
                            "StatsSelectionTool-module_submitButton__yazh7",
                          disabled: !k,
                        },
                        (() => {
                          const e = E();
                          return e && "completed" !== _(e)
                            ? "Save Stats & Play Todayʼs Puzzle"
                            : "Save Stats";
                        })()
                      )
                    )
                  )
                );
              },
              animateOut: !0,
            },
            ad: {
              component: (e) => {
                let { transition: a, hasLoaded: t } = e;
                const s = (0, V.Z)(),
                  r = s.getVariant(Q),
                  n = s.getVariant(X.w);
                (0, o.useEffect)(() => {
                  r && s.reportExposure(Q);
                }, [r]),
                  (0, o.useEffect)(() => {
                    n && s.reportExposure(X.w);
                  }, [n]);
                const l = re(t) ? "statsSelection" : "game";
                return o.createElement(Z.Z, {
                  id: "intsl",
                  position: "intsl",
                  onClose: () => a(l),
                  isSpecialAdUnit: !0,
                  enableCountdown: r === J,
                  ctaCopy: "Continue to Wordle",
                  delaySkip: n === X.$,
                });
              },
            },
          },
          Vs = () => "loading";
        function Us() {
          return o.createElement(
            "div",
            { className: "portal-content" },
            o.createElement("div", { id: "portal-toolbar-forum-tooltip" })
          );
        }
        var Zs = (e) => {
            let { analyticsPuzzleID: a, game: t, puzzleID: s } = e;
            (0, o.useEffect)(() => {
              if (window.isHybridWebView && window.NativeBridge) {
                var e;
                const o = (e) => {
                  const o = {};
                  (o[g.Iu] = { [t]: { analyticsPuzzleID: a, puzzleID: s } }),
                    e.respondWith(o);
                };
                return (
                  null === (e = window.NativeBridge) ||
                    void 0 === e ||
                    e.addEventListener(g.Iu, o),
                  () => {
                    var e;
                    null === (e = window.NativeBridge) ||
                      void 0 === e ||
                      e.removeEventListener(g.Iu, o);
                  }
                );
              }
            }, [a, s]);
          },
          Xs = t(29415),
          Ks = t(69202);
        const Ys = (e) => {
            let { text: a = "error" } = e;
            return o.createElement(
              "div",
              { className: vs.errorTilesContainer },
              a
                .split("")
                .map((e, a) =>
                  o.createElement(
                    "div",
                    {
                      className: vs.errorTiles,
                      key: "".concat(a, "-").concat(e),
                    },
                    e
                  )
                )
            );
          },
          Qs = () =>
            o.createElement(
              "div",
              { className: vs.errorText },
              "You’re offline.",
              o.createElement("br", null),
              "Find a connection and come back."
            ),
          Js = () =>
            o.createElement(
              "div",
              { className: vs.errorText },
              "Oops, something went wrong.",
              o.createElement("br", null),
              "Please try again later."
            ),
          $s = () =>
            o.createElement(
              "div",
              { className: vs.errorText },
              "Page not found"
            );
        function er(e) {
          let { hasLoaded: a, errorType: t } = e;
          const s = document.referrer.includes("nytimes"),
            r = (0, b.z)(),
            n = {
              offline: {
                tiles: o.createElement(Ys, { text: "yikes" }),
                content: o.createElement(Qs, null),
              },
              default: {
                tiles: o.createElement(Ys, null),
                content: o.createElement(Js, null),
              },
              notFound: {
                tiles: o.createElement(Ys, null),
                content: o.createElement($s, null),
              },
            },
            { tiles: l, content: i } = n[t];
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(as, null),
            o.createElement(Jo, { isLoading: !a }),
            o.createElement(
              "div",
              { className: vs.container, role: "dialog" },
              o.createElement(
                "div",
                { className: vs.errorContainer },
                l,
                i,
                s &&
                  o.createElement(
                    "button",
                    {
                      className: vs.backButton,
                      type: "button",
                      "data-testid": "back",
                      onClick: () => {
                        "offline" === t &&
                          r((0, v.uO)("stats-link-offline", !1)),
                          (0, Ks.n)();
                      },
                    },
                    "Back"
                  )
              )
            )
          );
        }
        const ar = () => {
          const e = (0, b.D)(M.Vn),
            a = (0, b.D)(M.Zp),
            t = (0, b.z)();
          (0, o.useEffect)(() => {
            if (window.isHybridWebView && window.NativeBridge) {
              const o = (o) => {
                const s = {};
                e || a
                  ? (t((0, v.Mr)()),
                    t((0, v.I3)()),
                    (s[g.Q5] = !0),
                    o.respondWith(s))
                  : ((s[g.Q5] = !1), o.respondWith(s));
              };
              return (
                window.NativeBridge.addEventListener(g.Q5, o),
                () => {
                  var e;
                  null === (e = window.NativeBridge) ||
                    void 0 === e ||
                    e.removeEventListener(g.Q5, o);
                }
              );
            }
          }, [e, a, t]);
        };
        function tr() {
          const e = (0, b.D)(L.Us),
            a = (0, b.D)(C.Hh),
            t = (0, b.D)(L.Ci),
            { hasLoaded: l } = (0, r.aF)(),
            i = (0, b.D)(L.rp),
            c = (0, b.D)(L.pW),
            u = (0, b.D)(M.zh),
            { hasAbraLoadedWithUser: d } = (0, V.Z)(),
            m = (0, b.z)();
          o.useEffect(() => {
            const e = (0, n.NI)();
            return () => clearInterval(e);
          }, []),
            ar(),
            (0, Xs.Z)(),
            (function () {
              const { hasAbraLoadedWithUser: e, getVariant: a } = (0, V.Z)(),
                t = (0, b.z)();
              (0, o.useEffect)(() => {
                e &&
                  "1_Cutover" ===
                    a("GAMES_wordleCalculatedStreakCutover_0624") &&
                  t((0, Qa.b)(!0));
              }, [e]);
            })(),
            o.useEffect(() => {
              if (!t) {
                var e;
                const a =
                  (window.location.pathname.includes("/puzzles/shortz") &&
                    (null === (e = window.gameData) || void 0 === e
                      ? void 0
                      : e.wordleShortzDate)) ||
                  null;
                if (a) return void m(j(a));
                m(T());
              }
            }, [t]),
            o.useEffect(() => {
              t &&
                e &&
                !a &&
                (m(
                  (0, v.fz)({
                    text: "Your stats have been linked to your account.",
                    duration: 2e3,
                    isSystem: !0,
                  })
                ),
                m((0, v.Mv)()),
                m(
                  (0, v.uv)(
                    "stats-successful",
                    "wordle-stats-link",
                    "automatic-opt-in"
                  )
                ));
            }, [e, t, a]),
            Zs({ analyticsPuzzleID: i, puzzleID: c, game: "wordle" }),
            k();
          const y = t && l && d;
          return o.createElement(
            o.Fragment,
            null,
            (0, s.K1)() && o.createElement(A, null),
            u
              ? o.createElement(er, { hasLoaded: y, errorType: u })
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(Us, null),
                  o.createElement(p, {
                    hasLoaded: y,
                    config: qs,
                    initialMoment: Vs(),
                  })
                )
          );
        }
      },
      42659: function (e, a, t) {
        t.d(a, {
          Ay: function () {
            return c;
          },
          EA: function () {
            return y;
          },
          Py: function () {
            return d;
          },
          SH: function () {
            return h;
          },
          UM: function () {
            return u;
          },
          W2: function () {
            return f;
          },
          e2: function () {
            return m;
          },
          eD: function () {
            return b;
          },
          eL: function () {
            return g;
          },
          q5: function () {
            return p;
          },
        });
        var o = t(36629),
          s = t(65489),
          r = t(97476),
          n = t(55968),
          l = t(98026),
          i = t(78961);
        const c = "wordle/api/LOAD_SOLUTION",
          u = "wordle/api/SOLUTION_SUCCESS",
          d = "wordle/api/SOLUTION_ERROR",
          m = "wordle/api/APP_LOADED",
          p = "wordle/api/RESTART_LOAD",
          y = "wordle/api/MAKE_STATS_SELECTION",
          g = () => ({ type: m }),
          h = () => ({ type: p }),
          b = (e) => {
            let { today: a } = e;
            return (e) => {
              return (
                e({ type: c }),
                s.Be.get(
                  ((t = a),
                  ""
                    .concat(s.OB.edge, "/svc/wordle/v2/")
                    .concat((0, o.Z)(t, "yyyy-MM-dd"), ".json"))
                )
                  .catch((e) => {
                    if ("1970-01-01" === (0, o.Z)(a, "yyyy-MM-dd")) {
                      const t = [
                        "message: ".concat(e.message),
                        "today: ".concat(a),
                        "new Date(): ".concat(new Date()),
                        "new Date().getTimezoneOffset(): ".concat(
                          new Date().getTimezoneOffset()
                        ),
                        "Intl.DateTimeFormat().resolvedOptions().timeZone: ".concat(
                          Intl.DateTimeFormat().resolvedOptions().timeZone
                        ),
                      ];
                      (e.message = t.join(", ")),
                        (0, s.lY)(new Error(e.message), {
                          api: "games-puzzles",
                          category: "wordle-solution-date-invalid",
                        });
                    } else
                      (0, s.lY)(new Error(e.message), {
                        api: "games-puzzles",
                        category: "wordle-solution",
                      });
                    throw e;
                  })
                  .then((a) => {
                    if (!a.hasOwnProperty("solution")) throw new Error();
                    !(function (a) {
                      e({
                        type: u,
                        payload: {
                          data: {
                            solution: a.solution,
                            dayOffset: a.days_since_launch,
                            id: a.id,
                            editor: a.editor,
                            printDate: a.print_date,
                          },
                        },
                      });
                    })(a);
                  })
                  .catch((a) => {
                    e({ type: d }),
                      a.message && "No internet" === a.message
                        ? e((0, r.Eh)("offline"))
                        : e((0, r.Eh)("default"));
                  })
              );
              var t;
            };
          },
          f = (e, a, t, o) => (s) => {
            e && (s((0, n.rb)(e)), s((0, n.w0)(e.currentRowIndex))),
              a && s((0, l.$r)(a)),
              s((0, i.WX)(t, o)),
              s({ type: y }),
              s(
                (0, r.fz)({
                  text: "Your saved stats have been updated",
                  duration: 6e3,
                  isSystem: !0,
                })
              );
          };
      },
      6425: function (e, a, t) {
        t.d(a, {
          Ci: function () {
            return c;
          },
          MF: function () {
            return i;
          },
          On: function () {
            return f;
          },
          Us: function () {
            return x;
          },
          Xr: function () {
            return E;
          },
          _w: function () {
            return b;
          },
          cZ: function () {
            return h;
          },
          fV: function () {
            return _;
          },
          ht: function () {
            return d;
          },
          pW: function () {
            return y;
          },
          rp: function () {
            return w;
          },
          sw: function () {
            return g;
          },
          vC: function () {
            return l;
          },
          wJ: function () {
            return k;
          },
          xF: function () {
            return v;
          },
          yn: function () {
            return u;
          },
        });
        var o = t(40826),
          s = t(37126);
        const r = (e) => e.api,
          n = (e) => e.moogle.getPuzzleProgress,
          l = (e) => e.moogle.player,
          i = (0, o.P1)([n], (e) => e.error),
          c = (0, o.P1)(r, (e) => e.appLoaded),
          u = (e) => e.moogle.regiId,
          d = (0, o.P1)([u], (e) => !!e),
          m = (0, o.P1)(r, (e) => (null == e ? void 0 : e.solution)),
          p =
            ((0, o.P1)(m, (e) => (null == e ? void 0 : e.isLoading)),
            (0, o.P1)(m, (e) => (null == e ? void 0 : e.data))),
          y = (0, o.P1)(p, (e) => (null == e ? void 0 : e.id) || 0),
          g = (0, o.P1)(p, (e) => (null == e ? void 0 : e.editor) || void 0),
          h = (0, o.P1)(p, (e) => (null == e ? void 0 : e.solution) || ""),
          b = (0, o.P1)(p, (e) => (null == e ? void 0 : e.dayOffset) || 0),
          f = (0, o.P1)(p, (e) => (null == e ? void 0 : e.printDate) || void 0),
          w = (0, o.P1)(b, (e) => e.toString()),
          k = (0, o.P1)([s.Hh, f], (e, a) => ({
            date: a,
            t: "".concat(e ? "archive" : "today"),
          })),
          v = (0, o.P1)([n, y], (e, a) => {
            var t;
            return (
              (null === (t = e.statesByPuzzleId[a]) || void 0 === t
                ? void 0
                : t.game_data) || null
            );
          }),
          _ = (e) => {
            var a;
            return (
              (null === (a = e.moogle.getRemoteSettings.data) || void 0 === a
                ? void 0
                : a.settings) || null
            );
          },
          E = (0, o.P1)([l], (e) => {
            var a;
            return (
              (null == e ||
              null === (a = e.stats) ||
              void 0 === a ||
              null === (a = a.wordle) ||
              void 0 === a ||
              null === (a = a.legacyStats) ||
              void 0 === a
                ? void 0
                : a.timestamp) || null
            );
          }),
          x = (0, o.P1)([u, E], (e, a) => !!e && !a);
      },
      37126: function (e, a, t) {
        t.d(a, {
          Hh: function () {
            return r;
          },
          UQ: function () {
            return n;
          },
          wt: function () {
            return s;
          },
        });
        var o = t(40826);
        const s = (e) => e.archiveDate,
          r = (0, o.P1)(s, (e) => !!e),
          n = (0, o.P1)(s, (e) => {
            const [a, t] = e.split("-");
            return "/games/wordle/archive/".concat(a, "/").concat(t);
          });
      },
      55968: function (e, a, t) {
        t.d(a, {
          EX: function () {
            return k;
          },
          Rj: function () {
            return d;
          },
          VS: function () {
            return g;
          },
          ZH: function () {
            return y;
          },
          as: function () {
            return w;
          },
          lq: function () {
            return f;
          },
          oX: function () {
            return m;
          },
          qX: function () {
            return p;
          },
          rb: function () {
            return h;
          },
          w0: function () {
            return b;
          },
        });
        var o = t(66203),
          s = t(95280),
          r = t(23153),
          n = t(97476),
          l = t(6425),
          i = t(64145),
          c = t(52787),
          u = t(39371);
        const d = "wordle/game/SET_INITIAL_GAME",
          m = "wordle/game/CONTINUE_GAME",
          p = "wordle/game/ADD_LETTER",
          y = "wordle/game/BACKSPACE",
          g = "wordle/game/EVALUATE_ROW",
          h = (e) => ({ type: d, payload: { game: e } }),
          b = (e) => ({ type: m, payload: { currentRowIndex: e } }),
          f = (e) => (a, t) => {
            const o = (0, r.kU)(t()),
              s = (0, u.Fd)(t());
            o || s.length >= c.yX || a({ type: p, payload: { letter: e } });
          },
          w = () => (e, a) => {
            (0, r.kU)(a()) || e({ type: y });
          },
          k = () => (e, a) => {
            const t = a(),
              d = (0, r.kU)(t),
              m = (0, u.Fd)(t),
              p = (0, l.cZ)(t),
              y = (0, u.kr)(t),
              h = (0, u.b1)(t),
              b = (0, u.u1)(t),
              f = (0, u.ld)(t),
              w = (0, l._w)(t),
              k = (0, i.xL)(t);
            if (d) return;
            if (m.length !== c.yX)
              return e(
                (0, n.fz)({ text: "Not enough letters", invalidate: !0 })
              );
            if (!(0, s.yd)(m, p))
              return e((0, n.fz)({ text: "Not in word list", invalidate: !0 }));
            if (f) {
              const { validGuess: a, errorMessage: t } = (0, s.q4)(
                m,
                y[b - 1],
                h[b - 1]
              );
              if (!a)
                return e(
                  (0, n.fz)({
                    text: t || "Not valid in hard mode",
                    invalidate: !0,
                  })
                );
            }
            const v = b + 1,
              _ = m === p,
              E = !_ && v >= c.Ac,
              x = _ && k;
            let C = "IN_PROGRESS";
            _ ? (C = "WIN") : E && (C = "FAIL"),
              "IN_PROGRESS" !== C && (0, o.HB)(),
              e({
                type: g,
                payload: {
                  status: C,
                  isStreak: x,
                  numGuesses: v,
                  guess: m,
                  dayOffset: w,
                },
              });
          };
      },
      52787: function (e, a, t) {
        t.d(a, {
          Ac: function () {
            return o;
          },
          aU: function () {
            return r;
          },
          yX: function () {
            return s;
          },
        });
        const o = 6,
          s = 5,
          r = [
            "Genius",
            "Magnificent",
            "Impressive",
            "Splendid",
            "Great",
            "Phew",
          ];
      },
      39371: function (e, a, t) {
        t.d(a, {
          Fd: function () {
            return g;
          },
          OC: function () {
            return b;
          },
          b1: function () {
            return h;
          },
          gO: function () {
            return f;
          },
          kr: function () {
            return d;
          },
          ld: function () {
            return y;
          },
          s$: function () {
            return m;
          },
          u1: function () {
            return p;
          },
        });
        var o = t(40826),
          s = t(36629),
          r = t(95280),
          n = t(6425),
          l = t(69623),
          i = t(37126),
          c = t(52787);
        const u = (e) => e.persist.game,
          d = (0, o.P1)(u, (e) => e.boardState),
          m = (0, o.P1)(u, (e) => e.status),
          p = (0, o.P1)(u, (e) => e.currentRowIndex),
          y = (0, o.P1)(u, (e) => e.hardMode),
          g = (0, o.P1)([d, p], (e, a) => e[a]),
          h = (0, o.P1)([d, p, n.cZ], (e, a, t) =>
            e.map((e, o) => (o >= a ? null : (0, r.EJ)(e, t)))
          ),
          b = (0, o.P1)([g, m], (e, a) => {
            const t = r.fb,
              o = [];
            return (
              "IN_PROGRESS" === a
                ? e
                  ? e.length === c.yX
                    ? o.push(...t)
                    : e.length < c.yX && o.push("↵")
                  : o.push("↵", "←")
                : o.push(...t, "↵", "←"),
              o
            );
          }),
          f = (0, o.P1)(
            [h, n._w, p, y, m, l.cK, l.F_, i.Hh, i.wt],
            (e, a, t, o, r, n, l, i, u) => {
              const d = Number(a).toLocaleString();
              let m = i
                ? "Archive ".concat(
                    (0, s.Z)(
                      new Date("".concat(u, "T12:00:00")),
                      "MMMM d, yyyy"
                    ),
                    "\n"
                  )
                : "";
              (m += "Wordle ".concat(d)),
                (m += " ".concat("WIN" === r ? t : "X", "/").concat(c.Ac)),
                o && (m += "*");
              let p = "";
              return (
                e.forEach((e) => {
                  e &&
                    (e.forEach((e) => {
                      if (!e) return;
                      let a = "";
                      switch (e) {
                        case "correct":
                          a = ((e) => (e ? "🟧" : "🟩"))(l);
                          break;
                        case "present":
                          a = ((e) => (e ? "🟦" : "🟨"))(l);
                          break;
                        case "absent":
                          a = ((e) => (e ? "⬛" : "⬜"))(n);
                      }
                      p += a;
                    }),
                    (p += "\n"));
                }),
                { text: "".concat(m, "\n\n").concat(p.trim()) }
              );
            }
          );
      },
      54117: function (e, a, t) {
        t.d(a, {
          Z: function () {
            return H;
          },
        });
        var o = t(72669),
          s = t(16441),
          r = t(96205),
          n = t(98026),
          l = t(55968),
          i = t(52787);
        function c(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function u(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? c(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : c(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const d = {
          boardState: Array(i.Ac).fill(""),
          currentRowIndex: 0,
          status: "IN_PROGRESS",
          hardMode: !1,
        };
        function m(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function p(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? m(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : m(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const y = {
          hardMode: !1,
          darkMode:
            (null === (g = document.body) ||
            void 0 === g ||
            null === (g = g.className) ||
            void 0 === g
              ? void 0
              : g.includes("dark")) || !1,
          colorblindMode: !1,
        };
        var g,
          h = t(42659),
          b = t(73997),
          f = t(78961);
        function w(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function k(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? w(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : w(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        var v = t(97476);
        function _(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function E(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? _(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : _(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const x = {
          modal: null,
          page: null,
          error: null,
          isNavModalOpen: !1,
          toasts: [],
          isPageClosing: !1,
          wasModalOpenedByClick: !1,
          webSourceParam: "",
        };
        var C = t(71670);
        function S(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function z(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? S(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : S(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const N = {
          isAnimatingRow: !1,
          lastRowInvalid: !1,
          lastRowWin: !1,
          isRestoringSession: !1,
          hasStreakCutover: !1,
        };
        function T(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function j(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? T(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : T(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const O = {
          solution: { isLoading: !1, error: !1, data: null },
          appLoaded: !1,
        };
        const P = (0, o.UY)({
          persist: (0, o.UY)({
            game: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : d,
                a = arguments.length > 1 ? arguments[1] : void 0;
              switch (a.type) {
                case l.Rj: {
                  const {
                    game: {
                      boardState: t,
                      currentRowIndex: o,
                      status: s,
                      hardMode: r,
                    },
                  } = a.payload;
                  return u(
                    u({}, e),
                    {},
                    {
                      boardState: t,
                      currentRowIndex: o,
                      status: s,
                      hardMode: r,
                    }
                  );
                }
                case n.RO:
                  return u(
                    u({}, e),
                    {},
                    { hardMode: a.payload.settings.hardMode }
                  );
                case n.FZ: {
                  const { name: t, value: o } = a.payload;
                  return "hardMode" === t
                    ? u(u({}, e), {}, { hardMode: o })
                    : e;
                }
                case l.qX:
                  return u(
                    u({}, e),
                    {},
                    {
                      boardState: e.boardState.map((t, o) =>
                        o === e.currentRowIndex
                          ? "".concat(t).concat(a.payload.letter)
                          : t
                      ),
                    }
                  );
                case l.ZH:
                  return u(
                    u({}, e),
                    {},
                    {
                      boardState: e.boardState.map((a, t) =>
                        t === e.currentRowIndex ? a.slice(0, a.length - 1) : a
                      ),
                    }
                  );
                case l.VS:
                  return u(
                    u({}, e),
                    {},
                    {
                      currentRowIndex: e.currentRowIndex + 1,
                      status: a.payload.status,
                    }
                  );
                default:
                  return e;
              }
            },
            settings: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : y,
                a = arguments.length > 1 ? arguments[1] : void 0;
              switch (a.type) {
                case n.RO:
                  return a.payload.settings;
                case n.FZ: {
                  const { name: t, value: o } = a.payload;
                  return p(p({}, e), {}, { [t]: o });
                }
                default:
                  return e;
              }
            },
            legacyStats: function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : b.v,
                a = arguments.length > 1 ? arguments[1] : void 0;
              switch (a.type) {
                case f.Xm: {
                  const { isOnStreak: e, legacyStats: t } = a.payload;
                  return e ? t : k(k({}, t), {}, { currentStreak: 0 });
                }
                case l.VS: {
                  const {
                    status: t,
                    isStreak: o,
                    numGuesses: s,
                    dayOffset: r,
                  } = a.payload;
                  return "IN_PROGRESS" === t
                    ? k(k({}, e), {}, { hasPlayed: !0 })
                    : ((e, a) => {
                        let {
                          isWin: t,
                          isStreak: o,
                          numGuesses: s,
                          dayOffset: r,
                        } = a;
                        const n = k(
                          k({}, e),
                          {},
                          { hasPlayed: !0, guesses: k({}, e.guesses) }
                        );
                        return (
                          t
                            ? ((n.lastWonDayOffset = r),
                              (n.guesses[s] += 1),
                              o
                                ? (n.currentStreak += 1)
                                : (n.currentStreak = 1))
                            : ((n.currentStreak = 0), (n.guesses.fail += 1)),
                          (n.maxStreak = Math.max(
                            n.currentStreak,
                            n.maxStreak
                          )),
                          (n.gamesPlayed += 1),
                          (n.gamesWon += t ? 1 : 0),
                          n
                        );
                      })(e, {
                        isWin: "WIN" === t,
                        isStreak: o,
                        numGuesses: s,
                        dayOffset: r,
                      });
                }
                case h.EA:
                  return k(k({}, e), {}, { hasMadeStatsChoice: !0 });
                default:
                  return e;
              }
            },
          }),
          overlays: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : x,
              a = arguments.length > 1 ? arguments[1] : void 0;
            switch (a.type) {
              case v.a6:
                return E(
                  E({}, e),
                  {},
                  {
                    modal: a.payload.modal,
                    wasModalOpenedByClick: a.payload.isClicked,
                  }
                );
              case v.et:
                return E(
                  E({}, e),
                  {},
                  { modal: null, wasModalOpenedByClick: !1 }
                );
              case v.Bv:
                return E(E({}, e), {}, { page: a.payload.page });
              case v.Hq:
                return E(E({}, e), {}, { page: null, isPageClosing: !1 });
              case v.a1:
                return E(E({}, e), {}, { error: a.payload.error });
              case v.hl:
                return E(E({}, e), {}, { error: null });
              case v.Am:
                return E(E({}, e), {}, { isNavModalOpen: !0 });
              case v.Bp:
                return E(E({}, e), {}, { isNavModalOpen: !1 });
              case v.h: {
                const {
                    text: t,
                    duration: o,
                    isSystem: s,
                    timestamp: r,
                  } = a.payload,
                  n = {
                    text: t,
                    duration: o || 1e3,
                    isSystem: s,
                    timestamp: r,
                  },
                  { toasts: l } = e;
                return E(E({}, e), {}, { toasts: [n, ...l] });
              }
              case v.K7: {
                const { text: t, timestamp: o } = a.payload,
                  { toasts: s } = e,
                  r = s.filter((e) => e.text !== t || e.timestamp !== o);
                return E(E({}, e), {}, { toasts: r });
              }
              case v.Jh:
                return E(E({}, e), {}, { isPageClosing: !0 });
              case v._e:
                return E(
                  E({}, e),
                  {},
                  { webSourceParam: a.payload.webSourceParam }
                );
              default:
                return e;
            }
          },
          transient: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : N,
              a = arguments.length > 1 ? arguments[1] : void 0;
            switch (a.type) {
              case l.ZH:
                return z(z({}, e), {}, { lastRowInvalid: !1 });
              case v.h: {
                const { invalidate: t, win: o } = a.payload;
                return t
                  ? z(z({}, e), {}, { lastRowInvalid: !0 })
                  : o
                  ? z(z({}, e), {}, { lastRowWin: !0 })
                  : e;
              }
              case C.Zx:
                return z(z({}, e), {}, { lastRowInvalid: !1 });
              case l.oX:
                return 0 === a.payload.currentRowIndex
                  ? e
                  : z(
                      z({}, e),
                      {},
                      { isAnimatingRow: !0, isRestoringSession: !0 }
                    );
              case l.VS:
                return z(z({}, e), {}, { isAnimatingRow: !0 });
              case C.BX:
                return z(
                  z({}, e),
                  {},
                  { isAnimatingRow: !1, isRestoringSession: !1 }
                );
              case C.BJ:
                return z(
                  z({}, e),
                  {},
                  { hasStreakCutover: a.payload.hasStreakCutover }
                );
              default:
                return e;
            }
          },
          api: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : O,
              a = arguments.length > 1 ? arguments[1] : void 0;
            switch (a.type) {
              case h.Ay:
                return j(
                  j({}, e),
                  {},
                  { solution: j(j({}, e.solution), {}, { isLoading: !0 }) }
                );
              case h.UM: {
                const {
                  solution: t,
                  id: o,
                  dayOffset: s,
                  editor: r,
                  printDate: n,
                } = a.payload.data;
                return j(
                  j({}, e),
                  {},
                  {
                    solution: j(
                      j({}, e.solution),
                      {},
                      {
                        data: {
                          solution: t,
                          id: o,
                          dayOffset: s,
                          editor: r,
                          printDate: n,
                        },
                        isLoading: !1,
                        error: !1,
                      }
                    ),
                  }
                );
              }
              case h.Py:
                return j(
                  j({}, e),
                  {},
                  {
                    solution: j(
                      j({}, e.solution),
                      {},
                      { isLoading: !1, error: !0 }
                    ),
                  }
                );
              case h.e2:
                return j(j({}, e), {}, { appLoaded: !0 });
              case h.q5:
                return j(j({}, e), {}, { appLoaded: !1 });
              default:
                return e;
            }
          },
          moogle: r.b,
          archiveDate: function () {
            return arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : window.wordleArchiveDate || "";
          },
        });
        var D = t(65489),
          I = t(69623),
          A = t(39371),
          L = t(10297),
          M = t(6425),
          R = t(64145),
          B = (e) => (a) => (t) => {
            const o = a(t),
              s = e.getState(),
              r = (0, I.F_)(s),
              i = (0, I.cK)(s),
              c = (0, I.ee)(s),
              u = (0, M.wJ)(s),
              d = (0, M.rp)(s),
              m = (0, A.ld)(s);
            switch (t.type) {
              case v.a6: {
                const { modal: e, isClicked: a } = t.payload;
                "stats" === e && a && (0, D.$g)(u, d, "wordle", e);
                break;
              }
              case v.Bv: {
                const { page: e } = t.payload;
                if ("linkInfo" === e) break;
                let a = e;
                "statsProblem" === e && (a = "stats-problem"),
                  e && (0, D.$g)(u, d, "wordle", a);
                break;
              }
              case v.Am:
                (0, D.ob)({
                  name: "wordle",
                  label: "click-nav",
                  useBeacon: !0,
                  context: null,
                });
                break;
              case v.Cp: {
                const {
                  name: e,
                  label: a,
                  useBeacon: o,
                  context: s,
                } = t.payload;
                (0, D.ob)({ name: e, label: a, useBeacon: o, context: s });
                break;
              }
              case n.FZ: {
                const { name: e, value: a } = t.payload,
                  o = {
                    darkMode: "dark-mode",
                    colorblindMode: "high-contrast",
                    hardMode: "hard-mode",
                    virtualKeyboardOnlyMode: "virtual-keyboard",
                  },
                  s = a ? "turn-on" : "turn-off";
                (0, D.LW)({
                  element: { name: "wordle", label: o[e] },
                  context: d,
                  region:
                    "virtual-keyboard" === o[e]
                      ? "settings-accessibility"
                      : null,
                  label: s,
                  name: u,
                });
                break;
              }
              case l.VS: {
                const e = r ? "1" : "0",
                  a = i ? "1" : "0",
                  o = c ? "1" : "0",
                  s = m ? "h" : "e",
                  { numGuesses: n, status: l, guess: p } = t.payload;
                1 === n &&
                  (0, D.LW)({
                    element: { name: "wordle", label: "start-game" },
                    name: u,
                    context: d,
                    label: "CB=".concat(e, " DM=").concat(a, " VK=").concat(o),
                  }),
                  (0, D.$g)(
                    u,
                    d,
                    "wordle",
                    "solve-attempt",
                    "".concat(n.toString(), "-").concat(p)
                  ),
                  "IN_PROGRESS" !== l &&
                    (0, D.$g)(
                      u,
                      d,
                      "wordle",
                      "100%-complete",
                      "".concat(s, "-").concat("WIN" === l ? n : 0)
                    );
                break;
              }
              case f._H: {
                const { isGameComplete: e } = t.payload,
                  a = e ? "congrats-modal" : "stats",
                  o = (0, L.$C)(s),
                  r = (0, L.Tp)(s),
                  n = (0, L.NW)(s),
                  l = (0, R.iW)(s),
                  i = (0, R.ZQ)(s);
                (0, D.hX)(
                  a,
                  "wordle",
                  [
                    "p: ".concat(o),
                    "w: ".concat(n),
                    "cs: ".concat(i),
                    "ms: ".concat(l),
                    "1: ".concat(r[1]),
                    "2: ".concat(r[2]),
                    "3: ".concat(r[3]),
                    "4: ".concat(r[4]),
                    "5: ".concat(r[5]),
                    "6: ".concat(r[6]),
                  ],
                  d
                ),
                  e &&
                    D.abra.getVariant("GAMES_wordlebotSBCTA_0822") &&
                    D.abra.reportExposure("GAMES_wordlebotSBCTA_0822");
                break;
              }
              case f.GP: {
                const { calculatedStats: e } = t.payload,
                  {
                    gamesPlayed: a,
                    gamesWon: o,
                    currentStreak: s,
                    maxStreak: r,
                    guesses: n,
                  } = e;
                (0, D.hX)(
                  "calculated-stats",
                  "wordle",
                  [
                    "p: ".concat(a),
                    "w: ".concat(o),
                    "cs: ".concat(s),
                    "ms: ".concat(r),
                    "1: ".concat(n[1]),
                    "2: ".concat(n[2]),
                    "3: ".concat(n[3]),
                    "4: ".concat(n[4]),
                    "5: ".concat(n[5]),
                    "6: ".concat(n[6]),
                  ],
                  d
                );
                break;
              }
              case v.Ap: {
                const { label: e, sendContext: a, element: o } = t.payload,
                  s = a ? d : null,
                  r = o
                    ? {
                        name: "",
                        label: e,
                        element: o,
                        useBeacon: !0,
                        context: s,
                        moduleName: u,
                      }
                    : {
                        name: "wordle",
                        label: e,
                        useBeacon: !0,
                        context: s,
                        moduleName: u,
                      };
                (0, D.ob)(r);
                break;
              }
              case v.fl: {
                const { name: e, region: a, label: o } = t.payload;
                (0, D.hX)(e, a, o, d);
                break;
              }
            }
            return o;
          },
          W = t(33805),
          H = () => {
            const e = void 0 !== window.__REDUX_DEVTOOLS_EXTENSION__,
              a = [(0, o.md)(s.Z, W.Uv, W.zQ, B)];
            return (
              e && a.push(window.__REDUX_DEVTOOLS_EXTENSION__()),
              (0, o.MT)(P, (0, o.qC)(...a))
            );
          };
      },
      78961: function (e, a, t) {
        t.d(a, {
          GP: function () {
            return r;
          },
          LQ: function () {
            return n;
          },
          WX: function () {
            return l;
          },
          Xm: function () {
            return o;
          },
          _H: function () {
            return s;
          },
          uo: function () {
            return i;
          },
        });
        const o = "wordle/stats/SET_INITIAL_STATS",
          s = "wordle/stats/TRACK_STATS_IMPRESSION",
          r = "wordle/stats/COLLECT_CALCULATED_STATS",
          n = (e) => ({ type: s, payload: { isGameComplete: e } }),
          l = (e, a) => ({
            type: o,
            payload: { legacyStats: e, isOnStreak: a },
          }),
          i = (e) => ({ type: r, payload: { calculatedStats: e } });
      },
      10297: function (e, a, t) {
        t.d(a, {
          $C: function () {
            return l;
          },
          NW: function () {
            return i;
          },
          Tp: function () {
            return d;
          },
          UP: function () {
            return c;
          },
          md: function () {
            return p;
          },
          nN: function () {
            return u;
          },
          nr: function () {
            return r;
          },
          zu: function () {
            return n;
          },
        });
        var o = t(40826),
          s = t(6425);
        const r = (e) => e.persist.legacyStats,
          n = (0, o.P1)([r], (e) => e.hasPlayed),
          l = (0, o.P1)(r, (e) => e.gamesPlayed),
          i = (0, o.P1)(r, (e) => e.gamesWon),
          c = (0, o.P1)(r, (e) => e.maxStreak),
          u = (0, o.P1)(r, (e) => e.currentStreak),
          d = (0, o.P1)(r, (e) => e.guesses),
          m = (0, o.P1)(r, (e) => e.lastWonDayOffset || 0),
          p = (0, o.P1)([m, s._w], (e, a) => a - e <= 1);
      },
      73997: function (e, a, t) {
        t.d(a, {
          v: function () {
            return o;
          },
        });
        const o = {
          currentStreak: 0,
          maxStreak: 0,
          guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, fail: 0 },
          gamesPlayed: 0,
          gamesWon: 0,
          hasPlayed: !1,
          lastWonDayOffset: 0,
        };
      },
      61582: function (e, a, t) {
        t.d(a, {
          $g: function () {
            return c;
          },
          AA: function () {
            return u;
          },
          a0: function () {
            return m;
          },
          bB: function () {
            return l;
          },
          cu: function () {
            return n;
          },
          m6: function () {
            return i;
          },
          xU: function () {
            return p;
          },
        });
        var o = t(40826),
          s = t(45657),
          r = t(6425);
        const n = (0, o.P1)([r.vC], (e) => {
            var a;
            return (
              (null == e ||
              null === (a = e.stats) ||
              void 0 === a ||
              null === (a = a.wordle) ||
              void 0 === a
                ? void 0
                : a.calculatedStats) || null
            );
          }),
          l =
            ((0, o.P1)([n], (e) => (null == e ? void 0 : e.hasPlayed) || !1),
            (0, o.P1)(
              [n],
              (e) => (null == e ? void 0 : e.currentStreak) || null
            )),
          i = (0, o.P1)([n], (e) => (null == e ? void 0 : e.maxStreak) || null),
          c =
            ((0, o.P1)(
              [n],
              (e) => (null == e ? void 0 : e.gamesPlayed) || null
            ),
            (0, o.P1)([n], (e) => (null == e ? void 0 : e.gamesWon) || null),
            (0, o.P1)([n], (e) => (null == e ? void 0 : e.guesses) || null),
            (0, o.P1)(
              [n],
              (e) => (null == e ? void 0 : e.lastWonPrintDate) || null
            )),
          u = (0, o.P1)([r.On, c], (e, a) => {
            if (!e || !a) return !1;
            const t = (0, s.Z)(new Date(e), new Date(a));
            return 0 === t || 1 === t;
          }),
          d = (e) => {
            var a;
            return null === (a = e.moogle) || void 0 === a
              ? void 0
              : a.postRequest;
          },
          m = (0, o.P1)([r.pW, d], (e, a) => {
            var t;
            return (
              (null === (t = a[e.toString()]) || void 0 === t
                ? void 0
                : t.error) || !1
            );
          }),
          p = (0, o.P1)([r.pW, d], (e, a) => {
            var t;
            return (
              (null === (t = a[e.toString()]) || void 0 === t
                ? void 0
                : t.isLoading) || !1
            );
          });
      },
      8508: function (e, a, t) {
        t.d(a, {
          OU: function () {
            return u;
          },
          ST: function () {
            return g;
          },
          eQ: function () {
            return m;
          },
          ic: function () {
            return p;
          },
          pz: function () {
            return y;
          },
        });
        var o = t(65489),
          s = t(83910),
          r = t(6425),
          n = t(78961),
          l = t(29949),
          i = t(73997),
          c = t(5123);
        const u = (e) => "wordle-legacy-stats-".concat(e || "ANON"),
          d = (e) => {
            var a;
            const t =
              (null === (a = (0, c.ME)()) || void 0 === a ? void 0 : a.stats) ||
              i.v;
            return {
              gamesPlayed: t.gamesPlayed,
              gamesWon: t.gamesWon,
              guesses: t.guesses,
              currentStreak: t.currentStreak,
              maxStreak: t.maxStreak,
              lastWonDayOffset: 0,
              hasPlayed: t.hasPlayed || !1,
              timestamp: Math.floor(e / 1e3),
            };
          },
          m = (e) => {
            var a;
            return (
              (null === (a = e.moogle.player) ||
              void 0 === a ||
              null === (a = a.stats) ||
              void 0 === a ||
              null === (a = a.wordle) ||
              void 0 === a
                ? void 0
                : a.legacyStats) || null
            );
          },
          p = (e, a) =>
            !(null == e || !e.lastWonDayOffset) && a - e.lastWonDayOffset <= 1,
          y = () => (e, a) => {
            const t = a(),
              { regiId: o } = t.moogle,
              i = u(o),
              c = (0, s.fp)(i),
              y = m(a()),
              g = (0, l.b)(y, c),
              h = (0, r._w)(a()),
              b = p(g, h);
            if (g) return e((0, n.WX)(g, b)), !1;
            if (o) {
              const a = (() => {
                const e = Date.now(),
                  a = u(null),
                  t = (0, s.fp)(a) || d(e);
                return (t.autoOptInTimestamp = e), (0, s.rl)(a, t), t;
              })();
              return e((0, n.WX)(a, b)), !0;
            }
            const f = d(Date.now());
            return (
              (window.tempDidLoadOldAnonStats = !0), e((0, n.WX)(f, b)), !1
            );
          },
          g = (e, a) => {
            if (!a) return !0;
            if (!e) return !1;
            const t = a.gamesPlayed < e.gamesPlayed,
              s = !e.hasMadeStatsChoice && a.hasMadeStatsChoice,
              r = t && !s;
            return (
              r &&
                Math.random() < 0.05 &&
                (0, o.lY)(new Error("WoSV2: is attempting a bad save")),
              r
            );
          };
      },
      5123: function (e, a, t) {
        t.d(a, {
          $K: function () {
            return i;
          },
          ME: function () {
            return r;
          },
          Ok: function () {
            return n;
          },
          eY: function () {
            return s;
          },
        });
        var o = t(83910);
        const s = "nyt-wordle-darkmode",
          r = (e) => (0, o.fp)("nyt-wordle-moogle/".concat(e || "ANON")),
          n = () => ({
            hardMode: !1,
            darkMode:
              !!window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches,
            colorblindMode: !1,
            virtualKeyboardOnlyMode: !1,
          }),
          l = (e, a) => {
            try {
              return localStorage.getItem(e) || a;
            } catch (e) {
              return a;
            }
          },
          i = (e) => {
            const a = "wordle-legacy-stats-",
              t = "".concat(a, "ANON"),
              o = "".concat(a).concat(e);
            return { anon: l(t, "[NONE]"), regi: l(o, "[NONE]") };
          };
      },
      64145: function (e, a, t) {
        t.d(a, {
          ZQ: function () {
            return i;
          },
          iW: function () {
            return l;
          },
          xL: function () {
            return c;
          },
        });
        var o = t(40826),
          s = t(10297),
          r = t(23153),
          n = t(61582);
        const l = (0, o.P1)([s.UP, n.m6, r.Nj], (e, a, t) =>
            t && "number" == typeof a ? a : e
          ),
          i = (0, o.P1)([s.nN, n.bB, r.Nj], (e, a, t) =>
            t && "number" == typeof a ? a : e
          ),
          c = (0, o.P1)([s.md, n.AA, n.$g, r.Nj], (e, a, t, o) =>
            o && t ? a : e
          );
      },
      33805: function (e, a, t) {
        t.d(a, {
          Uv: function () {
            return f;
          },
          ri: function () {
            return w;
          },
          yu: function () {
            return b;
          },
          zQ: function () {
            return k;
          },
        });
        var o = t(98026),
          s = t(63448),
          r = t(38918),
          n = t(55968),
          l = t(42659),
          i = t(83910),
          c = t(37126),
          u = t(5123),
          d = t(8508);
        function m(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function p(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? m(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : m(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const y = (e) => {
            const a = (0, u.ME)(e || void 0);
            return (null == a ? void 0 : a.settings) || null;
          },
          g = {
            game: "wordleV2",
            selectPuzzleIdOrSettings: (e) => {
              var a;
              return "".concat(
                (null === (a = e.api.solution.data) || void 0 === a
                  ? void 0
                  : a.id) || ""
              );
            },
            selectPuzzlePrintDate: (e) => {
              var a;
              return (
                (null === (a = e.api.solution.data) || void 0 === a
                  ? void 0
                  : a.printDate) || ""
              );
            },
            selectMoogleState: (e) => e.moogle,
            shouldSave: (e, a) =>
              (a.type === o.FZ && "hardMode" === a.payload.name) ||
              [n.VS, l.EA].includes(a.type),
            onSave: (e) => {
              let { setLegacyStats: a } = e;
              return (e, t) => {
                const { regiId: o } = t().moogle,
                  s = (0, d.OU)(o),
                  r = (0, i.fp)(s);
                (0, d.ST)(r, a) || (0, i.rl)(s, a);
              };
            },
            selectPersistedState: (e, a) => {
              const { game: t, legacyStats: o } = e.persist,
                s = (0, c.Hh)(e);
              return {
                boardState: t.boardState,
                currentRowIndex: t.currentRowIndex,
                status: t.status,
                hardMode: t.hardMode,
                isPlayingArchive: s,
                setLegacyStats: s ? void 0 : p(p({}, o), {}, { timestamp: a }),
              };
            },
            insertProgress: (e, a) => (t, o) => {
              var s;
              const r = !(0, c.Hh)(o()) && t((0, d.pz)()) ? a : e;
              ("prod" !==
                (null === (s = window.env) || void 0 === s ? void 0 : s.name) &&
                document.location.search.includes("reset")) ||
                (r && (t((0, n.rb)(r)), t((0, n.w0)(r.currentRowIndex))));
            },
            shouldPreventSaveAfterLoad: (e) =>
              !!e && "IN_PROGRESS" !== e.status,
          },
          h = {
            game: "wordleV2",
            selectPuzzleIdOrSettings: () => "settings",
            selectMoogleState: (e) => e.moogle,
            shouldSave: (e, a) => a.type === o.FZ || a.type === l.EA,
            selectPersistedState: (e) => e.persist.settings,
            insertProgress: (e, a) => (t, s) => {
              const r = (() => {
                if (e) return e;
                const { regiId: t } = s().moogle,
                  o = y(t);
                if (o) return o;
                if (t) {
                  if (a) return a;
                  const e = y(null);
                  if (e) return e;
                }
                return (0, u.Ok)();
              })();
              t((0, o.$r)(r));
            },
          },
          b = (0, s.L)(g),
          f = (0, r.d)(g),
          w = (0, s.L)(h),
          k = (0, r.d)(h);
      },
      97476: function (e, a, t) {
        function o(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function s(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? o(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : o(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        t.d(a, {
          Am: function () {
            return m;
          },
          Ap: function () {
            return b;
          },
          Bp: function () {
            return p;
          },
          Bv: function () {
            return l;
          },
          Cp: function () {
            return y;
          },
          Eh: function () {
            return C;
          },
          Hq: function () {
            return i;
          },
          I3: function () {
            return E;
          },
          Jh: function () {
            return c;
          },
          K7: function () {
            return h;
          },
          Mr: function () {
            return _;
          },
          Mv: function () {
            return x;
          },
          OO: function () {
            return N;
          },
          RS: function () {
            return j;
          },
          U5: function () {
            return D;
          },
          _e: function () {
            return w;
          },
          a1: function () {
            return u;
          },
          a6: function () {
            return r;
          },
          c2: function () {
            return S;
          },
          et: function () {
            return n;
          },
          fl: function () {
            return f;
          },
          fz: function () {
            return T;
          },
          h: function () {
            return g;
          },
          h7: function () {
            return k;
          },
          hl: function () {
            return d;
          },
          iB: function () {
            return z;
          },
          oh: function () {
            return v;
          },
          uO: function () {
            return O;
          },
          uv: function () {
            return P;
          },
        });
        const r = "wordle/overlays/OPEN_MODAL",
          n = "wordle/overlays/CLOSE_MODAL",
          l = "wordle/overlays/OPEN_PAGE",
          i = "wordle/overlays/CLOSE_PAGE",
          c = "wordle/overlays/WILL_CLOSE_PAGE",
          u = "wordle/overlays/OPEN_ERROR",
          d = "wordle/overlays/CLOSE_ERROR",
          m = "wordle/overlays/OPEN_NAV_MODAL",
          p = "wordle/overlays/CLOSE_NAV_MODAL",
          y = "wordle/overlays/TRACK_NAV_MODAL_ITEM",
          g = "wordle/overlays/ADD_TOAST",
          h = "wordle/overlays/REMOVE_TOAST",
          b = "wordle/overlays/TRACK_AUTH_CLICK",
          f = "wordle/overlays/TRACK_AUTH_IMPRESSION",
          w = "wordle/overlays/REMOVE_WEB_SOURCE_PARAM",
          k = function (e) {
            return {
              type: r,
              payload: {
                modal: e,
                isClicked:
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
              },
            };
          },
          v = (e) => ({ type: l, payload: { page: e } }),
          _ = () => ({ type: n }),
          E = () => ({ type: i }),
          x = () => ({ type: c }),
          C = (e) => ({ type: u, payload: { error: e } }),
          S = () => ({ type: m }),
          z = () => ({ type: p }),
          N = (e, a, t, o) => ({
            type: y,
            payload: { name: e, label: a, useBeacon: t, context: o },
          }),
          T = (e) => ({
            type: g,
            payload: s(s({}, e), {}, { timestamp: Date.now() }),
          }),
          j = (e, a) => ({ type: h, payload: { text: e, timestamp: a } }),
          O = function () {
            return {
              type: b,
              payload: {
                label:
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                sendContext: arguments.length > 1 ? arguments[1] : void 0,
                element: arguments.length > 2 ? arguments[2] : void 0,
              },
            };
          },
          P = (e, a, t) => ({
            type: f,
            payload: { name: e, region: a, label: t },
          }),
          D = (e) => ({ type: w, payload: { webSourceParam: e } });
      },
      21451: function (e, a, t) {
        t.d(a, {
          BZ: function () {
            return c;
          },
          PE: function () {
            return d;
          },
          Uk: function () {
            return m;
          },
          Vn: function () {
            return r;
          },
          Zp: function () {
            return l;
          },
          td: function () {
            return u;
          },
          yE: function () {
            return i;
          },
          zh: function () {
            return n;
          },
        });
        var o = t(40826);
        const s = (e) => e.overlays,
          r = (0, o.P1)(s, (e) => e.modal),
          n = (0, o.P1)(s, (e) => e.error),
          l = (0, o.P1)(s, (e) => e.page),
          i = (0, o.P1)(s, (e) => e.isNavModalOpen),
          c = (0, o.P1)(s, (e) => e.toasts),
          u = (0, o.P1)(s, (e) => e.isPageClosing),
          d = (0, o.P1)(s, (e) => e.wasModalOpenedByClick),
          m = (0, o.P1)(s, (e) => e.webSourceParam);
      },
      98026: function (e, a, t) {
        t.d(a, {
          $r: function () {
            return r;
          },
          FZ: function () {
            return s;
          },
          RO: function () {
            return o;
          },
          oz: function () {
            return n;
          },
        });
        const o = "wordle/settings/SET_INITIAL_SETTINGS",
          s = "wordle/settings/CHANGE_SETTING",
          r = (e) => ({ type: o, payload: { settings: e } }),
          n = (e, a) => ({ type: s, payload: { name: e, value: a } });
      },
      69623: function (e, a, t) {
        t.d(a, {
          F_: function () {
            return l;
          },
          cK: function () {
            return r;
          },
          ee: function () {
            return n;
          },
        });
        var o = t(40826);
        const s = (e) => e.persist.settings,
          r = (0, o.P1)(s, (e) => e.darkMode),
          n = (0, o.P1)(s, (e) => e.virtualKeyboardOnlyMode),
          l = (0, o.P1)(s, (e) => e.colorblindMode);
      },
      71670: function (e, a, t) {
        t.d(a, {
          BX: function () {
            return p;
          },
          Zx: function () {
            return y;
          },
          BJ: function () {
            return g;
          },
          yU: function () {
            return f;
          },
          IV: function () {
            return h;
          },
          b: function () {
            return b;
          },
        });
        var o = t(65489),
          s = t(39371),
          r = t(52787),
          n = t(97476),
          l = t(6425),
          i = t(37126);
        const c = "nyt-elf-limiter",
          u = window.localStorage;
        function d() {
          const e = JSON.parse(u.getItem(c));
          if (!e)
            return (
              (function () {
                try {
                  u.getItem(c) ||
                    u.setItem(
                      c,
                      JSON.stringify({ count: 0, timestamp: Date.now() })
                    );
                } catch (e) {
                  console.error(e);
                }
              })(),
              !0
            );
          const { count: a, timestamp: t } = e,
            o = Date.now() - t;
          return a < 2 && o <= 1728e5;
        }
        var m = t(23153);
        const p = "wordle/transient/LAST_TILE_REVEAL",
          y = "wordle/transient/REMOVE_INVALID",
          g = "wordle/transient/SET_HAS_STREAK_CUTOVER",
          h = () => ({ type: y }),
          b = function () {
            return {
              type: g,
              payload: {
                hasStreakCutover:
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
              },
            };
          },
          f = (e) => (a, t) => {
            const y = t(),
              g = !(window.gamesAppPlatform || window.newsreaderAppPlatform),
              { getVariant: h, reportExposure: b } = o.abra,
              f = h("GAMES_wordleInterstitial_0724"),
              w = "1_noInterstitial" === f;
            g && d() && f && b("GAMES_wordleInterstitial_0724");
            const k = (0, s.u1)(y),
              v = (0, s.s$)(y),
              _ = (0, l.cZ)(y),
              E = (0, m.Sv)(y),
              x = !!(0, l.yn)(y),
              C = (0, i.Hh)(y);
            if (e === k - 1 && (a({ type: p }), ["WIN", "FAIL"].includes(v))) {
              if (
                ("FAIL" === v &&
                  a((0, n.fz)({ text: _.toUpperCase(), duration: 1 / 0 })),
                E)
              ) {
                if (C) return;
                return setTimeout(
                  () => a((0, n.h7)(x ? "stats" : "regiwallModal", !0)),
                  "FAIL" === v ? 1500 : 0
                );
              }
              if ("WIN" === v) {
                const e = r.aU[k - 1];
                a((0, n.fz)({ text: e, duration: 2e3, win: !0 }));
              }
              setTimeout(
                () =>
                  x
                    ? a(
                        C
                          ? (0, n.h7)("archiveCongrats", !1)
                          : (0, n.h7)("stats", !1)
                      )
                    : g && d() && !w
                    ? ((function () {
                        const e = JSON.parse(u.getItem(c));
                        e && ((e.count += 1), u.setItem(c, JSON.stringify(e)));
                      })(),
                      a((0, n.h7)("loginPrompt", !1)))
                    : a((0, n.h7)("regiwallModal", !1)),
                2500
              );
            }
          };
      },
      23153: function (e, a, t) {
        t.d(a, {
          $N: function () {
            return g;
          },
          Nj: function () {
            return p;
          },
          Sv: function () {
            return u;
          },
          gw: function () {
            return d;
          },
          kU: function () {
            return y;
          },
          x9: function () {
            return m;
          },
        });
        var o = t(40826),
          s = t(95280),
          r = t(52787),
          n = t(21451),
          l = t(39371);
        const i = (e) => e.transient,
          c = (0, o.P1)(i, (e) => e.isAnimatingRow),
          u = (0, o.P1)(i, (e) => e.isRestoringSession),
          d = (0, o.P1)(i, (e) => e.lastRowInvalid),
          m = (0, o.P1)(i, (e) => e.lastRowWin),
          p = (0, o.P1)(i, (e) => e.hasStreakCutover),
          y = (0, o.P1)(
            [l.s$, c, l.u1, n.Vn, n.Zp],
            (e, a, t, o, s) => "IN_PROGRESS" !== e || a || o || s || t >= r.Ac
          ),
          g = (0, o.P1)([l.kr, l.b1, l.u1, c, u], (e, a, t, o, r) => {
            if (r) return {};
            const n = o ? t - 1 : t,
              l = a.slice(0, n);
            return (0, s.iF)(e, l);
          });
      },
      24064: function (e, a, t) {
        t.d(a, {
          D: function () {
            return r;
          },
          z: function () {
            return s;
          },
        });
        var o = t(76359);
        const s = () => (0, o.I0)(),
          r = o.v9;
      },
      95280: function (e, a, t) {
        t.d(a, {
          EJ: function () {
            return s;
          },
          RV: function () {
            return d;
          },
          fb: function () {
            return m;
          },
          iF: function () {
            return n;
          },
          q4: function () {
            return i;
          },
          xw: function () {
            return l;
          },
          yd: function () {
            return c;
          },
        });
        var o = t(96329);
        function s(e, a) {
          const t = Array(a.length).fill("absent"),
            o = Array(a.length).fill(!0),
            s = Array(a.length).fill(!0);
          for (let r = 0; r < e.length; r += 1)
            e[r] === a[r] &&
              s[r] &&
              ((t[r] = "correct"), (o[r] = !1), (s[r] = !1));
          for (let r = 0; r < e.length; r += 1) {
            const n = e[r];
            if (o[r])
              for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                if (s[e] && n === o) {
                  (t[r] = "present"), (s[e] = !1);
                  break;
                }
              }
          }
          return t;
        }
        const r = { unknown: 0, absent: 1, present: 2, correct: 3 };
        function n(e, a) {
          const t = {};
          return (
            e.forEach((e, o) => {
              const s = a[o];
              if (s)
                for (let a = 0; a < e.length; a += 1) {
                  const o = e[a],
                    n = s[a],
                    l = t[o] || "unknown";
                  r[n] > r[l] && (t[o] = n);
                }
            }),
            t
          );
        }
        function l(e) {
          const a = ["th", "st", "nd", "rd"],
            t = e % 100;
          return e + (a[(t - 20) % 10] || a[t] || a[0]);
        }
        function i(e, a, t) {
          if (!e || !a || !t) return { validGuess: !0 };
          for (let o = 0; o < t.length; o += 1)
            if ("correct" === t[o] && e[o] !== a[o])
              return {
                validGuess: !1,
                errorMessage: ""
                  .concat(l(o + 1), " letter must be ")
                  .concat(a[o].toUpperCase()),
              };
          const o = {};
          for (let e = 0; e < t.length; e += 1)
            ["correct", "present"].includes(t[e]) &&
              (o[a[e]] ? (o[a[e]] += 1) : (o[a[e]] = 1));
          const s = e
              .split("")
              .reduce((e, a) => (e[a] ? (e[a] += 1) : (e[a] = 1), e), {}),
            r = Object.keys(o);
          for (let e = 0; e < r.length; e += 1) {
            const a = r[e];
            if ((s[a] || 0) < o[a])
              return {
                validGuess: !1,
                errorMessage: "Guess must contain ".concat(a.toUpperCase()),
              };
          }
          return { validGuess: !0 };
        }
        function c(e, a) {
          return e === a || o.l.includes(e);
        }
        const u = new Date(2021, 5, 19, 0, 0, 0, 0);
        function d(e) {
          const a = new Date(u.valueOf());
          return a.setDate(a.getDate() + e), a;
        }
        const m = "abcdefghijklmnopqrstuvwxyz";
      },
      65489: function (e, a, t) {
        t.d(a, {
          $g: function () {
            return c.$g;
          },
          Be: function () {
            return v.B;
          },
          Fg: function () {
            return m.Fg;
          },
          LW: function () {
            return c.LW;
          },
          N1: function () {
            return p.N;
          },
          OB: function () {
            return s.OB;
          },
          Tv: function () {
            return m.Tv;
          },
          Xy: function () {
            return k.Xy;
          },
          abra: function () {
            return y.Fi;
          },
          hX: function () {
            return c.hX;
          },
          iU: function () {
            return s.iU;
          },
          j: function () {
            return c.j;
          },
          j0: function () {
            return s.j0;
          },
          kh: function () {
            return s.kh;
          },
          lY: function () {
            return m.lY;
          },
          ob: function () {
            return c.ob;
          },
          vO: function () {
            return d.v;
          },
          wC: function () {
            return n.wC;
          },
        });
        var o = t(74395),
          s = t(22042),
          r = t(96303),
          n = t(31069),
          l = t(73649),
          i = t(67719),
          c = t(41586),
          u = t(48198),
          d = t(33104),
          m = t(89936),
          p = t(27489),
          y = t(42714),
          g = t(6756),
          h = t(49808),
          b = t(72811),
          f = t(73972),
          w = t(53212),
          k = t(88093),
          v = t(93251);
        if (
          ((0, p.Z)(),
          (0, c.U9)(),
          (0, m.ZP)(u.win.sentryConfig),
          (0, b.Z)(u.win.datadogRumConfig),
          (0, o.Z)(),
          y.Fi.init(),
          u.win.isHybridWebView ||
            "wordle" === u.win.pageName ||
            i.U.initialize(),
          "connections" === u.win.pageName &&
            "prod" !== u.win.env.name &&
            (0, w.Z)(),
          (0, l.t6)(),
          (0, i.q)(),
          s.G7)
        )
          u.win.dataLayer = [];
        else {
          const e = (0, r.pg)();
          if (!e) {
            const e = "DFP_Prebid_0624",
              a = y.Fi.getVariant(e);
            a && y.Fi.reportExposure(e),
              (0, r.He)(),
              (0, r.I5)(a),
              (0, g.Z)((0, r.Qx)()),
              (0, f.YU)();
          }
          u.win.addEventListener("load", () => {
            (0, n.IX)(),
              (0, d.Z)(),
              e || (0, r.YY)((0, h.Z)(u.win), y.Fi.getTests()),
              (0, c.Sv)();
          });
        }
      },
      96303: function (e, a, t) {
        t.d(a, {
          He: function () {
            return x;
          },
          I5: function () {
            return E;
          },
          Qx: function () {
            return C;
          },
          YY: function () {
            return S;
          },
          pg: function () {
            return v;
          },
          vv: function () {
            return z;
          },
        });
        var o = t(53789),
          s = t(84329),
          r = t(59924),
          n = t(40821),
          l = t(45873),
          i = t(22042),
          c = t(12058),
          u = t(10431),
          d = t(48198),
          m = t(49817),
          p = t(88307),
          y = t(28395),
          g = t(85899),
          h = t(46710),
          b = t(29919),
          f = t(39385);
        function w(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        function k(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = null != arguments[a] ? arguments[a] : {};
            a % 2
              ? w(Object(t), !0).forEach(function (a) {
                  var o, s, r, n;
                  (o = e),
                    (s = a),
                    (r = t[a]),
                    (s =
                      "symbol" ==
                      typeof (n = (function (e, a) {
                        if ("object" != typeof e || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                          var o = t.call(e, "string");
                          if ("object" != typeof o) return o;
                          throw new TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return String(e);
                      })(s))
                        ? n
                        : n + "") in o
                      ? Object.defineProperty(o, s, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (o[s] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : w(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
          }
          return e;
        }
        const v = () => {
          var e, a, t;
          return (
            !(
              !window.gamesAppPlatform ||
              null === (a = window.config) ||
              void 0 === a ||
              !a.AdRequirements ||
              ("phone" ===
                (null === (t = window.config) || void 0 === t
                  ? void 0
                  : t.AdRequirements.plat) &&
                ["wordle", "connections"].includes(window.pageName || ""))
            ) ||
            (window.isMobileDevice &&
              ![
                "wordle",
                "hub",
                "connections",
                "mini-page",
                "spelling-bee",
                "strands",
              ].includes(window.pageName || "")) ||
            "adluce-socrates" ===
              (null === (e = window) ||
              void 0 === e ||
              null === (e = e.purrDirectives) ||
              void 0 === e
                ? void 0
                : e.PURR_AdConfiguration_v3)
          );
        };
        d.win.AdSlot4 = d.win.AdSlot4 || {
          cmd: [],
          init: () => null,
          events: { subscribe: () => ({ remove: () => {} }) },
          refreshAds: () => null,
        };
        const _ = d.win.AdSlot4,
          E = (e) => (0, p.Z)(_, (0, i.j0)(), (0, g.Z)(e));
        function x() {
          document.querySelectorAll("body.pz-mobile").length &&
            document
              .querySelectorAll(".pz-desktop-only .place-ad")
              .forEach((e) => {
                e.classList.remove("place-ad");
              });
        }
        const C = () => ({
            plat: (0, n.Z)(),
            prop: (0, l.Z)(),
            typ: "games",
            sov: s.Z,
            vp: (0, r.Z)(o.bf.value),
          }),
          S = function (e, a) {
            let t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            !d.win.isHybridWebView && !d.win.nyt_et && t < 10
              ? setTimeout(S, 5, e, a, t + 1)
              : _.cmd.push(() => {
                  var t;
                  if (v()) return;
                  h._k.forEach((e) => {
                    _.events.subscribe({
                      name: e,
                      scope: "all",
                      callback: (0, b.Y)(e),
                    });
                  });
                  const o = (0, i.vl)("ad-keywords"),
                    s = c.Z.current,
                    r = k(
                      k(
                        k(
                          k({}, C()),
                          {},
                          { page_view_id: s },
                          o ? { adv: o } : {}
                        ),
                        null === (t = window) ||
                          void 0 === t ||
                          null === (t = t.config) ||
                          void 0 === t
                          ? void 0
                          : t.AdRequirements
                      ),
                      {},
                      { abra_dfp: (0, m.Z)(a) }
                    );
                  var n, l, p, g;
                  _.init({
                    adTargeting: r,
                    adUnitPath: ""
                      .concat("29390238/NYT/crosswords", "/")
                      .concat(e),
                    sizeMapping: (0, y.ZP)(e, window && window.innerHeight),
                  }),
                    window.isHybridWebView &&
                      window.gamesAppPlatform &&
                      (null === (n = window) ||
                        void 0 === n ||
                        null === (n = n.NativeBridge) ||
                        void 0 === n ||
                        null === (l = n.getPageViewID) ||
                        void 0 === l ||
                        l
                          .call(n)
                          .then((e) => {
                            var a;
                            let {
                              values: { pageViewID: t },
                            } = e;
                            null === (a = _.updateAdReq) ||
                              void 0 === a ||
                              a.call(_, { page_view_id: t });
                          })
                          .catch(() => {
                            console.warn(
                              "NativeBridge getPageViewID request failed"
                            );
                          }),
                      null === (p = window) ||
                        void 0 === p ||
                        null === (p = p.NativeBridge) ||
                        void 0 === p ||
                        null === (g = p.addEventListener) ||
                        void 0 === g ||
                        g.call(p, f.nN, (e) => {
                          var a, t;
                          null != e &&
                            null !== (a = e.detail) &&
                            void 0 !== a &&
                            a.pageViewID &&
                            (null === (t = _.updateAdReq) ||
                              void 0 === t ||
                              t.call(_, { page_view_id: e.detail.pageViewID }));
                        })),
                    _.events.subscribe({
                      name: "AdRendered",
                      scope: "all",
                      callback: (e) => {
                        let { slot: a, size: t } = e;
                        if (a) {
                          const e = d.JU.getElementById(a.getSlotElementId());
                          t && 0 === t[1]
                            ? e && (0, u.cn)(e, "fluid")
                            : e && (0, u.IV)(e, "fluid");
                        }
                      },
                    });
                });
          },
          z = (e) => {
            try {
              var a, t;
              null === (a = window) ||
                void 0 === a ||
                null === (a = a.AdSlot4) ||
                void 0 === a ||
                null === (t = a.updateAdReq) ||
                void 0 === t ||
                t.call(a, { sub: e });
            } catch (a) {
              console.error("Could not refresh ads entitlement: ".concat(e), a);
            }
          };
      },
      33104: function (e, a, t) {
        t.d(a, {
          v: function () {
            return i;
          },
        });
        var o = t(22042),
          s = t(86023),
          r = t(93251),
          n = t(63682);
        const l =
          "prod" === o.OB.name
            ? "https://purr.nytimes.com"
            : "https://purr.dev.nytimes.com";
        r.B.get("".concat(l, "/v1/purr-cache"));
        const i = () => {
          if (window.ccpa) return;
          let e;
          try {
            e = [...document.querySelectorAll(".ccpa-link")];
          } catch (e) {
            return;
          }
          e.forEach((e) => {
            e.addEventListener("click", n.g), (0, s.Z)(e, n._);
          }),
            (window.ccpa = !0);
        };
        a.Z = i;
      },
      10431: function (e, a, t) {
        t.d(a, {
          IV: function () {
            return r;
          },
          Oo: function () {
            return n;
          },
          R2: function () {
            return i;
          },
          cn: function () {
            return s;
          },
          dS: function () {
            return m;
          },
          jG: function () {
            return c;
          },
          rI: function () {
            return l;
          },
          y5: function () {
            return u;
          },
        });
        var o = t(48198);
        function s(e, a) {
          null !== e && e.classList.add(a);
        }
        function r(e, a) {
          null !== e && e.classList.remove(a);
        }
        function n(e, a, t, o) {
          e.addEventListener(a, t, o);
        }
        function l(e) {
          return o.JU.getElementById(e);
        }
        function i(e) {
          return o.JU.querySelector(e);
        }
        function c(e, a) {
          e.appendChild(a);
        }
        function u(e, a) {
          (function (e) {
            for (; e.children.length; ) e.removeChild(e.children[0]);
          })(e),
            a.forEach((a) => {
              c(e, a);
            });
        }
        function d(e) {
          var a;
          return null === (a = e.currentTarget) || void 0 === a
            ? void 0
            : a.events[e.type](e);
        }
        function m(e, a, t) {
          const s = o.JU.createElement(e);
          return (
            t && c(s, o.JU.createTextNode(t)),
            Object.keys(a).forEach((e) => {
              const t = a[e];
              if ("o" === e[0] && "n" === e[1]) {
                const a = e.slice(2).toLowerCase();
                s.events || (s.events = {}), (s.events[a] = t), n(s, a, d);
              } else null != t && !1 !== t && s.setAttribute(e, t);
            }),
            s
          );
        }
      },
      39385: function (e, a, t) {
        t.d(a, {
          CY: function () {
            return l;
          },
          Iu: function () {
            return h;
          },
          Jx: function () {
            return n;
          },
          N$: function () {
            return _;
          },
          N1: function () {
            return k;
          },
          OD: function () {
            return i;
          },
          PU: function () {
            return v;
          },
          Q5: function () {
            return b;
          },
          kU: function () {
            return o;
          },
          m$: function () {
            return c;
          },
          nN: function () {
            return f;
          },
          yL: function () {
            return w;
          },
        });
        const o = "gamesAuthenticateUser",
          s = "gamesBackToHub",
          r = "gamesCacheRefresh",
          n = "getContextID",
          l = "getPageViewID",
          i = "gamesGetUserDetails",
          c = "gamesInitializeState",
          u = "setPullToRefreshEnabled",
          d = "reportABExposure",
          m = "sendAnalytic",
          p = "gamesSendEmail",
          y = "gamesSetNativeColorTheme",
          g = "share",
          h = "gamesGetGameData",
          b = "gamesOnNavigateBack",
          f = "pageViewIDDidChange",
          w = [o, s, r, n, l, i, c, u, d, m, p, y, g];
        let k = (function (e) {
            return (
              (e.SUGGESTION = "suggest"),
              (e.FEEDBACK = "feedback"),
              (e.CUSTOM = "custom"),
              (e.LETTERBOXED = "feedback-letter-boxed"),
              (e.SUDOKU = "feedback-sudoku"),
              (e.TILES = "feedback-tiles"),
              (e.WORDLE = "feedback-wordle"),
              (e.CONNECTIONS = "feedback-connections"),
              e
            );
          })({}),
          v = (function (e) {
            return (e.LIGHT = "light"), (e.DARK = "dark"), e;
          })({});
        const _ = (e) => ({
          [o]: (a) => e(o, { type: a }),
          [s]: () => e(s),
          [r]: () => e(r),
          [n]: () => e(n),
          [l]: () => e(l),
          [i]: () => e(i),
          [c]: () => e(c),
          [u]: (a) => e(u, { value: a }),
          [d]: (a) => e(d, { testName: a }),
          [m]: (a, t) => e(m, { eventName: a, options: t || {} }),
          [p]: (a) => {
            let {
              type: t,
              debugInfo: o,
              emailTitle: s,
              emailDestination: r,
            } = a;
            return e(p, {
              type: t,
              debugInfo: o,
              emailTitle: s,
              emailDestination: r,
            });
          },
          [y]: (a) => e(y, { theme: a }),
          [g]: (a, t, o) => e(g, { url: a, text: t, title: o }),
        });
      },
      43401: function (e, a, t) {
        t.d(a, {
          Cb: function () {
            return i;
          },
          Og: function () {
            return n;
          },
          R7: function () {
            return o;
          },
          Ys: function () {
            return l;
          },
          mo: function () {
            return s;
          },
          x0: function () {
            return r;
          },
        });
        const o = () => "android" === window.newsreaderAppPlatform,
          s = () => "ios" === window.newsreaderAppPlatform,
          r = () => !0 === window.isPlayTab,
          n = () =>
            ("android" === window.gamesAppPlatform || o()) &&
            window.isHybridWebView,
          l = () =>
            ("ios" === window.gamesAppPlatform || s()) &&
            window.isHybridWebView,
          i = (e, a) => {
            if (!e || !a) return !1;
            const [t, o = 0, s = 0] = e.split(".").map(Number),
              [r, n = 0, l = 0] = a.split(".").map(Number);
            return (
              t > r ||
              (!(t < r) && (o > n || (!(o < n) && (s > l || !(s < l)))))
            );
          };
      },
      73649: function (e, a, t) {
        t.d(a, {
          t6: function () {
            return l;
          },
        });
        var o = t(37226),
          s = t(22042),
          r = t(10431),
          n = t(41586);
        const l = () => {
            (() => {
              const e = (0, r.rI)((0, s.iU)("hybrid-back"));
              e &&
                window.isHybridWebView &&
                window.NativeBridge &&
                (0, r.Oo)(e, "click", () => {
                  var e;
                  "sudoku" !== (0, s.j0)() &&
                    (null === (e = window.NativeBridge) ||
                      void 0 === e ||
                      e.gamesBackToHub());
                });
            })(),
              (() => {
                if (window.isHybridWebView && window.NativeBridge) {
                  const e = document.querySelectorAll(
                      ".".concat((0, s.iU)("nav-login"))
                    ),
                    a = document.querySelectorAll(
                      ".".concat((0, s.iU)("nav-logout"))
                    ),
                    t = document.querySelectorAll(
                      ".".concat((0, s.iU)("nav-subscribe"))
                    ),
                    o = document.querySelectorAll(
                      ".".concat((0, s.iU)("nav-account-details"))
                    ),
                    n = (e) =>
                      e.forEach((e) => {
                        (0, r.cn)(e, "hybrid-hidden");
                      }),
                    l = (s) => {
                      const r = null == s ? void 0 : s.isUserLoggedIn,
                        l = null == s ? void 0 : s.isSubscribed;
                      r ? n(e) : (n(a), n(o)), l && n(t);
                    };
                  window.NativeBridge.gamesGetUserDetails()
                    .then((e) => {
                      if (!e.success) throw new Error(e.error);
                      l(e.values.gamesGetUserDetails);
                    })
                    .catch((e) => {
                      console.error("Getting user details failed", e),
                        n(a),
                        n(o);
                    }),
                    (0, r.Oo)(window, "gamesUserCredentialChanged", (e) => {
                      var a;
                      l(
                        null == e ||
                          null === (a = e.detail) ||
                          void 0 === a ||
                          null === (a = a.values) ||
                          void 0 === a
                          ? void 0
                          : a.gamesAuthenticateUser
                      );
                    });
                  const i = (e, a) => {
                    e.forEach((e) => {
                      (0, r.Oo)(e, "click", (e) => {
                        var t;
                        e.preventDefault(),
                          null === (t = window.NativeBridge) ||
                            void 0 === t ||
                            t.gamesAuthenticateUser(a).then((e) => {
                              if (!e.success) throw new Error(e.error);
                              window.dispatchEvent(
                                new CustomEvent("gamesUserCredentialChanged", {
                                  detail: e,
                                })
                              );
                            });
                      });
                    });
                  };
                  i(t, "subscribe"), i(e, "login");
                }
              })(),
              (() => {
                var e;
                const a = [...document.querySelectorAll(".top-sale-banner")],
                  t =
                    null ===
                      (e = document.querySelector(
                        ".top-sale-banner__urgency"
                      )) || void 0 === e
                      ? void 0
                      : e.innerHTML,
                  o = "".concat(
                    null != t ? t : "",
                    "50% off your first year of Games."
                  ),
                  r = (0, s.j0)();
                a.length > 0 &&
                  (0, n.j)("impression", {
                    module: { name: "games-sale-banner", region: r, label: o },
                    eventData: { page_type: "games-sale-banner" },
                  }),
                  a.forEach((e) => {
                    e.addEventListener(
                      "click",
                      () => {
                        (0, n.j)("moduleInteraction", {
                          module: {
                            region: "",
                            label: o,
                            element: { name: r, label: "games-sale-banner" },
                          },
                          eventData: {
                            pageType: "games-sale-banner",
                            type: "tap",
                          },
                        });
                      },
                      !0
                    );
                  });
              })(),
              setTimeout(() => {
                [...document.querySelectorAll(".js-hub-tracker")].forEach(
                  (e) => {
                    const a = e.dataset.trackHub,
                      t = e.dataset.trackHubContext || null;
                    e.addEventListener(
                      "click",
                      () => {
                        (0, o.d)(a, t);
                      },
                      !0
                    );
                  }
                );
              }, 0);
          },
          i = (0, s.iU)("global-nav"),
          c = (0, s.iU)("mobile-toolbar");
        document.querySelector(".pz-header"), (0, r.rI)(i), (0, r.rI)(c);
      },
      22042: function (e, a, t) {
        t.d(a, {
          B2: function () {
            return m;
          },
          G7: function () {
            return g;
          },
          NT: function () {
            return b;
          },
          OB: function () {
            return r;
          },
          iU: function () {
            return u;
          },
          j0: function () {
            return s;
          },
          kh: function () {
            return y;
          },
          l1: function () {
            return h;
          },
          vl: function () {
            return f;
          },
          y5: function () {
            return p;
          },
          zO: function () {
            return d;
          },
        });
        var o = t(48198);
        const s = () => {
            var e;
            return (
              (
                (null === (e = window) ||
                void 0 === e ||
                null === (e = e.location) ||
                void 0 === e
                  ? void 0
                  : e.pathname) || ""
              ).startsWith("/crosswords/game/mini") &&
                (o.win.pageName = "mini-page"),
              o.win.pageName || ""
            );
          },
          { env: r } = o.win,
          { featureFlags: n = {} } = o.win,
          { version: l } = r,
          i = "pz-version",
          c = l !== o.WL.getItem(i);
        try {
          o.WL.setItem(i, l);
        } catch (e) {
          console.error(e.error);
        }
        const u = (e) => "js-".concat(e),
          d = () => Date.now(),
          m = function (e) {
            const a = [];
            return (
              Object.keys(e).forEach((t) => {
                a.push("".concat((0, o.uL)(t), "=").concat((0, o.uL)(e[t])));
              }),
              "?".concat(a.join("&"))
            );
          },
          p = (e, a, t, o) => {
            const s = [],
              r = "getItem",
              n = "setItem",
              l = "removeItem",
              i = "".concat(t, "-check");
            let u, d, m;
            a && t && c && (a[l](i), a[l](t));
            const p = (e) => {
              for (; s.length; ) {
                var a;
                null === (a = s.shift()) ||
                  void 0 === a ||
                  a[e ? 1 : 0](e || u);
              }
            };
            return {
              get() {
                return d
                  ? Promise.resolve(u)
                  : new Promise((e, a) => s.push([e, a]));
              },
              initialize() {
                return (
                  a && t && a[r](i) === o && (m = a[r](t)),
                  Promise.resolve((m && JSON.parse(m)) || e())
                    .then((e) => {
                      if (((d = !0), (u = e), a && o && t && !m))
                        try {
                          a[n](i, o), a[n](t, JSON.stringify(u));
                        } catch (e) {
                          console.error(e.error);
                        }
                      p();
                    })
                    .catch(p)
                );
              },
            };
          },
          y = (/nyt-a=([^;]+)/.exec(o.JU.cookie || "") || [])[1],
          g = (/NYT-NO-ADS=([^;]+)/.exec(o.JU.cookie || "") || [])[1],
          h = (/nyt-delta=([^;]+)/.exec(o.JU.cookie || "") || [])[1],
          b = (/nyt-geo=([^;]+)/.exec(o.JU.cookie || "") || [])[1],
          f = (e, a) => {
            const t = a || o.win.location.href,
              s = e.replace(/[[\]]/g, "\\$&"),
              r = new RegExp("[?&]".concat(s, "(=([^&#]*)|&|#|$)")).exec(t);
            return r
              ? r[2]
                ? decodeURIComponent(r[2].replace(/\+/g, ""))
                : ""
              : null;
          };
      },
      54988: function (e, a, t) {
        t.d(a, {
          Bj: function () {
            return c;
          },
          DQ: function () {
            return r;
          },
          Gk: function () {
            return l;
          },
          I: function () {
            return s;
          },
          Vb: function () {
            return n;
          },
          XS: function () {
            return o;
          },
          cr: function () {
            return u;
          },
          ne: function () {
            return i;
          },
          sN: function () {
            return h;
          },
        });
        const o = "MWD_phoenix_games_sale_banner",
          s = "MWD_phoenix_games_sale_nav",
          r = "MWD_phoenix_games_sale_cta",
          n = "1_Show",
          l = new Date("06/10/2024 10:00:00 GMT-0400"),
          i = l.getTime(),
          c = new Date("07/22/2024 12:00:00 GMT-0400"),
          u = c.getTime(),
          d = new Date("06/24/2024 10:00:00 GMT-0400"),
          m = new Date("07/08/2024 10:00:00 GMT-0400"),
          p = new Date("07/18/2024 10:00:00 GMT-0400"),
          y = new Date("07/20/2024 10:00:00 GMT-0400"),
          g = new Date("07/21/2024 10:00:00 GMT-0400"),
          h = {
            acqMessage: "Subscribe for 50% off",
            shortMessage: "Save 50% on Games",
            upgradeMessage: "Upgrade and save",
            campaignId: "89RW9",
            urgency: [
              {
                color: "dark_yellow",
                copy: "Final Hours",
                shortCopy: "Final Hours",
                startDate: new Date("07/21/2024 18:00:00 GMT-0400").getTime(),
              },
              {
                color: "dark_yellow",
                copy: "Ends Today",
                shortCopy: "Ends Today",
                startDate: g.getTime(),
              },
              {
                color: "dark_yellow",
                copy: "Ends Tomorrow",
                shortCopy: "Ends Tomorrow",
                startDate: y.getTime(),
              },
              {
                color: "dark_yellow",
                copy: "Ends Soon",
                shortCopy: "Ends Soon",
                startDate: p.getTime(),
              },
              {
                color: "green",
                copy: "Time is running out",
                shortCopy: "Time is running out",
                startDate: m.getTime(),
              },
              {
                color: "green",
                copy: "Offer Won’t Last",
                shortCopy: "Offer Won’t Last",
                startDate: d.getTime(),
              },
              {
                color: "black",
                copy: "Limited Time Offer",
                shortCopy: "Limited Time Offer",
                startDate: l.getTime(),
              },
            ],
          };
      },
      83910: function (e, a, t) {
        t.d(a, {
          e_: function () {
            return c;
          },
          fp: function () {
            return r;
          },
          iM: function () {
            return u;
          },
          rl: function () {
            return n;
          },
          w$: function () {
            return i;
          },
        });
        var o = t(42101);
        function s(e, a) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            a &&
              (o = o.filter(function (a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable;
              })),
              t.push.apply(t, o);
          }
          return t;
        }
        const r = function (e) {
            let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            try {
              const t = window.localStorage.getItem(e);
              return t ? JSON.parse(t) : a;
            } catch (e) {
              return console.error(e), a;
            }
          },
          n = (e, a) => {
            try {
              return window.localStorage.setItem(e, JSON.stringify(a)), !0;
            } catch (e) {
              return console.error(e), !1;
            }
          },
          l = (e, a, t) => {
            const o = "games-".concat(a ? "settings" : "state");
            return ""
              .concat(o, "-")
              .concat(e, "/")
              .concat(t || "ANON");
          },
          i = (e, a, t, o) => {
            const s = l(e, t, o),
              n = r(s);
            return (
              (null == n ? void 0 : n.states.find((e) => e.puzzleId === a)) ||
              null
            );
          },
          c = function (e, a) {
            let t =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const r = e.selectPuzzleIdOrSettings(a),
              n = (0, o.X)(e, a),
              l = t ? void 0 : (0, o.Mc)(e, a),
              c = i(e.game, r, n, l);
            return c
              ? (function (e) {
                  for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2
                      ? s(Object(t), !0).forEach(function (a) {
                          var o, s, r, n;
                          (o = e),
                            (s = a),
                            (r = t[a]),
                            (s =
                              "symbol" ==
                              typeof (n = (function (e, a) {
                                if ("object" != typeof e || !e) return e;
                                var t = e[Symbol.toPrimitive];
                                if (void 0 !== t) {
                                  var o = t.call(e, "string");
                                  if ("object" != typeof o) return o;
                                  throw new TypeError(
                                    "@@toPrimitive must return a primitive value."
                                  );
                                }
                                return String(e);
                              })(s))
                                ? n
                                : n + "") in o
                              ? Object.defineProperty(o, s, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (o[s] = r);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : s(Object(t)).forEach(function (a) {
                          Object.defineProperty(
                            e,
                            a,
                            Object.getOwnPropertyDescriptor(t, a)
                          );
                        });
                  }
                  return e;
                })(
                  { schemaVersion: c.schemaVersion, timestamp: c.timestamp },
                  c.data
                )
              : null;
          },
          u = (e, a) => (t, s) => {
            const i = a.maxLocalStorageSize || 1,
              c = (0, o.Mc)(a, s()),
              u = (0, o.X)(a, s()),
              d = l(a.game, u, c),
              { states: m } = r(d) || { states: [] };
            if (m.find((a) => a.puzzleId === e.puzzleId)) {
              const a = {
                states: m.map((a) => (a.puzzleId === e.puzzleId ? e : a)),
              };
              return n(d, a), null;
            }
            if (m.length >= i) {
              const a = m.sort((e, a) => e.timestamp - a.timestamp)[0],
                t = {
                  states: m.map((t) => (t.puzzleId === a.puzzleId ? e : t)),
                };
              return n(d, t), a;
            }
            const p = { states: [...m, e] };
            return n(d, p), null;
          };
      },
      53789: function (e, a, t) {
        t.d(a, {
          K1: function () {
            return o.K1;
          },
          bf: function () {
            return l;
          },
          tq: function () {
            return n;
          },
        });
        var o = t(80565);
        const s = [
          "transitionend",
          "webkitTransitionEnd",
          "oTransitionEnd",
          "msTransitionEnd",
        ].find((e) => "on".concat(e.toLowerCase()) in window);
        function r(e) {
          const a = [],
            t = document.getElementById(e),
            o = {
              value: null == t ? void 0 : t.offsetWidth,
              subscribe(e) {
                return (
                  a.push(e),
                  function () {
                    a.splice(a.indexOf(e), 1);
                  }
                );
              },
            };
          return (
            null == t ||
              t.addEventListener(
                s,
                function () {
                  const e = null == t ? void 0 : t.offsetWidth;
                  var s;
                  if (((s = e), (o.value = s), !a.length)) return;
                  let r = a.length;
                  for (; r > 0; ) (r -= 1), a[r](e);
                },
                !1
              ),
            o
          );
        }
        (0, o.F2)(),
          (() => {
            if (!window.isCacheSafe) return;
            const e = document.querySelector("body"),
              a = document.querySelector('[name="viewport"]'),
              t = [];
            window.isMobileDevice
              ? (t.push("pz-mobile"),
                window.isIOSDevice && t.push("pz-mobile-ios"),
                window.isAndroidDevice && t.push("pz-mobile-android"))
              : t.push("pz-desktop");
            const o = !(void 0 === window || !window.isHybridWebView),
              s = !(void 0 === window || !window.newsreaderAppPlatform);
            o &&
              (t.push("pz-hybrid"),
              null == a ||
                a.setAttribute(
                  "content",
                  "width=device-width, initial-scale=1, minimal-ui, maximum-scale=1, user-scalable=no"
                )),
              window.gamesAppPlatform
                ? (t.push("pz-games-app"),
                  t.push("pz-games-app-".concat(window.gamesAppPlatform)))
                : s
                ? (t.push("pz-newsreader"),
                  t.push("pz-".concat(window.newsreaderAppPlatform)),
                  window.isPlayTab && t.push("pz-play-tab"),
                  o &&
                    t.push(
                      "pz-newsreader-".concat(
                        window.newsreaderAppPlatform,
                        "-hybrid"
                      )
                    ))
                : t.push("pz-web"),
              null == e || e.classList.add(...t);
          })();
        const n = document.body.classList.contains("pz-mobile"),
          l = (r("ratio-hook"), r("width-hook"));
      },
      14237: function (e, a, t) {
        t.d(a, {
          aF: function () {
            return o.Z;
          },
        }),
          t(89526),
          t(73961),
          t(65489),
          t(43373),
          t(34797),
          t(29954),
          t(89385),
          t(46147);
        var o = t(71687);
        t(40679);
      },
    },
  ]);
//# sourceMappingURL=9673.6ce009f77e3d93e730a5.js.map
