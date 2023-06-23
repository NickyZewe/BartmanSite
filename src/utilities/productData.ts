export const products = [
    {
      id: '1',
      name: 'Product 1',
      currency: 'USD',
      price: 100,
      flag: 'new',
      imageUrl:
        '',

      
      link: ''

    },
    {
      id: '2',
      name: 'Product 2',
      currency: 'USD',
      price: 200,
      imageUrl:
      "",
    
      
      link: ''

    },
    {
      id: '3',
      name: 'Product 3',
      currency: 'USD',
      price: 300,
      imageUrl:
        '',

      
      link: ''
    },
    {
      id: '4',
      name: 'Product 4',
      currency: 'USD',
      price: 150,
      imageUrl:
        '',

      
      link: ''

    },
   
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Product = ElementType<typeof products>
