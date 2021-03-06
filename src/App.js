import React, { Component } from 'react';
import './App.css';


let defaultStyle={
    color: '#fff'
}
let fakeServerData={
    user:{
        name: 'Thomas',
        playlists:[
            {
                name: 'My favorites',
                songs: [
                    {name:'Rum And Coca Cola', duration: 1503},
                    {name: 'The Dirty Side Of Street', duration: 2015}, 
                    {name: 'Black Coffee', duration: 3042},
                    {name: 'Comics', duration: 1025}
                ]
            },
            {
                name: 'My favorites II',
                songs: [
                    {name:'Rum And Coca Cola', duration: 1503},
                    {name: 'The Dirty Side Of Street', duration: 2015}, 
                    {name: 'Black Coffee', duration: 3042},
                    {name: 'Comics', duration: 1025}
                ]
            },
            {
                name: 'My favorites III',
                songs: [
                    {name:'Perfect', duration: 1503},
                    {name: 'The Dirty Side Of Street', duration: 2015}, 
                    {name: 'Black Coffee', duration: 3042},
                    {name: 'Comics', duration: 1025}
                ]
            },
            {
                name: 'My favorites IV',
                songs: [
                    {name:'Rum And Coca Cola', duration: 1503},
                    {name: 'The Dirty Side Of Street', duration: 2015}, 
                    {name: 'Black Coffee', duration: 3042},
                    {name: 'Comics', duration: 1025}
                ]
            }
        ]
    }
}


class PlaylistCounter extends Component {
    render() {
        return(
            <div style={{...defaultStyle, width:'40%', display: 'inline-block'}}>
                <h2>{this.props.playlists && this.props.playlists.length} Playlists</h2>
            </div>
        );
    }
}

class HoursCounter extends Component {
    render() {
        let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
            return songs.concat(eachPlaylist.songs)
        },[])
        let totalDuration = allSongs.reduce((sum, eachSong) =>{
            return sum + eachSong.duration
        }, 0)
        return(
            <div style={{...defaultStyle, width:'40%', display: 'inline-block'}}>
                <h2>{Math.round(totalDuration/60)} Hours</h2>
            </div>
        );
    }
}

class Filter extends Component {
    render(){
        return(
            <div style={defaultStyle}>
                <img/>
                <input type="text"/>
            </div>
        );
    }
}

class Playlist extends Component {
    render(){
        let playlist = this.props.playlist
        return(
            <div style={{...defaultStyle, width: '25%', display: 'inline-block'}}>
                <img/>
                <h3>{playlist.name}</h3>
                <ul>
                    {playlist.songs.map(song =>
                        <li>{song.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {serverData: {}}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        }, 1000);
    }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
        <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlist
        </h1>}
        
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
        
        <Filter/>
        {this.state.serverData.user.playlists.map(playlist => 
            <Playlist playlist={playlist}/>
        )}
        
        
        </div>: <h1 style={{...defaultStyle}}>Loading ...</h1>
        } 
      </div>
    );
  }
}

export default App;
