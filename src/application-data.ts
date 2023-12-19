export interface ApplicationDataInit {
  givenName: string,
  familyName: string,
  email: string,
  xingMember: boolean,
  availableDates: Set<string>,
  acceptedTos: boolean,
}

export class ApplicationData {
  readonly givenName: string;

  readonly familyName: string;

  readonly email: string;

  readonly xingMember: boolean;

  readonly availableDates: string[];

  readonly acceptedTos: boolean;

  constructor(
    args: ApplicationDataInit
  ) {
    this.givenName = args.givenName;
    this.familyName = args.familyName;
    this.email = args.email;
    this.xingMember = args.xingMember;
    this.availableDates = ApplicationData._normalizeDates(args.availableDates);
    this.acceptedTos = args.acceptedTos;
  }

  // Take a Set of ISO8601 date strings, return as array in format DD.MM.YYYY
  private static _normalizeDates(isoDateStrings: Set<string>){
    const datesArray = Array.from(isoDateStrings);

    const normalizedDates = datesArray.map((isoDate) => {
      const parsedDate = new Date(isoDate);
      return parsedDate.toLocaleDateString('de-DE', {
        day: 'numeric',
        year: 'numeric',
        month: 'numeric',
      });
    });

    return normalizedDates;
  }
}
