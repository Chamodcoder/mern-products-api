import {Route,Routes} from 'react-router-dom';

function App() {

  return (
    <Box minH={"100vh"}>
      {/*<navbar/>*/}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<Create/>} />
      </Routes>
    </Box>>
  );
}

export default App
