import React from 'react';
import Hero from './component/Hero';
import ProductHighlights from './component/ProductHighlights';

const page = () => {
  return (
    <div className='text-red-500'>
      <Hero></Hero>
      <ProductHighlights></ProductHighlights>
    </div>
  );
};

export default page;