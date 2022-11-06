/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from "@faker-js/faker";

import { ListarPlantaComponent } from './listar-planta.component';
import { HttpClientModule } from "@angular/common/http";
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ListarPlantaComponent ],
      providers:[PlantaService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
      );
        component.plantas.push(planta);
    }

    fixture.detectChanges();
    debug=fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Validando se se crean las 3 filas + encabezados',()=>{
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });


});
