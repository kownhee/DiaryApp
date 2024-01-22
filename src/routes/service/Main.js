/***************************************************************************************
* FileName      : Main.js
* Description   : 메인페이지
* Company       : 
* Author        : 박권희
* Created Date  : 2024.01.12
* Modifide Date : 
* Reference     : 
***************************************************************************************/

function Main()
{
    return (
        <>
        <div className="main">

        <section className='main-content'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <p className="keyword">다이어리</p>
                    </div>
                    <div className="col-md-3 ">
                        <p className="keyword">달력</p>

                    </div>
                    <div className="col-md-3">
                        <p className="keyword">노트</p>
                    </div>
                    <div className="col-md-3">
                        <p className="keyword">영감</p>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="contentBox">
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contentBox">
                            
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="contentBox">
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contentBox">
                            
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        </>
    )
}
export default Main