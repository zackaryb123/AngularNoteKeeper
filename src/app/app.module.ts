import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {NotepadComponent} from './NotePad/notepad.component';
import {NoteComponent} from './NotePad/Note/note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { NoteDialogComponent } from './navigation/note-dialog/note-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotepadComponent,
    NoteComponent,
    NoteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NoteDialogComponent]
})
export class AppModule { }
