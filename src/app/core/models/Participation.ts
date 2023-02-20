export class Participation {
    id!: number;
    year!: number;
    city!: string;
    medalsCount!: number;
    athleteCount!: number;

    set setId(val: number) {
        this.id = val;
    }
    set setYear(val: number) {
        this.year = val;
    }
    set setCity(val: string) {
        this.city = val;
    }
    set setMedalsCount(val: number) {
        this.medalsCount = val;
    }
    set setAthleteCount(val: number) {
        this.athleteCount = val;
    }
    get getId() : number {
        return this.id;
    }
    get getYear() : number {
        return this.year;
    }
    get getCity() : string {
        return this.city;
    }
    get getMedalsCount() : number {
        return this.medalsCount;
    }
    get getAthleteCount() : number {
        return this.athleteCount;
    }
}