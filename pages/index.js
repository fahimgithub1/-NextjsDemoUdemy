import MeetupList from "../componenetd/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A Frist Meetup',
        image: 'https://buffer.com/resources/content/images/resources/wp-content/uploads/2014/12/web-IMG_6079.jpg',
        address: 'some address 5, 12345 some City',
        desciption: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: '2nd Frist Meetup',
        image: 'https://buffer.com/resources/content/images/resources/wp-content/uploads/2014/12/web-IMG_6079.jpg',
        address: 'some address 5, 12345 some City',
        desciption: 'This is a first meetup'
    },
    {
        id: 'm3',
        title: '3rd Frist Meetup',
        image: 'https://buffer.com/resources/content/images/resources/wp-content/uploads/2014/12/web-IMG_6079.jpg',
        address: 'some address 5, 12345 some City',
        desciption: 'This is a first meetup'
    }
];

export default function HomePage(props) {
    // const [lpadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(()=>{
    //     // sent a http request and  fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, [])

    return (
        <Fragment>
           <Head>
                <title>Next Frist App</title>
                <meta
                    name="desciption"
                    content="browser a huge list of highly active React meetups!"
                />
           </Head>

            <MeetupList meetups={props.meetup} />
        </Fragment>
    )
}

// export async function getServerSideProps(context){ //when data will change ti will use
//     const req = context.req;
//     const res = context.res;

//     //fatch data from api

//     return{
//         props:{
//            meetup: DUMMY_MEETUPS
//         },

//     };
// }
   
export async function getStaticProps(){ //when data will not change ti will use
    // fatch data from api
    // const data = req.body;
    
    // const client = await MongoClient.connect('mongodb+srv://Fahim:Fahim1234@cluster0.lgls0cr.mongodb.net/meetups?retryWrites=true&w=majority'); 
    
    // const db = client.db();

    // const meetupsCollection = db.collection('meetups');

    // const meetups = await meetupsCollection.find().toArray(); 

    // client.close();

    return{
        props:{
            meetup: DUMMY_MEETUPS.map((meetup) => ({
                title : meetup.title,
                image : meetup.image,
                desciption: meetup.desciption,
                address: meetup.address,
                id : meetup._id.toString()   
            }))
        },

        revalidate: 1
    };
}