export class Address {
  id: string;
  firstname: string;
  lastname: string;
  full_name: string;
  address1: string;
  address2: string;
  city: string;
  zipcode: string;
  phone: string;
  company: string;
  alternative_phone: string;
  country_id: string;
  countryId: string;
  state_id: string;
  state_name: string;
  state_text: string;
  uid: string;
  email: string;
  ip: string;

  public v_selected: boolean;

  public getFullName() {
    return this.firstname + " " + this.lastname;
  }
}

