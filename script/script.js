let slideIndex = 0;
showSlides();

//seeds

const menu = [
  // foods
  {
      name: 'Herbed Chicken Marsala',
      description: 'Smothered in low-calorie sauteed mushrooms and sun-dried tomatoes, this dish is both healthy and satisfying. A little bit of butter goes a long way in the sauce-just a touch adds creamy richness.',
      nuInfo: '300 Calories, 40g Carbs (38g net carbs), 6g Fat, 18g Protein',
      hRating: '5/5',
      price:'50000',
      image:'./asset/menu/Herbed Chicken Marsala.jpeg',
      kategori:'Food',
  },

  {
      name:'Sloppy Joes',
      description:'These meaty, cafeteria-style sloppy joes have all the flavor of the sandwich you grew up on, but they are extra-lean so you can feel good about making them for your family.',
      nuInfo:' 634 Calories, 48g Carbs, 27.1g Fat, 3g Fiber, 46.3g Protein',
      hRating:'4.5/5',
      price:'40000',
      image: './asset/menu/Sloppy Joes.jpeg',
      kategori: 'Food',
  },

  {
      name:'Air Fryer Parmesan Chicken with Broccoli',
      description:'This chicken gets incredibly crunchy, thanks to a light coating of panko and Parmesan and a quick cook in the air fryer! Serve it with charred broccoli and a tangy yogurt sauce for a healthy and complete meal you can throw together any day of the week.',
      nuInfo:'793 Calories, 102.9g Carbs, 21.8g Fat, 48.3g Protein',
      hRating:'4/5',
      price:'60000',
      image: './asset/menu/Air Fryer Parmesan Chicken with Broccoli.jpeg',
      kategori: 'Food',
  },


  {
      name:'Pan-Seared Salmon with Kale and Apple Salad',
      description:' The star of this dish is the kale salad. It is crunchy, tangy and sweet!',
      nuInfo:'620 Calories, 40g Carbs, 36g Fat, 39g Protein',
      hRating:'4.5/5',
      price:'90000',
      image: './asset/menu/Pan-Seared Salmon with Kale and Apple Salad.jpeg',
      kategori: 'Food',
  },

  {
      name:'Chilli Prawn and Tomato Spaghetti',
      description:'Pasta tossed with a rich tomato sauce with a tingle of spicy heat and plump prawns.',
      nuInfo:'475 Calories, 57.2g Carbs, 21g Fat, 17g Protein.',
      hRating:'5/5',
      price:'45000',
      image: './asset/menu/chilli-prawn-and-tomato-spaghetti-81914-1.jpeg',
      kategori: 'Food',
  },

  {
      name:'Creamy Tuscan Chicken Pasta',
      description:'It is made with added chicken bites for some added protein, loaded with spinach for a nutrient boost, and infused with creamy Tuscan flavors.',
      nuInfo:'240 Calories, 41g Carbs, 6g Fat, 6g Protein.',
      hRating:'5/5',
      price:'50000',
      image: './asset/menu/creamytuscan.jpg',
      kategori: 'Food',
  },

  {
      name:'Vegan Lasagne with Cauliflower Bechamel',
      description:'Super cheesy, creamy and comforting, our easy vegan lasagne will be voted the best ever by the family.',
      nuInfo:'337 Calories, 57g Carbs, 9g Fat, 13g Protein, 104mg Sodium.',
      hRating:'4.5/5',
      price:'40000',
      image: './asset/menu/vegan-lasagne-141558-1.jpg',
      kategori: 'Food',
  },

  {
      name:'Greek Salad with Lettuce',
      description:'The perfect Greek salad with fresh tomatoes, cucumbers, red onions, green peppers, romaine lettuce, olives and feta cheese tossed in a lemon vinaigrette.',
      nuInfo:'211 Calories, 13g Carbs, 15g Fat, 6g Protein',
      hRating:'5/5',
      price:'30000',
      image: './asset/menu/the-perfect-greek-salad.jpg',
      kategori: 'Food',
  },


  // drinks
  {
      name:'Kombucha',
      description:'Fermented tea drink tastes like a combination of tea and hard cider.',
      nuInfo:'29 Calories, 8g Carbs, 0g Fat, 0g Protein, 10mg Sodium',
      hRating:'4/5',
      price:'30000',
      image: './asset/menu/Kombucha-Recipe-005.jpg',
      kategori: 'Drink',
  },

  {
      name:'Lime Rickey',
      description:'Healthy mocktail with no alcohol. Just lime juice and sparkling water.',
      nuInfo:'210 Calories, 53g Carbs, 0g Fat, 0g Protein, 55mg Sodium',
      hRating:'4.5/5',
      price:'45000',
      image: './asset/menu/Lime-Rickey-003.jpg',
      kategori: 'Drink',
  },

  {
      name:'Amla Juice',
      description:'Indian gooseberries juice with honey. Refreshing combination of sour and sweet.',
      nuInfo:'29 Calories, 8g Carbs, 0g Fat, 0g Protein, 10mg Sodium',
      hRating:'4/5',
      price:'35000',
      image: './asset/menu/amla.jpg',
      kategori: 'Drink',
  },

  {
      name:'Orange Juice',
      description:'100% orange juice.',
      nuInfo:'110 Calories, 27g Carbs, 0g Fat, 2g Protein, 60mg Vitamin C',
      hRating:'5/5',
      price:'20000',
      image: './asset/menu/orangej.jpg',
      kategori: 'Drink',
  },

  {
      name:'Pomegrante Juice',
      description:'100% Pomegrante juice.',
      nuInfo:'135 Calories, 34g Carbs, 0g Fat, 1g Protein, 10mg Sodium',
      hRating:'4.5/5',
      price:'28000',
      image: './asset/menu/pomejuice.jpg',
      kategori: 'Drink',
  },

  {
      name:'Iced Tea',
      description:'Black Tea with ice',
      nuInfo:'60 Calories, 15g Carbs, 0g Fat, 0g Protein',
      hRating:'3.5/5',
      price:'15000',
      image: './asset/menu/blcktea.jpg',
      kategori: 'Drink',
  },

  {
      name:'Lemon Iced Tea',
      description:'Lemon Tea with ice',
      nuInfo:'90 Calories, 25g Carbs, 0g Fat, 0g Protein',
      hRating:'3/5',
      price:'18000',
      image: './asset/menu/lemontea.jpg',
      kategori: 'Drink',
  },



  // desserts
  {
      name:'Chia and Coconut Pudding',
      description:'Indulge in a taste of tropical paradise with this mouth-watering coconuty dessert containing healthy chia seeds.',
      nuInfo:'192.7 Calories, 18g Carbs, 10.7g Fat, 5.6g Protein',
      hRating:'4/5',
      price:'30000',
      image: './asset/menu/chia-and-coconut-pudding-98299-1.jpeg',
      kategori: 'Dessert',
  },

  {
      name:'Lemon and Yoghurt Syrup Cakes',
      description:'Create these tasty syrup cakes that incorporates healthier options of coconut sugar, spelt flour and low-fat Greek yoghurt.',
      nuInfo:'160.4 Calories, 23.6g Carbs, 5.8g Fat, 5.6g Protein',
      hRating:'4/5',
      price:'35000',
      image: './asset/menu/lemoncake.jpg',
      kategori: 'Dessert',
  },

  {
      name:'Frozen Strawberry Cheesecake',
      description:'Using buckwheat, almonds, coconut and dates in the base instead of biscuits means this cheesecake cuts down on processed sugars and adds natural goodness.',
      nuInfo:'130 Calories, 15g Carbs, 7g Fat, 1g Protein',
      hRating:'4/5',
      price:'35000',
      image: './asset/menu/strawberry.jpg',
      kategori: 'Dessert',
  },

  {
      name:'Strawberry-Almond Crumble Pie',
      description:'Fresh fruit is always a good way to get a healthy sweet treat. Oat-based crumbles add a bit more fiber than a standard pie crust topping.',
      nuInfo:'466 Calories, 69g Carbs, 20g Fat, 6g Protein',
      hRating:'3/5',
      price:'40000',
      image: './asset/menu/desserts-strawberry-almond-pie-1652899144.jpg',
      kategori: 'Dessert',
  },

  {
      name:'Blackberry Coconut Tart',
      description:'Fresh blackberries and coconut make for a delicious, not-too-sweet dessert.',
      nuInfo:'230 Calories, 6g Carbs, 24g Fat, 2g Protein',
      hRating:'3.5/5',
      price:'35000',
      image: './asset/menu/blackberry-coconut-tart.jpeg',
      kategori: 'Dessert',
  },

  {
      name:'Chocolate-Cinnamon Marble Bread',
      description:'This quick bread scratches that cake itch without being quite so decadent. And because you are making it yourself, you can decide exactly how much sugar goes in.',
      nuInfo:'370 Calories, 59g Carbs, 14g Fat, 7g Protein',
      hRating:'4/5',
      price:'20000',
      image: './asset/menu/chocolate-marble-1652900700.jpg',
      kategori: 'Dessert',
  },
];

