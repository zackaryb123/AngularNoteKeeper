import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../model/Note';
import {BASE_URL} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpNoteService {
  private getUrl = '/note';
  private getByIdUrl = '/note/get/';
  private addUrl = '/note/add';
  private updateUrl = '/note/update/';
  private deleteUrl = '/note/delete/';

  constructor(private http: HttpClient) { }

  public getNote() {
    return this.http.get<Note[]>(BASE_URL + this.getUrl);
  }

  public getNoteById(id) {
    return this.http.get<Note>(BASE_URL + this.getByIdUrl + id);
  }

  public addNote(note) {
    return this.http.post(BASE_URL + this.addUrl, note);
  }

  public updateNote(note, id) {
    return this.http.put(BASE_URL + this.updateUrl + id, note);
  }

  public deleteNote(id) {
    return this.http.delete(BASE_URL + this.deleteUrl + id, id);
  }
}
