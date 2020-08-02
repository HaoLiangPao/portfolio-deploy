const initialState = {
  skills: [
    {
      id: 1,
      icon: "fas fa-file-alt fa-2x",
      name: "Self Studying",
      context: "I learnt ...",
    },
    {
      id: 2,
      icon: "fas fa-desktop fa-2x",
      name: "UI/UX",
      context: "I created ...",
    },
    {
      id: 3,
      icon: "fas fa-object-ungroup fa-2x",
      name: "Creativity",
      context: "I have ...",
    },
    {
      id: 4,
      icon: "fas fa-thumbs-up fa-2x",
      name: "Communication",
      context: "I say ...",
    },
  ],
  steps: [
    {
      id: 1,
      icon: "fas fa-file-alt fa-4x process-icon my-2",
      name: "Discuss The Project",
      context: "I learn ...",
    },
    {
      id: 2,
      icon: "fas fa-desktop fa-4x process-icon my-2",
      name: "Brainstorming Concept",
      context: "I create ...",
    },
    {
      id: 3,
      icon: "fas fa-object-ungroup fa-4x process-icon my-2",
      name: "UI/UX Planning",
      context: "I have ...",
    },
    {
      id: 4,
      icon: "fas fa-thumbs-up fa-4x process-icon my-2",
      name: "Interaction",
      context: "I say ...",
    },
  ],
};

export default (state = initialState, action) => {
  return state;
};
