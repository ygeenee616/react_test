import { useNavigate } from "react-router-dom";
import { diaries } from "./database";

function Diary({ idx }) {
  const navigate = useNavigate();
  const title = diaries[idx].t;

  const clickDiary = () => {
    navigate(`/diary/${idx}`);
  };

  return (
    <div style={styles} onClick={clickDiary}>
      <p>🐶일 기🐶</p>
      <h2>{title.substr(0, 10)}</h2>
    </div>
  );
}

const styles = {
  width: "30vw",
  height: 150,
  backgroundColor: "grey",
};

export default Diary;
