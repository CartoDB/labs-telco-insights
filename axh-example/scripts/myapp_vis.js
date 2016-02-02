
window.myapp = window.myapp || {};

window.myapp.viz =
{"id":"0fad7978-c996-11e5-b837-0e674067d321","version":"0.1.0","title":"census_uber_clustering","likes":0,"description":"<p>owner<em>occupied</em>housing<em>units</em>per_pop was literally housing units divided by pop. we should replace it with real owners/total houses. </p>\n","scrollwheel":false,"legends":false,"url":null,"map_provider":"leaflet","bounds":[[40.69469600456698,-74.04939651489256],[40.75479943576426,-73.88254165649414]],"center":"[40.724754504892424, -73.96596908569336]","zoom":13,"updated_at":"2016-02-02T11:11:37+00:00","layers":[{"options":{"visible":true,"type":"Tiled","name":"Dark matter (lite)","className":"dark_matter_lite_rainbow","base_type":"default","urlTemplate":"https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png","minZoom":"0","maxZoom":"18","attribution":"&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"http://cartodb.com/attributions\">CartoDB</a>","subdomains":"abcd","style":null,"read_only":true,"category":"CartoDB","order":0,"id":"f4845dfc-01e7-48eb-ba5e-09e468ce395f"},"infowindow":null,"tooltip":null,"id":"f4845dfc-01e7-48eb-ba5e-09e468ce395f","order":0,"type":"tiled"},{"type":"layergroup","options":{"user_name":"andrew","maps_api_template":"https://{user}.cartodb.com:443","sql_api_template":"https://{user}.cartodb.com:443","tiler_protocol":"http","tiler_domain":"cartodb.com","tiler_port":"80","sql_api_protocol":"http","sql_api_domain":"cartodb.com","sql_api_endpoint":"/api/v2/sql","sql_api_port":80,"filter":"mapnik","layer_definition":{"stat_tag":"0fad7978-c996-11e5-b837-0e674067d321","version":"1.0.1","layers":[{"id":"dee6e67e-2aa8-4f5f-8de1-ef81e2b80033","type":"CartoDB","infowindow":{"fields":[],"template_name":"table/views/infowindow_light","template":"<div class=\"cartodb-popup v2\">\n  <a href=\"#close\" class=\"cartodb-popup-close-button close\">x</a>\n  <div class=\"cartodb-popup-content-wrapper\">\n    <div class=\"cartodb-popup-content\">\n      {{#content.fields}}\n        {{#title}}<h4>{{title}}</h4>{{/title}}\n        {{#value}}\n          <p {{#type}}class=\"{{ type }}\"{{/type}}>{{{ value }}}</p>\n        {{/value}}\n        {{^value}}\n          <p class=\"empty\">null</p>\n        {{/value}}\n      {{/content.fields}}\n    </div>\n  </div>\n  <div class=\"cartodb-popup-tip-container\"></div>\n</div>\n","alternative_names":{},"width":226,"maxHeight":180},"tooltip":{"fields":[],"template_name":"tooltip_light","template":"<div class=\"cartodb-tooltip-content-wrapper\">\n  <div class=\"cartodb-tooltip-content\">\n  {{#fields}}\n    {{#title}}\n    <h4>{{title}}</h4>\n    {{/title}}\n    <p>{{{ value }}}</p>\n  {{/fields}}\n  </div>\n</div>","alternative_names":{},"maxHeight":180},"legend":{"type":"none","show_title":false,"title":"","template":"","visible":true,"items":[{"name":"1","visible":true,"value":"#A6CEE3"},{"name":"2","visible":true,"value":"#1F78B4"},{"name":"3","visible":true,"value":"#B2DF8A"},{"name":"4","visible":true,"value":"#33A02C"}]},"order":1,"visible":true,"options":{"sql":"select * from stuartlynn.census_uber_clustering","layer_name":"census_uber_clustering","cartocss":"/** choropleth visualization */\n\n#census_uber_clustering{\n  polygon-fill: transparent;\n  polygon-opacity: 0.8;\n  line-color: transparent;\n  line-width: 1;\n  line-opacity: 1;\n}\n#census_uber_clustering [ prediction <= 0.995263597896769] {\n   polygon-fill: #67E1A7;\n   line-color: #67E1A7;\n}\n#census_uber_clustering [ prediction <= 0.687286767165621] {\n   polygon-fill: #4CC9A4;\n   line-color: #4CC9A4;\n}\n#census_uber_clustering [ prediction <= 0.497815382978813] {\n   polygon-fill: #39B19D;\n   line-color: #39B19D;\n}\n#census_uber_clustering [ prediction <= 0.355636422325544] {\n   polygon-fill: #2E9993;\n   line-color: #2e9993;\n}\n#census_uber_clustering [ prediction <= 0.239278058265142] {\n   polygon-fill: #2A8286;\n   line-color: #2a8286;\n}\n#census_uber_clustering [ prediction <= 0.152469810632122] {\n   polygon-fill: #2A6B76;\n   line-color: #2A6B76;\n}\n#census_uber_clustering [ prediction <= 0.0834756755786319] {\n   polygon-fill: #2A5563;\n  line-color: #2a5563;\n}","cartocss_version":"2.1.1","interactivity":"cartodb_id","table_name":"\"\"."}}]},"attribution":""}}],"overlays":[{"type":"zoom","order":6,"options":{"display":true,"x":20,"y":20},"template":"<a href=\"#zoom_in\" class=\"zoom_in\">+</a> <a href=\"#zoom_out\" class=\"zoom_out\">-</a>"},{"type":"loader","order":8,"options":{"display":true,"x":20,"y":150},"template":"<div class=\"loader\" original-title=\"\"></div>"},{"type":"logo","order":9,"options":{"display":true,"x":10,"y":40},"template":""}],"prev":null,"next":null,"transition_options":{"time":0}}
