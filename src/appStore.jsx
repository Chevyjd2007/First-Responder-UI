import { persist } from "zustand/middleware";
import { create } from "zustand"; // Use named import for create

let appStore = (set) => ({
    dopen: true,
    updateOpen: (dopen) => set((state) => ({ dopen: dopen })),
});

appStore = persist(appStore, { name: "my_store" });

export const useAppStore = create(appStore);