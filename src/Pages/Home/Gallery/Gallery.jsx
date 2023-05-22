import React from 'react';

const Gallery = () => {
  const images = [
    'https://ae01.alicdn.com/kf/HTB1ziEWQpXXXXX1aXXXq6xXFXXXC/1-Set-Golf-Toys-for-Children-Multicolor-Plastic-Outdoor-Backyard-Sport-Games-Kids-Interest-Development-Toy.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61f-%2BqKZ1WL.jpg',
    'https://th.bing.com/th/id/OIP.zdQroG05LoqAi_SZ0EeYyAHaHa?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.3KDweIWslMj_gy_dd21o3gHaHa?pid=ImgDet&rs=1',
    'https://ae01.alicdn.com/kf/HTB1wm6qPXXXXXa4XFXXq6xXFXXXj/mini-indoor-playground-toy-for-kids-YLW-IN1507.jpg',
    'https://th.bing.com/th/id/R.c5396fbbe0775817401529d206116761?rik=To5aXa7BXSFiwQ&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.c5396fbbe0775817401529d206116761?rik=To5aXa7BXSFiwQ&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.43be9e3b8d645af9fe3f60c4fac81889?rik=L0cWef9uc1S0Lw&pid=ImgRaw&r=0',
    'https://ae01.alicdn.com/kf/HTB1ziEWQpXXXXX1aXXXq6xXFXXXC/1-Set-Golf-Toys-for-Children-Multicolor-Plastic-Outdoor-Backyard-Sport-Games-Kids-Interest-Development-Toy.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61f-%2BqKZ1WL.jpg',
    'https://th.bing.com/th/id/OIP.P_Y-iQNUBsfzqjubdzZqBQHaHa?pid=ImgDet&rs=1',
    'https://ae01.alicdn.com/kf/HTB1kN4RNpXXXXbjXVXXq6xXFXXXz/New-Arrival-Kids-Inflatable-Trampoline-Safety-Indoor-Toys-Children-Bounce-Jump-Playhouse-Toddler-Outdoor-Jumping-Bed.jpg',
  ];

  return (
    <div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-0">
        {images.map((imageUrl, index) => (
          <div key={index}  className="aspect-w-1 aspect-h-1">
            <img data-aos="fade-up"
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto border-0 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
