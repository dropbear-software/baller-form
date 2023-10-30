import { ApplicationData } from "./application-data.js";

export class EnrollmentService {
  readonly applicationData: ApplicationData;

  constructor(data: ApplicationData){
    this.applicationData = data;
  }

  process(){
    console.log('Processing the application form');
    console.log(this.applicationData);
  }
}