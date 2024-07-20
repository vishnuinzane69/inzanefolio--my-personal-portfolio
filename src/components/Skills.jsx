import './Skills.css'

function Skills(props) {
    return (
        <div 
            className="skills flex flex-col items-center justify-center w-[100%] h-full z-40 mt-0 mb-8 md:m-0 overflow-auto"
            id=""
        >
        <br />
        <br />
           <p className="font-extrabold text-xl"><span className={`${props.theme ? 'text-blue' : 'text-green'}`}>SKILLS</span></p>
           <br />
           <div className="flex flex-row overflow-auto flex-wrap gap-4 p-4 items-start justify-center">
                <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                    <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                        <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Frontend</span>
                        Development
                    </span>
                    <br />
                    <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/html.png" alt="" />
                                <p>HTML</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/css.png" alt="" />
                                <p>CSS</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/bo.png" alt="" />
                                <p>BootStrap</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-9" src="skills/tailwind.png" alt="" />
                                <p>Tailwind Css</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-9" src="skills/js.png" alt="" />
                                <p>JavaScript</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/react.png" alt="" />
                                <p>React Js</p>
                                <p className="ml-auto">90%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[90%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                       
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/vite..webp" alt="" />
                                <p>Vite</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                    </span>
                </div>
                <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                    <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                        <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Backend</span>
                        Development
                    </span>
                    <br />
                    <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-15 h-10" src="skills/python.png" alt="" />
                                <p>Python</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-14 h-10" src="skills/django.png" alt="" />
                                <p>Python Django</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/postma.png" alt="" />
                                <p>Postman API</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                          </span>
                </div>
                <div className="flex flex-col gap-4">
                    <div className={`${props.theme ? 'bg-light' : 'bg-dark'} shadow-md shadow-[black] p-4 rounded-xl w-80 h-auto`}>
                        <span className={`flex flex-row gap-2 items-end font-bold text-xl`}> 
                            <span className={`${props.theme ? 'text-blue' : 'text-green'} font-bold text-2xl`}>Other</span>
                            Technologies
                        </span>
                        <br />
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/figma.png" alt="" />
                                <p>Figma</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/mysql.png" alt="" />
                                <p>MySQL</p>
                                <p className="ml-auto">70%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[70%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="font-bold flex flex-col items-center justify-evenly gap-2 w-full">
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start gap-2">
                                    <img className="w-10 h-10" src="skills/aws.png" alt="" />
                                    <p>AWS</p>
                                    <p className="ml-auto">60%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[60%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                            </span>
                            <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                                <span className="w-full flex flex-row items-center justify-start gap-2">
                                    <img className="w-10 h-10" src="skills/dock.png" alt="" />
                                    <p>Docker</p>
                                    <p className="ml-auto">60%</p>
                                </span>
                                <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                    <div className={`w-[60%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                    </div>    
                                </div>
                                </span>
                                <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/sublime.png" alt="" />
                                <p>Sublime</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                                <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/gitf.png" alt="" />
                                <p>Git</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                        <span className="flex flex-col items-start justify-start gap-2 w-full mt-2">
                            <span className="w-full flex flex-row items-center justify-start gap-2">
                                <img className="w-10 h-10" src="skills/visual.png" alt="" />
                                <p>Vs Code</p>
                                <p className="ml-auto">80%</p>
                            </span>
                            <div className={`w-full h-4 ${props.theme ? 'bg-dark' : 'bg-light' } rounded-full relative bg-opacity-20`}>
                                <div className={`w-[80%] h-4 ${props.theme ? 'bg-blue' : 'bg-green'} rounded-full absolute left-0 percentbar`}>
                                </div>    
                            </div>
                        </span>
                            
                        </span>
                    </div>
                  
                </div>
           </div>
        </div>
    )
}

export default Skills