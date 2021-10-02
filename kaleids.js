a.show()
a.setBins(6)
a.setSmooth(0.8)
a.fft[0]

// test image
img = document.createElement('img')
img.src = atom.project.getPaths()[0]+'/assets/auxerreP6.jpg'

s0.init({src:img})
src(s0).rotate(56,0.9).modulateKaleid(osc(11,0.5,0),50).saturate().hue(()=>(a.fft[3]/4)).out(o0)

src(s0).kaleid(50+(() => a.fft[0])).out(o0)

s1.init({src: vid})
src(s1)
  .rotate(0, 0.2)
  .repeat(5, 3, 0.5)
  .saturate(3.0)
  .color(1.0, () => 2 + a.fft[3], -1)
  .scrollX(0, -0.1)
  .diff(osc(5, 0.3, 2))
.kaleid(82)
  .diff(src(s0).saturate().hue(()=>(a.fft[3])))
  .out()
