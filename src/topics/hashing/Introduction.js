import React from "react";
import hash1 from './hash1.png'
//import 
const Introduction =() =>{
    return(<>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jqr9Gg5bPm4?si=nJPpWyfyLX9pE6Fb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p className="para">
          Hashing is a technique that allows for fast data retrieval, typically in constant time (O(1)). 
          By using a hash function, we can map keys (such as IDs or names) to indices in an array (hash table) where data is stored. 
          Hashing is widely used in data structures, databases, and cryptography.

          In this lesson, we will explore the concept of hashing, different hash functions, and how collisions (when two keys map to the same index) are resolved.
 
          </p>
          <img src={hash1} alt="hashing" width={500}></img>
          </>
    );
}

export default Introduction;