import React from 'react'
import User from './User'

function Profile({person, handleName}) {
  return (
    <div>
  <h1>{person.fullName}</h1>
  <h1>{person.bio}</h1>
  <h1>{person.profession}</h1>
 <User person={person}>
<img src="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"/>

 </User>

 <button onClick={()=>handleName(person.fullName)}>click here to show name</button>

    </div>
  )
}

Profile.defaultProps={
    fullName:"This is a default name",
    bio:"This is a default bio",
    profession:"This is a default profession"
}
Profile.propTypes={
    fullName:propTypes.string.isRequired,
    bio:propTypes.string.isRequired,
    profession:propTypes.string.isRequired,
    handleName:propTypes.func
}
export default Profile