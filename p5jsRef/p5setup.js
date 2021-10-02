// Note that P5 runs in instance mode, so all functions need to start with the variable where P5 was initialized (in this case p1)
// explanation of instance mode: https://github.com/processing/P5.js/wiki/Global-and-instance-mode
// Initialise p5
p1 = new P5() // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

p1 = new P5({mode: 'WEBGL' })

// clear p5
p1.clear()

// If an error is thrown within the draw loop, sometimes the P5 canvas will stop working. You can remove it and then reinit.
p1.remove() // remove canvas

p1 = new P5() // start again

// To use P5 as an input to hydra, simply use the canvas as a source:
s0.init({src: p1.canvas})

// By default, the P5 canvas is rendered on top of the hydra buffers. You can hide it by calling:
p1.hide()

p1.show() // show the canvas

src(s0).repeat().out()
