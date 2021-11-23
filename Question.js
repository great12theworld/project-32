class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Your Number Here....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.options = createElement('h4')



    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter 'e', but has only one letter?")
    this.question.position(200,100)
    this.options.html("1:Everyone", "2:Envelope", "3:Estimate", "4:Example")
    this.options.html( "2:Envelope", "3:Estimate", "4:Example")
    this.options.html( "3:Estimate", "4:Example")
    this.options.html("4:Example","3:Estimate")
    this.options.position(200,180)
    
    

    this.input1.position(150, 230);
    this.input2.position(400, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
