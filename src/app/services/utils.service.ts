import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  cpfIsValid(cpf: string): boolean {
    const cleanedCpf = this.cleanCpf(cpf);
    if (!this.isValidLength(cleanedCpf) || this.hasRepeatedDigits(cleanedCpf)) {
      return false;
    }
  
    const firstDigit = this.calculateCheckDigit(cleanedCpf.substring(0, 9), 10);
    const secondDigit = this.calculateCheckDigit(cleanedCpf.substring(0, 10), 11);
    return firstDigit === parseInt(cleanedCpf[9]) && secondDigit === parseInt(cleanedCpf[10]);
  }
  
  private cleanCpf(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }
  
  private isValidLength(cpf: string): boolean {
    return cpf.length === 11;
  }
  
  private hasRepeatedDigits(cpf: string): boolean {
    return /^(\d)\1{10}$/.test(cpf);
  }
  
  private calculateCheckDigit(base: string, initialWeight: number): number {
    let sum = 0;
    for (let i = 0; i < base.length; i++) {
      sum += parseInt(base[i]) * (initialWeight - i);
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  }
  
}
