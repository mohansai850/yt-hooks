import React, { useEffect, useState } from 'react'
import youtube from '../apis/youtube';
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const[videos, setVideos] = useState([])
    const[selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        appSubmit('latest telugu songs')
    },[])

    const appSubmit = term => {
        youtube.get('/search', {
            params: {
                q: term
            }
        }).then(res => {
            setVideos(res.data.items)
            setSelectedVideo(res.data.items[0])
        })
    }

    return (
        <div className="ui container">
            <SearchBar onappSubmit={appSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default App;
