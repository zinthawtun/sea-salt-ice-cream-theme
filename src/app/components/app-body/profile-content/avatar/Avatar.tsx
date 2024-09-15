import Avatar from "@mui/material/Avatar";
import Image from "@/app/data_store/Seasalt_Profile.png";

export const ProfileAvatar = () => {
  return (
    <Avatar
      alt="Sea Salt Ice-cream"
      src={Image.src}
      sx={{ width: 250, height: 250, margin: 2, marginTop: 4 }}
    />
  );
};
