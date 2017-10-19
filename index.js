document.addEventListener('DOMContentLoaded', function() {
    var justifiedLayout = require('justified-layout');
    var demos = [
        {
            sizes: [0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1],
            className: "various",
            config: {}
        },
        {
            sizes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            className: "squares",
            config: {}
        },
        {
            sizes: [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1.5, 1.73, 1.1, 0.5, 1],
            className: "breakout",
            config: {
                "fullWidthBreakoutRowCadence": 3
            }
        }
    ];
    // Loop through the demos and put them in the page
    demos.forEach(function (demo) {
        var section = document.createElement("section");
        section.innerHTML = `
            <h2>Input: <code>[${demo.sizes.join(", ")}]</code></h2>
            <div class="justified"></div>
        `;
        document.body.appendChild(section);
        var geometry = justifiedLayout(demo.sizes, demo.config);
        console.log("geometry: ", geometry);
        var boxes = geometry.boxes.map(function (box) {
            return  `<div class="box" style="width: ${box.width}px; height: ${box.height}px; top: ${box.top}px; left: ${box.left}px"></div>`;
        }).join('\n')
        section.querySelector('.justified').innerHTML = boxes;
        section.querySelector('.justified').style.height = geometry.containerHeight + "px";
    });
}, false);