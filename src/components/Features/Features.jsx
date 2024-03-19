import PropTypes from 'prop-types';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Features = ({ features }) => {
    return (
        <div>
            <p className='flex gap-1'>
                <IoMdCheckmarkCircleOutline className='text-green-500 mt-1 font-semibold'>
                </IoMdCheckmarkCircleOutline>{features}
            </p>
        </div>
    );
};

Features.propTypes = {
    features: PropTypes.string,
}

export default Features;