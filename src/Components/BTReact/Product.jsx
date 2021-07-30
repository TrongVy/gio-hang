import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {item,chiTietSP,themGioHang} = this.props;
        const styleButton = {
            border:'none',
            padding: '5px',
            color:'white',
            backgroundColor:"gray",
            marginRight: '5px'
        }
        return (
            <div className=" card">
                <img height={200} className="card-img-top" src={item.hinhAnh} alt='' />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <p className="card-text">{item.gia}</p>
                    <button style={styleButton} onClick={()=>chiTietSP(item)}>chi tiet</button>
                    <button style={styleButton} onClick={()=>themGioHang(item)}             
                    >them san pham</button>
                </div>
            </div>
        )
    }
}
