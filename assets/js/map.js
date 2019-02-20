function createMap(config) {
  const map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    target: 'map',
    view: new ol.View(config.view),
  });
  return map;
}

window.createMap = createMap;
