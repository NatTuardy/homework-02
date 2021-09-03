import React from "react";
import Counter from "./counter";

const Counters = ({onReset,counters, ...rest}) => {
  return (
    <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Throw</button>
      {counters.map((item) => {
        return (
          <Counter
            key={item.id}
            {...item}
            {...rest}
            
          />
        );
      })}
    </div>
  );
};

export default Counters;
