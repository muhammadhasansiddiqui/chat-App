// Loader.jsx
import { Spinner } from "@nextui-org/react";

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Spinner 
        label="Loading..." 
        color="primary" // Change this to your preferred color
      />
    </div>
  );
}

export default Loader;
