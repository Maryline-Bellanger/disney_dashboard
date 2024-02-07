const users = [
    {
        name: 'Admin',
        email: 'adminDisney@gmail.com',
        password: 'DisneyAdmin45*',
    },
];

const disney_films = [
    {tmdb_id: 1001884, title: "Un Noël pas comme les autres", date: "2023-11-17"},
    {tmdb_id: 447277, title: "La petite sirène", date: "2023-05-18"},
    {tmdb_id: 420808, title: "Peter pan & wendy", date: "2023-04-20"},
    {tmdb_id: 932430, title: "un bal pour harvard", date: "2023-03-30"},
    {tmdb_id: 776098, title: "le pari de chang", date: "2023-03-10"},
    {tmdb_id: 338958, title: "il était une fois 2", date: "2022-11-18"},
    {tmdb_id: 642885, title: "hocus pocus 2", date: "2022-09-30"},
    {tmdb_id: 532639, title: "pinocchio", date: "2022-09-07"},
    {tmdb_id: 809107, title: "zombies 3", date: "2022-07-09"},
    {tmdb_id: 759054, title: "rise", date: "2022-06-23"},
    {tmdb_id: 420821, title: "tic et tac les rangers du risque", date: "2022-05-20"},
    {tmdb_id: 756187, title: "sneakerella", date: "2022-05-11"},
    {tmdb_id: 762879, title: "encore noel", date: "2021-12-03"},
    {tmdb_id: 727306, title: "safety", date: "2020-12-11"},
    {tmdb_id: 662546, title: "marraine ou presque", date: "2020-12-04"},
    {tmdb_id: 621870, title: "société secrète de la royauté", date: "2020-09-25"},
    {tmdb_id: 337401, title: "Mulan", date: "2020-09-04"},
    {tmdb_id: 671583, title: "l'école de la magie", date: "2020-07-31"},
    {tmdb_id: 599521, title: "zombies 2", date: "2020-06-13"},
    {tmdb_id: 606856, title: "Togo", date: "2019-12-20"},
    {tmdb_id: 512895, title: "La belle et le clochard", date: "2019-11-12"},
    {tmdb_id: 420809, title: "Maléfique le pouvoir du mal", date: "2019-10-16"},
    {tmdb_id: 506574, title: "descendants 3", date: "2019-08-02"},
    {tmdb_id: 420818, title: "Le roi lion", date: "2019-07-12"},
    {tmdb_id: 420817, title: "Aladdin", date: "2019-05-22"},
    {tmdb_id: 329996, title: "Dumbo", date: "2019-03-27"},
    {tmdb_id: 520720, title: "kim possible", date: "2019-02-15"},
    {tmdb_id: 400650, title: "Le retour de Mary Poppins", date: "2018-12-13"},
    {tmdb_id: 426543, title: "casse-noisette et les quatres royaumes", date: "2018-10-26"},
    {tmdb_id: 551298, title: "sous l'océan", date: "2018-09-28"},
    {tmdb_id: 505904, title: "freaky Friday", date: "2018-09-14"},
    {tmdb_id: 420814, title: "jean-christophe & winnie", date: "2018-08-02"},
    {tmdb_id: 407451, title: "un raccourci dans le temps", date: "2018-03-08"},
    {tmdb_id: 483980, title: "zombies", date: "2018-02-16"},
    {tmdb_id: 417320, title: "descendants 2", date: "2017-07-21"},
    {tmdb_id: 166426, title: "pirates des caraibes la vengeance de salazar", date: "2017-05-23"},
    {tmdb_id: 321612, title: "La belle et la bête", date: "2017-03-16"},
    {tmdb_id: 317557, title: "la dame de katwe", date: "2016-09-23"},
    {tmdb_id: 294272, title: "peter et elliott le dragon", date: "2016-08-10"},
    {tmdb_id: 241259, title: "alice de l'autre côté du miroir", date: "2016-05-25"},
    {tmdb_id: 278927, title: "le livre de la jungle", date: "2016-04-07"},
    {tmdb_id: 360605, title: "ma sœur est invisible", date: "2015-12-10"},
    {tmdb_id: 277217, title: "descendants", date: "2015-07-31"},
    {tmdb_id: 325189, title: "teen beach 2", date: "2015-06-26"},
    {tmdb_id: 150689, title: "Cendrillon", date: "2015-03-06"},
    {tmdb_id: 286987, title: "le garcon idéal", date: "2014-11-18"},
    {tmdb_id: 218778, title: "Alexander et sa journée épouvantablement terrible et affreuse", date: "2014-10-08"},
    {tmdb_id: 102651, title: "Maléfique", date: "2014-05-28"},
    {tmdb_id: 198185, title: "un lancer à un million de dollars", date: "2014-05-09"},
    {tmdb_id: 140823, title: "dans l'ombre de mary", date: "2013-11-29"},
    {tmdb_id: 149910, title: "les copains super-héros", date: "2013-08-07"},
    {tmdb_id: 177888, title: "teen beach", date: "2013-08-07"},
    {tmdb_id: 68728, title: "le monde fantastique d'oz", date: "2013-03-07"},
    {tmdb_id: 142308, title: "les chiots noel", date: "2012-11-20"},
    {tmdb_id: 105965, title: "le chihuahua de beverly hills 3", date: "2012-09-03"},
    {tmdb_id: 71864, title: "la drole de vie de timothy green", date: "2012-08-15"},
    {tmdb_id: 114955, title: "let it shine", date: "2012-06-15"},
    {tmdb_id: 78047, title: "les copains chasseurs de trésor", date: "2012-01-31"},
    {tmdb_id: 84105, title: "amiennemies", date: "2012-01-13"},
    {tmdb_id: 81250, title: "le geek charmant", date: "2011-11-11"},
    {tmdb_id: 70587, title: "les copains et la legende du chien maudit", date: "2011-09-20"},
    {tmdb_id: 50014, title: "la couleur des sentiments", date: "2011-08-09"},
    {tmdb_id: 1865, title: "pirates des caraibes la fontaine de jouvence", date: "2011-05-15"},
    {tmdb_id: 51588, title: "le grand soir", date: "2011-04-29"},
    {tmdb_id: 60405, title: "la fabulous aventure de sharpay", date: "2011-04-19"},
    {tmdb_id: 65218, title: "lemonade mouth", date: "2011-04-15"},
    {tmdb_id: 60803, title: "zack et cody", date: "2011-03-25"},
    {tmdb_id: 54540, title: "le chihuahua de beverly hills 2", date: "2011-02-01"},
    {tmdb_id: 50479, title: "avalon high", date: "2011-01-28"},
    {tmdb_id: 48844, title: "la mission de chien noel", date: "2010-10-12"},
    {tmdb_id: 44244, title: "camp rock 2", date: "2010-09-17"},
    {tmdb_id: 46064, title: "bienvenue chez les scouts", date: "2010-08-13"},
    {tmdb_id: 27022, title: "l'apprenti sorcier", date: "2010-07-13"},
    {tmdb_id: 12155, title: "Alice au pays des merveilles", date: "2010-03-03"},
    {tmdb_id: 19458, title: "princess protection program", date: "2010-02-13"},
    {tmdb_id: 22949, title: "papy-sitter", date: "2009-11-24"},
    {tmdb_id: 17979, title: "le drole de noel de scrooge", date: "2009-11-04"},
    {tmdb_id: 24833, title: "les copains fetent noel", date: "2009-10-22"},
    {tmdb_id: 19585, title: "mission g", date: "2009-07-24"},
    {tmdb_id: 52699, title: "un costume pour deux", date: "2009-04-24"},
    {tmdb_id: 18126, title: "hannah montana", date: "2009-04-10"},
    {tmdb_id: 13836, title: "la montagne ensorcelée", date: "2009-03-12"},
    {tmdb_id: 22084, title: "SOS daddy", date: "2009-02-16"},
    {tmdb_id: 14749, title: "les copains dans l'espace", date: "2009-02-02"},
    {tmdb_id: 11887, title: "High school musical 3", date: "2008-10-11"},
    {tmdb_id: 14405, title: "le chihuahua de beverly hills", date: "2008-10-03"},
    {tmdb_id: 27621, title: "les cheetah girls un monde unique", date: "2008-08-22"},
    {tmdb_id: 13655, title: "camp rock", date: "2008-06-20"},
    {tmdb_id: 13493, title: "papa, la fac et moi", date: "2008-03-07"},
    {tmdb_id: 22371, title: "minutemen les justiciers du temps", date: "2008-02-29"},
    {tmdb_id: 14059, title: "les copains des neiges", date: "2008-02-05"},
    {tmdb_id: 4523, title: "il était une fois", date: "2007-11-20"},
    {tmdb_id: 46169, title: "des amours de soeurcières 2", date: "2007-10-12"},
    {tmdb_id: 13680, title: "maxi papa", date: "2007-09-28"},
    {tmdb_id: 13649, title: "High school musical 2", date: "2007-08-17"},
    {tmdb_id: 62527, title: "johnny kapahala", date: "2007-06-08"},
    {tmdb_id: 285, title: "pirates des caraibes jusqu'au bout du monde", date: "2007-05-19"},
    {tmdb_id: 13968, title: "jump in", date: "2007-01-12"},
    {tmdb_id: 13767, title: "super noel 3", date: "2006-11-02"},
    {tmdb_id: 34204, title: "les sorcières d'halloween 4", date: "2006-10-20"},
    {tmdb_id: 37609, title: "les cheetah girls 2", date: "2006-07-31"},
    {tmdb_id: 4641, title: "le journal de jaimie", date: "2006-07-21"},
    {tmdb_id: 58, title: "pirates des caraibes le secret du coffre maudit", date: "2006-07-06"},
    {tmdb_id: 61717, title: "wendy wu", date: "2006-06-16"},
    {tmdb_id: 24801, title: "les sœurs callum", date: "2006-03-24"},
    {tmdb_id: 10947, title: "High school musical", date: "2006-01-20"},
    {tmdb_id: 9918, title: "les chemins du triomphe", date: "2006-01-13"},
    {tmdb_id: 21481, title: "des amours de soeurcières", date: "2005-10-14"},
    {tmdb_id: 15487, title: "un parcours de légende", date: "2005-09-30"},
    {tmdb_id: 11459, title: "l'école fantastique", date: "2005-07-29"},
    {tmdb_id: 11451, title: "la coccinelle revient", date: "2005-06-22"},
    {tmdb_id: 55504, title: "figure libre", date: "2005-06-10"},
    {tmdb_id: 13374, title: "princesse on ice", date: "2005-03-17"},
    {tmdb_id: 10022, title: "baby-sittor", date: "2005-03-04"},
    {tmdb_id: 26267, title: "le manoir de la magie", date: "2005-01-14"},
    {tmdb_id: 160155, title: "calvin et tyco", date: "2005-01-13"},
    {tmdb_id: 34560, title: "les sorcières d'halloween3", date: "2004-10-08"},
    {tmdb_id: 11130, title: "un mariage de princesse", date: "2004-08-06"},
    {tmdb_id: 51909, title: "un père pas comme les autres", date: "2004-08-06"},
    {tmdb_id: 122987, title: "le triomphe de jace", date: "2004-03-24"},
    {tmdb_id: 11132, title: "journal intime d'une future star", date: "2004-02-17"},
    {tmdb_id: 14292, title: "miracle", date: "2004-02-06"},
    {tmdb_id: 10756, title: "le manoir hanté et les 999 fantomes", date: "2003-11-26"},
    {tmdb_id: 158265, title: "a nous de jouer", date: "2003-11-21"},
    {tmdb_id: 26264, title: "George de la jungle 2", date: "2003-08-18"},
    {tmdb_id: 32293, title: "les cheetah girls", date: "2003-08-15"},
    {tmdb_id: 10330, title: "freaky Friday dans la peau de ma mère", date: "2003-08-05"},
    {tmdb_id: 22, title: "pirates des caraibes la malédiction du black pearl", date: "2003-07-09"},
    {tmdb_id: 50794, title: "droles de vacances", date: "2003-06-13"},
    {tmdb_id: 18736, title: "lizzie mcGuire", date: "2003-05-02"},
    {tmdb_id: 8326, title: "la morsure du lézard", date: "2003-04-18"},
    {tmdb_id: 77606, title: "la voie tracée", date: "2003-03-21"},
    {tmdb_id: 111485, title: "face ou pile", date: "2003-01-10"},
    {tmdb_id: 9021, title: "hyper noel", date: "2002-10-31"},
    {tmdb_id: 124108, title: "cadence", date: "2002-07-26"},
    {tmdb_id: 126934, title: "des vacances inoubliables", date: "2002-07-04"},
    {tmdb_id: 26189, title: "opération walker", date: "2002-06-28"},
    {tmdb_id: 71886, title: "bienvenue chez trudy", date: "2002-04-05"},
    {tmdb_id: 14635, title: "reve de champion", date: "2002-03-25"},
    {tmdb_id: 108204, title: "double équipe", date: "2002-01-18"},
    {tmdb_id: 11888, title: "chiens des neiges", date: "2002-01-18"},
    {tmdb_id: 46004, title: "le lutin", date: "2001-12-02"},
    {tmdb_id: 34205, title: "les sorcières d'halloween 2", date: "2001-10-12"},
    {tmdb_id: 34549, title: "le grand coup de max keeble", date: "2001-10-05"},
    {tmdb_id: 68027, title: "escale imprévue", date: "2001-08-17"},
    {tmdb_id: 9880, title: "princesse malgré elle", date: "2001-08-03"},
    {tmdb_id: 109167, title: "un chien envahissant", date: "2001-04-13"},
    {tmdb_id: 29742, title: "zenon et les aliens", date: "2001-01-12"},
    {tmdb_id: 71887, title: "le plus beau cadeau de noel", date: "2000-12-01"},
    {tmdb_id: 92208, title: "chasseurs de vampire", date: "2000-10-13"},
    {tmdb_id: 10481, title: "102 dalmatiens", date: "2000-10-07"},
    {tmdb_id: 10637, title: "le plus beau des combats", date: "2000-09-29"},
    {tmdb_id: 101514, title: "les quintuplés", date: "2000-08-18"},
    {tmdb_id: 4244, title: "sale mome", date: "2000-07-07"},
    {tmdb_id: 70773, title: "ma sœur est une extraterrestre", date: "2000-06-17"},
    {tmdb_id: 64269, title: "les filles de l'océan", date: "2000-04-22"},
    {tmdb_id: 72753, title: "Un match au sommet", date: "2000-03-18"},
    {tmdb_id: 92620, title: "la couleur de l'amitié", date: "2000-02-05"},
    {tmdb_id: 6980, title: "le ranch du bonheur", date: "1999-11-20"},
    {tmdb_id: 24020, title: "johnny tsunami", date: "1999-07-24"},
    {tmdb_id: 83965, title: "le garcon qui venait de la mer", date: "1999-05-15"},
    {tmdb_id: 34766, title: "zenon la fille du 21e siècle", date: "1999-01-23"},
    {tmdb_id: 9822, title: "mon ami joe", date: "1998-12-25"},
    {tmdb_id: 17037, title: "sacré père noël", date: "1998-11-13"},
    {tmdb_id: 27850, title: "les sorcières d'halloween", date: "1998-11-10"},
    {tmdb_id: 15043, title: "Brink champion de roller", date: "1998-08-28"},
    {tmdb_id: 9820, title: "à nous quatre", date: "1998-07-28"},
    {tmdb_id: 177212, title: "miracle à minuit", date: "1998-03-17"},
    {tmdb_id: 96715, title: "le combat de ruby bridges", date: "1998-01-18"},
    {tmdb_id: 10603, title: "George de la jungle", date: "1997-07-15"},
    {tmdb_id: 11425, title: "chérie nous avons été rétrécis", date: "1997-03-18"},
    {tmdb_id: 11674, title: "101 dalmatiens", date: "1996-11-27"},
    {tmdb_id: 10680, title: "D3 les petits champions 3", date: "1996-10-04"},
    {tmdb_id: 25059, title: "L'incroyable voyage 2", date: "1996-03-08"},
    {tmdb_id: 45325, title: "tom et huck", date: "1995-12-22"},
    {tmdb_id: 26441, title: "une équipe de nases", date: "1995-09-29"},
    {tmdb_id: 14819, title: "la colo des gourmands", date: "1995-02-17"},
    {tmdb_id: 11395, title: "super noel", date: "1994-11-11"},
    {tmdb_id: 11164, title: "les petits champions 2", date: "1994-03-25"},
    {tmdb_id: 13962, title: "l'apprenti millionnaire", date: "1994-02-11"},
    {tmdb_id: 24767, title: "l'enfer blanc", date: "1994-01-14"},
    {tmdb_id: 864, title: "rasta rockett", date: "1993-10-01"},
    {tmdb_id: 10439, title: "hocus pocus", date: "1993-07-16"},
    {tmdb_id: 34723, title: "Les aventures de huckleberry finn", date: "1993-04-02"},
    {tmdb_id: 6878, title: "L'incroyable voyage", date: "1993-02-03"},
    {tmdb_id: 10414, title: "les petits champions", date: "1992-10-02"},
    {tmdb_id: 11158, title: "chérie j'ai agrandi le bébé", date: "1992-07-16"},
    {tmdb_id: 12227, title: "croc blanc", date: "1991-01-18"},
    {tmdb_id: 10837, title: "la bande à picsou", date: "1990-08-03"},
    {tmdb_id: 9354, title: "cherie j'ai rétréci les gosses", date: "1989-06-23"},
    {tmdb_id: 13705, title: "la hotte magique", date: "1986-12-14"},
    {tmdb_id: 13155, title: "oz un monde extraordinaire", date: "1985-06-21"},
    {tmdb_id: 12129, title: "la coccinelle à mexico", date: "1980-06-25"},
    {tmdb_id: 14140, title: "la coccinelle à monté carlo", date: "1977-06-24"},
    {tmdb_id: 56067, title: "les aventures de pot-au-feu", date: "1972-03-22"},
    {tmdb_id: 12335, title: "l'apprentie sorcière", date: "1971-10-07"},
    {tmdb_id: 14136, title: "un amour de coccinelle", date: "1968-12-23"},
    {tmdb_id: 16249, title: "le fantôme de barbe noire", date: "1968-02-08"},
    {tmdb_id: 433, title: "Mary Poppins", date: "1964-12-17"},
    {tmdb_id: 37969, title: "l'incroyable randonnée", date: "1963-11-20"},
    {tmdb_id: 17984, title: "Monte là-d'ssus", date: "1961-03-16"},
    {tmdb_id: 50717, title: "davy crockett et les pirates de la rivière", date: "1956-07-18"},
    {tmdb_id: 35115, title: "davy crockett le roi des trappeurs", date: "1955-05-25"},
];

