import { FaArrowCircleRight } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center  gap-2"><FaArrowCircleRight></FaArrowCircleRight> {feature}</p>
            
        </div>
    );
};

export default Feature;