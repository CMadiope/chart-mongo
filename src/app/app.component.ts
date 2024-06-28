import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chart-mongo';
  show: boolean = false;
  showChartType: string | undefined = 'none';

  constructor(private authService: SocialAuthService) {}

  refreshToken(): void {
    this.authService
      .refreshAuthToken(GoogleLoginProvider.PROVIDER_ID)
      .then((token) => {
        console.log(token);
      });
  }

  changeType($event: any) {
    this.showChartType = $event.target.value;
  }


}
