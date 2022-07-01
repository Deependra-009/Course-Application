import React from 'react'
import { Card, CardBody } from 'reactstrap';

function Header() {
    return (
        <Card className='my-2 bg-warning'>
            <CardBody>
                <h1 className='text-center my-2'>
                    Welcome to Course Application
                </h1>
            </CardBody>
        </Card>

    )
}

export default Header;