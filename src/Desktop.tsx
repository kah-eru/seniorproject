import "./Desktop.css";

export const Desktop = (): JSX.Element => {
  return (
    <div className="desktop-workouts">
      <div className="div">
        <div className="overlap">
          <button className="button">
            <div className="overlap-group">
              <div className="text-wrapper">Plan</div>
            </div>
          </button>
          <div className="overlap-2">
            <button className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">Plan</div>
              </div>
            </button>
            <div className="workout">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Workout 2</div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Workout 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="user" />
          <img className="drop-down" alt="Drop down" src="drop-down.svg" />
          <div className="text-wrapper-3">Fitness App</div>
          <div className="burger-menu">
            <img className="line" alt="Line" src="line-1.svg" />
            <img className="img" alt="Line" src="line-2.svg" />
            <img className="line-2" alt="Line" src="line-3.svg" />
          </div>
        </div>
        <div className="workout-object">
          <div className="overlap-3">
            <div className="frame">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Workout 1</div>
              </div>
            </div>
            <button className="button-2">
              <div className="overlap-group">
                <div className="text-wrapper">Plan</div>
              </div>
            </button>
          </div>
        </div>
        <div className="workout-object-2">
          <div className="overlap-3">
            <div className="frame">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Workout 4</div>
              </div>
            </div>
            <button className="button-2">
              <div className="overlap-group">
                <div className="text-wrapper">Plan</div>
              </div>
            </button>
          </div>
        </div>
        <div className="overlap-4">
          <div className="workout-object-3">
            <div className="overlap-3">
              <div className="frame">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Workout 5</div>
                </div>
              </div>
              <button className="button-2">
                <div className="overlap-group">
                  <div className="text-wrapper">Plan</div>
                </div>
              </button>
            </div>
          </div>
          <div className="workout-object-4">
            <div className="overlap-3">
              <div className="frame">
                <div className="div-wrapper">
                  <div className="text-wrapper-2">Workout 6</div>
                </div>
              </div>
              <button className="button-2">
                <div className="overlap-group">
                  <div className="text-wrapper">Plan</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};