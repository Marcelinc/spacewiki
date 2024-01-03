type GalaxyType = {
    id: number,
    name: string,
    imagePath: string,
}

const Galaxies = [{
    id:1,
    name: 'The Milky Way',
    imagePath: '/images/galaxies/milky_way_galaxy.png'
},{
    id:2,
    name: 'M87',
    imagePath: '/images/galaxies/m87.jpg'
},
{
    id:3,
    name: 'Large Magellanic Cloud',
    imagePath: '/images/galaxies/large_magellanic_cloud.png'
},
{
    id:4,
    name: 'Messier 86',
    imagePath: '/images/galaxies/messier86.jpg'
},
{
    id:5,
    name: 'Triangulum II',
    imagePath: '/images/galaxies/trangulumII.jpg'
},
{
    id:6,
    name: 'NGC 1300',
    imagePath: '/images/galaxies/NGC1300.jpg'
},]

export type {GalaxyType}
export {Galaxies}