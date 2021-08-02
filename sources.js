// gradient( speed )
//
// speed :: float (default x)
// gradient sequence at speeds of 1, 2 & 4
gradient([1,2,4]).out(o0)

// noise( scale, offset )
//
// scale :: int (default 10.0)
// offset :: float (default 0.1)
// noise interpolating between different scales and offsets
noise( ({time}) => Math.sin(time/10)*50 , ({time}) => Math.sin(time/2)/500 )
    .out(o0)

// osc( frequency, sync, offset )
//
// frequency :: float (default 60.0)
// sync :: float (default 0.1)
// offset :: float (default 0.0)
// frequency
osc( [1,10,50,100,250,500].fast(2) ).out(o0)

// frequency 2
osc( ({time}) => Math.sin(time/10) * 100 ).out(o0)

// sync
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).out(o0)

// offset
osc(10,0.1, ({time}) => Math.sin(time/10) * 100 ).out(o0)

// .out( buffer )
//
// buffer
// osc: o0, o1, o2, o3
// src: s0, s1, s2, s3
// output four oscillators to different buffers
// and then modulate them together
osc( [1,10,50,100,250,500].fast(2) ).kaleid(20).out(o0) // frequency
osc( ({time}) => Math.sin(time/10) * 100 ).kaleid(19).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).kaleid(21).out(o2) // sync
osc(10,0.1, ({time}) => Math.sin(time/10) * 1 ) // offset
  .modulate(o1,0.05)
  .modulate(o2,0.05)
  .modulate(o3,0.05)
  .kaleid(20)
  .add(noise(3,10))
  .out(o3)
render(o3)

// render( buffer )
//
// buffer: buffer (default o0)
osc( [1,10,50,100,250,500].fast(2) ).out(o0) // frequency
osc( ({time}) => Math.sin(time/10) * 100 ).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).out(o2) // sync
osc(10,0.1, ({time}) => Math.sin(time/10) * 100 ).out(o3) // offset

render(o0) // change to o1, o2, or o3

// see all four buffers at once
osc( [1,10,50,100,250,500].fast(2) ).out(o0) // frequency
osc( ({time}) => Math.sin(time/10) * 100 ).out(o1) // frequency 2
osc( 10, [-10,-1,-0.1,0,0.1,1,10], 0 ).out(o2) // sync
osc(10,0.1, ({time}) => Math.sin(time/10) * 100 ).out(o3) // offset
render()

// shape( sides, radius, smoothing)
//
// sides :: int (default 3.0)
// radius :: float (default 0.3)
// smoothing :: float (default 0.01)
shape( sides, radius, smoothing)

sides :: int (default 3.0)
radius :: float (default 0.3)
smoothing :: float (default 0.01)

// solid( r, g, b, a )
//
// r :: float (default 0.0)
// g :: float (default 0.0)
// b :: float (default 0.0)
// a :: float (default 1.0)
// cycling through red, green and blue
solid([1,0,0],[0,1,0],[0,0,1],1).out(o0)

// src( input )
//
// input :: input (examples: o0, s1)
// See hydra-examples repository

// voronoi
// voronoi( scale, speed, blending )
//
// scale :: float (default 5)
// speed :: float (default 0.3)
// blending :: float (default 0.3)
// default
voronoi(5,0.3,0.3).out(o0)

// fireflies
voronoi(25,2,10).color(1,1,0).brightness(0.15).out(o0)
