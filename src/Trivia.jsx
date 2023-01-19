export default function Trivia(props) {
    return(
        <div>
            <h1>{props.question}</h1>
            <p>{props.answers}</p>
        </div>
    )
}