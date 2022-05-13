import { NgModule } from "@angular/core";
import { NextStepsServices } from "./NextStepServices";
import { ResourceServices } from "./ResourceServices";

@NgModule({
    providers:[NextStepsServices,ResourceServices]
})
export class ServiceModule{
    
}