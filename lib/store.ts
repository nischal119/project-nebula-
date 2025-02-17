import { create } from "zustand"

interface AppState {
  isNSFW: boolean
  toggleNSFW: () => void
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>((set) => ({
  isNSFW: false,
  toggleNSFW: () => set((state) => ({ isNSFW: !state.isNSFW })),
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}))

