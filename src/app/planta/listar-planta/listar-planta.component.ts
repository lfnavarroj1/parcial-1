import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from "../planta.service";

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  plantas:Array<Planta>=[];
  cantidadInterior:number=0;
  cantidadExterior:number=0;

  constructor(private plantaService:PlantaService) { }

  getPlantas():void{
    this.plantaService.getPlantas().subscribe((plantas)=>{
      this.plantas=plantas;
      for (const planta of plantas) {
        if (planta.tipo=="Interior") {
          this.cantidadInterior++;
        } else {
          this.cantidadExterior++;
        }
      }
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
