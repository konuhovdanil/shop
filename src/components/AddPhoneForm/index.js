import React, { Component } from 'react';

import './style.css';

export default class AddPhoneForm extends Component {


    componentDidUpdate() {
        console.log(this.refs.phoneImage.files/*[0].name*/);
    }
    render() {
        const { addNewPhone } = this.props;
        let nextId = 5;

        return (
            <form className="addphoneform clearfix" onSubmit={(e) => {
                e.preventDefault();
                addNewPhone({
                    "id": nextId++,
                    "image": this.refs.phoneImage.value.substring(12),
                    "name": this.refs.phoneName.value,
                    "price": this.refs.phonePrice.value
                });

                console.log(setTimeout(()=>{this.props.phones}, 2000));
            }}>
                <div className="form-group">
                    <label>
                        <div className="caption">Choose Image:</div>
                        <input required={true} ref="phoneImage" type="file"/>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <div className="caption">Enter name:</div>
                        <input required={true} ref="phoneName" type="text"/>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <div className="caption">Enter price:</div>
                        <input required={true} ref="phonePrice" type="number"/>
                    </label>
                </div>

                <button type="submit" className="btn-submit">Submit</button>
            </form>
        );
    }
}
