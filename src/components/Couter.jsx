import { useState, useEffect } from "react";

const Counter = ({ disabled }) => {
  const [count, setCount] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(
      "Mã chạy sau khi thành phần hiển thị lần đầu tiên và sau mỗi lần cập nhật trạng thái"
    );
    console.log("Giá trị count hiện tại là:", count);
  }, [count]);

  useEffect(() => {
    fetch("https://api-data-eight.vercel.app/products")
      .then((res) => res.json())
      .then((pons) => {
        setData(pons);
      });
  }, []);

  return (
    <div>
      <button disabled={disabled} onClick={() => setCount(count + 1)}>
        You click {count} time(s)
      </button>
      {data.map((product) => (
        <li key={product.id}>{product.name}
            <p>{product.description}</p>
        </li>
      ))}
    </div>
  );
};

export default Counter;
