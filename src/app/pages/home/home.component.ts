import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public olympics$: Observable<Array<Olympic> | undefined | null> = of(null);
  public aOlympicServiceData: Array<number> = [];
  public aOlympicServiceLabels: Array<string> = [];
  public ev: boolean = false;
  private num = 10
  public aOlympicServiceCities: Array<string> = [];
  constructor(private olympicService: OlympicService, private router: Router) {}
  public parentFun(countryId : number): void
  {
    this.router.navigateByUrl('/details/' + countryId)

  }
  ngOnInit(): void {
    this.olympicService.loadInitialData;
    this.olympics$ = this.olympicService.getOlympics();
    this.aOlympicServiceLabels = []; 
    this.aOlympicServiceCities = [];
    this.olympics$.subscribe((value) => {
      if(value!= null && value!= undefined){
  
        value.forEach((val) => {
          this.aOlympicServiceLabels.push(val.country);
          this.num = 0;
          val.participations.forEach((val2) => {
            !this.aOlympicServiceCities.includes(val2.city)? this.aOlympicServiceCities.push(val2.city):null;
            this.num += val2.medalsCount;
          })
          this.aOlympicServiceData.push(this.num);
        })
        this.ev = true;
      }
    });
  }
}
