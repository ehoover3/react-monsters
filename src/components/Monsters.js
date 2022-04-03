// 1. IMPORT STUFF
import React from "react";

// 2. NAME MY COMPONENT
export default function Monsters({ names }) {
  // 3. VANILLA JAVASCRIPT

  let myNewArray = names.map((name, index) => {
    return (
      <div>
        {index} It's {name}! AAhhhhhahggggh!
      </div>
    );
  });

  console.table(myNewArray);

  // 4. JSX SECTION (html & js had a baby)
  return (
    <div>
      {/* PROPS */}
      <h1>{names}</h1>

      {/* PROPS & MAP METHOD */}
      {names.map((name, index) => {
        return (
          <div>
            {index} It's {name}! AAhhhhhahggggh!
          </div>
        );
      })}
    </div>
  );
}
