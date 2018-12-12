import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotepadComponent} from './NotePad/notepad.component';

const routes: Routes = [
  {path: 'note', component: NotepadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
