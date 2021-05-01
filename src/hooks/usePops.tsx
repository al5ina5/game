import { createContext, useContext, useEffect, useState } from 'react'
import shortid from 'shortid'
import Button from '../components/Button'

export const PopContext = createContext({})

export default function usePops() {
    return useContext(PopContext)
}

export const Alert = ({ title, children }) => (
    <div>
        <div className="pointer-events-auto bg-win-gray border-emboss p-2">
            <p className="text-xs">{title}</p>
            {children && children}
        </div>
        <div className="border border-black loader" />
    </div>
)

export const Modal = ({ title, children, buttons, id }) => {
    const { removePop } = usePops()

    return (
        <div className="pointer-events-auto absolute inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
            <div className="bg-win-gray p-1 border-emboss z-10 w-full max-w-sm">
                <div className="flex items-center bg-win-darkblue px-2 py-1 text-white">
                    <div className="dragger w-full mr-4">{title}</div>
                    <div className="ml-auto space-x-1 text-black flex flex-row items-center">
                        <Button onClick={() => removePop(id)} className="font-win-bold">
                            X
                        </Button>
                    </div>
                </div>
                <div className="p-5">{children}</div>
            </div>
        </div>
    )
}

export const PopFrame = ({ children }) => <div className="h-screen w-screen absolute inset-0 z-50 pointer-events-none">{children}</div>

export function PopWrapper({ children }) {
    const [pops, setPops] = useState([])

    const removePop = (id) => {
        setPops((_) => _.filter((pop) => pop.id !== id))
    }

    const createPop = (type, title, children, config) => {
        const id = config?.id || shortid.generate()

        const newPop = {
            id,
            type,
            title,
            children,
            config
        }

        setPops((_) => [newPop, ..._])

        return id
    }

    const createModal = (title, children, config) => {
        createPop('modal', title, children, config)
    }

    const createAlert = (title, children, config) => {
        const id = createPop('alert', title, children, config)
        setTimeout(() => removePop(id), 4000)
    }

    return (
        <PopContext.Provider value={{ createModal, removePop, createAlert }}>
            <PopFrame>
                {pops.map((pop) => {
                    if (pop.type === 'modal') {
                        return <Modal key={pop.id} {...pop} />
                    }
                    return null
                })}
                <div className="fixed p-4 space-y-2 right-0 w-full max-w-md">
                    {pops.map((pop) => {
                        if (pop.type === 'alert') {
                            return <Alert key={pop.id} {...pop} />
                        }
                        return null
                    })}
                </div>
            </PopFrame>
            {children}
        </PopContext.Provider>
    )
}
