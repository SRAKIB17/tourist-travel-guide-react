import { useEffect, useState } from "react"

const useJsonData = (link)=>{
    const [storeJson, setStoreJson] = useState([])
    useEffect(()=>{
        fetch(link)
        .then(res=>res.json())
        .then(data=>setStoreJson(data))
    },[link])
    return storeJson;
}
export default useJsonData;