const disney_animations = [
    {tmdb_id: 1022796, title: "wish", date: "2023-11-22"},
    {tmdb_id: 1139087, title: "Il était une fois un studio", date: "2023-09-24"},
    {tmdb_id: 976573, title: "élémentaire", date: "2023-06-14"},
    {tmdb_id: 877269, title: "avalonia l'étrange voyage", date: "2022-11-23"},
    {tmdb_id: 718789, title: "Buzz l'éclair", date: "2022-06-15"},
    {tmdb_id: 508947, title: "alerte rouge", date: "2022-03-10"},
    {tmdb_id: 568124, title: "Encanto", date: "2021-10-13"},
    {tmdb_id: 508943, title: "luca", date: "2021-06-17"},
    {tmdb_id: 527774, title: "raya", date: "2021-03-03"},
    {tmdb_id: 508442, title: "soul", date: "2020-12-25"},
    {tmdb_id: 508439, title: "en avant", date: "2020-02-29"},
    {tmdb_id: 330457, title: "La reine des neiges 2", date: "2019-11-20"},
    {tmdb_id: 301528, title: "toy story 4", date: "2019-06-19"},
    {tmdb_id: 404368, title: "ralph 2", date: "2018-11-20"},
    {tmdb_id: 260513, title: "Les indestructibles 2", date: "2018-06-14"},
    {tmdb_id: 354912, title: "Coco", date: "2017-10-27"},
    {tmdb_id: 260514, title: "Cars 3", date: "2017-06-15"},
    {tmdb_id: 277834, title: "Vaiana", date: "2016-10-13"},
    {tmdb_id: 127380, title: "Le monde de Dory", date: "2016-06-16"},
    {tmdb_id: 269149, title: "zootopie", date: "2016-02-11"},
    {tmdb_id: 105864, title: "Le voyage d'arlo", date: "2015-11-14"},
    {tmdb_id: 150540, title: "vice-versa", date: "2015-06-09"},
    {tmdb_id: 218836, title: "Planes 2", date: "2014-07-17"},
    {tmdb_id: 109445, title: "La reine des neiges", date: "2013-11-20"},
    {tmdb_id: 151960, title: "planes", date: "2013-08-09"},
    {tmdb_id: 62211, title: "Monstres academy", date: "2013-06-19"},
    {tmdb_id: 82690, title: "ralph", date: "2012-11-01"},
    {tmdb_id: 62177, title: "Rebelle", date: "2012-06-21"},
    {tmdb_id: 49013, title: "Cars 2", date: "2011-06-11"},
    {tmdb_id: 51162, title: "winnie l'ourson", date: "2011-04-06"},
    {tmdb_id: 38757, title: "raiponce", date: "2010-11-24"},
    {tmdb_id: 10193, title: "toy story 3", date: "2010-06-16"},
    {tmdb_id: 10198, title: "La princesse et la grenouille", date: "2009-12-08"},
    {tmdb_id: 14160, title: "là-haut", date: "2009-05-28"},
    {tmdb_id: 13053, title: "Volt star malgré lui", date: "2008-11-21"},
    {tmdb_id: 13179, title: "la fée clochette", date: "2008-09-11"},
    {tmdb_id: 13676, title: "Le Secret de la Petite Sirène", date: "2008-08-25"},
    {tmdb_id: 10681, title: "wall.e", date: "2008-06-22"},
    {tmdb_id: 2062, title: "ratatouille", date: "2007-06-28"},
    {tmdb_id: 16119, title: "Le Sortilège de Cendrillon", date: "2007-02-06"},
    {tmdb_id: 9948, title: "Rox et Rouky 2", date: "2006-11-09"},
    {tmdb_id: 10010, title: "Frère des ours 2", date: "2006-08-17"},
    {tmdb_id: 21316, title: "leroy & stitch", date: "2006-06-23"},
    {tmdb_id: 920, title: "Cars", date: "2006-06-08"},
    {tmdb_id: 9904, title: "the wild", date: "2006-04-06"},
    {tmdb_id: 13205, title: "Bambi et le prince de la forêt", date: "2006-01-26"},
    {tmdb_id: 13417, title: "Kuzco 2", date: "2005-12-05"},
    {tmdb_id: 9982, title: "Chicken Little", date: "2005-11-04"},
    {tmdb_id: 15657, title: "tarzan 2", date: "2005-06-13"},
    {tmdb_id: 20760, title: "Lilo et Stitch 2", date: "2005-01-22"},
    {tmdb_id: 12242, title: "Mulan 2", date: "2004-11-03"},
    {tmdb_id: 9806, title: "Les indestructibles", date: "2004-10-27"},
    {tmdb_id: 13700, title: "la ferme se rebelle", date: "2004-04-02"},
    {tmdb_id: 16394, title: "Les Aventures de Petit Gourou", date: "2004-03-09"},
    {tmdb_id: 11430, title: "Le roi lion 3", date: "2004-02-06"},
    {tmdb_id: 10009, title: "Frère des ours", date: "2003-10-23"},
    {tmdb_id: 12, title: "Le monde de Nemo", date: "2003-05-30"},
    {tmdb_id: 8965, title: "Les énigmes de l'atlantide", date: "2003-02-25"},
    {tmdb_id: 14873, title: "Le livre de la jungle 2", date: "2003-02-07"},
    {tmdb_id: 9016, title: "la planète au trésor", date: "2002-11-26"},
    {tmdb_id: 13654, title: "101 dalmatiens 2", date: "2002-11-06"},
    {tmdb_id: 13683, title: "tarzan et jane", date: "2002-06-24"},
    {tmdb_id: 11544, title: "Lilo et Stitch", date: "2002-06-21"},
    {tmdb_id: 14128, title: "Cendrillon 2", date: "2002-02-23"},
    {tmdb_id: 16690, title: "Peter pan 2", date: "2002-02-14"},
    {tmdb_id: 12448, title: "Le bossu de notre dame 2", date: "2002-02-05"},
    {tmdb_id: 585, title: "Monstres & co", date: "2001-11-01"},
    {tmdb_id: 10865, title: "Atlantide l'empire perdu", date: "2001-06-02"},
    {tmdb_id: 18269, title: "La belle et le clochard 2", date: "2001-02-18"},
    {tmdb_id: 11688, title: "Kuzco l'empereur mégalo", date: "2000-12-15"},
    {tmdb_id: 10567, title: "dinosaure", date: "2000-05-19"},
    {tmdb_id: 15653, title: "dingo et max 2", date: "2000-02-29"},
    {tmdb_id: 10898, title: "La petite sirène 2", date: "2000-01-23"},
    {tmdb_id: 49948, title: "Fantasia 2000", date: "1999-12-31"},
    {tmdb_id: 863, title: "toy story 2", date: "1999-10-30"},
    {tmdb_id: 37135, title: "tarzan", date: "1999-06-18"},
    {tmdb_id: 9487, title: "1001 pattes", date: "1998-11-25"},
    {tmdb_id: 9732, title: "Le roi lion 2", date: "1998-10-24"},
    {tmdb_id: 13761, title: "Pocahontas 2", date: "1998-08-04"},
    {tmdb_id: 10674, title: "Mulan", date: "1998-06-18"},
    {tmdb_id: 13313, title: "La belle et la bête 2", date: "1997-11-11"},
    {tmdb_id: 14903, title: "winnie l'ourson 2", date: "1997-08-05"},
    {tmdb_id: 10545, title: "Le bossu de notre dame", date: "1996-06-21"},
    {tmdb_id: 11238, title: "Aladdin et le roi des voleurs", date: "1996-05-20"},
    {tmdb_id: 862, title: "toy story", date: "1995-10-30"},
    {tmdb_id: 10530, title: "Pocahontas", date: "1995-06-14"},
    {tmdb_id: 15789, title: "dingo et max", date: "1995-04-07"},
    {tmdb_id: 8587, title: "Le roi lion", date: "1994-06-24"},
    {tmdb_id: 15969, title: "Le retour de jafar", date: "1994-05-20"},
    {tmdb_id: 9479, title: "l'étrange noël de monsieur Jack", date: "1993-10-09"},
    {tmdb_id: 812, title: "Aladdin", date: "1992-11-25"},
    {tmdb_id: 10020, title: "La belle et la bête", date: "1991-10-22"},
    {tmdb_id: 10144, title: "La petite sirène", date: "1989-11-17"},
    {tmdb_id: 12233, title: "oliver et compagnie", date: "1988-11-18"},
    {tmdb_id: 9994, title: "Basil, détective privé", date: "1986-07-02"},
    {tmdb_id: 10957, title: "taram et le chaudron magique", date: "1985-07-24"},
    {tmdb_id: 10948, title: "Rox et Rouky", date: "1981-07-10"},
    {tmdb_id: 11114, title: "peter et elliott le dragon", date: "1977-11-03"},
    {tmdb_id: 11319, title: "Les avantures de bernard et bianca", date: "1977-06-22"},
    {tmdb_id: 10112, title: "Les aristochats", date: "1970-12-24"},
    {tmdb_id: 9325, title: "Le livre de la jungle", date: "1967-10-18"},
    {tmdb_id: 9078, title: "merlin l'enchanteur", date: "1963-12-25"},
    {tmdb_id: 12230, title: "101 dalmatiens", date: "1961-01-25"},
    {tmdb_id: 10882, title: "La Belle au bois dormant", date: "1959-02-17"},
    {tmdb_id: 10340, title: "La belle et le clochard", date: "1955-06-22"},
    {tmdb_id: 10693, title: "Peter pan", date: "1953-02-05"},
    {tmdb_id: 12092, title: "Alice au pays des merveilles", date: "1951-07-28"},
    {tmdb_id: 11224, title: "Cendrillon", date: "1950-02-22"},
    {tmdb_id: 13465, title: "le crapaud et le maitre d'école", date: "1949-10-05"},
    {tmdb_id: 13757, title: "mélodie cocktail", date: "1948-05-27"},
    {tmdb_id: 3170, title: "Bambi", date: "1942-08-14"},
    {tmdb_id: 11360, title: "Dumbo", date: "1941-10-31"},
    {tmdb_id: 756, title: "Fantasia", date: "1940-11-13"},
    {tmdb_id: 10895, title: "pinocchio", date: "1940-02-23"},
    {tmdb_id: 408, title: "Blanche neige et les sept nains", date: "1937-12-21"},
];

