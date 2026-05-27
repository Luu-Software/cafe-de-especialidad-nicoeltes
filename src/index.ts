import { preguntar } from './lib/consola.ts';

let totalTexto: string = preguntar('Total de la cuenta: ');
let esEstudiante: string = preguntar('¿Son estudiantes de ORT? si/no: ');
let personasTexto: string = preguntar('Dividir la cuenta entre: ');

let totalPorPersona: number = Number(totalTexto) / Number(personasTexto) ;

if (esEstudiante === "si"){
    totalPorPersona = totalPorPersona * 0.9;
}

console.log(`Total por persona: $${totalPorPersona}`);
