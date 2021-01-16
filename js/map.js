var mymapid = L.map('mapid').setView([49.9523, -18.6005], 7);
L.tileLayer('https://pathfinderwiki.com/maps/golarion-tile/tiles/{z}/{x}/{y}', {
    tms: true,
    updateWhenIdle: false,
    updateInterval: 50,
    keepBuffer: 4,
    attribution: 'Map data &copy; <a href="https://www.dungeonetics.com/golarion-geography/index.html">John Mechalas</a>, <a href="http://paizo.com/paizo/about/communityuse">Paizo CUP</a>',
    maxZoom: 9,
}).addTo(mymapid);

L.tileLayer('https://pathfinderwiki.com/maps/golarion-tile/tiles-relief/{z}/{x}/{y}', {
    tms: true,
    updateWhenIdle: false,
    updateInterval: 50,
    keepBuffer: 4,
    opacity: 0.15,
    maxNativeZoom: 6,
    maxZoom: 9,
}).addTo(mymapid);

// Build scalebar.
L.control
    .scale({
    position: "topright",
    maxWidth: 100
    })
    .addTo(mymapid);