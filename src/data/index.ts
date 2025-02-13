// types
export type Position = {
    x: number
    y: number
}

export type Node = {
    id: string
    label: string
    position: Position
    type?: 'input' | 'output' | 'default'
}

export type Edge = {
    id: string
    source: string
    target: string
    animated?: boolean
}

export type FlowElement = Node | Edge

// data
const nodesData: FlowElement[] = [
    { id: '1', type: 'input', label: 'CEO of Company', position: { x: 300, y: 50 } },
    { id: '2', label: 'Project Manager', position: { x: 150, y: 150 } },
    { id: '3', label: 'HR Manager', position: { x: 450, y: 150 } },
    { id: '4', label: 'Front-end Devs', position: { x: 50, y: 250 } },
    { id: '5', label: 'Back-end Devs', position: { x: 250, y: 250 } },
    { id: '6', label: 'Web designers', position: { x: 450, y: 250 } },
    { id: '7', label: 'QA Testers', position: { x: 650, y: 250 } },
    { id: '8', type: 'output', label: 'Final product', position: { x: 300, y: 400 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e2-5', source: '2', target: '5', animated: true },
    { id: 'e3-6', source: '3', target: '6', animated: true },
    { id: 'e3-7', source: '3', target: '7', animated: true },
    { id: 'e4-8', source: '4', target: '8', animated: true },
    { id: 'e5-8', source: '5', target: '8', animated: true },
    { id: 'e6-8', source: '6', target: '8', animated: true },
    { id: 'e7-8', source: '7', target: '8', animated: true },
];

export default nodesData;
