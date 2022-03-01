//Copei isso do site com a documentacao oficial de typescript, eh uma classe que faz a verificacao de Zip Code ou valida palavras

// interface StringValidator {
//     isAcceptable(s: string): boolean;
// }
// let lettersRegexp = /^[A-Za-z]+$/;
// let numberRegexp = /^[0-9]+$/;
// class LettersOnlyValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return lettersRegexp.test(s);
//     }
// }
// class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }

//Vamos criar um namespace da interface e classe anterior com o objetivo de exportar para o nosso outro arquivo namespace2 possa
//utilizar;

// namespace ValidationX {
//     export interface StringValidator {
//       isAcceptable(s: string): boolean;
//     }
//     const lettersRegexp = /^[A-Za-z]+$/;
//     const numberRegexp = /^[0-9]+$/;
//     export class LettersOnlyValidator implements StringValidator {
//       isAcceptable(s: string) {
//         return lettersRegexp.test(s);
//       }
//     }
//     export class ZipCodeValidator implements StringValidator {
//       isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//       }
//     }
// }

//Observe que utilizamos a palavra reservada export para definir que o codigo fora do escopo de namespace possa ser acessado,
//que é um modulo interno;