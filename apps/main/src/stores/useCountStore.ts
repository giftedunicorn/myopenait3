import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { devtools, persist, createJSONStorage } from "zustand/middleware"

type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

export const useCountStore = create<State & Actions>()(
    immer(
        devtools(
            persist(
                (set) => ({
                    count: 0,
                    increment: (qty: number) =>
                        set((state) => {
                            state.count += qty
                        }),
                    decrement: (qty: number) =>
                        set((state) => {
                            state.count -= qty
                        }),
                }),
                {
                    name: "count-storage", // name of the item in the storage (must be unique)
                    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
                },
            ),
        )
    )
)
