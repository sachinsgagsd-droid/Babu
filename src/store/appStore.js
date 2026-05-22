import { create } from 'zustand';

export const useAppStore = create((set) => ({
  activeModule: 'admin',
  activeSection: 'overview',
  selectedLead: null,
  selectedMember: null,
  setActiveModule: (module) => set({ activeModule: module }),
  setActiveSection: (section) => set({ activeSection: section }),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
  setSelectedMember: (member) => set({ selectedMember: member })
}));