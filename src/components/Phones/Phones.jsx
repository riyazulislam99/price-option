import axios from "axios";
import { useState } from "react";
import { Puff } from "react-loader-spinner";



const Phones = () => {
    const [loading, setLoading] = useState(true)
    const [phones, setPhones] = useState([])
    // fetch er khalato vai
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => setPhones(data.data.data))
        setLoading(false)

    return (
        <div>
            {loading && <Puff
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />}
            <h2 className="text-3xl">Phones: {phones.length}</h2>
        </div>
    );
};

export default Phones;