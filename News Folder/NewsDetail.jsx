import { Container, Row, Col } from "react-bootstrap"
import {testimonial} from "../data/index"

import FaqComponent from "../components/FaqComponent"

const NewsDetail = () => {

  return (
  <div className="Detail-page">
    <div className="Detail">
      <Container>
        <Row className="mb-5">
          <Col>
          <h1 className="fw-bold text-center animate__animated animate__backInUp animate__delay-1s">Semua Detail Berita</h1>
          <p className="text-center animate__animated animate__backInUp animate__delay-1s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, perferendis!</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-1">
          { testimonial.map((data) => {
        return(
          <Col key={data.id} className="mb-5 border border-p-5">
            <p className="desc shadow animate__animated animate__backInUp animate__delay-2s">{data.desc}</p>
            <div className="people">
              <img src={data.image} alt={data.title} className="w-full h-20 m-1 object-hover animate__animated animate__backInUp animate__delay-1s"/>
              <div>
                <h5 className='text-3xl animate__animated animate__backInUp animate__delay-1s"'>{data.name}</h5>
                <p className='text-md animate__animated animate__backInUp animate__delay-1s"'>{data.skill}</p>
              </div>
            </div>
          </Col>
        )
      })}
        </Row>
      </Container>
    </div>
    <FaqComponent />
  </div>
  )
}

export default NewsDetail