// const menu = [
//   {
//     name: 'Menu 1',
//     descriptionriptionription: 'description Menu 1',
//     price: 20000,
//   },{
//     name: 'Menu 2',
//     descriptionription: 'description Menu 2',
//     price: 40000,
//   },{
//     name: 'Menu 3',
//     descriptionription: 'description Menu 3',
//     price: 30000,
//   }
// ]

localStorage.setItem('menu', JSON.stringify(menu))

const historyOrderFood = [
  {
      name: "Kezia Gloria",
      email: "kezia@mail.com",
      phoneNumber: 083742847232,
      address: "Jasmine Street",
      food: 1,
      qty: 5,
      date: '01/01/2022'
  },{
      name: "Faustina Odeta",
      email: "faustin@mail.com",
      phoneNumber: 088493920344,
      address: "Rose Street",
      food: 0,
      qty: 10,
      date: '02/02/2022'
  },{
      name: "Kevin Robert",
      email: "kevin@mail.com",
      phoneNumber: 08482940404,
      address: "Lavender Street",
      food: 2,
      qty: 7,
      date: '03/03/2022'
  },
]

const historyReservation = [
  {
      name: "Kezia Gloria",
      email: "kezia@mail.com",
      phone: 083742847232,
      guest: 2,
      date: "2022-06-02"
  },{
      name: "Faustina Odeta",
      email: "faustin@mail.com",
      phone: 088493920344,
      guest: 3,
      date: "2022-06-06"
  },{
      name: "Kevin Robert",
      email: "kevin@mail.com",
      phone: 08482940404,
      guest: 1,
      date: "2022-05-15"
  },
]


localStorage.setItem('reservation', JSON.stringify(historyReservation))

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
} 
