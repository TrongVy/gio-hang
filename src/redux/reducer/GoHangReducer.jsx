
//khoi tao gia tri ban dau cua store 
const stateGioHang = {
    gioHang: [],
}

export const gioHangReducer = ( state =stateGioHang,action) =>{
    switch(action.type){
        case 'them_Gio_Hang' : {
            // su ly them gio hang
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangCapNhat[index].soLuong +=1;
            } else{
                gioHangCapNhat.push(action.spGioHang)
            }
            state.gioHang = gioHangCapNhat;
            return{...state};
            
        }
        case 'xoa_Gio_Hang': {
            let gioHangCapNhat = [...state.gioHang]
            //xoa gio hang dua vao index
            gioHangCapNhat.splice(action.index,1);
            state.gioHang = gioHangCapNhat;
            return {...state}
        }
        case 'tang_giam' : {
            const {index,tangGiam} = action;
            let gioHangCapNhat =[...state.gioHang]
            if(tangGiam){
                gioHangCapNhat[index].soLuong +=1;
            } else {
                if(gioHangCapNhat[index].soLuong >1){
                    gioHangCapNhat[index].soLuong -=1;
                }
            }
            state.gioHang = gioHangCapNhat;
            return {...state}
        }

        default : ;
    }
    return { ...state}
}