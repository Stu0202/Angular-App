import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',

})
export class Navbar {

}
