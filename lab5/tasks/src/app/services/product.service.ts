import {Injectable} from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService{
    categories: Category[] = [
        {id: 1, name: 'Smartphones'},
        {id: 2, name: 'Laptops'},
        {id: 3, name: 'Headphones'},
        {id: 4, name: 'Tablets'}
    ];

    products: Product[] = [
        {
            id:1,
            name:'Смартфон Apple iPhone 17 Pro',
            description: '256Gb оранжевый',
            price: 803600,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
            link:'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
            likes:1001,
            categoryID: 1, 
        },

        {
            id:2,
            name: 'Смартфон Apple iPhone 15 ',
            description: '128Gb черный',
            price: 399700,
            rating: 4.9,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
            likes: 4439,
            categoryID: 1,
        },
        {
            id:3,
            name: 'Смартфон Apple iPhone 17 Pro',
            description: '256Gb темно-синий',
            price: 788680,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
            likes: 941,
            categoryID: 1 
        },
        {
            id:4,
            name: 'Смартфон Apple iPhone 16',
            description: '128Gb черный',
            price: 465500,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
            likes: 1671,
            categoryID: 1,
        },
        {
            id:5,
            name: 'Смартфон Apple iPhone 13',
            description: '128Gb белый',
            price: 318950,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000',
            likes: 4890,
            categoryID: 1
        },
        {
            id:6,
            name:   'Ноутбук Apple MacBook Air 13 2020 13.3',
            description: '8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
            price: 439989,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
            likes: 580,
            categoryID: 2, 
        },
        {
            id:7,
            name: 'Планшет Apple iPad Air 11 2025',
            description: 'Wi-Fi 11 дюйм 8 Гб/128 Гб серый',
            price: 328150,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
            link:'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
            likes: 126,
            categoryID: 2 
        },
        {
            id:8,
            name: 'Ноутбук Apple MacBook Air 13 2025',
            description: '/ 16 Гб / SSD 256 Гб / macOS / MW123',
            price: 524480,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
            likes: 121,
            categoryID: 2 
        },
        {
            id:9, 
            name: 'Ноутбук ASUS VivoBook 15 X1504ZA-BQ1364W 15.6',
            description: '/ 16 Гб / SSD 512 Гб / Win 11 / 90NB1021-M02090',
            price:309897,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=750000000',
            likes: 176,
            categoryID: 2, 
        },
        {
            id:10,
            name: 'Ноутбук ASUS TUF Gaming FA507NUR-LP127E 15.6',
            description: ' / 32 Гб / SSD 1000 Гб / Win 11 Pro / 90NR0JP5-M007S0',
            price: 824989,
            rating: 4.9,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p44/pe1/49606145.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-fa507nur-lp127e-15-6-32-gb-ssd-1000-gb-win-11-pro-90nr0jp5-m007s0-141557286/?c=750000000',
            likes:72,
            categoryID:2 
        },
        {
            id:11,
            name: 'Наушники Apple AirPods',
            description: '4 белый',
            price: 59978,
            rating:5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
            likes: 3215,
            categoryID: 3,
        },
        {
            id:12,
            name: 'Наушники Apple AirPods Pro',
            description: '2nd generation белый',
            price: 107315,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
            likes: 1236,
            categoryID: 3
        },
        {
            id:13,
            name: 'Наушники Apple AirPods Pro',
            description: '3 белый',
            price: 131315,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
            likes: 513,
            categoryID: 3
        },
        {
            id:14,
            name: 'Наушники Apple AirPods Max',
            description: '2 золотистый',
            price: 284994,
            rating: 5,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/pd5/3527355.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-zolotistyi-128622709/?c=750000000',
            likes:66,
            categoryID: 3 
        },
        {
            id:15,
            name: 'Наушники Apple EarPods',
            description: 'Lightning белый',
            price: 9510,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium',
            link: 'https://resources.cdn-kaspi.kz/img/m/p/p6a/p23/108964618.png?format=gallery-medium',
            likes: 2997,
            categoryID: 3
        },
        {
            id:16,
            name: 'Планшет Apple iPad A16 11 2025',
            description: ' Wi-Fi 11 дюйм 6 Гб/128 Гб синий',
            price: 199789,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000',
            likes: 417,
            categoryID: 4  
        },

        {
            id:17,
            name: 'Планшет Apple iPad Air 11 2025',
            description: 'Wi-Fi 11 дюйм 8 Гб/128 Гб серый',
            price: 328150,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
            link:'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
            likes: 126,
            categoryID: 4 
        },
        {
            id:18,
            name: 'Планшет Apple iPad Pro 13 2024',
            description: 'Wi-Fi 13 дюйм 16 Гб/1024 Гб черный',
            price: 982455,
            rating:5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/h7c/h90/86057441001502.jpg?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-2024-wi-fi-13-djuim-16-gb-1024-gb-chernyi-119584206/?c=750000000',
            likes: 3,
            categoryID: 4 
        },
        {
            id:19,
            name: 'Планшет Apple iPad Air 10.9 2022',
            description: 'Wi-Fi 10.9 дюйм 8 Гб/256 Гб синий',
            price: 359900,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/h18/he0/86369746878494.png?format=gallery-medium',
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-sinii-104235792/?c=750000000',
            likes: 59,
            categoryID: 4
        },
        {
            id:20,
            name: 'Планшет Apple iPad mini 8.3 2024',
            description: 'Wi-Fi 8.3 дюйм 8 Гб/128 Гб серый',
            price: 311751,
            rating: 5,
            image:  'https://resources.cdn-kaspi.kz/img/m/p/p45/p50/12213625.png?format=gallery-medium' ,
            link: 'https://kaspi.kz/shop/p/apple-ipad-mini-8-3-2024-wi-fi-8-3-djuim-8-gb-128-gb-seryi-131140447/?c=750000000',
            likes: 39,
            categoryID: 4
        },
    ]

    getProducts(): Product[] {
        return this.products;
    }
    getCategories(): Category[] {
        return this.categories;
    }
}

