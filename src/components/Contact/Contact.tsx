import Image from 'next/image';

const Contact = () => {
  return (
    <section className="flex justify-center items-center py-12">
      <div className='p-8 text-white rounded-lg shadow-lg w-full max-w-4xl flex'>
        <div className='w-1/2 relative'>
          <Image 
            src="/Background image 2.svg" alt='Background Image 2' fill objectFit='cover' />
          <div className=' absolute  top-0 p-[50px] '>
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">Say something to start a live chat</p>
            <div className="space-y-4">
              <div className="flex">
                <Image src="/Icon 8.svg" alt="Location Icon" width={24} height={24} />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Company Location</h3>
                  <p>București Sectorul 1, Strada ING. ZABLOVSCHI, Nr. 10, BIROUL 1</p>
                </div>
              </div>
              <div className="flex items-center">
                <Image src="/Icon 9.svg" alt="Phone Icon" width={24} height={24} />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Phone Number</h3>
                  <p>+(40) 7372 28622</p>
                </div>
              </div>
              <div className="flex items-center">
                <Image src="/Icon 10.svg" alt="Email Icon" width={24} height={24} />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email Address</h3>
                  <p>career@hireandfire.eu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4"> 
              <input
                type="text"
                id="first-name"
                className="mt-1 p-2 w-full border border-gray-800 rounded-md"
                placeholder="First name"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-800 rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
             
              <input
                type="tel"
                id="phone-number"
                className="mt-1 p-2 w-full border border-gray-800 rounded-md"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                className="mt-1 p-2 w-full border border-gray-800 rounded-md"
                rows={4}
                placeholder="Write Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#004785] text-white p-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
//#f90945