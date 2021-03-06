import * as React from 'react';
import { SvgXml } from "react-native-svg"; 

export default function SvgComponent(){  
    const svgMarkup = `<svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M37.5 6.25C20.25 6.25 6.25 20.25 6.25 37.5C6.25 54.75 20.25 68.75 37.5 68.75C54.75 68.75 68.75 54.75 68.75 37.5C68.75 20.25 54.75 6.25 37.5 6.25ZM53.125 40.625H40.625V53.125H34.375V40.625H21.875V34.375H34.375V21.875H40.625V34.375H53.125V40.625Z" fill="#5EC80C"/>
    </svg>`;
    const SvgImage = () => <SvgXml xml={svgMarkup} width="301px" />;  
  
    return <SvgImage />;
  }