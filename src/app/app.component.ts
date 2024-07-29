import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-ecommerce';
  constructor(private router: Router) { }

  ngOnInit(): void {   // Method called during the initialization of the Angular component.


    this.router.events.subscribe((evt) => {     // This line subscribes to events emitted by the router.


      if (!(evt instanceof NavigationEnd)) {       // Check if the event is an instance of NavigationEnd.

        return  // Check if the event is an instance of NavigationEnd.

      }
      window.scrollTo(0, 0) // If the event is a NavigationEnd event, execute the following code:

    })
  }
}
