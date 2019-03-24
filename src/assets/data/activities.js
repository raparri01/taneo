import faker from 'faker';

export const activities = [
  {
    id: "1",
    name: "Dinner for Two",
    categories: ["Dinner", "Bar", "Food", "Drinks", "Happy Hour"],
    price: 35,
    currency: "USD",
    currencySymbol: "$",
    location: "Miller's Alehouse",
    stock: 134,
    description:{
      main: "Dinner for two at Miller's Alehouse",
      long: "Enjoy a dinner for two at Miller's Alehouse in Paramus, NJ. People enjoy classic American fare at this casual sit down bar and restaurant which features a dancefloor and live music on the weekends.",
      reviews: [
        {
          profilePicture: "http://placehold.it/25",
          firstName: "Donald",
          lastName: "Glover",
          recommends: true,
          comment: "Great cocktail selection and attentive staff. I thoroughly enjoyed the lemon chicken and Cajun rice"
        },
        {
          profilePicture: "http://placehold.it/25",
          firstName: "Liam",
          lastName: "Neeson",
          recommends: false,
          comment: "Had to send my dish back twice. The first time they overcooked my sirloin steak, then I found two hairs on it. Gross!"
        }
      ],
      details: "Includes two appetizers, two entrees and two drinks",
      value: 50
    },
    image: "http://placehold.it/75",
    saved: false
  }, {
    id: "2",
    name: "Spa Day",
    categories: [""],
    price: 15,
    currency: "USD",
    currencySymbol: "$",
    location: "Amy's Salon",
    stock: 0,
    description:{
      main: "Manicure and Pedicure at Amy's Salon",
      details: "Includes a gel manicure and pedicure",
      value: 35
    },
    image: "http://placehold.it/75",
    saved: false
  }, {
    id: "3",
    name: "Axe Throwing for Two",
    categories: [""],
    price: 20,
    currency: "USD",
    currencySymbol: "$",
    location: "Bury the Hatchet",
    stock: 4,
    description:{
      main: "Axe throwing session for two",
      details: "Includes axe rental, 20 minute training, and 40 minutes of throwing",
      value: 35
    },
    image: "http://placehold.it/75",
    saved: false
  }
];
