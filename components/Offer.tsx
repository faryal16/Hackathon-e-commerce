'use client';

import Image from 'next/image';

export default function StaticOffers() {
    return (
        <div className="wrapper px-4 py-8">
             <h1 className="text-3xl md:text-4xl justify-center flex lg:text-5xl mb-20 mt-20 text-[#0D0E43] font-semibold">
             What Shopex Offer!
      </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Offer Card */}
                <div className="flex w-full max-w-[270px] flex-col justify-center text-center space-y-4 items-center p-6 border border-gray-200 rounded-lg shadow-lg mx-auto">
                    <div className="relative mb-4">
                        <Image src="/offer/1.png" width={65} height={65} alt="Special Offer 1" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0D0E43]">
                        24/7 Support
                    </h3>
                    <p className="text-sm sm:text-base lg:text-[16px] text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>

                {/* Repeatable Cards */}
                <div className="flex w-full max-w-[270px] flex-col justify-center text-center space-y-4 items-center p-6 border border-gray-200 rounded-lg shadow-lg mx-auto">
                    <div className="relative mb-4">
                        <Image src="/offer/2.png" width={65} height={65} alt="Special Offer 2" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0D0E43]">
                        Free Delivery
                    </h3>
                    <p className="text-sm sm:text-base lg:text-[16px] text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>

                <div className="flex w-full max-w-[270px] flex-col justify-center text-center space-y-4 items-center p-6 border border-gray-200 rounded-lg shadow-lg mx-auto">
                    <div className="relative mb-4">
                        <Image src="/offer/3.png" width={65} height={65} alt="Special Offer 3" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0D0E43]">
                        Secure Payment
                    </h3>
                    <p className="text-sm sm:text-base lg:text-[16px] text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>

                <div className="flex w-full max-w-[270px] flex-col justify-center text-center space-y-4 items-center p-6 border border-gray-200 rounded-lg shadow-lg mx-auto">
                    <div className="relative mb-4">
                        <Image src="/offer/4.png" width={65} height={65} alt="Special Offer 4" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0D0E43]">
                        Best Quality
                    </h3>
                    <p className="text-sm sm:text-base lg:text-[16px] text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                    </p>
                </div>
            </div>
        </div>
    );
}
