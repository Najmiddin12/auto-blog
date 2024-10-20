import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../blogs.css';

const posts = {
    1: {
        title: 'AUTODAY GENTRA',
        content: 'Gentra details...',
        image: require('../images/gentra.png'),
        desc: 'The exterior of the car leaves a strong impression, created by Italian specialists. The main feature of this model is its smooth, rounded lines, which make the car appear much larger and more spacious than its actual size. Its exterior carries the excitement and grandeur typical of more expensive vehicles. All details of its exterior, from the 15-inch wheels to the unique shape of the side windows, stand out with excellent quality and Italian elegance.'
    },
    2: {
        title: 'AUTODAY NEXIA',
        content: 'Nexia details...',
        image: require('../images/nexia3.png'),
        desc: 'The Nexia car stands out with a solid and reliable design that has proven itself over the years. It is known for its very comfortable interior space and economical fuel consumption.'
    },
    3: {
        title: 'AUTODAY MALIBU',
        content: 'Malibu details...',
        image: require('../images/malibu2.png'),
        desc: 'The Malibu is a car full of modern design and advanced technologies. Its unique style attracts attention on any road.'
    },
    4: {
        title: 'AUTODAY EQUINOX',
        content: 'Equinox details...',
        image: require('../images/equinox.png'),
        desc: 'The Equinox combines comfort and spaciousness in an SUV. It is known for its excellent driving experience and modern technologies.'
    },
    5: {
        title: 'AUTODAY TRAILBLAZER',
        content: 'Trailblazer details...',
        image: require('../images/trailblazer.png'),
        desc: 'The Trailblazer is a powerful and durable SUV designed to be reliable even in challenging conditions.'
    },
    6: {
        title: 'AUTODAY TRAVERSE',
        content: 'Traverse details...',
        image: require('../images/traverse.png'),
        desc: 'The Traverse is the ideal vehicle for a large family. It offers ample interior space and high levels of comfort.'
    }
};


const Post = () => {
    const { id } = useParams();
    const post = posts[id];

    const [likes, setLikes] = useState(() => {
        // Layklarni local storage-dan olish
        const savedLikes = localStorage.getItem(`likes_${id}`);
        return savedLikes ? JSON.parse(savedLikes) : 0;
    });
    const [liked, setLiked] = useState(() => {
        // Layklar statusini local storage-dan olish
        const savedLiked = localStorage.getItem(`liked_${id}`);
        return savedLiked === 'true';
    });
    const [comments, setComments] = useState(() => {
        // Kommentlarni local storage-dan olish
        const savedComments = localStorage.getItem(`comments_${id}`);
        return savedComments ? JSON.parse(savedComments) : [];
    });
    const [newComment, setNewComment] = useState('');

    const handleLike = () => {
        if (!liked) {
            setLikes(prevLikes => {
                const newLikes = prevLikes + 1;
                localStorage.setItem(`likes_${id}`, JSON.stringify(newLikes));
                return newLikes;
            });
            setLiked(true);
            localStorage.setItem(`liked_${id}`, 'true');
        }
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment) {
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            setNewComment('');
            localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        }
    };

    return (
        <div className="blog">
            <div className="contain">
                <div className="title">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <div className="blog-content">
                    <div className="blog-img">
                        <img src={post.image} alt={post.title} />
                    </div>
                </div>
                <div className="post-description">{post.desc}</div>
                <div className="post">
                    <button onClick={handleLike} disabled={liked}>
                        {liked ? `Liked (${likes})` : `Like (${likes})`}
                    </button>

                    <div className="comments-section">
                        <h2>Comments</h2>
                        <form onSubmit={handleCommentSubmit}>
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment"
                            />
                            <button type="submit">Submit</button>
                        </form>

                        <ul>
                            {comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