const disney_series = [
    {tmdb_id: 75523, title: "101 rue des dalmatiens", date: "2019-03-18"},
    {tmdb_id: 65852, title: "alex & co", date: "2015-05-11"},
    {tmdb_id: 115304, title: "allegra", date: "2021-11-12"},
    {tmdb_id: 35279, title: "austin & ally", date: "2011-12-02"},
    {tmdb_id: 114466, title: "baymax", date: "2022-06-29"},
    {tmdb_id: 68665, title: "baymax et les nouveaux héros", date: "2017-11-20"},
    {tmdb_id: 62783, title: "best friends whenever", date: "2015-06-26"},
    {tmdb_id: 90823, title: "bia", date: "2019-06-24"},
    {tmdb_id: 114501, title: "Bienvenue chez doug", date: "2021-09-01"},
    {tmdb_id: 96716, title: "big shot", date: "2021-04-16"},
    {tmdb_id: 21641, title: "bonne chance charlie", date: "2010-04-04"},
    {tmdb_id: 114502, title: "cars sur la route", date: "2022-09-08"},
    {tmdb_id: 1863, title: "couacs en vrac", date: "1996-09-02"},
    {tmdb_id: 103465, title: "dans un autre monde les coulisses de la reine des neiges", date: "2020-06-26"},
    {tmdb_id: 65016, title: "descendants génération méchants", date: "2015-09-18"},
    {tmdb_id: 46262, title: "docteur la peluche", date: "2012-03-23"},
    {tmdb_id: 130372, title: "docteure doogie", date: "2021-09-08"},
    {tmdb_id: 384, title: "doug", date: "1991-08-18"},
    {tmdb_id: 67175, title: "elena d'avalor", date: "2016-07-22"},
    {tmdb_id: 114105, title: "en apparence rien ne change", date: "2022-05-25"},
    {tmdb_id: 80056, title: "fancy nancy", date: "2018-07-13"},
    {tmdb_id: 112652, title: "fancy nancy clancy", date: "2019-04-08"},
    {tmdb_id: 66456, title: "frankie & paige", date: "2016-06-24"},
    {tmdb_id: 121183, title: "frères", date: "2023-04-05"},
    {tmdb_id: 87282, title: "gabby duran baby-sitter d'extraterrestres", date: "2019-10-11"},
    {tmdb_id: 4610, title: "hannah montana", date: "2006-03-24"},
    {tmdb_id: 57748, title: "henry calimonstre", date: "2013-10-01"},
    {tmdb_id: 2567, title: "hercule", date: "1998-08-31"},
    {tmdb_id: 85801, title: "high school musical la comédie musicale", date: "2019-11-12"},
    {tmdb_id: 105157, title: "high school musical la comédie musicale tous en chœur", date: "2019-11-30"},
    {tmdb_id: 34891, title: "jake pirates du pays imaginaire", date: "2011-02-14"},
    {tmdb_id: 38974, title: "jessie", date: "2011-09-30"},
    {tmdb_id: 12712, title: "jonas", date: "2009-05-02"},
    {tmdb_id: 2345, title: "kim possible", date: "2002-06-07"},
    {tmdb_id: 206017, title: "l-pop", date: "2023-09-27"},
    {tmdb_id: 2235, title: "la bande à dingo", date: "1992-09-05"},
    {tmdb_id: 72350, title: "la bande à picsou", date: "2017-08-12"},
    {tmdb_id: 720, title: "la bande à picsou", date: "1987-09-18"},
    {tmdb_id: 41997, title: "la boutique de minnie", date: "2011-11-14"},
    {tmdb_id: 1546, title: "la cour de récré", date: "1997-09-13"},
    {tmdb_id: 64752, title: "la garde du roi lion", date: "2016-01-15"},
    {tmdb_id: 80402, title: "la légende des trois caballeros", date: "2018-06-09"},
    {tmdb_id: 67549, title: "la loi de milo murphy", date: "2016-10-03"},
    {tmdb_id: 3934, title: "la maison de mickey", date: "2006-05-05"},
    {tmdb_id: 127633, title: "la maison magique de mickey", date: "2021-08-20"},
    {tmdb_id: 2675, title: "la petite sirène", date: "1992-09-11"},
    {tmdb_id: 15079, title: "la vie de croisière de zack et cody", date: "2008-09-26"},
    {tmdb_id: 4605, title: "la vie de palace de zack et cody", date: "2005-03-18"},
    {tmdb_id: 72089, title: "le monde de bingo et rolly", date: "2017-04-14"},
    {tmdb_id: 46028, title: "le monde de riley", date: "2014-06-27"},
    {tmdb_id: 92824, title: "le nouveau muppet show", date: "2020-07-31"},
    {tmdb_id: 96715, title: "les aventures au parc de tic et tac", date: "2021-07-28"},
    {tmdb_id: 139612, title: "les aventures de mickey et ses amis", date: "2019-10-14"},
    {tmdb_id: 38867, title: "les bio-teens", date: "2012-02-27"},
    {tmdb_id: 65766, title: "les bio-teens forces spéciales", date: "2016-03-02"},
    {tmdb_id: 1334, title: "les canards de l'exploit", date: "1996-09-07"},
    {tmdb_id: 132577, title: "les chefs toqués", date: "2015-10-26"},
    {tmdb_id: 111815, title: "les coulisses de pixar", date: "2020-11-13"},
    {tmdb_id: 95738, title: "les coulisses des attractions", date: "2021-07-21"},
    {tmdb_id: 1931, title: "les gummi", date: "1985-09-14"},
    {tmdb_id: 202212, title: "les matildas la force d'une équipe", date: "2023-04-26"},
    {tmdb_id: 77410, title: "les muppet babies", date: "2018-03-23"},
    {tmdb_id: 194573, title: "les muppets rock", date: "2023-05-10"},
    {tmdb_id: 2005, title: "les nouvelles aventures de winnie l'ourson", date: "1988-09-10"},
    {tmdb_id: 3498, title: "Les sorciers de waverly place", date: "2007-10-12"},
    {tmdb_id: 2355, title: "lilo et stitch", date: "2003-09-20"},
    {tmdb_id: 59375, title: "liv maddie", date: "2013-07-19"},
    {tmdb_id: 4575, title: "lizzie mcguire", date: "2001-01-12"},
    {tmdb_id: 70823, title: "mickey et ses amis top départ", date: "2017-01-15"},
    {tmdb_id: 137430, title: "mila dans la multiverse", date: "2023-01-25"},
    {tmdb_id: 62181, title: "miles dans l'espace", date: "2015-02-06"},
    {tmdb_id: 100975, title: "mira détective royale", date: "2020-03-20"},
    {tmdb_id: 90461, title: "monstres & cie au travail", date: "2021-07-07"},
    {tmdb_id: 3319, title: "myster mask", date: "1991-09-08"},
    {tmdb_id: 134297, title: "olaf présente", date: "2021-11-12"},
    {tmdb_id: 114138, title: "papas à la demande", date: "2022-07-13"},
    {tmdb_id: 86833, title: "penny sur mars", date: "2018-05-07"},
    {tmdb_id: 103540, title: "Percy Jackson et les olympiens", date: "2023-12-20"},
    {tmdb_id: 4602, title: "phénomène raven", date: "2003-01-17"},
    {tmdb_id: 1877, title: "phineas et ferb", date: "2007-08-17"},
    {tmdb_id: 46928, title: "princesse sofia", date: "2013-01-11"},
    {tmdb_id: 70047, title: "raiponce", date: "2017-03-24"},
    {tmdb_id: 72027, title: "raven", date: "2003-01-17"},
    {tmdb_id: 34573, title: "section genius", date: "2011-05-06"},
    {tmdb_id: 33213, title: "shake it up", date: "2010-11-07"},
    {tmdb_id: 84915, title: "sidney au max", date: "2019-01-25"},
    {tmdb_id: 33873, title: "sonny", date: "2009-02-08"},
    {tmdb_id: 2720, title: "super baloo", date: "1990-09-09"},
    {tmdb_id: 155631, title: "Super Noël, la série", date: "2022-11-16"},
    {tmdb_id: 68324, title: "the lodge", date: "2016-09-23"},
    {tmdb_id: 1615, title: "tic et tac les rangers du risque", date: "1989-03-04"},
    {tmdb_id: 4429, title: "timon & pumbaa", date: "1995-09-08"},
    {tmdb_id: 91433, title: "tots", date: "2019-06-14"},
    {tmdb_id: 74323, title: "vampirina", date: "2017-10-01"},
    {tmdb_id: 61720, title: "violetta", date: "2012-05-14"},
    {tmdb_id: 203884, title: "ZOMBIES: Addison’s Monster Mystery", date: "2021-10-01"},
    {tmdb_id: 114463, title: "zootopie+", date: "2022-11-09"},
    {tmdb_id: 157210, title: "Mon adolescence", date: "2022-09-08"},
    {tmdb_id: 32716, title: "tatami academy", date: "2011-06-13"},
    {tmdb_id: 61915, title: "agent k.c.", date: "2015-01-18"},
];

