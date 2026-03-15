import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Comp1 } from './comp1/comp1';
import { Comp2 } from './comp2/comp2';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Comp1, Comp2],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
