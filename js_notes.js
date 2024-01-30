// To select an html element in js we write the code -
// document.querySelector()  <-- querySelector is a method available on document object
//            Here document means html document and we are attempting yo choose its elements with
//         the querySelector() method. And inside this method we pass selector names like we use
//       selector names in a CSS file. The selector name is passed as a string within single quote
//e.g - document.querySelector('.messageBox');  <-- If its a classname then selector is (.dot)
//e.g - document.querySelector('#messageBox');  <-- If its a Id then selector is (#hashtag)
//
//When we are selecting a html element itself then we do not use dot or hashtag for selection instead
//we just mention element itself
// e.g - document.querySelector(body);
//
// The DOM, or Document Object Model, is a programming interface for web documents. It represents the
// structure of a document as a tree of objects, where each object corresponds to a part of the document,
// such as elements, attributes, and text. The DOM provides a way for programs and scripts to interact
// with the content, structure, and style of a document dynamically. In the context of web development,
// the term "document" usually refers to an HTML or XML document
//
//DOM allows JS to access HTML elements and styles. Hence DOM is connection point between HTML document
//and JavaScript code. DOM is automatically created by browser as soon as HTML page/document loads.
//DOM manipulation involves modifying the structure, content, or style of a document using JavaScript.
//Developers can use JavaScript to dynamically update and change the elements and attributes within an
//HTML document, responding to user interactions or other events.
//
//In this DOM tree each html element is represented as a NODE/OBJECT and even for the texts present
//in html elements, nodes are created for them too
//
//DOM always start with document object at start of DOM Tree right at the very top and document
//is a special object that we have access to in JavaScript and this object serves as an entry point
// into the DOM. After the document object the first or root child element of document is HTML element
//that we we place at start of HTML document i.e <html>
//                                               <head>   </head>
//                                                </html>
//
// In short we can say that DOM is a complete Head to Toe representation of HTMl documents
//
// Even console.log(document.querySelector('.messageBox')) this line of code is referred to as most
// simple form of DOM manipulation
//
//When we document. select an element its value can't be directly changed instead we need to choose its
//.textContent and on them we need to work, in this we dynamically changes the value on web page
//
//Always remember document. selected elements can't be used for logical operations instead for that we
//store the document. selected elements into some variable and operate over them
// e.g -let currentScore0 = document.getElementById('current--0'); <-- initially currentScore0 was 0
//      let dice = 0;
//      dice++;
//      let currentScore = 0;
//      currentScore += dice;
//      currentScore0.textContent = currentScore;  <-- here currentScore0 becomes 1
//
// When we have multiple dot(.) operators in a javascript code then its execution is done from left to right
//
// As we know for object to access its property we use dot operator
// console.log(document.querySelector('.messageBox').textContent) <-- here we access the textContent
// present in the document object by using the textContent property of the document object
// .textContent is method/property of only document.method_name()
//
// console.log(document.querySelector('.messageBox').value <-- the value property peeps into value inserted
// into input box of html object and accesses that value and this value will be in string form
//.value property is mainly used for from elements like input box,text areas,etc
//
//DOM methods and properties for DOM manipulation are not part of javascript or these methods are not
//defined by JS in anyways. JS at the end of day is just a dialect of ECMAscript specification and all
//DOM related stuffs are not present in specifications of ECMAscript
//Instead DOM methods and properties are part of WEB API's. Web apis are libraries that browsers
// implement which we can access via JavaScript code/script. We can access these libraries via JS
//bcoz these libraries themselves are implemented in JavaScript language
//
//There exists a official DOM specification which is the reason why DOM Manipulation is same in
// all browsers
//
//Besides DOM web api there are ton other web apis like timers,Fetch api,etc
//
//When we want our javascript code to respond to some event or user interaction we use EVENT LISTENER
//Event means anything like mouse click,mouse moving,key press,etc. Using event listener we can wait
//an event to occur and then react to that event
//
// There are many ways to capture events in js but the best event listener is a built-in function called
// addEventListener(event_name,event_response) and into this function we pass two parameters i.e
// event_name and event_response. The event_response can be any function,etc and it is called as
// EVENT HANDLER
//
//click is the event name for mouse click event
//
//If we are developing a web app then in its logic the first thing we need to do is set up handling code
//for null input or no input
//
//Whatever we define inside a click event handler it would always get executed from start on every new
//click
//
//document.querySelector('.number').value = Math.trunc(Math.random() * 20) + 1;
//OR    these both gives random number from 1 to 20
//document.querySelector('.number').value = Math.floor(Math.random() * 20) + 1;
//
//We can manipulate the whole css styling of the page via DOM manipulation
//to manipulate css style of the element we first access it via ".style" property
//e.g - document.querySelector(element_name/classname,etc).style.(css_style_property)
//css_style_property includes .background-color,.flex-direction,.height,etc but in JS such (-) syntax
//is not allowed for such multiple words css properties and for this we use camelCase syntax
//i.e .backgroundColor,.flexDirection,.height,etc
//
//Whenever we are manipulating css style we always specify it in string form even its just a number we
//specify it in string form by using quote marks('')
//If css value is related to some sizing then we mention its size along with its unit together in a string
//
// window.location.reload();  <-- this JS function is equal to pressing the reload button in CHROME
//
//To reset an input form field to empty we do -
//document.querySelector('.classname').value = ``;
//
//To make a div hidden we make its css property display : none
//
//When we use document.querySelector() then if multiple elements have same name then out of all of them
//only the first element gets selected and others get ignored, so to for all the elements with same name
//get selected we use document.querySelectorAll('element_name')
//e.g - const btnOpenModal = document.querySelectorAll('.show-modal'); <-- this selects all elements with same name
//If we console.log(btnOpenModal) <-- this will log all the same element into console as NodeList
//The o/p will be in this form : NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
//Here, NodeList(3) indicates the length of the NodeList, which is 3 in this case.
// NodeList is a JavaScript object that represents a collection of nodes.
// We can say that it works like an array but not exactly an array
//
//To make a css class removed temporarily for a short span i.e for website to exhibit dynamic behavior
//we use .classList property on the element being selected and this classList property has some other
//couple of methods like add(),remove(), etc to add,remove the classes into some element being selected
//Inside the classList property method we are not supposed to mention classname with dot(.) like we mention
//for document.querySelector('.class_name'). Hence dot(.) is to be only used when we are using querySelector
// methods
//
//To hide or reveal some content on webpage then we do it by creating a separate css class named .hidden
//and inside we specify display : none; then we add() or remove() the class dynamically by javascript
//
//btnCloseModal.addEventListener('click', closeModal); <-- here i didn't mention the function as
//closeModal() bcoz i am referring to the function as an object and it is being passed as a
//parameter/argument to another hence we do not the ()parenthesis there
//We pass the function call as an object when the event handler function has just the function call as
//a single line of code
//
//When a keyboard button gets pressed then it is called as KeyPress event
//keypress events are GLOBAL events bcoz they never occurs on one specific element when a keyboard button
//gets pressed. As this is also an event hence we need event listener to listen to these events. We listen
//to these events by document.addEventListener() and not associating with a specific element
//document.addEventListener() <-- by doing this the js code will look for the mentioned event on global
//level on whole page i.e on whole page wherever the event occurs gets listened by this code
//
//For keypress events the event name are : keyup, keydown and keypress
//1) keyup event is triggered when we pressed a key and lift off the finger
//2) keydown event is triggered spontaneously when we first press a key
//3) keypress event gets triggered continuously when we press down a key and held it till we lift the finger
//
//Note - keypress event triggers for character keys only and not triggers for non-character keys like
//Shift,Ctrl, or Arrow keys. While keydown event triggers for character as well non-character keys also
//
//keyup and keydown are mostly used for event names
//
//When we design a event handling function for a key press event; JS creates an event object and the
//information regarding which key pressed is stored in the event object. Then that event object is
//passed into the event handler function and we can access that object inside event handler func itself
//So to access that object inside the function we pass an argument named 'e' or 'event' into the event
//handler function and access that e or event argument in the function
//
//This keypress event object has lot of information residing in it and from it we can see which key is
//pressed by accessing the key or code property in the object
//
//The classList has another property called .contains('') which checks whether the mentioned element has
//the specific class or not
//
//if we are selecting element via its id-name then rather than using document.querySelector('#id_name')
//we use document.getElementById('') and in getElementById we do not use hashtag to mention id_name
//and also getElementById is considered to be fast than querySelector when we are selecting 1000's of
//same element at same time otherwise both work same for id_name
//e.g - document.querySelector('#player1') == document.getElementById('player1')
//
//We can manipulate the image displayed on website by using src property in js
//e.g - diceImage.src = `/dice_images/dice-${dice_value}.png`;
//
//.classList have another method called .toggle other than .add, .remove and .toggle checks if the
//specified class exists there or not and it exists then it removes that class from there and if it does
//not exist then it adds there that specified class
//e.g - player0.classList.toggle('player--active');  <-- if the class exists then it will remove from
//     player1.classList.toggle('player--active');  there and if not exists then it adds there that class
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//