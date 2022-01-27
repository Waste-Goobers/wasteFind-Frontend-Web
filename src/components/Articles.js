import { Avatar, Card, Row } from 'antd';
import React from 'react';
import logo1 from '../public/Group1.png';
import logo2 from '../public/Group3.png';
const { Meta } = Card;
const articles = [
  {
    id: 1,
    title: 'WasteFind ı Keşfedin!',
    text: 'Web veya mobil uygulamamızdan geri dönüşüm seferberliğinizi başlatabilirsiniz.',
    author: 'Erkin',
    date: '27.01.22',
    img: logo1,
  },
  {
    id: 2,
    title: 'Bana En Yakın Geri Dönüşüm Noktasını Nasıl Bulabilirim?',
    text: 'Web veya mobil uygulamamızdan size en yakın geri dönüşüm noktalarını bulabilirsiniz.',
    author: 'Erkin',
    date: '27.01.22',
    img: logo2,
  },
  {
    id: 3,
    title: 'Atık Analizi Nasıl Yapabilirim',
    text: 'Mobil uygulamamızdan geri dönüştürmek istediğiniz atığınızı taratarak bulabilirsiniz',
    author: 'Erkin',
    date: '27.01.22',
    img: logo1,
  },
];

function Articles() {
  return (
    <div style={{ margin: '40px' }}>
      <Row justify="space-around">
        {articles.map((article) => {
          return (
            <Card
              hoverable="true"
              key={article.id}
              style={{ width: 320, margin: '10px' }}
              cover={
                <img
                  alt="example"
                  style={{
                    maxHeight: '160px',
                    objectFit: 'cover',
                  }}
                  src={article.img}
                />
              }
            >
              <Meta
                avatar={<Avatar src={logo2} />}
                title={article.title}
                description={article.text}
              />
            </Card>
          );
        })}
      </Row>
    </div>
  );
}

export default Articles;
