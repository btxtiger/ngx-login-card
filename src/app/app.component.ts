import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   loginImageUrl: string = 'https://picsum.photos/900/900';

   constructor() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         this.toggleDarkMode();
      }
   }

   /**
    * Toggle Dark Mode
    */
   toggleDarkMode(): void {
      document.body.classList.toggle('dark');
   }
}
