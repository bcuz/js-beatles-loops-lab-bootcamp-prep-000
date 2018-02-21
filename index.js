function theBeatlesPlay(artist, tool) {
  arr = []

  for (var i=0; i<artist.length; i++) {
    arr.push(`${artist[i]} plays ${tool[i]}`)
}

return arr
}
