import styles from '@/styles/Projects.module.scss'
import { motion, useAnimation} from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image'
import { AiOutlineGithub } from "react-icons/ai";


interface IIntroProps {
    planet01Ref: any;
    planet02Ref: any;
    planet03Ref: any;
    planet04Ref: any;
    inView3: any;
    inView4: any;
    inView5: any;
    inView6: any;
}

export default function Projects({ 
    planet01Ref, 
    planet02Ref, 
    planet03Ref, 
    planet04Ref,
    inView3,
    inView4,
    inView5,
    inView6,
}: IIntroProps) {
    const controlPlanet01 = useAnimation();
    const controlPlanet02 = useAnimation();
    const controlPlanet03 = useAnimation();
    const controlPlanet04 = useAnimation();

    const KanbanVideoId = '1-B1lVZsguA';
    const SocialMediaId = 'pNZh3jZ-E-A';
    const FreelancerVideoId = 'BNtYKKjbSIY';

    useEffect(() => {
        if (inView3) {
            controlPlanet01.start({ opacity: 1, y: 100 });
        }
        if (inView4) {
            controlPlanet02.start({ opacity: 1, x: 400 });
        }
        if (inView5) {
            controlPlanet03.start({ opacity: 1, y: 300 });
        }
        if (inView6) {
            controlPlanet04.start({ opacity: 1, x: 0 }); 
        }
    }, [controlPlanet01, controlPlanet02, controlPlanet03, controlPlanet04, inView3, inView4, inView5, inView6]);

    const openUrl = (url: any) => {
        window.open(url, '_blank');
    };
    

    return (
        <>
            <section id="projects" className={styles.projects}>
                <h1>Side Projects</h1>
                <motion.div ref={planet01Ref}>
                    <motion.img
                        src="/planet_01.png" 
                        alt="planet_01"
                        className={styles.planet_01}
                        initial={{ opacity: 0, y: -100 }}
                        animate={controlPlanet01}
                        transition={{ duration: 1, delay: 2 }}
                    />
                </motion.div>
                <div className={styles.planet_box}>
                    <motion.p
                        className={styles.turn_space_exploration}
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, delay: 2 }}
                        >
                            Exploring my Universe <br/> One Project at a time
                    </motion.p>
                </div>

                <motion.div
                    className={styles.project_01}
                >
                    <div className={styles.header}>
                        <h3>Freelancer Directory</h3>
                        <span>Technologies used: </span>
                        <h5>React, Typescript, MongoDB, NestJs, Tailwind, Docker</h5>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <ul>
                                <li>Browse and search freelancers by service type and location</li>
                                <li>Give a review for freelancers with a comment and rating star</li>
                                <li>View freelancers profiles with their bio, ratings, and reviews</li>
                                <li>Register and login as a freelancer or regular user</li>
                                <li>Edit profile and manage offered services</li>
                            </ul>
                        </div>
                        <div onClick={() => openUrl('https://github.com/Rennatts/freelancer-directory')}
                        className={styles.github_icon_box}>
                            <AiOutlineGithub size="1x"></AiOutlineGithub>
                            <p>Click here to check out the project on GitHub</p>
                        </div>
                        <div className={styles.design}>
                            <h5 className={styles.title}>Responsive Design</h5>
                            <Image 
                                src="/computer_freelancer_.png" 
                                alt="computer freelancer"
                                width={800}  
                                height={500} 
                                className={styles.project_image}
                            />
                            <Image 
                                src="/mobile_app_freelancer.png" 
                                alt="mobile freelancer"
                                width={800}  
                                height={500} 
                                className={styles.project_image}
                            />
                        </div>
                        <div className={styles.video_container}>
                            <h5 className={styles.title}>Check out the Video!!</h5>
                            <iframe
                                className={styles.video}
                                src={`https://www.youtube.com/embed/${FreelancerVideoId}`}
                                title="freelancer directory project using react"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ cursor: "pointer" }} 
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={planet02Ref}>
                    <motion.img
                        src="/planet_04.png" 
                        alt="planet_02"
                        className={styles.planet_02}
                        initial={{ opacity: 0, x: -400 }}
                        animate={controlPlanet02}
                        transition={{ duration: 3 }}
                    />
                </motion.div>

                <motion.div
                    className={styles.project_02}
                >
                    <div className={styles.header}>
                        <h3>Social Media</h3>
                        <span>Technologies used: </span>
                        <h5>React, Javascript, Redux, MongoDb, AWS, Node, Express, css</h5>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <ul>
                                <li>Authentication to create profile, login, logout</li>
                                <li>Create & Edit profile</li>
                                <li>Create post with multiple images</li>
                                <li>Follow and Unfollow users</li>
                                <li>Like & Unlike posts</li>
                                <li>Comment post & delete comment</li>
                                <li>Ranking with most liked posts, most commented posts</li>
                                <li>Feed with the post of following users</li>
                                <li>Search posts</li>
                            </ul>
                        </div>
                        <div onClick={() => openUrl('https://github.com/Rennatts/social-media-web-platform')}
                        className={styles.github_icon_box}>
                            <AiOutlineGithub size="1x"></AiOutlineGithub>
                            <p>Click here to check out the project on GitHub</p>
                        </div>
                        <div className={styles.design}>
                            <Image 
                                src="/social_media_computer.png" 
                                alt="computer social media"
                                width={1000}  
                                height={800} 
                            />
                            <Image 
                                src="/social_media_computer_login.png" 
                                alt="social media login"
                                width={1000}  
                                height={800} 
                            />
                        </div>
                        <div className={styles.video_container}>
                            <h5 className={styles.title}>Check out the Video!!</h5>
                            <iframe
                                className={styles.video}
                                src={`https://www.youtube.com/embed/${SocialMediaId}`}
                                title="Social media project using react"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ cursor: "pointer" }} 
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={planet03Ref} whileHover={{ scale: 1 }}>
                    <motion.img
                        src="/planet_03.png" 
                        alt="planet_03"
                        className={styles.planet_03}
                        initial={{ opacity: 0, y: -300 }}
                        animate={controlPlanet03}
                        transition={{ duration: 2.2 }}
                    />
                </motion.div>

                <motion.div
                    className={styles.project_03}
                >
                    <div className={styles.header}>
                        <h3>Kanban</h3>
                        <span>Technologies used: </span>
                        <h5>React, Typescript, Chakra UI</h5>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.tech}>
                            <ul>
                                <li>Create and delete tasks</li>
                                <li>Easily move task with drag and drop functionality</li>
                                <li>Save data on localstorage, no need of database</li>
                            </ul>
                        </div>
                        <div onClick={() => openUrl('https://github.com/Rennatts/kanban')}
                        className={styles.github_icon_box}>
                            <AiOutlineGithub size="1x"></AiOutlineGithub>
                            <p>Click here to check out the project on GitHub</p>
                        </div>
                        <div className={styles.design}>
                            <h5 className={styles.title}>Responsive Design</h5>
                            <Image 
                                src="/kanban_computer.png" 
                                alt="computer kanban"
                                width={800}  
                                height={500} 
                            />
                            <Image 
                                src="/mobile_kanban.png" 
                                alt="mobile kanban"
                                width={800}  
                                height={500} 
                            />
                        </div>
                        <div className={styles.video_container}>
                            <h5 className={styles.title}>Check out the Video!!</h5>
                            <iframe
                                className={styles.video}
                                src={`https://www.youtube.com/embed/${KanbanVideoId}`}
                                title="Kanban project using react"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ cursor: "pointer" }} 
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                <motion.div ref={planet04Ref}>
                    <motion.img
                        src="/planet_02.png" 
                        alt="planet_04"
                        className={styles.planet_04}
                        initial={{ opacity: 0, x: 200 }}
                        animate={controlPlanet04}
                        transition={{ duration: 2 }}
                    />
                </motion.div>
            </section>
        </>
    )
}
