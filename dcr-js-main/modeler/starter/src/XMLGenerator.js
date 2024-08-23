class XMLGenerator {
    constructor(laidOutGraph, nodesAndEdges) {
        this.laidOutGraph = laidOutGraph
        this.nodesAndEdges = nodesAndEdges
    }

    CreateXMLContent() {
		var xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n'
		xmlContent += '<dcr:definitions xmlns:dcr="http://tk/schema/dcr" xmlns:dcrDi="http://tk/schema/dcrDi" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC">\n'
		xmlContent += '  <dcr:dcrGraph id="Graph">\n'

		this.nodesAndEdges.nodes.forEach(node => {
			xmlContent += `    <dcr:event id="${node.id}" description="${node.id}" included="${node.included}" executed="${node.executed}" pending="${node.pending}" />\n`
		})

		var id = 0
		this.nodesAndEdges.edges.forEach(edge => {
			xmlContent += `    <dcr:relation id="relation_${id++}" type="${edge.type}" sourceRef="${edge.sources[0]}" targetRef="${edge.targets[0]}" />\n`
		})

		xmlContent += '  </dcr:dcrGraph>\n'
		xmlContent += '  <dcrDi:dcrRootBoard id="RootBoard">\n'
		xmlContent += '    <dcrDi:dcrPlane id="Plane" boardElement="Graph">\n'

		id = 0
		this.laidOutGraph.edges.forEach(edge => {
			if (edge.sections) {
				xmlContent += `      <dcrDi:relation id="relation_${id}_di" boardElement="relation_${id++}">\n`
				xmlContent += `        <dcrDi:waypoint x="${edge.sections[0].startPoint.x}" y="${edge.sections[0].startPoint.y}" />\n`
				
				edge.sections[0].bendPoints?.forEach((bendPoint) => {
					xmlContent += `        <dcrDi:waypoint x="${bendPoint.x}" y="${bendPoint.y}" />\n`
				})
				
				xmlContent += `        <dcrDi:waypoint x="${edge.sections[0].endPoint.x}" y="${edge.sections[0].endPoint.y}" />\n`
				xmlContent += '      </dcrDi:relation>\n'
			}
	
			//for self referencing nodes when using layouts without bendpoints
			else {
				xmlContent += `      <dcrDi:relation id="relation_${id}_di" boardElement="relation_${id++}">\n`
				xmlContent += `        <dcrDi:waypoint x="${NaN}" y="${NaN}" />\n`
				xmlContent += '      </dcrDi:relation>\n'
			}
		})

		this.laidOutGraph.children.forEach(node => {
			xmlContent += `      <dcrDi:dcrShape id="${node.id}_di" boardElement="${node.id}">\n`
			xmlContent += `        <dc:Bounds x="${node.x}" y="${node.y}" width="${node.width}" height="${node.height}" />\n`
			xmlContent += '      </dcrDi:dcrShape>\n'
		})

		xmlContent += '    </dcrDi:dcrPlane>\n'
		xmlContent += '  </dcrDi:dcrRootBoard>\n'
		xmlContent += '</dcr:definitions>\n'

		return xmlContent
	}
}

export default XMLGenerator