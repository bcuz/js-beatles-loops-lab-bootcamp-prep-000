function theBeatlesPlay(artist, tool) {
  arr = []

  for (var i=0; i<artist.length; i++) {
    arr.push(`${artist} plays ${tool}`)
}

return arr
}
