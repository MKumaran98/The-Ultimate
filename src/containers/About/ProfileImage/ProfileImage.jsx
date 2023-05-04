import classes from "./profileImage.module.css";
import image from "../../../assets/profileImage.jpg";

const ProfileImage = () => {
  return (
    <div>
      <div className={classes["outLine"]}>
        <img src={image} alt="Profile" className={classes["image"]} />
      </div>
    </div>
  );
};

export default ProfileImage;
