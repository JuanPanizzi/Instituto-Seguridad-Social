import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import jubilados from '../recursos/jubilados2.webp'
import familia from '../recursos/familia2.webp'
import hotel from '../recursos/hotel.jpg'
import { NavLink } from 'react-router-dom';

function CardGrid() {

    const cardData = [
        { title: 'Jubilaciones', content: 'Conozca todos los tramites para realizar su jubilació', srcImg: jubilados, link: "/jubilaciones" },
        { title: 'Obra Social', content: 'Conozca todos los tramites para realizar su obra social', srcImg: familia, link: "/obraSocial" },
        { title: 'Turismo', content: 'Conozca los hoteles y alojamientos para afiliados', srcImg: hotel, link: '/turismo' }
        // Agrega más datos de tarjetas según sea necesario
      ];

  return (
    <Row xs={1} md={3} className="g-5">
      {cardData.map((cardObj, idx) => (
        <Col key={idx}  lg={4}>
          <Card className='w-75 mx-auto'>
            <Card.Img variant="top" src={cardObj.srcImg} />
            <Card.Body>
              <Card.Title>{cardObj.title}</Card.Title>
              <Card.Text>
                {cardObj.content}
              </Card.Text>
              <NavLink to={cardObj.link}>
              <Button variant="success" >Ver más</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardGrid;