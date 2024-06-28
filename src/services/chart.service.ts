import { Injectable } from '@angular/core';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}

  createChartDashboard(baseUrl: string, dashboardId: string, token: string) {
    const sdk = new ChartsEmbedSDK({
      baseUrl: baseUrl,
      getUserToken: () => {
        return token;
      },
    });

    
    return sdk.createDashboard({
      dashboardId: dashboardId,
    });
  }

    createSingleChart(baseUrl: string, chartId: string) {
    const sdk = new ChartsEmbedSDK({
      baseUrl: baseUrl,
    });
    
    return  sdk.createChart({
      chartId: chartId,
    });
  }
}
