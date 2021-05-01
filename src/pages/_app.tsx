import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { createContext, useEffect, useState } from 'react'
import Web3 from 'web3'
import Head from 'next/head'
import { PopWrapper } from '../hooks/usePops'
import abi from '../lib/abi.json'

export const Web3Context = createContext({})

export default function App({ Component, pageProps }: AppProps) {
    const [web3, setWeb3] = useState(null)
    const [token, setToken] = useState(null)
    const [accounts, setAccounts] = useState(null)
    const [account, setAccount] = useState(null)
    const [balance, setBalance] = useState()

    const loadBlockchainData = async () => {
        const _web3 = await new Web3(Web3.givenProvider)

        const _token = new _web3.eth.Contract(abi, '0xEF949725346F052bC851B5d561bA7dce9DF861Be')

        setWeb3(_web3)
        setToken(_token)

        const _accounts = await _web3.eth.getAccounts()

        if (_accounts[0]) {
            const _balance = await _token.methods
                .balanceOf(_accounts[0])
                .call()
                .then((res) => {
                    setBalance(res)
                })

            setAccounts(_accounts)
            setAccount(_accounts[0])
        }
    }

    const connect = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        await loadBlockchainData()
    }

    useEffect(() => {
        loadBlockchainData()
    }, [])

    return (
        <>
            <Head>
                <title>$UNDER, Crypto for Good</title>
            </Head>
            <Web3Context.Provider
                value={{
                    loadBlockchainData,
                    connect,
                    web3,
                    token,
                    accounts,
                    account,
                    isAuthenticated: !!account,
                    balance
                }}
            >
                <PopWrapper>
                    <Component {...pageProps} />
                </PopWrapper>
            </Web3Context.Provider>
        </>
    )
}
