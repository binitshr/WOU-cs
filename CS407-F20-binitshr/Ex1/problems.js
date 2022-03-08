// Read https://javascript.info/regular-expressions then do these

/* Here's where to solve the problem.  Write your code in the appropriate function below. 
   Return true to indicate success, false otherwise. Print out to the console as directed in 
   the problem statement.

   For problems 1 and 2 there are testing files available.  Paste one of these into the text field for
   the respective problem:

   Problem 1: https://wou-cs46x-resources.netlify.app/data/a1p1.json
   Problem 2: https://wou-cs46x-resources.netlify.app/data/a1p2.json
*/
function p1(input)
{
    console.log(`Running validation for problem p1 for input: "${input}"`);
    let regex = /^[2-9]\d{2}[.|-][2-9]\d\d[.|-]\d{4}/;
    
    let output = regex.test(input)
    
    return output;
}

function p2(input)
{
    console.log(`Running validation for problem p2 for input: "${input}"`);
    let regex = /^[2-9]\d{2}[.|-][2-9](?:1[02-9]|[02-9]\d)[\W\D]?(\d{4})/;
    
    let output = regex.test(input)
    
    return output;
    
}

/*
    To test this input you'll have to replace all newlines with \n   I'll show you how to do this in VS Code.
    
    Hint: put it in a group and extract then use regular expression. Use Multiline Mode(M flag) ^ and dollar sign. 

    second part break it down. Multiple regular Expressions

*/
function p3(input)
{
    console.log(`Running validation for problem p3 for input: "${input}"`);

    var regex = /^Name\s+:\s(.*)/m;
    var regex1 = /^VideoModeDescription\s+:\s+(\d{4})/m;
    var regex2 = /^VideoModeDescription\s+:\s+\d{4}\s+[x|X]\s+(\d{4})/m
    //extracting to pull out the required text
    
    const match = regex.exec(input);
    
    if(match) {

        const name = match[1];
        console.log('Video Card Name:' + name)
    }
    else{
        console.log('Failed to match');
    }
    //Resolution x
    const match1 = regex1.exec(input);
    if(match1){
        const resoltion1 = match1[1];
        console.log('Resolution X-value: '+ resoltion1);

    }
    else{
        console.log('Failed to match');
    }
    //Resolution Y
    const match2 = regex2.exec(input);
    if(match2){
        const resoltion2 = match2[1];
        console.log('Resolution Y-value: '+ resoltion2);

    }
    else{
        console.log('Failed to match');
    }

    //Boolean result of the regex search
    var output = regex.test(input)
    
    console.log(output)
    return output;
}
/*
    You'll also need to replace newlines in this problem.
    Multi-Line  use only the last line to extract the info. 
*/
function p4(input)
{
    console.log(`Running validation for problem p4 for input: "${input}"`);
    
    
    
    
    
    var regex1 = /^@(\w+.\w+)/m;
    var regex2 = /^@\w+.\w+\s+#(\d+)/m;
    
    const match = regex1.exec(input);
    const match2 = regex2.exec(input);
    
    let output = regex1.test(input)
    
    if(match && match2) {

        const domain = match[1];
        const codenumber = match2[1];
        console.log('Domain:'+domain)
        console.log('Code number:'+codenumber) 
        console.log('(("https","'+domain+'",null,null),"'+codenumber+'")');
    }
    else{
        console.log('Failed to match');
    }
    
    return output;
    
}
/* 
 Optional -? sign at the begining (), O - more Digit [have exponent or not] 
*/
function p5(input)
{
    var regex = /([1-9](-|\d|e|\.)*)(0x[a-z0-9])*/m;
    
    
    return true;
    
}

function p6(input)
{
    return false;
}