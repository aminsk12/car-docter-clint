import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">
                    <img src={parson} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className=" absolute w-1/2 right-5 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 space-y-2 p-4'>
                    <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-6xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn hover:text-black bg-[#FF3811] ho text-white font-bold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;