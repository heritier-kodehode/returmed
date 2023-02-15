import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { client } from '../../lib/client';

import Blogpost from '../../components/blogpost/blogpost';
import BlogpostPreview from '../../components/blogpost/blogpostpreview';

import {
  SectionContainerBlog,
  SectionHeaderBlog,
  SectionTitleBlog,
} from '../../components/styled/styled';

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{title, mainImage, body, slug, publishedAt} | order(publishedAt desc)`
      )
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SectionContainerBlog>
      <SectionHeaderBlog>
        <SectionTitleBlog>Blog</SectionTitleBlog>
      </SectionHeaderBlog>
      {!posts ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => {
          return <BlogpostPreview post={post} key={post.slug.current} />;
        })
      )}
    </SectionContainerBlog>
  );
}

export default Blog;
