import create from "zustand"
import { persist } from "zustand/middleware"

let appStore = (set) => ({
    dopen: true,
    // setRows: (rows) => set((state) => ({rows:rows})),
    // updateOpen: (dopen) => set((state) => ({dopen:dopen})),
    setRows: (rows) => set((state) => ({ ...state, rows: rows })),
    updateOpen: (dopen) => set((state) => ({ ...state, dopen: dopen })),
})

appStore = persist (appStore, {name: "admin-dashboard"});
export const useAppStore = create(appStore);