import React from "react";

let Footer = () => {
    return <>
            <footer className="bg-[#BCDDFE] max-w-full h-[80.7vh] flex flex-col gap-y-[8vh] mt-40">
                
                <section className="w-[130vh] h-[22.2vh] mt-[11.1vh] self-center flex flex-row justify-between mr-[27.8vh]">
                    
                    <div className="w-[33.3vh] h-full">
                        <ul>
                            <li><img src="../src/assets/Group 491.png" alt="" /></li>
                            <li className="font-Poppins font-[400] mt-4">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Since the 1500s, when an unknown printer.
                            </li>
                        </ul>
                    </div>
                    
                    <div className="w-[31.1vh] h-full">
                        <ul>
                            <li className="font-Poppins font-bold text-[2.8vh]">Follow Us</li>
                            <li className="mt-4">
                                Since the 1500s, when an unknown printer took a gallery of type and scrambled
                            </li>
                        </ul>
                        <div className="flex flex-row w-[8.9vh] h-[2.2vh] justify-between mt-3">
                            <img src="../src/assets/facebook.png" alt="Facebook" className=" cursor-pointer" />
                            <img src="../src/assets/twitter (1).png" alt="Twitter" className=" cursor-pointer"/>
                        </div>
                    </div>
                    
                    <div className="w-[17.8vh] h-full">
                        <ul>
                            <li className="font-Poppins font-bold text-[2.8vh]">Contact Us</li>
                            <li className="font-Poppins font-[400]  mt-4">
                                E-Comm, 4578 Marmora Road,<br />Glasgow D04 89Gr
                            </li>
                        </ul>
                    </div>
                </section>
                
                <section className="w-[150vh] h-[22.2vh] self-center flex flex-row justify-between mr-[16.7vh] ml-[10vh]">
                    <div>
                        <ul>
                            <li className="font-Poppins font-[400] text-[2.2vh]">Information</li>
                            <li className="mt-4 cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Information</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-Poppins font-[400] text-[2.2vh]">Service</li>
                            <li className="mt-4 cursor-pointer">About Us</li>
                            <li  className=" cursor-pointer">Information</li>
                            <li className=" cursor-pointer">Privacy Policy</li>
                            <li className=" cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-Poppins font-[400] text-[2.2vh]">My Account</li>
                            <li className="mt-4 cursor-pointer">About Us</li>
                            <li className=" cursor-pointer">Information</li>
                            <li className=" cursor-pointer">Privacy Policy</li>
                            <li className=" cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-Poppins font-[400] text-[2.2vh]">Our Offers</li>
                            <li className="mt-4 cursor-pointer">About Us</li>
                            <li className=" cursor-pointer">Information</li>
                            <li className=" cursor-pointer">Privacy Policy</li>
                            <li className=" cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                </section>
                <section className="w-[140.3vh] h-[8.9vh] ml-[20.2vh] border-t-2 border-white flex flex-row justify-between items-center ">
                    <ul>
                        <li className="text-[#C1C8CE]">© 2018 Ecommerce theme by www.bisenbaev.com</li>
                    </ul>
                    <ul className="flex flex-row justify-evenly w-[27.8vh] items-center">
                        <li><img src="../src/assets/western-union.png" alt="Western Union" /></li>
                        <li><img src="../src/assets/Group 19.png" alt="Mastercard" /></li>
                        <li><img src="../src/assets/paypal.png" alt="Paypal" /></li>
                        <li><img src="../src/assets/Shape 327.png" alt="Visa" /></li>
                    </ul>
                </section>
            </footer>
        </>
};

export default Footer;