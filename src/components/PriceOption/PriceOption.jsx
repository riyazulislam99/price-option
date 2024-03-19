import PropTypes from 'prop-types'
import Features from '../Features/Features';

const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='mb-5 bg-orange-900 rounded-lg p-10 flex flex-col'>
            <div className='text-center mb-4'>
                <h3 className='text-4xl font-bold'>{price}</h3>
                <h4 className='text-2xl'>{name}</h4>
            </div>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Features key={idx} features={feature}></Features>)
                }
            </div>
            <button className='bg-green-600 text-black w-full mt-6 rounded-md font-semibold hover:bg-green-700 p-2 text-lg'>Buy Now
            </button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;