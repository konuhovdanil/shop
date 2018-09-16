import React from 'react';

import './style.css';

export default function Modal(props) {
    const { isModalOpen, closeModal } = props;

    return (
        (!isModalOpen) ? null
            : <div className="overflow" style={{ height: document.getElementById('root').offsetHeight }}>
                <div className="modal">
                    <a href="" className="modal-close-button" onClick={e => {
                        e.preventDefault();
                        closeModal();
                    }}><span>x</span></a>
                    {props.component || props.children}
                </div>
            </div>
    )

}
