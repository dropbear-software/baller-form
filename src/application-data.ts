export class ApplicationData {
  readonly givenName: string;

  readonly familyName: string;

  readonly email: string;

  readonly telephone: string;

  readonly birthDate: string;

  readonly experience: string;

  readonly clubName: string;

  readonly transfermarktProfile: string

  readonly highlightTape: string

  readonly youTube: string;

  readonly instagram: string;

  readonly tikTok: string;

  readonly freeform: string;

  constructor(
    givenName: string,
    familyName: string,
    email: string,
    telephone: string,
    birthDate: Date,
    experience: string,
    otherExperience: string,
    clubName: string,
    highlightTape: string,
    transfermarktProfile: string,
    youTube: string,
    instagram: string,
    tikTok: string,
    freeform: string,
    acceptedTOS: boolean
  ) {
    if (!acceptedTOS) {
      throw new Error("Unable to create an application until you accept the terms of service");
    }

    this.givenName = givenName;
    this.familyName = familyName;
    this.telephone = telephone;
    this.email = email;
    this.birthDate = ApplicationData.normalizeBirthDate(birthDate);
    this.experience = ApplicationData.normalizeExperience(experience, otherExperience);
    this.clubName = clubName;
    this.highlightTape = highlightTape;
    this.transfermarktProfile = transfermarktProfile;
    this.youTube = youTube;
    this.instagram = instagram;
    this.tikTok = tikTok;
    this.freeform = freeform;
  }
  
  // Normalize the DOB with the appropriate locale
  private static normalizeBirthDate(birthDate: Date) : string {
    return birthDate.toLocaleDateString('de');
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
