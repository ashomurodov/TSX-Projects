import { AppState } from "../../app";
import cls from "./board.module.scss";

export interface BoardPorps extends Pick<AppState, "board"> {
  onCell: (idx: number) => void;
}

export default function Board({ board, onCell }: BoardPorps) {
  return (
    <>
      <div className={cls.board}>
        {board.map((board, idx) => (
          <button key={idx} onClick={() => onCell(idx)} className={cls.cell}>
            {board}
          </button>
        ))}
      </div>
    </>
  );
}
