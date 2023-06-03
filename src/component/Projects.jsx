import works from "./ProjectData/Data"


const Projects = () => {
  return (
    <main name='projects' className="w-full mt-[100px] md:h-full"> 
    <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center p-4 h-full w-full">
        <div>
            <h1 className="font-bold text-4xl border-b-4 inline border-b-rose-900">Projects</h1>
            <p className="py-6">feel free to browse through all my projects</p>
        </div>


        {/* projects section */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full mt-[12PX] " >
          {works.map((work) => {
              const {id, title, category, img, desc, link, Demo } = work;
              return (
                <div key={id}>
                  <div  style={{backgroundImage: `url("${img}")`}} className="shadow-lg shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto projects-div"  >
                
                    <div className="opacity-0 group-hover:opacity-100">
                      <span className="text-2xl font-bold text-white tracking-wider">
                        {category} 
                      </span>
                      <div className="pt-8 text-center text-white">
                        <a  href={link} target='_blank' rel='noreferrer' >
                          <button className="py-3 px-2 rounded-lg m-2 bg-slate-700 text-white font-bold">Source Code</button>
                        </a>
                        <a href={Demo} target='_blank' rel='noreferrer'>
                          <button className="py-3 px-2 rounded-lg m-2 bg-slate-700 text-white font-bold">Live Demo</button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="mt-[10px] font-bold  text-gray-800">{title} Project</p>
                  <p className="mb-[20px]  ">{desc}</p>
                </div>
                
             
              
              )
            })} 
         </div>
    </div>
        
    </main>
  )
}

export default Projects


// {works.map((work) => {
//               const {id, title, category, img, desc } = work;
//               return (
//                 <div key={id}>
//                   <p>{title}</p>
//                   <img className="w-[80px] h-[80px]" src={img} alt={title} />
//                   <p>{category}</p>
//                   <p>{desc}</p>
//                 </div>
//               )
//             })} 