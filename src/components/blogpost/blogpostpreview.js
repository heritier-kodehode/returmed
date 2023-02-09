import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../lib/client';
import format from 'date-fns/format';
const BlogTitle = styled.h3`
  font-size: 18px;
  padding: 0 2rem;
  color: white;
  text-decoration: underline white;

  font-weight: 800;
  text-transform: uppercase;
`;
const BlogMainImage = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
  filter: brightness(0.3);
`;
const BlogBodyText = styled.p`
  height: 100%;
  width: 90%;
  top: 0;
  left: 0;
  padding: 1.5rem;
  color: white;
  font-size: 15px;
  justify-content: end;
  font-style: italic;
  margin: 0 auto;
`;

const CostumLink = styled(Link)`
  text-decoration: none;
  position: relative;
  width: 100%;
  height: 250px;

  overflow: hidden;
  border: 5px solid #385d6d;

  padding: 1rem;
  &:hover {
    padding: 1.5rem;

    p {
      font-weight: 900;
    }
  }

  &:active {
    text-decoration: none;
  }
`;

const CtaText = styled.p`
  color: black;
  background-color: white;
  width: 100px;
  position: absolute;
  left: 2rem;
  bottom: 2rem;
`;

const DateText = styled.p`
  color: black;
  background-color: white;
  width: 100px;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  font-size: 10px;
`;

const TextSpan = styled.span`
  display: block;
`;

function BlogpostPreview({ post }) {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <CostumLink to={`/blog/${post.slug?.current}`}>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogMainImage
        src={urlFor(post.mainImage).url()}
        placeholder={post.title}
      />
      <BlogBodyText>
        {post.body[0].children[0].text.substring(0, 200) + '...'}
      </BlogBodyText>
      <CtaText>Read More</CtaText>
      <DateText>
        <TextSpan>published:</TextSpan>{' '}
        <TextSpan>
          {format(new Date(post.publishedAt), 'dd MMMM yyyy')}
        </TextSpan>
      </DateText>
    </CostumLink>
  );
}

export default BlogpostPreview;
