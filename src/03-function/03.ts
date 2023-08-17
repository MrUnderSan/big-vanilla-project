import {StudentType} from "../02/02";
import {GovernmentBuildingType, HousesType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (housesType: HousesType) => {
    housesType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

