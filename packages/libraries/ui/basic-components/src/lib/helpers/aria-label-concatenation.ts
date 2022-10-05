/**
 * @param ariaLabelPieces The aria label pieces to be concatenated together
 * @returns the truthy pieces seperated by spaces
 */
export const concatenateAriaLabelPieces = (...ariaLabelPieces: string[]) => {
    return ariaLabelPieces.filter(piece => piece).join(' ');
}