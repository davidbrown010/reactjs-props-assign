import React from 'react';
import './style.css';

import Card from './Card/Card.js';
import ImgParagraph from './ImgParagraph/ImgParagraph.js';
import Navbar from './Navbar/Navbar.js';
import BlogPostSection from './BlogPostSection/BlogPostSection.js';

const paragraphContent = {
  paragraphText:
    'Jim Bob is a dynamic developer, a lifelong learner and an experienced public cloud developer. He can bring skills to your team to mentor others. Lead other team members to develop their skills. culpa voluptatibus quasi sunt facere, dolorem aspernatur impedit voluptates',
  imageURL: 'images/keyboard.jpg',
};

const blogJSON = {
  headerText: 'This section reserved for a mini blog post form',
  blogList: [
    {
      headline: 'First tiny tech blog posts',
    },
    {
      headline: 'Second tiny tech blog posts',
    },
    {
      headline: 'Third tiny tech blog posts',
    },
  ],
};

const cardList = [
  {
    imageURL: 'images/java.png',
    title: 'Java',
    description:
      'List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.',
  },

  {
    imageURL: 'images/javascript.png',
    title: 'JavaScript',
    description:
      'List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.',
  },

  {
    imageURL: 'images/react.png',
    title: 'React',
    description:
      'List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.',
  },

  {
    imageURL: 'images/sql.png',
    title: 'Databases',
    description:
      'List skills technologies here. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor. Aenean commodo ligula eget dolor.',
  },
];

export default function App() {
  return (
    <>
      <Navbar />

      <ImgParagraph {...paragraphContent} />

      <BlogPostSection {...blogJSON} />

      <div class="container">
        <div className="row">
          {cardList.map((cardJSON, index) => (
            <Card key={index} {...cardJSON} />
          ))}
        </div>
      </div>
    </>
  );
}
