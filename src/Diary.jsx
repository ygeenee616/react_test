import { useLocation, useNavigate } from "react-router-dom";
import { diaries } from "./database";

/*
1) useLocation => parameter split("/")
2) useNavigate => navigate("/", {state: {name: 3}})

*/

function Diary({ idx }) {
  const navigate = useNavigate();
  const location = useLocation();

  const diaryNum = location.state.idx;
  const title = diaries[diaryNum].t;

  const clickDiary = () => {
    navigate(`/diary/${idx}`);
  };

  return (
    <div style={styles} onClick={clickDiary}>
      <p>🐶일 기🐶</p>
      <h2>{title.substr(0, 10)}</h2>
      <h3>{diaryNum}</h3>
    </div>
  );
}

const styles = {
  width: "30vw",
  height: 150,
  backgroundColor: "grey",
};

export default Diary;
