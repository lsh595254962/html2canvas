import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const downHtml2canvas = () => {
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

  const handleDownload = () => {
    const alink = document.createElement("a");
    alink.href =
      "https://img30.360buyimg.com/pop/s1180x940_jfs/t1/131876/5/23042/47442/6295cf3bE3cfc4b50/37b10b5cf9f04e93.jpg.webp";
    alink.download = "绝对路径.jpg";
    alink.click();
  };
  return (
    <div className="App">
      <button onClick={() => handleDownload()}>绝对路径</button>
      <button onClick={() => downHtml2canvas()}>downHtml2canvas</button>
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
          className="erweima"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp509178275.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657268833&t=35cc005c3112de6a289bcd3e57f4c0fd"
          alt="erweima"
        />
      </div>
    </div>
  );
}

export default App;
