import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
export default class BaiTap extends Component {
    mangSanPham = [
        { maSP: 1, soLuong: 1, gia: 200, moTa: 'quan xau vc', tenSP: 'ao', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/5d/ec/cd/b7b9d38bf699410aae76bc7e4f2a6d40.jpg' },
        { maSP: 2, soLuong: 1, gia: 150, moTa: 'ao cai bang 2016', tenSP: 'quan', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/19/53/4b/f396e61ffd3a96a35a4daca2efa16d97.jpg' },
        { maSP: 3, soLuong: 1, gia: 300, moTa: 'dep lao', tenSP: 'giay', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/f6/28/31/6b96974812c92f09d82f61b678f65cee.jpg' },
        { maSP: 4, soLuong: 1, gia: 100, moTa: 'mu coi', tenSP: 'mu', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/24/44/50/fd2d0f77d6b528bc9ad5f4e4bdfc5935.jpg' }
    ]
    constructor(props) {
        super(props)
        this.state = {
            gioHang: []
        }
    }

    themGioHang = (spClick) => {
        // console.log(spClick);
        //từ sản phẩm được chọn tạp ra sản phẩm giỏ hàng
        let spGioHang = {
            maSP: spClick.maSP,
            soLuong: 1,
            gia: spClick.gia,
            moTa: spClick.moTa,
            tenSP: spClick.tenSP,
            hinhAnh: spClick.hinhAnh
        };
        //kiểm tra sp được chọn có trong giỏ hàng chưa
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP)
        if (index !== -1) {
            // //sản phẩm click đã có trong giỏ hàng
            gioHangCapNhat[index].soLuong += 1;
        } else {
            //sản phẩm click chưa có trong giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }
        //set state để render lại
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    xoaGioHang = (id) => {
        //tìm trong giỏ hàng có chứa mã sp được click thì xóa nó đi
        // var gioHangCapNhat = [...this.state.gioHang];
        // let index = gioHangCapNhat.findIndex(sp => sp.maSP ===id);
        // if(index !== -1){
        //     gioHangCapNhat.splice(index,1)
        // }
        // lấy ra các sản phẩm khác click
        var gioHangCapNhat = this.state.gioHang.filter(sp => sp.maSP !== id)
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSL = (id, tangGiam) => {
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === id);
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        //cap nhat lai gio hang
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {
        let tongSoLuong = this.state.gioHang.reduce((tongSL, item, index) => {
            return tongSL += item.soLuong;
        }, 0)
        return (

            <div className="text-center">
                <Modal tangGiamSL={this.tangGiamSL} xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
                <h3>bài tập giỏ hàng</h3>
                <div>
                    <button style={{ padding: '5px', margin: '5px' }}
                        data-toggle="modal" data-target="#modelId">giỏ hàng <span style={{ color: 'red' }}>({tongSoLuong})</span></button>
                </div>
                <ProductList DSSP={this.mangSanPham} themGioHang={this.themGioHang} />

            </div>
        )
    }
}
