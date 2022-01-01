const initialState = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1585267676185-f4aa56ddbce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const DirectoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
