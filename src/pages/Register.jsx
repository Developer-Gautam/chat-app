import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react'
import { auth, storage } from "../firebase";

const Register = () => {

    const [err, setErr] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].value


        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const storageRef = ref(storage, displayName);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (error) => {
                    setErr(true)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        })
                    });
                }
            );


        } catch (err) {
            setErr(true)
        }

    }




    return (
        <div className='formContainer'>
            <div className="formWrapper">

                <span className="logo">FakeApp</span>
                <span className="title">Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Display' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <input type="file" style={{ display: "none" }} />

                    <label style={{ display: "flex", alignItems: "center", gap: "10px", opacity: "50%", fontSize: "14px" }}>
                        <img src="https://static.thenounproject.com/png/3752804-200.png" alt="" style={{ width: "25px" }} />
                        <span>Add an avatar</span>
                    </label>

                    <button>Sign Up</button>

                    {err && <span>Something went wrong</span>}

                </form>

                <p>You do have an account ? Login</p>

            </div>
        </div>
    )
}

export default Register