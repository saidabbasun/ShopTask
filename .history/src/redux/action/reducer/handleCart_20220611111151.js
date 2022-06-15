const cart=[];

const handleCart=(state= cart,action)=>{
    const product=action.payload;
    switch(action.type){
        case ADDITEM:
            const exist=state.find((x)= x.id === product.id)
            if(exist){
                return state.map(())
            }
    }
}