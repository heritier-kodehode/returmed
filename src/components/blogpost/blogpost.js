import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { client } from '../../lib/client';
import imageUrlBuilder from '@sanity/image-url';

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin: 2.5rem auto;
  color: #ced4da;
  @media (min-width: 990px) {
    width: 70%;
    font-size: 2.5rem;
  }
`;
const BlogMainImage = styled.img`
  width: 100%;
  height: 200px;
  padding: 1rem 0;
  margin: 2rem 0;
`;
const BlogBodyText = styled.p`
  margin: 1.5rem auto;
  line-height: 2.5;
  word-spacing: 1.8;
  width: 95%;
  font-weight: 700;
  color: #ced4da;
  @media (min-width: 990px) {
    width: 70%;
    font-size: 1.5rem;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 7rem auto 0 auto;
  padding: 1rem;
  background-color: #1c2f38;
  color: white;
  @media (min-width: 990px) {
    margin-top: 100px;

    flex-wrap: wrap;
  }
`;

const SectionHeader = styled.header`
  width: 100%;
  background: #385d6d;

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

  padding: 2rem 0;
  text-decoration: underline;
  color: white;
`;

function Blogpost() {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  const [blogpost, setBlogPost] = useState([]);

  const { slug } = useParams();
  const params = { slug: slug };

  const query = `*[_type == "post" && slug.current == $slug][0]{title, mainImage, body}`;

  useEffect(() => {
    client
      .fetch(query, params)
      .then((data) => {
        console.log(data);
        setBlogPost(data);

        document.title = `${data.title}`;
        console.log(document.title);
      })
      .catch((error) => console.log(error));
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      {blogpost && (
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>blog</SectionTitle>
          </SectionHeader>
          <BlogTitle>
            {blogpost.title}
            {blogpost.mainImage && (
              <BlogMainImage
                src={urlFor(blogpost?.mainImage).url()}
                placeholder={blogpost?.title}
              />
            )}
          </BlogTitle>

          {!blogpost
            ? null
            : blogpost.body?.map((bodyText) => {
                return (
                  <BlogBodyText key={bodyText.children[0]._key}>
                    {bodyText.children[0].text}
                  </BlogBodyText>
                );
              })}
        </SectionContainer>
      )}
    </>
  );
}

export default Blogpost;
