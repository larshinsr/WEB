import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemModule } from "./system/system.module";
export const routes: Routes = [
    { path: '', redirectTo: 'system', pathMatch: 'full' },


]

@NgModule({
    imports: [RouterModule.forRoot(routes), SystemModule],
    exports: [RouterModule],
})
export class AppRoutingModule {

}