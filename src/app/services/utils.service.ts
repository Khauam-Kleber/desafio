import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  cpfIsValid(cpf: string): boolean {
    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;
    const calcularDigito = (base: string, pesoInicial: number) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += parseInt(base[i]) * (pesoInicial - i);
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
    const digito1 = calcularDigito(cpfLimpo.substring(0, 9), 10);
    const digito2 = calcularDigito(cpfLimpo.substring(0, 10), 11);
    return digito1 === parseInt(cpfLimpo[9]) && digito2 === parseInt(cpfLimpo[10]);
  }
}
