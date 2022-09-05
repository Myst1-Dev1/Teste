export interface Package {
    package_name: 'string',
    origin: 'string', 
    destination: 'string',
    date_start: Date,
    date_end: Date,
    count_people: number,
    count_days: number,
    room_id: number,
    flight_id: number
}