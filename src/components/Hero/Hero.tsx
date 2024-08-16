
import Image from "next/image"
const Hero = () => {
  return (
    <div className="container mx-auto mt-[50px] flex flex-col lg:flex-row lg:space-x-[80px] items-center justify-between bg-white py-8 ">
      <div className="lg:w-1/2">
        <h2 className="text-3xl lg:text-5xl font-[600] text-black">
          Your Partner in international Construction Recruitment
        </h2>
        <p className="mt-4 text-lg text-black text-justify">
          &quot;Hire & Fire Job&apos;s platform for the construction industry connects companies with
          skilled professionals globally. We streamline recruitment processes, ensuring precise matches
          for project requirements through our extensive network and industry-specific expertise.
          Our platform offers tailored solutions for construction companies, facilitating efficient
          hiring and workforce management. Partner with us to access a pool of qualified talent and
          optimize your construction projects with ease.&quot;
        </p>
        <button className="mt-6 px-6 py-3 bg-[#004785] text-white rounded text-lg hover:scale-105 duration-300">
          Contact Us
        </button>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <Image
          src="/Image 1.svg"
          alt="Team"
          width={650}
          height={500}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}

export default Hero