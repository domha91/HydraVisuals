
// Initialise p5
p1 = new P5() // {width: window.innerWidth, height:window.innerHeight, mode: 'P2D'}

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
