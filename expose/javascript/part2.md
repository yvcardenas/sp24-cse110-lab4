# Explore
## Part 2
### Question 1 
3
### Question 2
150
### Question 3 
150
### Question 4 
[50.00, 100.00, 150.00]
### Question 5
ERR: i is declared in the for loop so you don't have access to it
### Question 6 
ERR: discountPrice is not defined in this scope
### Question 7
150
### Question 8
[50.00, 100.00, 150.00]
### Question 9 
ERR: i is declared in the for loop so you don't have access to it
### Question 10 
3
### Question 11
[50, 100, 150]
### Question 12
A. student.name <br>
B. student['Grad Year'] <br>
C. student.greeting()<br>
D. student['Favorite Teacher'].name<br>
E.student.courseLoad[0]
### Question 13
A. 32: Since '3' is a string JS treated the '+' as a string concatination so it concatenates the string represenatation of '2'<br>
B. 1: JS tries to perform subtraction when there is a '-' so the string '3' can be converted to a number and used in a subtraction equation<br>
C. 3: Null as a number is represented with 0 so adding them would equal 3 <br>
D. 3null: Since '3' is a string JS treated the '+' as a string concatination so it concatenates the string represenatation of 'null'<br>
E. 4: True maps out to 1 so you can simply add the numbers<br> 
F. 0: False maps out to the number 0 and we know that stands for null too, so when added together they equal 0<br>
G. 3undefined: Since '3' is a string JS treated the '+' as a string concatination so it concatenates the string represenatation of 'undefined'<br>
H. error: JS tries to perform subtraction when there is a '-' so the string '3' can be converted to a number and used in a subtraction equation. But since 'undefined' cannot be converted into a number, we get 'Not a Number'<br>
### Question 14
A. true: JS performs type conversion when using '>' so here the value '2' is treate as the the number 2. Thus, we know its true that 2 > 1.<br>
B. false: We have two string so we go down each character and compare. In this case, we wouls first compare '2' and '1'. Thus, we get false.<br>
C. true: JS performs type conversion when using '==' so here the value '2' is treate as the the number 2. So ovbiosuly both these numbers are equal.<br>
D. false: JS does not perform type conversion when using '===' so the string '2' does not equal to the number 2.<br>
E. true: JS performs type conversion when using '==' so here the value 'true' is treate as the the number 1. When seeing if these two numbers are equal, it's evident they are not.<br>
F. true: JS does not perform type conversion when using '==='. Here the expression 'Boolean(2)' can be translated to true which is equal to the other value, true.<br>
### Question 15
A '==' operating allows type conversion where '===' is more strict and does not allow it. They both check the equality of two things but '===' is just more strict. 
### Question 16
*See /javascript/part2-question16.js*
### Question 17
Result: [2, 4, 6]
When calling the function you are given an array ([1, 2, 3]) and a callback function, doSomething. In the for loop, we are pushing a new variable onto the blank array we created called 'newArr'. We are pushing the value we get from 'callback(array[i])'. Know the information that was mentioned at the beginning, we can rewrite this as 'doSomething(array[i])'. Thus we call the function doSomething everytime. The doSomething function simply multiplies each element in the array by two so the math was pretty easy. Therefore we started with the array [1, 2, 3] and end with [2, 4, 6].
### Question 18
*See /javascript/part2- question18.js*
### Question 19  
4<br>
3<br>
2<br>