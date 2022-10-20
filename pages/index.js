import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavLinks from "./Components/NavLinks";

export default function Home() {
  return (
      <div>

       <NavLinks objArry = {[{name: "dsffsdf", url:"/sd"}]}/>

      </div>
  )
}
