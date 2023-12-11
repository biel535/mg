import React from 'react';
import Article from './Article';
import Footer from '../components/Footer';
function Blog() {
  return (
   <>
         <div className='cards1'>
      <h1>Kliknij w artykuł, który Cię intersuje by dowiedzieć się więcej!</h1>
      <div className='cards1__container'>
        <div className='cards1__wrapper'>
          <ul className='cards1__items'>
         <Article />
         </ul>
          </div>
        </div>
      </div>
      <Footer />
      </>
  )
}

export default Blog
