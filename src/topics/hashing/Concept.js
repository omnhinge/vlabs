import React from "react";

const Concept = () => {
  return (
    <div className="para">
      <h2>Mid-Squared Hashing Concept</h2>

      <p>
         Mid-Squared Hashing  is a hashing technique where the hash value is derived by squaring the key value and extracting the middle part of the resulting number. This technique is particularly useful when a uniform distribution of hash values is required and can be a simple yet effective method for generating hash values.
      </p>

      <h3>How Does Mid-Squared Hashing Work?</h3>
      <p>
        In the mid-squared hashing technique, the process of hashing involves the following steps:
      </p>
      <ol>
        <li>
           Square the key : Take the input key (usually a number), and square it.
        </li>
        <li>
           Extract the middle digits : After squaring the key, extract the middle portion of the resulting number to use as the hash value. The number of digits you extract depends on the size of the hash table and the hash function design.
        </li>
        <li>
           Map to the hash table : Use the extracted digits as an index in the hash table.
        </li>
      </ol>

      <h3>Example</h3>
      <p>
        Let’s consider an example where the key is a number, and we apply the mid-squared hashing technique:
      </p>
      <pre>
        Key: 1234
        Square of key: 1234 * 1234 = 1522756
        Extract the middle part: Let’s extract the middle 4 digits (in this case, 2275)
        The hash value is 2275 and it will be used as an index in the hash table.
      </pre>

      <h3>Why Use Mid-Squared Hashing?</h3>
      <p>
        Mid-squared hashing is particularly useful because it distributes the hash values relatively uniformly over the available table size. By squaring the key, the resulting hash values are more likely to have a wide range of digits, helping to minimize clustering in the hash table.
      </p>

      <h3>Advantages of Mid-Squared Hashing</h3>
      <ul>
        <li>
           Simple to Implement : The mid-squared method is easy to implement and does not require complex calculations or additional data structures.
        </li>
        <li>
           Uniform Distribution : It tends to produce a fairly even distribution of hash values, which helps to reduce the chances of collisions in a hash table.
        </li>
        <li>
           Efficient for Integer Keys : This method is especially efficient when dealing with integer keys, as the squaring operation is computationally simple.
        </li>
      </ul>

      <h3>Disadvantages of Mid-Squared Hashing</h3>
      <ul>
        <li>
           Collision Handling : Like all hashing techniques, mid-squared hashing is susceptible to collisions. Collisions happen when two different keys produce the same hash value, and resolving collisions requires additional mechanisms such as chaining or open addressing.
        </li>
        <li>
           Not Ideal for Non-Numeric Data : Mid-squared hashing is best suited for numeric keys, and applying it to non-numeric data may not yield good results without additional preprocessing.
        </li>
        <li>
           Performance : In some cases, if the squared number is too large, extracting the middle portion of the number can be inefficient or lead to wasted memory space if the number is larger than needed.
        </li>
      </ul>

      <h3>Application of Mid-Squared Hashing</h3>
      <p>
        Mid-squared hashing can be used in various applications, especially in contexts where fast data retrieval is necessary, and we want a simple and effective way of distributing keys uniformly across a hash table.
      </p>
      <ul>
        <li> Hash Tables : Used in hash tables to quickly map keys to indices in memory.</li>
        <li> Hash Maps : Used to implement hash maps where the key-value pairs are stored efficiently.</li>
        <li> Database Indexing : Helps in distributing records evenly when creating indexes for databases.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>
         Mid-Squared Hashing  is a straightforward and effective method of generating hash values, especially for integer-based keys. It works by squaring the key and extracting the middle digits of the result to create a hash value. While it is simple to implement and offers good distribution of hash values, it does have some drawbacks, such as the possibility of collisions and inefficiency with non-numeric keys. Despite these limitations, it is still widely used in various applications where fast and uniform data retrieval is needed.
      </p>
    </div>
  );
};

export default Concept;