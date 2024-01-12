/***************************************************************************************
* FileName      : MakeMandalArt.js
* Description   : 만다라트 계획 메인페이지
* Company       : 
* Author        : 박권희
* Created Date  : 2024.01.12
* Modifide Date : 
* Reference     : 
***************************************************************************************/

import MandalArt from "../MakeMandalArt/MandalArt_point"
import MandalArtPoint from "../MakeMandalArt/MandalArt_point";
import React, { useEffect, useRef , useState } from 'react';

import html2canvas from 'html2canvas'
function MakeMandalArt()
{
    // 만다라트
    const [mandalArtPointData , setMandalArtPointData] = useState({
        m0: "" , // 최종목표
        m1 : "", // 목표1
        m2 : "", // 목표2
        m3 : "", // 목표3
        m4 : "", // 목표4
        m5 : "", // 목표5
        m6 : "", // 목표6
        m7 : "", // 목표7
        m8 : "", // 목표8
    });

    const [mandalArt1Data , setMandalArt1Data] = useState({
        m10: "" , // 최종목표1
        m11 : "",
        m12 : "", 
        m13 : "", 
        m14 : "", 
        m15 : "", 
        m16 : "", 
        m17 : "",
        m18 : "", 
    });


    const htmlElementRef = useRef(null);

    const saveAsImage = () => {
        if (htmlElementRef.current) {
            html2canvas(htmlElementRef.current).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'screenshot.png';
            link.click();
            });
        }
    };

    useEffect(()=>{
        console.log(mandalArtPointData);
    },[mandalArtPointData])
    return (
        <>
        <div className="mandalart" ref={htmlElementRef}>
            <section className="mandalart-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-md-3 col-sm-3'>          
                            <MandalArt/>
                        </div>
                        <div className='col-md-3 col-sm-3'>          
                            <MandalArt/>
                        </div>
                        <div className='col-md-3 col-sm-3'>          
                            <MandalArt/>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                        <div className='col-md-3'>          
                            <MandalArt/>
                        </div>
                        <div className='col-md-3'>          
                            <MandalArtPoint 
                                mandalArtPointData={mandalArtPointData}
                                setMandalArtPointData={setMandalArtPointData}/>
                        </div>
                        <div className='col-md-3'>          
                            <MandalArt/>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-3">
                        <div className='col-md-3'>          
                            <MandalArt/>
                        </div>
                        <div className='col-md-3'>          
                            <MandalArt/>
                        </div>
                        <div className='col-md-3'>          
                            <MandalArt/>
                        </div>
                    </div>
                
                </div>
        </section>

        <button onClick={saveAsImage}>Save as Image</button>
    </div>
        </>
    )
}
export default MakeMandalArt