# Desarrollador Web con React Js - Argentina Programa 4 - Universidad Tecnológica Nacional

## Clase 2 - Ejercitación

### Javascript - ECMAScript 6

#### Ejercicio 1

Tengo desarrollada la siguiente función en javascript

```javascript
function suma (a,b,callback){
  let c = a +b;
  callback( );
}
```

¿Que es el tercer parámetro recibido?

El tercer parámetro recibido es una función sin algún valor como argumento

¿En que casos es obligatorio desarrollar este tipo de funciones?

Se utilizan para controlar el flujo de ejecución, especialmente en situaciones donde algunas operaciones son asincrónicas, como las operaciones de lectura de archivos, solicitudes a servidores. Al pasar una función como callback, se asegura de que ciertas operaciones se realicen solo después de que otras operaciones hayan terminado.

Realizar un llamado a la función de ejemplo.

```javascript
suma(2, 3, miCallback);
```

#### Ejercicio 2

Desarrollador una calculadora que tenga:

+ 2 campos inputs para los operandos
+ 4 botones de operadores básicos (suma, resta, multiplicación, división)

Al realizar la cuenta se deberá actualizar el campo resultado
