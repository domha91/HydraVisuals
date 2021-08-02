a.show()
a.setBins(6)
a.setSmooth(0.8)
a.fft[0]

// test image
img = document.createElement('img')
img.src = atom.project.getPaths()[0]+'/assets/pp.jpeg'

s0.init({src:img})
src(s0).rotate(0,0.2).out()


voronoi(5,-0.1,() => 2 + a.fft[3])
.add(osc(1,0,1)).kaleid(21)
.scale(1,1,2).colorama(() => 0.001 + a.fft[0]).out(o1)
src(o1).mult(src(s0).modulateRotate(o1,100), -0.5)
  .out(o0)

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
