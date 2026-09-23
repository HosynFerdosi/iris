import { create } from "zustand"

type TabState = {
	tab: "login" | "verify" | "success"
	phone: string | null
	setTab: (tab: TabState["tab"]) => void
	setPhone: (phone: string | null) => void
}

export const useTab = create<TabState>((set) => ({
	tab: "login",
	phone: null,
	setTab: (tab) => set({ tab }),
	setPhone: (phone) => set({ phone }),
}))
