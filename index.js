Shery.imageEffect("#back", {
    style: 5,
    //debug: true, 
    config:
    {
        "a": { "value": 1.49, "range": [0, 30] },
        "b": { "value": -0.82, "range": [-1, 1] },
        "aspect": { "value": 2.037634474231351 },
        "gooey": { "value": false },
        "infiniteGooey": { "value": true },
        "durationOut": { "value": 1, "range": [0.1, 5] },
        "durationIn": { "value": 1, "range": [0.1, 5] },
        "displaceAmount": { "value": 0.5 },
        "masker": { "value": true },
        "maskVal": { "value": 1.33, "range": [1, 5] },
        "scrollType": { "value": 0 },
        "geoVertex": { "range": [1, 64], "value": 1 },
        "noEffectGooey": { "value": true },
        "onMouse": { "value": 1 },
        "noise_speed": { "value": 1.59, "range": [0, 10] },
        "metaball": { "value": 0.21, "range": [0, 2] },
        "discard_threshold": { "value": 0.5, "range": [0, 1] },
        "antialias_threshold": { "value": 0, "range": [0, 0.1] },
        "noise_height": { "value": 0.5, "range": [0, 2] },
        "noise_scale": { "value": 12.15, "range": [0, 100] }
    },

    gooey: true
});

var elems = document.querySelectorAll('.elem');

elems.forEach(function (elem) {

    var h1s = elem.querySelectorAll("h1");

    var i = 0;

    var animation = false;

    document.querySelector("#main").addEventListener('click', function () {

        if (!animation) {
            animation = true;  // prevent multiple clicks
            gsap.to(h1s[i], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animation = false;
                },
            });

            i === h1s.length - 1 ? (i = 0) : i++;

            gsap.to(h1s[i], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,

            });
        }

    });
})

