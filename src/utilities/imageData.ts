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
      src: '/images/closing-time/closingtime8.png',
      alt: 'Awesome watch',
    },
    {
      id: '10',
      src: '/images/closing-time/closingtime9.png',
      alt: 'Awesome watch',
    },
    {
      id: '11',
      src: '/images/closing-time/closingtime10.png',
      alt: 'Awesome watch',
    },
    {
      id: '12',
      src: '/images/closing-time/closingtime11.png',
      alt: 'Awesome watch',
    },
    {
      id: '13',
      src: '/images/closing-time/closingtime12.png',
      alt: 'Awesome watch',
    },
    {
      id: '14',
      src: '/images/closing-time/closingtime13.png',
      alt: 'Awesome watch',
    },
    {
      id: '15',
      src: '/images/closing-time/closingtime14.png',
      alt: 'Awesome watch',
    },
    {
      id: '16',
      src: '/images/closing-time/closingtime15.png',
      alt: 'Awesome watch',
    },
    {
      id: '17',
      src: '/images/closing-time/closingtime16.png',
      alt: 'Awesome watch',
    },
    {
      id: '18',
      src: '/images/closing-time/closingtime17.png',
      alt: 'Awesome watch',
    },
    {
      id: '19',
      src: '/images/closing-time/closingtime18.png',
      alt: 'Awesome watch',
    },
    {
      id: '20',
      src: '/images/closing-time/closingtime19.png',
      alt: 'Awesome watch',
    },
    {
      id: '21',
      src: '/images/closing-time/closingtime20.png',
      alt: 'Awesome watch',
    },
    {
      id: '25',
      src: '/images/photos-set/set5.png',
      alt: 'Awesome watch',
    },
    {
      id: '26',
      src: '/images/misc/misc1.png',
      alt: 'Awesome watch',
    },
    {
      id: '27',
      src: '/images/misc/misc2.png',
      alt: 'Awesome watch',
    },
    {
      id: '28',
      src: '/images/misc/misc3.png',
      alt: 'Awesome watch',
    },
    {
      id: '29',
      src: '/images/misc/misc4.png',
      alt: 'Awesome watch',
    },
    {
      id: '30',
      src: '/images/misc/3awards.png',
      alt: 'Awesome watch',
    },
    {
      id: '31',
      src: '/images/misc/berlin.png',
      alt: 'Awesome watch',
    },
    {
      id: '32',
      src: '/images/misc/closingtimepgh.png',
      alt: 'Awesome watch',
    },
    {
      id: '33',
      src: '/images/misc/ctpinewood.png',
      alt: 'Awesome watch',
    },
  ]
  
  
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type ProductImage = ElementType<typeof images>