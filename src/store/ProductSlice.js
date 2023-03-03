import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const status=Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading",
    SUCCESS:"success"
})

const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status:status.IDLE
    },
    // reducers:{
    //     setProducts(state,action){
    //         state.data=action.payload
    //     },
    //     setStatus(state,action){
    //         state.status=action.payload
    //     }
    // },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.status=status.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload                          //payload will be automatically sent by Redux
            state.status=status.SUCCESS
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status=status.ERROR
        })
    }
})

export const {setProducts,setStatus}=productSlice.actions;

export default productSlice.reducer;

// export function fetchProducts(){   //Normal way of writing Thunk Logic
    
//     const fetchProducts=async(dispatch,getState)=>{
//         dispatch(setStatus(status.LOADING))
//         try{
//         const res=await fetch('https://fakestoreapi.com/products/')
//         const data=await res.json()
//         dispatch(setProducts(data))
//         dispatch(setStatus(status.SUCCESS))
//         }
//         catch(err){
//             console.log(err)
//             dispatch(setStatus(status.ERROR))
//         }
//     }
//     return fetchProducts;
// }

export const fetchProducts=createAsyncThunk('products/fetch',async()=>{       //using createAsyncThunk
    const res=await fetch('https://fakestoreapi.com/products/')               //"product/fetch" is a identifier
    const data=await res.json()
    return data
})