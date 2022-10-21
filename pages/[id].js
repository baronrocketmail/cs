import NavLinks from "./Components/NavLinks";
import {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    fetchUnpaidObjArray,
    fetchUnpaidObjArrayforSpecific,
    fetchUnpaidObjArrayPaths,
    fetchUnpaidObjArraySpecific
} from "./api/dataFetching.mjs";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Components/CheckoutForm";

const stripePromise = loadStripe("pk_live_51LlESTC3Ie0MSAM2CQtveok1BNyKHlkw8W0aVunFTMYjMAGi0y6dEaHreNGy0TC4oRkfSMwOkcXUftn0oTlwDaBg00bnHjzls6");
export async function getStaticPaths(){
    const unpaidObjArray = await fetchUnpaidObjArrayPaths()
    return {
        paths: unpaidObjArray,
        fallback: false,
    }

}
export async function getStaticProps(context){
    const paymentInfo = await fetchUnpaidObjArraySpecific(context.params.id)
    const objArray = await fetchUnpaidObjArrayforSpecific(context.params.id)
    return {
        props: {paymentInfo, objArray},
        revalidate: 1,
    }
}

export default function Specific(props){
    console.log(props.paymentInfo)
    const clientSecret = props.paymentInfo.clientSecret
    const appearance = {
        theme: 'minimal',
    };
    const options = {
        clientSecret: clientSecret,
        appearance,
    };
    return(
    <div>
        <NavLinks objArry ={props.objArray}/>
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    </div>
    )
}