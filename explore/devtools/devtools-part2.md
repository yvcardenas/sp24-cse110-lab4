# Part 2
## Basic DevTools
### Debugging
1. The document was saving num1 and num2 as strings. Since we were added two strings, JS simply concatinated them together. For example if num1 = 1 and num2 = 2, we were getting '12'.
2. After doing some research I have learned that JavaScript uses the unaray plus operator '+' to convert a data type into a number if it is not already. When applied to a sring, it trues to parse the string as a number, so if a valid number is found, it converts it to one. If it did not result in a valid number, it returns NAN (Not a Number). I added a unary plus operator in front of both num1 and num2 in the calculateSum function. Refer to /expand/screenshots/fix.png for screenshot of fix.