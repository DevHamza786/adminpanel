export default [
  { heading: 'Apps & Pages' },
  {
    title: 'User',
    icon: { icon: 'bx-user' },
    children: [
      { title: 'List', to: 'apps-user-list' },
      { title: 'View', to: { name: 'apps-user-view-id', params: { id: 21 } } },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Content',
    icon: { icon: 'bx-book-content' },
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Bazar',
    icon: { icon: 'bx-store-alt' },
  },
  { heading: 'Apps & Pages' },
  {
    title: 'FanPage',
    icon: { icon: 'bx-user-pin' },
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Ecommerce',
    icon: { icon: 'bx-shopping-bag' },
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Service Ads',
    icon: { icon: 'bx-category' },
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Product Ads',
    icon: { icon: 'bx-purchase-tag-alt' },
  },
  {
    title: 'FoodPortal',
    icon: { icon: 'bx-food-menu' },
    to: 'apps-email',
  },
  {
    title: 'ServicePortal',
    icon: { icon: 'bxs-pie-chart-alt-2' },
    to: 'apps-chat',
  },
  {
    title: 'Payments',
    icon: { icon: 'bx-money' },
  },
  {
    title: 'Income',
    icon: { icon: 'bx-money-withdraw' },
  },
  {
    title: 'Teams & Roles',
    icon: { icon: 'bxl-microsoft-teams' },
  },
  {
    title: 'Reports',
    icon: { icon: 'bxs-report' },
  },
  {
    title: 'App',
    icon: { icon: 'bx-devices' },
  },
  {
    title: 'Chat Systems',
    icon: { icon: 'bx-chat' },
  },
  {
    title: 'Backups',
    icon: { icon: 'bx-data' },
  },
  {
    title: 'FTP-Settings',
    icon: { icon: 'bx-server' },
  },
  {
    title: 'Settings',
    icon: { icon: 'bx-cog' },
  },
]
