import React, { Component } from 'react'

//ket noi vs redux (connect ham ket noi reactComponent - reduxStore)
import { connect } from 'react-redux'

class Modal extends Component {

    rederGioHang = () => {
        // this.props.gioHang la thuoc tinh nhan tu  redux
        // console.log(this.props.gioHang);
        return this.props.gioHang.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td><img src={sp.hinhAnh} width={50} height={50} alt='' /></td>
                    <td>{sp.gia}</td>
                    <td>
                        <button
                            onClick={() => this.props.tangGiamSL(index, true)}>+</button>
                        {sp.soLuong}
                        <button
                            onClick={() => this.props.tangGiamSL(index, false)}>-</button></td>
                    <td><button className="btn btn-danger"
                        onClick={() => this.props.xoaGioHang(index)}
                    >Xoa</button></td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Ma SP</td>
                            <td>Ten SP</td>
                            <td>Hinh Anh</td>
                            <td>Gia Ban</td>
                            <td>So Luong</td>
                            <td>Thanh Tien</td>

                        </tr>
                    </thead>
                    <tbody>
                        {this.rederGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2"></td>
                            <td>tong tien</td>
                            <td>{this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                return tongTien += spGioHang.soLuong * spGioHang.gia
                            }, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => { // state la store tong, = > truy xuat den gio hang reducer => bien state tren reduxcer
    return {
        gioHang: state.gioHangReducer.gioHang // tao ra mot props cua component modal gio hang redux
    }
}
const mapdispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (index) => {
            const action = {
                type: 'xoa_Gio_Hang',
                index
            }
            // dua action len reducer
            dispatch(action);
        },
        tangGiamSL: (index, tangGiam) => {
            const action = {
                type: 'tang_giam',
                index,
                tangGiam
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Modal)