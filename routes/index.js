var express = require('express');
var router = express.Router();

// Basic route
router.get("/", (req, res) => {
    const data = {
        data: {
            msg: "Mitt namn är Pontus Andersson, när jag föddes var det storm och vind som härjade runtomkring Karlskrona. Vägarna var blockerade av stora träd som stoppade trafiken från att rulla som vanligt. Detta resulterade till att jag tillkom som en ren överranskning till alla släktingar som hade inte möjlighet till att ta emot ett samtal. Jag brukar höra att när jag föddes, uppstod ett så kallat 'Ronja rövadotter väder.' \n\nJag föddes i Karlskrona och växte upp vid ett litet område norr om Rödeby vid namn Bergtorp(f.d Rumpetorp). Under grundskolan gick jag på Strömsbergs skola som nu är en friskola, efter en stor strid om att behålla skolan efter att Karlskronas kommun hade beslutat att de skulle lägga ner den. Skolan stödjer dock bara upp tills årskurs 6. Mellan årskurs 6-9 gick jag vid Rödebyskolan. Vid Gymnasiet gick jag Teknik med inriktning Media- och informationsteknik på Ehrenvärdska gymnasiet. Efter det började jag studera Webbprogrammering vid Blekinges Tekniska Högskola hösten år 2018."
        }
    };

    res.json(data);
});

module.exports = router;
