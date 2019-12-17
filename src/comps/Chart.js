import React from 'react';
import Container from 'react-bootstrap/Container';
import { Pie } from 'react-chartjs-2';

class Chart extends React.Component {
	state = {
		labels: this.props.labels,
		dataset: [{
			data: this.props.dataset,
			backgroundColor: ['blue', 'red']
		}]
	}

	componentDidUpdate(prevProps) {
	  if (this.props.dataset !== prevProps.dataset) {
	    this.setState({
				dataset: [{
					data: this.props.dataset,
					backgroundColor: ['blue', 'red']
				}]
			});
	  }
	}

	render() {
		return (
			<Container>
      <Pie
				data={{ labels: this.state.labels, datasets: this.state.dataset }}
				/>
		</Container>
		);
	}
}

export default Chart;
