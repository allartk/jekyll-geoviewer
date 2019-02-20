function createMap(config) {
  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: "map",
    view: new ol.View(mapconfig.view)
  });
  return map;
}
