import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features,price,name} = option;
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white'>
            <h2 className='text-7xl font-extrabold text-center'><span>{price}</span><span className='text-3xl'>/month</span></h2>

           <h4 className='text-5xl text-center my-8'>{name}</h4>
           {
            features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
           }
           <button className='bg-green-500 p-2 mt-12 w-full py-2 font-bold rounded-lg hover:bg-black'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes={
    option:PropTypes.object
}

export default PriceOption;