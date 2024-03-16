import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: white; 
  background-color: #1f5156;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(var(--d) * 1.5) var(--e);
    pointer-events: none;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.320) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.540) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.790) 100%
    );
    transform: translateY(-50%);
    transition: transform calc(var(--d) * 2) var(--e);
  }

  &:hover {
    &:before {
      transform: translateY(-4%);
    }
    &:after {
      transform: translateY(-50%);
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform var(--d) var(--e);
  z-index: 1;

  > * + * {
    margin-top: 1rem;
  }

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
  }

  .copy {
    font-family: var(--font-serif);
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
  }

  .btn {
    cursor: pointer;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: none;

    &:hover {
      background-color: lighten(black, 5%);
    }

    &:focus {
      outline: 1px dashed yellow;
      outline-offset: 3px;
    }
  }
`;

const Card = ({ title, copy, button }) => {
  return (
    <CardWrapper>
      <ContentWrapper>
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <button className="btn">{button}</button>
      </ContentWrapper>
    </CardWrapper>
  );
};

const cards = [
  { title: 'DeepFake Detection System', copy: 'A technology designed to identify and mitigate the spread of deepfake content.' },
  { title: 'Advanced AI Filters', copy: 'Utilize cutting-edge artificial intelligence filters for real-time deepfake detection.' },
  { title: 'Deepfake Prevention Tools', copy: 'Protect your content with powerful deepfake prevention tools and techniques.' },
  { title: 'Secure Your Media', copy: 'Keep your media secure and authentic with our deepfake detection and prevention solutions.'}
];

const PageContent = styled.div`
  display: grid;
  grid-gap: 5rem;
  padding: 3rem;
  margin: 0 auto;
  font-family: var(--font-sans);

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardsSection = () => {
  return (
    <PageContent>
      {cards.map((card, index) => (
        <Card key={index} title={card.title} copy={card.copy} button={card.button} />
      ))}
    </PageContent>
  );
};

export default CardsSection;
