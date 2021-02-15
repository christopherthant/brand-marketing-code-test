export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
}

export interface ContactRes {
  contacts: Contact[];
}
