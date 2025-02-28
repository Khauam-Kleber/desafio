import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { provideNgxMask } from 'ngx-mask';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent,
    SideBarComponent,     
    MatToolbarModule,
    MatSidenavModule,
  ],
  providers: [provideNgxMask({}), ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio';
}
