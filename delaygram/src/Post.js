import React from 'react'
import "./Post.css";
import Avatar from "@material-ui/core/Avatar"

function Post() {
  return (
    <div className="post">
      {/* header (avatar + username) */}
      <div className="post__header">
        <Avatar
          className="post__header__avatar"
          alt="Ivanpileta"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      {/* image */}
      <img className="post__image" src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"/>

      {/* username + caption */}
      <h4 className="post__text"><strong>Ivanpileta</strong> Muchacho aquí en Parque Picón</h4>
    </div>
  )
}

export default Post