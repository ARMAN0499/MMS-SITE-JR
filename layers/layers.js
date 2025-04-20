var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WIUPGAP_1 = new ol.format.GeoJSON();
var features_WIUPGAP_1 = format_WIUPGAP_1.readFeatures(json_WIUPGAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPGAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPGAP_1.addFeatures(features_WIUPGAP_1);
var lyr_WIUPGAP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIUPGAP_1, 
                style: style_WIUPGAP_1,
                popuplayertitle: "WIUP GAP",
                interactive: true,
                title: '<img src="styles/legend/WIUPGAP_1.png" /> WIUP GAP'
            });
var format_ROAD2_2 = new ol.format.GeoJSON();
var features_ROAD2_2 = format_ROAD2_2.readFeatures(json_ROAD2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD2_2.addFeatures(features_ROAD2_2);
var lyr_ROAD2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD2_2, 
                style: style_ROAD2_2,
                popuplayertitle: "ROAD 2",
                interactive: true,
                title: '<img src="styles/legend/ROAD2_2.png" /> ROAD 2'
            });
var format_ROAD1_3 = new ol.format.GeoJSON();
var features_ROAD1_3 = format_ROAD1_3.readFeatures(json_ROAD1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD1_3.addFeatures(features_ROAD1_3);
var lyr_ROAD1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD1_3, 
                style: style_ROAD1_3,
                popuplayertitle: "ROAD 1",
                interactive: true,
                title: '<img src="styles/legend/ROAD1_3.png" /> ROAD 1'
            });
var format_GISJAGADJRRoad3copy_4 = new ol.format.GeoJSON();
var features_GISJAGADJRRoad3copy_4 = format_GISJAGADJRRoad3copy_4.readFeatures(json_GISJAGADJRRoad3copy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADJRRoad3copy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADJRRoad3copy_4.addFeatures(features_GISJAGADJRRoad3copy_4);
var lyr_GISJAGADJRRoad3copy_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADJRRoad3copy_4, 
                style: style_GISJAGADJRRoad3copy_4,
                popuplayertitle: "GIS JAGAD — JR Road 3 copy",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADJRRoad3copy_4.png" /> GIS JAGAD — JR Road 3 copy'
            });
var format_GISJAGADJRRoad2copy_5 = new ol.format.GeoJSON();
var features_GISJAGADJRRoad2copy_5 = format_GISJAGADJRRoad2copy_5.readFeatures(json_GISJAGADJRRoad2copy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADJRRoad2copy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADJRRoad2copy_5.addFeatures(features_GISJAGADJRRoad2copy_5);
var lyr_GISJAGADJRRoad2copy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADJRRoad2copy_5, 
                style: style_GISJAGADJRRoad2copy_5,
                popuplayertitle: "GIS JAGAD — JR Road 2 copy",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADJRRoad2copy_5.png" /> GIS JAGAD — JR Road 2 copy'
            });
var format_GISJAGADJRRoad1copy_6 = new ol.format.GeoJSON();
var features_GISJAGADJRRoad1copy_6 = format_GISJAGADJRRoad1copy_6.readFeatures(json_GISJAGADJRRoad1copy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADJRRoad1copy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADJRRoad1copy_6.addFeatures(features_GISJAGADJRRoad1copy_6);
var lyr_GISJAGADJRRoad1copy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADJRRoad1copy_6, 
                style: style_GISJAGADJRRoad1copy_6,
                popuplayertitle: "GIS JAGAD — JR Road 1 copy",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADJRRoad1copy_6.png" /> GIS JAGAD — JR Road 1 copy'
            });
var format_PIT_7 = new ol.format.GeoJSON();
var features_PIT_7 = format_PIT_7.readFeatures(json_PIT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PIT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PIT_7.addFeatures(features_PIT_7);
var lyr_PIT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PIT_7, 
                style: style_PIT_7,
                popuplayertitle: "PIT",
                interactive: true,
                title: '<img src="styles/legend/PIT_7.png" /> PIT'
            });
var format_GISJAGADJRRoad3_8 = new ol.format.GeoJSON();
var features_GISJAGADJRRoad3_8 = format_GISJAGADJRRoad3_8.readFeatures(json_GISJAGADJRRoad3_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADJRRoad3_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADJRRoad3_8.addFeatures(features_GISJAGADJRRoad3_8);
var lyr_GISJAGADJRRoad3_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADJRRoad3_8, 
                style: style_GISJAGADJRRoad3_8,
                popuplayertitle: "GIS JAGAD — JR Road 3",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADJRRoad3_8.png" /> GIS JAGAD — JR Road 3'
            });
