import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {TreeModule} from 'primeng/tree';
import { MenuTreeComponent } from './menu-tree/menu-tree.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
