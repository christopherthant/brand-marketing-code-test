import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactCreateDialog } from '../contact-create-dialog/contact-create-dialog.component';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactList implements OnInit {
  columns: string[] = [
    'first_name',
    'last_name',
    'email',
    'phone',
    'company',
    'address',
  ];
  contacts: Contact[];
  constructor(
    private contactService: ContactsService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.contactService.getContacts().subscribe((res) => {
      this.contacts = res.contacts;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ContactCreateDialog, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.contacts = this.contacts.concat(result);
    });
  }
}
