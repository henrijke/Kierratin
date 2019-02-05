import { Component, OnInit } from '@angular/core';
import {ApiservicesService} from '../services/apiservices.service';

@Component({
  selector: 'app-sidenavcontent',
  templateUrl: './sidenavcontent.component.html',
  styleUrls: ['./sidenavcontent.component.scss']
})
export class SidenavcontentComponent implements OnInit {

  tipOfTheDayText = '';

  tips = ['Tiesitkö että juomalasit kuuluvat sekäjätteeseen eivätkä lasinkeräykseen?',
          'Märkä-,  likainen kartonki tai pahvi, piirustukset, askartelukartonki kuuluvat sekäjätteeseen.',
          'Lääketabletit pitää viedä apteekkiin levystä irroitettuina läpinäkyvässä muovipussissa.',
          'Tiesitkö? Biohajoavat vaipat eivät sovellu biojätteille tarkoitettuun kompostointilaitokseen.',
          'Hajuvesi, partavesi ja muu alkoholipitoinen aine on vaarallista jätettä.',
          'Vähittäiskaupan on otettava käytetyt kannettavat akut ja paristot maksutta takaisin kuluttajilta.',
          'Jäteasemat ja jätekeskukset ottavat autojen käynnistysakkuja vastaan maksutta.',
          'Vanha sammutin voidaan viedä myös vaarallisten jätteiden keräykseen.'];

  constructor(public apiService: ApiservicesService) { }

  ngOnInit() {
      this.tipOfTheDay();
  }

  tipOfTheDay() {
      this.tipOfTheDayText = this.tips[Math.floor(Math.random() * this.tips.length)];
  }

}
