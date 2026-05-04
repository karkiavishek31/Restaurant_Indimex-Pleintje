const galleryImages = [
    { url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop", alt: "Premium Nigiri Set" },
    { url: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop", alt: "Fresh Sushi Rolls" },
    { url: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1200&auto=format&fit=crop", alt: "Signature Dragon Roll" },
    { url: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=1200&auto=format&fit=crop", alt: "Salmon Sashimi" },
    { url: "https://images.unsplash.com/photo-1563612116625-3012372fccce?q=80&w=1200&auto=format&fit=crop", alt: "Crispy Tempura Rolls" },
    { url: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1200&auto=format&fit=crop", alt: "Oyster and Seaweed Delicacy" }
];

const menuProducts = [
    {
        "id": 1,
        "category": "VOORGERECHTEN",
        "name": "Edamame",
        "image": "https://images.unsplash.com/photo-1615361413105-8825eeefd1b1?q=80&w=800&auto=format&fit=crop",
        "description": "Jonge, knapperige sojabonen, zachtjes gestoomd en afgewerkt met een vleugje grof zeezout.",
        "price": 0.0
    },
    {
        "id": 2,
        "category": "VOORGERECHTEN",
        "name": "Dimsum",
        "image": "https://images.unsplash.com/photo-1563245332-692e10509494?q=80&w=800&auto=format&fit=crop",
        "description": "Een verfijnde selectie van ambachtelijk gestoomde Aziatische deeghapjes, rijkelijk gevuld met mals vlees of verse seizoensgroenten.",
        "price": 0.0
    },
    {
        "id": 3,
        "category": "VOORGERECHTEN",
        "name": "Momo-mix",
        "description": "Authentieke Nepalees dumplings, delicaat gestoomd en gevuld met een smaakvolle, kruidige kippenfarce.",
        "price": 0.0
    },
    {
        "id": 4,
        "category": "VOORGERECHTEN",
        "name": "Gyoza \u2013 C",
        "description": "Goudbruin gebakken Japanse dumplings met een hartige kippenvulling, zacht vanbinnen en onweerstaanbaar krokant aan de buitenkant.",
        "price": 0.0
    },
    {
        "id": 5,
        "category": "VOORGERECHTEN",
        "name": "Harumaki Kip",
        "description": "Goudgele, flinterdunne lenterolletjes, krokant gebakken en royaal gevuld met malse kip en knapperige juliennegroenten.",
        "price": 0.0
    },
    {
        "id": 6,
        "category": "VOORGERECHTEN",
        "name": "Harumaki Veg",
        "description": "Elegante, krokante lenterolletjes gevuld met een kleurrijk palet van dagverse, knapperige groenten.",
        "price": 0.0
    },
    {
        "id": 7,
        "category": "VOORGERECHTEN",
        "name": "Asian Ebi",
        "description": "Garnalen bereid op authentieke Aziatische wijze, voorzien van een lichte, krokante bite en harmonieus op smaak gebracht met oosterse specerijen.",
        "price": 0.0
    },
    {
        "id": 8,
        "category": "VOORGERECHTEN",
        "name": "Asian Sake",
        "description": "Zachtgegaarde premium zalm, op oosterse wijze bereid en subtiel gelakt met een lichtzoete, aromatische saus.",
        "price": 0.0
    },
    {
        "id": 9,
        "category": "VOORGERECHTEN",
        "name": "Miso Soep",
        "description": "Een hartverwarmende, klassieke Japanse bouillon verrijkt met miso, zijdetofu, vers wakame-zeewier en fijngesneden lente-ui.",
        "price": 0.0
    },
    {
        "id": 10,
        "category": "SALADE GERECHTEN",
        "name": "Zeewier Sla",
        "description": "Een verkwikkende salade van vers zeewier, subtiel aangemaakt met een lichtzoete, geroosterde sesamdressing.",
        "price": 0.0
    },
    {
        "id": 11,
        "category": "SALADE GERECHTEN",
        "name": "Sake Butsu",
        "description": "Een elegante salade met verfijnde blokjes kraakverse zalm, knapperige sesamzaadjes en een authentieke Japanse dressing.",
        "price": 0.0
    },
    {
        "id": 12,
        "category": "SALADE GERECHTEN",
        "name": "Maguro Butso",
        "description": "Een smaakvolle salade met botermalse, verse tonijn, geroosterde sesamzaadjes en een klassieke Japanse dressing.",
        "price": 0.0
    },
    {
        "id": 13,
        "category": "SALADE GERECHTEN",
        "name": "Kanikama Sla",
        "description": "Een verfrissende salade met delicate krabsticks (surimi), knapperige julienne van komkommer en een zachte, romige dressing.",
        "price": 0.0
    },
    {
        "id": 14,
        "category": "POKE BOWL",
        "name": "Poke Zalm",
        "description": "Een kleurrijke bowl van perfect gegaarde sushirijst, rijkelijk belegd met kraakverse zalm, knapperige seizoensgroenten en onze ambachtelijke, huisgemaakte saus.",
        "price": 0.0
    },
    {
        "id": 15,
        "category": "POKE BOWL",
        "name": "Poke Tonijn",
        "description": "Een smaakvolle sushirijstbowl met botermalse, verse tonijn, een verfijnde selectie knapperige groenten en onze kenmerkende huisgemaakte dressing.",
        "price": 0.0
    },
    {
        "id": 16,
        "category": "POKE BOWL",
        "name": "Poke Veg",
        "description": "Een lichte, voedzame en volledig vegetarische bowl, boordevol dagverse groenten, zachte, romige avocado en een perfect balancerende, smaakvolle saus.",
        "price": 0.0
    },
    {
        "id": 17,
        "category": "POKE BOWL",
        "name": "Poke Chicken",
        "description": "Een hartige rijstbowl met perfect gegrilde, malse kip, geflankeerd door verse groenten en overgoten met onze rijke, huisgemaakte saus.",
        "price": 0.0
    },
    {
        "id": 18,
        "category": "POKE BOWL",
        "name": "Poke Pleintje Mix",
        "description": "De ultieme combinatie: een rijke sushirijstbowl met een verfijnde mix van kraakverse zalm en tonijn, aangevuld met knapperige groenten en onze signatuursaus.",
        "price": 0.0
    },
    {
        "id": 19,
        "category": "HOSOMAKI",
        "name": "Hoso Zalm",
        "description": "Dunne Sushiroll met verse zalm.",
        "price": 0.0
    },
    {
        "id": 20,
        "category": "HOSOMAKI",
        "name": "Hoso Tonijn",
        "description": "Dunne Sushiroll met verse tonijn.",
        "price": 0.0
    },
    {
        "id": 21,
        "category": "HOSOMAKI",
        "name": "Hoso Cucumber",
        "description": "Dunne Sushiroll met frisse komkomber.",
        "price": 0.0
    },
    {
        "id": 22,
        "category": "HOSOMAKI",
        "name": "Hoso Avocado",
        "description": "Dunne Sushiroll met romige avocado.",
        "price": 0.0
    },
    {
        "id": 23,
        "category": "HOSOMAKI",
        "name": "Hoso Mango",
        "description": "Dunne Sushiroll met zoete, lekkere mango.",
        "price": 0.0
    },
    {
        "id": 24,
        "category": "TEMAKI",
        "name": "Temaki Tonijn",
        "description": "Handrol met tonijn, rijst en groenten.",
        "price": 0.0
    },
    {
        "id": 25,
        "category": "TEMAKI",
        "name": "Temaki Zalm",
        "description": "Handrol met zalm, rijst en groenten.",
        "price": 0.0
    },
    {
        "id": 26,
        "category": "TEMAKI",
        "name": "Temaki Veg",
        "description": "Handrol met verse groenten en rijst.",
        "price": 0.0
    },
    {
        "id": 27,
        "category": "TEMAKI",
        "name": "Temaki Asian Ebi",
        "description": "Handrol met krokant garnaal en Aziatische saus.",
        "price": 0.0
    },
    {
        "id": 28,
        "category": "SASHIMI (4 STUKS)",
        "name": "Tonijn",
        "description": "Verse plakjes rauwe tonijn.",
        "price": 0.0
    },
    {
        "id": 29,
        "category": "SASHIMI (4 STUKS)",
        "name": "Zalm",
        "description": "Verse plakjes rauwe zalm.",
        "price": 0.0
    },
    {
        "id": 30,
        "category": "SASHIMI (4 STUKS)",
        "name": "Ebi",
        "description": "Gekookte garnalen, geserveerd als sashimi.",
        "price": 0.0
    },
    {
        "id": 31,
        "category": "SASHIMI (4 STUKS)",
        "name": "Krabstick",
        "description": "Fijn gesneden krabsticks.",
        "price": 0.0
    },
    {
        "id": 32,
        "category": "SASHIMI (4 STUKS)",
        "name": "Paling",
        "description": "Gegrilde paling met lichte zoete saus.",
        "price": 0.0
    },
    {
        "id": 33,
        "category": "NIGIRI",
        "name": "Zalm",
        "description": "Twee stukjes hemelsvers zalmfilet, zachtjes neergelegd op een bedje van met de hand gevormde sushirijst. Smelt letterlijk op uw tong.",
        "price": 0.0
    },
    {
        "id": 34,
        "category": "NIGIRI",
        "name": "Tonijn",
        "description": "Twee stukjes malse, dieprode tonijn van topkwaliteit, keurig gedrapeerd op handgevormde sushirijst. Een echte klassieker voor de liefhebber.",
        "price": 0.0
    },
    {
        "id": 35,
        "category": "NIGIRI",
        "name": "Ebi",
        "description": "Twee stukjes zacht gekookte, sappige tijgergarnalen, voorzichtig over handgevormde sushirijst gevouwen. Fris, licht en heerlijk van smaak.",
        "price": 0.0
    },
    {
        "id": 36,
        "category": "NIGIRI",
        "name": "Krabstick",
        "description": "Twee stukjes fijn gesneden surimi krabstick met een zachte, licht zoute smaak, liefdevol op handgevormde sushirijst geplaatst.",
        "price": 0.0
    },
    {
        "id": 37,
        "category": "NIGIRI",
        "name": "Paling",
        "description": "Twee stukjes heerlijk gegrilde paling, rijkelijk beglazuurd met een zoethartige unagi-saus en geserveerd op handgevormde sushirijst.",
        "price": 0.0
    },
    {
        "id": 38,
        "category": "NIGIRI",
        "name": "Avocado",
        "description": "Twee stukjes fluweelzachte, rijpe avocado op een bedje van handgevormde sushirijst. Fris, romig en volledig plantaardig.",
        "price": 0.0
    },
    {
        "id": 39,
        "category": "NIGIRI",
        "name": "Aburi Zalm",
        "description": "Twee stukjes verse zalm die met een brander licht worden gevlamd, waardoor de bovenste laag smeu\u00efg en licht karamelliseert op handgevormde sushirijst.",
        "price": 0.0
    },
    {
        "id": 40,
        "category": "ROLLS GEFRITUURD",
        "name": "Dragon Eyes",
        "description": "Krokant gefrituurde rolletjes met een hartige vulling van zalm en roomkaas, omhuld in een luchtig, goudbruin jasje. Afgewerkt met een smaakvolle topping en een vleugje pittige saus. Onweerstaanbaar knapperig bij elke hap.",
        "price": 0.0
    },
    {
        "id": 41,
        "category": "ROLLS GEFRITUURD",
        "name": "Manhatten",
        "description": "Een royale, stevig gevulde rol ge\u00efnspireerd op de grote stad, krokant gebakken in een dun, knapperig omhulsel. Gevuld met een rijke combinatie van vis en groenten, afgewerkt met een smeu\u00efge huisgemaakte saus.",
        "price": 0.0
    },
    {
        "id": 42,
        "category": "ROLLS GEFRITUURD",
        "name": "Tempura Maki",
        "description": "Luchtig en krokant in een klassiek tempurabeslag gefrituurde makirol, gevuld met malse vis of verse seizoensgroenten. Goudbruin van buiten, zacht en smaakvol van binnen.",
        "price": 0.0
    },
    {
        "id": 43,
        "category": "ROLLS GEFRITUURD",
        "name": "Warm Sake Roll",
        "description": "Een warme, knapperig gefrituurde rol boordevol malse zalm, omhuld in een dun, krokant laagje en rijkelijk afgewerkt met een romige, lichtzoete saus. Comfort food op zijn Japans.",
        "price": 0.0
    },
    {
        "id": 44,
        "category": "URAMAKI",
        "name": "Tonijn Pikante",
        "description": "Inside-out rol met verse tonijn en een pittige sriracha-mayonaise, bestrooid met geroosterde sesamzaadjes. Een vurige combinatie voor wie van een pikante kick houdt.",
        "price": 0.0
    },
    {
        "id": 45,
        "category": "URAMAKI",
        "name": "Zalm Pikante",
        "description": "Inside-out rol met kraakverse zalm en een vurige pittige saus, licht bestrooid met knapperige sesamzaadjes. Romig en pittig tegelijk.",
        "price": 0.0
    },
    {
        "id": 46,
        "category": "URAMAKI",
        "name": "Scampi",
        "description": "Inside-out rol gevuld met malse, sappige scampi, knapperige komkommer en een subtiele Aziatische saus. Verfijnd en vol van smaak.",
        "price": 0.0
    },
    {
        "id": 47,
        "category": "URAMAKI",
        "name": "Tonijn en Avocado",
        "description": "Inside-out rol met verse, botermalse tonijn en rijpe romige avocado, bestrooid met geroosterde sesamzaadjes. Een tijdloze klassieker.",
        "price": 0.0
    },
    {
        "id": 48,
        "category": "URAMAKI",
        "name": "Zalm en Avocado",
        "description": "Inside-out rol met kraakverse zalm en fluweelzachte avocado, afgewerkt met geroosterde sesamzaadjes. Fris, rijk en heerlijk in balans.",
        "price": 0.0
    },
    {
        "id": 49,
        "category": "URAMAKI",
        "name": "Mango, Zalm, Komkomber",
        "description": "Frisse inside-out rol met zoete rijpe mango, verse zalm en knapperige komkommer. Een tropische smaakexplosie in elke hap.",
        "price": 0.0
    },
    {
        "id": 50,
        "category": "URAMAKI",
        "name": "Surimi en Avocado",
        "description": "Inside-out rol met delicate surimi krabstick en romige avocado, licht bestrooid met sesamzaadjes. Zacht, licht en onweerstaanbaar smaakvol.",
        "price": 0.0
    },
    {
        "id": 51,
        "category": "URAMAKI",
        "name": "Komkomber en Avocado",
        "description": "Volledig plantaardige inside-out rol met knapperige komkommer en rijpe, romige avocado. Fris, licht en heerlijk vegetarisch.",
        "price": 0.0
    },
    {
        "id": 52,
        "category": "URAMAKI",
        "name": "Pikante Tonijn en Avocado",
        "description": "Inside-out rol met verse tonijn, romige avocado en een extra vurige sriracha-mayonaise. Voor de echte pikante liefhebber.",
        "price": 0.0
    },
    {
        "id": 53,
        "category": "COMBOS",
        "name": "Sashimi Combo",
        "description": "Een sierlijk bord met een ambachtelijke selectie van versgetrokken sashimi \u2014 tonijn, zalm en garnaal \u2014 zorgvuldig gesneden en prachtig gepresenteerd.",
        "price": 0.0
    },
    {
        "id": 54,
        "category": "COMBOS",
        "name": "Nigiri Combo",
        "description": "Een culinair assortiment van handgevormde nigiri met een gevarieerde keuze van de beste vis en zeevruchten van het seizoen.",
        "price": 0.0
    },
    {
        "id": 55,
        "category": "COMBOS",
        "name": "Vegetarisch Combo",
        "description": "Een kleurrijke, volledig plantaardige combinatie van vegetarische sushi, uramaki en verse bereidingen. Smaakvol, voedzaam en honderd procent groentegenot.",
        "price": 0.0
    },
    {
        "id": 56,
        "category": "COMBOS",
        "name": "Sushi Combo",
        "description": "Een uitgebalanceerde mix van onze populairste sushirollen, nigiri en maki \u2014 samengesteld voor de echte sushiliefhebber die van alles wil proeven.",
        "price": 0.0
    },
    {
        "id": 57,
        "category": "COMBOS",
        "name": "Royal Edel Set",
        "description": "Een exclusieve luxeselectie van premium vis en zeevruchten, samengesteld voor de meest veeleisende fijnproever. De ultieme sushi-ervaring op \u00e9\u00e9n bord.",
        "price": 0.0
    },
    {
        "id": 58,
        "category": "COMBOS",
        "name": "Cheyenne Special Box",
        "description": "Onze kenmerkende signatuurbox met een zorgvuldig samengestelde keuze van huisspecialiteiten en absolute bestsellers. Verrassend, gevarieerd en onvergetelijk.",
        "price": 0.0
    },
    {
        "id": 59,
        "category": "PLATEAU",
        "name": "Mini Plateau 25 st",
        "description": "",
        "price": 30.0
    },
    {
        "id": 60,
        "category": "PLATEAU",
        "name": "Mini Royal Plateau 25 st",
        "description": "",
        "price": 34.0
    },
    {
        "id": 61,
        "category": "PLATEAU",
        "name": "Maki Plateau 25 st",
        "description": "",
        "price": 0.0
    },
    {
        "id": 62,
        "category": "PLATEAU",
        "name": "2personen Plateau 48 st",
        "description": "",
        "price": 60.0
    },
    {
        "id": 63,
        "category": "PLATEAU",
        "name": "2 personen Royal Plateau 48st",
        "description": "sashimi en nigiri meet special roll",
        "price": 0.0
    },
    {
        "id": 64,
        "category": "PLATEAU",
        "name": "Maki Plateau 48 st",
        "description": "",
        "price": 0.0
    },
    {
        "id": 65,
        "category": "PLATEAU",
        "name": "3 personen Plateau 65 st",
        "description": "",
        "price": 0.0
    },
    {
        "id": 66,
        "category": "PLATEAU",
        "name": "3 personen Royal Plateau 65 St",
        "description": "",
        "price": 0.0
    },
    {
        "id": 67,
        "category": "PLATEAU",
        "name": "Maki Plateau 65 St",
        "description": "",
        "price": 0.0
    }
];