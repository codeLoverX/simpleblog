
import type { NextPage } from 'next'
import { ReactNode } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

type Props = {
    children?: ReactNode;
  };

const MainLayout = (props: Props) => {
    return (
        <>
           <Header title="Main Page"/>
           <main>{props?.children}</main>
           <Footer/>
        </>
    )
}

export default MainLayout
