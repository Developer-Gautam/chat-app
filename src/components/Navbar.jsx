import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase'
import { signOut } from "firebase/auth"
import { updateDoc, doc } from 'firebase/firestore'
import { AuthContext } from '../context/auth'

const Navbar = () => {
    const navigate = useNavigate()

    const { user } = useContext(AuthContext)
    console.log(user)

    const handleSignout = async () => {
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
            isOnline: false
        })
        await signOut(auth)
        navigate('/login')
    }

    return (
        <nav>
            <h3><Link to="/">Messenger</Link></h3>

            <div>

                {user
                    ?
                    (
                        <div>
                            <Link to={'/profile'}>Profile</Link>
                            <button className='btn' onClick={handleSignout}>Logout</button>
                        </div>
                    )

                    :
                    (
                        <div>
                            <Link to={'/register'}>Register</Link>
                            <Link to={'/login'}>Login</Link>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar