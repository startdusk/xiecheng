import React, {Fragment} from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

interface PropsType {
  title: string,
  sideImage: string,
  products: {src: string, title: string, price: string}[]
}

export const ProductCollection: React.FC<PropsType> = (props) => {
  return (
    <Fragment>
      <Divider orientation="left">
        <Title level={3}>{props.title}</Title>
      </Divider>
      <Row>
        <Col span={4}>
          <img 
            src={props.sideImage} 
            style={{ width: 200, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} 
          />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <img 
                src={props.products[0].src} 
                style={{ 
                  width: '90%', 
                  height: 320, 
                  display: 'block', 
                  marginLeft: 'auto', 
                  marginRight: 'auto' 
                }} 
              />
              <div style={{marginLeft: 25, marginRight: 25}}>
                <Text type="secondary">{props.products[0].title}</Text>
                <Text type="danger">$ {props.products[0].price} 起</Text>
              </div>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <img 
                    src={props.products[1].src} 
                    style={{width: 260, height: 150}} 
                  />
                  <div>
                    <Text type="secondary">{props.products[1].title}</Text>
                    <Text type="danger">$ {props.products[1].price} 起</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <img 
                    src={props.products[2].src} 
                    style={{width: 260, height: 150, marginLeft: 20}} 
                  />
                  <div>
                    <Text type="secondary">{props.products[2].title}</Text>
                    <Text type="danger">$ {props.products[2].price} 起</Text>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <img 
                    src={props.products[3].src} 
                    style={{width: 260, height: 150, marginTop: 20}} 
                  />
                  <div>
                    <Text type="secondary">{props.products[3].title}</Text>
                    <Text type="danger">$ {props.products[3].price} 起</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <img 
                    src={props.products[4].src} 
                    style={{width: 260, height: 150, marginTop: 20, marginLeft: 20}} 
                  />
                  <div>
                    <Text type="secondary">{props.products[4].title}</Text>
                    <Text type="danger">$ {props.products[4].price} 起</Text>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{marginTop: 20}}>
            <Col span={6}>
              <img 
                src={props.products[5].src} 
                style={{width: 260, height: 150}} 
              />
              <div>
                <Text type="secondary">{props.products[5].title}</Text>
                <Text type="danger">$ {props.products[5].price} 起</Text>
              </div>
            </Col>
            <Col span={6}>
              <img 
                src={props.products[6].src} 
                style={{width: 260, height: 150}} 
              />
              <div>
                <Text type="secondary">{props.products[6].title}</Text>
                <Text type="danger">$ {props.products[6].price} 起</Text>
              </div>
            </Col>
            <Col span={6}>
              <img 
                src={props.products[7].src} 
                style={{width: 260, height: 150}} 
              />
              <div>
                <Text type="secondary">{props.products[7].title}</Text>
                <Text type="danger">$ {props.products[7].price} 起</Text>
              </div>
            </Col>
            <Col span={6}>
              <img 
                src={props.products[8].src} 
                style={{width: 260, height: 150}} 
              />
              <div>
                <Text type="secondary">{props.products[8].title}</Text>
                <Text type="danger">$ {props.products[8].price} 起</Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  )
}