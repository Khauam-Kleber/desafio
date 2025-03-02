import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDetailComponent } from './card-detail.component';
import { InfoCard } from '../../models/info-card.model';
import { By } from '@angular/platform-browser';

describe('CardDetailComponent', () => {
  let component: CardDetailComponent;
  let fixture: ComponentFixture<CardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display title and subtitle when cardInfo is provided', () => {
    component.cardInfo = {
      id: 1,
      title: 'Test Title',
      subTitle: 'Test Subtitle',
    } as InfoCard;
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('.title-card')).nativeElement;
    const subtitleElement = fixture.debugElement.query(By.css('.sub-title')).nativeElement;
    expect(titleElement.textContent).toContain('Test Title');
    expect(subtitleElement.textContent).toContain('Test Subtitle');
  });

  it('should display name when cardInfo has a name', () => {
    component.cardInfo = {
      id: 2,
      title: 'Account YYY',
      subTitle: 'Sample Subtitle',
      name: 'João Doe',
    } as InfoCard;
    fixture.detectChanges();
    const nameElement = fixture.debugElement.query(By.css('.text-card')).nativeElement;
    expect(nameElement.textContent).toContain('João Doe');
  });

  it('should display account number and digit when provided', () => {
    component.cardInfo = {
      id: 3,
      title: 'Account Info',
      subTitle: 'Details',
      accountNumber: 123456,
      accountDigit: 7,
    } as InfoCard;
    fixture.detectChanges();
    const accountElement = fixture.debugElement.query(By.css('.text-card')).nativeElement;
    expect(accountElement.textContent).toContain('123456-7');
  });

  it('should display CPF status when provided', () => {
    component.cardInfo = {
      id: 4,
      title: 'Account XXX',
      subTitle: 'Validation',
      status: 'Valid',
    } as InfoCard;
    fixture.detectChanges();
    const statusElement = fixture.debugElement.query(By.css('.text-card')).nativeElement;
    expect(statusElement.textContent).toContain('Valid');
  });

  it('should display "Duplicar Conta" when accountNumber and accountDigit exist', () => {
    component.cardInfo = {
      id: 5,
      title: 'Account XXY',
      subTitle: 'Actions',
      accountNumber: 987654,
      accountDigit: 3,
    } as InfoCard;
    fixture.detectChanges();
    const duplicateAccountElement = fixture.debugElement.query(By.css('.link-text')).nativeElement;
    expect(duplicateAccountElement.textContent).toContain('Duplicar Conta');
  });
});
