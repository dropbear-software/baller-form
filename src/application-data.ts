export interface ApplicationDataInit {
  givenName: string,
  familyName: string,
  email: string,
  telephone: string,
  birthDate: Date,
  shirtSize: string,
  bundesland: string,
  position: string,
  highestLeague: string,
  otherExperience: string,
  clubName: string,
  highlightTape: string,
  transfermarktProfile: string,
  youTube: string,
  instagram: string,
  tiktok: string,
  comments: string,
  acceptedTos: boolean,
  acceptedPrivacy: boolean
}

export class ApplicationData {
  readonly givenName: string;

  readonly familyName: string;

  readonly email: string;

  readonly telephone: string;

  readonly birthDate: string;

  readonly bundesland: string;

  readonly position: string;

  readonly shirt: string;

  readonly experience: string;

  readonly clubName: string;

  readonly transfermarktProfile: string

  readonly highlightTape: string

  readonly youTube: string;

  readonly instagram: string;

  readonly tikTok: string;

  readonly comments: string;

  constructor(
    args: ApplicationDataInit
  ) {
    this.givenName = args.givenName;
    this.familyName = args.familyName;
    this.telephone = args.telephone;
    this.email = args.email;
    this.birthDate = ApplicationData.normalizeBirthDate(args.birthDate);
    this.shirt = args.shirtSize;
    this.bundesland = args.bundesland;
    this.position = args.position;
    this.experience = ApplicationData.normalizeExperience(args.highestLeague, args.otherExperience);
    this.clubName = args.clubName;
    this.highlightTape = args.highlightTape;
    this.transfermarktProfile = args.transfermarktProfile;
    this.youTube = args.youTube;
    this.instagram = args.instagram;
    this.tikTok = args.tiktok;
    this.comments = args.comments;
  }
  
  // Normalize the DOB with the appropriate YYYY-MM-DD formatting
  private static normalizeBirthDate(birthDate: Date) : string {
    // Get the year, month, and day of the date.
    const year = birthDate.getFullYear();
    const month = birthDate.getMonth() + 1; // Months are zero-indexed, so we need to add one.
    const day = birthDate.getDate();

    // Add leading zeros to the month and day if necessary.
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    // Return the formatted date string.
    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  // We allow users to choose 'other' as an experience level and instead provide a string
  // this function will put the apporpriate version into the right field.
  private static normalizeExperience(dropdownValue: string, customValue: string){
    if (dropdownValue === 'sonstiges') {
      return customValue;
    } 
    
    return dropdownValue;
  }
}
