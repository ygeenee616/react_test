import { useLocation, useNavigate } from "react-router-dom";

function DiaryDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h4>{location.pathname.split("/")}</h4>
      <button>뒤로 가기</button>
    </div>
  );
}

export default DiaryDetail;
