'use client'

import { BoardHeaderMobile } from "./BoardHeaderMobile"
import { BoardHeaderDesktop } from "./BoardHeaderDesktop"


export function BoardHeader() {
    return (
        <>
            <div className="block md:hidden">
                <BoardHeaderMobile
                    monthLabel="Board header mobile"
                    onPrev={()=> console.log("click")}
                    onNext={()=> console.log("click")}
                />
            </div>
            <div className="hidden md:block">
                <BoardHeaderDesktop 
                    monthLabel="Board header desktop"
                    onNext={() => console.log('click')}
                    onPrev={() => console.log('click')}
                />
            </div>
        </>
    )
}