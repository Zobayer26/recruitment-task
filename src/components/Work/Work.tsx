import Image from 'next/image';

const roles = [
    {
        title: 'Project Managers',
        description: 'Oversee construction projects, ensuring timelines, budgets, and quality meet objectives with effective team coordination.',
        imageUrl: '/Image 2.svg',
    },
    {
        title: 'Site Supervisors',
        description: 'Site supervisors oversee daily operations, ensuring safety, efficiency, and compliance on construction sites.',
        imageUrl: 'Image 3.svg',
    },
    {
        title: 'Engineers (Civil, electrical)',
        description: 'Construction engineers manage projects, ensuring designs are implemented effectively, meeting safety and quality standards.',
        imageUrl: 'Image 4.svg',
    },
    {
        title: 'Architects',
        description: 'Architects design buildings and structures, balancing functionality, aesthetics, and client requirements with technical expertise.',
        imageUrl: 'Image 5.svg',
    },
    {
        title: 'Skilled Tradespeople',
        description: 'Construction skilled tradespeople specialize in various crafts, ensuring quality workmanship in building and renovation projects.',
        imageUrl: 'Image 6.svg',
    },
    {
        title: 'General Laborers',
        description: 'General laborers support construction projects by performing tasks such as loading, unloading, and site cleaning.',
        imageUrl: 'Image 7.svg',
    },
];

const Work = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 ">
                <div className="text-center mb-12">
                    <h2 className="text-6xl font-bold">Roles we Fill</h2>
                    <p className="mt-[30px] text-[18px]  text-center max-w-[850px] mx-auto ]">
                        &quot;We fill roles in construction, matching skilled professionals like engineers,
                        supervisors, and laborers to projects requiring expertise and efficiency.&quot;
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
                    {roles.map((role, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="relative w-full h-48">
                                <Image
                                    src={role.imageUrl}
                                    alt={role.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-2xl font-semibold text-center">{role.title}</h3>
                                <p className="mt-4 text-center text-[16px]">{role.description}</p>
                                <div className=' w-full flex items-center'>
                                    <button className="mt-6 mx-auto flex items-center gap-2 text-[#f90945] font-[500] hover:text-red-800">
                                        <span>Contact Us</span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.90101 11.0794L5.86718 11.0823L5.79835 11.0823L5.76451 11.0794L5.72951 11.0741L5.69918 11.0683L5.63618 11.0496L5.5971 11.0339L5.5201 10.993L5.4676 10.9551L5.42035 10.9125L5.37193 10.8577L5.34043 10.8128L5.30893 10.7568L5.29901 10.7358L5.28326 10.6967L5.2646 10.6337L5.25876 10.6028L5.25293 10.5678L5.2506 10.5345L5.24943 10.5001L5.24943 3.50011C5.24943 3.00311 5.8246 2.74352 6.19618 3.04336L6.24518 3.08769L9.74518 6.58769C9.84562 6.68814 9.90595 6.82178 9.91486 6.96354C9.92378 7.10531 9.88066 7.24546 9.7936 7.35769L9.74518 7.41252L6.24518 10.9125L6.19035 10.9609L6.14543 10.9924L6.08943 11.0239L6.06843 11.0339L6.02935 11.0496L5.96635 11.0683L5.93543 11.0741L5.90043 11.0799L5.90101 11.0794Z" fill="#F90945" />
                                        </svg>

                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};


export default Work