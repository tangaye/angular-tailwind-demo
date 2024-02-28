import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsersComponent } from './users/users.component';
import { ClassListComponent } from './class-list/class-list.component';
import { CreateClassComponent } from './create-class/create-class.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        UsersComponent,
        ClassListComponent,
        CreateClassComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
