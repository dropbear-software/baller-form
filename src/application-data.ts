export interface ApplicationDataInit {
  givenName: string,
  familyName: string,
  email: string,
  acceptedTos: boolean,
}

export class ApplicationData {
  readonly givenName: string;

  readonly familyName: string;

  readonly email: string;

  readonly acceptedTos: boolean;

  constructor(
    args: ApplicationDataInit
  ) {
    this.givenName = args.givenName;
    this.familyName = args.familyName;
    this.email = args.email;
    this.acceptedTos = args.acceptedTos;
  }
}
