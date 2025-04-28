# Part 1

## var declaration 

1. What is printed by line 9? If the code returns an error, explain why.   
values added:  20

2. What is printed by line 13? If the code returns an error, explain why.   
final result:  20

3. Why should you not use var? Explain why.   
Because var is function scoped while let and const are block scoped (more intuitive) so var will pierces through if, for, and other code blocks. Var also tolerates redeclarations while let and const do not. And Var declarations are processed at function start so they can be declared after being assigned. All this confusion can lead to naming and scoping issues when using var. 

4. What is printed by line 9? If the code returns an error, explain why.   
values added:  20

5. What is printed by line 13? If the code returns an error, explain why.   
```
console.log('final result: ', result); //here  
                                  ^      
ReferenceError: result is not defined    
    at sumValues   
```
The code errored at line 13 because result was declared using let inside the if (add) block, and let is block-scoped. Therefore, result does not exist outside the if block, causing a ReferenceError when trying to access it outside the if block.

## const declaration

6. What is printed by line 9? If the code returns an error, explain why.  
``` 
        result = num1 + num2;  
               ^  
TypeError: Assignment to constant variable.  
    at sumValues   
```
The reassignment result = num1 + num2 caused the TypeError because result was declared as a const earlier. So, line 9 did not print anything.

7. What is printed by line 13? If the code returns an error, explain why.   
```
        result = num1 + num2;  
               ^  
TypeError: Assignment to constant variable.  
    at sumValues   
```
The reassignment result = num1 + num2 caused the TypeError because result was declared as a const earlier. So, line 13 did not print anything.


