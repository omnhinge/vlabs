import React from "react";

const Concept =() =>{
    return(<>
        <p className="para">
          Shell sort is considered an improvement over insertion sort as it compares elements separated 
by a gap of several positions. This enables the element to take bigger steps towards its expected 
position. In Shell sort, elements are sorted in multiple passes and in each pass, data are taken with 
smaller and smaller gap sizes. However, the last step of Shell sort is a plain insertion sort. But by 
the time we reach the last step, the elements are already ‘almost sorted’, and hence it provides 
good performance.</p>
<hr/><iframe width="560" height="315" src="https://www.youtube.com/embed/9crZRd8GPWM?si=Z_Sz2e5Wtl_AWT-6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<p className="para">

 If we take a scenario in which the smallest element is stored in the other end of the array, then 
sorting such an array with either bubble sort or insertion sort will execute in O(n2) time and take 
roughly n comparisons and exchanges to move this value all the way to its correct position. On 
the other hand, Shell sort first moves small values using giant step sizes, so a small value will 
move a long way towards its final position, with just a few comparisons and exchanges.
          </p></>
    );
}

export default Concept;