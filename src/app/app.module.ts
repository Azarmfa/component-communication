import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, ParentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
