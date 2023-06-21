import { AppState } from "../app";

interface HistoriesProps extends Pick<AppState, "winner" | "histories" | "nextPlayer" | "currentIdx"> {
  onHistory: (idx: number) => void;
}

export default function Histories({ nextPlayer, onHistory, histories, currentIdx, winner }: HistoriesProps) {
  return (
    <div className="ms-2">
      <h6>{winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`}</h6>
      <div className="btn-group-vertical" style={{ gap: 2 }}>
        {histories.map((h, idx) => (
          <button onClick={() => onHistory(idx)} key={idx} disabled={currentIdx === idx}>
            Go to {idx ? `move ${idx}` : "game start"}
            {currentIdx === idx ? " (current)" : ""}
          </button>
        ))}
      </div>
    </div>
  );
}
