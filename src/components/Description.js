import React from 'react'
import '../css/Description.css'
import curriculumn from '../images/curriculumn.png'
import overview from '../images/overview.png'
import review from '../images/review.png'
import line from '../images/line.png'
import latest_course from '../images/latest_course.png'

export default function Description() {
    return (
        <>
        <div className="container description">
            <span> <img src={overview} alt="" /> overview</span>
            <img src={line} alt="" />
         <span>  <img src={curriculumn} alt="" />  curriculumn</span>
         <img src={line} alt="" />
            <span> <img src={review} alt="" /> Review</span>
            <img src={line} alt="" />
        </div>

        <div className=" container desc">
        <div className="course_description">
            <h4>Course Description</h4>
            <p>You mug tickety-boo bite your arm off David bamboozled easy peasy in my flat bugger argy-bargy, Oxford starkers barney bender haggle barmy A bit of how's your father, pear shaped arse over tit dropped a clanger cup of char bloke mufty pukka. He legged it some dodgy chav pardon you vagabond old bubble and squeak posh young delinquent mufty Charles quaint, bloke spend a penny sloshed Harry car boot bugger all mate bamboozled blatant cack, skive off hanky panky cheeky chap hotpot burke such a fibber cheeky bugger blag. Chinwag Eaton owt to do with me Charles excuse my French cor blimey guvnor bender give us a bell gosh bamboozled, wind up in my flat David bog lurgy the full monty cup of char cockup, brolly bevvy super bubble and squeak well starkers cobblers smashing. Only a quid amongst well argy-bargy hotpot bugger all mate chimney pot cup of char do one barmy fantastic, Eaton bloke barney blower haggle cheesed off Elizabeth daft.

            Chimney pot barmy easy peasy he lost his bottle nancy boy old cor blimey guvnor bog tickety-boo geeza, Richard on your bike mate down the pub are you taking the piss cack super hunky-dory haggle I spend a penny, hanky panky zonked cobblers spiffing good time cup of tea in my flat faff about the full monty.</p>
        </div>
        <div className="latest_course">
            <h4>Latest Courses</h4>
            <div style={{display:'flex',marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            <div style={{display:'flex',marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            <div style={{display:'flex',marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            <div style={{display:'flex' ,marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            
        </div>

        </div>
        <div className='container share'>
            <p><b>Share: </b></p>
            <img src="https://img.icons8.com/color/34/000000/facebook-new.png"/>
            <img src="https://img.icons8.com/color/34/000000/twitter-circled--v1.png"/>
            <img src="https://img.icons8.com/fluency/34/000000/google-plus.png"/>
        </div>
        
        </>
    )
}
