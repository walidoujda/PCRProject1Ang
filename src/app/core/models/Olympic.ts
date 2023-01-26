// TODO: create here a typescript interface for an olympic country

import { Participation } from "./Participation";

/*
example of an olympic country:
{
    id: 1,
    country: "Italy",
    participations: []
}
*/
export class Olympic {
    id!: number;
    country!: string;
    participations!: Array<Participation>;

    set setId(val: number) {
        this.id = val;
    }
    set setCountry(val: string) {
        this.country = val;
    }
    set setParticipations(val: Array<Participation>) {
        this.participations = val;
    }
    
    get getId() : number {
        return this.id;
    }
    get getCountry() : string {
        return this.country;
    }
    get getParticipations() : Array<Participation> {
        return this.participations;
    }
}