import { useContext, useEffect, useState } from "react";
import Avatar from "react-avatar";
import { AuthContext } from "../../App";

function UserProfile({ username, userid }) {
  const { user } = useContext(AuthContext);
  const [randomColor, setRandomColor] = useState(null);
  useEffect(() => {
    const randomColorGenerator = () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      if (randomColor.length !== 6) {
        randomColorGenerator();
      } else {
        if (randomColor === "ffffff") {
          randomColorGenerator();
        } else {
          setRandomColor("#" + randomColor);
        }
      }
    };
    randomColorGenerator();
  }, [user?.imageBlob]);
  return (
    <div className="user-profile">
      {user?.imageBlob && user?.imageBlob[userid] ? (
        <img
          src={
            user?.imageBlob
              ? `https://evangadi-forum-backend-wqf7.onrender.com/api/all/images/${user.imageBlob[userid]}`
              : ""
          }
          alt="User Profile"
        />
      ) : (
        <Avatar
          name={username ? username : user?.username}
          size="40"
          round={true}
          color={randomColor}
        />
      )}
    </div>
  );
}

export default UserProfile;
