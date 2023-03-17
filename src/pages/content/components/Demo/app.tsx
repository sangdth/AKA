import { useEffect, useState } from 'react';

// function injectedFunction() {
//   document.body.style.backgroundColor = 'orange';
// }

function highlight(text: string) {
  const inputText = document.getElementById('__next');
  let innerHTML = inputText?.innerHTML;
  console.log('### innerHTML: ', { innerHTML });
  const index = innerHTML?.indexOf(text);
  console.log('### index: ', { index });
  if (index >= 0) {
    innerHTML =
      innerHTML.substring(0, index) +
      "<span class='highlight'>" +
      innerHTML.substring(index, index + text.length) +
      '</span>' +
      innerHTML.substring(index + text.length);
    inputText.innerHTML = innerHTML;
  }
}

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('content view loaded');
  }, []);

  return (
    <div className="content-view">
      {count}
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={() => highlight('React')}>change background</button>
    </div>
  );
}
