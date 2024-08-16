import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { TableComponent } from './components/table/table.component';

// Componente de MATERIAL
import { MatIconModule } from '@angular/material/icon';

// Paqueterías de formularios y formularios reactivos de ANGULAR
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent,
    TableComponent,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
