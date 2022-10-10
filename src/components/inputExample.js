import { useState } from "react";

function inputExample() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState({ name: "", surname: "" });

  const onchangeInput = (e) => {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      İsim yazınız! <br />
      <input name="name" value={form.name} onChange={onchangeInput} />
      <br />
      <br />
      Soyisim yazınız! <br />
      <input name="surname" value={form.surname} onChange={onchangeInput} />
      <br />
      <br />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default inputExample;
