import React, { Component } from 'react'
// ket noi vs store reducer gio hang
import {connect} from 'react-redux'
 class SanPham extends Component {
    render() {
        const { sp } = this.props;
        return (

            <div className="card">
                <img className="card-img-top" src={sp.hinhAnh} width={200} height={200}alt=''/>
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.gia}</p>
                    <button onClick={() =>{this.props.themGioHang(sp)}}>them gio hang</button>
                </div>
            </div>


        )
    }
}
// xay dung ham to ra props la ham su ly su kien => dua du lieu len store
const  mapDispatchProps = (dispatch) =>{
    return {
        // tao ra props component  (la function => dua du lieu len store);
        themGioHang : (sp) =>{
            const spGioHang =  {
                maSP : sp.maSP,
                tenSP : sp.tenSP,
                gia : sp.gia,
                soLuong: sp.soLuong,
                hinhAnh : sp.hinhAnh
            }
            // tao action dua du lieu len reducer
            const action = {
                type: 'them_Gio_Hang', // bat buoc
                spGioHang :spGioHang  // noi dung gui len reducer
            }
            // console.log(action);
            //dung ham dispatch de dua du lieu len reducer
            dispatch(action)
        }
    }
}
export default connect(null,mapDispatchProps)(SanPham);
