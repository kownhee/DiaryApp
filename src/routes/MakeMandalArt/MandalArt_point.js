/***************************************************************************************
* FileName      : MandalArt_point.js
* Description   : 만다라트 핵심목표 8개 컴포넌트
* Company       : 
* Author        : 박권희
* Created Date  : 2024.01.12
* Modifide Date : 
* Reference     : 
***************************************************************************************/

function MandalArt({mandalArtData, setMandalArtData}){

    const handleInputChange = (e) => {
        const { innerText } = e.target;
        const dataIndex = e.target.getAttribute('data-index');

        console.log(innerText);

        if (dataIndex) {
            setMandalArtData((prevData) => ({
                ...prevData,
                [dataIndex]: innerText,
            }));
        }
    };


    return (
        <>
        <div className="MandalArt-wrap">       
            <div className="md_text_box">
                <span 
                    contenteditable="true" 
                    autoComplete="off" 
                    data-index="m1" 
                    onInput={handleInputChange}
                    data-placeholder="목표 1">
                    
                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true" 
                    autoComplete="off" 
                    data-index="m2" 
                    onInput={handleInputChange}
                    data-placeholder="목표 2">

                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true" 
                    autoComplete="off" 
                    data-index="2" 
                    data-placeholder="목표 3">

                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true"
                    autoComplete="off"
                    data-placeholder="목표 4">
                    
                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true" 
                    autoComplete="off" 
                    data-placeholder="최종목표">

                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true" 
                    autoComplete="off" 
                    data-placeholder="목표 5">
                    
                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true"
                    autoComplete="off"
                    data-placeholder="목표 6">
                    
                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true" 
                    autoComplete="off" 
                    data-placeholder="목표 7">

                </span>
            </div>

            <div className="md_text_box">
                <span 
                    contenteditable="true"
                    autoComplete="off"
                    data-placeholder="목표 8">
                    
                </span>
            </div>
    
        </div>
        </>
    )
}

export default MandalArt