import {Component, Inject, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {NoteDialogComponent} from './note-dialog/note-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<NoteDialogComponent>;

  isMobile: Observable<BreakpointState> = this.breakpointObserver
    .observe(Breakpoints.Handset);

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver) { }

  openDialog() {
    console.log('open dialog');
    this.fileNameDialogRef = this.dialog.open(NoteDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit() {
  }
}
