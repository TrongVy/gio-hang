import React, { Component } from 'react'
import Modal from './Modal';
import DSSP from './DSSP';
export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div className="container">
                <h3>bai gio hang redux</h3>
                    <Modal/>
                    <DSSP/>
            </div>
        )
    }
}
