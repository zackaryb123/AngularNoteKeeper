import {Component, OnInit} from '@angular/core';
import {Note} from '../../model/Note';
import {HttpNoteService} from '../../service/http-note.service';
import {MatRadioChange} from '@angular/material';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.css']
})
export class NoteDialogComponent implements OnInit {
  private id: any = null;
  private note: any = null;
  private title: any = null;
  private date: any = null;
  private status: any = null;

  statuses: string[] = ['Pending', 'Complete'];
  private data = new Note();

  constructor(
    private httpNote: HttpNoteService
  ) {}

  ngOnInit(): void {
  }

  radioChange(e: MatRadioChange) {
    this.status = e.value;
    console.log('Selected: ' + this.status);
  }

  addNote() {
    this.data.id = this.id;
    this.data.title = this.title;
    const d = new Date();
    this.data.date = `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;
    this.data.status = this.status;
    this.data.note = this.note;
    console.log(this.data);

    this.httpNote.addNote(this.data)
      .subscribe(res => {
        console.log(res);
        alert(`Note: ${this.data.title} was added!`);
        this.httpNote.updateNotes(true);
        this.httpNote.updateNotes(false);
      });
  }
}
