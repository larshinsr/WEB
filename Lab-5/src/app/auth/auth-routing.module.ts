import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegistrerComponent } from "./regist/regist.component";
// import { TodoListComponent } from "../../../../Lab5/todo-list/todo-list.component";
import { MainPageComponent } from "../system/main-page/main-page.component";
const routes: Routes = [
    {path: '', component: AuthComponent, children: [
        {path: 'login', component: LoginComponent },
        {path: 'regist', component: RegistrerComponent}
        // { path: 'main-page', component: MainPageComponent},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule{

}