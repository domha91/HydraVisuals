
noise
voronoi
osc
shape
gradient
src
solid

NOISE
noise( scale: 10, offset: 0.1 )

// default
noise(10, 0.1).out(o0)

// noise interpolating between different scales and offsets
noise( ({time}) => Math.sin(time/10)*50 , ({time}) => Math.sin(time/2)/500 )
.out(o0)

VORONOI
voronoi( scale: 5, speed: 0.3, blending: 0.3 )

// default
voronoi(5,0.3,0.3).out(o0)

// fireflies
voronoi(25,2,10).color(1,1,0).brightness(0.15).out(o0)

OSC
osc( frequency: 60, sync: 0.1, offset )

// frequency
osc( [1,10,50,100,250,500].fast(2) ).out(o0)

// frequency 2
osc( ({time}) => Math.sin(time/10) * 100 ).out(o0)

// sync
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).out(o0)

// offset
osc(10,0.1, ({time}) => Math.sin(time/10) * 100 ).out(o0)

SHAPE
shape( sides: 3, radius: 0.3, smoothing: 0.01 )

// triangle
shape(3,0.5,0.001).out(o0)

// ellipse
shape(100,0.5,0.001).out(o0)

// inverting blurry circle
shape(100,0.01,1).invert(({time})=>Math.sin(time)*2).out(o0)

// a... rainbow ball?
shape(5,0.5,0.1).repeat(19,19)
  .mult(osc(10,1,2))
  .rotate( ({time}) => time%360 )
  .scrollX(1,-0.25)
  .mult(shape(15,0.3,0.01)
  .rotate( ({time}) => time%360 )
  .scrollX(1,-0.25))
  .out(o0)

GRADIENT
gradient( speed )

// gradient sequence at speeds of 1, 2 & 4
gradient([1,2,4]).out(o0)

// saw oscillator
gradient(0).r().repeat(16,1).scrollX(0,0.1).out(o0)

SRC
src( tex )

SOLID
solid( r, g, b, a: 1 )

// cycling through red, green and blue
solid([1,0,0],[0,1,0],[0,0,1],1).out(o0)
