import { Star, StarHalf } from "lucide-react"

function Rating({rate}) {
    const calcStar = (rate) => {
        let stars = []
        let remainder = rate % 1
        let num = Math.floor(rate)
        for (let i = 0; i < num; i++) {
            let star = <Star fill="#ffc633" color="white" strokeWidth={1} width={16}/>
            stars.push(star)
        }
        if (remainder !== 0) {
            let star = <StarHalf fill="#ffc633" color="white" strokeWidth={1} width={16}/>
            stars.push(star)
        }
        return stars
    }

    const stars = calcStar(rate)
    
    return (
        <div className="flex gap-2 items-center">
            <div className="flex">
                {stars.map((star) => (
                    star
                ))}
            </div>
            <span className="text-xs">{parseFloat(rate)}/<span className="text-gray-400">5</span></span>
        </div>
    )
}

export default Rating