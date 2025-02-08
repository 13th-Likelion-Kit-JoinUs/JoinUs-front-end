import { useNavigate } from "react-router-dom";
import { handleShareClick } from "../hook/HandleShareClick";

export function ButtonComponent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between w-full">
        <img
          src="/~s20231073/assets/img/left_btn.png"
          alt="Left Button"
          className="w-1/2 h-full object-cover hover:cursor-pointer"
        />
        <img
          src="/~s20231073/assets/img/right_btn.png"
          alt="Right Button"
          className="w-1/2 h-full object-cover hover:cursor-pointer"
          onClick={handleShareClick}
        />
      </div>

      <img
        src="/~s20231073/assets/img/restart_button.png"
        alt="Restart Button"
        className="w-full h-full object-cover hover:cursor-pointer"
        onClick={() => navigate("/")}
      />
    </>
  );
}
