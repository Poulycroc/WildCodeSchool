const initState = {
  posts: [
    {
      id: 1,
      title: "Je suis le premier article",
      body: "Voici le premier article"
    },
    {
      id: 2,
      title: "Je suis le deuxième article",
      body: "Voici le deuxième article"
    },
    {
      id: 3,
      title: "Je suis le troisième article",
      body: "Voici le troisième article"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
