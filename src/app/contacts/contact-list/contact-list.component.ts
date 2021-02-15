import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactCreateDialogComponent } from '../contact-create-dialog/contact-create-dialog.component';
import { Contact } from '../contact.model';
import { ContactsService } from '../contacts.service';

@Component({
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  columns: string[] = [
    'firstName',
    'lastName',
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
    const dialogRef = this.dialog.open(ContactCreateDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result); // demo purpose
        this.contacts = this.contacts.concat(result);
      }
    });
  }
}
