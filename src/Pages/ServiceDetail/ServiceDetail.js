import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css';



const ServiceDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({})
    const [quantity, setQuantity] = useState(0)
    const [sell, setSEll] = useState(0)


    useEffect(() => {
        const url = `http://localhost:5000/store/${id}`


        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setQuantity(data.quantity);
                setSEll(data.sell);
                //    console.log(data);

            })
    }, [quantity])





    const deleverdbtnHandle = () => {
        let newquantity = 0;
        let sold = 1

        if (sell >= 1) {

            sold = parseInt(details.sell) + 1
        }

        if (quantity > 0) {

            newquantity = parseInt(details.quantity) - 1

            setQuantity(newquantity)

            const stingNewquantity = newquantity + ''
            const stingNewsell = sold + ''

            const updataitem = {
                quantity: stingNewquantity,
                sell: stingNewsell
            }
            const url = `http://localhost:5000/delivered/${id}`
            fetch(url, {

                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(updataitem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })



        }

    }
    const inputquntity = useRef();
    const restockHandle = () => {
        let restackValue = parseInt(inputquntity.current.value);
        let restackquantity = restackValue;
        // if (quantity < 1) {
        //     restackquantity=  restackValue;
        // }

        if (quantity > 0) {
            restackquantity = parseInt(details.quantity) + restackValue


        }
        const stingNewquantity = restackquantity + ''
        const url = `http://localhost:5000/delivered/${id}`
        fetch(url, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ quantity: stingNewquantity })

        })
            .then(res => res.json())
            .then(data => {

            })
        setQuantity(restackquantity)


        inputquntity.current.value = ''
    }
    let quantities
    if (quantity === '0') {
        quantities = "Out of stack"
    } else {
        quantities = quantity
    }


    return (
        <div className='container mx-auto'>
            <div>
                <div >
                    <h2 className='text-center mt-5 pb-5'>Product Details</h2>
                    <div className='service'>
                        <img className='w-50' src={details?.img} alt="" />
                        <h2>{details?.name}</h2>
                        <p>Price: ${details?.price}</p>
                        <p>Supplier: {details?.supplier}</p>
                        <p>{details?.description}</p>

                        <p>{quantities}</p>
                        <button className='btn logButton' onClick={deleverdbtnHandle} >Delivered</button>
                    </div>
                </div>



            </div>
            <div className='text-center p-5'>
                <div id={`restack`}>
                    <input className='restore' ref={inputquntity} placeholder='restore quantity number....' type="number" name="restock" id="" />
                    <button className='restore' onClick={restockHandle} >Restore</button>
                </div>
            </div>

        </div>
    );
};

export default ServiceDetail;