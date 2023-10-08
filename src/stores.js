import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 0,
    rating: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sequi dolorum sit fuga quis? Nulla, velit. Illum doloribus natus nihil vero. Non odio blanditiis ducimus aut fugit voluptatibus debitis magnam?",
  },
  {
    id: 1,
    rating: 3,
    text: "Dolor sit amet consectetur adipisicing elit. Corporis sequi dolorum sit fuga quis? Nulla, velit. Illum doloribus natus nihil vero. Non odio blanditiis ducimus aut fugit voluptatibus debitis magnam?",
  },
  {
    id: 2,
    rating: 8,
    text: "Corporis sequi dolorum sit fuga quis? Nulla, velit. Illum doloribus natus nihil vero. Non odio blanditiis ducimus aut fugit voluptatibus debitis magnam?",
  },
]);
