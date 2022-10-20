import Link from "next/link";

export default function NavLinks(props){
    //  [ {name: "" , href: "" } ]
    let navLinks = []
    for (let elem in props.objArry){
        navLinks.push(
            <div>
                <Link href={props.objArry[elem].url}>{props.objArry[elem].name}</Link>
                <br/>
            </div>
        )
    }
    return(
        <div className={"navlinks"}>
            {navLinks}
        </div>
    )
}