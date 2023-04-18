import React,{useContext} from 'react';
import { Box,Typography } from '@mui/material';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import Rightarrow from './images/arrowRight.png';
import Leftarrow from './images/arrowLeft.png'
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollPrev()} className='right-arrow'>
            <img src={Leftarrow} />
        </Typography>
    )
};
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
        <Typography onClick={() => scrollNext()} className='left-arrow'>
            <img src={Rightarrow}  />
        </Typography>
    )
};

const HorizontalScrollbar = ({data ,bodyPart,setBodyPart}) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart item={item } bodyPart={bodyPart} setBodyPart={setBodyPart} />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar