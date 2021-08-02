

// test image
img = document.createElement('img')
img.src = atom.project.getPaths()[0]+'/assets/pp.jpeg'

s0.init({src:img})
src(s0).rotate(0,0.2).out()

vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0]+'/assets/test.webm'

s0.init({src:vid})
src(s0).out()

// create an html5 video element
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
// get path to video using getPaths() representing current directory in atom
vid.src = atom.project.getPaths()[0]+'/assets/jelly.webm'

s1.init({src: vid})
src(s1)
  .rotate(0, 0.2)
  .repeat(5, 3, 0.5)
  .saturate(3.0)
//  .color(1.0, 0.7, -1)
  .scrollX(0, -0.1)
  .diff(osc(2, 0.3, 2))
//  .kaleid(3)
  .diff(src(s0).saturate().hue(()=>(a.fft[3])))
  .out()
