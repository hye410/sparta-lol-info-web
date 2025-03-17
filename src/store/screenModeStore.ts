import { SCREEN_MODE } from "@/constants/screenMode";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
const { DARK, LIGHT } = SCREEN_MODE;

type Store = {
  mode: string;
  changeMode: () => void;
};

const useScreenModeStore = create<Store>()(
  persist(
    (set) => ({
      mode: DARK,
      changeMode: () =>
        set((state) => ({ mode: state.mode === DARK ? LIGHT : DARK })),
    }),
    {
      name: "screen-mode",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useScreenModeStore;
