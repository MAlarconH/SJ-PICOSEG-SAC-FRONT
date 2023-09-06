// _app.js

import './global.css'; // Import the global CSS file
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Your code here
  return <Component {...pageProps} />;
}

export default MyApp;
