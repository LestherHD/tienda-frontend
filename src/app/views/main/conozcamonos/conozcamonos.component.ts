import { Component } from '@angular/core';
import {DataUtils} from '../../../utils/DataUtils';
import {Services} from '../../../services/Services';

@Component({
  selector: 'app-conozcamonos',
  standalone: true,
  imports: [],
  templateUrl: './conozcamonos.component.html',
  styleUrl: './conozcamonos.component.scss'
})
export class ConozcamonosComponent{

  constructor(public dataUtils: DataUtils, public services: Services){

    this.services.isDashboardUrl = false;

  }

}
