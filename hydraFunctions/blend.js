add
layer
blend
mult
diff
mask

ADD
add( color, amount: 1 )

shape().scale(0.5).add(shape(4),[0,0.25,0.5,0.75,1]).out()

osc(9,0.1,1).add(osc(13,0.5,5)).out()

LAYER
layer( color )

solid(1,0,0,1).layer(shape(4).color(0,1,0,({time})=>Math.sin(time*2))).out()

osc(30).layer(osc(15).rotate(1).luma()).out(o0)

BLEND
blend( color, amount: 0.5 )

shape().scale(0.5).blend(shape(4),[0,0.25,0.5,0.75,1]).out()

osc(9,0.1,1).blend(osc(13,0.5,5)).out()

// motion-blur like feedback
osc().thresh().blend(o0,0.9).out(o0)

MULT
mult( color, amount: 1 )

osc(9,0.1,2).mult(osc(13,0.5,5)).out()

// mult is *not* transparent
// compare with mask
osc()
  .layer(osc(30,0.1,2).mult(shape(4)))
  .out(o0)

DIFF
diff( color )

osc(9,0.1,1).diff(osc(13,0.5,5)).out()

osc(1,1,2)
  .diff(shape(6,1.1,0.01)
        .scale(({time})=>Math.sin(time)*0.05 + 0.9)
        .kaleid(15)
        .rotate(({time})=>time%360))
  .out()

MASK
mask( color )

// default
gradient(5).mask(voronoi(),3,0.5).invert([0,1]).out(o0)

// mask is transparent
// compare with mult
osc()
  .layer(osc(30,0.1,2).mask(shape(4)))
  .out(o0)

// algae pulse
osc(10,-0.25,1).color(0,0,1).saturate(2).kaleid(50)
  .mask(noise(25,2).modulateScale(noise(0.25,0.05)))
  .modulateScale(osc(6,-0.5,2).kaleid(50))
  .mult(osc(3,-0.25,2).kaleid(50))
  .scale(0.5,0.5,0.75)
  .out(o0)
