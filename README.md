# Planned Components

## Toolbar

### Measure

Button to enable.
https://openlayers.org/en/latest/examples/measure.html

### Info

Button to enable feature info.

### plus / min zoom

### Search (nomatim)

## Cards

### Layer switcher

tree, bootstrap

### Feature info

Featurinfo from multiple layers in panel, from template
Click op map geeft: https://openlayers.org/en/latest/apidoc/module-ol_MapBrowserEvent-MapBrowserEvent.html
Daarmee kan
https://openlayers.org/en/latest/apidoc/module-ol_Map-Map.html#forEachFeatureAtPixel
gebruikt worden.

callback van forEachFeatureAtPixel heeft feature + layer als arg.

- in callback bouw object, elke key is layer id en bevat array features
- daarna render template voor elke niet lege layer met mustache.

https://www.npmjs.com/package/mustache

### Legend

Image from getlegendgraphic if applicable

# Data structure

createMap(object): GeoMap

GeoMap extends ol.map, extra methods:

- getLayer(key)

object is validated with https://www.npmjs.com/package/prop-types

object (van yaml met jsonify):

{

layers [
{

        }
    ]

}
