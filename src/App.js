import './App.css';
import TahoePeaks from './TahoePeaks/TahoePeaksView';
import { tahoe_peaks } from './TahoePeaks/data'
import { List } from './TahoePeaks/Tools'

function App() {
  return (
    <div className="App">
      {/* <TahoePeaks list = {tahoe_peaks}/> */}
      <List data={tahoe_peaks} renderEmpty={<p>No data...</p>}
        renderItem={item => (
          <>
            {item.name} - {item.elevation.toLocaleString()} ft
          </>
        )}/>
    </div>
  );
}

export default App;
