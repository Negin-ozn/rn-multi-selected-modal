import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
    color?: string;
}

const CheckIcon: React.FC<Props> = ({ color, ...props }) => (

    <Svg
        fill="none"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke={color ? color : '#FFF'}
    >
        <Path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </Svg>

);

export default CheckIcon;