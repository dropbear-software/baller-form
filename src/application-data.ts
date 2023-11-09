export interface ApplicationDataInit {
  givenName: string,
  familyName: string,
  email: string,
  telephone: string,
  birthDate: Date,
  shirtSize: string,
  bundesland: string,
  customCurrentCountry: string,
  position: string,
  currentPlayingStatus: string,
  currentFootballCountry: string,
  teamType: string
  germanLeague: string,
  internationalLeague: string,
  otherExperience: string,
  highestDomesticLeague: string,
  highestInternationalCountry: string,
  highestInternationalLeague: string,
  highestExperience: string,
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

  readonly shirt: string;

  readonly bundesland: string;

  readonly currentCountry: string;

  readonly position: string;

  readonly currentLeague: string;

  readonly currentTeamType: string;

  readonly currentTeamCountry: string;

  readonly highestTeamCountry: string;

  readonly highestTeamLeague: string;

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
    this.currentCountry = ApplicationData.normalizeCountry(args.bundesland, args.customCurrentCountry);
    this.position = args.position;
    this.currentTeamCountry = args.currentPlayingStatus;
    this.currentTeamType = args.teamType;
    this.currentLeague = ApplicationData.normalizeLeague(args.currentPlayingStatus, args.germanLeague, args.internationalLeague);
    this.highestTeamCountry = ApplicationData.normalizeHighestCountry(args.currentPlayingStatus, args.highestInternationalCountry);
    this.highestTeamLeague = ApplicationData.normalizeHighestLeague(args.highestExperience, args.highestDomesticLeague, args.highestInternationalLeague)
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
  private static normalizeLeague(location: string, germanLeague: string, internationalLeague: string){
    if (location === 'deutschland') {
      return germanLeague;
    } 
    
    if (location === 'international') {
      return internationalLeague;
    }
    
    return '';
  }

  private static normalizeHighestCountry(currentStatus: string, currentTeamCountry: string){
    if (currentStatus === 'deutschland') {
      return 'Deutschland';
    } 
    
    if (currentStatus === 'international') {
      return currentTeamCountry;
    }
    
    return '';
  }

  private static normalizeHighestLeague(currentStatus: string, domesticLeague: string, internationalLeague: string){
    if (currentStatus === 'deutschland') {
      return domesticLeague;
    } 
    
    if (currentStatus === 'international') {
      return internationalLeague;
    }
    
    return 'Same as current';
  }
  

  // We allow users to choose 'other' as an experience level and instead provide a string
  // this function will put the apporpriate version into the right field.
  private static normalizeCountry(stateValue: string, countryValue: string){
    if (stateValue === 'Ausland') {
      return countryValue;
    } 
    
    return 'Deutschland';
  }
}
