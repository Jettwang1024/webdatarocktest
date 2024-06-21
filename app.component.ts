import { Component, AfterViewInit } from '@angular/core';
import WebDataRocks from 'webdatarocks';
import Highcharts from 'highcharts';
import { localization } from './localization';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'table_test';
  pivot!: WebDataRocks;

  ngAfterViewInit() {
    this.initializePivot();
  }

  initializePivot() {
    if (this.pivot) {
      document.getElementById('wdr-component')!.innerHTML = '';
    }
    this.pivot = new WebDataRocks({
      container: "#wdr-component",
      toolbar: true,
      report: {
        dataSource: {
          filename: "https://cdn.webdatarocks.com/data/data.csv"
        },
        localization: localization
      },
      reportcomplete: () => {
        this.createChart();
      }
    });
  }

  createChart() {
    this.pivot.highcharts?.getData(
      { type: "areaspline" },
      (data: any) => {
        Highcharts.chart('highchartsContainer', data);
      },
      (data: any) => {
        Highcharts.chart('highchartsContainer', data);
      }
    );
  }
}
