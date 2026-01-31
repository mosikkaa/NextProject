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
import { useState } from 'react'

const LatestProjects = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className='select-none bg-black flex flex-col items-center justify-center gap-20'>
            <div className='h-192 w-285 flex flex-col justify-center gap-12'>
                <Solutions />
                <Button buttonText="READ MORE" />
            </div>

            <div className='w-285'>
                <p className='mb-30.25 tracking-wider [text-shadow:-1px_-1px_0_#666666,1px_-1px_0_#666666,-1px_1px_0_#666666,1px_1px_0_#666666,0_-1px_0_#666666,0_1px_0_#666666,-1px_0_0_#666666,1px_0_0_#666666] leading-[100%] w-172.5 font-bold text-[64px]'>LATEST <span className='text-shadow-none line-through decoration-[##E5E548] decoration-3 text-[#E5E548] [-webkit-text-stroke:0px]'><span className='text-black'>sssss</span>PROJECTS</span></p>

                <div className='flex flex-wrap justify-between'>
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
                    <AnimatePresence>
                        {showMore && (
                            <motion.div
                                key="extra-projects"
                                initial={{ opacity: 0, y: -40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="flex flex-wrap justify-between w-full"
                            >
                                <ProjectCard
                                    img={architecture2}
                                    num={"05"}
                                    title='MAQUILADORA ARCHITECT'
                                    description='When art meet technology and nature, Maquiladora studio revamp their online presence.'
                                    type='WEB DESIGN / WEB DEVELOPMENT'
                                    section='ARCHITECTURE'
                                />
                                <ProjectCard
                                    img={businessConsulting2}
                                    num={"06"}
                                    title='CODEX CONSULTING'
                                    description='Codex brings new perspective in business consulting paradigm with their new identity.'
                                    type='BRAND IDENTITY'
                                    section='BUSINESS CONSULTING'
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className='mb-29 w-full'>
                        <Button buttonText={showMore ? 'SHOW LESS' : 'MORE WORKS'} onClick={() => setShowMore(prev => !prev)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProjects