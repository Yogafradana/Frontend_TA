import { NumericFormat } from "react-number-format";

const NominalFormat = ({ className, value, displayType }) => {
    return (
        <NumericFormat prefix={'Rp'} className={className} value={value} displayType={displayType}/>
    )
};
export default NominalFormat;