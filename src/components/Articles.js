import { Avatar, Card, Row } from 'antd';
import React from 'react';
import illus1 from '../public/illus1.png';
import illus2 from '../public/illus2.png';
import illus3 from '../public/illus3.png';
import illus4 from '../public/illus4.png';
import logo2 from '../public/Group3.png';

const { Meta } = Card;
const articles = [
  {
    id: 1,
    title: 'Find Nearest Recycle Centers',
    text: ' ',
    author: 'Erkin',
    date: '27.01.22',
    img: illus2,
  },
  {
    id: 2,
    title: 'Find Waste Material Type with Scan',
    text: ' ',
    author: 'Erkin',
    date: '27.01.22',
    img: illus1,
  },
  {
    id: 3,
    title: 'Track and Share Your Recycle History',
    text: ' ',
    author: 'Erkin',
    date: '27.01.22',
    img: illus4,
  },
];

function Articles() {
  return (
    <div style={{ margin: '40px' }}>
      <Row justify="center">
        <h1 style={{ color: '#444', fontSize: '34px' }}>
          How WasteFind Helps?
        </h1>
      </Row>
      <Row justify="space-around">
        {articles.map((article) => {
          return (
            <Card
              hoverable="true"
              key={article.id}
              style={{
                width: 320,
                margin: '10px',
                borderRadius: '8%',
                padding: '13px',
              }}
              cover={
                <img
                  alt="example"
                  style={{
                    height: '240px',
                    objectFit: 'cover',
                  }}
                  src={article.img}
                />
              }
            >
              <h2 style={{ textAlign: 'center', color: '#444' }}>
                {article.title}
              </h2>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}

export default Articles;
