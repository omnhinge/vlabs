import React from "react";

const Algorithm =() =>{
    return(<>
        <p className="paraq">Inserting a new node in a Linked List</p>
        <p className="para">we will see how a new node is added into an already existing linked list. We will 
take four cases and then see how insertion is done in each case.
<ul>
        <li><strong>Case 1:</strong> The new node is inserted at the beginning.
            <p>In this case, a new node is added as the first element of the list. The new node's "next" pointer points to the current head of the list, and the head is updated to the new node.</p>
        </li>
        <li><strong>Case 2:</strong> The new node is inserted at the end.
            <p>In this case, a new node is added as the last element in the list. The current last node's "next" pointer is updated to point to the new node, and the new node's "next" pointer is set to NULL.</p>
        </li>
        <li><strong>Case 3:</strong> The new node is inserted after a given node.
            <p>In this case, a new node is added immediately after a specified node in the list. The new node's "next" pointer is set to the "next" pointer of the given node, and the given node's "next" pointer is updated to point to the new node.</p>
        </li>
        <li><strong>Case 4:</strong> The new node is inserted before a given node.
            <p>In this case, a new node is inserted before a specified node in the list. To do this, the list is traversed until the node before the given node is found, and the new node's "next" pointer is updated to point to the given node. The previous node's "next" pointer is updated to point to the new node.</p>
        </li>
    </ul></p>
    </>);
}

export default Algorithm;