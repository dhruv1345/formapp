import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState(

    {
     firstName:"", lastName:"" , email:"", comment:"",isVisible:true, mode:"", favCar:""
    }
  )
  function changeHandler(event){
    const {name,value,checked,type }=event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type==="checkbox"? checked:value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing for data ....")
    console.log(formData);
  }

  return ( 
    <div className="App">
     <form onSubmit={submitHandler}>
      <br></br>
        <input type='text' placeholder='first Name' onChange={changeHandler} name='firstName' value={formData.firstName}>
        </input>
        <br></br>
        <br></br>
        <input type='text' placeholder='Last Name' onChange={changeHandler} name='lastName' value={formData.lastName}>
        </input>

        <br></br>
        <br></br>


        <input type='email' placeholder='Enter your Email here' onChange={changeHandler} name='email' value={formData.email}/>
        <br></br>
        <br></br>

        <textarea placeholder='Enter your Comments here' onChange={changeHandler} name='comment' value={formData.comment}/>

        <br></br>
        <br></br>

    
        <input type='checkbox' onChange={changeHandler} name="isVisible" id='isVisible' checked={formData.isVisible} />
        <label htmlFor='isVisible'> Am I visible ?</label>

        <br></br>
        <br></br>

       
        
        <fieldset>
          <legend>
            Mode:
          </legend>
          <input type='radio' onChange={changeHandler} name="mode" id='Online-Mode' value="Online-Mode" checked={formData.mode==="Online-Mode"}></input >
        <label htmlFor='Online-Mode'>Online-Mode</label>
          <input type='radio' onChange={changeHandler} name="mode" id='OffOnline-Mode' value="OffOnline-Mode" checked={formData.mode==="Online-Mode"}></input>
        <label htmlFor='OffOnline-Mode'>Off Online-Mode</label>

        </fieldset>

        <br></br>

        <label htmlFor='favcar'> Tell Me your Fav Car </label>

        <select onChange={changeHandler}
          name="favCar" value={formData.favCar} id="favCar">
            <option value="scorpio">
              Scorpio
            </option>

            <option value="Grand-vitara">
            Grand-vitara
            </option>

            <option value="Tharr">
              Tharr
            </option>

            <option value="Defender">
            Defender
            </option>
        </select>

        <br></br>
        <br></br>
        
        <button>Submit</button>        
       

     </form>
    </div>
  );
}

export default App;
