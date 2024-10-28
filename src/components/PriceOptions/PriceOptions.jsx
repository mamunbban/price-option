import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 29.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Free initial training session",
        "Open gym hours only",
        "Access to cardio and strength zones",
        "Monthly newsletter",
        "Access to member app for workout tracking"
      ]
    },
    {
      "id": 2,
      "name": "Standard Membership",
      "price": 49.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "5 personal training sessions per month",
        "Access to group classes",
        "Extended gym hours",
        "Use of sauna and steam room",
        "Discount on health drinks and supplements",
        "Two guest passes per month"
      ]
    },
    {
      "id": 3,
      "name": "Premium Membership",
      "price": 79.99,
      "features": [
        "All Standard Membership features",
        "Unlimited personal training sessions",
        "Access to advanced classes (e.g., CrossFit, HIIT)",
        "Monthly fitness assessment",
        "Complimentary towel and drink service",
        "Priority support",
        "Access to private lockers",
        "Personalized meal and nutrition plan",
        "Virtual training sessions included"
      ]
    },
    {
      "id": 4,
      "name": "Family Membership",
      "price": 99.99,
      "features": [
        "Access for up to 4 family members",
        "All Premium Membership features",
        "Family fitness classes",
        "Kid-friendly fitness zones",
        "Discount on additional family members",
        "Family health and nutrition workshops",
        "Access to kids' play area",
        "Family guest passes for friends",
        "Special family hours"
      ]
    },
    {
      "id": 5,
      "name": "Student Membership",
      "price": 24.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Discounted group classes",
        "Flexible hours for students",
        "Requires valid student ID",
        "Access to study lounge",
        "Access to Wi-Fi and charging stations",
        "Discount on healthy snacks and beverages",
        "Exclusive student events and workshops"
      ]
    }
  ]

  return (
    <div className="mr-12">
      <h2 className="text-8xl text-red-400">Best Prices In The Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {

          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>

    </div>
  );
};

export default PriceOptions;