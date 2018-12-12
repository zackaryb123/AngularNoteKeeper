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
  update$: boolean;

  constructor(
    private httpNote: HttpNoteService) {
    this.httpNote.doUpdateNotes$.subscribe(data => {
      console.log(data);
      if (this.update$ !== data) {
        this.update$ = data;
        if (this.update$ === true) {
          this.getNotes();
        }
      }
    });
  }

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
