import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    // {path: '', redirectTo: 'todo-list', pathMatch: "full"}
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{

}