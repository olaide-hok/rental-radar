'use client'
import {createContext, useContext, useState} from 'react'

const GlobalContext = createContext()

// Create a provider
export function GlobalProvider({children}) {
    const [unreadCount, setUnreadCount] = useState(0)

    return (
        <GlobalContext.Provider value={{unreadCount, setUnreadCount}}>
            {children}
        </GlobalContext.Provider>
    )
}

// Create a custom hook to access the context
export function useGlobalContext() {
    return useContext(GlobalContext)
}
