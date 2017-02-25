import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video);
    const imageURL = video.snippet.thumbnails.default.url;
    const videoName = video.snippet.title;
    return (
        <li onClick={()=>onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className = "media_object" src={imageURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {videoName}
                    </div>
                </div>
            </div>
        </li>       
    );
}

export default VideoListItem