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