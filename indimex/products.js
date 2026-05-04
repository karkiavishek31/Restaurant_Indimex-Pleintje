const galleryImages = [
    { url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop", alt: "Authentic Indian Curry" },
    { url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1200&auto=format&fit=crop", alt: "Fresh Mexican Tacos" },
    { url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop", alt: "Healthy Fusion Bowl" },
    { url: "https://images.unsplash.com/photo-1603894584202-93306d45c703?q=80&w=1200&auto=format&fit=crop", alt: "Sizzling Tandoori Platter" },
    { url: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1200&auto=format&fit=crop", alt: "Classic Mexican Enchiladas" },
    { url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop", alt: "Gourmet Chicken Biryani" }
];

const menuProducts = [
    // === APERITIEVEN ===
    { id: 1, category: "APERITIEVEN", name: "Margarita", image: "https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?q=80&w=800&auto=format&fit=crop", description: "Tequila, limoen, triple sec", price: 11.00 },
    { id: 2, category: "APERITIEVEN", name: "Mojito", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop", description: "Verse munt, limoen, rum, suiker en bruiswater", price: 11.00 },
    { id: 3, category: "APERITIEVEN", name: "Gin Tonic", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=800&auto=format&fit=crop", description: "Gin met tonic water", price: 11.50 },
    { id: 4, category: "APERITIEVEN", name: "Cava Glas", description: "Sprankelende cava per glas", price: 7.50 },
    { id: 5, category: "APERITIEVEN", name: "Kir", description: "Witte wijn met cassis", price: 6.50 },
    { id: 6, category: "APERITIEVEN", name: "Kir Royal", description: "Champagne met cassis", price: 8.00 },
    { id: 7, category: "APERITIEVEN", name: "Martini wit / rood", description: "Martini aperitief, keuze wit of rood", price: 7.00 },
    { id: 8, category: "APERITIEVEN", name: "Porto wit / rood", description: "Portugese dessertwijn, keuze wit of rood", price: 7.00 },
    { id: 9, category: "APERITIEVEN", name: "Campari Orange", description: "Campari met sinaasappelsap", price: 6.70 },
    { id: 10, category: "APERITIEVEN", name: "Havana Club Especial - Cola", description: "Cubaanse rum met cola", price: 9.50 },
    { id: 11, category: "APERITIEVEN", name: "Pina Colada", description: "Rum, kokosroom en ananassap", price: 9.50 },
    { id: 12, category: "APERITIEVEN", name: "Aperitief van het Huis", description: "Vodka, cointreau, sinaasappelsap en grenadine", price: 10.00 },
    { id: 13, category: "APERITIEVEN", name: "Virgin Mojito", description: "Alcoholvrije mojito met verse munt en limoen", price: 10.00 },
    { id: 14, category: "APERITIEVEN", name: "Gin Tonic 0%", description: "Alcoholvrije gin tonic", price: 9.50 },

    // === DRANKEN ===
    { id: 15, category: "DRANKEN", name: "Water plat / bruisend 50cl", description: "Plat of bruisend mineraalwater", price: 5.90 },
    { id: 16, category: "DRANKEN", name: "Water plat / bruisend 1L", description: "Plat of bruisend mineraalwater, grote fles", price: 10.00 },
    { id: 17, category: "DRANKEN", name: "Cola / Zero / Fanta / Sprite / Ice Tea", description: "Frisdranken naar keuze", price: 3.80 },
    { id: 18, category: "DRANKEN", name: "Mango Lassi", description: "Indische yoghurtdrank met mango", price: 5.20 },
    { id: 19, category: "DRANKEN", name: "Sweet / Salted Lassi", description: "Indische yoghurtdrank, zoet of gezouten", price: 4.20 },
    { id: 20, category: "DRANKEN", name: "Koffie / Espresso", description: "Verse koffie of espresso", price: 3.50 },
    { id: 21, category: "DRANKEN", name: "Masala Thee", description: "Gekruide Indische thee met melk en specerijen", price: 3.70 },

    // === BIER ===
    { id: 22, category: "BIER", name: "Cobra Indisch Bier 33cl", description: "Indisch lagerbier", price: 6.00 },
    { id: 23, category: "BIER", name: "Kingfisher", description: "Indisch premiumbier", price: 6.00 },
    { id: 24, category: "BIER", name: "Corona", description: "Mexicaans bier", price: 5.35 },
    { id: 25, category: "BIER", name: "Desperado", description: "Bier met tequilasmaak", price: 5.35 },
    { id: 26, category: "BIER", name: "Duvel", description: "Belgisch sterk blond bier", price: 5.50 },
    { id: 27, category: "BIER", name: "Tongerlo", description: "Belgisch abdijbier", price: 5.20 },

    // === DIGESTIEVEN ===
    { id: 28, category: "DIGESTIEVEN", name: "Amaretto", description: "Italiaanse amandellikeur", price: 7.50 },
    { id: 29, category: "DIGESTIEVEN", name: "Baileys", description: "Ierse roomlikeur", price: 7.50 },
    { id: 30, category: "DIGESTIEVEN", name: "Cognac", description: "Franse brandewijn", price: 9.00 },
    { id: 31, category: "DIGESTIEVEN", name: "Whisky", description: "Schotse of Ierse whisky", price: 8.00 },
    { id: 32, category: "DIGESTIEVEN", name: "Irish Coffee", description: "Koffie met Ierse whisky en slagroom", price: 10.00 },
    { id: 33, category: "DIGESTIEVEN", name: "Tequila Shot", description: "Pure tequila shot", price: 4.50 },
    { id: 34, category: "DIGESTIEVEN", name: "Indische Likeur Paan", description: "Traditionele Indische likeur met paan-smaak", price: 7.00 },
    { id: 35, category: "DIGESTIEVEN", name: "Indische Mango Likeur", description: "Zoete Indische mangolikeur", price: 7.00 },
    { id: 36, category: "DIGESTIEVEN", name: "Indische Whiskey", description: "Premium Indische whisky", price: 10.50 },

    // === SOEPEN ===
    { id: 37, category: "SOEPEN", name: "Kippensoep met Oosterse Kruiden", description: "Hartverwarmende bouillon met kip en aromatische oosterse kruiden", price: 8.00 },
    { id: 38, category: "SOEPEN", name: "Groentesoep", description: "Verse seizoensgroenten in een lichte, smaakvolle bouillon", price: 7.00 },
    { id: 39, category: "SOEPEN", name: "Vissoep", description: "Rijke soep met verse vis en een subtiele kruidenbasis", price: 9.00 },

    // === VOORGERECHTEN ===
    { id: 40, category: "VOORGERECHTEN", name: "Indimex MIX", description: "Gevarieerde mix van voor- en hapjes. Ook vegetarische mix verkrijgbaar. Vanaf 2 personen.", price: 13.50 },
    { id: 41, category: "VOORGERECHTEN", name: "Guacamole", description: "Pittige avocado, tomaat, ui en kruiden. Geserveerd met nachos.", price: 10.50 },
    { id: 42, category: "VOORGERECHTEN", name: "Paneer Chilly", description: "Verse Indische kaas met soja, ketchupsaus, paprika en ui", price: 9.50 },
    { id: 43, category: "VOORGERECHTEN", name: "Patitos Calientés", description: "Pittige jalapenoskroketjes gevuld met schapenkaas", price: 10.50 },
    { id: 44, category: "VOORGERECHTEN", name: "Onion Bhajee", description: "Gefrituurde uienmix in kikkererwtenbloem", price: 7.50 },
    { id: 45, category: "VOORGERECHTEN", name: "Pakora", description: "Gefrituurde groentemix in kikkererwtenbloem", price: 7.50 },
    { id: 46, category: "VOORGERECHTEN", name: "Samosa", description: "Bladerdeeghapjes met hartige groentevulling", price: 7.50 },
    { id: 47, category: "VOORGERECHTEN", name: "Dagon Chicken Chilly", description: "Gebakken kip met soja- en ketchupsaus met paprika", price: 10.50 },
    { id: 48, category: "VOORGERECHTEN", name: "Garlic Scampi", description: "Gefrituurde scampi's met ui, paprika en look", price: 13.00 },
    { id: 49, category: "VOORGERECHTEN", name: "Cheese Pakora (3 stuks)", description: "Krokante kaaskroketjes in kikkererwtenbloem", price: 7.00 },
    { id: 50, category: "VOORGERECHTEN", name: "Scampi Pakora (4 stuks)", description: "Gefrituurde scampi in kikkererwtenbloem", price: 13.00 },
    { id: 51, category: "VOORGERECHTEN", name: "Chicken Tikka Saté (2 stuks)", description: "Gemarineerde gefrituurde kippensaté", price: 11.00 },
    { id: 52, category: "VOORGERECHTEN", name: "Ginger Chicken", description: "Malse kip in een aromatisch gembersausje", price: 9.50 },
    { id: 53, category: "VOORGERECHTEN", name: "Honey Garlic Chicken Wings", description: "Krokante kippenvleugels met zoete honingglazuur en knoflooksaus", price: 11.00 },
    { id: 54, category: "VOORGERECHTEN", name: "Mexicaanse Avocado Salade", description: "Frisse salade met avocado, tomaten, zoete maïs, paprika, komkommer, limoen en knoflook", price: 11.00 },
    { id: 55, category: "VOORGERECHTEN", name: "Steamed Momos (5 stuks)", description: "Vijf gevulde dumplings, perfect gestoomd met een pittige dip", price: 11.50 },

    // === KERRIE HOOFDGERECHTEN ===
    { id: 56, category: "KERRIE", name: "Vindaloo (Vegi)", description: "Kerrie uit Goa, origineel Portugees maar verrijkt met lokale kruiden en pepers. Zeer pittig.", price: 22.00 },
    { id: 57, category: "KERRIE", name: "Vindaloo (Kip)", description: "Kerrie uit Goa, origineel Portugees maar verrijkt met lokale kruiden en pepers. Zeer pittig.", price: 25.50 },
    { id: 58, category: "KERRIE", name: "Vindaloo (Lam)", description: "Kerrie uit Goa, origineel Portugees maar verrijkt met lokale kruiden en pepers. Zeer pittig.", price: 27.00 },
    { id: 59, category: "KERRIE", name: "Vindaloo (Scampi)", description: "Kerrie uit Goa, origineel Portugees maar verrijkt met lokale kruiden en pepers. Zeer pittig.", price: 28.50 },
    { id: 60, category: "KERRIE", name: "Madras (Vegi)", description: "Zuid-Indische, pittige kerrie met een boeiende mengeling van hete specerijen.", price: 22.00 },
    { id: 61, category: "KERRIE", name: "Madras (Kip)", description: "Zuid-Indische, pittige kerrie met een boeiende mengeling van hete specerijen.", price: 25.50 },
    { id: 62, category: "KERRIE", name: "Madras (Lam)", description: "Zuid-Indische, pittige kerrie met een boeiende mengeling van hete specerijen.", price: 27.00 },
    { id: 63, category: "KERRIE", name: "Kadahi (Kip)", description: "Gekookt met ui, gember, paprika, tomaat en exotische kruiden in kerriesaus.", price: 25.50 },
    { id: 64, category: "KERRIE", name: "Tikka Masala (Kip)", description: "Gemarineerd in tandoorisaus en bereid met verse tomaten, gember, knoflook en groene pepers.", price: 25.50 },
    { id: 65, category: "KERRIE", name: "Tikka Masala (Lam)", description: "Gemarineerd in tandoorisaus en bereid met verse tomaten, gember, knoflook en groene pepers.", price: 27.00 },
    { id: 66, category: "KERRIE", name: "Korma (Kip)", description: "Kerriesaus verrijkt met kokosroom en geschaafde amandelen. Zeer mild van smaak.", price: 25.50 },
    { id: 67, category: "KERRIE", name: "Korma (Lam)", description: "Kerriesaus verrijkt met kokosroom en geschaafde amandelen. Zeer mild van smaak.", price: 27.00 },
    { id: 68, category: "KERRIE", name: "Biryani (Kip)", description: "Aromatisch gebakken rijst met kardemom, kaneel en vele kruiden. Oorspronkelijk Perzisch.", price: 25.50 },
    { id: 69, category: "KERRIE", name: "Biryani (Lam)", description: "Aromatisch gebakken rijst met kardemom, kaneel en vele kruiden. Oorspronkelijk Perzisch.", price: 27.00 },

    // === OVERIGE HOOFDGERECHTEN ===
    { id: 70, category: "HOOFDGERECHTEN", name: "Spare Ribs", description: "Met gekruide potato wedges en fris slaatje", price: 25.50 },
    { id: 71, category: "HOOFDGERECHTEN", name: "Gemarineerde Steak", description: "Met champignonroom en gewokte groenten", price: 30.50 },
    { id: 72, category: "HOOFDGERECHTEN", name: "Eendeborstfilet", description: "Met sinaasappel-cointreausaus en gewokte groenten", price: 30.00 },
    { id: 73, category: "HOOFDGERECHTEN", name: "Butter Chicken", description: "Romige kip met kruidige saus", price: 25.50 },
    { id: 74, category: "HOOFDGERECHTEN", name: "Chicken Palak", description: "Zachtgekruide saus met gehakte spinazie", price: 25.50 },
    { id: 75, category: "HOOFDGERECHTEN", name: "Lam Palak", description: "Lam in zachtgekruide saus met gehakte spinazie", price: 27.00 },
    { id: 76, category: "HOOFDGERECHTEN", name: "Scampi Palak", description: "Scampi in zachtgekruide saus met gehakte spinazie", price: 28.50 },
    { id: 77, category: "HOOFDGERECHTEN", name: "Sweet & Sour Chicken Pineapple", description: "Kippenblokjes met zoete ananas, currysaus en kokosmelk", price: 25.50 },
    { id: 78, category: "HOOFDGERECHTEN", name: "Chicken Sweet Potato Curry", description: "Kip, zoete aardappel, kokosmelk, currysaus, gember, uien, kruiden en look", price: 25.50 },

    // === TANDOORI SPECIALITEITEN ===
    { id: 79, category: "TANDOORI", name: "Kippenbout Tandoori", description: "Gemarineerd in yoghurt met tandoorikruiden, gegrild in traditionele kleioven. Geserveerd met rijst.", price: 23.50 },
    { id: 80, category: "TANDOORI", name: "Kippenfilet Tikka Tandoori", description: "Gemarineerde kipfilet, gegrild in traditionele kleioven. Geserveerd met rijst.", price: 26.00 },
    { id: 81, category: "TANDOORI", name: "Lamsvlees Tikka Tandoori", description: "Gemarineerd lamsvlees, gegrild in traditionele kleioven. Geserveerd met rijst.", price: 27.50 },
    { id: 82, category: "TANDOORI", name: "Scampi's Tandoori", description: "Gemarineerde scampi's, gegrild in traditionele kleioven. Geserveerd met rijst.", price: 28.50 },
    { id: 83, category: "TANDOORI", name: "Mix Grill Tandoori", description: "Combinatie van Tandoori kip, lam en scampi. Geserveerd met rijst.", price: 32.50 },

    // === VEGETARISCH ===
    { id: 84, category: "VEGETARISCH", name: "Mix-vegetarische Kerrie", description: "Smaakexplosie van groentjes in kerriemengeling van de chef", price: 21.00 },
    { id: 85, category: "VEGETARISCH", name: "Aloo Jeera", description: "Aardappelen op basis van komijnzaden", price: 21.00 },
    { id: 86, category: "VEGETARISCH", name: "Matter-Paneer", description: "Verse Indische kaas en erwtjes in een zachte kerriesaus", price: 21.00 },
    { id: 87, category: "VEGETARISCH", name: "Palak-Paneer", description: "Verse Indische kaas met een zachte kerrie van spinazie", price: 21.00 },
    { id: 88, category: "VEGETARISCH", name: "Aloo Palak", description: "Aardappelblokjes in zachtgekruide saus met gehakte spinazie", price: 21.00 },
    { id: 89, category: "VEGETARISCH", name: "Aloo Gobi", description: "Aardappelblokjes in zachtgekruide saus met bloemkoolroosjes", price: 21.00 },
    { id: 90, category: "VEGETARISCH", name: "Aloo Channa", description: "Aardappelblokjes in zachtgekruide saus met kikkererwten", price: 21.00 },
    { id: 91, category: "VEGETARISCH", name: "Chana Mushroom", description: "Kikkererwten in zachtgekruide saus met champignons", price: 21.00 },
    { id: 92, category: "VEGETARISCH", name: "Champignon Matter", description: "Champignons in zachtgekruide saus met erwtjes", price: 21.00 },

    // === NOEDELS ===
    { id: 93, category: "NOEDELS", name: "Noedels met Kip", description: "Gewokte noedels met kip, groenten, sojasaus en sweet chili saus", price: 25.50 },
    { id: 94, category: "NOEDELS", name: "Noedels met Scampi", description: "Gewokte noedels met scampi, groenten, sojasaus en sweet chili saus", price: 28.50 },
    { id: 95, category: "NOEDELS", name: "Noedels Vegetarisch", description: "Gewokte noedels met groenten, sojasaus en sweet chili saus", price: 22.00 },

    // === FAJITAS ===
    { id: 96, category: "FAJITAS", name: "Kip Fajita", description: "Maak uw eigen taco. Geserveerd met pico de gallo, kaas, zure room, guacamole en warme tortilla's.", price: 27.50 },
    { id: 97, category: "FAJITAS", name: "Lam Fajita", description: "Maak uw eigen taco. Geserveerd met pico de gallo, kaas, zure room, guacamole en warme tortilla's.", price: 27.50 },
    { id: 98, category: "FAJITAS", name: "Rund Fajita", description: "Maak uw eigen taco. Geserveerd met pico de gallo, kaas, zure room, guacamole en warme tortilla's.", price: 28.50 },
    { id: 99, category: "FAJITAS", name: "Groentjes Fajita (Vegi)", description: "Vegetarische fajita. Geserveerd met pico de gallo, kaas, zure room, guacamole en warme tortilla's.", price: 23.00 },
    { id: 100, category: "FAJITAS", name: "Scampi Fajita", description: "Scampi fajita. Geserveerd met pico de gallo, kaas, zure room, guacamole en warme tortilla's.", price: 30.50 },

    // === MEXICAANSE SPECIALITEITEN ===
    { id: 101, category: "MEXICAN SPECIALS", name: "Tacos Pollo", description: "Eén taco gevuld met kip en één gevuld met vlees", price: 27.00 },
    { id: 102, category: "MEXICAN SPECIALS", name: "Chili Con Carne", description: "Klassieke stoofschotel met gehakt, bonen, tomaten en mexicaanse kruiden", price: 27.00 },
    { id: 103, category: "MEXICAN SPECIALS", name: "Plato Vegetariano (Vegi)", description: "In de pan gebakken tarwe tortilla met groentjes en saus van de chef", price: 23.00 },

    // === QUESADILLAS ===
    { id: 104, category: "QUESADILLAS", name: "Chicken Quesadillas", description: "Knapperige tortilla's gevuld met kip, gesmolten kaas en kruiden. Geserveerd met guacamole en salsa.", price: 27.50 },
    { id: 105, category: "QUESADILLAS", name: "Rund Quesadillas", description: "Knapperige tortilla's gevuld met rund, gesmolten kaas en kruiden. Geserveerd met guacamole en salsa.", price: 28.50 },
    { id: 106, category: "QUESADILLAS", name: "Scampi Quesadillas", description: "Knapperige tortilla's gevuld met scampi, gesmolten kaas en kruiden. Geserveerd met guacamole en salsa.", price: 31.00 },
    { id: 107, category: "QUESADILLAS", name: "Varkens Quesadillas", description: "Knapperige tortilla's gevuld met varkensvlees, gesmolten kaas en kruiden. Geserveerd met guacamole en salsa.", price: 26.50 },
    { id: 108, category: "QUESADILLAS", name: "Lam Quesadillas", description: "Knapperige tortilla's gevuld met lam, gesmolten kaas en kruiden. Geserveerd met guacamole en salsa.", price: 27.50 },

    // === BIJGERECHTEN & NAN ===
    { id: 109, category: "BIJGERECHTEN", name: "Rijst", description: "Extra basmatirijst", price: 5.00 },
    { id: 110, category: "BIJGERECHTEN", name: "Raita", description: "Yoghurt met komkommer, uien en kruiden", price: 6.50 },
    { id: 111, category: "BIJGERECHTEN", name: "Gewokte Groenten", description: "Seizoensmix van gewokte groenten", price: 7.00 },
    { id: 112, category: "BIJGERECHTEN", name: "Dal Tarka", description: "Indische linzen met tomaten en ui in een look-gembersausje", price: 8.50 },
    { id: 113, category: "BIJGERECHTEN", name: "Mexicaanse Rijst", description: "Rijst met maïs, look, uien, paprika en mexicaanse kruiden", price: 8.00 },
    { id: 114, category: "BIJGERECHTEN", name: "Nan", description: "Traditioneel Indisch brood", price: 5.00 },
    { id: 115, category: "BIJGERECHTEN", name: "Boter Nan", description: "Nan met boter", price: 5.50 },
    { id: 116, category: "BIJGERECHTEN", name: "Look Nan", description: "Nan met knoflook", price: 5.50 },
    { id: 117, category: "BIJGERECHTEN", name: "Peshwari Nan", description: "Zoete nan met noten en kokos", price: 5.50 },

    // === NAGERECHTEN ===
    { id: 118, category: "NAGERECHTEN", name: "Gulab Jamun", description: "Traditionele Indische melkballetjes in rozenwatersiroop", price: 6.50 },
    { id: 119, category: "NAGERECHTEN", name: "Mango Kulfi", description: "Authentiek Indisch ijs op basis van mango", price: 8.50 },
    { id: 120, category: "NAGERECHTEN", name: "Dame Blanche", description: "Vanille-ijs met warme chocoladesaus en slagroom", price: 8.50 },
    { id: 121, category: "NAGERECHTEN", name: "Kahlua Café", description: "Vanille-ijs in Kahlua-koffiesaus met slagroom en kaneel", price: 10.00 }
];