const marvel_films = [
    {tmdb_id: 609681, title: "The Marvels", date: "2023-11-08"},
    {tmdb_id: 447365, title: "les gardiens de la galaxie 3", date: "2023-05-03"},
    {tmdb_id: 774752, title: "Les gardiens de la galaxie joyeuses fêtes", date: "2022-11-25"},
    {tmdb_id: 616037, title: "Thor : Love and Thunder", date: "2022-07-06"},
    {tmdb_id: 453395, title: "Doctor Strange in the Multiverse of Madness", date: "2022-05-04"},
    {tmdb_id: 429617, title: "spider-man far from home", date: "2019-06-28"},
    {tmdb_id: 320288, title: "x-men dark phoenix", date: "2019-06-05"},
    {tmdb_id: 299534, title: "avengers endgame", date: "2019-04-24"},
    {tmdb_id: 299537, title: "captain marvel", date: "2019-03-06"},
    {tmdb_id: 363088, title: "ant-man et la guêpe", date: "2018-07-04"},
    {tmdb_id: 383498, title: "deadpool 2", date: "2018-05-10"},
    {tmdb_id: 299536, title: "avengers infinity war", date: "2018-04-25"},
    {tmdb_id: 284054, title: "black panther", date: "2018-02-13"},
    {tmdb_id: 284053, title: "thor ragnarok", date: "2017-10-02"},
    {tmdb_id: 283995, title: "les gardiens de la galaxie 2", date: "2017-04-19"},
    {tmdb_id: 422153, title: "hulk le royaume des cauchemars", date: "2016-10-21"},
    {tmdb_id: 246655, title: "x-men apocalypse", date: "2016-05-18"},
    {tmdb_id: 271110, title: "civil war captain america", date: "2016-04-27"},
    {tmdb_id: 293660, title: "deadpool", date: "2016-02-09"},
    {tmdb_id: 166424, title: "les 4 fantastiques", date: "2015-08-05"},
    {tmdb_id: 102899, title: "ant-man", date: "2015-07-14"},
    {tmdb_id: 99861, title: "avengers l'ère d'ultron", date: "2015-04-22"},
    {tmdb_id: 118340, title: "les gardiens de la galaxie", date: "2014-07-30"},
    {tmdb_id: 284274, title: "iron man captain america heroes united", date: "2014-07-29"},
    {tmdb_id: 127585, title: "x-men days future past", date: "2014-05-15"},
    {tmdb_id: 100402, title: "captain america le soldat de l'hiver", date: "2014-03-20"},
    {tmdb_id: 230896, title: "iron man hulk l'union des super héros", date: "2013-12-03"},
    {tmdb_id: 76338, title: "thor le monde des ténèbres", date: "2013-10-30"},
    {tmdb_id: 68721, title: "iron man 3", date: "2013-04-18"},
    {tmdb_id: 24428, title: "avengers", date: "2012-04-25"},
    {tmdb_id: 1771, title: "captain america first avenger", date: "2011-07-22"},
    {tmdb_id: 49538, title: "x-men le commencement", date: "2011-06-01"},
    {tmdb_id: 10195, title: "thor", date: "2011-04-21"},
    {tmdb_id: 10138, title: "iron man 2", date: "2010-04-28"},
    {tmdb_id: 2080, title: "x-men origins wolverine", date: "2009-04-28"},
    {tmdb_id: 1979, title: "les 4 fantastiques et le surfer d'argent", date: "2007-06-13"},
    {tmdb_id: 36668, title: "x-men l'affrontement final", date: "2006-05-24"},
    {tmdb_id: 9738, title: "les 4 fantastiques", date: "2005-06-29"},
    {tmdb_id: 36658, title: "x-men 2", date: "2003-04-27"},
    {tmdb_id: 36657, title: "x-men", date: "2000-07-13"},
];

