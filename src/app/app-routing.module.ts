import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ClassListComponent } from './class-list/class-list.component';
import { CreateClassComponent } from './create-class/create-class.component';

const routes: Routes = [
    {
        path: "",
        component: LandingPageComponent,
        title: 'Home'
    },
    {
        path: "users",
        component: UsersComponent,
        title: "Users"
    },
    {
        path: "class-list",
        component: ClassListComponent,
        title: "Class List"
    },
    {
        path: "create-class",
        component: CreateClassComponent,
        title: "Create Class"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
