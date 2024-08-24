import Image from "next/image";

export default function CardOne() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center relative">
      <div className="h-[16.5rem] w-[16.5rem] bg-gray-300 sm:absolute right-72 md:right-32 rounded-2xl overflow-hidden">
        <Image
          src={"/dr-agile-methew.jpg"}
          alt="director"
          height={500}
          width={500}
          className="object-cover h-full"
        />
      </div>
      <div className="sm:h-[19rem] bg-white sm:w-1/2 md:w-2/3 sm:pr-48 p-5 sm:rounded-2xl flex flex-col justify-between shadow-lg">
        <div>
          <h3 className="text-2xl font-semibold">Exploring the skies</h3>
          <h5 className="text-slate-500">THE TRAINING AND PLACEMENT CELL</h5>
          <hr className="w-2/3 border-primary" />

          <p className="mt-3">
          Dear Esteemed Recruiters, Welcome to CIT Kokrajhar, your premier destination for top-tier talent in engineering and technology. Located in the prestigious Bodoland Terrotorial (BTR) of India, we have established a solid reputation in both Assam and the North eastern region (NER). Our accomplished alumni are living proof of our tradition of excellence, excelling across diverse domains from engineering to research and development.


Since 2006, CIT Kokrajhar has been dedicated to producing diploma holders graduates and post graduates who possess not only strong theoretical knowledge but also practical skills. Our students’ unwavering commitment to innovation, problem solving, and adaptability sets them apart. As the training and placement officer, my team and I are committed to bridging the academia industry gap. We ensure our students are industry ready through rigorous training, workshops and internships, fostering holistic development.


Our students excel not only academically but also in co-curricular and extracurricular activities, developing leadership teamwork and communication skills essential for a thriving career. Partnering with us connects you to some of the finest technical minds and contributes to shaping the future of engineering and technology landscape.


Thank you for considering CIT Kokrajhar as your recruitment destination. We eagerly anticipate a mutually beneficial partnership, confident that our students will elevate your organization’s growth and success. For inquires or recruitment activities, please contact our Placement Cell.


Welcome to CIT Kokrajhar, where talent meets opportunity!

          </p>
        </div>
        <div className="">
        </div>
      </div>
    </div>
  );
}
