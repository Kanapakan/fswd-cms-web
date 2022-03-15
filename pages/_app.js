import React, { useState } from 'react'
import '../components/Navbar.css'
import Layout from '../components/Layout'
import '../styles/globals.css'
import Router from 'next/router'
NProgress.configure({ showSpinner: false });
import NProgress from 'nprogress'
import Loader from '../components/Loading';
import { Box } from '@material-ui/core';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: 24,
  p: 4,
  borderRadius: '0.5rem',

};

export default function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done()

    setLoading(false)
  })
  return (
      <Layout>
        {loading &&
        <Modal
          open={loading}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Loader />
          </Box>
        </Modal>}
      
        <Component {...pageProps} />

      </Layout>
      
  
)
}