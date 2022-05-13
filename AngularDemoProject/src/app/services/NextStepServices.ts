import { Injectable } from "@angular/core";
import { INextStepsServices } from './INextStepsServices';
import { IResourceSerives } from "./IResourceServices";
import { ResourceServices } from "./ResourceServices";

@Injectable()
export class NextStepsServices implements INextStepsServices, IResourceSerives{
    constructor(private resourceService : ResourceServices){}
    getAllNextSteps(): string[] {
        return [];
    }

    getAllResources(): string[] {
        return this.resourceService.getAllResources();
    }
}