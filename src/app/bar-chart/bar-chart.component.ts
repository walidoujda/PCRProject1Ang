import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('barCanvas') barCanvas!: { nativeElement: any };
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();
  barChart: any;
  @Input() data: any;
  @Input() labels: any;
  constructor() {}

  ngAfterViewInit(): void {
    this.barChartBrowser();
  }
  private onGraphClickEvent = (event: any,item: any) => {
    const points = this.barChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    var firstPoint = points[0];
    this.parentFun.emit(firstPoint.index);
  }
  barChartBrowser(): void {
    this.canvas = this.barCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.barChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label:'DATES',
            data: this.data,
          },
        ],
      },
      options:{
        onClick: this.onGraphClickEvent
      }
    });
  }
  
}