import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import youtube from './utils/api';

class App extends React.Component {
  constructor ( props ) {
    super( props );

    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  componentDidMount () {
    this.onSearchSubmit( 'bbc planet earth' );
  }

  onSearchSubmit = async ( term ) => {
    const response = await youtube.get( '/search', {
      params: {
        q: term
      }
    } );

    this.setState( {
      videos: response.data.items,
      selectedVideo: response.data.items[ 0 ]
    } );
  }

  onVideoSelect = ( video ) => {
    this.setState( { selectedVideo: video } );
  }

  render () {
    return (
      <div class="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div class="ui grid">
          <div class="ui row">
            <div class="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div class="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
