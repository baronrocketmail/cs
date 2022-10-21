import NavLinks from "./Components/NavLinks";
import {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    fetchUnpaidObjArray,
    fetchUnpaidObjArrayforSpecific,
    fetchUnpaidObjArrayPaths,
    fetchUnpaidObjArraySpecific
} from "./api/dataFetching.mjs";



const stripePromise = loadStripe("pk_live_51LlESTC3Ie0MSAM2CQtveok1BNyKHlkw8W0aVunFTMYjMAGi0y6dEaHreNGy0TC4oRkfSMwOkcXUftn0oTlwDaBg00bnHjzls6");
export async function getStaticPaths(){
    const unpaidObjArray = await fetchUnpaidObjArrayPaths()
    return {
        paths: unpaidObjArray,
        fallback: false,
    }

}
export async function getStaticProps(context){
    const info = await fetchUnpaidObjArraySpecific(context.params.id)
    const objArray = await fetchUnpaidObjArrayforSpecific(context.params.id)
    return {
        props: {info, objArray},
        revalidate: 1,
    }
}

export default function Specific(props){
    const [clientSecret, setClientSecret] = useState("");

    const appearance = {
        theme: 'minimal',
    };
    const options = {
        clientSecret,
        appearance,
    };

    const [unpaidObjArray, setUnpaidObjArray] = useState([])

    return(
        <NavLinks objArry ={props.objArray}/>
    )
}