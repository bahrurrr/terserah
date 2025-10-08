import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/kucing/8.jpeg'),
    title: 'Si Mpus Pagi Hari',
    description: 'Jam 5 subuh udah joget di atas perut orang. Bukan alarm, tapi lebih ganas.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/kucing/1.jpeg'),
    title: 'Si Oyen Tukang Tidur',
    description: 'Kerjaannya cuma makan → tidur → repeat. Hidupnya simple, tagihannya nol.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/kucing/7.jpeg'),
    title: 'Kocheng Oreng Mafia',
    description: 'Tatapan kosong penuh perhitungan. Jangan berani buka kulkas tanpa izin bos besar.',
    link: 'https://www.twitter.com'
  }
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;