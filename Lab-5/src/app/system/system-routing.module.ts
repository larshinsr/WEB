import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MainPageComponent } from "./main-page/main-page.component";
const routes: Routes=[
    {path: 'system', component: SystemComponent, children:[
        {path:'user-profile', component: UserProfileComponent},
        {path:'main-page', component:MainPageComponent}

    ]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class SystemRoutingModule{
    
}