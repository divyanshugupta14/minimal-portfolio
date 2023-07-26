import { GridItemInterface } from "@/constants/user-info";
import { FC } from "react";

type SocialBoxProps = {
  item: GridItemInterface;
};
const SocialBox: FC<SocialBoxProps> = ({ item }) => {
  return (
    <div>
      {/* Header */}
      <div>ICON</div>
      {/* Button */}
      {item.layout === "2x2"}
    </div>
  );
};

export default SocialBox;
