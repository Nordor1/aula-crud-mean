import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel,
         NavigationStart,
         NavigationEnd,
         NavigationError,
         Event,
         Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private LoadingBarService: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }


/**
 * @param event Métudo responsavel por lidar com as ações do 'loading bar progress' da navegação.
 */
  private navigationInterceptor(event: Event): void{
    if (event instanceof NavigationStart) {
      this.LoadingBarService.start();
    }
    if (event instanceof NavigationEnd) {
      this.LoadingBarService.complete();
    }
    if (event instanceof NavigationCancel) {
      this.LoadingBarService.stop();
    }
    if (event instanceof NavigationError) {
      this.LoadingBarService.stop();
    }
  }
}
