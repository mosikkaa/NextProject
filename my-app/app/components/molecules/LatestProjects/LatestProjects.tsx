'use client'
import { AnimatePresence, motion } from "motion/react"
import Button from '../../atoms/Button/Button'
import ProjectCard from '../../atoms/ProjectCard/ProjectCard'
import Solutions from '../../atoms/Solutions/Solutions'
import architecture from '../../../../public/architecture.jpg'
import architecture2 from '../../../../public/architecture2.jpg'
import businessConsulting from '../../../../public/businessConsulting.jpg'
import businessConsulting2 from '../../../../public/businessConsulting2.jpg'
import hikingGears from '../../../../public/hikingGears.jpg'
import outdoor from '../../../../public/outdoor.jpg'
import hikingGears2 from '../../../../public/hikingGears2.jpg'
import outdoor2 from '../../../../public/outdoor2.jpg'
import { useState } from 'react'

const LatestProjects = () => {
    const [showMore, setShowMore] = useState(false);

    const extraProjects = [
        { img: architecture2, num: "05", title: 'MAQUILADORA ARCHITECT', description: 'When art meet technology and nature, Maquiladora studio revamp their online presence.', type: 'WEB DESIGN', section: 'ARCHITECTURE' },
        { img: businessConsulting2, num: "06", title: 'CODEX CONSULTING', description: 'Codex brings new perspective in business consulting paradigm with their new identity.', type: 'BRAND IDENTITY', section: 'BUSINESS' },
        { img: hikingGears2, num: "07", title: 'RAUNG PACK', description: 'Our collaborations with latest outdoors gear for their website.', type: 'WEB DESIGN / WEB DEVELOPMENT', section: 'HIKING GEARS' },
        { img: outdoor2, num: "08", title: 'OMBAX SURFBOARDS', description: 'Ombax new logo redefined.', type: 'BRAND IDENTITY', section: 'OUTDOOR' }
    ];

    return (
        <div className='select-none bg-black flex flex-col items-start lg:items-center pl-6 lg:pl-0 justify-center gap-20 w-full'>
            <div className='h-153.25 lg:h-192 lg:w-285 flex flex-col justify-center gap-12'>
                <Solutions />
                <Button buttonText="READ MORE" />
            </div>

            <div className='w-full lg:pl-0 lg:w-285'>
                <p className='mb-30.25 tracking-wider [text-shadow:-1px_-1px_0_#666666,1px_-1px_0_#666666,-1px_1px_0_#666666,1px_1px_0_#666666,0_-1px_0_#666666,0_1px_0_#666666,-1px_0_0_#666666,1px_0_0_#666666] leading-[100%] w-97.5 lg:w-130 font-bold text-[56px] lg:text-[64px]'>LATEST <span className='text-shadow-none line-through decoration-3 text-[#E5E548] [-webkit-text-stroke:0px]'><span className='text-black'>sss</span>PROJECTS</span></p>

                <div className='mb-6 lg:mb-0 flex lg:flex-wrap lg:justify-between gap-6 overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-track]:border-y [&::-webkit-scrollbar-track]:bg-clip-padding [&::-webkit-scrollbar-thumb]:bg-white'>
                    <ProjectCard
                        img={architecture}
                        num={"01"}
                        title='MAQUILADORA ARCHITECT'
                        description='When art meet technology and nature, Maquiladora studio revamp their online presence.'
                        type='WEB DESIGN / WEB DEVELOPMENT'
                        section='ARCHITECTURE'
                    />
                    <ProjectCard
                        img={businessConsulting}
                        num={"02"}
                        title='CODEX CONSULTING'
                        description='Codex brings new perspective in business consulting paradigm with their new identity.'
                        type='BRAND IDENTITY'
                        section='BUSINESS CONSULTING'
                    />
                    <ProjectCard
                        img={hikingGears}
                        num={"03"}
                        title='RAUNG PACK'
                        description='Our collaborations with latest outdoors gear for their website.'
                        type='WEB DESIGN / WEB DEVELOPMENT'
                        section='HIKING GEARS'
                    />
                    <ProjectCard
                        img={outdoor}
                        num={"04"}
                        title='OMBAX SURFBOARDS'
                        description='Ombax new logo redefined.'
                        type='BRAND IDENTITY'
                        section='OUTDOOR'
                    />

                    <div className="flex gap-6 lg:hidden">
                        {extraProjects.map((p, i) => (
                            <ProjectCard key={i} {...p} />
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <AnimatePresence>
                            {showMore && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex flex-wrap justify-between gap-6 w-full overflow-hidden"
                                >
                                    {extraProjects.map((p, i) => (
                                        <ProjectCard key={i} {...p} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className='hidden lg:block mb-29 w-full'>
                        <Button buttonText={showMore ? 'SHOW LESS' : 'MORE WORKS'} onClick={() => setShowMore(prev => !prev)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects