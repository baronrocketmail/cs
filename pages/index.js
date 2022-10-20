import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavLinks from "./Components/NavLinks";
import {useState, useEffect} from "react";
import {fetchPropertyInfoObj, fetchUnpaidObjArray} from "./api/dataFetching.mjs";

export default function Home() {

    const [unpaidObjArray, setUnpaidObjArray] = useState([])

    useEffect(() => {
        fetchUnpaidObjArray().then( unpaidObjArray => {
                fetchPropertyInfoObj(). then( propertyInfoObj=> {
                    let objArray = [];
                    objArray.push(...[{name: propertyInfoObj.name, url: "/"}, {name: "autopay", url: "/autopay"}]);
                    objArray.push(...unpaidObjArray)
                    objArray.push(...[{name: "...", url:"/log"}])
                    setUnpaidObjArray(objArray);
                })
            }
        );
    }, [])


    return(
        <div>
            <NavLinks objArry = {unpaidObjArray}/>
        </div>
    )
}