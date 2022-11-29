import { Link } from 'react-router-dom'
import Card from '../shared/Card'

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h2>About This Project</h2>
				<p>
					This is a React App to leave feedback on a product or
					service
				</p>
				<p>Version: 1.0.0</p>

				<p>
					<Link to="/">Back to home</Link>
				</p>
			</div>
		</Card>
	)
}

export default AboutPage
