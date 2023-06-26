export const images = [
    {
      id: '01',
      src: '/images/closing-time/closingtime1.png',
      alt: 'Awesome watch',
    },
    {
      id: '02',
      src: '/images/closing-time/closingtime2.png',
      alt: 'Awesome watch',
    },
    {
      id: '03',
      src: '/images/closing-time/closingtime3.png',
      alt: 'Awesome watch',
    },
    {
      id: '04',
      src: '/images/closing-time/closingtime4.png',
      alt: 'Awesome watch',
    },
    {
      id: '05',
      src: '/images/closing-time/closingtime5.png',
      alt: 'Awesome watch',
    },
    {
      id: '06',
      src: '/images/closing-time/closingtime6.png',
      alt: 'Awesome watch',
    },
    {
      id: '07',
      src: '/images/closing-time/closingtime7.png',
      alt: 'Awesome watch',
    },
    {
      id: '08',
      src: '/images/photos-set/set1.png',
      alt: 'Awesome watch',
    },
    {
      id: '09',
      src: '/images/photos-set/set2.png',
      alt: 'Awesome watch',
    },
    {
      id: '10',
      src: '/images/photos-set/set3.png',
      alt: 'Awesome watch',
    },
    {
      id: '11',
      src: '/images/photos-set/set4.png',
      alt: 'Awesome watch',
    },
    {
      id: '12',
      src: '/images/photos-set/set5.png',
      alt: 'Awesome watch',
    },
  ]
  
  
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type ProductImage = ElementType<typeof images>