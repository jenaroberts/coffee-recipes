import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});

  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [terms, setTerms] = useState(false);
  //   const [validForm, setValidForm] = useState(false);

  //   const contactFormInfo = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     terms: terms,
  //   };

  //   useEffect(() => {
  //     if (
  //       contactFormInfo.firstName &&
  //       contactFormInfo.lastName &&
  //       contactFormInfo.terms
  //     ) {
  //       setValidForm(true);
  //     }
  //   }, [
  //     contactFormInfo.firstName,
  //     contactFormInfo.lastName,
  //     contactFormInfo.terms,
  //   ]);

  const sendData = (event) => {
    event.preventDefault();

    console.log("btn pressed ---- ++ contactFormInfo");
  };
  console.log(formData);

  fetch(`${process.env.REACT_API_ENDPOINT}/hot`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const setFormObject = (event, name) => {
    console.log(event);
    // setFormData(event.target.value)
    setFormData({ ...formData, [event.target.name]: event.target.name });
  };

  return (
    <>
      <form method="post">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            // onChange={(event) => setFormData({ ...formData, firstName: event.target.value })
            onChange={(event) => {
              setFormObject(event, "firstName");
            }}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.data })
            }
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            maxLength={5}
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </label>
        <br />
        <label>
          State:
          <select name="state">
            <option value=""></option>
            <option value="fl">FL</option>
            <option value="il">IL</option>
            <option value="ny">NY</option>
            <option value="nj">NJ</option>
          </select>
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <br />
        <label>
          Terms and Conditions
          <input
            type="checkbox"
            name="checkbox"
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </label>
        <br />
        <label>
          Message :{" "}
          <textarea
            name="text-area"
            cols="30"
            rows="10"
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
          />
        </label>
        <button onClick={(e) => sendData({ ...formData, zip: e.target.value })}>
          Submit
        </button>
      </form>
    </>
  );
}
