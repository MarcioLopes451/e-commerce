import Rating from "../rating/Rating"
function SampleCard({productImg, productName, discount, discountPrice, rating, price}) {
    
    const CalcDiscountedPrice = (originalPrice, discountPrice) => {
        let newPrice = originalPrice - (originalPrice * (discountPrice / 100))
        return newPrice
    } 

    const newPrice = CalcDiscountedPrice(price, discountPrice)
    
    return (
        <div className="">
            <img src={productImg} className="w-44 sm:w-80" />
            <div className="font-bold rounded-lg text-sm">
                {productName}
            </div>
            
            <Rating rate={rating} />

            <div className="font-bold text-xl flex items-center gap-2">
                <span>${price}</span>
                
                { discount && 
                <div className="flex items-center gap-2">
                    <span className="text-gray-300 line-through">${newPrice}</span>
                    <span className="text-red-400 text-xs font-medium rounded-full px-2 h-4 flex justify-center items-center bg-red-200">-{discountPrice}%</span>
                </div>}
            </div>

        </div>
    )
}

export default SampleCard