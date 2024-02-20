import classes from './Movie.module.css';
const Movie = (props) => {
  const deleteHandler = async () => {
    try {
      await props.onDelete(props.id);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};
export default Movie;