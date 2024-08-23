class GraphLoader {
    constructor(model) {
        this.model = model
        this.nodes = []
        this.edges = []
    }

    LoadEdges(relation, type) {
        if (type == 'condition' || type == 'milestone') {
            Object.keys(relation).forEach(target => {
                relation[target].forEach(source => {
                    this.edges.push({
                        id: `${source}-${target}`, source, target,
                        sources: [source],
                        targets: [target],
                        type : type
                    })
                })
            })
        }
        else {
            Object.keys(relation).forEach(source => {
                relation[source].forEach(target => {
                    this.edges.push({
                        id: `${source}-${target}`, source, target,
                        sources: [source],
                        targets: [target],
                        type : type
                    })
                })
            })
        }
    }

    LoadNodes() {
        this.model.events.forEach(event => {
            this.nodes.push({
                id: event,
                width: 130,
                height: 150,
                included: this.model.marking.included.includes(event),
                pending: this.model.marking.pending.includes(event),
                executed: this.model.marking.executed.includes(event)
            })
        })
    }
    LoadGraph() {
        this.LoadNodes()
        
        this.LoadEdges(this.model.conditionsFor, 'condition')
        this.LoadEdges(this.model.milestonesFor, 'milestone')
        this.LoadEdges(this.model.responseTo, 'response')
        this.LoadEdges(this.model.excludesTo, 'exclude')
        this.LoadEdges(this.model.includesTo, 'include')
        
        const nodesAndEdges = {nodes: this.nodes, edges: this.edges}
        return nodesAndEdges
    }
}
export default GraphLoader