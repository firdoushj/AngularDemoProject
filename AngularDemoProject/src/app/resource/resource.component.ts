import { Component, OnInit } from '@angular/core';
import { ResourceServices } from '../services/ResourceServices';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  allResources : string[] = [];
  constructor(private resourcesService : ResourceServices) { }

  ngOnInit(): void {
    this.allResources = this.resourcesService.getAllResources();
    console.log(this.allResources);
  }

}
