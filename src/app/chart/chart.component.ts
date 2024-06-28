import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(private chartService: ChartService) {}

  ngOnInit() {
    setTimeout(async () => {
      await this.renderSingleChart();
    });
  }

  private async renderSingleChart() {
    document.getElementById('chart')!.style.visibility = 'visible';
    const chart = this.chartService.createSingleChart(
      'https://charts.mongodb.com/charts-sneha-creations-db-frrsurs',
      '667ef7e5-58d9-4df2-871b-6568bc03756a'
    );

    await chart
      .render(document.getElementById('chart')!)
      .catch(() => window.alert('Chart failed to initialise'));
  }

}
