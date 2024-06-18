import { useState } from 'react';

let renderCount = 0;

// eslint-disable-next-line import/prefer-default-export
export function WatchExampleTwo() {
  const [name, setName] = useState();
  renderCount += 1;

  return (
    <>
      <div className="text-foreground">
        <div>
          渲染次數：
          {renderCount}
        </div>
        <input
          className="w-full text-black"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="請輸入名稱"
        />
      </div>
    </>
  );
}
