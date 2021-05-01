import { useContext, useState } from 'react'
import { Web3Context } from '../pages/_app'
import Button from './Button'

export default function Sidebar() {
    const { connect, account, balance } = useContext(Web3Context)

    const [showMenu, setShowMenu] = useState(true)

    return (
        <>
            <div className="absolute top-0 left-0 py-6 z-30">
                <Button onClick={() => setShowMenu((_) => !_)}>Open</Button>
            </div>
            {showMenu && (
                <>
                    <div className="flex absolute sm:relative h-full z-30">
                        <div className="bg-win-gray border-emboss p-1 flex">
                            <div className="w-64 bg-white border-emboss-invert p-4 space-y-8 flex flex-col">
                                <div className="space-y-4 w-full">
                                    <div className="absolute top-0 right-0 py-6">
                                        <Button onClick={() => setShowMenu((_) => !_)}>Close</Button>
                                    </div>
                                    <img src="https://www.zookeeper.finance/assets/zoo_logo.png" alt="" />
                                    <div className="flex flex-col">
                                        {!account && (
                                            <Button onClick={() => connect()} className="mx-auto">
                                                Connect your wallet
                                            </Button>
                                        )}
                                        {account && (
                                            <div className="text-xs">
                                                <p>
                                                    {account.slice(0, 6)}
                                                    ......
                                                    {account.slice(account.length - 6, account.length)}
                                                </p>
                                                <p className="truncate">{balance}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1" />
                                <div className="space-y-2">
                                    <div className="bg-win-gray p-1 text-xs border-emboss">1 $UNDER = $0.01231</div>
                                    <div className="bg-win-gray p-1 text-xs border-emboss">Current Supply: 777,777,777</div>
                                    <div className="text-xxs text-center opacity-50">Built on Ethereum</div>
                                </div>
                            </div>
                        </div>
                        <div className="block sm:hidden">{/* <div className="py-6">
                    <Button>Menu</Button>
                </div> */}</div>
                    </div>
                </>
            )}
        </>
    )
}
