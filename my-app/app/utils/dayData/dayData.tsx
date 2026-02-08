
export const dayData:() => string = (): string => {
    const daysOfWeek: string[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const today = new Date();

    const day:string = String(today.getDate()).padStart(2, '0');
    const month:string = String(today.getMonth() + 1).padStart(2, '0');

    const weekDay:string = `${daysOfWeek[today.getDay()]} ${day}.${month}`
    return weekDay;
};