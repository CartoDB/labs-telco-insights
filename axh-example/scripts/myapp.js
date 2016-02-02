'use strict';
(function () {

    window.myapp = window.myapp || {};

    window.myapp.layerID = "dee6e67e-2aa8-4f5f-8de1-ef81e2b80033";

    window.myapp.diJSON = {
        "title": "myapp Ads Demo",
        "description": "",
        "user": {
            fullname: 'Abel Vázquez',
            avatar_url: 'https://cartodb-libs.global.ssl.fastly.net/cartodb.com/files/img/layout/team/abel.c52ddb5d.jpg'
        },
        "datasource": {
            "type": "public_map",
            "user_name": "andrew",
            "maps_api_template": "https://{user}.cartodb.com:443",
            "stat_tag": "ae1e978e-c04c-11e5-9be1-0ea31932ec1d",
            "force_cors": true
        },
        "widgets": {
            'is_a_current_customer': {
                "layerId": window.myapp.layerID,
                "type": "aggregation",
                "title": "[F] Current customers",
                "column": "williamsburg",
                "aggregation": "count",
                "aggregationColumn": "total_pop",
                "sync": true,
                itemsPerPage: 2
            }
            , "histogram_widget_age": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[Eq] Target age range",
                "column": "median_age",
                "sync": true
            }
            , "histogram_widget_income": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[Eq] Target household income",
                "column": "median_household_income",
                "sync": true
            }
            , "histogram_widget_homeowners": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[Eq] Home ownership",
                "column": "owner_occupied_housing_units_per_pop",
                "sync": true
            }
            , "histogram_widget_disposable": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[Eq] Disposable income percentile",
                "column": "percent_household_income_spent_on_rent",
                "sync": true
            }
            , "histogram_widget_tradearea": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[F] Commercial activity rank (max 4)",
                "column": "quad_cat_axh",
                "sync": true,
            }
            , "histogram_widget_roadway": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[F] Distance to primary roadway (meters)",
                "column": "primary_roadway_distance_limit",
                "sync": true,
            }
            , "histogram_widget_segment": {
                "layerId": window.myapp.layerID,
                "type": "histogram",
                "title": "[F] Predicted customer potential",
                "column": "prediction",
                "sync": true,
            }
        },
        "vizJSON": window.myapp.viz
    };

    window.myapp.sql = new cartodb.SQL({
        user: 'andrew',
        protocol: "https",
        sql_api_template: "https://{user}.cartodb.com:443"
    });


    window.onload = function () {
        cartodb.deepInsights.createDashboard('#dashboard', myapp.diJSON)
            .vis
            .done(function (v, l) {
                var vLayers = v.getLayers()[1],
                    layers = l.models[1].layers;
                window.myapp.vLayers = vLayers;
                window.myapp.layers = layers;
                window.myapp.Lmap = v.getNativeMap();

                // add stuf for torke layer
                window.myapp.ads = vLayers.model.layers.models[5];
                // window.myapp.ads.set('extra_params', {});


                // // Append legend and selector if any
                // document.querySelector('.CDB-Map-canvas').appendChild(cdb.$('#cartoselector').get(0));
                // document.querySelector('.CDB-Map-canvas').appendChild(cdb.$('#leyend').get(0));

                // layer selector stuff
                /*cdb.$('li.layer-selector-item').on('click', function (e) {
                    if (cdb.$(e.target).attr('data')=='0') return;
                    cdb.$(e.target).toggleClass('is-active');
                    cdb.$('.layer-selector-info').get(0).innerHTML = cdb.$('.is-active').length + " visible layers";
                    var show = cdb.$(e.target).hasClass('is-active');
                    switch(cdb.$(e.target).attr('data')){
                        case '3': // zip
                            vLayers.model.layers.models[0].set('visible', show);
                            break;
                        case '1': // dominos
                            vLayers.model.layers.models[1].set('visible', show);
                            vLayers.model.layers.models[2].set('visible', show);
                            break;
                        case '2': // pizzahut
                            vLayers.model.layers.models[3].set('visible', show);
                            vLayers.model.layers.models[4].set('visible', show);
                            break;
                        /*case '0': // ads
                            vLayers.model.layers.models[5].set('visible', show);
                            break;*/
                //     }
                // }); */
            })
    };

})();
