type GalaxyType = {
    id: number,
    name: string,
}

const Galaxies = [{
    id:1,
    name: 'The Milky Way'
},{
    id:2,
    name: 'M87'
},
{
    id:3,
    name: 'Large Magellanic Cloud'
},
{
    id:4,
    name: 'Messier 86'
},
{
    id:5,
    name: 'Triangulum II'
},
{
    id:6,
    name: 'NGC 1300'
},]

export type {GalaxyType}
export {Galaxies}