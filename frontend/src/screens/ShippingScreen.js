
import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import {saveShippingAddress} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({history}) => {
    const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [state, setState] = useState(shippingAddress.state)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, state, postalCode, country}))
        history.push('/payment')
    }

    const usaStates = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        'Virginia',
        'Washington',
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ]

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter Address' 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter city' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='state'>
                <Form.Label>State</Form.Label>
                <Form.Control 
                    as='select' 
                    value={state} 
                    onChange={(e) => setState(e.target.value)}>
                        <option value="">Select State</option>
                            {usaStates.map((state, index) =>(
                                <option value={state} key={index}>{state}</option>))
                            }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter Postal Code' 
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
            </Form.Group>
            <Form.Group controlId='country'>
                <Form.Label>Country</Form.Label>
                <Form.Control 
                    type='text' 
                    placeholder='Enter Country' 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='my-3'>Continue</Button>

            </Form> 
        </FormContainer>
    )
}

export default ShippingScreen
