import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { provideRouter, RouterLink, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { routes } from '../../app.routes';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarComponent, RouterModule, RouterLink, MatSidenavModule],
      providers: [ provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
