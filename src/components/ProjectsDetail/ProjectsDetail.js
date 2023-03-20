import React, { useEffect, useState } from 'react';
import './ProjectsDetail.scss';
import { createSignal } from 'solid-js';
import { Collapse } from 'solid-collapse';
import Aos from 'aos';
import Confetti from 'react-confetti'
import { Carousel } from 'react-carousel-minimal';
import ReactiveButton from 'reactive-button';
import { useParams } from 'react-router-dom';
const ProjectsDetail = () => {
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        Aos.init({
            duration: 2000,

        })
    }, []);

    // http://localhost:5000/api/v1/project
    // http://localhost:5000/api/v1/project/6405bebbc4585df3109db365 (get one data by ID )

    const [singleProject, setSingleProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/project/${id}`)
            .then(res => res.json())
            .then(data => setSingleProject(data?.data));
    }, [id])
    // console.log(singleProject);


    const [isExpanded, setIsExpanded] = createSignal(false);

    const [state, setState] = useState('idle');
    const [stateclient, setStateclient] = useState('idle');
    const [stateserver, setStateserver] = useState('idle');

    // link link 
    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 2000);

    }
    // client site
    const onClickHandlerClinet = () => {
        setStateclient('loading');
        setTimeout(() => {
            setStateclient('success');
        }, 2000);
    }
    // server site
    const onClickHandlerServer = () => {
        setStateserver('loading');
        setTimeout(() => {
            setStateserver('success');
        }, 2000);
    }



    const data = [
        {
            image: "https://i.ibb.co/cvkSxhq/pic-bus-01.png",
            caption: `<div>
                      San Francisco
                      <br/>
                      Next line
                    </div>`
        },
        {
            image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
            caption: "Scotland"
        },
        {
            image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
            caption: "San Francisco"
        },
        {
            image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
            caption: "Darjeeling"
        },
        {
            image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
            caption: "San Francisco"
        },
        {
            image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
            caption: "Scotland"
        },
        {
            image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
            caption: "Darjeeling"
        }
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    return (


        <div className="App">
            <Confetti
                width={1100}
                height={700}
            />
            <div class="patterns">
                <svg width="100%" height="40%">
                    <defs>
                        <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                            patternUnits="userSpaceOnUse">
                            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                        </pattern>
                        <style>
                            @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                        </style>

                    </defs>

                    <rect x="0" y="0" width="50%" height="50%" fill="url(#polka-dots)"> </rect>

                    <text x="50%" y="60%" text-anchor="middle"  >
                        {singleProject?.name}
                    </text>
                </svg>
            </div>




            <div style={{ textAlign: "center" }}>
                <h2>React Carousel Minimal</h2>
                <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={2000}
                        width="850px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="center"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        showNavBtn={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "40px auto",
                        }}
                    />
                </div>

                <div className=' gap-5 justify-around items-center'>



                    <ReactiveButton
                        idleText={
                            <span>
                                <a className="decoration-white" href="https://fixit-repair-assign-12.web.app/" target="blank"><span> <faReply />Live Demo</span>
                                </a>
                            </span>
                        }
                        rounded={true}
                        buttonState={state}
                        onClick={onClickHandler}
                        color={'primary'}
                        // idleText={'Live Link'}
                        loadingText={'Loading'}
                        successText={'Success'}
                        errorText={'Error'}
                        type={'button'}
                        className={'class1 class2'}
                        style={{ borderRadius: '5px' }}
                        outline={true}
                        shadow={true}
                        size={'normal'}
                        block={false}
                        messageDuration={2000}
                        disabled={false}
                        // buttonRef={"https://fixit-repair-assign-12.web.app/"}
                        width={null}
                        height={null}
                        animation={true}

                    >   </ReactiveButton>


                    <a href="https://busservices.netlify.app/" target={'_blank'}>
                        <ReactiveButton
                            rounded={true}
                            buttonState={stateclient}
                            onClick={onClickHandlerClinet}
                            color={'primary'}
                            idleText={'Server Site'}
                            loadingText={'Loading'}
                            successText={'Success'}
                            errorText={'Error'}
                            type={'button'}
                            className={'class1 class2'}
                            style={{ borderRadius: '5px' }}
                            outline={true}
                            shadow={true}
                            size={'normal'}
                            block={false}
                            messageDuration={2000}
                            disabled={false}
                            buttonRef={null}
                            width={"100px"}
                            height={"20px"}
                            animation={true}
                        />
                    </a>

                    <ReactiveButton
                        rounded={true}
                        buttonState={stateserver}
                        onClick={onClickHandlerServer}
                        color={'primary'}
                        idleText={'Client Site'}
                        loadingText={'Loading'}
                        successText={'Success'}
                        errorText={'Error'}
                        type={'button'}
                        className={'class1 class2'}
                        style={{ borderRadius: '5px' }}
                        outline={true}
                        shadow={true}
                        size={'bold'}
                        block={false}
                        messageDuration={2000}
                        disabled={false}
                        buttonRef={null}
                        width={null}
                        height={null}
                        animation={true}
                    />
                </div>

            </div>



            <div>


            </div>

        </div>




    );
};
export default ProjectsDetail;
