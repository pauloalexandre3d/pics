import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID cc2b89592ca2da7a215a32bc89928d3aeaa3dcfe1564e8c03885a5a0eb001778'
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
