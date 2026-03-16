import { createContext, useContext, useReducer, ReactNode } from 'react'

interface CartItem {
  id: string
  variant: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'id'> }
  | { type: 'UPDATE_QTY'; id: string; quantity: number }
  | { type: 'REMOVE_ITEM'; id: string }

const CartContext = createContext<{
  state: CartState
  addItem: (item: Omit<CartItem, 'id'>) => void
  updateQty: (id: string, qty: number) => void
  removeItem: (id: string) => void
  getTotalCount: () => number
  getTotalPrice: () => number
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newId = Date.now().toString()
      const existingIndex = state.items.findIndex(item => item.variant === action.payload.variant)
      if (existingIndex >= 0) {
        const updatedItems = [...state.items]
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + action.payload.quantity
        }
        return { items: updatedItems }
      }
      return { items: [...state.items, { ...action.payload, id: newId }] }
    }
    case 'UPDATE_QTY': {
      const updatedItems = state.items.map(item =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      )
      return { items: updatedItems.filter(item => item.quantity > 0) }
    }
    case 'REMOVE_ITEM': {
      return { items: state.items.filter(item => item.id !== action.id) }
    }
    default:
      return state
  }
}



export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

