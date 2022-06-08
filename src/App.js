import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const DPR = () => {
    // 获取设备dpi
    if (window.devicePixelRatio && window.devicePixelRatio > 1) {
      return window.devicePixelRatio;
    }
    return 1;
  };
  const handleDownload = () => {
    let dom = document.getElementById("wrap");
    const { width, height } = dom.getBoundingClientRect();
    html2canvas(dom, {
      useCORS: true,
      width: width,
      height: height,
    }).then(function (canvas) {
      const dataImg = new Image();
      dataImg.src = canvas.toDataURL("image/png");
      const alink = document.createElement("a");
      alink.href = dataImg.src;
      alink.download = "testImg.jpg";
      alink.click();
    });
  };
  return (
    <div className="App">
      <button onClick={() => handleDownload()}>download</button>
      <div className="wrap" id="wrap">
        <img
          className="goods-img"
          src="https://img30.360buyimg.com/pop/s1180x940_jfs/t1/131876/5/23042/47442/6295cf3bE3cfc4b50/37b10b5cf9f04e93.jpg.webp"
          alt="goods"
        />
        <p>
          swimming pool ,Rolling Poolside Mesh Container for Toys – Waterproof,
          UV Resistant Outdoor Organizer Box with Bonus …
        </p>
        <p>US$ 29.08</p>
        <img
          src="http://ued.vemic.com/sync/6274c7f5991b9313f559c59a/%E6%9C%80%E6%96%B0%E5%88%B6%E4%BD%9C%E4%B8%AD/Doba%20Direct%20%E5%95%86%E5%93%81+%E5%BA%97%E9%93%BA/images/products/u488.png"
          alt="erweima"
        />
      </div>
    </div>
  );
}

export default App;
