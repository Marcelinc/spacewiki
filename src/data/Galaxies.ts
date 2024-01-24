type GalaxyType = {
    id: number,
    name: string,
    imagePath: string,
    type: string,
    location: string,
    diameter: number | null,
    population: string
}

const Galaxies = [{
    id:1,
    name: 'The Milky Way',
    imagePath: '/images/galaxies/milky_way_galaxy.png',
    type: 'Spiral galaxy',
    location: 'Local Group',
    diameter: 100000,
    population: '100-400 billion'
},{
    id:2,
    name: 'M87',
    imagePath: '/images/galaxies/m87.jpg',
    type: 'Elliptical galaxy',
    location: 'Virgo Cluster',
    diameter: 120000,
    population: ''
},
{
    id:3,
    name: 'Large Magellanic Cloud',
    imagePath: '/images/galaxies/large_magellanic_cloud.png',
    type: 'Irregular galaxy',
    location: 'Satellite galaxy of the Milky Way',
    diameter: 14000,
    population: ''
},
{
    id:4,
    name: 'Messier 86',
    imagePath: '/images/galaxies/messier86.jpg',
    type: 'Lenticular galaxy',
    location: 'Virgo Cluster',
    diameter: 120000,
    population: ''
},
{
    id:5,
    name: 'Triangulum II',
    imagePath: '/images/galaxies/trangulumII.jpg',
    type: 'Dwarf galaxy',
    location: 'vicinity of the Milky Way Galaxy',
    diameter: null,
    population: ''
},
{
    id:6,
    name: 'NGC 1300',
    imagePath: '/images/galaxies/NGC1300.jpg',
    type: 'Spiral galaxy',
    location: 'Virgo Supercluster',
    diameter: 110000,
    population: ''
},]

export type {GalaxyType}
export {Galaxies}