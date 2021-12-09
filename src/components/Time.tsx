type TimeProps = {
  seconds: number;
};

const Time = ({ seconds }: TimeProps) => {
  return (
    <div className={"time"}>
      <div className={"hours"}>
        <div className={"digits"}>{Math.floor(seconds / 60 / 60)}</div>
        <div className={"text"}>hours</div>
      </div>
      <div className={"minutes"}>
        <div className={"digits"}>{Math.floor(seconds / 60) % 60}</div>
        <div className={"text"}>minutes</div>
      </div>
      <div className={"seconds"}>
        <div className={"digits"}>{seconds % 60}</div>
        <div className={"text"}>seconds</div>
      </div>
    </div>
  );
}

export default Time;
