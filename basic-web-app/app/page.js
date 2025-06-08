// "use client"
// import React, { useState } from 'react';
// import Header from '@/Components/Header';

// const page = () => {
//   const [user, setUser] = useState("HIDED");
//   const [producer, setProducer] = useState("Eternal");

//   return (
//     <div>
//       <Header user={user} producer={producer} />
//       Page
//     </div>
//   )
// }

// export default page

// ====================== Routing ======================
// 'use client'
// import React, { useState } from 'react'; 
// // import Link from 'next/link';

// const page = () => {
//   return (
//     <div>
//       <h1>This is Home Page</h1>
//     </div>
//   )
// }

// export default page

// ====================== Advanced API Axios ======================
'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const page = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=3');
      // console.log(response.data);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchImages} className="px-5 py-3 bg-blue-600 font-bold">
        Get Images
      </button>
      <div className="">
        {images.map((image) => (
          <div key={image.id} className="flex items-center gap-3 my-3">
            <img
              src={image.download_url}
              alt={image.author}
              className="w-100 object-cover rounded-md"
            />
            <p className="text-lg font-semibold">{image.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page

