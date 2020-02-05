import React from 'react';
import './style.less'
import { Layout, Breadcrumb } from 'antd';
import { Header } from '../Header'
import { Footer } from '../Footer'

interface PropsType {
  children: React.ReactNode
  breadcrumbItems?: string[]
}

export const MainLayout: React.FC<PropsType> = (props) => {
  return (
     <Layout className='main-layout'>
      <Header />
      <Layout.Content>
        <div className="page-content">
          { props.breadcrumbItems 
          ? <Breadcrumb style={{marginTop: 20}}>
              {props.breadcrumbItems.map((item, index) => 
                <Breadcrumb.Item key={`breadcrumb-item-${index}`}>{item}</Breadcrumb.Item>
              )} 
            </Breadcrumb>
          : null
          }
          { props.children }
        </div>
      </Layout.Content>
      <Footer />
     </Layout>
  )
}
