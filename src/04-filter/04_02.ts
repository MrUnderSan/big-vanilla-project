import {CityType, GovernmentBuildingType} from '../02/02_02';

export const demolishHousesOnTheStreet = (city: CityType, streetTitle: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== streetTitle)

}

// export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, staff: number) {
//     return buildings.filter(b => b.staffCount > staff)
// }

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, staff: number)=> { return  buildings.filter(b => b.staffCount > staff) }