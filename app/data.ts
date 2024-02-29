export interface Node extends d3.SimulationNodeDatum {
    id: string;
    group: number;
    title: string;
    author: string;
    published_at: string;
    url: string;
    sentiment: string;
    similar: Similar[];
}

export interface Link extends d3.SimulationLinkDatum<Node> {
    //source: string;
    //target: string;
    source: Node;
    target: Node;
    value: number;
}

export type Data = {
    nodes: Node[];
    links: Link[];
};

export type Similar = {
    id: string;
    url: string;
}

export type Movie = {
    genres: string;
    id: number;
    item_id: number;
    original_language: string;
    overview: string;
    predict: number,
    real: number,
    release_date: string,
    runtime: number,
    spoken_languages: string,
    title: string,
    user_id: number,
    user_idR: number
}