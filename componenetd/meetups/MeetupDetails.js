import classes from './meetupDetail.module.css';


export default function MetupDetails(props){

    return(
        <section className={classes.detail}>
            <img src={props.img} />

            <h1>{props.tai}</h1>
            <p>{props.para}</p>
        </section>
    );
}