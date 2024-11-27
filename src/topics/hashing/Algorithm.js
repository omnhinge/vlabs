import React from "react";

const Algorithm =() =>{
    return(
        
        <p>
            <h2>Steps to Perform Mid-Square Hashing</h2>
          <ol>
        <li><strong>Square the Key:</strong> Start by squaring the given key (e.g., if the key is 123, calculate 123 * 123 = 15129).</li>
        <li><strong>Convert to String:</strong> Convert the result of the square into a string (e.g., 15129 becomes "15129").</li>
        <li><strong>Find Middle Digits:</strong> Identify the middle portion of the squared result. This can vary based on how many digits you want to extract. Typically, two or more middle digits are selected. For instance, from "15129", the middle two digits are "51".</li>
        <li><strong>Extract Middle Digits:</strong> Extract the middle digits from the squared number (e.g., "51").</li>
        <li><strong>Modulo Operation:</strong> Use the modulo operation to ensure the hash value fits within the size of the hash table. For example, if the hash table size is 100, calculate <code>51 % 100 = 51</code>.</li>
        <li><strong>Hash Value:</strong> The result of the modulo operation is the final hash value (e.g., the hash value is 51).</li>
    </ol>
          </p>
    );
}
export default Algorithm;