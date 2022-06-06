let cantidad: number = Number(prompt("Ingrese la cantidad de personas"));
let nombres: string[] = new Array(cantidad);
let indice: number;
for (indice = 0; indice < cantidad; indice++) {
  nombres[indice] = prompt(
    `Ingrese el nombre a guardar en la posicion ${indice}`
  );
}
for (indice = 0; indice < cantidad; indice++) {
  console.log(
    `El nombre ${nombres[indice]} se ubica en la posicion ${indice + 1}`
  );
}
