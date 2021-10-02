
p1 = new P5({mode: 'WEBGL'})
s0.init({src: p1.canvas})
src(s0).scrollY(-0.1,.001).scrollY(0.1,.001).out(o0)

// Light tunnel
shape(10,0.1,1).add(shape(7,0.1,.001)).scrollY(-0.3,-.1).scrollX(-0.3,-.1).kaleid(7).rotate(10,.1)
.out(o1)

render()

p1.draw = () => {
  p1.background(0)
  let crossHeight = innerHeight/3;
  let crossWidth = innerWidth/7;
  let crossBreadth = innerWidth/30;
  let crossOffset = -60;
  // p1.rotateX(90);
  // p1.rotateY(time/2);
  p1.box(crossBreadth, crossHeight );
  p1.translate(0, crossOffset, 137);
  p1.box(crossWidth,crossBreadth-5);
  // let locX = p1.mouseX - innerWidth/2;
  // let locY = p1.mouseY - innerHeight/2;
  // p1.pointLight(255, 255, 255, locX, locY, 200);
}


p1.clear()
p1.remove()
