export default [
  { heading: 'Apps & Pages' },
  {
    title: 'User',
    icon: { icon: 'bx-user' },
    children: [
      { title: 'Standard User', to: 'user-standard' },
      { title: 'Premium User', to: 'user-premium' },
      { title: 'Vip User', to: 'user-vip' },
      { 
        title: 'Settings',
        icon: { icon: ' bx-cog' },
        children: [
          { title: 'User Roles', to: 'user-settings-user-role' },
          { title: 'User Pricing', to: 'user-settings-user-pricing' },
          { title: 'Reasons', to: 'user-settings-reasons' },
          { title: 'Ringtone',  children: [
            { title: 'Add Ringtone', to: 'user-settings-ringtone' },
            { title: 'Add Category', to: 'user-settings-ringtone-category' },

          ] },
          { title: 'Storage' },
          { title: 'Flaged  User', to: 'user-flaged' },
          { title: 'User Prefix' },

        ] },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Content',
    icon: { icon: 'bx-book-content' },
    children: [
      { title: 'Feeds', children: [
        { title: 'Manage User Feeds' },
        { title: 'Manage User Comments' },
        { title: 'Manage FanPage Feed' },
        { title: 'Manage FanPage Comments' },
        { 
          title: 'Settings',
          icon: { icon: ' bx-cog' },
          children: [
            { title: 'Post Filter' },
            { title: 'Add Create Feeds Image' },
            { title: 'Add Emojis' },
            { title: 'Add Ring Tone' },
            { title: 'Policy and terms' },
            { title: 'Add Prefix' },
  
          ] },
      ] },
      { 
        title: 'Music',
        children: [
          { title: 'Add Music', to: 'content-music' },
          { title: 'Add Category', to: 'content-music-category' },
          { title: 'Add Video Clip', to: 'content-music-video' },
          { title: 'Artists', children: [
            { title: 'Add Artists', to: 'content-music-artists' },
            { title: 'Add Album', to: 'content-music-artists-album' },
            { title: 'Add Songs', to: 'content-music-artists-songs' },
            { title: 'Add Video', to: 'content-music-artists-video' },
          ] },
          { 
            title: 'Settings',
            children: [
              { title: 'Add Countrys' },
              { title: 'Pricing' },
              { title: 'Policy and terms' },
              { title: 'Add Prefix' },
    
            ] },
        ] },
      { 
        title: 'Vote',
        children: [
          { title: 'Manage Vote', to: 'content-vote' },
          { title: 'Add Category', to: 'content-vote-category' },
          { 
            title: 'Settings',
            children: [
              { title: 'Policy and terms' },
              { title: 'Add Prefix' },
    
            ] },
        ] },
      { 
        title: 'Events',
        children: [
          { title: 'All Requests', to: 'content-events' },
          { title: 'Manage', to: 'content-events-manage' },
          { title: 'Category', to: 'content-events-category' },
          { title: 'Tickets', to: 'content-events-tickets' },
          { title: 'Services', to: 'content-events-service' },
          { 
            title: 'Settings',
            children: [
              { title: 'Tickets' },
              { title: 'Pricing' },
              { title: 'Prefix' },
    
            ] },
        ] },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Manage Stories',
    icon: { icon: 'bx-book-content' },
    children: [
      { title: 'Manage Stories', to: 'manage' },
      { title: 'Reported Stories', to: 'manage-report' },
      { 
        title: 'Settings',
        children: [
          { title: 'Add Songs', to: 'manage-songs' },
          { title: 'Add Effect', to: 'manage-effect' },
          { title: 'Stories Time', to: 'manage-stories' },
          { title: 'Pricing' },
          { title: 'Prefix' },
        ], 
      },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Video',
    icon: { icon: 'bx-video ' },
    children: [
      { title: 'Category', to: 'video-category' },
      { title: 'Manage Videos', to: 'video' },
      { title: 'Videos Reports' },
      { 
        title: 'Settings',
        children: [
          { title: 'Max Upload' },
          { title: 'Video Type' },
          { title: 'Maintance' },
          { title: 'Pricing' },
          { title: 'Prefix' },
        ], 
      },
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
      { 
        title: 'Settings',
        children: [
          { title: 'Pricing' },
          { title: 'Roles' },
          { title: 'Ringtone' },
          { title: 'Policy and Terms' },
          { title: 'Prefix' },
        ], 
      },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Ecommerce',
    icon: { icon: 'bx-shopping-bag' },
    children: [
      { title: 'New Requests' },
      { title: 'Add Online Shop' },
      { title: 'Manage Shops' },
      { title: 'Manage Item' },
      { 
        title: 'Settings',
        children: [
          { title: 'Commission Setting' },
          { title: 'Tax Settings by Country' },
          { title: 'Shipping ' },
          { title: 'Currency' },
          { title: 'Payment Method' },
          { title: 'Additional services' },
          { title: 'Shop' },
        ], 
      },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Bazar',
    icon: { icon: 'bx-store' },
    children: [
      { title: 'Manage Item', to: 'bazar' },
      { title: 'Add Category', to: 'bazar-category' },
      { 
        title: 'Settings',
        children: [
          { title: 'Pricing Plan' },
          { title: 'Policy and terms' },
          { title: 'itme Prefix' },
        ], 
      },

    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Food Portal',
    icon: { icon: 'bx-category' },
    children: [
      { title: 'Manage Requests' },
      { title: 'Manage Ads' },
      { title: 'Accepted Ads' },
      { title: 'Denied Ads' },
      { title: 'Ads on Hold' },
      { 
        title: 'Settings',
        children: [
          { title: 'Comission Delivery Shops' },
          { title: 'Commission Reservation' },
          { title: 'Commission Reservation Plus ' },
          { title: 'Pricing Plan' },
          { title: 'Maintaince ' },
          { title: 'Countrys and Zipcode' },
          { title: 'Additional services' },
          { title: 'Prefix' },
        ], 
      },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'ServicePortal',
    icon: { icon: 'bx-category' },
    children: [
      { title: 'Manage Requests', to: 'services' },
      { title: 'Manage Ads', to: 'services-manage' },
      { title: 'Accepted Ads', to: 'services-accepted' },
      { title: 'Denied Ads', to: 'services-denied' },
      { title: 'Ads on Hold', to: 'services-hold' },
      { 
        title: 'Settings',
        children: [
          { title: 'Pricing Plan' },
          { title: 'Policy and terms' },
          { title: 'Prefix' },
        ], 
      },
    ],
  },

  // { heading: 'Apps & Pages' },
  // {
  //   title: 'Product Ads',
  //   icon: { icon: 'bx-category' },
  //   children: [
  //     { title: 'Manage Requests', to: 'product' },
  //     { title: 'Manage Ads', to: 'product-manage' },
  //     { title: 'Accepted Ads', to: 'product-accepted' },
  //     { title: 'Denied Ads', to: 'product-denied' },
  //     { title: 'Ads on Hold', to: 'product-hold' },
  //   ],
  // },
  { heading: 'Apps & Pages' },
  {
    title: 'Payment',
    icon: { icon: ' bxs-bank' },
    children: [
      { title: 'Payment Method', to: 'payments-payment-method' },
      { title: 'Bank Transfer', to: 'payments-bank-details' },
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
      { title: 'Task' },
      { 
        title: 'Settings',
        children: [
          { title: 'Policy and terms' },
          { title: 'Prefix' },
        ], 
      },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'App Setting',
    icon: { icon: ' bx-file' },
    children: [
      { title: 'Android Setting',
        children: [
          { title: 'Upload Ringtoon' },
          { title: 'Maintance Mode' },
        ] },
      { title: 'IOS Setting',
        children: [
          { title: 'Upload Ringtoon' },
          { title: 'Maintance Mode' },
        ] },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Chat Setting',
    icon: { icon: ' bx-file' },
    children: [
      { title: 'Manage Groups' },
      { title: 'Smileys', to: 'chat-settings-smileys' },
      { title: 'Ring Tone', to: 'chat-settings-ringtone' },
      { 
        title: 'Settings',
        children: [
          { title: 'Ring Tone' },
          { title: 'Tex Setting' },
          { title: 'KeyWords' },
          { title: 'Permission', children: [
            { title: 'Like allow upload PDF or Jpg' },
            { title: 'Max Upload Size' },
          ] },
        ], 
      },
    ],
  },
  { heading: 'Apps & Pages' },
  {
    title: 'Invoice',
    icon: { icon: ' bx-file' },
    children: [
      { title: 'User Invoice', to: 'invoice-user' },
      { title: 'Bazar Invoice', to: 'invoice-bazar' },
      { title: 'OnlineShop Invoice', to: 'invoice-onlineshop' },
      { title: 'Ads Service Invoice', to: 'invoice-adsservice' },
      { title: 'Foodprotal Invoice', to: 'invoice-foodportal' },
      { title: 'Add', to: 'invoice-add' },
      { title: 'Edit', to: { name: 'invoice-edit-id', params: { id: '5036' } } },
    ],
  },
  {
    title: 'Backups',
    icon: { icon: 'bx-data' },
    children: [
      { title: 'Add / Manage Backup Plan' },
      { title: 'Backup Setting' },
    ],
  },
  {
    title: 'FTP-Settings',
    icon: { icon: 'bx-server' },
    children: [
      { title: 'Setting to move the files' },
    ],
  },
  {
    title: 'Settings',
    icon: { icon: 'bx-cog' },
    children: [
      { title: 'Portal Notifications „News and Updates in the APP“' },
      { title: 'Policy and Terms', to: 'settings-policy' },
      { title: 'App Popup' },
      { title: 'Locations',
        children: [
          { title: 'Add Country' },
          { title: 'Add Province' },
          { title: 'Add city and ZipCode' },
        ] },
      { title: 'Icon' },
      { title: 'Language', to: 'settings-language' },
    ],
  },
]
