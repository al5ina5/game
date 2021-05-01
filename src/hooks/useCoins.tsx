import { useEffect, useState } from 'react'
import Web3 from 'web3'

export default function useCoins() {
    const [accounts, setAccounts] = useState()
    const connect = async () => {
        if (window.ethereum) {
            const test = await window.ethereum.send('eth_requestAccounts')
            console.log(test)
            console.log('done')
            return true
        }
        return false
    }

    const _accounts = async () => {
        if (window.ethereum) {
            return await window.web3.eth.accounts
        }
        return null
    }

    useEffect(() => {
        window.web3 = new Web3(window.ethereum)

        async function init() {
            setAccounts((await _accounts()).wallet)
        }
        init()
    }, [])

    return { connect, accounts }
}
