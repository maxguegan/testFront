interface Stat {
    name: string;
    url: string;
}

interface Stats {
    base_stat:number;
    effort:number;
    stat: Stat
}

export class Pokemon {
    constructor(id: string = "", name: string = "", url: string = "",stats: Stats[] = []){
        this.id = id;
        this.name = name;
        this.url = url;
        this.stats = stats;
    }
    id: string = "";
    name: string = "";
    url: string = "";
    stats: Stats[] = [];
}
