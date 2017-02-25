import React from 'react'

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const vidID = video.id.videoId;
    const vidURL = `https://www.youtube.com/embed/${vidID}`
    return (
        <div className="video-detail col-md-8">
            <div className="embed-reponsive">
                <iframe className="embed-reponsive-item" src={vidURL}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <br/>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail