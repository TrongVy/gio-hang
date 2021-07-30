import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DSSP extends Component {
    mangSanPham = [
        { maSP: 1, soLuong: 1, gia: 200, moTa: 'quan xau vc', tenSP: 'ao', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/5d/ec/cd/b7b9d38bf699410aae76bc7e4f2a6d40.jpg' },
        { maSP: 2, soLuong: 1, gia: 150, moTa: 'ao cai bang 2016', tenSP: 'quan', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/19/53/4b/f396e61ffd3a96a35a4daca2efa16d97.jpg' },
        { maSP: 3, soLuong: 1, gia: 300, moTa: 'dep lao', tenSP: 'giay', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/f6/28/31/6b96974812c92f09d82f61b678f65cee.jpg' },
        { maSP: 4, soLuong: 1, gia: 100, moTa: 'mu coi', tenSP: 'mu', hinhAnh: 'https://salt.tikicdn.com/cache/w1200/ts/product/24/44/50/fd2d0f77d6b528bc9ad5f4e4bdfc5935.jpg' }
    ]
    renderSP = ()=>{
        return this.mangSanPham.map( (sp,index)=>{
            return(
                <div className="col-3" key={index}>
                        <SanPham sp= {sp}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h3>danh sach sp</h3>
                    <div className="row">
                    {this.renderSP()}
                    </div>
            </div>
        )
    }
}
