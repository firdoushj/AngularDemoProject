import { Injectable } from "@angular/core";
import { IResourceSerives } from './IResourceServices'

@Injectable()
export class ResourceServices implements IResourceSerives{
    getAllResources(): string[] {
        return ["Learn Angular","CLI Documentation","Angular Material","Angular Blog","Angular DevTools"];
    }
}