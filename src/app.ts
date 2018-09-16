import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  message="";
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Beer-Hub';
    config.map([
      { route: '',moduleId: PLATFORM.moduleName('landing-page'),   title: 'Select' },
    ]);
    this.router = router;
  }

}
