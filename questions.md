# _Questions_

## **This**
  What is the difference between apply and call?

    Call takes more than one argument and apply takes an array as an argument.

  What is this?

    The keyword this refers what is being acted upon by a function.

  What is strict mode?

    It makes silent errors appear and some code will run faster than if it isn't run in strict mode.


  ```javascript
    function one(){
      console.log(this)
    }
    one.bind("Hello")


    function two(x){
      let y = 0
      function one(x){
        let z = 5
        console.log(x);
        y = 5
        return x + y
      }
      one()
      return z
    }

    two(6)
  ```

### Bind
  What does bind do?

    Bind creates a new function that when called has it's this set to the provided value.

  When would you use bind?

## Inheritance
  Types of inheritance and what the difference is.
### Prototypal Inheritance
  Explain prototypal inheritance.

  Write a prototype constructor.

### Classical Inheritance
  What does the keyword extends do?

## Higher Order Functions
  Define a higher order function.

    A function that takes other functions as an argument or returns a argument.

  Write an example of a higher order function.

  What are some use cases of a higher order function?

## **Promises**

  What is a promise?

    A Promise represents a value which may be available now, or in the future, or never.

  Where might you encounter a promise?

  What are the possible states of a promise?

    Fulfilled, rejected, or pending.

  Explain the basic structure of a promise.

  How does .then() work with promises?

  How can you use .then() for error handling?

  ```javascript
  fetch(url)
.then(process)
.then(save)
.catch(handleErrors)
;
  ```

    Assuming each of the functions, fetch(), process(), and save() return promises, process() will wait for fetch() to complete before starting, and save() will wait for process() to complete before starting. handleErrors() will only run if any of the previous promises reject.

## **Async/Await**

  What is await?

  When would you use await?

  How does await differ from then?

  What is the relationship between the key word async and await?

## **Currying**

  What is currying in JavaScript?

    Currying is taking a function with many arguments and refactoring it to take fewer arguments. It's a type of higher order function since ti's a function that returns a function.

  How does currying work?

    Binding a value to the first invocation of a function.

  Here is a curried function what will it return?

  ```javascript
      var languages = function(a) {
        return function(b){
          var result = "My favorite languages are ".concat(a).concat(" and ").concat(b).concat(".");
          return result;
        }
      };

      var js = languages('javascript')
      // Fill in expected outputs for the function calls below.
      js('ruby');
      js('java');
      js('php');
      js('python');
  ```

## Event Delegation
  Give me a high level explanation of event delegation.

  What are some use cases for event delegation.


Is this an example of event delegation
  ```javascript
    function callback(e){
      if e.target.isA('li'){
        // do outcome a
      } else if e.target.isA('p'){
        //do outcome b
      } else {
        // do outcome c
      }
    }  
  ```
  ```html
        <ul onClick={this.callback}>
          <li></li>
          <li></li>
          <p></p>
          <a href="url"></a>
        </ul>
  ```
## Bubbling/Capturing
  What is bubbling?

  What is capturing?

  What is the importance of these two?

## Event Loop

  Describe the event loop.
  ```javascript
  while (queue.waitForMessage()) {
queue.processNextMessage();
}
  ```
## Asynchronous/Synchronous Programming
  Describe the difference between synchronous and asynchronous programming.

    In synchronous programming, each step is performed one after the previous one is finished executing. In asynchronous, step 2 will be performed even if step 1 isn't finished.

## MVC
  What is MVC?

  What is the advantage of using MVC?

    Separation of concerns.
