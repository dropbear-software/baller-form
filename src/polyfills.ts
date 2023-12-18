// Dates 
const availableDates = [
  new Date("2024-01-08T14:00:00.000+01:00"),
  new Date("2024-01-15T14:00:00.000+01:00"),
  new Date("2024-01-22T14:00:00.000+01:00"),
  new Date("2024-01-29T14:00:00.000+01:00"),
  new Date("2024-02-05T14:00:00.000+01:00"),
  new Date("2024-02-12T14:00:00.000+01:00"),
  new Date("2024-02-19T14:00:00.000+01:00"),
  new Date("2024-02-26T14:00:00.000+01:00"),
  new Date("2024-03-04T14:00:00.000+01:00"),
  new Date("2024-03-11T14:00:00.000+01:00"),
  new Date("2024-03-18T14:00:00.000+01:00"),
  new Date("2024-03-23T14:00:00.000+01:00"),
];

availableDates.sort();

availableDates.forEach(matchDate => {
  console.log(matchDate.toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  }));

  console.log(matchDate.toLocaleTimeString('de-DE', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'CET',
    timeZoneName: 'longGeneric'
  }));
});