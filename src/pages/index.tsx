import { useContext, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import Ticker from 'react-ticker'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import useCoins from '../hooks/useCoins'
import { Web3Context } from './_app'

export default function Index() {
    const { connect, account, balance } = useContext(Web3Context)

    return (
        <div className="flex h-full flex-col">
            <div className="bg-win-gray py-1 border-emboss  whitespace-nowrap overflow-hidden">
                <Ticker>
                    {({ index }) => (
                        <p className="block mr-48 text-xs text-center">
                            <span className="font-bold">BREAKING NEWS! </span>
                            Smart contracts, liquidty, swap, and more are officially live!
                        </p>
                    )}
                </Ticker>
            </div>
            <div className="flex flex-1 relative">
                <Sidebar />
                <div className="bg-win-gray border-emboss p-1 flex-1 flex">
                    <div className="flex-1 overflow-auto bg-white border-emboss-invert">
                        <div className="p-12 space-y-8">
                            <div className="space-y-4">
                                <p className="text-5xl font-win-bold">$UNDER</p>
                                <p className="text-2xl font-bold">Crypto for Good.</p>
                            </div>
                            <div className="max-w-xl">
                                <p>
                                    <span className="font-win-bold">You made it!</span> Welcome to the UNDERVERSE — the UNDERCOIN universe. UNDERCOIN is a brand-spanking crypto-currency powered by the Ethereum network
                                    with 2 purposes & goals: provide good to the world and create a fun, engaging, and expirimental crytogenic adventure using Blockchain technology.
                                </p>
                            </div>
                            {/* <div>
                                <iframe className="w-full h-96" src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
