export interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
}

export interface ContactRes {
  contacts: Contact[];
}
