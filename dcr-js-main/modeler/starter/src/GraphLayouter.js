import ELK from 'elkjs/lib/elk.bundled.js'
import XMLGenerator from './XMLGenerator'

class GraphLayouter {
    constructor(nodesAndEdges) {
        this.elk = new ELK()
        this.nodesAndEdges = nodesAndEdges
    }
    
    async LayoutGraph() {
        
        const layout = {
            id: "root",
            layoutOptions: {
                'elk.algorithm': 'layered',
                'org.eclipse.elk.edgeRouting': 'SPLINES',
                'org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers': 30,
                'org.eclipse.elk.layered.spacing.edgeEdgeBetweenLayers': 30
            },
            children: this.nodesAndEdges.nodes,
            edges: this.nodesAndEdges.edges
        }
        
        const laidOutGraph = await this.elk.layout(layout)
        const generator = new XMLGenerator(laidOutGraph, this.nodesAndEdges)
        const xmlContent = generator.CreateXMLContent()
        return xmlContent
    }
}
export default GraphLayouter