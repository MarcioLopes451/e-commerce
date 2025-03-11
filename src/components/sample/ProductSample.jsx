import SampleCard from "../sample_card/SampleCard"

function ProducSample({content, products}) {
    return (
        <div className="flex flex-col justify-center items-center p-2 mt-12 gap-7 sm:mt-0 sm:gap-24 sm:p-24">
            <div className="font-inter text-4xl font-black sm:text-6xl">{content}</div>

            <div className="flex justify-evenly w-full sm:justify-center gap-8">
                {products && <SampleCard price={products[0].price} productImg={products[0].productImg} discount={products[0].discount} discountPrice={products[0].discountPrice} productName={products[0].productName} rating={products[0].rating}/>}
                {products && <SampleCard price={products[1].price} productImg={products[1].productImg} discount={products[1].discount} discountPrice={products[1].discountPrice} productName={products[1].productName} rating={products[1].rating}/>}
                <div className="hidden sm:flex sm:gap-8">
                    {products && <SampleCard price={products[2].price} productImg={products[2].productImg} discount={products[2].discount} discountPrice={products[2].discountPrice} productName={products[2].productName} rating={products[2].rating}/>}
                    {products && <SampleCard price={products[3].price} productImg={products[3].productImg} discount={products[3].discount} discountPrice={products[3].discountPrice} productName={products[3].productName} rating={products[3].rating}/>}
                </div>
            </div>

            <button className="border-[1px] border-gray-300 w-full h-12 font-semibold rounded-full hover:cursor-pointer sm:w-2/12">View All</button>
        </div>
  )
}

export default ProducSample