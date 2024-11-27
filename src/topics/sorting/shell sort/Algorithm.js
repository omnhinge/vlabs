import React, { useState } from 'react';
import shell from './shellby.png'
const Algorithm =() =>{
    return(
        <p className="para">
          To visualize the way in which shell sort works, perform the following steps:
          <ol>
    <li>
        Arrange the elements of the array in the form of a table and sort the columns (using insertion sort).
    </li>
    <li>
        Repeat Step 1, each time with smaller number of longer columns in such a way that at the end, there is only one column of data to be sorted.
    </li>
</ol>
<p>
    Note that we are only visualizing the elements being arranged in a table; the algorithm does its sorting in-place.
</p><hr></hr><p className='para'>algorithm</p>
<img src = {shell} alt='shellsort' width={800}></img>
          </p>
    );
}

export default Algorithm;