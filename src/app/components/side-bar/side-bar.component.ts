import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  imports: [RouterModule, RouterLink, MatSidenavModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
