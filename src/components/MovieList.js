import { Container, Row } from 'react-bootstrap';
import MovieItem from './MovieItem';

function MovieList({ movies }) {

	return (
		<>
			<Container className="mt-4">
				<Row xs={1} md={2} className="g-4">
					{
						movies.map((movie, i) => {
							return (
								<MovieItem movie={movie} key={movie.id} />
							)
						})
					}
				</Row>
			</Container>
		</>
	)
}

export default MovieList;