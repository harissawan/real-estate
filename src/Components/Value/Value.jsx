import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState


} from 'react-accessible-accordion'

import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion';
function Value() {
  return (
    <section className="v-wrapper" id='ourvalues'>
        <div className="paddings innerWidth flexCenter v-container">

            {/* leftside */}

            <div className="v-left">
                <div className="image-container">
                    <img src="./value.jpg" alt="" />
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primmaryText'> Value We Give to You</span>
                <span className='secondaryText'> we always ready to help by providing the best servicies for you <br />
                 We beleive a good blance to live can mak your life better</span>

                 <Accordion className='accordian'
                 allowMultipleExpanded = {false}
                 preExpanded={[0]}
                 >

                    {
                        data.map((item, i )=> {
                            const [className, setClassName] = useState(null)
                            return(
                                <AccordionItem
                                className={`accordionItem ${className}` } key={i} uuid={i}>

                                    <AccordionItemHeading className='accordionItemHeading'>
                                        <AccordionItemButton className=' flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({expanded})=> expanded ? setClassName("expanded"): setClassName("collapsed")}
                                            </AccordionItemState>
                                             <div className="flexCenter icon">
                                                {item.icon}
                                             </div>
                                             <span className="primaryText">{item.heading}</span>
                                             <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20 }/>
                                             </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            );
                        } )
                    }
                    
                 </Accordion>
            </div>

        </div>
    </section>
  )
}

export default Value