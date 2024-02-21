export interface ApplicationDataInit {
  givenName: string,
  familyName: string,
  email: string,
  xingMember: boolean,
  selectedTeams: Set<string>,
  acceptedTos: boolean,
}

export class ApplicationData {
  readonly givenName: string;

  readonly familyName: string;

  readonly email: string;

  readonly xingMember: boolean;

  readonly selectedTeams: Set<string>;

  readonly acceptedTos: boolean;

  constructor(
    args: ApplicationDataInit
  ) {
    this.givenName = args.givenName;
    this.familyName = args.familyName;
    this.email = args.email;
    this.xingMember = args.xingMember;
    this.selectedTeams = args.selectedTeams;
    this.acceptedTos = args.acceptedTos;
  }
}