const marvel_series = [
    {tmdb_id: 114472, title: "secret invasion", date: "2023-06-21"},
    {tmdb_id: 92783, title: "she hulk", date: "2022-08-18"},
    {tmdb_id: 232125, title: "je s'appelle groot", date: "2022-08-10"},
    {tmdb_id: 92782, title: "miss marvel", date: "2022-06-08"},
    {tmdb_id: 92749, title: "moon knight", date: "2022-03-30"},
    {tmdb_id: 88329, title: "hawkeye", date: "2021-11-24"},
    {tmdb_id: 91363, title: "what if", date: "2021-08-11"},
    {tmdb_id: 127635, title: "spidey amis extraordinaire", date: "2021-08-06"},
    {tmdb_id: 84958, title: "Loki", date: "2021-06-09"},
    {tmdb_id: 88396, title: "falcon et le soldat de l'hiver", date: "2021-03-19"},
    {tmdb_id: 85271, title: "wanda vision", date: "2021-01-15"},
    {tmdb_id: 114695, title: "Les Légendes des Studios Marvel", date: "2021-01-08"},
    {tmdb_id: 72705, title: "marvel spider-man", date: "2017-08-19"},
    {tmdb_id: 63181, title: "les gardiens de la galaxie", date: "2015-09-05"},
    {tmdb_id: 61550, title: "agent carter", date: "2015-01-06"},
    {tmdb_id: 1403, title: "les agents du s.h.i.e.l.d.", date: "2013-09-24"},
    {tmdb_id: 40044, title: "hulk et les agents du smash", date: "2013-08-11"},
    {tmdb_id: 59427, title: "avengers rassemblement", date: "2013-05-26"},
    {tmdb_id: 34391, title: "ultimate spider-man", date: "2012-04-01"},
    {tmdb_id: 33623, title: "l'équipe des super héros ! Avengers", date: "2010-10-20"},
    {tmdb_id: 1664, title: "spider-man", date: "2003-07-11"},
    {tmdb_id: 1130, title: "le surfer d'argent", date: "1998-02-07"},
    {tmdb_id: 6332, title: "l'incroyable hulk", date: "1996-09-08"},
    {tmdb_id: 2901, title: "les quatre fantastiques", date: "1994-09-24"},
    {tmdb_id: 4574, title: "x-men", date: "1992-10-31"},
    {tmdb_id: 122226, title: "Echo", date: "2024-01-09"},
];

