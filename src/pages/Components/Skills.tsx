import Image from 'next/image'
import styles from '@/styles/Skills.module.scss'
import { InView } from 'react-intersection-observer'
import { useState } from 'react';


interface IIntroProps {
    // isAstronautInvisible: boolean;
    // setIsAstronautInvisible: (inView: any)  => void;
}

export default function Skills({  }: IIntroProps) {
    
    return (
        <>
            <section id="skills" className={styles.skills}>
                <h2>Skills</h2>
                <div>
                    <div className={styles.header}>
                    <h2>Front-end</h2>
                    </div>
                    <div className={styles.icons}>
                    <div className={styles.glass_image}>
                        <Image src="/react.png" alt="react" width={100} height={100} style={{zIndex: 100}}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/react_native.png" alt="react native" width={100} height={100}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/angular.png" alt="angular" width={100} height={100}></Image>
                    </div>
                    </div>
                </div>
                <div>
                    <div className={styles.header}> 
                    <h2>Back-end</h2>
                    </div>
                    <div className={styles.icons}>
                    <div className={styles.glass_image}>
                        <Image src="/nodejs.png" alt="nodejs" width={200} height={120}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/nestjs.png" alt="nestjs" width={200} height={120}></Image>
                    </div>
                    {/* <Image src="/python.png" alt="python" width={100} height={100}></Image> */}
                    </div>
                </div>
                <div>
                    <div className={styles.header}>
                    <h2>Database</h2>
                    </div>
                    <div className={styles.icons}>
                    <div className={styles.glass_image}>
                        <Image src="/mongodb.png" alt="mongodb" width={200} height={120}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/postgresql.png" alt="postgresql" width={200} height={120}></Image>
                    </div>
                    </div>
                </div>
                <div>
                    <div className={styles.header}>
                    <h2>UI Stack</h2>
                    </div>
                    <div className={styles.icons}>
                    <div className={styles.glass_image}>
                        <Image src="/styled_component.png" alt="styles components" width={100} height={100}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/tailwind.png" alt="tailwind" width={150} height={100}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/css.png" alt="css" width={100} height={100}></Image>
                    </div>
                    </div>
                    <div className={styles.icons}>
                    <div className={styles.glass_image}>
                        <Image src="/material_ui.png" alt="material ui" width={190} height={100}></Image>
                    </div>
                    <div className={styles.glass_image}>
                        <Image src="/chakra_ui.png" alt="chakra ui" width={200} height={100}></Image>
                    </div>
                    </div>
                </div>
                {/* <InView
                    as="div"
                    onChange={(inView) => setIsAstronautInvisible(inView)}
                >
                    <Image className={styles.black_hole} src="/black_hole.png" alt="black_hole" width={500} height={300}></Image>
                </InView> */}
            </section>
        </>
    )
}
