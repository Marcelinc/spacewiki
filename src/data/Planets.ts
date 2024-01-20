type PlanetType = {
    id: number | string,
    name: string,
    imagePath: string
}

const Planets: Array<PlanetType> = new Array({
    id: 'terre',
    name: "Earth",
    imagePath: "/images/earth.png"
},{
    id: 'mars',
    name: "Mars",
    imagePath: "/images/mars.png"
},{
    id: 'venus',
    name: "Venus",
    imagePath: "/images/venus.png"
},{
    id: 'jupiter',
    name: "Jupiter",
    imagePath: "/images/jupiter.png"
},{
    id: 'saturne',
    name: "Saturn",
    imagePath: "/images/saturn.png"
},{
    id: 'neptune',
    name: "Neptune",
    imagePath: "/images/neptune.png"
},{
    id: 'mercure',
    name: "Mercury",
    imagePath: "/images/mercury.png"
},{
    id: 'uranus',
    name: "Uranus",
    imagePath:"/images/uranus.png"
})

export { Planets };
export type { PlanetType };
