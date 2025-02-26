import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // In Angular 19 and higher, this is default.
  // The default is 'false' for Angular 18 and below. This was for module based comonents
  templateUrl: './header.component.html',
  styleUrl: './header.component.css', // Older versions of Angular use 'styleUrls' instead
})
export class HeaderComponent {}
