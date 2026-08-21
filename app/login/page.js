import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <div className='flex justify-center items-center w-screen h-screen'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />

                    <Link href="/">Register</Link>

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </>
    )
}

export default page
