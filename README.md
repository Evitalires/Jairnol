# Jañol

`Jañol` es un idioma  inventado como ejercicio para el [curso de fundamentos de
JavaScript](url) de [Platzi](url), el mejor lugar para la educación online efectiva

## Descripción

- Si la palabra termina en "ar" se le quitan los dos caracteres

- Si la palabra inicia con Z, se le añade "pe" al final

- Si la palabra traducida tiene 10 o más letras, Se debe partir a la mitad y unir con guión

- Si la palabra es un políndromo, es decir, se lee igual de atras hacia delante alternar sus caracteres de mayúscula a minúscula

## Instalación
```
npm install jairnol
```

## Uso
```
import jairnol from 'jairnol'
console.log(jairnol('programar'))//program
console.log(jairnol('Zorro'))//zorrope
console.log(jairnol('Zarpar'))//Zarparpe
console.log(jairnol('Parangacutimiricuaro'))//Parangacut-imiricuaro
console.log(jairnol('sometemos'))//SoMeTeMoS
```
## Créditos
- [Jair Escobar](https://twitter.com/lifszyc)

## License
- [MIT](https://opensource.org/licenses/MIT)
