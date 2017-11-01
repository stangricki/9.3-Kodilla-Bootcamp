var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = "triceratops"
var dinosaurUpperCased = dinosaur.toUpperCase()
var textCharsAfter = text.replace("Velociraptor", dinosaurUpperCased)

describe('String chain', function () {
  it('Triceratops is a genius', function () {
    expect(textCharsAfter.slice(0, textCharsAfter.length / 2)).to.be('TRICERATOPS is a genus of herbivorous ceratopsid dinosaur that first app')
  })
});