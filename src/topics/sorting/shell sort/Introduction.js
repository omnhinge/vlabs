import React from "react";
import binary from "./binary.png";
const Introduction =() =>{
    return(
       <> 
       <p className="paraq">What is searching ?</p>
       <p className="para"> Searching means to find whether a particular value is present in an array or not. If the value is 
present in the array, then searching is said to be successful and the searching process gives the 
location of that value in the array</p>
<p className="paraq"> linear search</p>
<p className="para"> Linear search, also called as sequential search, is a very simple method used for searching an array 
for a particular value. It works by comparing the value to be searched with every element of the 
array one by one in a sequence until a match is found. Linear search is mostly used to search an 
unordered list of elements (array in which data elements are not sorted). <p className="para">For example, if an array 
A[] is declared and initialized as,</p>
<p className="para">int A[] = [10, 8, 2, 7, 3, 4, 9, 1, 6, 5];</p>
 
 and the value to be searched is VAL = 7, then searching means 
to find whether the value ‘7’ is present in the array or not. 
If yes, then it returns the position of its occurrence. Here, 
POS = 3 (index starting from 0).</p>
       <p className="para">
       Shell sort, invented by Donald Shell in 1959, is a sorting algorithm that is a generalization of 
insertion sort. While discussing insertion sort, we have observed two things:
First, insertion sort works well when the input data is ‘almost sorted’.
Second, insertion sort is quite inefficient to use as it moves the values just one position at a 
time.
<img src={binary} alt="Binary Searching" width={800}></img>
       </p>
       <p className="para"></p></>
    );
}

export default Introduction;