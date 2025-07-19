import React from 'react';
import { Helmet } from 'react-helmet';
import BlogRows from '../Components/BlogList';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs | Hameau des Jeunes - Latest Articles & Updates</title>
        <meta
          name="description"
          content="Read the latest blogs and updates from Hameau des Jeunes covering education, youth development, and more."
        />
        <meta
          name="keywords"
          content="blogs, hameau des jeunes, youth, education, news, articles"
        />
        <link rel="canonical" href="https://yourdomain.com/blogs" />
      </Helmet>

      <div>
        <BlogRows />
      </div>
    </>
  );
};

export default Blogs;
