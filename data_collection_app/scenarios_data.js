const SCENARIOS = [
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "Amizour, cite l EPLF",
    id: "SYN_natural_disaster_001__00001",
    turns: [
      { role: "caller", text: "allo, l'7imaya l'madaniya?" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3. dachu yellan?" },
      { role: "caller", text: "azlemd svp! inondation daxel axxam, aman kechmend gher wekham s zerb!" },
      { role: "operator", text: "anda exact a sidi?" },
      { role: "caller", text: "dagi g amizour, cite l'eplf. ul nezmir ula di neffagh!" },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "route de Kherrata",
    id: "SYN_natural_disaster_001__00002",
    turns: [
      { role: "caller", text: "allo, sba7 l'khir, s'il vous plait l'pompiers!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya, anda exact?" },
      { role: "caller", text: "dagi route de kherrata, abrid ibele3! ghlind iblaten f la route, un grand eboulement!" },
      { role: "operator", text: "est-ce que thella des blesses?" },
      { role: "caller", text: "khati, wlach blesses, mais la circulation t7aves." },
      { role: "operator", text: "d'accord a sidi, at-tacha l'equipe." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "route n Adekar",
    id: "SYN_natural_disaster_001__00003",
    turns: [
      { role: "caller", text: "allo, 3ajlem svp! hesslen gedfel dagi!" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3. anda s'il vous plait?" },
      { role: "caller", text: "g route n'adekar, yella bezaf adfel. tomobilat ul zemrent ula di l7unt!" },
      { role: "operator", text: "ch7al n tomobilat i llan dinna?" },
      { role: "caller", text: "ahat khamsa, aqlagh coinces wlach amek!" },
      { role: "operator", text: "d'accord, asber a sidi, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "zdat l usine g Soummam",
    id: "SYN_natural_disaster_001__00004",
    turns: [
      { role: "caller", text: "allo, arwa7u svp, assif ihemled!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya, dachu yellan?" },
      { role: "caller", text: "tahemalt th-whemled wassif dagi zdat l'usine g soummam! aman di awin l'batimat!" },
      { role: "operator", text: "est-ce que thella des familles coincnees?" },
      { role: "caller", text: "waqila ih, lwa7el d waman partout!" },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "l ancienne ville n Bgayet, zdat la poste",
    id: "SYN_natural_disaster_001__00005",
    turns: [
      { role: "caller", text: "allo! znezla a khouya, ighli sour f chwiya n l'ghachi!" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3, anda exact?" },
      { role: "caller", text: "dagi g l'ancienne ville n bgayet, zdat la poste. illa un blesse meskin!" },
      { role: "operator", text: "est-ce qu'il est conscient?" },
      { role: "caller", text: "ih mais irez ughil-is, azlemd!" },
      { role: "operator", text: "d'accord, at-tacha l'ambulance." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "bloc 3 f la cite Ihaddaden",
    id: "SYN_natural_disaster_001__00006",
    turns: [
      { role: "caller", text: "allo l'pompiers! activiw svp, aman daxel l'bloc!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya, anwa l'bloc?" },
      { role: "caller", text: "bloc 3 f la cite ihaddaden. tekat lehwa bezaf, le sous-sol inonde yagi!" },
      { role: "operator", text: "dachu yellan daxel? des gens?" },
      { role: "caller", text: "ulach l'ghachi, gher les compteurs d'electricite, balak di thech3el tmess!" },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "village n Toudja",
    id: "SYN_natural_disaster_001__00007",
    turns: [
      { role: "caller", text: "allo, la3nayak l'pompiers!" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3. dachu yellan?" },
      { role: "caller", text: "glissement de terrain dagi g village n toudja! abrid ittwagh completement!" },
      { role: "operator", text: "est-ce que thella tomobil i d-ighlin?" },
      { role: "caller", text: "ulach, mais abrid ibele3 3la le village. ul nezmir ula di neffagh!" },
      { role: "operator", text: "d'accord, at-defkegh numero n l'apc, marki ghorek." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "route n Tichy, zdat la plage",
    id: "SYN_natural_disaster_001__00008",
    turns: [
      { role: "caller", text: "allo, s zerb svp! ighlid wechdjra s rri7 f tomobil!" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3, anda exact?" },
      { role: "caller", text: "dagi g route n tichy, zdat la plage." },
      { role: "operator", text: "sh7al n l'blesses? yella l'ghachi daxel?" },
      { role: "caller", text: "ih yella le chauffeur coince daxel! azlemd, ur yezmir ara di yali!" },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d yagi." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "Sidi Ahmed",
    id: "SYN_natural_disaster_001__00009",
    turns: [
      { role: "caller", text: "allo, arwa7u lwa7el yecca l'7ouma!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya. anda s'il vous plait?" },
      { role: "caller", text: "g sidi ahmed, tekat lehwa forte, lwa7el d waman daxel les maisons!" },
      { role: "operator", text: "yella chkoun iblessin?" },
      { role: "caller", text: "khati walu, mais les familles ur zemrent ara di ffghint, l'eau est tres haute!" },
      { role: "operator", text: "d'accord a madame, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "⛰️ Catastrophe naturelle",
    incident: "natural_disaster",
    location: "Rue de la Liberte, Bgayet centre",
    id: "SYN_natural_disaster_001__00010",
    turns: [
      { role: "caller", text: "allo l'pompiers! ighli plafond f yiwet la femme!" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3. anda exact?" },
      { role: "caller", text: "dagi f la rue de la liberte, bgayet centre. s lehwa i t-ighli!" },
      { role: "operator", text: "est-ce qu'il est conscient?" },
      { role: "caller", text: "khati, thedukh completement, idhem-itt l'plafond! 3ajlem s'il vous plait!" },
      { role: "operator", text: "d'accord, at-tacha l'ambulance imir-a." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Amizour",
    id: "SYN_lost_person_001__00011",
    turns: [
      { role: "caller", text: "salam alaykoum, les pompiers?" },
      { role: "operator", text: "an3am, l'7imaya l'madaniya f l'istima3." },
      { role: "caller", text: "amghar yeru7 si taddart g amizour, meskin ikhouss chwiya. netnadi fellas si lmeghreb, ul t-id-nufi ula." },
      { role: "operator", text: "a sidi, la disparition d la police, marki 17." },
      { role: "caller", text: "ah dakur, di ak-fkegh numéro n la police. ya3tik sa7a." },
      { role: "operator", text: "sa7a, tsebbu 3la khir." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Gouraya",
    id: "SYN_lost_person_001__00012",
    turns: [
      { role: "caller", text: "allo, l'7imaya l'madaniya?" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya, dachu yellan?" },
      { role: "caller", text: "yella wa7ed u9chich yeru7 g la forêt n gouraya. netthouf fellas s les torches, tura d lill, wlach." },
      { role: "operator", text: "d'accord, dachu ism n la famille? di n-tacha l'équipe n recherche." },
      { role: "caller", text: "la famille kadi. barak allahu fik." },
      { role: "operator", text: "sa7it a gma." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Akbou",
    id: "SYN_lost_person_001__00013",
    turns: [
      { role: "caller", text: "salam, les pompiers?" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "caller", text: "yiweth tamghart teru7 g centre-ville n akbou. teffugh asmi yeghli yid, ul th-id-nufi ula. d amoutin meskint." },
      { role: "operator", text: "madame, pour les disparitions ru7i g la police, 17. nekkni khatina." },
      { role: "caller", text: "d'accord, di ru7egh ghli-sen tura. sa7a." },
      { role: "operator", text: "ya3tik sa7a, allah isahal." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Tichy",
    id: "SYN_lost_person_001__00014",
    turns: [
      { role: "caller", text: "sba7 lkhir, les pompiers?" },
      { role: "operator", text: "l'7imaya l'madaniya, an3am?" },
      { role: "caller", text: "ness3a a9chich yeru7 g la plage n tichy. yeffer si la3cha, mazal ul d-yughal ula." },
      { role: "operator", text: "a gma, la disparition tfat chghal n la gendarmerie 1055. marki ghorek." },
      { role: "caller", text: "ah dakur, ul zrigh ula. barak allahu fik." },
      { role: "operator", text: "sa7a a sidi." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Kherrata",
    id: "SYN_lost_person_001__00015",
    turns: [
      { role: "caller", text: "salam alaykoum." },
      { role: "operator", text: "an3am l'7imaya l'madaniya f l'istima3. anda exact?" },
      { role: "caller", text: "dagi g les gorges de kherrata, n-perdre la route. tura d lill, llan sin arrach m3aya, wlach la lumière." },
      { role: "operator", text: "d'accord, est-ce que iblessi wa7ed?" },
      { role: "caller", text: "khati, hamdullah." },
      { role: "operator", text: "a9lagh ntteddu-d, b9aw f la position." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Sidi Aich",
    id: "SYN_lost_person_001__00016",
    turns: [
      { role: "caller", text: "allo l'7imaya l'madaniya?" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya, dachu yellan?" },
      { role: "caller", text: "yeru7 u9chich n 8 ans g la cité n sidi aich. netnadi fellas, kayen d lill, ul th-nufi ula." },
      { role: "operator", text: "madame, di am-fkegh numéro n la police, marki 17. homa les recherches." },
      { role: "caller", text: "dakour, ya3tik sa7a a gma." },
      { role: "operator", text: "sa7a." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Aokas",
    id: "SYN_lost_person_001__00017",
    turns: [
      { role: "caller", text: "salam, les pompiers f l'istima3?" },
      { role: "operator", text: "an3am, l'7imaya l'madaniya." },
      { role: "caller", text: "ness3a yiweth tamghart th-disparaître g aokas zdat l'hôpital. teffugh s l9ech n sbitar, d lill tura." },
      { role: "operator", text: "a sidi, s'il vous plaît, contactez la police f 17. d la procédure n disparition." },
      { role: "caller", text: "d'accord, di th-3eyydegh tura. shukran." },
      { role: "operator", text: "sa7a." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Oued Ghir",
    id: "SYN_lost_person_001__00018",
    turns: [
      { role: "caller", text: "salam alaykoum." },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3, dachu yellan?" },
      { role: "caller", text: "wa7ed amghar iru7 g la forêt n oued ghir. yeghli yid, netthouf fellas dagi, ulach. ikhouss chwiya meskin." },
      { role: "operator", text: "d'accord, di n-tacha l'équipe n recherche. anwa l'endroit exact?" },
      { role: "caller", text: "zdat la pépinière. ya3tik sa7a." },
      { role: "operator", text: "sa7it, arwa7u l la route." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "El Kseur",
    id: "SYN_lost_person_001__00019",
    turns: [
      { role: "caller", text: "allo les pompiers?" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya." },
      { role: "caller", text: "yeru7 yiwon u9chich g el kseur zdat la gare. yeffer si l3asser, tura yezla d lill." },
      { role: "operator", text: "a madame, l'avis de recherche d la police. 3eyyet l 17, di am-fkegh l'information." },
      { role: "caller", text: "d'accord, ul fhimgh ula. barak allahu fik." },
      { role: "operator", text: "sa7a a madame." },
    ]
  },
  {
    type: "🔍 Personne disparue",
    incident: "lost_person",
    location: "Cap Carbon",
    id: "SYN_lost_person_001__00020",
    turns: [
      { role: "caller", text: "salam alaykoum, l'7imaya l'madaniya?" },
      { role: "operator", text: "an3am f l'istima3, anda?" },
      { role: "caller", text: "a9la-gh g cap carbon, yella wa7ed l'ami i-disparaître g les pistes. tura 9rib d chtar lill, wlach réseau mli7." },
      { role: "operator", text: "est-ce que iblessi?" },
      { role: "caller", text: "ul nezmir ula at-nissin, ul th-id-nufi ula." },
      { role: "operator", text: "d'accord, a9lagh ntteddu-d s les torches." },
      { role: "caller", text: "ya3tik sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Tichy",
    id: "SYN_theft_robbery_001__00021",
    turns: [
      { role: "caller", text: "allo allo! arwa7u! yaddi kcemen-d s taqqa deg yid!" },
      { role: "operator", text: "madame, asber a madame! dachu yellan?" },
      { role: "caller", text: "amakker g wexxam! yerrez tabburt! azlemd azlemd!" },
      { role: "operator", text: "anda exact a madame? at-defkegh numéro n la police, marki ghorek." },
      { role: "caller", text: "dagi g tichy! la3nayak s zerb! di yerwel!" },
      { role: "operator", text: "d'accord a madame, sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Sidi Aich",
    id: "SYN_theft_robbery_001__00022",
    turns: [
      { role: "caller", text: "allo! ya rebbi! ukren-iyi tomobil! azlemd!" },
      { role: "operator", text: "l'7imaya l'madaniya. s'te plaît a sidi, asber, dachu yellan?" },
      { role: "caller", text: "ssarraq iddem takherrust-iw dagi g sidi aich deg yid! irwel!" },
      { role: "operator", text: "a sidi, aqlagh d l'pompiers. at-defkegh numéro n la gendarmerie." },
      { role: "caller", text: "ahhhh wkeren-tt! 3ajlem! ul yezmir ula ad sberg!" },
      { role: "operator", text: "marki ghorek 1055, sa7it." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Aokas",
    id: "SYN_theft_robbery_001__00023",
    turns: [
      { role: "caller", text: "allo allo allo! wthent-iyi wkeren-iyi idrimen deg yid-agi! arwa7u!" },
      { role: "operator", text: "asber a sidi! l'7imaya f l'istima3, anda exact?" },
      { role: "caller", text: "g aokas! yaddi! amakker irwel! iblessi-yi g ufus!" },
      { role: "operator", text: "d'accord, cekk t-blessid? at-tacha l'ambulance." },
      { role: "caller", text: "iyeh! s zerb!" },
      { role: "operator", text: "aqlagh ntteddu-d, sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Akbou",
    id: "SYN_theft_robbery_001__00024",
    turns: [
      { role: "caller", text: "allo! arwa7u fissa! la3nayak!" },
      { role: "operator", text: "l'7imaya l'madaniya, asber a madame, dachu yellan?" },
      { role: "caller", text: "yella wamekker yettrez ssarure n tabburt g akbou! ya rebbi!" },
      { role: "operator", text: "a madame, ilzem la police. at-defkegh numéro-nsen, marki ghorek." },
      { role: "caller", text: "azlemd! di yekcem g llilet-agi!" },
      { role: "operator", text: "d'accord a madame, appel d'urgence, sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "El Kseur",
    id: "SYN_theft_robbery_001__00025",
    turns: [
      { role: "caller", text: "allo allo! kcemen l'hanout! arwa7u fissa!" },
      { role: "operator", text: "l'7imaya l'madaniya, asber a sidi, dachu yellan?" },
      { role: "caller", text: "amakker g l'hanout-iw g el kseur! yerrez tabburt deg yid!" },
      { role: "operator", text: "a sidi, ilzem la police. at-defkegh numéro n la police." },
      { role: "caller", text: "ya rebbi iddem kulesh! azlemd!" },
      { role: "operator", text: "marki ghorek 1548, sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Amizour",
    id: "SYN_theft_robbery_001__00026",
    turns: [
      { role: "caller", text: "allo allo allo! arwa7u! kcemen-d axxam!" },
      { role: "operator", text: "asber a madame! anda exact?" },
      { role: "caller", text: "g amizour! wthent gma deg yid, iblessi attas g uqerruy! amakker irwel!" },
      { role: "operator", text: "d'accord, est-ce qu'il est conscient? sh7al n l'blessés?" },
      { role: "caller", text: "yiwen! meskin! azlemd azlemd! yaddi!" },
      { role: "operator", text: "at-tacha l'ambulance d la police, aqlagh ntteddu-d. sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Tazmalt",
    id: "SYN_theft_robbery_001__00027",
    turns: [
      { role: "caller", text: "allo! ya rebbi! wkeren la7liy-iw! arwa7u!" },
      { role: "operator", text: "l'7imaya l'madaniya, madame s'te plaît asber! anda?" },
      { role: "caller", text: "g tazmalt! amakker irwel s ddheb g llilet! azlemd!" },
      { role: "operator", text: "a madame, l'pompiers dayi. at-defkegh numéro n la gendarmerie." },
      { role: "caller", text: "ahhhh s zerb! di yerwel s wakk!" },
      { role: "operator", text: "d'accord, marki ghorek, sa7it." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Oued Ghir",
    id: "SYN_theft_robbery_001__00028",
    turns: [
      { role: "caller", text: "allo allo! yaddi llan imakkaren g l'bloc!" },
      { role: "operator", text: "asber a sidi, l'7imaya f l'istima3. anda l'bloc?" },
      { role: "caller", text: "dagi g oued ghir! yerrez lqfel n tabburt deg yid! arwa7u!" },
      { role: "operator", text: "a sidi, at-defkegh numéro n la police, maci l'ambulance." },
      { role: "caller", text: "activiw la3nayak! ul yezmir ula ad rregh lbal!" },
      { role: "operator", text: "d'accord a sidi, sa7a." },
    ]
  },
  {
    type: "🚨 Vol/Agression",
    incident: "theft_robbery",
    location: "Bejaia centre",
    id: "SYN_theft_robbery_001__00029",
    turns: [
      { role: "caller", text: "allo allo! arwa7u! yaddi! ssarraq!" },
      { role: "operator", text: "l'7imaya l'madaniya, asber a sidi! dachu yellan?" },
      { role: "caller", text: "dharbou gma g bejaia centre deg yid! wkeren-as idrimen! iblessi!" },
      { role: "operator", text: "sh7al n l'blessés? est-ce qu'il est conscient?" },
      { role: "caller", text: "ih! meskin! azlemd azlemd! ahhhh!" },
      { role: "operator", text: "d'accord, at-tacha l'ambulance. aqlagh ntteddu-d. sa7it." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Tichy",
    id: "SYN_drowning_001__00030",
    turns: [
      { role: "caller", text: "allo allo! azlemd azlemd! aqchich yeghraq deg lebhar! ya rebbi!" },
      { role: "operator", text: "l'7imaya l'madaniya. asber a madame, anda exact?" },
      { role: "caller", text: "tichy! la plage! ah... asber... khati khati, yeffegh-d, c'est bon. ul yeblessi ula." },
      { role: "operator", text: "yeffegh-d? d'accord a madame, thekhle3d-agh ssker." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "unknown",
    id: "SYN_drowning_001__00031",
    turns: [
      { role: "caller", text: "ya rebbi! arwa7u! yeghraq wuxxam! aman bezaf!" },
      { role: "operator", text: "l'7imaya l'madaniya. dachu yellan? yeghraq umdan?" },
      { role: "caller", text: "khati! la fuite d'eau f l'batima! aman di yawi kolchi! t-tuyau iterteq!" },
      { role: "operator", text: "madame, machi d l'pompiers i l'fuite. at-defkegh numéro n l'ade." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "unknown",
    id: "SYN_drowning_001__00032",
    turns: [
      { role: "caller", text: "allo allo fissa! yeghraq sbitar! azlemd a khouya l'plombier!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya. dachu l'plombier?" },
      { role: "caller", text: "ah... machi l'plombier? rani ghalet f numéro, samhi a gma!" },
      { role: "operator", text: "d'accord, coupigh." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Souk El Tenine",
    id: "SYN_drowning_001__00033",
    turns: [
      { role: "caller", text: "azlemd azlemd svp! yeghraq meskin! ya rebbi yetteghriq!" },
      { role: "operator", text: "l'7imaya l'madaniya. asber a sidi, anwa ighraqen? anda?" },
      { role: "caller", text: "l'kelb inu! g asif n souk el tenine! ur yessin ara ad ye3um!" },
      { role: "operator", text: "sidi, ul ntteddu ula i l'kelb, c'est pas une urgence vitale." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Saket",
    id: "SYN_drowning_001__00034",
    turns: [
      { role: "caller", text: "allo allo! arwa7u! aman bezaf! tomobil inu teghraq!" },
      { role: "operator", text: "l'7imaya l'madaniya. asber a sidi, thella la victime?" },
      { role: "caller", text: "khati khati, ulach l'blessés. gher tomobil tebloka g waman f la route n saket." },
      { role: "operator", text: "ma ulach l'blessés, 3ayet i l'dépannage. sa7a." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "unknown",
    id: "SYN_drowning_001__00035",
    turns: [
      { role: "caller", text: "allo svp! yeghli! yeghraq f la piscine! ya rebbi!" },
      { role: "operator", text: "l'7imaya l'madaniya! chkoun yeghraqen? aqchich?" },
      { role: "caller", text: "khati! le ballon inu! yeghraq g waman!" },
      { role: "operator", text: "a taqchicht, machi d l'pompiers i le ballon. raccrochi." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Aokas",
    id: "SYN_drowning_001__00036",
    turns: [
      { role: "caller", text: "ya rebbi arwa7u! gma yeghraq g lwa7ed! azlemd!" },
      { role: "operator", text: "l'7imaya l'madaniya. anda exact lwa7ed agi?" },
      { role: "caller", text: "g aokas... asber... ah le hmar, it-jouer-ara kan! il fait semblant! samhi a sidi." },
      { role: "operator", text: "d'accord, thekhle3d-agh f batel. sa7a." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "unknown",
    id: "SYN_drowning_001__00037",
    turns: [
      { role: "caller", text: "allo allo! l'urgence! aman ulach! wlach aman g l'batima!" },
      { role: "operator", text: "l'7imaya l'madaniya. d'accord, mais dachu yellan? thech3el tmess?" },
      { role: "caller", text: "khati! coupand aman yagi 3 jours! rani mrid!" },
      { role: "operator", text: "a sidi, machi d l'pompiers. 3ayet i l'algérienne des eaux. sa7it." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "autoroute n Tichy",
    id: "SYN_fire_vehicle_001__00038",
    turns: [
      { role: "caller", text: "allo allo! arwa7u azlemd! tomobil thech3el tmess dagi f l'autoroute n tichy! ya rebbi!" },
      { role: "operator", text: "madame asber chwiya! ulach l'blessés? anda exact?" },
      { role: "caller", text: "khati ulach! ul nezmir ula at-nesskhessi! arwa7u vite!" },
      { role: "operator", text: "d'accord aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "Sidi Ahmed",
    id: "SYN_fire_vehicle_001__00039",
    turns: [
      { role: "caller", text: "yaddi yaddi! lkamyu irgha dayi g sidi ahmed! azlemd!" },
      { role: "operator", text: "asber a sidi! machi g l'pompe à essence? dachu yellan?" },
      { role: "caller", text: "khati! d l'moteur! ul ye7bes ula! tech3el tmess azlemd!" },
      { role: "operator", text: "d'accord at-tacha l'ambulance d l'camion!" },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "route n Soummam",
    id: "SYN_fire_vehicle_001__00040",
    turns: [
      { role: "caller", text: "allo! ddaxan yeffugh-d si tomobil, thech3el! azlemd g l'route n soummam!" },
      { role: "operator", text: "s'te plaît a sidi, dachu yellan? est-ce que llan l'blessés?" },
      { role: "caller", text: "ulach l'blessés machi accident! d tmess f l'moteur! 3ajlem!" },
      { role: "operator", text: "aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "Akbou",
    id: "SYN_fire_vehicle_001__00041",
    turns: [
      { role: "caller", text: "ya rebbi! ssyara teche3l dagi g akbou! di tenfejer! azlemd!" },
      { role: "operator", text: "a madame asber! chauffeur ur yeffigh ara?" },
      { role: "caller", text: "yeffegh! ulach lghachi daxel! khati! s zerb arwa7u!" },
      { role: "operator", text: "d'accord marki ghorek aqlagh-d." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "centre ville n Bgayet, zdat la poste",
    id: "SYN_fire_vehicle_001__00042",
    turns: [
      { role: "caller", text: "allo allo! moto teche3l tmess g centre ville n bgayet!" },
      { role: "operator", text: "d'accord, anwa l'bloc? machi zdat sbitar?" },
      { role: "caller", text: "khati! zdat la poste! ul nwala ula bab-is! azlemd!" },
      { role: "operator", text: "d'accord at-tacha l'pompiers!" },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "El Kseur",
    id: "SYN_fire_vehicle_001__00043",
    turns: [
      { role: "caller", text: "arwa7u! fourgon irgha dayi g el kseur! ya yemma!" },
      { role: "operator", text: "l'7imaya f l'istima3, asber a madame! llan l'blessés?" },
      { role: "caller", text: "ulach l'blessés kherdjen akk! ul nuki ula amek tebda! vite!" },
      { role: "operator", text: "d'accord aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "Aokas",
    id: "SYN_fire_vehicle_001__00044",
    turns: [
      { role: "caller", text: "allo! tomobil iterteq pnew, teche3l tmess g aokas! 3ajlem!" },
      { role: "operator", text: "d'accord a sidi, machi fuite n lgaz?" },
      { role: "caller", text: "ur nezmir ara a n-approcher! l'essence yezzazel-d! ulach amdan daxel!" },
      { role: "operator", text: "d'accord l'ambulance t-rou7-d." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "Seddouk zdat l'jama3",
    id: "SYN_fire_vehicle_001__00045",
    turns: [
      { role: "caller", text: "azlemd azlemd! tracteur irgha g seddouk zdat l'jama3! ya rebbi!" },
      { role: "operator", text: "asber a gma! ur ye7bes ara tmes?" },
      { role: "caller", text: "khati! ul ye7bes ula! tmess t-kard attas! arwa7u vite!" },
      { role: "operator", text: "d'accord at-tacha l'camion!" },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "route n Amizour",
    id: "SYN_fire_vehicle_001__00046",
    turns: [
      { role: "caller", text: "allo! s'il vous plaît! ssyara rghid g route n amizour!" },
      { role: "operator", text: "l'7imaya l'madaniya, est-ce que d accident?" },
      { role: "caller", text: "machi accident! thech3el we7des! ulach l'blessés daxel! azlemd la3nayak!" },
      { role: "operator", text: "d'accord aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🔥 Véhicule en feu",
    incident: "fire_vehicle",
    location: "Ighil Ouazzoug",
    id: "SYN_fire_vehicle_001__00047",
    turns: [
      { role: "caller", text: "allo allo! arwa7u! tomobil teche3l g ighil ouazzoug! ya yemma!" },
      { role: "operator", text: "asber a madame! ur yelli ara amdan daxel?" },
      { role: "caller", text: "khati yeffegh-d! ul inzer ula! di tenfejer arwa7u!" },
      { role: "operator", text: "d'accord at-tacha l'pompiers." },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Sidi Aïch",
    id: "SYN_structural_collapse_001__00048",
    turns: [
      { role: "caller", text: "allo azlem, ighlid woukham fellanegh f lbatima!" },
      { role: "operator", text: "7imaya l-madaniya n bgayet. anda exact a sidi?" },
      { role: "caller", text: "dagi f sidi aïch, la dalle teghli zedaw l7ith! koulchi yeghli, yella yiwen meskin iblessi ghaf uqerruy is!" },
      { role: "operator", text: "khati a sidi, dayi n bgayet la centrale. at-defkegh numéro n l'pompiers n sidi aïch, marki ghorek: 034 86 07 80." },
      { role: "caller", text: "034 86 07 80, d'accord, saha tura di 3eytigh fissa!" },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "El Kseur, zdat la poste n la ville",
    id: "SYN_structural_collapse_001__00049",
    turns: [
      { role: "caller", text: "allo l'pompiers vite! l7ith n ssiment ighli dagi f l'chantier, yella yiweth yehssel sedaw l7ith!" },
      { role: "operator", text: "7imaya l-madaniya dagi n bgayet. anda yella wagi a madame?" },
      { role: "caller", text: "atan dagi f el kseur, zdat la poste n la ville. zerb, azlemd, meskin yettwa7ebs sedaw lkherdel, ul yezmir ula di bougi!" },
      { role: "operator", text: "d'accord, dagi n bgayet la centrale. at-defkegh numéro n l'pompiers n el kseur, marki: 034 82 35 65." },
      { role: "caller", text: "034 82 35 65... sahit agma, di hawlegh tura!" },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Souk El Tenine, le centre ville",
    id: "SYN_structural_collapse_001__00050",
    turns: [
      { role: "caller", text: "allo 3ajlem svp, ssqef n lbrique ighli dagi, khelli lkhechba teghli ghaf yiwen!" },
      { role: "operator", text: "7imaya l-madaniya f l'istima3 n bgayet. anda wagi a sidi?" },
      { role: "caller", text: "dagi f souk el tenine, le centre ville. il est blessé, ul yezmir ula di yali, il a besoin n l'ambulance!" },
      { role: "operator", text: "d'accord, dagi n bgayet la centrale. at-defkegh numéro n l'pompiers n souk el tenine, 3ayet-asen tura: 034 09 36 13." },
      { role: "caller", text: "034 09 36 13, aya d'accord ya3tik sa7a, c'est urgent!" },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Kherrata, bloc B zdat l'marché n l'khodra",
    id: "SYN_structural_collapse_001__00051",
    turns: [
      { role: "caller", text: "allo salam, fissa fissa, lbatima t-cheqeq, la dalle teghli fellanegh yagi!" },
      { role: "operator", text: "l'7imaya l'madaniya m3akoum n bgayet. anda l'bloc wagi, anda exact?" },
      { role: "caller", text: "dagi f kherrata, bloc b zdat l'marché n l'khodra. zerb ula nes3a les blessés graves, lkherdel bezzaf, ssqef ighli kamel!" },
      { role: "operator", text: "a sidi dagi n bgayet. at-defkegh numéro n l'pompiers n kherrata, marki ghorek wagi: 034 18 51 21." },
      { role: "caller", text: "034 18 51 21, oui d'accord, saha tura di 3eytigh!" },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Oued Ghir, route nationale, zdat l'usine",
    id: "SYN_structural_collapse_001__00052",
    turns: [
      { role: "caller", text: "allo l'pompiers! azlemd, sour n lbiton yeghli dagi ghaf tomobil, yella amdan dakhel!" },
      { role: "operator", text: "7imaya l-madaniya n bgayet. anda yewqa3 wagi, f wani quartier?" },
      { role: "caller", text: "dagi f oued ghir, route nationale, zdat l'usine. yehssel zedaw l7it la voiture, il est bloqué, fissa azlem!" },
      { role: "operator", text: "khati sidi, dagi n bgayet. at-defkegh numéro n oued ghir, marki tura: 030 16 92 92." },
      { role: "caller", text: "030 16 92 92... d'accord, barak allahu fik a gma." },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Sidi Aïch, l'ancienne ville",
    id: "SYN_structural_collapse_001__00053",
    turns: [
      { role: "caller", text: "allo svp, ighlid woukham lqdim, lescalier yeghli kamel, bezzaf lkherdel yella!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya n bgayet. anda exact a madame, anwa l'endroit?" },
      { role: "caller", text: "f sidi aïch, l'ancienne ville, yella yiwen amghar meskin yehssel sedaw ssiment, ul yezmir ula di ffegh!" },
      { role: "operator", text: "d'accord a madame. dagi n bgayet, at-defkegh numéro n poste n sidi aïch, marki: 034 86 07 80." },
      { role: "caller", text: "034 86 07 80, sahit a gma, di 3eytigh tura s zerb!" },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Souk El Tenine, l'école primaire lqdim",
    id: "SYN_structural_collapse_001__00054",
    turns: [
      { role: "caller", text: "allo salam, l7yut n l'école t-cheqeq, yiwen l7ith ighli ghaf lqermed, fissa!" },
      { role: "operator", text: "7imaya l-madaniya n bgayet. anda l'école yagi, anwa l'mkan?" },
      { role: "caller", text: "f souk el tenine, l'école primaire lqdim. t-cheqeq bezzaf, wlach les blessés ma3na l7ith yeghli, yella risque amqran!" },
      { role: "operator", text: "d'accord, a sidi n bgayet la centrale dayi. at-defkegh numéro n souk el tenine, marki: 034 09 36 13." },
      { role: "caller", text: "034 09 36 13, dakour, sahit saha, di 3eytigh tura." },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Kherrata, le centre ville",
    id: "SYN_structural_collapse_001__00055",
    turns: [
      { role: "caller", text: "allo l'pompiers, 3ajlem! la dalle n l'étage teghli ghaf les ouvriers dagi s lkherdel!" },
      { role: "operator", text: "l'7imaya l'madaniya n bgayet. anda l'étage yagi, anda exact l'chantier?" },
      { role: "caller", text: "f kherrata, le centre ville. yella sin l'ouvriers, yiwen yehssel sedaw lbiton, azlemd la3nayak il est blessé!" },
      { role: "operator", text: "d'accord, n bgayet dayi, at-defkegh numéro n poste n kherrata, marki ghorek: 034 18 51 21." },
      { role: "caller", text: "034 18 51 21, sahit, tura di 3eytigh svp!" },
    ]
  },
  {
    type: "🏗️ Effondrement",
    incident: "structural_collapse",
    location: "Oued Ghir, l'usine lqdim n ssiment",
    id: "SYN_structural_collapse_001__00056",
    turns: [
      { role: "caller", text: "allo svp, fissa fissa, yella l'effondrement f l'usine, ssiment ighli bezzaf dagi!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya n bgayet. anda l'usine a sidi, win exact?" },
      { role: "caller", text: "dagi f oued ghir, l'usine lqdim n ssiment. yella yiwen urgaz bloqué, lkhechba d lbiton teghli ghafes, azlem!" },
      { role: "operator", text: "a sidi, dagi la centrale n bgayet, at-defkegh numéro n l'pompiers n oued ghir, marki ghorek: 030 16 92 92." },
      { role: "caller", text: "030 16 92 92, d'accord ya3tik sa7a a gma!" },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Gouraya",
    id: "SYN_fire_forest_001__00057",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam khouya, rani hna f gouraya, kayen wa7ed l'feu de forêt." },
      { role: "caller", text: "dachu yellan? tmes theche3l f lghaba?" },
      { role: "operator", text: "ih, hna f les broussailles. machi kbira bezzaf, mais l'vent ydiha." },
      { role: "caller", text: "ul theqrib ula gher les maisons?" },
      { role: "operator", text: "khati, ulach les maisons tmak." },
      { role: "caller", text: "d'accord, at-tacha l'camion n les pompiers, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Adekar",
    id: "SYN_fire_forest_001__00058",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, wesh rakom? khouya bghit nsignalé kayen la3fya f lghaba ta3 adekar." },
      { role: "caller", text: "anda exact f adekar?" },
      { role: "operator", text: "f la route nationale. ddaxan bezzaf, machi sghir." },
      { role: "caller", text: "est-ce que yella danger gher taddart?" },
      { role: "operator", text: "khati, ul yezzi ula l l'7ouma, mais fissa3 di yekber." },
      { role: "caller", text: "d'accord a sidi, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Tichy",
    id: "SYN_fire_forest_001__00059",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam, rani f tichy, kayen wa7ed l'incendie f idurar lfouq." },
      { role: "caller", text: "dachu yellan exact? d lghaba?" },
      { role: "operator", text: "ih khouya, les arbres rhom yeche3lou. machi hda la route." },
      { role: "caller", text: "ur thewwegh ara gher l'bloc n sakanat?" },
      { role: "operator", text: "ulach sakanat, khati." },
      { role: "caller", text: "d'accord, marki ghorek, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "El Kseur",
    id: "SYN_fire_forest_001__00060",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo khouya, 3endna feu de forêt hna f el kseur, ljiha ta3 lexla." },
      { role: "caller", text: "anwa l'bloc wela anda exact?" },
      { role: "operator", text: "mor sbitar b chwiya. khati, machi qrib lih." },
      { role: "caller", text: "ul teqrib ula gher les habitations?" },
      { role: "operator", text: "ulach l'danger tura, mais bghit nkhabarkom." },
      { role: "caller", text: "sa7it, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Oued Ghir",
    id: "SYN_fire_forest_001__00061",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam, kayen tmes f lghaba ta3 oued ghir, rani nchouf ddaxan yettali-d." },
      { role: "caller", text: "dachu yellan? tmes kbira?" },
      { role: "operator", text: "machi kbira bezzaf, mais l'vent raho qawi chwiya." },
      { role: "caller", text: "ul tekcem ula gher taddart?" },
      { role: "operator", text: "khati wlach. rah f lexla." },
      { role: "caller", text: "d'accord a gma, at-tacha les pompiers." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Amizour",
    id: "SYN_fire_forest_001__00062",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya, anda?" },
      { role: "operator", text: "allo khouya, rani f amizour, kayen feu f wa7ed terrain ta3 broussaille." },
      { role: "caller", text: "dachu yellan? yella l'7achi zdat-es?" },
      { role: "operator", text: "ulach l'7achi. machi f centre ville, rah f la périphérie." },
      { role: "caller", text: "ul yewwed ula gher l'autoroute?" },
      { role: "operator", text: "khati." },
      { role: "caller", text: "d'accord, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Akbou",
    id: "SYN_fire_forest_001__00063",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam, 3endna incendie f lghaba hda la vallée de la soummam." },
      { role: "caller", text: "wach la commune exact?" },
      { role: "operator", text: "akbou. rani nchouf les arbres yeche3lou. machi lte7t, lfouq." },
      { role: "caller", text: "ur thettnernay ara s zerb?" },
      { role: "operator", text: "chwiya, l'essentiel ulach sakanat hda l'feu. khati." },
      { role: "caller", text: "d'accord, at-tacha l'camion." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Sidi Aich",
    id: "SYN_fire_forest_001__00064",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, wesh khouya, bghit ngoulek kayen nnare f idurar ta3 sidi aich." },
      { role: "caller", text: "anda exact? dachu yellan?" },
      { role: "operator", text: "f taghlit. khati machi f la route, ldakhel f lghaba." },
      { role: "caller", text: "ul theqrib ula gher les poteaux électriques?" },
      { role: "operator", text: "wlach, raho b3id." },
      { role: "caller", text: "sa7it, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Aokas",
    id: "SYN_fire_forest_001__00065",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam khouya, rani f aokas, kayen ddaxan kbir ta3 feu de forêt." },
      { role: "caller", text: "anda exact f aokas?" },
      { role: "operator", text: "lfouq, f la montagne. machi hda la plage, khati." },
      { role: "caller", text: "ul thewwegh ula gher l'village?" },
      { role: "operator", text: "ulach l'danger 3la l'village, mais bghit nsighnalé." },
      { role: "caller", text: "d'accord a sidi, aqlagh ntteddu-d." },
    ]
  },
  {
    type: "🌲 Feu de forêt",
    incident: "fire_forest",
    location: "Beni Ksila",
    id: "SYN_fire_forest_001__00066",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, 3endna feu hna f beni ksila, lghaba rahi teche3l." },
      { role: "caller", text: "dachu yellan? tmes f les arbres?" },
      { role: "operator", text: "ih, kayen l'vent. machi sghir, raho ykber." },
      { role: "caller", text: "ur theqrib ara gher les chalets?" },
      { role: "operator", text: "khati, ulach sakanat 9rib, mais 3ajlem." },
      { role: "caller", text: "d'accord, at-tacha l'ambulance d les pompiers." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Sidi Aïch",
    id: "SYN_hazmat_001__00067",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam khouya, rani f sidi aïch, 3endna fuite nel gaz kbira f l'batiment." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n sidi aïch, marki ghorek: 034 86 07 80." },
      { role: "operator", text: "034 86 07 80, saha khouya." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Oued Ghir",
    id: "SYN_hazmat_001__00068",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "allo, kayen riha ta3 gaz hnaya f oued ghir." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n oued ghir, marki ghorek: 030 16 92 92." },
      { role: "operator", text: "030 16 92 92, saha." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "El Kseur",
    id: "SYN_hazmat_001__00069",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "salam, terte9et bouteille de gaz f el kseur, l'bloc c." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n el kseur, marki ghorek: 034 82 35 65." },
      { role: "operator", text: "034 82 35 65, ya3tik sa7a." },
      { role: "caller", text: "d'accord a sidi." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Souk El Tenine",
    id: "SYN_hazmat_001__00070",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "khouya, rani nchem riha 9awya ta3 lgaz f souk el tenine." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n souk el tenine, marki ghorek: 034 09 36 13." },
      { role: "operator", text: "034 09 36 13, dakour." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Kherrata",
    id: "SYN_hazmat_001__00071",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, kayen fuite de gaz kbira f kherrata, f la pompe." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n kherrata, marki ghorek: 034 18 51 21." },
      { role: "operator", text: "034 18 51 21, barak allahu fik." },
      { role: "caller", text: "sa7a." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Sidi Aïch",
    id: "SYN_hazmat_001__00072",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam, bghit nsignale fuite ta3 produit chimique f l'usine ta3 sidi aïch." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n sidi aïch, marki ghorek: 034 86 07 80." },
      { role: "operator", text: "034 86 07 80, saha." },
      { role: "caller", text: "d'accord a sidi." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Oued Ghir",
    id: "SYN_hazmat_001__00073",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo khouya, kesserou l'tuyau ta3 lgaz f oued ghir, kayen fuite." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n oued ghir, marki ghorek: 030 16 92 92." },
      { role: "operator", text: "030 16 92 92, sahit khouya." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "El Kseur",
    id: "SYN_hazmat_001__00074",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam, kayen rri7a n lgaz 9awya f l'batiment ta3na f el kseur." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n el kseur, marki ghorek: 034 82 35 65." },
      { role: "operator", text: "034 82 35 65, saha." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Souk El Tenine",
    id: "SYN_hazmat_001__00075",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "khouya, 3endna riha makhnou9a ta3 produit chimique f souk el tenine." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n souk el tenine, marki ghorek: 034 09 36 13." },
      { role: "operator", text: "034 09 36 13." },
      { role: "caller", text: "d'accord a sidi." },
    ]
  },
  {
    type: "☣️ Fuite de gaz/chimique",
    incident: "hazmat",
    location: "Kherrata",
    id: "SYN_hazmat_001__00076",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "allo, kayen fuite lgaz goudam l'ecole f kherrata, rani khayef." },
      { role: "caller", text: "aqlagh n bgayet, at-defkegh numéro n kherrata, marki ghorek: 034 18 51 21." },
      { role: "operator", text: "034 18 51 21, sahit." },
      { role: "caller", text: "sa7a." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Aokas, RN9",
    id: "SYN_accident_pedestrian_001__00001",
    turns: [
      { role: "caller", text: "allo l'7imaya?" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "caller", text: "khouya bghit nseqsik, lbarah f l'lil srat accident piéton f rn9 jihet aokas, kayen wehed fiyatouh b l'oto, bghit na3ref wesh ditouh l sbitar wela l'morgue? rani n7awes 3la khouya ma banche." },
      { role: "operator", text: "ya khouya ul nmed ula les informations f téléphone, lazm ad t-ruhed l la brigade wela chouf m3a sbitar." },
      { role: "caller", text: "ah d'accord, semehli khouya, rani mzaroub chwiya, dert retard, nrouh l sbitar doka." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Akbou, RN26",
    id: "SYN_accident_pedestrian_001__00002",
    turns: [
      { role: "caller", text: "allo pompiers zerbou khouya!" },
      { role: "operator", text: "l'7imaya l'madaniya, dachu yellan?" },
      { role: "caller", text: "khouya kayen accident, wehed piéton darbouh f rn26 jihet akbou, rani nchouf fih fel ard ma yet7arekch, jibi l'ambulance fissa!" },
      { role: "operator", text: "d'accord, anda exact f akbou?" },
      { role: "caller", text: "attends khouya... wesh hada... ah non non, semehli khouya rani ghalet, machi benadem, d kalb meskin darbatou tomobil, rani ghalet semehli bezaf, ma taba3thouch l'ambulance." },
      { role: "operator", text: "d'accord machi mouchkil, attention f l'abrid a khouya." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Amizour, centre ville",
    id: "SYN_accident_pedestrian_001__00003",
    turns: [
      { role: "caller", text: "allo la police?" },
      { role: "operator", text: "non khouya, hna l'7imaya l'madaniya." },
      { role: "caller", text: "ah wesh l'7imaya, semehli rani mzaroub, khouya bghit ndéclarer kayen wehed darbouh hna f centre ville ta3 amizour, un piéton, daret moto renverse piéton w harbat, bghit nmedlek l'immatriculation wesh tchedha 3lia?" },
      { role: "operator", text: "khouya hna les pompiers, 3ayet l 1548 ta3 la police." },
      { role: "caller", text: "ah rani ghalet fel numéro, wesh houwa numéro ta3 la police 3aychek?" },
      { role: "operator", text: "at-defkegh numéro, c'est le 1548." },
      { role: "caller", text: "d'accord sahit." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Adekar, RN12",
    id: "SYN_accident_pedestrian_001__00004",
    turns: [
      { role: "caller", text: "allo l'7imaya!" },
      { role: "operator", text: "oui l'7imaya l'madaniya tfadel." },
      { role: "caller", text: "khouya wesh bikoum majitouch, kayen circulation kbira hna f rn12 jihet adekar, kayen wahed l'piéton bgha yeqta3 l'autoroute, w wahed b l'oto freina sec. ma darbouh ma walou, kayen ghir l'haws w l'guelba, le piéton rahou ydabz m3a chouffour." },
      { role: "operator", text: "ya khouya dachu yellan? kayen des blessés?" },
      { role: "caller", text: "non ul yelli ula blessé, walou, machi accident, bghit bark tgoulou l la gendarmerie yjiw ysagmu l'abrid." },
      { role: "operator", text: "3ayet l la gendarmerie khouya, hna ul ndakhel ula." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Beni Ksila",
    id: "SYN_accident_pedestrian_001__00005",
    turns: [
      { role: "caller", text: "allo khouya!" },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "caller", text: "khouya rani f beni ksila, wesh dirtouna b had les ralentisseurs, chaque fois les voitures yfreiniw ydirou l'bruit, w les piétons yqet3ou f n'importe quel blasa, rani nbat ma nergoudch, bghit nchki." },
      { role: "operator", text: "ya sidi, hna l'7imaya l'madaniya, machi la mairie, rak ghalet f l'appel." },
      { role: "caller", text: "kifach machi ntouma li tdirou les plaques ta3 les piétons?" },
      { role: "operator", text: "khati a sidi, 3ayet l l'apc, bonne journée." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Barbacha",
    id: "SYN_accident_pedestrian_001__00006",
    turns: [
      { role: "caller", text: "allo!" },
      { role: "operator", text: "oui l'7imaya l'madaniya, dachu yellan?" },
      { role: "caller", text: "khouya wesh kayen f barbacha? rani nchouf l'ambulance ta3koum daret sirène w ray7a zerb, wesh kayen accident piéton wela wesh sra?" },
      { role: "operator", text: "ya khouya ul nmed ula les informations f téléphone, c'est confidentiel, 3leh rak tseqsi?" },
      { role: "caller", text: "non ghir bghit na3ref, chkoun darbouh, balak wahed men l'famille ta3na." },
      { role: "operator", text: "si kayen haja y3aytoulek, ma tchedlnech l'ligne s'il vous plaît pour rien." },
      { role: "caller", text: "d'accord semehli khouya." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Chemini",
    id: "SYN_accident_pedestrian_001__00007",
    turns: [
      { role: "caller", text: "allo l'pompiers!" },
      { role: "operator", text: "oui l'7imaya." },
      { role: "caller", text: "khouya rani hna f chemini, l'arrêt ta3 l'bus, wahed l'camion kan rayah ydir accident grave, faillit yrenverser wahed l'piéton, un petit garçon, meskin c'était juste!" },
      { role: "operator", text: "d'accord, est-ce que darbouh? kayen blessé?" },
      { role: "caller", text: "non khati, l'enfant hrab, ma darbouhch, w l'camion kml triqou. bghit nsignaler bark beli kayen danger f had l'virage." },
      { role: "operator", text: "ya khouya hmdlh li ma sra walou, mais hna njiw ki ykoun accident, 3ayet l la commune ydirou ralentisseur." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Taourirt Ighil",
    id: "SYN_accident_pedestrian_001__00008",
    turns: [
      { role: "caller", text: "allo l'7imaya." },
      { role: "operator", text: "l'7imaya f l'istima3." },
      { role: "caller", text: "khouya rani n3ayetlek 3la l'accident piéton li sra sba7 f taourirt ighil, win darbouh wahed b l'moto." },
      { role: "operator", text: "oui, dachu tebghid?" },
      { role: "caller", text: "bghit na3ref win ditouh, l sbitar ta3 akbou wela l sbitar ta3 bejaia? rani l'cousin ta3ou w ma 3reftch win nrouh." },
      { role: "operator", text: "at-defkegh l'information, d'accord? ditnah l urgences n akbou, rahou tema." },
      { role: "caller", text: "ya3tik saha khouya, rani mzaroub nrouh lih doka, chokran bezaf." },
      { role: "operator", text: "bla mzia, salam." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "unknown",
    id: "SYN_accident_pedestrian_001__00009",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "..." },
      { role: "caller", text: "allo? m3akoum l'7imaya, dachu yellan?" },
      { role: "operator", text: "[bruit de rue] ... attention le piéton! ya khouya wesh bik ... avance chwiya ..." },
      { role: "caller", text: "allo? est-ce que kayen urgence a sidi?" },
      { role: "operator", text: "[bruit de klaxon] ... wesh bik hbesst hna f wost l'abrid, rak dert circulation! ..." },
      { role: "caller", text: "allo, rak f l'7imaya l'madaniya, bon, rani ncoupi, appel silencieux." },
    ]
  },
  {
    type: "❓ Fausse alerte",
    incident: "unknown",
    location: "Aït-Smail",
    id: "SYN_accident_pedestrian_001__00010",
    turns: [
      { role: "caller", text: "allo!" },
      { role: "operator", text: "oui l'7imaya l'madaniya." },
      { role: "caller", text: "khouya rani f aït-smail, kayen wahed l'plaque ta3 piéton tahet f l'abrid, fiha danger kbir, les voitures ygedrou ydirou accident, balak yrenversiw kach wahed." },
      { role: "operator", text: "la plaque tahet f l'abrid? est-ce que kayen accident wela mazal?" },
      { role: "caller", text: "non ma kayench accident, mais lazm tjiw tne7iwha 9bel ma ykoun un piéton darbouh." },
      { role: "operator", text: "d'accord a khouya, nsignaliwha l les travaux publics wela la gendarmerie, hna ul nne7i ula les plaques." },
      { role: "caller", text: "d'accord khouya, fissa s'il vous plaît." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Akbou, zdat la poste, en face l'école",
    id: "SYN_accident_pedestrian_002__00011",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam khouya, rani f akbou, kayen un accident. tomobil darbet un piéton." },
      { role: "caller", text: "anda exact? wach la commune?" },
      { role: "operator", text: "commune d'akbou, zdat la poste, en face l'école." },
      { role: "caller", text: "dachu yellan? est-ce qu'il est conscient?" },
      { role: "operator", text: "rah taya7 f l'erd, rah conscient chwiya, fih idamen." },
      { role: "caller", text: "d'accord, at-tacha l'ambulance." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Adekar, centre ville, wa7id l'jame3",
    id: "SYN_accident_pedestrian_002__00012",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo khouya, kayen wa7ed l'enfant darbouh b tomobil hna f adekar." },
      { role: "caller", text: "anda exact? wach la commune?" },
      { role: "operator", text: "commune d'adekar, centre ville, wa7id l'jame3." },
      { role: "caller", text: "ch7al n l'blessés?" },
      { role: "operator", text: "wa7ed, un petit garçon. rah yebki." },
      { role: "caller", text: "d'accord a sidi, a9lagh ntteddu-d. sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Ighram, RN26, zdat la pompe à essence",
    id: "SYN_accident_pedestrian_002__00013",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam, bghit l'ambulance. kayen tomobil renverse piéton f rn26." },
      { role: "caller", text: "anda exact?" },
      { role: "operator", text: "f ighram, zdat la pompe à essence." },
      { role: "caller", text: "est-ce qu'il est conscient?" },
      { role: "operator", text: "lalla, ma rahch conscient, rah dakh." },
      { role: "caller", text: "d'accord, at-tacha l'ambulance." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Beni Ksila, zdat la plage, en face les pompiers 9dim",
    id: "SYN_accident_pedestrian_002__00014",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, khouya rani f beni ksila, wa7ed l'amghar darbouh, yewwet-it lbus." },
      { role: "caller", text: "anda exact? wach la commune?" },
      { role: "operator", text: "beni ksila, zdat la plage, en face les pompiers 9dim." },
      { role: "caller", text: "dachu yellan? iblessi?" },
      { role: "operator", text: "ih, rah blessé f rejlou, ma ye9derch inod." },
      { role: "caller", text: "d'accord a sidi, a9lagh ntteddu-d." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Amizour, cité 500 logements, bloc B, zdat l'primaire",
    id: "SYN_accident_pedestrian_002__00015",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam alaykoum. kayen accident f amizour. moto darbet mra." },
      { role: "caller", text: "anda exact? anwa l'bloc?" },
      { role: "operator", text: "f la cité 500 logements, bloc b, zdat l'primaire." },
      { role: "caller", text: "est-ce qu'il est conscient?" },
      { role: "operator", text: "oui, raha wa9fa mais raha t'chki men rasha." },
      { role: "caller", text: "d'accord, at-tacha l'ambulance." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Amalou, RN12, zdat l'arret de bus",
    id: "SYN_accident_pedestrian_002__00016",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo khouya, wa7ed piéton fiyatouh f rn12." },
      { role: "caller", text: "anda exact? wach la commune?" },
      { role: "operator", text: "commune d'amalou, zdat l'arret de bus." },
      { role: "caller", text: "dachu yellan? ch7al n l'blessés?" },
      { role: "operator", text: "kayen wa7ed, un jeune. rah taya7 ou yenzel mennou ddem." },
      { role: "caller", text: "d'accord a gma, a9lagh ntteddu-d." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Barbacha centre, zdat la mairie, en face l'APC",
    id: "SYN_accident_pedestrian_002__00017",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam khouya, rani f barbacha, kayen un accident de piéton, darbouh." },
      { role: "caller", text: "anda exact?" },
      { role: "operator", text: "barbacha centre, zdat la mairie, en face l'apc." },
      { role: "caller", text: "est-ce qu'il est conscient?" },
      { role: "operator", text: "ma 3labalich, rani b3id chwiya, lghachi mlammin 3lih." },
      { role: "caller", text: "d'accord, at-tacha l'ambulance. sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Chellata, village principal, zdat sbitar sghir",
    id: "SYN_accident_pedestrian_002__00018",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, kayen un accident. tomobil darbet rajel kbir f chellata." },
      { role: "caller", text: "anda exact? wach la commune?" },
      { role: "operator", text: "commune de chellata, village principal, zdat sbitar sghir." },
      { role: "caller", text: "dachu yellan? iblessi?" },
      { role: "operator", text: "rah blessé f rasso, idamen bezzaf." },
      { role: "caller", text: "d'accord a madame, a9lagh ntteddu-d." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Taourirt Ighil, la rentrée n l'village, zdat l'école primaire",
    id: "SYN_accident_pedestrian_002__00019",
    turns: [
      { role: "caller", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "operator", text: "salam khouya, bghit n'signaler accident f taourirt ighil. un piéton darbouh." },
      { role: "caller", text: "anda exact?" },
      { role: "operator", text: "f la rentrée n l'village, zdat l'école primaire." },
      { role: "caller", text: "est-ce qu'il est conscient?" },
      { role: "operator", text: "oui, rah conscient, mais rejlou m'kessra." },
      { role: "caller", text: "d'accord, at-tacha l'ambulance." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Aït-Smail, RN9, zdat le barrage de police",
    id: "SYN_accident_pedestrian_002__00020",
    turns: [
      { role: "caller", text: "m3akoum l'7imaya l'madaniya." },
      { role: "operator", text: "allo, khouya kayen accident, renverse piéton f rn9." },
      { role: "caller", text: "anda exact? wach la commune?" },
      { role: "operator", text: "aït-smail, zdat le barrage de police." },
      { role: "caller", text: "dachu yellan? ch7al n l'blessés?" },
      { role: "operator", text: "wa7ed berk, mra, raha msat7a f l'erd, ma t'7arekch." },
      { role: "caller", text: "d'accord a sidi, a9lagh ntteddu-d." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Akbou, zdat lycée",
    id: "SYN_accident_pedestrian_003__00022",
    turns: [
      { role: "operator", text: "m3akoum l'7imaya l'madaniya." },
      { role: "caller", text: "azul. n3ayet-d f l'urgence. yiwen u-moto yewwet yiwen amghar yezger abrid. fiyatouh lhih." },
      { role: "operator", text: "anda yella dagi? wach la commune?" },
      { role: "caller", text: "g akbou, zdat lycée. l'heure agi d rush hour, bezzaf l'ghachi. amghar-agi ighli, ithyughen uqerruy-is, idamen llan." },
      { role: "operator", text: "idukh negh yaki?" },
      { role: "caller", text: "idukh chwiya, ul yezmir ula di yelhu. iban-d am tfit la crise." },
      { role: "operator", text: "d'accord, asber a sidi, aqlagh ntteddu-d tura." },
      { role: "caller", text: "sa7a, barak allahu fik." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Aokas, RN9",
    id: "SYN_accident_pedestrian_003__00024",
    turns: [
      { role: "operator", text: "allo, l'7imaya l'madaniya." },
      { role: "caller", text: "salam, rani f la rn9, aokas. yella yiwen renversé piéton. yiwet tamghart teghli, tewwet-itt tomobil th-zger abrid." },
      { role: "operator", text: "dachu yellan? est-ce qu'elle est consciente?" },
      { role: "caller", text: "khati, idukh complètement. la circulation the7bes, l'ghachi bezzaf. ul t-respirer ula mlih, balak the-blessi g dhar-is." },
      { role: "operator", text: "d'accord a madame. at-tacha l'ambulance tura." },
      { role: "caller", text: "ma3lich s zerb, balak tension tela3, tban-d am tfit la crise." },
      { role: "operator", text: "aqlagh ntteddu-d, marki ghorek." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Chemini, centre",
    id: "SYN_accident_pedestrian_003__00026",
    turns: [
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "caller", text: "allo, yewwet yiwen bnadm f passage clouté, fiyatouh." },
      { role: "operator", text: "anda dagi? wach la commune?" },
      { role: "caller", text: "chemini, g centre. l'embouteillage yella. ssyara tewwet-it, ighli f l'qa3a." },
      { role: "operator", text: "est-ce qu'il est conscient? iblessi?" },
      { role: "caller", text: "idukh, balak tfit la crise, ul it-respirer ula normal. ithyughen g ufus-is, idamen llan chwiya." },
      { role: "operator", text: "d'accord, at-tacha l'ambulance tura s zerb." },
      { role: "caller", text: "dakur, sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Amalou, zdat l'école primaire",
    id: "SYN_accident_pedestrian_003__00028",
    turns: [
      { role: "operator", text: "m3akoum l'7imaya l'madaniya." },
      { role: "caller", text: "salam 3likoum, la3nayak di te-activiw. yiwet taqchicht tewwet-itt tomobil, darbouh g amalou." },
      { role: "operator", text: "anwa l'bloc negh repère g amalou?" },
      { role: "caller", text: "zdat l'école primaire. l'weqt n khrudj l'ecole, the3mer. taqchicht-nni teghli, ithyughen bezzaf." },
      { role: "operator", text: "idukh negh yaki?" },
      { role: "caller", text: "ih idukh, tfit la crise, t-bka. ul yezmir ula di tebded." },
      { role: "operator", text: "d'accord, at-tacha l'ambulance, asber a sidi." },
      { role: "caller", text: "sa7a." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Taourirt Ighil, zdat l'marché",
    id: "SYN_accident_pedestrian_003__00030",
    turns: [
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3." },
      { role: "caller", text: "salam, yella accident dayi. tomobil tewwet piéton, darbouh f trottoir." },
      { role: "operator", text: "wach la commune? anda exact?" },
      { role: "caller", text: "g taourirt ighil, zdat l'marché. d l'weqt n rush hour, the3mer l'danya." },
      { role: "operator", text: "dachu yellan? sh7al n l'blessés?" },
      { role: "caller", text: "yiwen ameddak ighli. ur zrigh ara amek yella, idukh ahat, ul yezmir ula di yelhu. ithyughen uqerruy-is." },
      { role: "operator", text: "d'accord, at-tacha l'ambulance." },
      { role: "caller", text: "dakur, barak allahu fik." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Amizour, zdat l'hôpital",
    id: "SYN_accident_pedestrian_004__00031",
    turns: [
      { role: "caller", text: "allo l'7imaya! azlem, yiwen piéton tewwet-it ssyara dayi." },
      { role: "operator", text: "anda exact?" },
      { role: "caller", text: "amizour, zdat l'hôpital. yezger abrid, darbouh." },
      { role: "operator", text: "dachu yellan? est-ce qu'il est conscient?" },
      { role: "caller", text: "ih conscient, mais iblessi s udem." },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "RN26, Akbou, en face la station",
    id: "SYN_accident_pedestrian_004__00032",
    turns: [
      { role: "caller", text: "allo les pompiers, fissa! yewwet lbus yiwen ameddak." },
      { role: "operator", text: "l'7imaya l'madaniya f l'istima3. anda thellam?" },
      { role: "caller", text: "rn26, akbou, en face la station." },
      { role: "operator", text: "meskin, amek yella?" },
      { role: "caller", text: "yeghli, ul yezmir ula di inker. iblessi bezzaf!" },
      { role: "operator", text: "d'accord, at-tacha l'ambulance." },
      { role: "caller", text: "ya3tik sa7a." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Adekar, centre ville",
    id: "SYN_accident_pedestrian_004__00033",
    turns: [
      { role: "caller", text: "allo, 3ajlem svp! renverse piéton!" },
      { role: "operator", text: "m3akoum l'7imaya, anda exact?" },
      { role: "caller", text: "adekar, centre ville. taqchicht tezger passage, tewwet-itt tomobil." },
      { role: "operator", text: "est-ce qu'il y a du sang?" },
      { role: "caller", text: "khati, mais t-choqua, thebki." },
      { role: "operator", text: "d'accord, at-tacha l'ambulance tura." },
      { role: "caller", text: "barak allahu fik." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Beni Ksila, l'arrêt n l'bus",
    id: "SYN_accident_pedestrian_004__00034",
    turns: [
      { role: "caller", text: "allo l'7imaya! activiw svp, yella accident!" },
      { role: "operator", text: "dachu yellan? anda?" },
      { role: "caller", text: "beni ksila, l'arrêt n l'bus. yiwen piéton darbouh, tewwet-it moto." },
      { role: "operator", text: "ch7al n l'blessés?" },
      { role: "caller", text: "yiwen amghar. ul yettmeslay ula." },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d." },
      { role: "caller", text: "sa7a." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Chellata, zdat l'école",
    id: "SYN_accident_pedestrian_004__00035",
    turns: [
      { role: "caller", text: "allo les pompiers, 3afak azlem!" },
      { role: "operator", text: "l'7imaya l'madaniya, dachu yellan?" },
      { role: "caller", text: "ssyara tewwet tamghart deg abrid." },
      { role: "operator", text: "anda dagi?" },
      { role: "caller", text: "chellata, zdat l'école." },
      { role: "operator", text: "iblessi?" },
      { role: "caller", text: "ul zrigh ula, teghli kan ur t-bougi ara." },
      { role: "operator", text: "d'accord a sidi, aqlagh ntteddu-d." },
      { role: "caller", text: "sahit." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Ighram, l'entrée n village",
    id: "SYN_accident_pedestrian_004__00036",
    turns: [
      { role: "caller", text: "allo, fissa fissa! kayen accident!" },
      { role: "operator", text: "anda exact?" },
      { role: "caller", text: "ighram, l'entrée n village. tomobil t-renversa piéton." },
      { role: "operator", text: "est-ce qu'il est conscient?" },
      { role: "caller", text: "ih, mais iblessi g uqerruy, idamen attas." },
      { role: "operator", text: "d'accord, l'ambulance di t-ru7 tura." },
      { role: "caller", text: "ya3tik sa7a." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Barbacha",
    id: "SYN_accident_pedestrian_004__00037",
    turns: [
      { role: "caller", text: "allo l'7imaya! azlemd, piéton fiyatouh!" },
      { role: "operator", text: "m3akoum l'7imaya, anda wagi?" },
      { role: "caller", text: "barbacha, au niveau n trottoir, tewwet-it camionnette." },
      { role: "operator", text: "ch7al yellan?" },
      { role: "caller", text: "iwen kan, aqchich. meskin irez udhar-is." },
      { role: "operator", text: "d'accord, at-tacha l'ambulance." },
      { role: "caller", text: "sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Tamokra, route principale",
    id: "SYN_accident_pedestrian_004__00038",
    turns: [
      { role: "caller", text: "allo l'7imaya, s zerb svp!" },
      { role: "operator", text: "dachu yellan?" },
      { role: "caller", text: "yewwet-it lbus yiwen urgaz, yezger abrid." },
      { role: "operator", text: "wach la commune?" },
      { role: "caller", text: "tamokra, route principale." },
      { role: "operator", text: "amek yella tura?" },
      { role: "caller", text: "il est blessé au niveau n tfednin." },
      { role: "operator", text: "d'accord, aqlagh ntteddu-d." },
      { role: "caller", text: "barak allahu fik." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Amalou, zdat l'apc",
    id: "SYN_accident_pedestrian_004__00039",
    turns: [
      { role: "caller", text: "allo, 3ajlem svp, renversé piéton!" },
      { role: "operator", text: "anda exact?" },
      { role: "caller", text: "amalou, zdat l'apc. tomobil teqleb-it." },
      { role: "operator", text: "est-ce qu'il est conscient?" },
      { role: "caller", text: "ul zrigh ula, lghachi bezzaf dinna. ma neqder-ch nchouf." },
      { role: "operator", text: "d'accord a sidi, at-tacha l'ambulance." },
      { role: "caller", text: "sa7a." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "RN12, Adekar",
    id: "SYN_accident_pedestrian_004__00040",
    turns: [
      { role: "caller", text: "allo les pompiers! activiw!" },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya, anda?" },
      { role: "caller", text: "rn12, adekar. yewwet-it camion yiwen piéton." },
      { role: "operator", text: "ch7al n l'blessés?" },
      { role: "caller", text: "iwen ameddak. yeghli, yeblessi f l'katf." },
      { role: "operator", text: "d'accord, l'ambulance tura di t-el7eq." },
      { role: "caller", text: "ya3tik sa7a." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Sidi Aïch, zdat l'hôpital",
    id: "SYN_accident_pedestrian_005__00041",
    turns: [
      { role: "caller", text: "salam, tewwet yiwet tomobil yiwen weqchich dayi di sidi aïch, zdat l'hôpital. ul yezmir ula ad ihder." },
      { role: "operator", text: "l'7imaya l'madaniya n bgayet. at-defkegh numéro n l'poste n sidi aïch, marki ghorek." },
      { role: "caller", text: "an3am, efk-iyi-t-id." },
      { role: "operator", text: "d 034 86 07 80." },
      { role: "caller", text: "034 86 07 80. dakur sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "l'Kseur, RN12",
    id: "SYN_accident_pedestrian_005__00042",
    turns: [
      { role: "caller", text: "allo, yeghli yiwen umghar deg abrid, yeqleb-it lbus dayi di l'kseur, rn12." },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya n bgayet. a sidi, at-defkegh numéro n pompiers n l'kseur, huma di qarben." },
      { role: "caller", text: "ih ma3lich." },
      { role: "operator", text: "marki: 034 82 35 65." },
      { role: "caller", text: "034 82 35 65, sa7a gma." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Kherrata",
    id: "SYN_accident_pedestrian_005__00043",
    turns: [
      { role: "caller", text: "allo l'pompiers? yezger abrid tewwet-it tomobil dayi di kherrata, ul yeblessi ula bezaf, chwiya kan." },
      { role: "operator", text: "l'7imaya l'madaniya n bgayet f l'istima3. a madame, at-defkegh numéro n l'poste n kherrata akken di d-awden fissa." },
      { role: "caller", text: "dakur a gma, dachu-t numéro?" },
      { role: "operator", text: "034 18 51 21." },
      { role: "caller", text: "034 18 51 21. sa7it gma." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Oued Ghir, zdat l'usine",
    id: "SYN_accident_pedestrian_005__00044",
    turns: [
      { role: "caller", text: "salam alaykoum. ness3a un blessé, yiwet l'moto tewwet yiwen uqchich dagi di oued ghir zdat l'usine." },
      { role: "operator", text: "wa alaykoum salam. dagi l'7imaya n bgayet. at-defkegh numéro n oued ghir, marki ghorek: 030 16 92 92." },
      { role: "caller", text: "030 16 92 92. dakour, ya3tik sa7a." },
      { role: "operator", text: "bla mziya." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "Chemini, la route n Sidi Aïch",
    id: "SYN_accident_pedestrian_005__00045",
    turns: [
      { role: "caller", text: "allo, yella wa yeqleb-it l'camion di chemini, f la route n sidi aïch. il est blessé." },
      { role: "operator", text: "l'7imaya l'madaniya n bgayet. at-defkegh numéro n l'poste n sidi aïch, d nutni i di d-iruhun." },
      { role: "caller", text: "iyeh, a3tih-li svp." },
      { role: "operator", text: "marki ghorek: 034 86 07 80." },
      { role: "caller", text: "034 86 07 80. sa7it." },
    ]
  },
  {
    type: "❓ accident_pedestrian",
    incident: "accident_pedestrian",
    location: "la corniche n Aokas, RN9",
    id: "SYN_accident_pedestrian_005__00046",
    turns: [
      { role: "caller", text: "salam, kayen accident f la corniche n aokas, rn9. un piéton darbouh ssyara, yeghli." },
      { role: "operator", text: "m3akoum l'7imaya l'madaniya n bgayet. at-defkegh numéro n l'poste n souk el tenine akken di d-awden." },
      { role: "caller", text: "ih ma3lich, efk-iyi-t-id." },
      { role: "operator", text: "d 034 09 36 13." },
      { role: "caller", text: "034 09 36 13. d'accord sa7a." },
    ]
  },
];