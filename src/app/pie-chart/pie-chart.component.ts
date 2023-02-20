import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  @Output('parentFun') parentFun: EventEmitter<any> = new EventEmitter();
  pieChart: any;
  @Input() data: any;
  @Input() labels: any;
  constructor() {}

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }
  private onGraphClickEvent = (event: any,item: any) => {
    const points = this.pieChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    var firstPoint = points[0];
    this.parentFun.emit(firstPoint.index);
  }
  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
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