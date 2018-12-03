import { Component, OnInit } from '@angular/core';
import {Note} from '../model/Note';
import {HttpNoteService} from '../service/http-note.service';

@Component({
  selector: 'notpad-comp',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notpad.component.css']
})
export class NotepadComponent implements OnInit {
  private notes: Note[];

  constructor(
    private httpNote: HttpNoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.httpNote.getNote()
      .subscribe((data) => {
        this.notes = data;
      });
  }
}
