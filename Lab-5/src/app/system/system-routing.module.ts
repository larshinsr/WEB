import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
const routes: Routes=[
    {path: 'system', component: SystemComponent, children:[
        {path:'user-profile', component: UserProfileComponent},

    ]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class SystemRoutingModule{
    
}