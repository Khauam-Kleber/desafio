import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { UtilsService } from '../../services/utils.service';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../stepper/stepper.component';
import { InfoCard } from '../../models/info-card.model';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let utilsService: UtilsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, FormsModule, NgxMaskDirective, CardDetailComponent, CommonModule, StepperComponent],
      providers: [provideNgxMask({}), UtilsService],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    utilsService = TestBed.inject(UtilsService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate CPF correctly', () => {
    spyOn(utilsService, 'cpfIsValid').and.returnValue(true);
    component.cpfNumber = '52998224725';
    component.updateValidation({ keyCode: 50 });
    expect(component.cpfIsValid()).toBeTrue();
  });

  it('should invalidate an incorrect CPF', fakeAsync(() => {
    spyOn(utilsService, 'cpfIsValid').and.returnValue(false);
    component.cpfNumber = '12345678900';
    component.updateValidation({ keyCode: 50 });
    tick(500);
    expect(component.cpfIsValid()).toBeFalse();
  }));

  it('should disable search button for invalid CPF', fakeAsync(() => {
    spyOn(utilsService, 'cpfIsValid').and.returnValue(false);
    component.cpfNumber = '12345678900';
    component.updateValidation({ keyCode: 50 });
    tick(500);
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn-search')).nativeElement;
    expect(button.disabled).toBeTrue();
  }));
  

  it('should enable search button for valid CPF', () => {
    spyOn(utilsService, 'cpfIsValid').and.returnValue(true);
    component.cpfNumber = '52998224725';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn-search')).nativeElement;
    expect(button.disabled).toBeFalse();
  });

  it('should execute search when clicking the button', fakeAsync(() => {
    spyOn(utilsService, 'cpfIsValid').and.returnValue(true);
    component.cpfNumber = '52998224725';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.btn-search')).nativeElement;
    button.click();
    fixture.detectChanges();
    tick(1000);
    expect(component.searchExecuted()).toBeTrue();
  }));

  it('should show loading spinner when searching', fakeAsync(() => {
    spyOn(utilsService, 'cpfIsValid').and.returnValue(true);
    component.cpfNumber = '52998224725';
    component.searchCpf();
    fixture.detectChanges();
    let spinner = fixture.debugElement.query(By.css('.spinner-border'));
    expect(spinner).toBeTruthy();
    tick(1000);
    fixture.detectChanges();
    spinner = fixture.debugElement.query(By.css('.spinner-border'));
    expect(spinner).toBeFalsy(); 
  }));
});
