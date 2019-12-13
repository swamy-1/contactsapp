import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contacts = [
    {id: 1, name: 'GlobalOp01', SCN: '31270'},
    {id: 2, name: 'GlobalOp02', SCN: '31271'},
    {id: 3, name: 'GlobalOp03', SCN: '31271'},
    {id: 4, name: 'GlobalOp04', SCN: '31271'},
    {id: 5, name: 'GlobalOp05', SCN: '31271'},
    {id: 6, name: 'GlobalOp06', SCN: '31271'},
    {id: 7, name: 'GlobalOp07', SCN: '31271'},
    {id: 8, name: 'GlobalOp08', SCN: '31271'},
    {id: 9, name: 'GlobalOp09', SCN: '31271'},
    {id: 6, name: 'GlobalOp06', SCN: '31271'},
    {id: 7, name: 'GlobalOp07', SCN: '31271'},
    {id: 8, name: 'GlobalOp08', SCN: '31271'},
    {id: 9, name: 'GlobalOp09', SCN: '31271'}
  ];

  constructor() { }

  public getContacts(): Array<{name, id, SCN}> {
    return this.contacts;
  }
  public createContact(contact: {name, id, SCN}) {
    this.contacts.push(contact);
  }
}
