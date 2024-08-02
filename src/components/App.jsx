import React, { useState } from "react";

function App() {
  //這個函數設置了一個定時器，用於定期執行指定的函數。
  //updateTime這是每次定時器觸發時要執行的函數。時間間隔的單位是毫秒，這裡指每一秒更新一次。
  setInterval(updateTime, 1000);
  // 獲取當前時間的字符串表示形式
  const now = new Date().toLocaleTimeString();
  // 初始值為now
  const [time, setTime] = useState(now);

  function updateTime() {
    // 獲取新的時間，並且調用setTime來觸發渲染。
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime); //setTime使用newTime來代替初始值從新渲染time
  }

  return (
    <div className="container">
      {/*渲染當前時間*/}
      <h1>{time}</h1>
      {/*一但按下botton，則調用updateTime函數*/}
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
