import React, { Component } from 'react';

import './style.css';

export default class PhoneFilter extends Component {
    state = {
        filter: 'ALL'
    }

    render() {
        const { phones } = this.props;
        return (
            <div className="phonefilter">
                <div className="h3">
                    Phones filter
                </div>

                <ul className="filter-list">
                    <li key={'ALL'}>
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeFilter(e.target.text);
                        }}>
                            ALL
                        </a>
                    </li>
                    {(phones.length !== 0) ? phones.map(phone =>
                        <li key={phone.id}>
                            <a href="" onClick={(e) => {
                                e.preventDefault();
                                this.props.onChangeFilter(e.target.text);
                            }}>
                                {phone.name}
                            </a>
                        </li>) : null}
                </ul>

                <div className="search">
                    <div className="h4">
                        Search
                    </div>

                    <input type="text" className="search-field" onChange={(e) => {
                        e.preventDefault();
                        this.props.onChangeFilter(e.target.value || 'ALL');
                    }}/>
                </div>
            </div>
        );
    }
}
