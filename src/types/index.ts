export type MenuItem = {
    id: number
    name: string
    price: number
    image: string
    description: string
}

export type OrderItem = MenuItem & {
    quantity: number
}

export type Template = {
    id: string
    name: string
    icon: string
    colors: {
        primary: string
        primaryHover: string
        bg: string
        border: string
        borderHover: string
        text: string
        ring: string
    }
}