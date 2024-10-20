import React from 'react';
import { Link } from 'react-router-dom';
import '../blogs.css';

import gentraImage from '../images/gentra.png';
import nexiaImage from '../images/nexia3.png';
import malibuImage from '../images/malibu2.png';
import equinoxImage from '../images/equinox.png';
import trailblazerImage from '../images/trailblazer.png';
import traverseImage from '../images/traverse.png';


const posts = [
    { id: 1, title: 'AUTODAY GENTRA', image: gentraImage },
    { id: 2, title: 'AUTODAY NEXIA', image: nexiaImage },
    { id: 3, title: 'AUTODAY MALIBU', image: malibuImage },
    { id: 4, title: 'AUTODAY EQUINOX', image: equinoxImage },
    { id: 5, title: 'AUTODAY TRAILBLAZER', image: trailblazerImage },
    { id: 6, title: 'AUTODAY TRAVERSE', image: traverseImage }
];

const Home = () => {
    return (
        <section className="design" id="autoday">
            <div className="container">
                <div className="title">
                    <h2>AUTODAY</h2>
                    <p>BLOG ABOUT CAR</p>
                </div>
                <div className="design-content">
                    {posts.map((post) => (
                        <div key={post.id} className="design-item">
                            <div className="design-img">
                                <img src={post.image} alt={post.title} />
                                <span>{post.title}</span>
                            </div>
                            <div className="design-title">
                                <p>Chevrolet: A Renowned Car Brand Known for Quality and Innovative Technology</p>
                                <Link to={`/post/${post.id}`}>Read more</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
