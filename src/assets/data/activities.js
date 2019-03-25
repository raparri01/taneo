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
          firstName: "Matt",
          lastName: "Damon",
          recommends: false,
          comment: "The cocktails were wicked good but the food was so-so. Our waitress was wicked smart and didn't write down our order. Not my first choice."
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
    categories: ["Spa", "Self Care", "Relaxation", "Salon"],
    price: 150,
    currency: "USD",
    currencySymbol: "$",
    location: "Amy's Salon",
    stock: 0,
    description:{
      main: "Spa Day followed by a manicure and pedicure at Amy's Salon",
      long: "Enjoy a three-hour spa day at Amy's Salon. Start with a dip in the hot tub followed by 15 minutes in the steam room followed by your choice of a 1 hour massage or accupuncture session. After your massage you will be given 1 hour to have your choice of any of Amy's many relaxation options, including the sensory deprivation pool, cryotherapy treatment, water massage, and more. Your treatment will be finished off with a gel manicure and pedicure",
      value: 350,
      reviews: [
        {
          profilePicture: "http://placehold.it/25",
          firstName: "Rachel",
          lastName: "Ray",
          recommends: true,
          comment: "I cannot say enough good things about Amy's Salon. Hands down the best spa experience of my life!"
        },
        {
          profilePicture: "http://placehold.it/25",
          firstName: "Reese",
          lastName: "Witherspoon",
          recommends: true,
          comment: "Amy's Salon is one of the best spas I have ever had the pleasure of experiencing. If you get a chance to go there, I highly recommend!"
        },
        {
          profilePicture: "http://placehold.it/25",
          firstName: "Marie",
          lastName: "Antoinette",
          recommends: true,
          comment: "At first I was worried that the spa treatment was too pricey. After my session, I can tell anyone that it was worth every penny!"
        }
      ]
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
