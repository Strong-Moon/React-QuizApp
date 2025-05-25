function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🥳";
  } else if (percentage >= 80) {
    emoji = "😃";
  } else if (percentage >= 50) {
    emoji = "🙂";
  } else {
    emoji = "😢";
  }

  return (
    <>
      <p className="result">
        Your score is {points} out of {maxPossiblePoints} points.
        <br />
        {Math.ceil(percentage)}% correct answers.
        <br />
        {emoji}
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
