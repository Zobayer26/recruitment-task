import Image from "next/image"

const Banner = () => {
    return (
        <div className="relative w-full h-[200px] lg:h-[300px]">
            <Image
                src="/Background image 1.svg"
                alt="Construction Background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-white text-center">
                <h1 className="text-3xl lg:text-5xl font-[500]">Construction</h1>
                <p className="mt-2 text-sm lg:text-xl flex items-center gap-3">
                    Home 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L12 12L7 7M13 17L18 12L13 7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                     Industry 
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L12 12L7 7M13 17L18 12L13 7" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                     Construction
                    
                </p>
            </div>
        </div>

    )
}

export default Banner