import { KeyboardEventHandler, useState } from "react";

type TimeProps = {
  seconds: number;
  onChange?: (seconds: number) => void;
  onStartEdit?: () => void;
  onEndEdit?: () => void;
};

const Time = ({ seconds, onChange, onStartEdit, onEndEdit }: TimeProps) => {
  const [editedPart, setEditedPart] = useState<"hours" | "minutes" | "seconds" | null>(null);
  const hoursInDigits = Math.floor(seconds / 60 / 60);
  const minutesInDigits = Math.floor(seconds / 60) % 60;
  const secondsInDigits = seconds % 60;
  const onKeyPress: KeyboardEventHandler = (event) => {
    if (event.code === "Enter") {
      setEditedPart(null);
      onEndEdit && onEndEdit();
    }
  };
  return (
    <div className={"time"}>
      <div
        className={"hours clickable"}
        onClick={(event) => {
          !(event.target as HTMLElement).matches("input") &&
            setEditedPart((editedPart) => (editedPart === "hours" ? null : "hours"));
          onStartEdit && onStartEdit();
        }}
      >
        <div className={"digits"}>
          {editedPart === "hours" ? (
            <input
              onChange={(event) => {
                onChange && onChange(Number(event.target.value) * 60 * 60 + minutesInDigits * 60 + secondsInDigits);
              }}
              onKeyPress={onKeyPress}
              type={"text"}
              value={hoursInDigits}
            />
          ) : (
            hoursInDigits
          )}
        </div>
        <div className={"text"}>hours</div>
      </div>
      <div
        className={"minutes clickable"}
        onClick={(event) => {
          !(event.target as HTMLElement).matches("input") &&
            setEditedPart((editedPart) => (editedPart === "minutes" ? null : "minutes"));
          onStartEdit && onStartEdit();
        }}
      >
        <div className={"digits"}>
          {editedPart === "minutes" ? (
            <input
              onChange={(event) => {
                onChange && onChange(hoursInDigits * 60 * 60 + Number(event.target.value) * 60 + secondsInDigits);
              }}
              onKeyPress={onKeyPress}
              type={"text"}
              value={minutesInDigits}
            />
          ) : (
            minutesInDigits
          )}
        </div>
        <div className={"text"}>minutes</div>
      </div>
      <div
        className={"seconds clickable"}
        onClick={(event) => {
          !(event.target as HTMLElement).matches("input") &&
            setEditedPart((editedPart) => (editedPart === "seconds" ? null : "seconds"));
          onStartEdit && onStartEdit();
        }}
      >
        <div className={"digits"}>
          {editedPart === "seconds" ? (
            <input
              onChange={(event) => {
                onChange && onChange(hoursInDigits * 60 * 60 + minutesInDigits * 60 + Number(event.target.value));
              }}
              onKeyPress={onKeyPress}
              type={"text"}
              value={secondsInDigits}
            />
          ) : (
            secondsInDigits
          )}
        </div>
        <div className={"text"}>seconds</div>
      </div>
    </div>
  );
};

export default Time;
