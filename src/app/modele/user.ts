export class User {
  id: string ;
  username: string;
  firstName: string ;
  lastName: string ;
  profileImageMedium: string ;


  constructor(id: string, username: string, firstName: string, lastName: string, profileImageMedium: string) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImageMedium = profileImageMedium;
  }

}
