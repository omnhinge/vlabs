// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import './style.css'; // Optional: For custom styles

// const Card = ({ image, text, link }) => {
//     return (
//         <div className="card">
//             {/* Use Link for internal routing */}
//             <Link to={link}>
//                 <img src={image} alt={text} className="card-image" />
//                 <p className="card-text">{text}</p>
//             </Link>
//         </div>
//     );
// }

// const CardLayout = () => {
//     const cardsData = [
//         { image: 'https://via.placeholder.com/250', text: 'Searching and Sorting', link: '/shellsort' }, // Link to shellsort page
//         { image: 'https://via.placeholder.com/250', text: 'Linked List', link: '/linkedlist' },
//         { image: 'https://via.placeholder.com/250', text: 'Hashing', link: '/hashing' },
//         { image: 'https://via.placeholder.com/250', text: 'Stack and Queue', link: '/stackqueue' },
//         { image: 'https://via.placeholder.com/250', text: 'Trees', link: '/trees' },
//         { image: 'https://via.placeholder.com/250', text: 'Graphs', link: '/dijkstra' },
//     ];

//     return (
//         <div className="card-container">
//             {cardsData.map((card, index) => (
//                 <Card key={index} image={card.image} text={card.text} link={card.link} />
//             ))}
//         </div>
//     );
// }

// export default CardLayout;
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './style.css'; // Optional: For custom styles

const Card = ({ image, text, link }) => {
    return (
        <div className="card">
            {/* Use Link for internal routing */}
            <Link to={link}>
                <img src={image} alt={text} className="card-image" />
                <p className="card-text">{text}</p>
            </Link>
        </div>
    );
}

const CardLayout = () => {
    const cardsData = [
        { image: 'https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/TV-shell-sort-in-DS-normal-image07.jpg',outerWidth:'250px', text: 'Searching and Sorting', link: '/shellsort' }, // Link to shellsort page
        { image: 'https://www.tutorialspoint.com/data_structures_algorithms/images/dsa_linkedlist.jpg',outerWidth:'250px', text: 'Linked List', link: '/linkedlist' },
        { image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240807120551/Introduction-to-Hashing.webp', outerWidth:'250px', text: 'Hashing', link: './hashing' },
        { image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240606180325/What-is-Stack-(1).webp', text: 'Stack and Queue', link: '/stackqueue'  },
        { image: 'https://www.w3schools.com/dsa/img_exercises_trees.png', text: 'Trees', link: '/trees' },
        { image: 'https://www.w3schools.com/dsa/img_exercises_graphs.png', text: 'Graphs', link: '/dijkstra' },
    ];

    return (
        <div className="card-container">
            {cardsData.map((card, index) => (
                <Card key={index} image={card.image} text={card.text} link={card.link} />
            ))}
        </div>
    );
}

export default CardLayout;