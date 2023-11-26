import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { RegistrerComponent } from "./regist/regist.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
const routes: Routes = [
    {path: '', component: AuthComponent, children: [
        {path: 'login', component: LoginComponent },
        {path: 'regist', component: RegistrerComponent},
        { path: 'todo-list', component: TodoListComponent },
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule{

}