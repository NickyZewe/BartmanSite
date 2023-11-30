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
      name: 'Jim & Marlene’s Bangin’ Backyard Jam',
      imageUrl:'/images/misc/portfolio12.png',
      url:'https://vimeo.com/743437877'
      
    },
    {
      name: 'Shoshana & Moshe Wedding',
      imageUrl:'/images/misc/portfolio13.png',
      url:'https://youtu.be/LRNWcTngYK8'
      
    },
    {
      name: 'Multicultural Cooking Series',
      imageUrl:'/images/misc/portfolio14.png',
      url:'https://youtube.com/playlist?list=PLQQ8RwsRSXk4MIOnJyPLCYcnhHt2jQVln'
      
    },
    {
      name: 'Community Helpers',
      imageUrl:'/images/misc/portfolio15.png',
      url:'https://youtube.com/playlist?list=PLQQ8RwsRSXk5tLQy6YbZWSvFhdzMDh1OB'
      
    },
    {
      name: '#WPLNeighbors Campaign',
      imageUrl:'/images/misc/portfolio16.png',
      url:'https://youtube.com/playlist?list=PLQQ8RwsRSXk4yajxuk2skELoDrkg49YYC'
      
    },
    {
      name: 'Twilight Hike with the Allegheny Park Rangers',
      imageUrl:'/images/misc/portfolio17.png',
      url:'https://www.youtube.com/watch?v=TD6zvEZovTY'
      
    },
    {
      name: 'Behind the Stacks: Cataloging',
      imageUrl:'/images/misc/portfolio18.png',
      url:'https://www.youtube.com/watch?v=bTMn0t5WJBI'
      
    },
    {
      name: 'Bat Mitzvah (Lucy)',
      imageUrl:'/images/misc/portfolio19.png',
      url:'https://www.youtube.com/watch?v=XWfRI19mOj0'
      
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Category = ElementType<typeof categories>