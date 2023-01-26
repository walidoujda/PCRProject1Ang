import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  filter, find, Observable, of } from 'rxjs';
import { Olympic } from 'src/app/core/models/Olympic';
import { Participation } from 'src/app/core/models/Participation';
import { OlympicService } from 'src/app/core/services/olympic.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  public olympics$: Observable<Olympic[] | null | undefined> = of(null);

  public ev: boolean = false;
  public details: number = 0;
  public participations: string[][] = [];
  public country: string = '';
  public year: number = 0;
  public medalsCount: number = 0;
  public participationsCount: number= 0;
  public athleteCount: number= 0;
  public num: number = 0;
  public aOlympicServiceData: Array<number> = [];
  public aOlympicServiceLabels: Array<number> = [];
  constructor(private olympicService: OlympicService, private route: ActivatedRoute) {}
  public parentFun(countryId : number): void
  {
    alert('je suis la');

  }
  ngOnInit(): void {
    const details = Number(this.route.snapshot.params['countryId']);
    
    this.olympicService.loadInitialData;
    this.olympics$ = this.olympicService.getOlympics();
    console.log(this.details);
    this.olympics$.subscribe((value) => {
      if(value!= null && value!= undefined){
        value.forEach((val) => {
          if(val.id == details + 1 )
          {
            console.log(val);
            ///this.medalsCount += 
            this.country = val.country;
            val.participations.forEach((aParticipation) => {
              this.aOlympicServiceLabels.push(aParticipation.year);

              this.aOlympicServiceData.push(aParticipation.medalsCount);
              this.participationsCount++;
              this.medalsCount += aParticipation.medalsCount;
              this.athleteCount += aParticipation.athleteCount;
              const arr = [aParticipation.year.toString() , aParticipation.city , aParticipation.athleteCount.toString() , aParticipation.medalsCount.toString() ];
              this.participations.push(arr);
                       
            })
          } 
        })
        this.ev = true;
      }
      console.log(this.aOlympicServiceData);
      console.log(this.aOlympicServiceLabels);
    });
    // const result = this.olympics$.pipe(find(data => data != null && data != undefined && data.id === 1 ))
    // console.log(result)
    // result.subscribe(x => console.log(x));

  }
}
