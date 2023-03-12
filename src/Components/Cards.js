import React, { useEffect, useState } from 'react'
import Card from './Card';

const Cards = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className="container">
            {
                users.map((curElem) => {
                    return (
                        <div className="card_item" key={curElem.id}>
                            <Card curElem={curElem} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards;

