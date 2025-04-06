
import { getUser } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import LogoutButton from "./logout-button";

export default async function NavbarAuth() {

    const {session, user} = await getUser();

    return (
        <div className="inline-flex items-center gap-3">
            {session && user.role === "CUSTOMER" ? (
                <Link href="/my-tickets" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">My Tickets</Link>
            ) : (
                <Link href="/sign-in" className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]">Sign In</Link>
            )}

            {session && user.role === "CUSTOMER" && <LogoutButton/>}
        </div>
    )
    
}