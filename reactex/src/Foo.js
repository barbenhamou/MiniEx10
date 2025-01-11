import { useState } from 'react';

function Foo() {
  const [bar, setBar] = useState(176);

  console.log(bar);

  return (
    <div onClick={() => setBar(bar + 106867)}>
      {"barman" + bar}
    </div>
  );
}

export default Foo;
