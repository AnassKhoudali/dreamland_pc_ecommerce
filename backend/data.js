import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Anass',
      email: 'anass@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'DreamLandPc',
        logo: '/images/DreamlandPC.jpg',
        description: 'Best prices',
        rating: 4.5,
        numReviews: 0,
      },
    },
    {
      name: 'Ahmed',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'MacBook pro',
      category: 'Laptops',
      image: '/images/MacBookPro.png', //679x829px
      price: 2300,
      countInStock: 10,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 0,
      description: 'Apple MackBoock Pro 2022',
    },
    {
      name: 'XPS 15',
      category: 'Laptops',
      image: '/images/DellXps15.png',
      price: 1400,
      countInStock: 20,
      brand: 'Dell',
      rating: 3.5,
      numReviews: 0,
      description: ' Dell XPS 15 2022',
    },
    {
      name: 'Zenbook 14 OLed',
      category: 'Laptops',
      image: '/images/Zenbook14OLed.png',
      price: 1400,
      countInStock: 10,
      brand: 'Asus',
      rating: 4,
      numReviews: 0,
      description: 'Asus Zenbook 14 oled',
    },
    {
      name: 'Macbook Air 2022',
      category: 'Laptops',
      image: '/images/MacBooAir2022.png',
      price: 1000,
      countInStock: 10,
      brand: 'Asus',
      rating: 3.5,
      numReviews: 0,
      description: 'The all new Macbook Air',
    },
    {
      name: 'Zenbook Duo',
      slug: 'Asus',
      category: 'Laptops',
      image: '/images/ZenbookDuo.png',
      price: 5000,
      countInStock: 20,
      brand: 'Asus',
      rating: 5,
      numReviews: 0,
      description: 'The beast of Asus',
    },
    {
      name: 'Nvidia GTX 1080',
      category: 'Graphic Cards',
      image: '/images/NvidiaGTX1080.png',
      price: 869,
      countInStock: 16,
      brand: 'Nvidia',
      rating: 2.5,
      numReviews: 0,
      description: 'The new gen of Nvidia 1080 series',
    },
    {
      name: 'Nvidia GTX 3080 TI',
      category: 'Graphic Cards',
      image: '/images/NvidiaGTX3080TI.png',
      price: 2000,
      countInStock: 10,
      brand: 'Nvidia',
      rating: 4.5,
      numReviews: 0,
      description: 'The new gen of Nvidia 3080 series',
    },
    {
      name: 'AMD Ryszen 5',
      category: 'Processors',
      image: '/images/AMDRyszen5.png',
      price: 200,
      countInStock: 100,
      brand: 'AMD',
      rating: 2,
      numReviews: 0,
      description: 'The all new AMD Ryzen 5 with enhenced thermals',
    },
    {
      name: 'AMD Ryzen 9',
      category: 'Processors',
      image: '/images/AMDRyzen9.png',
      price: 500,
      countInStock: 10,
      brand: 'Nvidia',
      rating: 5,
      numReviews: 0,
      description: 'The powerfull AMD Ryzen 9 with metal cooling technology',
    },
    {
      name: '12th gen Intel core i7',
      category: 'Processors',
      image: '/images/12thGenIntelCoreI7.png',
      price: 600,
      countInStock: 10,
      brand: 'Intel',
      rating: 5,
      numReviews: 0,
      description:
        'The all new gen of intel core i7 series with efficiency cores',
    },
    {
      name: '12th gen Intel core i9',
      category: 'Processors',
      image: '/images/12thGenIntelCoreI9.png',
      price: 500,
      countInStock: 10,
      brand: 'Intel',
      rating: 3.5,
      numReviews: 0,
      description: `The word's fastest desktop processor`,
    },
  ],
};
export default data;