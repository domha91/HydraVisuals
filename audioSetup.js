// show audio fft (fourier transform) analysis using the default microphone
a.show()
// hide audio fft
a.hide()

// set number of frequency ranges to detect
a.setBins(6)

//  smooth the fft values (make more or less sensitive to rapid changes)
// Values are between 0 and 1. 0 is most senstive 1 is most smooth
a.setSmooth(0.96)

// change cutoff for sound detection
// changing the cutoff value changes the minimum value detected.
a.setCutoff(2)

// change the range of values detected
a.setScale(3)

// You can also individually change the cutoff and scale of each frequency range
// change the cutoff for the first frequency band(low sounds)
a.settings[0].cutoff = 8
// change the scale for the first frequency bin
a.settings[0].scale = 10

// Functions to use different freq bands of the fft
() => a.fft[0]
() => a.fft[1]
() => a.fft[2]
() => a.fft[3]
() => a.fft[4]
() => a.fft[5]
() => a.fft[6]
