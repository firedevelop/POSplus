import type { MenuItem } from "../../types"

const menuDataIt: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "images/menu/pizzas/pizza-001.webp",
      description: "Pomodoro San Marzano, mozzarella fresca, basilico e olio extravergine d'oliva."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "images/menu/pizzas/pizza-002.webp",
      description: "Pomodoro, mozzarella, prosciutto cotto e funghi freschi."
    },
    {
      id: 3,
      name: "Pizza Diavola",
      price: 13.50,
      image: "images/menu/pizzas/pizza-003.webp",
      description: "Pomodoro, mozzarella, salame piccante e peperoncino."
    },
    {
      id: 4,
      name: "Pizza Quattro Formaggi",
      price: 15.00,
      image: "images/menu/pizzas/pizza-004.webp",
      description: "Mozzarella, gorgonzola, provolone e parmigiano."
    },
    {
      id: 5,
      name: "Pizza Vegetariana",
      price: 13.00,
      image: "images/menu/pizzas/pizza-005.webp",
      description: "Pomodoro, mozzarella e una selezione di verdure di stagione."
    },
    {
      id: 6,
      name: "Pizza Carbonara",
      price: 14.50,
      image: "images/menu/pizzas/pizza-006.webp",
      description: "Panna, mozzarella, pancetta, uovo e pepe nero."
    },
    {
      id: 7,
      name: "Pizza Capricciosa",
      price: 14.80,
      image: "images/menu/pizzas/pizza-007.webp",
      description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi e olive nere."
    },
    {
      id: 8,
      name: "Pizza Tonno e Cipolla",
      price: 13.00,
      image: "images/menu/pizzas/pizza-008.webp",
      description: "Pomodoro, mozzarella, tonno e cipolla rossa."
    },
    {
      id: 9,
      name: "Pizza Bianca con Patate e Rosmarino",
      price: 12.00,
      image: "images/menu/pizzas/pizza-009.webp",
      description: "Mozzarella, patate a fette sottili e rosmarino fresco."
    },
    {
      id: 10,
      name: "Calzone Classico",
      price: 13.80,
      image: "images/menu/pizzas/pizza-010.webp",
      description: "Pomodoro, mozzarella, prosciutto cotto e funghi, ripiegato e cotto al forno."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia con Rosmarino e Sale",
      price: 6.00,
      image: "images/menu/starters/starters-001.webp",
      description: "Pane piatto cotto al forno con rosmarino e sale marino, ideale da condividere."
    },
    {
      id: 12,
      name: "Carpaccio di Vitello",
      price: 11.00,
      image: "images/menu/starters/starters-002.webp",
      description: "Fettine sottili di vitello con rucola, parmigiano e salsa alla senape."
    },
    {
      id: 13,
      name: "Burrata con Pomodorini",
      price: 10.50,
      image: "images/menu/starters/starters-003.webp",
      description: "Cremosa burrata fresca accompagnata da pomodorini e basilico."
    },
    {
      id: 14,
      name: "Tagliere di Salumi Italiani",
      price: 16.00,
      image: "images/menu/starters/starters-004.webp",
      description: "Selezione dei migliori salumi italiani, come Prosciutto di Parma e Salame Milano."
    },
    {
      id: 15,
      name: "Arancini di Riso",
      price: 8.00,
      image: "images/menu/starters/starters-005.webp",
      description: "Palle di riso ripiene di ragù e mozzarella, fritte fino a doratura."
    },
    {
      id: 16,
      name: "Insalata Caprese",
      price: 9.50,
      image: "images/menu/starters/starters-006.webp",
      description: "Pomodoro, mozzarella di bufala, basilico fresco e olio extra vergine d'oliva."
    },
    {
      id: 17,
      name: "Provoleta al Forno",
      price: 9.00,
      image: "images/menu/starters/starters-007.webp",
      description: "Formaggio provolone fuso al forno con origano e un filo d'olio."
    },
    {
      id: 18,
      name: "Patate Tartufate",
      price: 7.50,
      image: "images/menu/starters/starters-008.webp",
      description: "Patatine fritte con olio al tartufo e parmigiano grattugiato."
    },
    {
      id: 19,
      name: "Bruschetta Mista",
      price: 8.50,
      image: "images/menu/starters/starters-009.webp",
      description: "Pane tostato con diverse coperture: pomodoro e basilico, e patè di olive."
    },
    {
      id: 20,
      name: "Melanzane alla Parmigiana",
      price: 10.00,
      image: "images/menu/starters/starters-010.webp",
      description: "Melanzane al forno con pomodoro, mozzarella e parmigiano."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Acqua Minerale",
      price: 2.50,
      image: "images/menu/drinks/drinks-001.webp",
      description: "Acqua minerale naturale o frizzante."
    },
    {
      id: 22,
      name: "Bibita (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "images/menu/drinks/drinks-002.webp",
      description: "Varietà di bibite popolari."
    },
    {
      id: 23,
      name: "Succo di Frutta Fresco (Arancia, Ananas, Mela)",
      price: 3.50,
      image: "images/menu/drinks/drinks-003.webp",
      description: "Succhi di frutta fresca appena spremuti."
    },
    {
      id: 24,
      name: "Limonata Fatta in Casa",
      price: 3.80,
      image: "images/menu/drinks/drinks-004.webp",
      description: "Rinfrescante limonata naturale, fatta in casa."
    },
    {
      id: 25,
      name: "Tè Freddo (Limone, Pesca)",
      price: 3.20,
      image: "images/menu/drinks/drinks-005.webp",
      description: "Tè freddo pronto da gustare, in diversi sapori."
    },
    {
      id: 26,
      name: "Caffè Espresso",
      price: 2.00,
      image: "images/menu/drinks/drinks-006.webp",
      description: "Caffè espresso italiano, intenso e aromatico."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "images/menu/drinks/drinks-007.webp",
      description: "Caffè con latte schiumato, perfetto per ogni momento."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "images/menu/drinks/drinks-008.webp",
      description: "Latte caldo macchiato con un tocco di espresso."
    },
    {
      id: 29,
      name: "Cioccolata Calda",
      price: 3.50,
      image: "images/menu/drinks/drinks-009.webp",
      description: "Deliziosa cioccolata calda, cremosa e confortante."
    },
    {
      id: 30,
      name: "Frullato di Frutta (Fragola, Banana)",
      price: 4.50,
      image: "images/menu/drinks/drinks-010.webp",
      description: "Frullati rinfrescanti di frutta naturale."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Tiramisù Classico",
      price: 6.50,
      image: "images/menu/desserts/desserts-001.webp",
      description: "Dessert tradizionale italiano con strati di savoiardi, caffè, mascarpone e cacao."
    },
    {
      id: 32,
      name: "Panna Cotta con Frutti di Bosco",
      price: 6.00,
      image: "images/menu/desserts/desserts-002.webp",
      description: "Dessert cremoso di panna con una salsa di frutti di bosco freschi."
    },
    {
      id: 33,
      name: "Cannoli Siciliani",
      price: 7.00,
      image: "images/menu/desserts/desserts-003.webp",
      description: "Croccanti cialde di pasta fritta ripiene di ricotta dolce e frutta candita."
    },
    {
      id: 34,
      name: "Gelato Artigianale",
      price: 5.00,
      image: "images/menu/desserts/desserts-004.webp",
      description: "Gelato artigianale italiano in vari gusti: vaniglia, cioccolato, pistacchio."
    },
    {
      id: 35,
      name: "Cheesecake all'Amarena",
      price: 6.80,
      image: "images/menu/desserts/desserts-005.webp",
      description: "Cheesecake cremosa con amarene candite."
    },
    {
      id: 36,
      name: "Profiteroles al Cioccolato",
      price: 6.20,
      image: "images/menu/desserts/desserts-006.webp",
      description: "Piccoli bignè di pasta choux ripieni di panna e coperti con salsa al cioccolato."
    },
    {
      id: 37,
      name: "Mousse al Cioccolato",
      price: 5.80,
      image: "images/menu/desserts/desserts-007.webp",
      description: "Morbida e leggera mousse di cioccolato fondente."
    },
    {
      id: 38,
      name: "Frutta Fresca di Stagione",
      price: 4.50,
      image: "images/menu/desserts/desserts-008.webp",
      description: "Selezione di frutta fresca di stagione."
    },
    {
      id: 39,
      name: "Semifreddo al Torrone",
      price: 6.70,
      image: "images/menu/desserts/desserts-009.webp",
      description: "Dessert gelato cremoso con pezzi di torrone."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "images/menu/desserts/desserts-010.webp",
      description: "Pallina di gelato alla vaniglia affogata in uno shot di espresso caldo."
    }
  ]
}

export default menuDataIt