
//Hydra inside p5 inside Hydra
//by: ritchse
//github.com/ritchse
//日本語: instagram.com/ritchse_jp

p1 = new P5({mode: 'WEBGL'})

s0.init({src: p1.canvas})
p1.hide()

osc(24,.05,1.4).luma(.7,-.01)
	.modulate(src(o0)).scale(1.02)
  	.layer(s0)
  	.out()

// hc = document.getElementById('hydra-canvas')
hc = document.querySelector('.hydra canvas')
hg = p1.createGraphics(hc.width, hc.height)

p1.strokeWeight(0)

p1.draw = () => {
    p1.background(0, 0, 0, 0)
    hg.clear()
    hg.drawingContext.drawImage(hc, 0, 0, hg.width, hg.height)
    p1.texture(hg)
    p1.rotateX(time/3)
  	p1.rotateY(time/2)
    p1.torus(innerHeight/4,innerHeight/8,16,12)
    p1.rotateX(-30)
    p1.rotateY(60)
  	p1.torus(innerHeight/4,innerHeight/8,16,12)
    p1.rotateX(45)
    p1.rotateY(45)
    p1.torus(innerHeight/4,innerHeight/8,16,12)
}
