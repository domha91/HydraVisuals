osc().modulate(noise(3).pixelate()).colorama(.01).out()

noise(95).modulate(voronoi(3)).out()

osc(60,0.4,9).layer(osc(60,.02,1).rotate(.002)).out()

osc(60,0.1,0).layer(osc(60,0.1,0).rotate(.2)).out()
