import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  cpfIsValid(cpf: string): boolean {
    // Remove caracteres não numéricos
    const cpfLimpo = cpf.replace(/\D/g, '');
  
    // Verifica se tem 11 dígitos
    if (cpfLimpo.length !== 11) return false;
  
    // Verifica se o CPF não é uma sequência repetida (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;
  
    // Função para calcular o dígito verificador
    const calcularDigito = (base: string, pesoInicial: number) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += parseInt(base[i]) * (pesoInicial - i);
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    // Calcula os dois dígitos verificadores
    const digito1 = calcularDigito(cpfLimpo.substring(0, 9), 10);
    const digito2 = calcularDigito(cpfLimpo.substring(0, 10), 11);
  
    // Valida os dígitos verificadores
    return digito1 === parseInt(cpfLimpo[9]) && digito2 === parseInt(cpfLimpo[10]);
  }
}
