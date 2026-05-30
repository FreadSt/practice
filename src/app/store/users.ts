import {create} from 'zustand';

interface SelectedUserID {
  selectedId: number | null
  selectId: (id: number) => void
}

interface SelectedPostId {
  selectedPostId: number | null
  selectPostId: (id: number | null) => void
}

export const useSelectedUser = create<SelectedUserID>((set) => ({
  selectedId: null,
  selectId: (id: number) =>
    set({
      selectedId: id
    })
}))

export const useSelectedPost = create<SelectedPostId>((set) => ({
  selectedPostId: null,
  selectPostId: (id: number | null) => set({
    selectedPostId: id
  })
}))