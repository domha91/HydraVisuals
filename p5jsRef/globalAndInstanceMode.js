GLOBAL AND INSTANCE MODE
https://github.com/processing/P5.js/wiki/Global-and-instance-mode
// Until now, we've been declaring everything in the "global" context (note the global
// context is actually the window object). In p5 lingo, we refer to this as "global mode".
let x = 100;
let y = 100;

function setup() {
  createCanvas(200,200);
}

function draw() {
  background(0);
  fill(255);
  ellipse(x,y,50,50);
}

// While this is convenient (and friendlier) it's important to note that this can
// lead to problems and confusion down the road when mixing other JS libraries or trying
// to embed multiple p5 sketches on the same page. A safer, more advanced methodology
// is to create a p5 sketch as an object "instance". This "namespaces" your sketch
// under a particular variable. In other words, we'll have an object (called say myp5)
// that stores a reference to a p5 sketch. Anything related to that sketch can therefore
// be called with dot syntax, i.e. myp5.background(0);.
// This is referred to as p5 "instance mode".

// The syntax for instance mode looks like the following
// (the sketch below is identical to the above example):

const s = ( sketch ) => {

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};

let myp5 = new p5(s);

// The above might seem a bit confusing, but let's break it down into smaller elements.

let myp5 = new p5(s);

// This should make sense to us. We're making a new object called myp5
// (that's our made up variable name). We call it via constructor new p5().
// The code for function p5() can be found in the p5.js source.
// But we're not just making a "blank" sketch, we're passing in an argument
// called s that will serve as the basis for the code of that sketch.

// And what is s?

const s = ( sketch ) => {

};

// s the seed that will spawn our p5 sketch. It is a function that takes one argument,
// a sketch object and attaches properties to that sketch. The properties are things
// we will need for a p5 sketch, functions like setup() and draw().

const s = ( sketch ) => {
  sketch.setup = () => {
  };
};

// Those functions have their own context, yet have access to anything declared around them as well.

const s = ( sketch ) => {
  let x = 100;
  let y = 100;

  sketch.draw = function() {   // draw() is an inner function, a "closure"
    sketch.rect(x,y,50,50);    // draw() uses variables (x,y) declared in the parent function s
  };
};

// This is what is known as a closure, one of the more powerful features of
// functional programming languages like JavaScript.

// You can think of the purpose of s as initializing everything we need for a p5 sketch.
// Once it's all ready to go, it's passed to the new p5() constructor and our variable
// myp5 takes over keeping track of everything that was originally attached to the sketch argument.
// Since myp5 is p5 object instance (and therefore inherits everything we need from the p5 prototype),
// all of the stuff we wrote into sketch will work.

ANONYMOUS INSTANCE
// As we've seen with JavaScript, anytime we pass a function into another function is
// an opportunity to declare that function anonymously. Here is how we wrote it above.

const s = ( sketch ) => {
   // empty
};
let myp5 = new p5(s);

// And now without a separate variable holding onto s for us.

let myp5 = new p5(( sketch ) => {
  // empty
});

// Now with everything filled in, it looks like:

let myp5 = new p5(( sketch ) => {

  let x = 100;
  let y = 100;

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
});

// If you find this syntax confusing, congratulations you are a human being.
// Yes, less typing is involved, but for clarity, you'll see all of the examples
// written the slightly more long-form way.

SPECIFYING PARENT HTML ELEMENT
// When creating a p5 instance, you can specify a second argument which acts
// the parent for all elements created by the sketch.
// For example, let's say you have:

<body>
  <div id = "p5sketch">
    <!-- p5 instance will be created here -->
  </div>

  <p>Some other HTML</p>
</body>

// You can now say:

let myp5 = new p5(s, document.getElementById('p5sketch'));

// And all elements will be created inside that div.

// Here document.getElementById is just a function that takes an id and returns
// the element with that id.

// Writing all that every time would be tedious, so the second argument
// can also be just an id:

let myp5 = new p5(s, 'p5sketch');

// Virtually always the second, short form is good enough. The long form could
// be necessary if you wanted to use a loop to create more than one p5 instance.

WHEN IS GLOBAL MODE ASSUMED?
// When the document is loaded, p5 checks if at least one of window.setup and window.draw 
// is defined as a function.
// If they are, new p5(); will be called, which launches p5 in global mode.
