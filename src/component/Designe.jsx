import React from 'react'
import styless from '../styles/Designer.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import InputTeg from './InputTeg'
import { useDispatch, useSelector } from 'react-redux'
const Designe = () => {
  const { id } = useParams();
  const obj = {
    info: "PersonalInfo",
    WorkEx: "WorkExperience",
    edu: "Education",
    KeySkills: "KeySkills"
  }
  const { cartitem1, cartitem, cartitem2, cartitem3 } = useSelector((State) => State.add);
  const { number, emaill, namme, inkdin, address, github } = cartitem3;
  console.log(number, emaill, namme, inkdin, address, github);







  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(obj)[0]);
  const [storage, setStorage] = useState({
    comname: "", link: "", location: "", enddate1: "", startdate1: "", title: "", id,Title_personal:"Work Information"
  });
  const [storagee, setStoragee] = useState({
    education: "", collage: "", cgpas: null, startdate: "", enddate: "", id, Branch: "", title_education: "Education"
  });
  const [storageee, setStorageee] = useState({
    skills: [], other: "", id, skills_title: "Skills"
  });
  const [storageeee, setStorageeee] = useState({
    namme: "", emaill: "", number: null, inkdin: "", address: "", github: "", id, Portfolio: "", name_Title: "Personal Info"
  });

  let name, value;
  const HandelInput = (e) => {

    name = e.target.name;
    value = e.target.value;
    setStorageeee({ ...storageeee, [name]: value })
  }

  const HandelInput1 = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStorage({ ...storage, [name]: value })
  }

  const HandelInput2 = (e) => {

    name = e.target.name;
    value = e.target.value;
    setStoragee({ ...storagee, [name]: value })
  }

  const HandelInput3 = (e) => {

    name = e.target.name;
    value = e.target.value;
    setStorageee({ ...storageee, [name]: value })
  }


  const dispatch = useDispatch()
  function submit1() {
    dispatch({
      type: "add_to_cart",
      payload: storage
    })
    setActiveSectionKey(Object.keys(obj)[2])
    // setStorage({ comname:"",link:"",location:"",enddate1:"",startdate:"",title:""})
  }
  function submit2() {
    dispatch({
      type: "add_to_cart1",
      payload: storagee
    })
    setActiveSectionKey(Object.keys(obj)[3])
    // setStoragee({ education:"",collage:"",cgpas:null,startdate:"",enddate:""})
  }
  function submit3() {
    dispatch({
      type: "add_to_cart2",
      payload: storageee
    })
    setStorageee({ skills: [], other: "" })
  }
  function submit4() {
    dispatch({
      type: "add_to_cart3",
      payload: storageeee
    })
    setActiveSectionKey(Object.keys(obj)[1])
    // setStorageeee({namme:"",emaill:"",number:null,inkdin:"",address:"",github:""})
  }

  const workinfo = (
    <div className={styless.details}>
      <InputTeg
        laber="Title"
        name="Title_personal"
        value={storage.Title_personal}
        onChange={HandelInput1} />
      <InputTeg
        laber="Role"
        name="title"
        value={storage.title}
        onChange={HandelInput1}
        placeholder="Enter Tilte eg. Frontend Developer" />
      <InputTeg
        laber="Company Name"
        name="comname"
        value={storage.comname}
        onChange={HandelInput1}
        placeholder="Enter Company Name eg. amazon" />
      <div className={styless.row}>
        <InputTeg
          name="link"
          value={storage.link}
          laber="Certificate Link"
          onChange={HandelInput1}
          placeholder="Enter Certificate Link" />
        <InputTeg
          laber="Location"
          name="location"
          value={storage.location}
          onChange={HandelInput1}
          placeholder="Enter Location Name" />
      </div>
      <div className={styless.row}>
        <InputTeg
          laber="Start Date"
          type="date"
          name="startdate1"
          value={storage.startdate1}
          onChange={HandelInput1}
          placeholder="Enter start date of work" />
        <InputTeg
          laber="end Date"
          name="enddate1"
          type="date"
          value={storage.enddate1}
          onChange={HandelInput1}
          placeholder="Enter end date of work" />
      </div>
      <label className={styless.lab}>Enter work Description</label>
      <InputTeg placeholder="enter" name="textbox"
        type="text"
        value={storage.textbox}
        onChange={HandelInput1} />

      <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>previus</button>
      <button onClick={submit1} className={styless.btn1} >next</button>
    </div>
  )

  const education = (
    <div className={styless.details}>
      <InputTeg
        laber="Title"
        name="title_education"
        value={storagee.title_education}
        onChange={HandelInput2}
      />
      <InputTeg
        laber="Education"
        name="education"
        value={storagee.education}
        onChange={HandelInput2}
        placeholder="Enter Qualification"
      />
      <div className={styless.row}>
        <InputTeg
          laber="Collage / School "
          name="collage"
          value={storagee.collage}
          onChange={HandelInput2}
          placeholder="Enter Name"
        />
      </div>
      <div className={styless.row}>
        <InputTeg
          laber="CGPA"
          type="text"
          name="cgpas"
          value={storagee.cgpas}
          onChange={HandelInput2}
          placeholder="Enter CGPA"
        />
        <InputTeg
          laber="Branch"
          type="text"
          name="Branch"
          value={storagee.Branch}
          onChange={HandelInput2}
          placeholder="Enter Branch"
        />
      </div>
      <div className={styless.row}>
        <InputTeg
          laber="start date"
          type="date"
          name="startdate"
          value={storagee.startdate}
          placeholder="Enter Starting date"
          onChange={HandelInput2}
        />
        <InputTeg
          laber="end date"
          name="enddate"
          type="date"
          value={storagee.enddate}
          onChange={HandelInput2}
          placeholder="Enter End date"
        />
      </div>


      <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[1])}>previus</button>
      <button className={styless.btn1} onClick={submit2} >next</button>
    </div>
  )

  const keyskills = (
    <div className={styless.details}>
      <InputTeg
        laber="Title"
        name="skills_title"
        value={storageee.skills_title}
        onChange={HandelInput3}
      />
      <InputTeg
        laber="Key_Skills"
        name="skills"
        value={storageee.skills}
        onChange={HandelInput3}
        placeholder="Enter skills"
      />
      <InputTeg
        laber="other"
        name="other"
        value={storageee.other}
        onChange={HandelInput3}
        placeholder="Enter Other Details"
      />

      <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[2])}>previus</button>
      <button onClick={submit3} className={styless.btn1} ><Link to={`/resume/${cartitem3}`}>Previou</Link></button>
    </div>
  )

  const personInfo = (
    <div className={styless.details}>
      <InputTeg
        laber="Title"
        name="name_Title"
        value={storageeee.name_Title}
        onChange={HandelInput}
      />
     
      <InputTeg
        laber="full name"
        placeholder="Enter Your Name"
        name="namme"
        value={storageeee.namme}
        onChange={HandelInput}
      />
      <div className={styless.row}>
        <InputTeg
          laber="Email"
          name="emaill"
          value={storageeee.emaill}
          placeholder="Enter Your Email"
          onChange={HandelInput}
        />
        <InputTeg
          laber="number"
          placeholder="Enter Your number"
          name="number"
          value={storageeee.number}
          onChange={HandelInput}
        />
      </div>
      <InputTeg
        laber="Address"
        placeholder="Enter Your Address"
        name="address"
        value={storageeee.address}
        onChange={HandelInput}
      />
      <div className={styless.row}>
        <InputTeg
          laber="Linkdin"
          type="link"
          placeholder="Enter Your Linkdin url"
          name="inkdin"
          value={storageeee.inkdin}
          onChange={HandelInput}
        />
        <InputTeg
          laber="github"
          type="link"
          name="github"
          value={storageeee.github}
          onChange={HandelInput}
          placeholder="Enter Your github url"
        />
      </div>
      <div className={styless.row}>
        <InputTeg
          laber="Portfolio Link"
          type="link"
          placeholder="Enter Your Portfolio url"
          name="Portfolio"
          value={storageeee.Portfolio}
          onChange={HandelInput}
        />
      </div>
      <button className={styless.btn} onClick={() => setActiveSectionKey(Object.keys(obj)[0])}>previus</button>
      <button onClick={submit4} className={styless.btn1} >next</button>
    </div>
  )


  const genratebody = () => {
    switch (obj[activeSectionKey]) {
      case obj.info: return personInfo;
      case obj.WorkEx: return workinfo;
      case obj.edu: return education;
      case obj.KeySkills: return keyskills;
      default: return null;
    }
  }
  return (
    <>
      <div className={styless.detail_page}>
        <div className={styless.left_page}>
          <ul>
            {
              Object.keys(obj)?.map((item) => (
                <li
                  className={`${styless.section} ${activeSectionKey === item ? styless.activee : ""}`}
                  key={item}
                  onClick={() => setActiveSectionKey(item)} > {obj[item]}</li>
              ))

            }
          </ul>
        </div>
        <div className={styless.right_page}>
          {genratebody()}
        </div>
      </div>

    </>
  )
}

export default Designe