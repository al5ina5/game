import { useContext, useEffect, useState } from 'react'
import LiveChat from '../components/LiveChat'
import Icons from '../components/Icon'
import items from '../lib/items'
import Icon from '../components/Icon'
import usePops, { Modal } from '../hooks/usePops'
import Button from '../components/Button'
import { Web3Context } from './_app'
import useAccount from '../hooks/useAccount'

export default function App() {
    const { removePop, createModal, createAlert } = usePops()
    const { connect, account, balance } = useContext(Web3Context)

    const { username, setUsername, email, setEmail } = useAccount(account)

    const [usernameInput, setUsernameInput] = useState(null)
    const [emailInput, setEmailInput] = useState(null)

    const onSubmit = () => {
        setUsername(usernameInput)
        setEmail(emailInput)
    }

    return (
        <>
            {!account && (
                <Modal
                    title="Sign-in to get started"
                    children={
                        <div className="space-y-4">
                            <p className="text-x">Please login with your Wallet to get started.</p>
                            <Button onClick={() => connect()}>MetaMask</Button>
                        </div>
                    }
                />
            )}

            {/* {account && (
                <>
                    {(!username || !email) && (
                        <Modal
                            title="Create your user"
                            children={
                                <div className="space-y-4">
                                    <p className="text-x">You're new!</p>
                                    <p className="text-xxs">Please note: This information may be displayed publicly.</p>

                                    <input value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)} placeholder="Enter a username" className="border-emboss p-1 w-full block" type="text" />

                                    <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Enter an email" type="email" className="border-emboss p-1 w-full block" />

                                    <Button onSubmit={onSubmit} disabled={!emailInput || !usernameInput} onClick={() => connect()}>
                                        Create user
                                    </Button>
                                </div>
                            }
                        />
                    )}
                </>
            )} */}

            <div className="flex flex-col h-full font-win">
                <div className="bg-win-gray border-emboss p-2 flex text-xs">
                    <div className="flex-1" />
                    <div className="flex space-x-4">
                        <div className="flex items-center">
                            <p className="mr-1">200 VUNDER</p>
                            <img src="/img/coin/gray.gif" alt="" />
                        </div>
                        <div className="flex font-bold items-center">
                            <p className="mr-1">{balance} $UNDER</p>
                            <img src="/img/coin/red.gif" alt="" />
                        </div>
                        <div>
                            <Button>Exchange</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1">
                    <div className="flex-1 bg-red-400 border-emboss bg-win-gray p-4 flex flex-col space-y-4">
                        <div className="flex flex-col flex-1 bg-gray-600 border-emboss-invert p-1">
                            <div className="flex-1 flex items-center justify-center">
                                <img src="/img/animals3_31.png" className="w-64 pixelated" alt="" />
                            </div>
                        </div>
                        <div className="">
                            <div className="grid grid-cols-2 text-center">
                                <Button>Care For</Button>
                                <Button>Socialize With</Button>
                                <Button>Train</Button>
                                <Button>Open Shop</Button>
                            </div>
                        </div>
                        <div className="h-60 hide-scroll-bar space-y-4 flex">
                            <div className="bg-white p-4 border-emboss-invert overflow-auto flex-1">
                                {items.map(({ slug, path }) => (
                                    <Icon
                                        key={slug}
                                        src={path}
                                        quantity={3}
                                        onClick={() =>
                                            createModal(
                                                slug,
                                                <div className="space-y-4">
                                                    <p>Are you sure you want to purchase this item?</p>
                                                    <div className="flex justify-end">
                                                        <Button onClick={() => removePop('mypopmodal')}>Cancel</Button>
                                                        <Button
                                                            onClick={() => {
                                                                createAlert('1x  has been added to your inventory.')
                                                                removePop('mypopmodal')
                                                            }}
                                                        >
                                                            Buy
                                                        </Button>
                                                    </div>
                                                </div>,
                                                { id: 'mypopmodal' }
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-96 flex-1 p-4 max-w-2xl  border-emboss bg-win-gray">
                            <p className="mb-4">Leaderboard</p>
                        </div>
                        <div className="w-96 flex-1  p-4 max-w-2xl  border-emboss bg-win-gray">
                            <p className="mb-4">Transactions</p>
                            <div className="w-full border-emboss p-2 text-xs">@whoever just fed his wolf</div>
                            <div className="w-full border-emboss p-2 text-xs">@username just fed his wolf</div>
                            <div className="w-full border-emboss p-2 text-xs">@coolpurson just fed his wolf</div>
                            <div className="w-full border-emboss p-2 text-xs">@furkat just groomed his wolf</div>
                            <div className="w-full border-emboss p-2 text-xs">@tacurf just fed his wolf</div>
                        </div>
                    </div>
                    <LiveChat />
                </div>
            </div>
        </>
    )
}
