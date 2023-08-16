import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Add new note',
        content: "Enter your content here",
    },
    {
        id: '2',
        title: 'Add new note',
        content: "Enter your content here",
    }
]

const noteSlice = createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote: (state = initialState, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
            return state.filter(note => note.id !== action.payload);
        },
        editNote: (state, action) => {
            const { id, title, content } = action.payload;
            const noteToEdit = state.find(note => note.id === id);
            if (noteToEdit) {
              noteToEdit.title = title;
              noteToEdit.content = content;
            }
          },

    

    }
})

export const SelectNotes = state => state.notes;
export const  {addNote, deleteNote, editNote} = noteSlice.actions;
export default noteSlice.reducer