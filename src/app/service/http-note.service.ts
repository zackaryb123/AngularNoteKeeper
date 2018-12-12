import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/Note';
import {BASE_URL} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpNoteService {
  private url = '/note/';
  sharingData = { update: false };
  // Observable string source
  private dataStringSource = new BehaviorSubject<boolean>(this.sharingData.update);
  // Observable string stream
  doUpdateNotes$ = this.dataStringSource.asObservable();

  constructor(private http: HttpClient) { }

  public updateNotes(value) {
    console.log(`save data function called  ${value} ${this.sharingData.update}`);
    this.sharingData.update = value;
    this.dataStringSource.next(this.sharingData.update);
  }

  public getNote() {
    return this.http.get<Note[]>(BASE_URL + this.url);
  }

  public getNoteById(id) {
    return this.http.get<Note>(BASE_URL + this.url + id);
  }

  public addNote(note) {
    return this.http.post(BASE_URL + this.url, note);
  }

  public updateNote(note, id) {
    return this.http.put(BASE_URL + this.url + id, note);
  }

  public deleteNote(id) {
    return this.http.delete(BASE_URL + this.url + id, id);
  }
}
