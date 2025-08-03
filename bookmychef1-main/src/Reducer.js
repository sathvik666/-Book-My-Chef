export const cartReducer=(state,action)=>{
    switch (action.type) {
        case "add":
            return {...state,cart:[...state.cart, { ...action.payload, qty:1}]};
        case "remove":
            return {...state,
                cart: state.cart.filter((c)=> c._id.$oid !== action.payload._id.$oid),
            };
        case "change":
            return {...state,
                cart: state.cart.filter((c) => c.name === action.payload.id ? (c.qty = action.payload.qty) : (c.qty)),
            };
        default:
            return state;
    }
};