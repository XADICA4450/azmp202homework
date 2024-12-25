
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post {id}</h1>
      <p>This is the detail page for blog post with ID: {id}</p>
    </div>
  );
};

export default BlogDetail;

