import { useContext, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import Ticker from 'react-ticker'
import dynamic from 'next/dynamic'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import useCoins from '../hooks/useCoins'
import { Web3Context } from './_app'
import Footer from '../components/Footer'

const BackgroundAnimation = dynamic(() => import('../components/BackgroundAnimation'))

export default function Index() {
    const { connect, account, balance } = useContext(Web3Context)

    return (
        <div className="overflow-scroll">
            <div className="h-4/5 relative flex items-center justify-center">
                <div className="absolute inset-0">
                    <BackgroundAnimation />
                </div>
                <div className="space-y-4 text-white z-10">
                    <p className="text-5xl">$UNDER</p>
                    <p className="text-2xl">Crypto for Good.</p>
                </div>
            </div>

            <div className="bg-win-gray border-emboss">
                <div className="p-12 py-24 mx-auto max-w-xl">
                    <p className="text-lg">
                        <span className="font-win-bold">You made it!</span> Welcome to the UNDERVERSE — the UNDERCOIN universe. UNDERCOIN is a brand-spanking crypto-currency powered by the Ethereum network with 2
                        purposes & goals: provide good to the world and create a fun, engaging, and expirimental crytogenic adventure using Blockchain technology.
                    </p>
                </div>
            </div>

            <div className="p-12 space-y-8">
                <div className="rainbow-text text-shadow text-2xl">$UNDER, the official currency of the UNDERVERSE, is cool as f#%k! for many reasons, including...</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    <div className="bg-win-gray p-4 border-emboss">
                        <p className="text-2xl font-bold">It is a real currency, much like any other crypto-currency such as Bitcoin and Ethereum</p>
                        <p>It'll be here forever.</p>
                    </div>
                    <div className="bg-win-gray p-4 border-emboss">
                        <p className="text-2xl font-bold">Everytime $UNDER is acquired from the exchange, we donate 5% if the exchange value to charity</p>
                        <p>That means that at any time nearly 10%+ of the total supply in circulation is donated for the betterment of our planet.</p>
                    </div>
                    <div className="bg-win-gray p-4 border-emboss">
                        <p className="text-2xl font-bold">$UNDER is burnable</p>
                        <p>That means that at any time nearly 10%+ of the total supply in circulation is donated for the betterment of our planet.</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white bg-gray p-6 border-emboss space-y-2">
                        <p className="text-2xl font-bold">The $UNDER game is coming</p>
                        <p>Raise your personalized animorph NFT using in-game tokens backed by your $UNDER. Always free-to-play.</p>
                        <div>
                            <Button>Get notified</Button>
                        </div>
                    </div>
                    <div className="bg-win-gray p-4 border-emboss">
                        <p className="text-2xl font-bold">$UNDER is burnable</p>
                        <p>That means that at any time nearly 10%+ of the total supply in circulation is donated for the betterment of our planet.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
