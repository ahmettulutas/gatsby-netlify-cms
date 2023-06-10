import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import contact from '../../../static/img/contact.jpg';
import { Form } from '../../components/Form';
/* import { BackgroundTitle } from '../../components/BackgroundTitle'; */


const GetAppointment = () => (
  <Layout title={'Meltem Ulutaş Randevu'} description={'Meltem Ulutaş ile iletişime geçin. Psikolog randevusu oluşturun. Psikolojik destek almak için iletişime geçin.'}>
    <Hero title={'Randevu'} background={contact} isHalfHero/>
    <div className='page-container'>
      {/* <BackgroundTitle title={'Randevu'} /> */}
      <h1 className='highlighted'>Randevu Oluşturun</h1>
      <section className='contact flex mobile-column-direction'>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
          <Form/>
        </div>
      </section>
    </div>
  </Layout>
);
export default GetAppointment;