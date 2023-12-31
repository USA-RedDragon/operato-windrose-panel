import { SpeedBucketStyle } from "types";

export function onMouseEnterPolygon(event: React.MouseEvent<SVGPolygonElement, MouseEvent>, changeStyle: React.Dispatch<React.SetStateAction<SpeedBucketStyle[]>>, index: number) {
    changeStyle((styles) => {
        let newStyles = [...styles]
        newStyles[index].currentBucketStyle = newStyles[index].selectedBucketStyle;
        newStyles[index].currentStrokeStyle = newStyles[index].highlightsStrokeStyle;
        return newStyles;
    })
    //let target = event.target as SVGElement;  
    //target.setAttribute("stroke", "#aaaaaa")
    //target.setAttribute("stroke-width", "2")
}
export function onMouseLeavePolygon(event: React.MouseEvent<SVGPolygonElement, MouseEvent>, changeStyle: React.Dispatch<React.SetStateAction<SpeedBucketStyle[]>>, index: number) {
    changeStyle((styles) => {
        let newStyles = [...styles]
        newStyles[index].currentBucketStyle = newStyles[index].idleBucketStyle;
        newStyles[index].currentStrokeStyle = newStyles[index].idleStrokeStyle;
        return newStyles;
    })
    //let target = event.target as SVGElement;
    //target.setAttribute("stroke", "")
    //target.setAttribute("stroke-width", "0")
}

export function onMouseEnterDiv(event: React.MouseEvent<HTMLDivElement, MouseEvent>, changeStyle: React.Dispatch<React.SetStateAction<SpeedBucketStyle[]>>, index: number) {
    changeStyle((styles) => {
        let newStyles = [...styles]
        newStyles[index].currentBucketStyle = newStyles[index].selectedBucketStyle;
        newStyles[index].currentStrokeStyle = newStyles[index].highlightsStrokeStyle;
        return newStyles;
    })
}
export function onMouseLeaveDiv(event: React.MouseEvent<HTMLDivElement, MouseEvent>, changeStyle: React.Dispatch<React.SetStateAction<SpeedBucketStyle[]>>, index: number) {
    changeStyle((styles) => {
        let newStyles = [...styles]
        newStyles[index].currentBucketStyle = newStyles[index].idleBucketStyle;
        newStyles[index].currentStrokeStyle = newStyles[index].idleStrokeStyle;
        return newStyles;
    })
}
