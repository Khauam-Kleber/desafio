import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate a valid CPF', () => {
    const validCpf = '52998224725';
    expect(service.cpfIsValid(validCpf)).toBeTrue();
  });

  it('should invalidate an incorrect CPF', () => {
    const invalidCpf = '12345678900'; 
    expect(service.cpfIsValid(invalidCpf)).toBeFalse();
  });

  it('should invalidate a CPF with less than 11 digits', () => {
    const shortCpf = '52998224'; 
    expect(service.cpfIsValid(shortCpf)).toBeFalse();
  });

  it('should invalidate a CPF with all identical digits', () => {
    const repeatedCpf = '11111111111';
    expect(service.cpfIsValid(repeatedCpf)).toBeFalse();
  });

  it('should invalidate a CPF with incorrect check digits', () => {
    const incorrectCpf = '52998224724';
    expect(service.cpfIsValid(incorrectCpf)).toBeFalse();
  });
});
