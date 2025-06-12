export const MENU_ITEMS = [
 {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Products',
      icon: 'inventory',
      children: [
        {
          label: 'Electronics',
          children: [
            { label: 'Phones', route: '/products/electronics/phones' },
            { label: 'Laptops', route: '/products/electronics/laptops' }
          ]
        },
        {
          label: 'Clothing',
          children: [
            { label: 'Men',  children: [
            { label: 'Men',  children: [
            { label: 'Men', route: '/products/clothing/men' },
            { label: 'Women', route: '/products/clothing/women' }
          ] },
            { label: 'Women', route: '/products/clothing/women' }
          ] },
            { label: 'Women', route: '/products/clothing/women' }
          ]
        }
      ]
    },
    {
      label: 'Orders',
      icon: 'receipt_long',
      route: '/orders'
    }
];