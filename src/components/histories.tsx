import { AppState } from "../app";
import cx from "classnames";

interface HistoriesProps extends Pick<AppState, "winner" | "histories" | "nextPlayer" | "currentIdx"> {}

export default function Histories({ nextPlayer, histories, currentIdx, winner }: HistoriesProps) {
  return (
    <div className="ms-2">
      <h6>{winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`}</h6>
      <div className="btn-group-vertical" style={{ gap: 2 }}>
        {histories.map((h, idx) => (
          <button key={idx} disabled={currentIdx === idx}>
            Go to {idx ? `move ${idx}` : "game start"}
            {currentIdx === idx ? " (current)" : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
