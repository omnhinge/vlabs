import React from "react";
import linkedlist1 from './Linkedlist1.png'
const Introduction =() =>{
    return(
        <>
        <p className="para">
        Linked list is a data structure that is free from the aforementioned restrictions. A linked list 
does not store its elements in consecutive memory locations and the user can add any number 
of elements to it.
        </p>
        <img src={linkedlist1} alt="linkedlist" width={800}></img>
        <p className="para"> we can see a linked list in which every node contains two parts, an integer and a 
pointer to the next node. The left part of the node which contains data may include a simple data 
type, an array, or a structure. The right part of the node contains a pointer to the next node (or 
address of the next node in sequence). The last node will have no next node connected to it, so 
it will store a special value called NULL.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/dmb1i4oN5oE?si=ZqL-qLtw6ylKL7Kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </>
    );
}

export default Introduction;