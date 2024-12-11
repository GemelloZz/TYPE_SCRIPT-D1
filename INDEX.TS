// 1

// number , string , boolean , undefined, null , any

// 2 

// let myname : string = "Gabriele"
// let myage : number = 27
// let isTrue : boolean = true 

// 3
// const greet = (name : string) => {
//     return "ciao" + name
// }

// console.log("Gabriele")

// 4
// const sum = (a: number, b: number) :number => {  
//     return a + b }

// 5 
// const IVA = (a:number ) : number => {
//     return a * 100 % 22

// }
//  6
// const concatenazione = (a:string , b :string ) => {
//     return a.concat(b).length
// }

// 7
// un TypeScript, un type union è un tipo che permette a una variabile di essere uno tra più tipi, separati dal simbolo |

// 8
// let treetype : number | null | undefined = 16

// 9
// type GiornoDellaSettimana = "lunedì" | "martedì" | "mercoledì" | "giovedì" | "venerdì" | "sabato" | "domenica";

// 10
// const numbers: Array<number> = [1, 2, 3];

// 11
// 3const tupla: [string, string, string, number, number] = ["ciao", "mondo", "esempio", 1, 2];

// 12
// interface: Può essere estesa tramite extends. Inoltre, può essere dichiarata più volte e TypeScript le unirà automaticamente (merging)
// type: Può essere esteso solo creando un nuovo tipo combinato con & (intersection type), ma non può essere dichiarato più volte per fare il merging.

// 13
// interface Persona {
//     firstname: string;
//     lastname: string;
//     age: number;
//   }

// 14

// interface Utente {
//     email: string;
//     telefono?: string;
//   }
  
// 15
// interface Studente {
//     nome: string;
//     voto: number;
//   }
  
//   const studenti: Studente[] = [
//     { nome: "Mario", voto: 90 },
    
//     { nome: "Giulia", voto: 85 },
//     { nome: "Luca", voto: 88 }
//   ];
// 16 
// interface Veicolo {
//     marca: string;
//     modello: string;
//     anno: number;
//   }
  
//   interface Auto extends Veicolo {
//     numeroPorte: number;
//     tipoAlimentazione: string;
//   }
  
// 17 
// const miaAuto: Auto = {
//     marca: "BMW",
//     modello: "Serie 3",
//     anno: 2022,
//     numeroPorte: 4,
//     tipoAlimentazione: "Diesel"
//   };
  
// 18
// In TypeScript, i Generics sono un potente meccanismo che permette di creare funzioni, classi e interfacce che lavorano con tipi dinamici, senza dover specificare un tipo concreto. In altre parole, i Generics consentono di scrivere codice riutilizzabile e 
// flessibile che può operare su vari tipi di dati mantenendo al contempo il controllo sui tipi durante la compilazione
// 19
// Sì, in TypeScript è possibile avere più tipi generici in un'interfaccia. 
// Puoi definire diversi tipi generici separandoli con virgole. Ogni tipo generico può essere utilizzato in modo indipendente all'interno dell'interfaccia

// 20 
// interface RispostaAPI<T> {
//     success: boolean;
//     message: string;
//     data: T;
//   }
//   const rispostaStringa: RispostaAPI<string> = {
//     success: true,
//     message: "Operazione riuscita",
//     data: "Ecco i tuoi dati"
//   };
  