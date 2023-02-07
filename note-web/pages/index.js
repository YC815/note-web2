import React, { useState } from 'react';

const HomePage = () => {
const [textAreas, setTextAreas] = useState([
{ id: 1 }
]);

const addTextArea = () => {
setTextAreas([...textAreas, { id: textAreas.length + 1 }]);
};

const removeTextArea = (id) => {
setTextAreas(textAreas.filter(t => t.id !== id));
};

return (
<div style={{ backgroundColor: '#333', height: '100vh' }}>
{textAreas.map(t => (
<div key={t.id} style={{ display: 'flex', alignItems: 'flex-end' }}>
<button style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', position: 'relative', bottom: '0' }} onClick={() => removeTextArea(t.id)}>
╳
</button>
<textarea style={{ padding: '20px', width: '332px', height: '234px', float: 'left', marginRight: '10px' }} />
</div>
))}
<button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', position: 'absolute', bottom: '0', right: '0' }} onClick={addTextArea}>
+
</button>
</div>
);
};

export default HomePage;