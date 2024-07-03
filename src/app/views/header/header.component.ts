import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {FunctionsUtils} from '../../utils/FunctionsUtils';
import {CommonModule} from '@angular/common';
import {ButtonDirective, FormControlDirective} from '@coreui/angular';
import {ButtonsComponent} from '../buttons/buttons/buttons.component';
import {IconComponent, IconDirective} from '@coreui/icons-angular';
import {Services} from '../../services/Services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormControlDirective, ReactiveFormsModule,
    ButtonDirective, ButtonsComponent, IconComponent, IconDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  valorBusqueda: FormControl;
  valorBusquedaBK: FormControl;

  constructor(public functionsUtils: FunctionsUtils, private services: Services) {
  }

  ngOnInit(): void {
    this.valorBusqueda = new FormControl('', Validators.required);
    this.filtrar();
  }


  filtrar(): void {
    this.valorBusquedaBK = new FormControl(this.valorBusqueda.value, Validators.required);
    this.services.setSearchValue(this.valorBusquedaBK);
  }

}
