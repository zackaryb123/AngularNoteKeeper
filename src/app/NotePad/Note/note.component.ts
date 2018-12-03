import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpNoteService} from '../../service/http-note.service';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'note-comp',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnChanges {
  @Input() data;
  @Output() updated = new EventEmitter<string>();
  @Output() deleted = new EventEmitter<string>();
  private title: any = null;
  private note: any = null;
  private status: any = null;
  statuses: string[] = ['Pending', 'Complete'];


  constructor(
    private httpNote: HttpNoteService
  ) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // only run when property "data" changed
    if (changes['data']) {
    }
  }

  deleteComplete() {
    this.updated.emit('deleted');
  }

  deleteNote(id) {
    this.httpNote.deleteNote(id)
      .subscribe(res => {
        if (confirm(`Delete Note: ${this.data.name}?`)) {
          this.deleteComplete();
        }
      });
  }

  radioChange(e: MatRadioChange) {
    this.status = e.value;
    console.log('Selected: ' + this.status);
  }


  updateComplete() {
    this.updated.emit('updated');
  }

  updateNote(id) {
    this.data.title = this.title;
    this.data.note = this.note;
    this.data.status = this.status;

    this.httpNote.updateNote(this.data, id)
      .subscribe(res => {
        this.updateComplete();
      });
  }
}

