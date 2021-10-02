modulateRepeat
modulateRepeatX
modulateRepeatY
modulateKaleid
modulateScrollX
modulateScrollY
modulate
modulateScale
modulatePixelate
modulateRotate
modulateHue

MODULATEREPEAT
modulateRepeat( color, repeatX: 3, repeatY: 3, offsetX: 0.5, offsetY: 0.5 )

// default
shape(4,0.9)
  .mult(osc(3,0.5,1))
  .modulateRepeat(osc(10), 3.0, 3.0, 0.5, 0.5)
  .out(o0)

MODULATEREPEATX
modulateRepeatX( color, reps: 3, offset: 0.5 )

shape(4,0.9)
  .mult(osc(4,0.25,1))
  .modulateRepeatX(osc(10), 5.0, ({time}) => Math.sin(time) * 5)
  .scale(1,0.5,0.05)
  .out(o0)

MODULATEREPEATY
modulateRepeatY( color, reps: 3, offset: 0.5 )

// morphing grid
shape(4,0.9)
  .mult(osc(4,0.25,1))
  .modulateRepeatY(osc(10), 5.0, ({time}) => Math.sin(time) * 5)
  .scale(1,0.5,0.05)
  .out(o0)

MODULATEKALEID
modulateKaleid( color, nSides: 4 )

osc(9,-0.1,0.1)
.modulateKaleid(osc(11,0.5,0),50)
.scale(0.1,0.3)
.modulate(noise(5,0.1))
.mult(solid(1,1,0.3))
.out(o0)

osc(10,0.1,2)
.modulateKaleid(osc(16).kaleid(999),1)
.out(o0)

MODULATESCROLLX
modulateScrollX( color, scrollX: 0.5, speed )

// default
voronoi(25,0,0)
  .modulateScrollX(osc(10),0.5,0)
  .out(o0)

// different scroll and speed
voronoi(25,0,0)
  .modulateScrollX(osc(10),0.5,0.25)
  .out(o0)

MODULATESCROLLY
modulateScrollY( color, scrollY: 0.5, speed )

// default
voronoi(25,0,0)
  .modulateScrollY(osc(10),0.5,0)
  .out(o0)

// different scroll and speed
voronoi(25,0,0)
  .modulateScrollY(osc(10),0.5,0.25)
  .out(o0)

MODULATE
modulate( color, amount: 0.1 )

// chocolate whirlpool
voronoi()
  .color(0.9,0.25,0.15)
  .rotate(({time})=>(time%360)/2)
  .modulate(osc(25,0.1,0.5)
              .kaleid(50)
              .scale(({time})=>Math.sin(time*1)*0.5+1)
              .modulate(noise(0.6,0.5)),
              0.5)
  .out(o0)

// color remapping
osc(3,0,2)
  .modulate(noise().add(gradient(),-1),1)
  .out(o0)

MODULATESCALE
modulateScale( color, multiple: 1, offset: 1 )

// cosmic radiation
gradient(5).repeat(50,50).kaleid([3,5,7,9].fast(0.5))
  .modulateScale(osc(4,-0.5,0).kaleid(50).scale(0.5),15,0)
  .out(o0)

MODULATEPIXELATE
modulatePixelate( color, multiple: 10, offset: 3 )

// what lies beneath
voronoi(10,1,5).brightness(()=>Math.random()*0.15)
.modulatePixelate(noise(25,0.5),100)
.out(o0)

noise(3).modulatePixelate(noise(3).pixelate(8,8),1024,8)
  .out(o0)

MODULATEROTATE
modulateRotate( color, multiple: 1, offset )

// wormhole
voronoi(100,3,5)
  .modulateRotate(osc(1,0.5,0).kaleid(50).scale(0.5),15,0)
  .mult(osc(50,-0.1,8).kaleid(9))
  .out(o0)

osc().modulateRotate(shape(999,0.3,0.5),1.57).out(o0)

MODULATEHUE
modulateHue( color, amount: 1 )

src(o0)
  .modulateHue(src(o0).scale(1.01),1)
  .layer(osc(4,0.5,2).mask(shape(4,0.5,0.001)))
  .out(o0)
