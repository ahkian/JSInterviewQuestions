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
  
### Prototypal Inheritance
  Explain prototypal inheritance.

    
### Classical Inheritance

### Difference Between The Two

## Higher Order Functions

## **Promises**

## **Await**

## **Async/Await**

## **Currying**

##Event Delegation

## Bubbling

## Event Loop

## Ansync With Callbacks

## Asynchronous/Synchronous Programming

## MVC
