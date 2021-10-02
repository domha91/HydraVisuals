rotate
scale
pixelate
repeat
repeatX
repeatY
kaleid
scrollX
scrollY

ROTATE
rotate( angle: 10, speed )

osc(50).rotate( ({time}) => time%360 ).out(o0)

osc(10,1,1)
  .rotate( ({time}) => time%360, ({time}) => Math.sin(time*0.1)*0.05 )
  .out(o0)

SCALE
scale( amount: 1.5, xMult: 1, yMult: 1, offsetX: 0.5, offsetY: 0.5 )

// default
shape().scale(1.5,1,1).out()

shape().scale(1.5,[0.25,0.5,0.75,1].fast(0.25),[3,2,1])
  .invert([0,1].fast(0.25))
  .kaleid(5)
  .kaleid(12)
  .scale( ({time})=>Math.sin(time/5)*0.5 )
  .rotate(1,1)
  .out(o0)

PIXELATE
pixelate( pixelX: 20, pixelY: 20 )

// default
noise().pixelate(20,20).out(o0)

noise().pixelate(2000,1).out(o0)

noise()
  .mult(osc(10,0.25,1))
  .scrollY(1,0.25)
  .pixelate([100,40,20,70].fast(0.25))
  .modulateRotate(src(o0).scale(0.5),0.125)
  .diff(src(o0).rotate([-0.05,0.05].fast(0.125)))
    .out(o0)

REPEAT
repeat( repeatX: 3, repeatY: 3, offsetX, offsetY )

// default
shape().repeat(3.0, 3.0, 0.0, 0.0).out()

// dogtooth factory
shape(1.25,0.5,0.25)
  .repeat(3, 3)
  .scale(2)
  .repeat(5, 5, ({time}) => Math.sin(time), ({time}) => Math.sin(time/2))
  .out(o0)

REPEATX
repeatX( reps: 3, offset )

// default
shape().repeatX(3.0, 0.0).out()

osc(5,0,1)
  .rotate(1.57)
  .repeatX([1,2,5,10], ({time}) => Math.sin(time))
  .out()

REPEATY
repeatY( reps: 3, offset )

// default
shape().repeatY(3.0, 0.0).out()

osc(5,0,1)
  .repeatY([1,2,5,10], ({time}) => Math.sin(time))
  .out()

KALEID
kaleid( nSides: 4 )

osc(25,-0.1,0.5).kaleid(50).out(o0)

osc(25,-0.1,0.5).kaleid(4).kaleid(4).out(o0)

SCROLLX
scrollX( scrollX: 0.5, speed )

// default
osc(10,0,1).scrollX(0.5,0).out()

// x position
osc(10,0,1).scrollX([0,0.25,0.5,0.75,1].fast(4),0).out()

// scroll speed
gradient(1).scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 ).out()

gradient(0.125)
  .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
  .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
  .pixelate([5,2,10],[15,8])
  .scale(0.15)
  .modulate(noise(1,0.25))
  .out()

SCROLLY
scrollY( scrollY: 0.5, speed )

// default
osc(10,0,1).scrollY(0.5,0).out()

// y position
osc(10,0,1).scrollY([0,0.25,0.5,0.75,1].fast(4),0).out()

// scroll speed
gradient(1).scrollY(0, ({time}) => Math.sin(time*0.05)*0.05 ).out()

gradient(0.125)
  .scrollX(0, ({time}) => Math.sin(time*0.05)*0.05 )
  .scrollY(0, ({time}) => Math.sin(time*0.01)*-0.07 )
  .pixelate([5,2,10],[15,8])
  .scale(0.15)
  .modulate(noise(1,0.25))
  .out()
