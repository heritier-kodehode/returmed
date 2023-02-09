import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { client } from '../../lib/client';

import Blogpost from '../../components/blogpost/blogpost';
import BlogpostPreview from '../../components/blogpost/blogpostpreview';
const SectionContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

const SectionHeader = styled.header`
  width: 100%;
  background: #385d6d;
  padding: 2rem 0;
  @media (min-width: 990px) {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  letter-spacing: normal;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  font-size: calc(29px + (24 - 16) * (100vw - 400px) / (800 - 400));

  text-decoration: underline;
  color: white;
`;

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
    <SectionContainer>
      <SectionHeader>
        <SectionTitle>Blog</SectionTitle>
      </SectionHeader>
      {!posts ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => {
          return <BlogpostPreview post={post} key={post.slug.current} />;
        })
      )}
    </SectionContainer>
  );
}

export default Blog;
