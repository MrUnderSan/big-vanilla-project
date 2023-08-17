import {GovernmentBuildingType, HousesType} from '../02/02_02';

export function getStreetsTitlesOfGovernmentBuildings(buildings: Array<GovernmentBuildingType>) {
    return buildings.map(b=> b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h=>h.address.street.title)
}

export const createGreetingMessages = (houses: Array<HousesType>) => {
    return houses.map(h=> `Hello ${h.address.street.title} people`)
}