import React, { Component } from 'react'
import Product from './Product'

export default class ProdcutList extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            sanPham:  {maSP :1,soLuong:1,gia:200,moTa:'quan xau vc',tenSP:'ao',hinhAnh:'https://salt.tikicdn.com/cache/w1200/ts/product/5d/ec/cd/b7b9d38bf699410aae76bc7e4f2a6d40.jpg'},
        })
    }
 
    chiTietSP=(sp)=>{
           this.setState({
               sanPham:sp
           })
    }
    render() {
        const { sanPham } = this.state;
        const { DSSP,themGioHang } = this.props;
        return (
            <div className="container">
                <div className="row">
                    {DSSP.map((item,index)=>{
                            return (
                                <div key={index} className='col-3'>
                                        <Product chiTietSP={this.chiTietSP} themGioHang={themGioHang} item={item} />
                                </div>
                            )
                    })}
                </div> <hr />
                <div className="row text-center">
                    <div className="col-6">
                        <h3>{sanPham.tenSP}</h3>
                        <img height={300} src={sanPham.hinhAnh} alt='' />
                    </div>
                    <div className="col-6">
                        <h3>chi tiet san pham</h3>
                        <p>{sanPham.moTa}</p>
                    </div>
                </div>
            </div>
        )
    }
}
