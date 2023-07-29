import Link from "next/link"
import React from "react"

const Navbar=()=>{
    return(
        <>
<nav className="bg-blue-700 py-4 px-14 flex items-center justify-between mb-5 ">
    {/* RIGHT SIDE */}
<div className="flex items-center ">
    <Link href="/">
        <div className="text-lg uppercase font-bold text-white font-bold">Take<span className=" font-bold">Goo</span><span className="text-green-300 font-bold">.com</span> </div>
    </Link>
</div>

{/* LEFT HAND SIDE */}
<div clar-4ssName="text-white">
    <Link href="/sign-in" className="text-gray-300 hover:text-white mr-4">Sign-In</Link>
    <Link href="/sign-up" className="text-gray-300 hover:text-white mr-4">Sign-Up</Link>

</div>
</nav>
        </>

    )
}

export default Navbar