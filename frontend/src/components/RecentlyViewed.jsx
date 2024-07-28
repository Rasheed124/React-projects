import React, { useEffect, useState } from 'react'
import Item from './Item';

const RecentlyViewed = () => {

  const [recently_viewed, setRecently_viewed] = useState([])


  useEffect(() => {
    const recentlyViewed = async () => {
      try {
        const response = await fetch('http://localhost:4000/products/recentlyviewed');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecently_viewed(data);
      } catch (error) {
        console.error('Failed to fetch recentlyviewed:', error);
      }
    };

    recentlyViewed();
  }, []);


  return (
    <>

    <div className='grid grid-cols-2 gap-5'>
    {recently_viewed.map((item, i) => {
             return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  features={item.features}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              );
          })}
    </div>
  
    </>
  )
}

export default RecentlyViewed
