
# 🍕 POS Plus - Modern Point of Sale System

<div align="center">

![POS Plus Logo](public/logo.svg)

**A modern Point of Sale (POS) application built with React, TypeScript and Tailwind CSS**

[![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

[🚀 Live Demo](#) | [📖 Documentation](#key-features) | [🛠️ Installation](#installation-and-setup)

</div>

---

## ✨ Key Features

### 🎨 **Dynamic Template System**
- **6 Customizable Themes**: Modern Lime, Ocean Blue, Sunset Orange, Royal Purple, Emerald Forest, Rose Gold
- **Real-time color changes** across the entire interface
- **Adaptive logo** with dynamic CSS filters

### 🌍 **Multi-language Support (i18n)**
- **5 Available Languages**: Spanish, English, Italian, French, German
- **Intuitive selector** with country flags
- **Complete translations** including POS-specific terminology

### 🧮 **Advanced Calculation System**
- **Configurable Tips**: 0%, 5%, 10%, 25%, 50%, 100%
- **Customizable Discounts**: 0%, 5%, 10%, 15%, 20%, 25%
- **Automatic calculations** for subtotals, discounts and totals
- **Thermal printer ticket** with authentic formatting

### 📱 **Responsive Design**
- **Adaptive interface** for desktop, tablet and mobile
- **Dynamic grid** that adjusts to screen size
- **Optimized user experience** on all devices

---

## 🛠️ Tech Stack

### **Frontend Core**
```typescript
// Main technologies used
const techStack = {
  framework: "React 18.3.1",
  language: "TypeScript 5.5.3",
  styling: "Tailwind CSS 3.4.17",
  bundler: "Vite 5.0+",
  routing: "React Router DOM 7.6.3"
}
```

### **State Management**
```typescript
// Implementation with useReducer to handle order state
const [state, dispatch] = useReducer(orderReducer, initialState)

// Reducer actions
type OrderActions = 
  | { type: 'add-item'; payload: { item: MenuItem } }
  | { type: 'remove-item'; payload: { id: number } }
  | { type: 'clear-order' }
  | { type: 'update-tip'; payload: { tip: number } }
  | { type: 'update-discount'; payload: { discount: number } }
```

### **Template System**
```typescript
// Dynamic theme configuration
const TEMPLATES = [
  { 
    id: 'modern', 
    name: 'Modern Lime',
    icon: '🌟',
    colors: {
      primary: 'from-lime-600 to-yellow-500',
      primaryHover: 'from-lime-700 to-yellow-600',
      bg: 'from-lime-50 via-yellow-50 to-lime-50',
      border: 'border-lime-200',
      text: 'text-lime-600'
    }
  }
  // ... more templates
] as const
```

---

## 🚀 Installation and Setup

### **Prerequisites**
- Node.js >= 18.0.0
- npm >= 8.0.0

### **Installation**
```bash
# Clone the repository
git clone https://github.com/firedevelop/POSplus.git

# Navigate to directory
cd POSplus

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```json
{
  "scripts": {
    "dev": "vite",              // Development server
    "build": "tsc -b && vite build",  // Production build
    "lint": "eslint .",         // Code linting
    "preview": "vite preview"   // Build preview
  }
}
```

---

## 🏗️ Project Architecture

```
src/
├── components/           # Reusable components
│   ├── Header.tsx       # Main navigation
│   ├── MenuItem.tsx     # Product card
│   ├── OrderContents.tsx # Order content
│   └── ...
├── data/                # Menu data
│   └── menu/
│       ├── es-ES.ts     # Spanish menu
│       ├── en-US.ts     # English menu
│       └── ...
├── i18n/                # Internationalization
│   ├── es-ES.ts         # Spanish translations
│   ├── en-US.ts         # English translations
│   └── ...
├── pages/               # Application pages
├── reducers/            # State management
├── types/               # TypeScript definitions
└── App.tsx              # Main component
```

---

## 💡 Outstanding Technical Features

### **🎯 Scalable State Management**
```typescript
// Reducer pattern for complex state handling
const orderReducer = (state: OrderState, action: OrderActions): OrderState => {
  switch (action.type) {
    case 'add-item':
      const existingItem = state.order.find(item => item.id === action.payload.item.id)
      if (existingItem) {
        return {
          ...state,
          order: state.order.map(item =>
            item.id === action.payload.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        order: [...state.order, { ...action.payload.item, quantity: 1 }]
      }
    // ... more cases
  }
}
```

### **🎨 Dynamic Theming**
```typescript
// Template system with TypeScript
type Template = {
  id: string
  name: string
  icon: string
  colors: {
    primary: string
    primaryHover: string
    bg: string
    border: string
    text: string
  }
}

// Dynamic style application
const dynamicStyles = `bg-gradient-to-r ${template?.colors?.primary}`
```

### **🌍 Robust Internationalization**
```typescript
// Typed translation structure
interface Translations {
  menu: string
  home: string
  contact: string
  ticket: {
    title: string
    header: string
    subtotal: string
    total: string
  }
}
```

---

## 📊 POS Functionality

### **🛒 Order Management**
- ✅ Add/remove products with one click
- ✅ Automatic quantities when adding duplicate products
- ✅ Real-time subtotal calculations
- ✅ Percentage discount system
- ✅ Configurable tips

### **🧾 Ticket Generation**
- ✅ Authentic thermal printer format
- ✅ Automatic ticket numbering
- ✅ Detailed product information
- ✅ Tax and total calculations
- ✅ Print-optimized design

### **🎨 Customization**
- ✅ 6 predefined color themes
- ✅ Default template configuration
- ✅ Automatic UI adaptation
- ✅ Dynamic logo color changes

---

## 🎯 Use Cases

### **🍕 Restaurants**
Perfect for pizzerias, cafes and restaurants that need a modern and easy-to-use POS system.

### **🛍️ Retail**
Adaptable for small and medium stores that require discount and tip calculations.

### **📱 Kiosks**
Intuitive interface ideal for self-service systems and interactive kiosks.

---

## 🔧 Advanced Configuration

### **Change Default Template**
```typescript
// In src/App.tsx
const DEFAULT_TEMPLATE: TemplateId = 'ocean' // Change here
```

### **Add New Languages**
```typescript
// 1. Create file in src/i18n/
// 2. Add to LANGS array in App.tsx
const LANGS = [
  { code: 'pt-BR', flag: 'https://flagcdn.com/br.svg', label: 'Português' }
]
```

### **Customize Products**
```typescript
// In src/data/menu/
export const menu = {
  pizzas: [
    {
      id: 1,
      name: "Margherita",
      price: 12.99,
      image: "/images/pizza-001.webp",
      description: "Tomato, mozzarella and fresh basil"
    }
  ]
}
```

---

## 📈 Performance and Optimization

- ⚡ **Optimized build** with Vite for fast loading
- 🔄 **Lazy loading** of components and routes
- 📱 **Responsive design** with optimized breakpoints
- 🎨 **Optimized CSS** with Tailwind CSS purging
- 🧹 **Clean code** with ESLint and TypeScript

---

## 🤝 Contributing

Contributions are welcome! If you want to improve this project:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

---

## 📄 License

This project is under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 👨‍💻 Developed by

**fireDevelop**
- 🌐 [Website](https://firedevelop.com)

---

<div align="center">

**⭐ If you like this project, give it a star on GitHub! ⭐**

</div>
      