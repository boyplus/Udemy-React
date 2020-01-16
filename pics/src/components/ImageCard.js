import React from 'react';

class ImageCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {spans:0};
		//when we want to manipulate individual DOM we have to create the ref
		this.imageRef = React.createRef();
	}
	componentDidMount(){
		//console.log(this.imageRef);
		//console.log(this.imageRef.current.clientHeight);
		//we see the height of image is 0 because image does not dowload yet!!
		this.imageRef.current.addEventListener('load',this.setSpans);
	}
	setSpans = () => {
		console.log(this.imageRef.current.clientHeight);
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height/10); 

		this.setState({spans:spans});
		//this.setState({spans:spans}); -> ES2015
	};
	render(){
		const {description,urls,id} = this.props.image;
		//console.log("hello "+ description);
		return(
			<div style={{gridRowEnd:`span ${this.state.spans}`}}>
				<img 
					//pass by ref property 
					ref={this.imageRef}
					alt={description}
					key={id}
					src={urls.regular}
				/>
			</div>
		);
	}
	
}

export default ImageCard;