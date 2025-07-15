import { type IMenuData } from '../models/constants.model';

export const MENUDATA: IMenuData = {
  shop: [
    { name: 'shop all', options: ['new,sales'] },
    { name: 'accessories', options: ['hats', 'bags'] },
    { name: 'men', options: ['pants', 'outerwear', 'shirts', 'sales'] },
    { name: 'women', options: ['pants', 'knitwear', 'shirts', 'sales'] },
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
