import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Sign up</legend>

                <label className="label">Name</label>
                <input type="text" className="input" placeholder="My awesome page" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="my-awesome-page" />

                <label className="label">Password</label>
                <input type="text" className="input" placeholder="Name" />
                <button className="btn btn-neutral mt-4">Sign up</button>
            </fieldset>
        </div>
    )
}

export default page
