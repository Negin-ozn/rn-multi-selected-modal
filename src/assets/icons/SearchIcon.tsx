import * as React from "react";
import Svg, { G, Path, Rect, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
    color?: string;
}

const SearchIcon: React.FC<Props> = ({ color, ...props }) => (

    // <Svg
    //     fill="none"
    //     viewBox="0 0 24 24"
    //     stroke-width="1.5"
    //     stroke={color ? color : '#FFF'}
    //     width={24}
    //     height={24}
    // >
    //     <Path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    // </Svg>

    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <G id="Group_46039" data-name="Group 46039" transform="translate(-20 -16)">
            <Rect
                id="Rectangle_2380"
                data-name="Rectangle 2380"
                width="24"
                height="24"
                transform="translate(20 16)"
                fill="rgba(255,255,255,0)"
            />
            <G id="Xnix_Line_Search_5" data-name="Xnix/Line/Search 5" transform="translate(23 19)">
                <Path id="Vector" d="M2.391,14.129A8.34,8.34,0,0,1,3.628,1.395a8.071,8.071,0,0,1,9.071,0,8.253,8.253,0,0,1,3.007,3.714,8.36,8.36,0,0,1-1.77,9.02,8.085,8.085,0,0,1-11.545,0Z" transform="translate(0)" fill="none" stroke="#b1b3c8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="Vector-2" data-name="Vector" d="M5.09.24C6.313.1,7.314,1.328,7.663,2.124m2.953,8.492L14,14" transform="translate(4 4)"
                    fill="none"
                    stroke="#b1b3c8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                />
            </G>
        </G>
    </Svg>
);

export default SearchIcon;