import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavLinks from "../Components/NavLinks";
import {useState, useEffect} from "react";
import {fetchPropertyInfoObj, fetchUnpaidObjArray} from "./api/dataFetching.mjs";
import {urlObjectKeys} from "next/dist/shared/lib/router/utils/format-url";
import "../styles/PaymentElement.module.css"

export async function getStaticProps(){
    const unpaidObjArray = await fetchUnpaidObjArray()
    const nameObj = await fetchPropertyInfoObj()
    return {
        props: {unpaidObjArray, nameObj},
        revalidate: 1,
    }
}

export default function Home(props) {
    console.log(props.nameObj)
    console.log(props.unpaidObjArray)
    let objArray = []
    objArray.push(...[{name: props.nameObj.name, url:"/"}, {name: "autopay", url:"/autopay"}])
    objArray.push(...props.unpaidObjArray)
    objArray.push({name: "...", url:"/log"})
    return(
        <div>
            <NavLinks objArry = {objArray}/>
        </div>
    )
}
