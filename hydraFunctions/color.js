posterize
shift
invert
contrast
brightness
luma
thresh
color
saturate
hue
colorama

POSTERIZE
posterize( bins: 3, gamma: 0.6 )

// static gradient posterized, varying bins
gradient(0).posterize( [1, 5, 15, 30] , 0.5 ).out(o0)

// static gradient posterized, varying gamma
gradient(0).posterize( 3, [0.1, 0.5, 1.0, 2.0] ).out(o0)

// posterize (top)
// compare with pixelate (bottom)
osc().posterize(3,1)
  .layer(osc().pixelate(16,1)
    .mask(shape(2,0.5,0.001).scrollY(-0.25)))
  .out(o0)

SHIFT
shift( r: 0.5, g, b, a )

INVERT
invert( amount: 1 )

solid(1,1,1).invert([0,1]).out(o0)

osc(4,0.1,2).invert().luma().invert()
  .layer(osc(4,0.1,2).luma()
         .mask(shape(2,0.5).scrollY(-0.25))).out(o0)

CONTRAST
contrast( amount: 1.6 )

// 20Hz oscillator with contrast interpolating between 0.0-5.0
osc(20).contrast( ({time}) => Math.sin(time) * 5 ).out(o0)

BRIGHTNESS
brightness( amount: 0.4 )

osc(20,0,2)
  .brightness( ({time}) => Math.sin(time) )
  .out(o0)

// scaling noise value to 0-1
noise().brightness(1).color(0.5,0.5,0.5).out(o0)

LUMA
luma( threshold: 0.5, tolerance: 0.1 )

// default
osc(10,0,1).luma(0.5,0.1).out(o0)

osc(10,0,[0,0.5,1,2]).luma([0.1,0.25,0.75,1].fast(0.25),0.1).out(o0)

// luma is transparent
// compare with thresh
osc(30).layer(osc(15).rotate(1).luma()).out(o0)

THRESH
thresh( threshold: 0.5, tolerance: 0.04 )

// default
noise(3,0.1).thresh(0.5,0.04).out(o0)

noise(3,0.1)
  .thresh( ({time})=>Math.sin(time/2) , [0.04,0.25,0.75,1].fast(0.25) )
  .out(o0)

// thresh is *not* transparent
// compare with luma
osc(30).layer(osc(15).rotate(1).thresh()).out(o0)

COLOR
color( r: 1, g: 1, b: 1, a: 1 )

osc().color(1,0,3).out(o0)

SATURATE
saturate( amount: 2 )

osc(10,0,1).saturate( ({time}) => Math.sin(time) * 10 ).out(o0)

HUE
hue( hue: 0.4 )

osc(30,0.1,1).hue(({time}) => Math.sin(time)).out(o0)

COLORAMA
colorama( amount: 0.005 )

// 20Hz oscillator source
// color sequence of Red, Green, Blue, White, Black
// colorama sequence of 0.005, 0.5, 1.0 at 1/8 speed
// output to buffer o0
osc(20)
  .color([1,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0])
  .colorama([0.005,0.33,0.66,1.0].fast(0.125))
  .out(o0)

// negative value is less harsh
osc(30,0.1,1).colorama(-0.1).out(o0)
