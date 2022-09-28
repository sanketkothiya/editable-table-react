import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios";

const Fetch = () => {
    const [val, setVal] = useState();

    const [user, setUser] = useState([]);
    const [postapi, setPostapi] = useState();

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    const fetchData2 = () => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUser(response.data));
    }

    async function fetchData3() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUser(response.data)
        } catch (error) {
            console.error(error);
        }
    }


    async function fetchData4() {
        const data = await fetch('https://random.dog/woof.json')
        const result = await data.json()
        setVal(result.url)

    }

    // ///////////////////////   post api /////////////////////////

    function postData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
            .then(response => response.json())
            .then(data => setPostapi({ postId: data.id }));

    }




    useEffect(() => {
        postData()
        fetchData3()

    }, []);

    return (
        <div>
            {/* <img src={val} alt="image" width={500} /> */}
            <h1>User List</h1>
            <ul>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <li key={userObj.id}>{userObj.name}</li>
                ))}
            </ul>




        </div>
    )
}

export default Fetch;

