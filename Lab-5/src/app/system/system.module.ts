import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MainPageComponent } from './main-page/main-page.component';
@NgModule({
    imports:[
        CommonModule,
        SharedModule,
        SystemRoutingModule
    ],
    declarations:[UserProfileComponent, MainPageComponent]
})
export class SystemModule{}