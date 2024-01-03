type PlanetType = {
    id: number,
    name: string,
    imagePath: string
}

const Planets: Array<PlanetType> = new Array({
    id: 1,
    name: "Earth",
    imagePath: "/images/earth.png"
},{
    id: 2,
    name: "Mars",
    imagePath: "/images/mars.png"
},{
    id: 3,
    name: "Venus",
    imagePath: "/images/venus.png"
},{
    id: 4,
    name: "Jupiter",
    imagePath: "/images/jupiter.png"
},{
    id: 5,
    name: "Saturn",
    imagePath: "/images/saturn.png"
},{
    id: 6,
    name: "Neptune",
    imagePath: "/images/neptune.png"
},{
    id: 7,
    name: "Mercury",
    imagePath: "/images/mercury.png"
},{
    id: 8,
    name: "Uranus",
    imagePath:"/images/uranus.png"
})

export { Planets };
export type { PlanetType };
