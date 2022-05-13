import React from 'react'
import Offer from './Offer/Offer';
import offers from '../offers.json';

function Offers() {

  const data = offers.offers;


  return (
    <div className="d-flex justify-content-center">
      {data ? data.map(item =>
        <Offer
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          engagement={item.duration}
          duration={item.duration}
        />
      ): null}
    </div>
  )
}

export default Offers