import React from 'react'

const Postdata = () => {
    url = '';
    const [data, setData] = useState(({
        name: '',
        date: '',
        uid: ''
    }));

    const handleevent = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData[newdata]

    }
    return (
        <div>
            <form action="">

                <input onChange={(e) => { handleevent(e) }} value={data.name} id='name' type="text" placeholder='enter your name' />
                <input onChange={(e) => { handleevent(e) }} value={data.date} id="data" type="date" placeholder='enter your bdata' />
                <input onChange={(e) => { handleevent(e) }} value={data.uid} id='uid' type="nuber" placeholder='enter user id' />
            </form>
        </div>
    )
}

export default Postdata