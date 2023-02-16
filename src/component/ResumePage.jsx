import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/resume.css'
const ResumePage = () => {
    const { cartitem1, cartitem, cartitem2, cartitem3 } = useSelector((State) => State.add);
    const { number, emaill, namme, inkdin, address, github,name_Title,Portfolio } = cartitem3;
    const { cgpas, collage, education, startdate, enddate,title_education,Branch } = cartitem1;
    const { comname, link, location, startdate1, enddate1, title, textbox ,Title_personal} = cartitem;
    const { skills, other ,skills_title } = cartitem2;
    return (
        <>
            <div className='main_box'>
                <div className='first_div'>
                    <p className='user_name'>{namme}</p>
                    <p className='user'>{title}</p>
                </div>
                <div className='second_div_main'>
                    <div className='second_div'>
                        <div className='mg'><img src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-studying-table-with-laptop-computer-notebook-home-studying-online-e-learning-system_1150-35101.jpg?w=2000" alt="" /></div>
                        <div className='potfolio'>
                            <ul className='portfolio_list'>
                                <li className='portfolioo'>{name_Title}</li>
                                <li className='port_list1'>{namme}</li>
                                <li className='port_list1'>{title}</li>
                                <li className='port_list1'>{Portfolio}</li>
                            </ul>
                        </div>
                        <div className='potfolio'>
                            <ul className='portfolio_list'>
                            <li className='portfolioo'>CONTACT</li>
                            <li className='port_list1'>{emaill}</li>
                            <li className='port_list1'>{number}</li>
                            <li className='port_list1'>{inkdin}</li>
                            <li className='port_list1'>{github}</li>
                            <li className='port_list1'>{address}</li>
                        </ul>
                        </div>
                    </div>
                    <div className='container_text'>
                        <div className='Education'>
                        <ul className='portfolio_list1'>
                            <li className='portfolioo1'>{title_education}</li>
                            <li className='port_list_education'>{collage}</li>
                            <li className='port_list2'>{education}</li>
                            <li className='port_list2'>CGPA - {cgpas}</li>
                            <li className='port_list2'>{Branch}</li>
                            <li className='port_list2'>{"( "+startdate+" )"} - {"( "+enddate+" )"}</li>
                        </ul>
                        </div>
                        <div className='Work Experince'>
                        <div className='Skills'>
                        <ul className='portfolio_list1'>
                            <li className='portfolioo1'>{skills_title}</li>
                            <li className='port_list2'>{other}</li>
                            <li className='port_list2'>{skills}</li>
                        </ul>
                        </div>
                        </div>
                        <div className='Work Project'>
                        <div className='Skills'>
                        <ul className='portfolio_list1'>
                            <li className='portfolioo1'>{Title_personal}</li>
                            <li className='port_list2'>{title}</li>
                            <li className='port_list2'>{comname}</li>
                            <li className='port_list2'>{location}</li>
                            <li className='port_list2'>{link}</li>
                            <li className='port_list2'>{"( "+startdate1+" )"} - {"( "+enddate1+" )"}</li>
                            <li className='port_list2'>{textbox}</li>
                        </ul>
                        </div>
                        </div>
                        <div className='Key Skils'>
                        <div className='Skills'>
                        <ul className='portfolio_list1'>
                            <li className='portfolioo1'>Portfolio Link</li>
                            <li className='port_list2'>{link}</li>
                        </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResumePage