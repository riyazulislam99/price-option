import PriceOption from "../PriceOption/PriceOption";


const PriceOptoions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to locker rooms and showers",
                "Basic fitness assessment",
                "Discounts on merchandise",
                "Monthly fitness newsletter"
            ],
            "price": "$29.99/month"
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to all equipment including specialized",
                "Unlimited group fitness classes",
                "Access to sauna and steam room",
                "Personalized fitness assessment and goal setting",
                "Discounts on personal training sessions",
                "Free guest passes",
                "Priority registration for fitness events"
            ],
            "price": "$49.99/month"
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "features": [
                "All features of Premium Membership",
                "24/7 gym access",
                "Priority booking for group classes",
                "Complimentary towel service",
                "Nutritional counseling sessions",
                "Access to exclusive VIP lounge",
                "Specialized workout programs"
            ],
            "price": "$79.99/month"
        }
    ]

    return (
        <div>
            <h3 className="text-5xl">Best prices in the city</h3>
            <div className="grid md:grid-cols-3 gap-10 my-8">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptoions;