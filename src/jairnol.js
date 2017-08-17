/*
- src, source o lib, será el código fuente de nuestra librería
- Este  no será el código distribuible y no será compatible con todos los navegadores y entornos
- Queremos exportar la function jairnol para que el Readme la importe
*/
export default function jairnol (str) {
  let translation = str
  //Si la palabra termina en "ar" se le quitan los dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0,-2)
  }
  //Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toUpperCase().startsWith('Z')) {
    translation += 'pe'
  }
  //Si la palabra traducida tiene 10 o más letras,
  //Se debe partir a la mitad y unir con guión
  const length = translation.length
  if (length >=10) {
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHalf} - ${secondHalf}`
  }
  //Si la palabra es un políndromo, es decir, se lee igual de atras hacia
  //delante alternar sus caracteres de mayúscula a minúscula
  const reverse = (str) => str.split('').reverse().join('')
  function minMay (str){
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++)
    {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }
  return translation
}
console.log(jairnol('programar'))//program
console.log(jairnol('Zorro'))//zorrope
console.log(jairnol('Zarpar'))//Zarparpe
console.log(jairnol('Parangacutimiricuaro'))//Parangacut-imiricuaro
console.log(jairnol('sometemos'))//SoMeTeMoS
