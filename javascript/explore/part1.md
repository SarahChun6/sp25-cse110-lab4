# Part 1

## var declaration 
1. What is printed by line 9? If the code returns an error, explain why. ^^^^^
values added:  20
2. What is printed by line 13? If the code returns an error, explain why. 
final result:  20
3. Why should you not use var? Explain why. 
Because var is function scoped while let and const are block scoped (more intuitive) so var will pierces through if, for, and other code blocks. Var also tolerates redeclarations while let and const do not. And Var declarations are processed at function start so they can be declared after being assigned. All this confusion can lead to naming and scoping issues when using var. 

