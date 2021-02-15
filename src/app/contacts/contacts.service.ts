import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ContactRes } from './contact.model';
@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get<ContactRes>('./assets/data.json');
  }
}
