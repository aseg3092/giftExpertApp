import { useEffect, useState } from "react"
import {getGifts} from '../helpers/GetGifts'

export const useFetchGifs=( category )=>{

    const [state,setState] = useState({
        data:[],
        loading:true
    });

    useEffect( async() =>{
        getGifts(  category)
        .then( imgs =>{
            setState({
                data:imgs,
                loading:false
            });
        })
    },[category])
    return state;
}