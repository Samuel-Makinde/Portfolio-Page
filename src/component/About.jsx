

const About = () => {
  return (
    <div name='about' className="w-full h-[900px] text-black ">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8">
                <div className="md:text-right pb-8 pl-4">
                    <h1 className=" font-bold text-4xl inline border-b-4 border-b-rose-800 ">About</h1>
                    
                </div>
            </div>
            <div className="max-w-[1000px] w-full  grid md:grid-cols-2 gap-8 pl-4">
                <div className="md:text-right font-bold text-4xl">
                    <p >FullStack Developer
                    </p>
                </div>
                <div className="md:mr-[70px] pr-[5px] ">
                    {/* <p>
                      I am a Frontend Developer using Javascript and React.js to build frontend applications. I study Software engineering at ALX Africa which is an online course that teaches software engineering for 12 months. ALX teaches basic of Python and C language to all its students so as to have an idea about how computer programming works before one can major in either frontend or backend language. My learning with ALX has built my grit about getting the job done through numerous projects given and completed and also taught me how to interact in the developers community when i am stuck on a problem. I also learn how to collaborate with other developers in getting output through projects that involve 2 or more people on the team for the tasks. 
                    </p> */}
                    <p>
        I'm a Full Stack Developer with a strong foundation in both frontend and backend technologies. My journey into the world of software engineering began during my studies at ALX Africa, an online program that provides a comprehensive education in software engineering over a 12-month period.
        At ALX, I delved into the fundamentals of programming by learning languages like Python and C. This grounding gave me a holistic understanding of how computer programming works, setting the stage for my specialization in both frontend and backend development.
         <br />Through numerous projects and real-world challenges, I've honed my skills in JavaScript and React.js, enabling me to craft engaging and user-friendly frontend applications. On the backend, I've harnessed the power of Node.js and Express.js to build efficient, scalable APIs, while my expertise in database management is grounded in Mongoose and MongoDB. My versatility extends to implementing secure and seamless payment gateways, providing a comprehensive and secure user experience.
        I've learned to effectively contribute to group projects, leveraging the skills and insights of my peers to deliver outstanding results.
        <br />Beyond my ALX journey, I've had the privilege of building four notable projects that demonstrate my skills and passion for software development as a solo developer and team member.
         I'm ready to harness my skills to make a meaningful impact. Let's connect and explore how I can contribute to your next project.
      </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About