import { Component, OnInit } from '@angular/core';
import { ChartService } from '../../services/chart.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private chartService: ChartService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    setTimeout(async () => {
      await this.tryLogin();
    });
  }

  async tryLogin() {
    const token = await this.loginService.login();

    if (token) {
      await this.renderDashboard(token);
    }
  }

  private async renderDashboard(token: string) {
    document.getElementById('dashboard')!.style.visibility = 'visible';
    const dashboard = this.chartService.createChartDashboard(
      'https://charts.mongodb.com/charts-sneha-creations-db-frrsurs',
      '6040a39f-bf17-4548-b05b-af4ac5fde95b',
      token
    );

    await dashboard
      .render(document.getElementById('dashboard')!)
      .catch(() => window.alert('Chart failed to initialise'));
  }
}
