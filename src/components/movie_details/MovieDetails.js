
export default function MovieDetails({location: {state}}) {
    console.log(state);
    return (
        <div>
            <h1>MovieDetails</h1>
            <h2>{state.title}</h2>
        </div>
    );
}