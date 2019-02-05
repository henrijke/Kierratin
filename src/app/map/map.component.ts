import {Component, HostListener, OnInit} from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public apiService: ApiservicesService, public listService: ListServiceService) {}

  ngOnInit = () => {
    this.apiService.getUserCoordinates();
  }

  closeRouteWindow = () => {
    this.apiService.closeRouteWindow();
  }

  closeWindow = () => {
      if (this.apiService.infoWind !== null) {
          this.apiService.infoWind.close();
      }
      this.apiService.infoWind = null;
  }

  openIW = (data) => {
    if (this.apiService.infoWind !== null) {
      this.apiService.infoWind.close();
    }
    this.apiService.infoWind = data;
  }

  iconUrler = (point) => {
        if (point.type_id.length > 1) {
          return './assets/marker-icons/000.png';
        } else {
            return './assets/marker-icons/' + point.type_id[0] + '.png';
        }
  }
}
