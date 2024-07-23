import {createSlice,PayloadAction} from '@reduxjs/toolkit';

interface CounterState{
    value:number
}

const initialState: CounterState = {
    value: 0,
}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increamented(state){
            state.value++
        }
    }
})

export const {increamented} = counterSlice.actions;
export default counterSlice.reducer;