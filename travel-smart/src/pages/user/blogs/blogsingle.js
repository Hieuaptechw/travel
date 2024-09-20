import React from 'react';
import './blogsingle.scss';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import banner from '../../../assets/images/1.png';
import img10 from '../../../assets/images/10.png';
import img11 from '../../../assets/images/11.png';
const BlogSinglePage = () => {
    return (
        <div>
            <Container fluid="md">
                <Row className="mb-4">
                    <Col >
                        <div className='single__top text-center'>
                            <span className='single__subsm'>Art</span>
                            <h2 className='single__title'>10 European ski destinations you should visit this winter</h2>
                            <span className='single__sub'>Jan 06, 2023</span>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className='single__banner text-center'>
                            <Image src={banner} fluid style={{ width: "958px", height: "458px", borderRadius: "9px" }} />;
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='single__contents'>
                            <h3 className='single__contents_title'>What makes a good brand book?</h3>
                            <p>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit gravida rutrum quisque non. At urna condimentum mattis pellentesque id nibh tortor. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat ac felis.</p>
                            <ul>
                                <li>Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</li>
                                <li>At urna condimentum mattis pellentesque id nibh. Laoreet non curabitur</li>
                                <li>Magna etiam tempor orci eu lobortis elementum.</li>
                                <li>Bibendum est ultricies integer quis. Semper eget duis at tellus.</li>
                            </ul>
                            <h4>“Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris.“</h4>
                            <p>Donec purus posuere nullam lacus aliquam egestas arcu. A egestas a, tellus massa, ornare vulputate. Erat enim eget laoreet ullamcorper lectus aliquet nullam tempus id. Dignissim convallis quam aliquam rhoncus, lectus nullam viverra. Bibendum dignissim tortor, phasellus pellentesque commodo, turpis vel eu. Donec consectetur ipsum nibh lobortis elementum mus velit tincidunt elementum. Ridiculus eu convallis eu mattis iaculis et, in dolor. Sem libero, tortor suspendisse et, purus euismod posuere sit. Risus dui ut viverra venenatis ipsum tincidunt non, proin. Euismod pharetra sit ac nisi. Erat lacus, amet quisque urna faucibus. Rhoncus praesent faucibus rhoncus nec adipiscing tristique sed facilisis velit.</p>
                            <p>Neque nulla porta ut urna rutrum. Aliquam cursus arcu tincidunt mus dictum sit euismod cum id. Dictum integer ultricies arcu fermentum fermentum sem consectetur. Consectetur eleifend aenean eu neque euismod amet parturient turpis vitae. Faucibus ipsum felis et duis fames.</p>
                            <div className='single__contents_img d-flex justify-content-between'>
                                <Image src={img10} rounded style={{width: "700", height: "250px"}} />
                                <Image src={img11} rounded style={{width: "700", height: "250px"}} />    
                            </div>
                            
                        </div>
                                 
                           
                       
                        
                   
                    </Col>
    
                </Row>
            </Container>
        </div>
    );
};

export default BlogSinglePage;