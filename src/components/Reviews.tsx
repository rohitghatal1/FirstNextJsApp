import { Avatar } from "antd";

const Reviews: React.FC = () => {
  const allReviews = [
    {
      user_name: "Ram Chandra",
      user_type: "Home Owner",
      reveiw_date: "2025-2-6",
      reveiw_desc:
        "Your sincerity is appreciated. Your job well done. I am satisfied",
    },
    {
      user_name: "Hari Kumar",
      user_type: "Builder",
      reveiw_date: "2025-1-20",
      reveiw_desc:
        "So Good.He had an amazing talent in creating and developing concepts . The Interior space that she had designed is very sleek and subtle. very satisfied 😌.",
    },
    {
      user_name: "Sita Singh",
      user_type: "Home Owner",
      reveiw_date: "2025-1-11",
      reveiw_desc: "Highly skilled and i will absolutely recommend him!",
    },
    {
      user_name: "Sarita",
      user_type: "Home Owner",
      reveiw_date: "2025-2-6",
      reveiw_desc:
        "Your sincerity is appreciated. Your job well done. I am satisfied",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-xl py-2">All Reviews:</h2>
      <div className="flex flex-col gap-3">
        {allReviews?.map((review: any, index: number) => (
          <div
            className="border rounded-md p-3 w-full sm:w-[50rem] bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-500"
            key={index}
          >
            <div className="flex items-center gap-2">
              <Avatar src={review?.image}>{review?.user_name[0]}</Avatar>
              <div className="flex flex-col">
                <h3 className="font-semibold text-sm">{review?.user_name}</h3>
                <p className="text-gray-600 text-xs">{review?.user_type}</p>
              </div>
            </div>

            <div className="flex items-start justify-between p-2">
              <p className="w-[80%] text-sm">{review?.reveiw_desc}</p>
              <span className="text-gray-600 text-xs">
                {review?.reveiw_date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