var format_GISJAGADJRRoad2_9 = new ol.format.GeoJSON();
var features_GISJAGADJRRoad2_9 = format_GISJAGADJRRoad2_9.readFeatures(json_GISJAGADJRRoad2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADJRRoad2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADJRRoad2_9.addFeatures(features_GISJAGADJRRoad2_9);
var lyr_GISJAGADJRRoad2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADJRRoad2_9, 
                style: style_GISJAGADJRRoad2_9,
                popuplayertitle: "GIS JAGAD — JR Road 2",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADJRRoad2_9.png" /> GIS JAGAD — JR Road 2'
            });
var format_GISJAGADJRRoad1_10 = new ol.format.GeoJSON();
var features_GISJAGADJRRoad1_10 = format_GISJAGADJRRoad1_10.readFeatures(json_GISJAGADJRRoad1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADJRRoad1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADJRRoad1_10.addFeatures(features_GISJAGADJRRoad1_10);
var lyr_GISJAGADJRRoad1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADJRRoad1_10, 
                style: style_GISJAGADJRRoad1_10,
                popuplayertitle: "GIS JAGAD — JR Road 1",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADJRRoad1_10.png" /> GIS JAGAD — JR Road 1'
            });
var format_GISJAGADWIUPJAGAD_11 = new ol.format.GeoJSON();
var features_GISJAGADWIUPJAGAD_11 = format_GISJAGADWIUPJAGAD_11.readFeatures(json_GISJAGADWIUPJAGAD_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISJAGADWIUPJAGAD_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISJAGADWIUPJAGAD_11.addFeatures(features_GISJAGADWIUPJAGAD_11);
var lyr_GISJAGADWIUPJAGAD_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISJAGADWIUPJAGAD_11, 
                style: style_GISJAGADWIUPJAGAD_11,
                popuplayertitle: "GIS JAGAD — WIUP JAGAD",
                interactive: true,
                title: '<img src="styles/legend/GISJAGADWIUPJAGAD_11.png" /> GIS JAGAD — WIUP JAGAD'
            });
var group_JAGAD = new ol.layer.Group({
                                layers: [lyr_GISJAGADJRRoad3copy_4,lyr_GISJAGADJRRoad2copy_5,lyr_GISJAGADJRRoad1copy_6,lyr_PIT_7,lyr_GISJAGADJRRoad3_8,lyr_GISJAGADJRRoad2_9,lyr_GISJAGADJRRoad1_10,lyr_GISJAGADWIUPJAGAD_11,],
                                fold: "open",
                                title: "JAGAD"});
var group_GAP = new ol.layer.Group({
                                layers: [lyr_WIUPGAP_1,lyr_ROAD2_2,lyr_ROAD1_3,],
                                fold: "open",
                                title: "GAP"});

lyr_GoogleSatellite_0.setVisible(true);lyr_WIUPGAP_1.setVisible(true);lyr_ROAD2_2.setVisible(true);lyr_ROAD1_3.setVisible(true);lyr_GISJAGADJRRoad3copy_4.setVisible(true);lyr_GISJAGADJRRoad2copy_5.setVisible(true);lyr_GISJAGADJRRoad1copy_6.setVisible(true);lyr_PIT_7.setVisible(true);lyr_GISJAGADJRRoad3_8.setVisible(true);lyr_GISJAGADJRRoad2_9.setVisible(true);lyr_GISJAGADJRRoad1_10.setVisible(true);lyr_GISJAGADWIUPJAGAD_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_GAP,group_JAGAD];
lyr_WIUPGAP_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ROAD2_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ROAD1_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GISJAGADJRRoad3copy_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GISJAGADJRRoad2copy_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GISJAGADJRRoad1copy_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PIT_7.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Dok.': 'Dok.', });
lyr_GISJAGADJRRoad3_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GISJAGADJRRoad2_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GISJAGADJRRoad1_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_GISJAGADWIUPJAGAD_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WIUPGAP_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ROAD2_2.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ROAD1_3.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_GISJAGADJRRoad3copy_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GISJAGADJRRoad2copy_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GISJAGADJRRoad1copy_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PIT_7.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Dok.': 'TextEdit', });
lyr_GISJAGADJRRoad3_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GISJAGADJRRoad2_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GISJAGADJRRoad1_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_GISJAGADWIUPJAGAD_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_WIUPGAP_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ROAD2_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ROAD1_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADJRRoad3copy_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADJRRoad2copy_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADJRRoad1copy_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PIT_7.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Description': 'no label', 'Dok.': 'no label', });
lyr_GISJAGADJRRoad3_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADJRRoad2_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADJRRoad1_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADWIUPJAGAD_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_GISJAGADWIUPJAGAD_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});