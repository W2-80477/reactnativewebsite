import React,{useState} from 'react'


const Contect = () => {
  
  // const [submit, setSubmit]=useState()
  const[data, setData]=useState({
    fullName:"",
    number:"",
    email:"",
    messege:""
    })

  const inputEvent=(e)=>{
    const {name,value}=e.target
    setData((oldValue)=>{
      return{
        ...oldValue,
          [name]:value,

      }
    })
  }
  const fromSubmit=(e)=>{
        e.preventDefault()

  }

  return (
    <>
    <div className="my-5">
      <h1 className="text-center"> Contect</h1>
    </div>
    <div className="container contect_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-10">
          <form onSubmit={fromSubmit}>
          <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="fullName" value={data.fullName} onChange={inputEvent} />
              </div>
              <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your number" name="number" value={data.number} onChange={inputEvent}/>
              </div>
              <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={inputEvent}/>
              </div>
                <div class="mb-3">
                   <label for="exampleFormControlTextarea1" class="form-label">Messege</label>
                       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Any messege...." name="messege" value={data.messege} onChange={inputEvent}></textarea>
                  </div>
                  <div class="col-12">
                           <button class="btn btn-outline-primary" type="submit">Submit form</button>
                  </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contect
