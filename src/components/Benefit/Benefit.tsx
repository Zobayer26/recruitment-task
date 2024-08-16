import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-[60px] font-[600] mb-6">Benefits of Hiring Through Us</h2>
      <p className="text-lg  mb-12 max-w-[850px] mx-auto">
        &quot; Benefit from our efficient hiring process, matching qualified candidates to your construction projects, ensuring quality and reliability.&quot;
      </p>
      <div className="container mx-auto flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="bg-white border-b-[8px] border-[#f90945] shadow-md rounded-lg  max-w-[350px] text-center">
          <div className=' mx-auto border-2 border-dotted border-[#f90945] w-[120px] h-[120px] rounded-full 
          flex justify-center items-center mb-4'>
            <div className="flex justify-center items-center bg-[#f90945] w-[90px] h-[90px] rounded-full">
              <Image
                src="/Icon 4.svg"
                alt="Skilled Labor Icon"
                width={48}
                height={48}
              />
            </div>
          </div>
          <h3 className="text-2xl font-[500] mb-2">Access to Skilled Labor</h3>
          <p className="my-4">
            We provide a pool of highly trained professionals ready to contribute to your projects globally.
          </p>
        </div>
        <div className="bg-white border-b-[8px] border-[#f90945] shadow-md rounded-lg  max-w-[350px] text-center">
          <div className=' mx-auto border-2 border-dotted border-[#f90945] w-[120px] h-[120px] rounded-full flex justify-center items-center mb-4'>
            <div className="flex justify-center items-center bg-[#f90945] w-[90px] h-[90px] rounded-full">
              <Image
                src="/Icon 5.svg"
                alt="Skilled Labor Icon"
                width={48}
                height={48}
              />
            </div>
          </div>
          <h3 className="text-2xl font-[500] mb-2">Cost-Effective Solutions</h3>
          <p className="my-4">
            Our services are designed to save you time and reduce hiring costs by taking care of the entire recruitment process.
          </p>
        </div>
        <div className="bg-white border-b-[8px] border-[#f90945] shadow-md rounded-lg  max-w-[350px] text-center">
          <div className=' mx-auto border-2 border-dotted border-[#f90945] w-[120px] h-[120px] rounded-full flex justify-center items-center mb-4'>
            <div className="flex justify-center items-center bg-[#f90945] w-[90px] h-[90px] rounded-full">
              <Image
                src="/Icon 6.svg"
                alt="Skilled Labor Icon"
                width={48}
                height={48}
              />
            </div>
          </div>
          <h3 className=" text-2xl font-[500] mb-2">Compliance & Documentation</h3>
          <p className=" my-4">
            We handle all necessary paperwork, ensuring compliance with international labor laws & regulations.
          </p>
        </div>
        <div className="bg-white border-b-[8px] border-[#f90945]  shadow-md rounded-lg text-center max-w-[350px] ">
          <div className=' mx-auto border-2 border-dotted border-[#f90945] w-[120px] h-[120px] rounded-full flex justify-center items-center mb-4'>
            <div className="flex justify-center items-center bg-[#f90945] w-[90px] h-[90px] rounded-full">
              <Image
                src="/Icon 7.svg"
                alt="Skilled Labor Icon"
                width={48}
                height={48}
              />
            </div>
          </div>
          <h3 className="text-2xl font-[500] mb-2">Tailored Recruitment</h3>
          <p className="my-4">
            We customize our recruitment process to match the specific requirements of your projects, ensuring a perfect fit for every role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
