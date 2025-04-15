import Image from "next/image";
import SpotlightCard from './card.jsx';
import PixelTransition from './pixel.jsx';
import Folder from './folder.jsx';
import ShinyText from "../texts/shinyText.jsx";
import Carousel from './carousel.jsx';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"

export default function ProjectCard({title, category, github}) {

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
                        <DialogContent className={"popup"}>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <ScrollArea style={{height:'80vh', backgroundColor:'white', width:'430px'}} className="w-[360px] rounded-md border p-4">
                                    <DialogHeader>
                                        <DialogTitle>
                                            <h1 style={{fontSize:'50px'}}> MiniUrl </h1>
                                        </DialogTitle>
                                        <DialogDescription>
                                            <p style={{fontSize:'17px'}}>A Tinyurl and LinkTree inspired Web Application that allows users to shorten long URLs and display URL links for networking connections.</p>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div style={{ marginTop:'10px', marginBottom:'10px', display:'flex', justifyContent:'center'}}>
                                        <Carousel
                                            baseWidth={360}
                                            autoplay={true}
                                            autoplayDelay={5000}
                                            pauseOnHover={false}
                                            loop={true}
                                            round={false}
                                        />
                                    </div>
                                    Link:
                                    <a href="https://swifter.pythonanywhere.com" style={{color:'blue'}}> https://swifter.pythonanywhere.com</a>

                                    <br/>Function:<br/>

                                    -Shorten Url<br/>
                                    -Create Account to track your URL history<br/>
                                    -Number of Clicks for shorten Links<br/>
                                    -Add URL links to Link Page<br/>
                                    -View Link Page<br/><br/>

                                    Frontend: HTML, CSS, Javascript, Bootstrap<br/>
                                    Backend: Flask<br/>
                                    Database: Sqlite<br/>
                                    Deployment: PythonAnywhere<br/>
                                    Testing: Docker, k6<br/><br/>

                                    Example Usage:<br/>

                                    1. Login with Username: testuser, <br/>Password: testpassword<br/>
                                    2. Add a URL<br/>
                                    3. Click on My URL<br/>
                                    4. Try out Links Function by clicking on Bitly<br/>
                                    5. Add a URL and its description<br/>
                                    6. Click My Bitly to View all the added URLs<br/>
                                    7. Visit https://swifter.pythonanywhere.com/mybit<br/>/testuser<br/><br/>
                                    View Readme On Github for more Information and System Design
                                </ScrollArea>
                            </div>
                        </DialogContent>
                    </Dialog>
                    
                    <div style={{paddingTop:'22px', fontSize:'20px'}}>
                        <ShinyText text="&#x2190; Click to Open" disabled={false} speed={3} className='' />
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
}