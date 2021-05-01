import { useEffect, useState } from 'react'
import io from 'socket.io-client'

let socket
export default function LiveChat() {
    const [input, setInput] = useState(null)
    const [messages, setMessages] = useState([])

    const addMessage = (message) => {
        setMessages((_) => [..._, message])
        socket.emit('message', messages)
    }

    useEffect(() => {
        if (socket) return

        fetch('/api/chat').finally(() => {
            socket = io()

            socket.on('message', (msg) => {
                addMessage(msg)
            })

            // socket.on('connect', () => {
            //     console.log('connect')
            //     socket.emit('hello')
            // })
        })
    })

    return (
        <div className="w-96 max-w-2xl bg-red-400 border-emboss bg-win-gray p-4 flex flex-col">
            <p>Live chat</p>
            <div className="flex-1">
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    addMessage(input)
                    setInput('')
                }}
                className="flex"
            >
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Send a message..." className="bg-white flex-1 border-emboss-invert p-2" />
                <button className="border-emboss px-2">Send</button>
            </form>
        </div>
    )
}
