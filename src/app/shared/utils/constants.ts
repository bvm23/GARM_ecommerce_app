import { type IMenuData } from '../models/constants.model';

export const MENUDATA: IMenuData = {
  shop: [
    { name: 'shop all', options: ['new', 'sales'] },
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

export const PRODUCTS: { name: string; img: string }[] = [
  { name: 'sport crossbody', img: 'img2.avif' },
  { name: 'sport crossbody', img: 'img3.avif' },
  { name: 'sport crossbody', img: 'img4.avif' },
  { name: 'sport crossbody', img: 'img5.avif' },
  { name: 'sport crossbody', img: 'img6.avif' },
  { name: 'sport crossbody', img: 'img7.avif' },
  { name: 'sport crossbody', img: 'img8.avif' },
  { name: 'sport crossbody', img: 'img9.avif' },
  { name: 'sport crossbody', img: 'img10.avif' },
  { name: 'sport crossbody', img: 'img11.avif' },
  { name: 'sport crossbody', img: 'img12.avif' },
];
