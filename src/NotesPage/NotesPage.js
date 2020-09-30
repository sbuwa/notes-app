import React, { Component } from 'react';

class NotesPage extends Component {
	render() {
		return (
			<div>
				<div className='search-bar'>
					<input type='text'></input>
				</div>
				<div className='grid-container'>
					<div className='file-structure'>1</div>
					<div className='canvas'>2</div>
				</div>
			</div>
		);
	}
}

export default NotesPage;
