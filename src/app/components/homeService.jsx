import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HomeService = () => {
    const services = [
        {
            "_id": "635a0c0b64a6d231228942ae",
            "service_id": "04",
            "title": "Engine Oil Change",
            "img": "https://i.ibb.co/T2cpBd5/888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635a0c0b64a6d231228942af",
            "service_id": "05",
            "title": "Battery Charge",
            "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b591a1dafe382a9da8c96",
            "service_id": "01",
            "title": "Full car Repair",
            "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
            "price": "200.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5afc1dafe382a9da8c98",
            "service_id": "02",
            "title": "Engine Repair",
            "img": "https://i.ibb.co/5MvmD2g/88.jpg",
            "price": "150.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5b691dafe382a9da8c99",
            "service_id": "03",
            "title": "Automatic Services",
            "img": "https://i.ibb.co/wh7t3N3/555.jpg",
            "price": "30.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        },
        {
            "_id": "635b5ba51dafe382a9da8c9a",
            "service_id": "06",
            "title": "Electrical System",
            "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
            "price": "20.00",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
            "facility": [
                {
                    "name": "Instant Car Services",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "24/7 Quality Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Easy Customer Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                },
                {
                    "name": "Quality Cost Service",
                    "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
                }
            ]
        }
    ]

    return (
        <div className="my-24">
            <div className="w-3/4 mx-auto">
                <p className="text-[#FF3811] font-semibold text-center">Service</p>
                <h2 className="font-bold text-5xl text-center my-5">Our Service Area</h2>
                <p className="w-3/4 mx-auto text-center">The majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-12">
                {
                    services.map((service, index) =>
                        <div className="border border-[#E8E8E8] p-5 rounded-xl" key={index}>
                            <div>
                                <Image className="w-full h-[250px] object-cover rounded-xl" src={service.img} alt={service.title} width={400} height={350} />
                                <h3 className="text-2xl font-semibold my-5">{service.title}</h3>
                                <div className="flex items-center justify-between text-[#FF3811]">
                                    <p className="font-medium">Price : {service.price}</p>
                                    <FaArrowRight />

                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default HomeService;