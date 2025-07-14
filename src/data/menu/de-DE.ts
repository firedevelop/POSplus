import type { MenuItem } from "../../types"

const menuDataDe: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "images/menu/pizzas/pizza-001.webp",
      description: "San Marzano Tomaten, frischer Mozzarella, Basilikum und natives Olivenöl extra."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "images/menu/pizzas/pizza-002.webp",
      description: "Tomate, Mozzarella, gekochter Schinken und frische Champignons."
    },
    {
      id: 3,
      name: "Pizza Diavola",
      price: 13.50,
      image: "images/menu/pizzas/pizza-003.webp",
      description: "Tomaten, Mozzarella, scharfe Salami und Chili."
    },
    {
      id: 4,
      name: "Pizza Quattro Formaggi",
      price: 15.00,
      image: "images/menu/pizzas/pizza-004.webp",
      description: "Mozzarella, Gorgonzola, Provolone und Parmesan."
    },
    {
      id: 5,
      name: "Pizza Vegetariana",
      price: 13.00,
      image: "images/menu/pizzas/pizza-005.webp",
      description: "Tomaten, Mozzarella und eine Auswahl an saisonalem Gemüse."
    },
    {
      id: 6,
      name: "Pizza Carbonara",
      price: 14.50,
      image: "images/menu/pizzas/pizza-006.webp",
      description: "Sahne, Mozzarella, Speck, Ei und schwarzer Pfeffer."
    },
    {
      id: 7,
      name: "Pizza Capricciosa",
      price: 14.80,
      image: "images/menu/pizzas/pizza-007.webp",
      description: "Tomaten, Mozzarella, gekochter Schinken, Champignons, Artischocken und schwarze Oliven."
    },
    {
      id: 8,
      name: "Pizza Tonno e Cipolla",
      price: 13.00,
      image: "images/menu/pizzas/pizza-008.webp",
      description: "Tomaten, Mozzarella, Thunfisch und rote Zwiebeln."
    },
    {
      id: 9,
      name: "Pizza Bianca mit Kartoffeln und Rosmarin",
      price: 12.00,
      image: "images/menu/pizzas/pizza-009.webp",
      description: "Mozzarella, dünne Kartoffelscheiben und frischer Rosmarin."
    },
    {
      id: 10,
      name: "Calzone Classico",
      price: 13.80,
      image: "images/menu/pizzas/pizza-010.webp",
      description: "Tomaten, Mozzarella, gekochter Schinken und Champignons, gefaltet und gebacken."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia mit Rosmarin und Salz",
      price: 6.00,
      image: "images/menu/starters/starters-001.webp",
      description: "Im Ofen gebackenes Fladenbrot mit Rosmarin und Meersalz, ideal zum Teilen."
    },
    {
      id: 12,
      name: "Rindercarpaccio",
      price: 11.00,
      image: "images/menu/starters/starters-002.webp",
      description: "Dünne Rindfleischscheiben mit Rucola, Parmesan und Senfsauce."
    },
    {
      id: 13,
      name: "Burrata mit Cherrytomaten",
      price: 10.50,
      image: "images/menu/starters/starters-003.webp",
      description: "Cremige Burrata mit Cherrytomaten und Basilikum."
    },
    {
      id: 14,
      name: "Italienische Wurstplatte",
      price: 16.00,
      image: "images/menu/starters/starters-004.webp",
      description: "Auswahl der besten italienischen Wurstwaren wie Prosciutto di Parma und Salame Milano."
    },
    {
      id: 15,
      name: "Arancini (Reisbällchen)",
      price: 8.00,
      image: "images/menu/starters/starters-005.webp",
      description: "Reisbällchen mit Ragù und Mozzarella gefüllt, goldbraun frittiert."
    },
    {
      id: 16,
      name: "Caprese-Salat",
      price: 9.50,
      image: "images/menu/starters/starters-006.webp",
      description: "Tomaten, Büffelmozzarella, frisches Basilikum und Olivenöl extra vergine."
    },
    {
      id: 17,
      name: "Überbackene Provoleta",
      price: 9.00,
      image: "images/menu/starters/starters-007.webp",
      description: "Geschmolzener Provolone-Käse mit Oregano und einem Schuss Öl im Ofen gebacken."
    },
    {
      id: 18,
      name: "Trüffel-Pommes",
      price: 7.50,
      image: "images/menu/starters/starters-008.webp",
      description: "Pommes frites mit Trüffelöl und geriebenem Parmesan."
    },
    {
      id: 19,
      name: "Gemischte Bruschetta",
      price: 8.50,
      image: "images/menu/starters/starters-009.webp",
      description: "Geröstetes Brot mit verschiedenen Belägen: Tomate und Basilikum, Olivenpaste."
    },
    {
      id: 20,
      name: "Auberginen Parmigiana",
      price: 10.00,
      image: "images/menu/starters/starters-010.webp",
      description: "Im Ofen gebackene Auberginen mit Tomaten, Mozzarella und Parmesan."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Mineralwasser",
      price: 2.50,
      image: "images/menu/drinks/drinks-001.webp",
      description: "Natürliches oder sprudelndes Mineralwasser."
    },
    {
      id: 22,
      name: "Softdrink (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "images/menu/drinks/drinks-002.webp",
      description: "Verschiedene beliebte Softdrinks."
    },
    {
      id: 23,
      name: "Frisch gepresster Saft (Orange, Ananas, Apfel)",
      price: 3.50,
      image: "images/menu/drinks/drinks-003.webp",
      description: "Frisch gepresste Fruchtsäfte."
    },
    {
      id: 24,
      name: "Hausgemachte Limonade",
      price: 3.80,
      image: "images/menu/drinks/drinks-004.webp",
      description: "Erfrischende hausgemachte Limonade."
    },
    {
      id: 25,
      name: "Eistee (Zitrone, Pfirsich)",
      price: 3.20,
      image: "images/menu/drinks/drinks-005.webp",
      description: "Erfrischender Eistee in verschiedenen Geschmacksrichtungen."
    },
    {
      id: 26,
      name: "Espresso",
      price: 2.00,
      image: "images/menu/drinks/drinks-006.webp",
      description: "Italienischer Espresso, intensiv und aromatisch."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "images/menu/drinks/drinks-007.webp",
      description: "Kaffee mit aufgeschäumter Milch, perfekt für jede Gelegenheit."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "images/menu/drinks/drinks-008.webp",
      description: "Heiße Milch mit einem Schuss Espresso."
    },
    {
      id: 29,
      name: "Heiße Schokolade",
      price: 3.50,
      image: "images/menu/drinks/drinks-009.webp",
      description: "Leckere heiße Schokolade, cremig und wohltuend."
    },
    {
      id: 30,
      name: "Frucht-Smoothie (Erdbeere, Banane)",
      price: 4.50,
      image: "images/menu/drinks/drinks-010.webp",
      description: "Erfrischende Smoothies aus frischen Früchten."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Klassisches Tiramisu",
      price: 6.50,
      image: "images/menu/desserts/desserts-001.webp",
      description: "Traditionelles italienisches Dessert mit Löffelbiskuits, Kaffee, Mascarpone und Kakao."
    },
    {
      id: 32,
      name: "Panna Cotta mit Beeren",
      price: 6.00,
      image: "images/menu/desserts/desserts-002.webp",
      description: "Cremige Panna Cotta mit einer Sauce aus frischen Beeren."
    },
    {
      id: 33,
      name: "Sizilianische Cannoli",
      price: 7.00,
      image: "images/menu/desserts/desserts-003.webp",
      description: "Knusprige Teigröllchen, gefüllt mit süßer Ricotta und kandierten Früchten."
    },
    {
      id: 34,
      name: "Hausgemachtes Gelato",
      price: 5.00,
      image: "images/menu/desserts/desserts-004.webp",
      description: "Hausgemachtes italienisches Eis in verschiedenen Sorten: Vanille, Schokolade, Pistazie."
    },
    {
      id: 35,
      name: "Käsekuchen mit Amarena-Kirschen",
      price: 6.80,
      image: "images/menu/desserts/desserts-005.webp",
      description: "Cremiger Käsekuchen mit kandierten Amarena-Kirschen."
    },
    {
      id: 36,
      name: "Schokoladen-Profiteroles",
      price: 6.20,
      image: "images/menu/desserts/desserts-006.webp",
      description: "Kleine Brandteigkugeln, gefüllt mit Sahne und mit Schokoladensauce überzogen."
    },
    {
      id: 37,
      name: "Schokoladenmousse",
      price: 5.80,
      image: "images/menu/desserts/desserts-007.webp",
      description: "Zarte und leichte Mousse aus dunkler Schokolade."
    },
    {
      id: 38,
      name: "Frisches Obst der Saison",
      price: 4.50,
      image: "images/menu/desserts/desserts-008.webp",
      description: "Auswahl an frischem saisonalem Obst."
    },
    {
      id: 39,
      name: "Nougat-Semifreddo",
      price: 6.70,
      image: "images/menu/desserts/desserts-009.webp",
      description: "Cremiges halbgefrorenes Dessert mit Nougatstückchen."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "images/menu/desserts/desserts-010.webp",
      description: "Eine Kugel Vanilleeis mit einem Schuss heißem Espresso."
    }
  ]
}

export default menuDataDe