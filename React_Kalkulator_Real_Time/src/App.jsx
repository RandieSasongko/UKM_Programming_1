import React, { useState, useEffect } from "react";

function Kalkulator() {
  const [angka1, setAngka1] = useState("");
  const [angka2, setAngka2] = useState("");
  const [total, setTotal] = useState(0);

  const handleNumber1 = (event) => {
    setAngka1(event.target.value);
  };

  const handleNumber2 = (event) => {
    setAngka2(event.target.value);
  };

  useEffect(() => {
    const totalBaru = parseFloat(angka1) + parseFloat(angka2);
    setTotal(isNaN(totalBaru) ? 0 : totalBaru);
  }, [angka1, angka2]);

  return (
    <div
      style={{
        fontSize: 24,
        border: "1px solid black",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2>Kalkulator</h2>
      <input type="number" value={angka1} onChange={handleNumber1} />
      <br />
      <input type="number" value={angka2} onChange={handleNumber2} />
      <br />
      <p>Hasil : {total}</p>
    </div>
  );
}

export default Kalkulator;
