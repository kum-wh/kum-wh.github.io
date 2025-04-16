import CircularText from './texts/circularText.jsx';
import InfiniteScroll from './ui/scroll.jsx';
import MiniUrlCard from './ui/miniurlcard.jsx';
import PeerCode from './ui/peercode.jsx';
import Image from 'next/image.js';

export default function Projects() {

    const items = [
        { content: <Image src={'/tech/python.png'} width={100} height={100} alt='python icon'/> },
        { content: <Image src={'/tech/c.png'} width={100} height={100} alt='c++ icon'/> },
        { content: <Image src={'/tech/js.jpg'} width={100} height={100} alt='javascript icon'/> },
        { content: <Image src={'/tech/sql.jpg'} width={100} height={100} alt='SQL icon'/> },
        { content: <Image src={'/tech/django.png'} width={100} height={100} alt='django icon'/> },
        { content: <Image src={'/tech/node.png'} width={100} height={100} alt='NodeJs icon'/> },
        { content: <Image src={'/tech/nextjs.png'} width={100} height={100} alt='NextJs icon'/> },
        { content: <Image src={'/tech/docker.jpg'} width={100} height={100} alt='Docker icon'/> },
      ];
        

    return (
        <div id='projectpage' style={{ width: '98%', height: '100vh', position:'relative', zIndex:1}}>
            <div style={{ paddingTop:'100px', display:'flex'}}>
                <div style={{height:'100%', width:'400px', minWidth:'360px'}}>
                    <div style={{marginLeft:'100px', backgroundColor: '#121212', height:'200px', width:'200px'}}>
                        <CircularText
                            text="*MY**PROJECTS*"
                            onHover="pause"
                            spinDuration={20}
                            className=""
                        />
                    </div>
                    <div style={{width:'400px', height: '350px',marginTop:'10px', position: 'relative'}}>
                        <InfiniteScroll
                        items={items}
                        isTilted={false}
                        tiltDirection='left'
                        autoplay={true}
                        autoplaySpeed={1.0}
                        autoplayDirection="down"
                        pauseOnHover={false}
                        />
                    </div>
                </div>

                <div style={{height:'100%', display: 'flex', flexWrap: 'wrap', marginTop:'50px', justifyContent:'center'}}>
                    <div style={{width:'350px', height:'424px', margin:'5px'}}>
                        <MiniUrlCard title='MiniUrl' category='Full Stack Application' github='https://github.com/kum-wh/TinyURL-Clone'/>
                    </div>
                    <div style={{width:'350px', height:'424px', margin:'5px'}}>
                        <PeerCode title='PeerCode' category='Full Stack Application' github=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}