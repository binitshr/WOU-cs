/* Here's where to solve the problem.  Write your code in the appropriate function below. 
   Return true to indicate success, false otherwise. Print out indicated output or add to
   the DOM with jQuery as shown where needed.
*/

// Our predicates
const matchSingleChar = char => charIn => char === charIn;
const matchUndefined  = char => typeof char == 'undefined';
const matchAnything   = _ => true;

// Our functions
const nop = function(){}

function accumulateOneSection(charIn,context)
{
    context.acc.push(charIn);
}

function clearAccumulator(charIn,context)
{
    context.output.push(context.acc.join(""));
    context.acc = [];
}

function p1(input)
{
    const spl = input[0];

    const context = {
        output: [],
        acc: []
    };

    // Create our FSM object
    const fsm = new FSM(3,context);

    // Add rules to the state machine (in the order we want the predicates to be checked)
    fsm.addRule(0,matchSingleChar(spl),clearAccumulator,1);
    fsm.addRule(0,matchUndefined,clearAccumulator,2);
    fsm.addRule(0,matchAnything,accumulateOneSection,0);
    fsm.addRule(1,matchSingleChar(spl),clearAccumulator,0);
    fsm.addRule(1,matchUndefined,clearAccumulator,2);
    fsm.addRule(1,matchAnything,accumulateOneSection,1);
    fsm.addRule(2,matchUndefined,nop,2);
    fsm.addRule(2,matchAnything,nop,2);

    // Run the state machine on the input
    // (run it one past the end of the string to get undefined as the last char read)
    for(let i = 1; i <= input.length; i++)
    {
        fsm.advance(input[i]);
        console.log("fsm state = " + fsm.state);
    }

    alert(context.output);
    // See if we got the same as built-in split
    return context.output.equals(p1_test(input));
}

/* Function to easily compare our output with the built-in string split */
function p1_test(input)
{
    const spl = input[0];
    const test_output = input.slice(1).split(spl);
    console.log(test_output);
    return test_output;
}

// Useful utility for comparing arrays (deep comparison)
// From top answer in: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) 
{
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) 
    {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) 
        {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) 
        { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});





//....................................................problem-2..................................................//
//Applies the FSM discussed in class. 
//test_p2.txt file in attached has input with required new lines defined. 
// Line coloring technique accomplished with the help of Andrew wiest. 
function p2(input)
{
    const spl = input[0];

    const context = {
      count: 2, isColor1: true,
      //assigning color options
      color: function() {return this.isColor1 ? 'color1' : 'color2'},
      output: [],
      acc: []
     };
  
  
     //--------------------Functions to use int he FSM---------------------------------//
//reads in the initial lines
  function readLine(charIn, context)
  {
    context.acc.push(charIn)
  }
  
  //reads the lines in and assigns the color for the next line
  function reacAndColor(charIn, context)
  {
    context.acc.push("</p>")
    context.acc.push(charIn)
    context.output.push(context.acc.join(""));

    context.isColor1 = !(context.isColor1)
    var prevString = `<p class="${context.color()}"> ${(context.count++)}`;
    context.acc = [...prevString];
  }
  //reads next lines
  function ReadNext(charIn, context)
  {
    context.acc.push("</p>")
    context.acc.push(charIn)
    context.output.push(context.acc.join(""));
  }
    //-------------------------------Main FSM-----------------------------------------------//

  //Defining the state machines
  const fsm = new FSM(3,context);
  //First state group
  fsm.addRule(0,matchUndefined,ReadNext,2);
  fsm.addRule(0, matchSingleChar('\n'), reacAndColor, 1);
  fsm.addRule(0, matchAnything, readLine, 0);
  fsm.addRule(0, matchSingleChar('\n'), reacAndColor, 1);

  //second state group
  fsm.addRule(1, matchUndefined, ReadNext, 2);
  fsm.addRule(1, matchSingleChar('\n'), reacAndColor, 0);
  fsm.addRule(1, matchAnything, readLine, 1);
  fsm.addRule(1, matchSingleChar('\n'), reacAndColor, 0);

  //itereate through all input
  for(let i = 0; i <= input.length; i++)
  {
      fsm.advance(input[i]);
      console.log("fsm state = " + fsm.state);
  }
  fsm.context.output[0] =`<p class="color1"> 1 ` +  fsm.context.output[0]
  console.log(fsm.context.output)
    // Example of how to output the results. Wrap alternating lines in 
    //    <p class="color1">Line 1 text goes here</p>
    //    <p class="color2">Line 2 text goes here</p>
    
    let output = fsm.context.output.join("");
    
    // Use jQuery to empty the previous output, if any, and append the new output
    $('#p2-output p.output').empty().append($(output));
    return (output != null);
}

//....................................................Problem 3 .................................................//
function p3(input)
{
  const context = {
    output: [],
    acc: []
  };

//-------------------------------------------Functions for the state machine-------------------------------//
  //Function to read in the characters needed in accumulator
  function readIn(charIn,context)
  {
    context.acc.push(charIn);
  }
  //function to move forward
  function moveToNext(charIn, context)
  {
    context.output.push(context.acc.join(""));
    context.acc = [charIn];
  }
  //Defining the state machine
  const fsm = new FSM(4,context);

  //rules for the FSM

  //Looks and parses '@'
  fsm.addRule(0, matchUndefined, nop, 3);
  fsm.addRule(0, matchSingleChar('@'), nop, 1);
  fsm.addRule(0, matchAnything, nop, 0);
  //Looks and parses '#'
  fsm.addRule(1, matchUndefined, nop, 3);
  fsm.addRule(1, matchSingleChar('#'), moveToNext, 2);
  fsm.addRule(1, matchAnything, readIn, 1);

  //looks and parses '\n' newling to see if the line is last or not. 
  fsm.addRule(2, matchUndefined, moveToNext, 3)
  fsm.addRule(2, matchSingleChar('\n'), nop, 0)
  fsm.addRule(2, matchAnything, readIn, 2)

 

  //Iterating through the character of the input
  for(let i = 0; i <= input.length; i++)
  {
      fsm.advance(input[i]);
  }
  console.log(`(("https", "${fsm.context.output[0]}, null, null),"${fsm.context.output}")`)
  return fsm.context.output[0] && fsm.context.output[1];
}


function p4(input)
{
    return false;
}

function p5(input)
{
    return false;
}

