export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    imageUrl: 'assets/images/phone-xl.jpg'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    imageUrl: 'assets/images/phone-mini.jpg'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    imageUrl: 'assets/images/phone-standard.jpg'
  },
  {
    id: 4,
    name: 'IPhone',
    price: 999,
    description: '',
    imageUrl: 'assets/images/iphone.jpg'
  },
  {
    id: 5,
    name: 'Old Phone',
    price: 599,
    description: 'A resistant phone with a great battery',
    imageUrl: 'assets/images/old-phone.jpg'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/