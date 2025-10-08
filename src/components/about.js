import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/kucing/kucing1.jpeg';

function AppAbout() {
  const html = 60;
  const responsive = 95;
  const photoshop = 40;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Soal Kucing</h2>
          <div className="subtitle">kucing</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Kucing ini bangun jam lima pagi, duduk di dada manusia, tatapannya kayak bos kosan, suara meong pelan, tapi bikin orang wajib bangun.</p>
            <p>Oyen ini kalau duduk depan kulkas, auranya kayak mafia. Tatapan kosong penuh ancaman, seakan bilang: buka kulkas sekarang, atau siap-siap kena hukuman.</p>
            <div className='progress-block'>
              <h4>love hooman</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>lucu</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>ganas</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;