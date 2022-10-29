import React, { createContext, useContext, useState } from 'react'
import sublinks from "../data"

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page: '', links: []});
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, cordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page);
        setLocation(cordinates);
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

  return (
    <AppContext.Provider value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        page,
        location
    }}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}