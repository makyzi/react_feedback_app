import { useContext } from 'react'

import FeedbackItem from './FeedbackItem'

import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext)

	if (!feedback || feedback.length === 0) {
		return <p>No feedback yet</p>
	}

	return (
		<div className="feedback-list">
			<ul>
				{feedback.map((item) => {
					return <FeedbackItem key={item.id} item={item} />
				})}
			</ul>
		</div>
	)
}

export default FeedbackList
