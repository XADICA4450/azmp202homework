import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/Blog.module.scss';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts([
      { id: 1, title: 'İlk Blog Yazısı', excerpt: 'Bu bizim ilk blog yazımızdır...', date: '2023-05-01' },
      { id: 2, title: 'React Haqqında', excerpt: 'React-in əsas xüsusiyyətləri...', date: '2023-05-15' },
      { id: 3, title: 'Web Dizayn Trendləri', excerpt: '2023-cü ilin web dizayn trendləri...', date: '2023-06-01' },
    ]);
  }, []);

  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <div className={styles.postGrid}>
        {posts.map(post => (
          <div key={post.id} className={styles.postCard}>
            <h2>{post.title}</h2>
            <p className={styles.date}>{post.date}</p>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className={styles.readMore}>Davamını oxu</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

