import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuNoGlutineComponent } from './menu-no-glutine/menu-no-glutine.component';
import { MenuNormaleComponent } from './menu-normale/menu-normale.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';

const LISTA_ROUTES = [
  { path: '', component: MenuHomeComponent },
  { path: 'no-glutine', component: MenuNoGlutineComponent },
  { path: 'normale', component: MenuNormaleComponent },
  { path: 'whoAreWe', component: WhoAreWeComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(LISTA_ROUTES)],
  declarations: [
    AppComponent,
    MenuHomeComponent,
    MenuNoGlutineComponent,
    MenuNormaleComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
