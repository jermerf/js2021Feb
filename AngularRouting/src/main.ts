import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  console.log("--- In production mode ---")
  enableProdMode();
} else {
  console.log("*** In DEVELOPMENT mode ***")
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
