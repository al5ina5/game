import Ticker from 'react-ticker'

export default function Header() {
    return (
        <div className="bg-win-gray py-1 border-emboss whitespace-nowrap overflow-hidden flex-shrink-0">
            <Ticker>
                {({ index }) => (
                    <p className="block mr-48 text-xs text-center">
                        <span className="font-bold">BREAKING NEWS! </span>
                        Smart contracts, liquidty, swap, and more are officially live!
                    </p>
                )}
            </Ticker>
        </div>
    )
}
