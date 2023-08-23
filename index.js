import Coordinate from 'jsts/org/locationtech/jts/geom/Coordinate.js'
import GeometryFactory from 'jsts/org/locationtech/jts/geom/GeometryFactory.js'
import WKTWriter from 'jsts/org/locationtech/jts/io/WKTWriter.js'

const gf = new GeometryFactory()
const ls = gf.createLineString([new Coordinate(1,1), new Coordinate(2,2)])
const writer = new WKTWriter()
const wkt = writer.write(ls)

console.log(wkt)
