import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HomePopularProduct = async () => {
    const res = await fetch('http://localhost:3000/services.json');
    const products = await res.json();
    return (
        <div className="my-28">
            <div className="w-3/4 mx-auto">
                <p className="text-[#FF3811] font-semibold text-center">Popular Products</p>
                <h2 className="font-bold text-5xl text-center my-5">Browse Our Products</h2>
                <p className="w-3/4 mx-auto text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-5 my-20">
                {
                    products.map(product => <div className="border border-[#E8E8E8] p-5 rounded-xl" key={product.id}>
                        <div>
                            <Image className="w-full h-[250px] object-cover rounded-xl" src={product.img} alt={product.title} width={400} height={350} />
                            <h3 className="text-2xl font-semibold my-5">{product.title}</h3>
                            <div className="flex items-center justify-between text-[#FF3811]">
                                <p className="font-medium">Price : {product.price}</p>
                                <FaArrowRight />

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomePopularProduct;