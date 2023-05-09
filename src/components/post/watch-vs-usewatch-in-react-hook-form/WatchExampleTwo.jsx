import { useState } from 'react';

let renderCount = 0;

export default function WatchExampleTwo() {
  const [name, setName] = useState();
  renderCount += 1;

  return (
    <>
      <div className="text-white">
        <div>
          渲染次數：
          {renderCount}
        </div>
        <input
          className="w-full text-primary-800"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="請輸入名稱"
        />
      </div>
    </>
  );
}
