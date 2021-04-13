import { Fragment } from 'react';

import '../../public/css/bootstrap.min.css';
import '../../public/css/font-awesome.min.css';
import '../../public/css/prettyPhoto.css';
import '../../public/css/animate.css';
import '../../public/css/main.css';
import '../../public/css/globals.css'
import { Footer, Header, Bottom } from '../components';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Bottom />
      <Footer />
      
    </Fragment>
  );
}
