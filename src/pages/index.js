import React from 'react';

import Layout from '@/layouts';
import Section from '@/components/Section';
import GeneralLayout from '@/layouts/GeneralLayout';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';





export default function Home() {
  

  return (
    <div>
      <Header/>
        <GeneralLayout>
          <h1>Home</h1>
          
        </GeneralLayout>
      <Footer/>
    </div>
  );
};
