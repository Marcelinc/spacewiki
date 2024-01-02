type PlanetType = {
    id: number,
    name: string
}

const Planets: Array<PlanetType> = new Array({
    id: 1,
    name: "Earth",
},{
    id: 2,
    name: "Mars",
},{
    id: 3,
    name: "Venus",
},{
    id: 4,
    name: "Jupiter",
},{
    id: 5,
    name: "Saturn",
},{
    id: 6,
    name: "Neptune",
},{
    id: 7,
    name: "Mercury",
},{
    id: 8,
    name: "Uranus",
})

export { Planets };
export type { PlanetType };
