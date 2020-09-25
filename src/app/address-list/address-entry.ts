export class AddressEntry {
  public firstName: string;
  public lastName: string;
  public phone?: string;
  public email?: string;
  public notes?: string;
  public street?: string;
  public postal_code?: string;
  public city?: string;
  public country?: string;

  constructor(firstName?: string, lastName?: string, phone?: string, email?: string, notes?: string, street?: string, postal_code?: string, city?: string, country?: string ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.notes = notes;
    this.street = street;
    this.postal_code = postal_code;
    this.city = city;
    this.country = country;

  }
}
