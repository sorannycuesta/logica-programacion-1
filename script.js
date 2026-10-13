// EJERCICIO LOGICA DE PROGRAMACION

let num1 = Number(prompt("Ingrese primer numero")); 
let num2 = Number(prompt("Ingrese segundo numero")); 
let num3 = Number(prompt("Ingrese tercer numero")); 

// Declaración de variables para almacenar el orden
let mayor, centro, menor;

if (num1 === num2 && num1 === num3) { 
    console.log("Los números son iguales"); 
} else { 
    // Si num1 es el mayor 
    if (num1 >= num2 && num1 >= num3) { 
        mayor = num1; 
        if (num2 >= num3) { 
            centro = num2; 
            menor = num3; 
        } else { 
            centro = num3; 
            menor = num2; 
        } 
    } 
    // Si num2 es el mayor 
    else if (num2 >= num1 && num2 >= num3) { 
        mayor = num2; 
        if (num1 >= num3) { 
            centro = num1; 
            menor = num3; 
        } else { 
            centro = num3; 
            menor = num1; 
        } 
    } 
    // Si num3 es el mayor 
    else { 
        mayor = num3; 
        if (num1 >= num2) { 
            centro = num1; 
            menor = num2; 
        } else { 
            centro = num2; 
            menor = num1; 
        } 
    } 

    // Impresión en consola 
    console.log("Orden de mayor a menor: " + mayor + ", " + centro + ", " + menor); 
    console.log("Orden de menor a mayor: " + menor + ", " + centro + ", " + mayor); 
}
