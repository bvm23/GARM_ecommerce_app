import { IProduct, type IMenuData } from '../models/constants.model';

export const MENUDATA: IMenuData = {
  shop: [
    { name: 'shop all', options: ['new', 'sales'], href: '/shop' },
    { name: 'men', options: ['pants', 'outerwear', 'shirts', 'sales'] },
    { name: 'women', options: ['pants', 'knitwear', 'shirts', 'sales'] },
    { name: 'accessories', options: ['hats', 'bags'] },
  ],
  collections: [
    { name: 'winter 2025' },
    { name: 'essentials' },
    { name: 'classics' },
  ],
  more: [
    { name: 'social', options: ['twitter', 'instagram', 'tiktok'] },
    { name: 'help', options: ['faq', 'contact', 'refunds'] },
    { name: 'legal', options: ['privacy policy', 'terms'] },
  ],
};

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Men's Classic Denim Jeans",
    img: 'img2.avif',
    price: 59.99,
    type: 'women',
  },
  {
    id: 2,
    name: "Women's Floral Summer Dress",
    img: 'img3.avif',
    price: 45.0,
    type: 'women',
  },
  {
    id: 3,
    name: 'Unisex Hooded Sweatshirt',
    img: 'img4.avif',
    price: 35.5,
    type: 'women',
  },
  {
    id: 4,
    name: "Kid's Graphic T-Shirt",
    img: 'img5.avif',
    price: 18.0,
    type: 'men',
  },
  {
    id: 5,
    name: "Men's Formal Dress Shirt",
    img: 'img6.avif',
    price: 65.0,
    type: 'women',
  },
  {
    id: 6,
    name: "Women's High-Waisted Leggings",
    img: 'img7.avif',
    price: 29.99,
    type: 'men',
  },
  {
    id: 7,
    name: 'Sportswear Jogger Pants',
    img: 'img8.avif',
    price: 49.0,
    type: 'men',
  },
  {
    id: 8,
    name: "Women's Winter Coat",
    img: 'img9.avif',
    price: 120.0,
    type: 'women',
  },
  {
    id: 9,
    name: "Men's Polo Shirt",
    img: 'img10.avif',
    price: 30.0,
    type: 'women',
  },
  {
    id: 10,
    name: "Kid's Denim Overalls",
    img: 'img11.avif',
    price: 40.0,
    type: 'men',
  },
  {
    id: 11,
    name: "Women's Blazer Jacket",
    img: 'img12.avif',
    price: 75.0,
    type: 'men',
  },
];
