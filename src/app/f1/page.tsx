import Link from "next/link";
 

export default function F1(){
    return <div>
        <h1>F1</h1>
        <div><Link href={'/f1/f2'}>F2</Link></div>
        <div><Link href={'/about'}>About</Link></div>
    </div>
}