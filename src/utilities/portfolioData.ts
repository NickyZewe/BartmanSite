export const categories = [
    {
      name: 'Closing Time',
      imageUrl:
        '/images/closing-time/poster.png',
      url: '/closingtime',
    },
    {
      name: 'Trailer One',
      imageUrl:'/images/misc/portfolio8.png',
      
      url: 'https://www.youtube.com/watch?v=4HaMf4Sj9UE',
    },
    {
      name: 'Trailer Two',
      imageUrl:'/images/misc/portfolio9.png',
      url: ' https://youtu.be/L85Cu4GHOJA',
    },
    {
      name: 'Directing Reel 2023',
      imageUrl:
        '/images/misc/portfolio11.png',
      url: 'https://www.youtube.com/watch?v=Y5eDiXV9Ua4',
    },
    {
      name: 'Behind the scenes',
      imageUrl:'/images/photos-set/set2.png',
      url: 'https://www.youtube.com/watch?v=l-wSxwoQhSM',
    },
    {
      name: 'A Short Film About Death',
      imageUrl:'/images/misc/portfolio5.png',
      url: 'https://www.youtube.com/watch?v=QVmEd9yI-ms',
    },
    {
      name: 'DUKHA',
      imageUrl:'/images/misc/portfolio10.png',
      url: 'https://www.youtube.com/watch?v=BQo2diwJ3xM',
    },
    {
      name: 'Possession',
      imageUrl:'/images/misc/portfolio7.png',
      url: 'https://www.youtube.com/watch?v=MoLEnaObiik',
    },
    {
      name: 'Videography Work: TBA',
      imageUrl:'/images/photos-set/set5.png',
      
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Category = ElementType<typeof categories>