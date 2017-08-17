const expect = require('chai').expect
const jairnol = require('..').default
describe('#jairnol', function() {
  it('Si la palabra termina en "ar" se le quitan los dos caracteres', function(){
    const translation = jairnol('Programar')
    expect(translation).to.equal('Program')
  })
  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = jairnol('Zorro')
    expect(translation).to.equal('Zorrope')

    const translation2 = jairnol('Zarpar')
    expect(translation).to.equal('Zarparpe')
  })
  it('Si la palabra traducida tiene 10 o más letras,se debe partir a la mitad y unir con guión', function(){
    const translation = jairnol('Parangacutimiricuaro')
    expect(translation).to.equal('Parangacut - imiricuaro')
  })
  it('Si la palabra es un políndromo,alternar sus caracteres de mayúscula a minúscula', function(){
    const translation = jairnol('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })
})
