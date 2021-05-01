import { useState } from 'react'

export default function useAccount(address) {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()

    return { username, email }
}
