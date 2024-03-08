import Image from "next/image";

const Comments = () => {
  return (
    <div className="flex items-start ml-3 gap-2">
      <div className="flex items-center">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Image
              src="/star.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
            />
          ))}
      </div>
      <p className="text-xl font-semibold text-blue-700">23 Yorum</p>
    </div>
  );
};

export default Comments;
