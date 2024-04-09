import React from "react";

const FormReserve = () => {
  return (
    <section>
      <h3>Do yo want to reserve this hotel?</h3>
      <form>
        <label>
          <span>Check-in</span>
          <input type="date"/>
        </label>
        <label>
          <span>Check-out</span>
          <input type="date"/>
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
