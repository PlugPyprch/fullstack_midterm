import { Flight } from "../flightbook/flight";

export class mockFlightData {
    public static mfData: Flight[] = [{
        fullName: 'Phutthabut Panyaprachum',
        from: 'Russia',
        to: 'USA',
        type: 'One way',
        adults: 1,
        departure: new Date('2022-03-10'),
        children: 2,
        infants: 3,
        arrival: new Date('2022-03-15'),
    },];
}