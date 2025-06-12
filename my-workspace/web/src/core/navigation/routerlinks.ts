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
            { label: 'Phones', icon: 'dashboard',route: '/products/electronics/phones' },
            { label: 'Laptops', route: '/products/electronics/laptops' }
          ]
        },
        {
          label: 'Clothing',
          icon: 'dashboard',
          route: '/dashboard'
        }
      ]
    },
    {
      label: 'Orders',
      icon: 'receipt_long',
      route: '/orders'
    }, {
      label: 'Orders',
      icon: 'receipt_long',
      route: '/orders'
    }, {
      label: 'Orders',
      icon: 'receipt_long',
      route: '/orders'
    }
];