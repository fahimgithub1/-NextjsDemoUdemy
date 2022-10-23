import MetupDetail from "../../componenetd/meetups/MeetupDetails";
// import { MongoClient , ObjectId} from "mongodb";


export default function MetupDetails(props){

    return(
        <MetupDetail
            tai= {props.meetupData.title}
            img= {props.meetupData.image}
            para= {props.meetupData.discipton}
        /> 
    );
}

export async function getStaticPaths(){
    // const client = await MongoClient.connect('mongodb+srv://Fahim:Fahim1234@cluster0.lgls0cr.mongodb.net/meetups?retryWrites=true&w=majority'); 
    
    // const db = client.db();

    // const meetupsCollection = db.collection('meetups');

    // const meetups = await meetupsCollection.find({},{_id: 1}).toArray(); 

    // client.close();

    return{
        // fallback: false,
        // paths: meetups.map((meetup) => ({
        //     params:{
        //         meetupId : meetup._id.toString()
        //     },
        // })),

        paths: [
            { 
                params:{
                    meetupld: 'm1',
                },
            },
            {
                params:{
                    meetupld: 'm2',
                },
            }, 
        ],
    };
}

export async function getStaticProps(context){
    // const meetupId = context.params.meetupld;

    // const client = await MongoClient.connect('mongodb+srv://Fahim:Fahim1234@cluster0.lgls0cr.mongodb.net/meetups?retryWrites=true&w=majority'); 
    
    // const db = client.db();

    // const meetupsCollection = db.collection('meetups');

    // const selectedMeetup = await meetupsCollection.findOne({ _id : ObjectId(meetupId)});

    // client.close();

    return{
        props:{
            meetupData: {
                // title: selectedMeetup.title,
                // image: selectedMeetup.image,
                // id: selectedMeetup._id.toString(),
                // address: selectedMeetup.address
                title: "hakipani",
                image: "none",
                id: "454",
                address: "dhaka"
            }
        }
    }
}