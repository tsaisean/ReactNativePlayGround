import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('[AlbumList] componentWillMount');
    axios('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      console.log('[AlbumList] result return', response);
      this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
    console.log('[AlbumList] renderAlbums');
    const a = this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
    console.log('[AlbumList] renderAlbums', a);
    return a;
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;
