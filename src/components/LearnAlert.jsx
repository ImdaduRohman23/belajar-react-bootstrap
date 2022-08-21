import React from 'react'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react';

const LearnAlert = () => {
    const [show, setShow] = useState(true);


    return (
    <div>
        {/* {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ].map((variant) => (
            <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
            </Alert>
        ))} */}

        <Alert variant='info'>
            Lagi belajaran bikin Alert!
        </Alert>

        <Alert variant='danger'>
            Memang gak mudah. Plizzz, jangan nyerah!
        </Alert>

        <>
            <Alert show={show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me y'all!
                </Button>
                </div>
            </Alert>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    </div>
    )
}

export default LearnAlert
