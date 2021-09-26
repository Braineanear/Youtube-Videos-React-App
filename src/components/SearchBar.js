import React from 'react';

class SearchBar extends React.Component {
  constructor ( props ) {
    super( props );

    this.state = { term: '' }
  }

  onInputChange = ( e ) => {
    this.setState( { term: e.target.value } );
  }

  onFormSubmit = ( e ) => {
    e.preventDefault();

    this.props.onSubmit( this.state.term );
  }

  render () {
    return (
      <div class="search-bar ui segment" onSubmit={this.onFormSubmit}>
        <form class="ui form">
          <label>Video Search</label>
          <input type="text" value={this.state.term} onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
