import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { gioHang, xoaGioHang, tangGiamSL } = this.props;
        return (

            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ maxWidth: '800px', width: '800px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title"> giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>mã sp</td>
                                        <td>hình ảnh</td>
                                        <td>tên</td>
                                        <td> số lượng</td>
                                        <td>giá</td>
                                        <td>thành tiền</td>
                                        <td></td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {gioHang.map((spGH, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{spGH.maSP}</td>
                                                <td><img width={50} height={50} src={spGH.hinhAnh} alt="" /></td>
                                                <td>{spGH.tenSP}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => tangGiamSL(spGH.maSP, true)}>+</button>
                                                    {spGH.soLuong}
                                                    <button className="btn btn-primary" onClick={() => tangGiamSL(spGH.maSP, false)}>-</button>
                                                </td>
                                                <td>{spGH.gia}</td>
                                                <td>{spGH.gia * spGH.soLuong} </td>
                                                <td><button className='btn btn-danger' onClick={() => xoaGioHang(spGH.maSP)}>Xóa</button></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan='4'></td>
                                        <td>tong tien</td>
                                        <td>
                                            {this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                                                return tongTien+=spGioHang.soLuong*spGioHang.gia
                                            },0)}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
