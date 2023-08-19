import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    firstname: "", lastname: "", email: "", country: "India",
    streetAddress: "", City: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications:""
  })

  function changeHandler(event) {

    const { name, value, checked, type } = event.target
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData)

  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form
        onSubmit={submitHandler}>
        <br></br>
        <br></br>

        <label htmlFor='firstName'>First Name</label>
        <br></br>
        <input type='text'
          placeholder='first name'
          id='firstName'
          name='firstname'
          value={formData.firstname}
          onChange={changeHandler}
          className='outline'
        />

        <br></br>
        <label htmlFor='lastName'>Last Name</label>
        <br></br>
        <input type='text'
          placeholder='first name'
          id='lastName'
          name='lastname'
          value={formData.lastname}
          onChange={changeHandler}
          className='outline'
        />

        <br>
        </br>

        <label htmlFor='email'>Email address</label>
        <br></br>
        <input type='mail'
          placeholder='mail daalo'
          id='email'
          name='email'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />

        <br></br>
        <br></br>


        <label htmlFor='country'>Country</label>
        <br></br>
        <select
          id='country'
          name='country'
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >
          <option>India</option>
          <option>US</option>
          <option>Canada</option>
          <option>Nepal</option>
        </select>



        <br></br>
        <label htmlFor='streetAddress'>street address</label>
        <br></br>
        <input type='text'
          placeholder='street address'
          id='streetAddress'
          name='streetAddress'
          value={formData.streetAdress}
          onChange={changeHandler}
          className='outline'
        />


        <br></br>
        <label htmlFor='City'>City</label>
        <br></br>
        <input type='text'
          placeholder='City naam'
          id='City'
          name='City'
          value={formData.City}
          onChange={changeHandler}
          className='outline'
        />

        <br></br>
        <label htmlFor='state'>state/provice</label>
        <br></br>
        <input type='text'
          placeholder='state'
          id='state'
          name='state'
          value={formData.state}
          onChange={changeHandler}
          className='outline'
        />


        <br></br>
        <label htmlFor='postalcode'>postal Code</label>
        <br></br>
        <input type='number'
          placeholder='postalcode daal'
          id='postalcode'
          name='postalCode'
          value={formData.postalCode}
          onChange={changeHandler}
          className='outline'
        />



        <fieldset>
          <legend>By Email</legend>

          <div className='flex'>
            <input
              id="comments"
              name='comments'
              type='checkbox'
              checked={formData.comments}
              onChange={changeHandler}

            />
            <div>
              <label htmlFor='comments'>comments</label>
              <p>get notification jhere</p>
            </div>
          </div>




          <div className='flex'>
            <input
              id="candidates"
              name='candidates'
              type='checkbox'
              checked={formData.candidates}
              onChange={changeHandler}

            />
            <div>
              <label htmlFor='candidates'>candidates</label>
              <p>get notification jhere</p>
            </div>
          </div>



          <div className='flex'>
            <input
              id="offers"
              name='offers'
              type='checkbox'
              checked={formData.offers}
              onChange={changeHandler}

            />
            <div>
              <label htmlFor='offers'>offers</label>
              <p>get notification jhere</p>
            </div>
          </div>

        </fieldset>

        <br></br>
        <br></br>

        <fieldset>
          <legend>Push notification</legend>
          <p>these are delived via sms to your phone</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotifications'
            value="Everything"
            onChange={changeHandler}
          />
          <label htmlFor='pushEverything'>Everything</label>

        <br></br>
        <br></br>
        <input
            type='radio'
            id='pushEmail'
            name='pushNotifications'
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor='pushEmail'>same as email</label>


        <br></br>
        <br></br>
        <input
            type='radio'
            id='pushNothing'
            name='pushNotifications'
            value="No Push Notifications"
            onChange={changeHandler}
          />
          <label htmlFor='pushNothing'>No Push Notifications</label>












        </fieldset>











        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>save</button>



      </form>








    </div>
  );
}

export default App;
