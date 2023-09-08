export default [
  { heading: 'Apps & Pages' },
  {
    title: 'User',
    icon: { icon: 'bx-user' },
    children: [
      { title: 'Standard User', to: 'user-standard' },
      { title: 'Premium User', to: 'user-premium' },
      { title: 'Vip User', to: 'user-vip' },
      { title: 'Flaged  User', to: 'user-flaged' },
      { 
        title: 'Settings',
        icon: { icon: ' bx-cog' },
        children: [
          { title: 'User Roles', to: 'user-settings-user-role' },
        ] },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Content',
    icon: { icon: 'bx-book-content' },
    children: [
      { title: 'Feeds' },
      { 
        title: 'Music',
        children: [
          { title: 'Add Music', to: 'content-music' },
          { title: 'Add Category', to: 'content-music-category' },
          { title: 'Artists', children: [
            { title: 'Add Artists', to: 'content-music-artists' },
            { title: 'Add Album', to: 'content-music-artists-album' },
            { title: 'Add Songs', to: 'content-music-artists-songs' },
            { title: 'Add Video', to: 'content-music-artists-video' },
          ] },
        ] },
      { 
        title: 'Vote',
        children: [
          { title: 'Manage Vote', to: 'content-vote' },
          { title: 'Add Category', to: 'content-vote-category' },
        ] },
      { 
        title: 'Events',
        children: [
          { title: 'All Requests', to: 'content-events' },
          { title: 'Manage', to: 'content-events-manage' },
          { title: 'Category', to: 'content-events-category' },
          { title: 'Tickets', to: 'content-events-tickets' },
          { title: 'Services', to: 'content-events-service' },
        ] },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Video',
    icon: { icon: 'bx-video ' },
    children: [
      { title: 'Category', to: 'video-category' },
      { title: 'Videos', to: 'video' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'FanPage',
    icon: { icon: 'bx-user-pin' },
    children: [
      { title: 'New Requests', to: 'fanpage' },
      { title: 'Manage', to: 'fanpage-manage' },
      { title: 'Blocked Page', to: 'fanpage-blocked' },
      { title: 'Type', to: 'fanpage-type' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Ecommerce',
    icon: { icon: 'bx-shopping-bag' },
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Bazar',
    icon: { icon: 'bx-store' },
    children: [
      { title: 'Manage Item', to: 'bazar' },
      { title: 'Add Category', to: 'bazar-category' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Service Ads',
    icon: { icon: 'bx-category' },
    children: [
      { title: 'Manage Requests', to: 'services' },
      { title: 'Manage Ads', to: 'services-manage' },
      { title: 'Accepted Ads', to: 'services-accepted' },
      { title: 'Denied Ads', to: 'services-denied' },
      { title: 'Ads on Hold', to: 'services-hold' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Product Ads',
    icon: { icon: 'bx-category' },
    children: [
      { title: 'Manage Requests', to: 'product' },
      { title: 'Manage Ads', to: 'product-manage' },
      { title: 'Accepted Ads', to: 'product-accepted' },
      { title: 'Denied Ads', to: 'product-denied' },
      { title: 'Ads on Hold', to: 'product-hold' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Income',
    icon: { icon: ' bx-file' },
    to: 'income',
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Team & Role',
    icon: { icon: ' bx-group' },
    children: [
      { title: 'Manage Team', to: 'team-member' },
      { title: 'Role', to: 'team-role' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Invoice',
    icon: { icon: ' bx-group' },
    children: [
      { title: 'List', to: 'invoice' },
      { title: 'Add', to: 'invoice-add' },
      { title: 'Edit', to: { name: 'invoice-edit-id', params: { id: '5036' } } },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Chat Setting',
    icon: { icon: ' bx-group' },
    children: [
      { title: 'Smileys', to: 'chat-settings-smileys' },
      { title: 'Ring Tone', to: 'chat-settings-ringtone' },
      { title: 'Setting', to: 'chat-settings-setting' },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Payment',
    icon: { icon: ' bxs-bank' },
    children: [
      { title: 'Payment Method', to: 'payments-payment-method' },
      { title: 'Bank Transfer', to: 'payments-bank-details' },
    ],
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
    title: 'App',
    icon: { icon: 'bx-devices' },
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
