import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/kucing/41.jpeg'),
    title: 'kucing 1',
    subtitle: 'kucing'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/kucing/40.jpeg'),
    title: 'kucing 2',
    subtitle: 'kucing'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/kucing/39.jpeg'),
    title: 'kucing 3',
    subtitle: 'kucing'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/kucing/38.jpeg'),
    title: 'kucing 4',
    subtitle: 'kucing'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/kucing/37.jpeg'),
    title: 'kucing 5',
    subtitle: 'kucing'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/kucing/36.jpeg'),
    title: 'kucing 6',
    subtitle: 'kucing'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/kucing/35.jpeg'),
    title: 'kucing 7',
    subtitle: 'kucing'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/kucing/34.jpeg'),
    title: 'kucing 8',
    subtitle: 'kucing'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/kucing/33.jpeg'),
    title: 'kucing 9',
    subtitle: 'kucing'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>jajaran kucing</h2>
          <div className="subtitle">kucing</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;