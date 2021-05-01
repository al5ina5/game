export default function Icon({ slug, src, className, onClick, quantity }) {
    return (
        <div className="inline-block">
            <img onClick={onClick} className="h-12 w-12 inline-block pixelated " src={src || '/img/food/.png'} alt={slug} />
        </div>
    )
}
