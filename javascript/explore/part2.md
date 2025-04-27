# Part 2

1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
3

2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
150

3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
150 

4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
The function returns an array of discounted prices calculated from the original array of prices and the given discounted rate.
The function discountPrices takes an array of original prices and a discount rate (e.g., 0.5 for 50% off). Inside the function, it loops through each price, calculates the discounted price by multiplying the original price by (1 - discount), and then pushes the discounted price into a new array called discounted. After finishing the loop, the function returns the discounted array, which contains all the discounted prices.
For the input [100, 200, 300] and a discount of 0.5, the function returns [50, 100, 150], because each price is cut in half.

5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
    console.log(i);
                ^
ReferenceError: i is not defined
    at discountPrices
The code errored at line 12 because i was declared using let inside the for loop block, and let is block-scoped. Therefore, i does not exist outside the for loop block, causing a ReferenceError when trying to access it outside the for loop block.

6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
    console.log(discountedPrice);
                ^
ReferenceError: discountedPrice is not defined
    at discountPrices
The code errored at line 13 because discountedPrice was declared using let inside the for loop block, and let is block-scoped. Therefore, discountedPrice does not exist outside the for loop block, causing a ReferenceError when trying to access it outside the for loop block.

7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
150

8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
The function returns an array of discounted prices calculated from the original array of prices and the given discounted rate.
The function discountPrices takes an array of original prices and a discount rate (e.g., 0.5 for 50% off). Inside the function, it loops through each price, calculates the discounted price by multiplying the original price by (1 - discount), and then pushes the discounted price into a new array called discounted. After finishing the loop, the function returns the discounted array, which contains all the discounted prices.
For the input [100, 200, 300] and a discount of 0.5, the function returns [50, 100, 150], because each price is cut in half.

9.  ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
    console.log(i);
                ^
ReferenceError: i is not defined
    at discountPrices
The code errored at line 11 because i was declared using let inside the for loop block, and let is block-scoped. Therefore, i does not exist outside the for loop block, causing a ReferenceError when trying to access it outside the for loop block.

10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
3

11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
The function returns an array of discounted prices calculated from the original array of prices and the given discounted rate.
The function discountPrices takes an array of original prices and a discount rate (e.g., 0.5 for 50% off). Inside the function, it loops through each price, calculates the discounted price by multiplying the original price by (1 - discount), and then pushes the discounted price into a new array called discounted. After finishing the loop, the function returns the discounted array, which contains all the discounted prices.
For the input [100, 200, 300] and a discount of 0.5, the function returns [50, 100, 150], because each price is cut in half.


## Data Types

12. Given the above Object, write the notation for:  (These should be in your part2.md)
- Accessing the value of the name property in the student object
- Accessing the value of the Grad Year property in the student object
- Calling the function for the greeting property in the student object
- Accessing the name property of the object in the Favorite Teacher property in student
- Access index zero in the array of the courseLoad property of the student object
 
## Basic Operators & Type Conversion

13. Arithmetic
A) '3' + 2
B) '3' - 2
C) 3 + null
D) '3' + null
E) true + 3
F) false + null
G) '3' + undefined
H) '3' - undefined
14. Comparison
A) '2' > 1
B) '2' < '12'
C) 2 == '2'
D) 2 === '2'
E) true == 2
F) true === Boolean(2)
15. Explain the difference between the == and === operators.

## loops
16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)

## Functions
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 

## setInterval(), setTimeout(), clearTimeout()
18. The above program only prints out the time once when executed. Modify this code such that the program prints out the current time every second.  (This should be a JS file - part2-question18.js)
19. What is the output of the above code? (This should be in your part2.md)
