import React from "react";
import Icon from "../../Icon/Icon";


type GoalIconProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "GoalIcon";
};

const TheGoalIcon = ({ variant = "GoalIcon", ...props }: GoalIconProps) => {
  return (
    <div {...props}>
      <Icon variant={variant} className="w-8 h-8" />
    </div>
  );
};

export default TheGoalIcon;
