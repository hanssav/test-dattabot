import React from 'react'

import {Modal, Button} from 'react-bootstrap'
import Body from './Body'
import './style.css'

export default function Detail(props) {
    // console.clear()
    console.log(props.url)

    return (
        <div className="container home py-5 h-100">
            <div className="row justify-content-center h-100">
                <div className="col h-100 w-100">
                    <div className="mt-4 w-100" style={{height: "90%" }}>
                        {/* <ModalDetail {...props} /> */}
                        <Modal className="detail-modal h-100" show={props.show} onHide={props.handleClose} size="lg" scrollable="true">
                            <Modal.Header closeButton>
                                <Modal.Title>Detail Pokemon</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="">
                                <Body {...props}/>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={props.handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}
