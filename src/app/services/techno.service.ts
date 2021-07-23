import { Injectable } from '@angular/core';
import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnoService {

  private technos:Technology[] = [];

  constructor() { }

  createTechno(techno : any) {
    
    const newTechno = { id :Date.now(), ...techno};
    this.technos = [newTechno,...this.technos];
    console.log(this.technos);
  }

  getAllTechno()  {
    return this.technos;
  }

  deleteTechno(techno: Technology) {
    this.technos = this.technos.filter(t => t.id !== techno.id); 
  }
  
}
