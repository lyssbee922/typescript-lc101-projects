import {Payload} from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: number[];
    astronauts: number[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        



    }
}