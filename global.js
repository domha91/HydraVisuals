// mouse
// mouse
//
// .x :: x position of mouse
// .y :: y position of mouse
// Example
// Control the oscillator frequency with the mouse position:
osc(() => mouse.x).out(o0)

// time
// time
//
// time :: the current time
// Example
// Control the oscillator using a sine wave based on the current time:
osc( ({time}) => Math.sin(time) ).out(o0)