const starwars_films = [
    {tmdb_id: 181812, title: "l'ascension de skywalker", date: "2019-12-18"},
    {tmdb_id: 348350, title: "solo", date: "2018-05-15"},
    {tmdb_id: 181808, title: "les derniers jedi", date: "2017-12-13"},
    {tmdb_id: 330459, title: "rogue one", date: "2016-12-14"},
    {tmdb_id: 140607, title: "le réveil de la force", date: "2015-12-15"},
    {tmdb_id: 1895, title: "la revanche des sith", date: "2005-05-17"},
    {tmdb_id: 1894, title: "l'attaque des clones", date: "2002-05-15"},
    {tmdb_id: 1893, title: "La menace fantôme", date: "1999-05-19"},
    {tmdb_id: 1892, title: "le retour du jedi", date: "1983-05-25"},
    {tmdb_id: 1891, title: "l'empire contre attaque", date: "1980-05-20"},
    {tmdb_id: 11, title: "un nouvel espoir", date: "1977-05-25"},
];

const starwars_series = [
    {tmdb_id: 114461, title: "ahsoka", date: "2023-08-22"},
    {tmdb_id: 202998, title: "Starwars les aventures des petits jedi", date: "2023-05-04"},
    {tmdb_id: 203085, title: "starwars tales of the jedi", date: "2022-10-26"},
    {tmdb_id: 83867, title: "andor", date: "2022-09-21"},
    {tmdb_id: 92830, title: "obi-wan kenobi", date: "2022-05-26"},
    {tmdb_id: 115036, title: "le livre de boba fett", date: "2021-12-29"},
    {tmdb_id: 105971, title: "starwars the bad batch", date: "2021-05-04"},
    {tmdb_id: 82856, title: "the mandalorian", date: "2019-11-12"},
    {tmdb_id: 79093, title: "Starwars resistance", date: "2018-10-07"},
    {tmdb_id: 63722, title: "Starwars les contes droïdes", date: "2015-10-05"},
    {tmdb_id: 60554, title: "Starwars rebels", date: "2014-10-13"},
    {tmdb_id: 4194, title: "starwars the clone wars", date: "2008-10-03"},
];

module.exports = {
    users,
    disney_films,
    disney_animations,
    disney_series,
    marvel_films,
    marvel_series,
    starwars_films,
    starwars_series,
};