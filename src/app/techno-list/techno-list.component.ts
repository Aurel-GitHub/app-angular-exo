import { Component, OnInit } from '@angular/core';
import { Technology } from '../models/technology';
import { TechnoService } from '../services/techno.service';

@Component({
  selector: 'app-techno-list',
  templateUrl: './techno-list.component.html',
  styleUrls: ['./techno-list.component.css']
})
export class TechnoListComponent implements OnInit {

  allTechnos : any[] = [];

  constructor(private technoService: TechnoService) {}

  ngOnInit(): void {
    this.getTechno()
  }

  getTechno() {
    this.allTechnos = this.technoService.getAllTechno();
  }

  deleteTechnoComponent(techno: Technology) {
    this.technoService.deleteTechno(techno);
    this.allTechnos = this.technoService.getAllTechno();
  }

}
