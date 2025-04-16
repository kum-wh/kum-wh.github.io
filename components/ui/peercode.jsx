import Image from "next/image";
import SpotlightCard from './card.jsx';
import PixelTransition from './pixel.jsx';
import Folder from './folder.jsx';
import ShinyText from "../texts/shinyText.jsx";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"

export default function PeerCode({title, category, github}) {

    const items = [
        // { content: <Image src={'/miniurl/main.png'} fill={true} alt='main'/> },
        // { content: <Image src={'/miniurl/user.png'} fill={true} alt='user'/> },
        // { content: <Image src={'/miniurl/shorten.png'} fill={true} alt='shorten'/> },
        // { content: <Image src={'/miniurl/url.png'} fill={true} alt='url'/> },
    ];

    return (
        <div style={{}}>
            <SpotlightCard className="" spotlightColor="rgba(0, 229, 255, 0.2)">
                <PixelTransition
                    firstContent={
                        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111"}}>
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>{title}</p>
                        </div>
                       }
                    secondContent={
                        <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", backgroundColor: "#111"}}>
                            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff", textAlign:'center'}}> {category}</p>
                        </div>
                    }
                gridSize={12}
                pixelColor='#ffffff'
                animationStepDuration={0.4}
                className=""
                />
                <div style={{display:'flex'}}>
                    <div style={{paddingTop:'17px'}}>
                        <a href={github}><Image src={'/github.png'} width={40} height={40} alt='github icon'/></a>
                    </div>

                    <Dialog>
                        <DialogTrigger><Folder size={0.4} color="#00d8ff" className="" /></DialogTrigger>
                        <div  style={{display:'absolute', zIndex:2}}>
                        <DialogContent className={"popup"}>
                            <div style={{display:'flex', justifyContent:'center', backgroundColor:'white', overflow:'hidden'}} className="rounded-md border p-4">
                                <div>
                                    <DialogHeader>
                                        <DialogTitle>
                                            <h1 style={{fontSize:'50px'}}> PeerCode </h1>
                                        </DialogTitle>
                                        <DialogDescription>
                                            <p style={{fontSize:'17px'}}>A Collaborative Online Assessment Preparation Platform.</p>
                                        </DialogDescription>
                                    </DialogHeader>

                                    <ScrollArea style={{height:'85%'}} className="rounded-md border p-4">
                                    <div style={{display:'flex', flexWrap:'wrap-reverse', marginTop:'10px'}}>
                                        <div style={{width:'25vw', minWidth:'180px'}}>
                                            Link:
                                            {/* <a href="https://swifter.pythonanywhere.com" style={{color:'blue'}}> https://swifter.pythonanywhere.com</a> */}

                                            <br/><br/>Function:<br/>

                                            - Create and View Coding Questions<br/>
                                            - Select Question Difficulty<br/>
                                            - Match with other Users to solve a Question<br/>
                                            - View Question Attempts History<br/>
                                            - Chat with the other User<br/><br/>

                                            Frontend: NextJs, TailWind CSS<br/>
                                            Backend: NodeJS<br/>
                                            Database: MongoDB<br/>
                                            Deployment: Docker, Vercel<br/><br/>
                                            View Readme On Github for more Information and System Design
                                        </div>
                                        <div style={{flexGrow:1, marginLeft:'20px',backgroundColor:'#121212', borderRadius:'20px', overflow:'hidden', height:'400px'}} className='projectscroll'>
                                            {/* <InfiniteScroll
                                                items={items}
                                                isTilted={false}
                                                tiltDirection='left'
                                                autoplay={true}
                                                autoplaySpeed={0.4}
                                                autoplayDirection="up"
                                                pauseOnHover={false}
                                                negativeMargin="-2em"
                                            /> */}
                                        </div>
                                    </div>
                                    </ScrollArea>
                                </div>
                            </div>
                        </DialogContent>
                        </div>
                    </Dialog>
                    
                    <div style={{paddingTop:'22px', fontSize:'20px'}}>
                        <ShinyText text="&#x2190; Click to Open" disabled={false} speed={3} className='' />
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
}