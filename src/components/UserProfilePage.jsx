import UserImg from "../assets/user.png";
import EmailIcon from "../assets/email.png";
import CourseIcon from "../assets/course.png";

function UserProfilePage() {
  const user = {
    bio: "Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction. I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch. I've been building websites and apps since 2010  and also have a Master's degree in Engineering.",
    specialization: "",
    years_of_experience: 5,
    firstName: "Teodora",
    lastName: "Kocic",
    dob: "1.1.1990",
    email: "test@test.com",
    profilePhoto: "",
    type: "instructor",
    num_of_courses: 2,
  };

  return (
    <div className="bg-[#20876E] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-[22px] mx-[28px] mb-[20px]">
      <p className="text-center mb-[20px]">{user.type.toUpperCase()}</p>

      <div className="flex flex-col md:flex-row md:gap-x-[25%]">
        <div
          className={`flex flex-col items-center md:mx-[40px] mb-[20px] ${
            user.type === "instructor" ? "md:w-3/5" : "md:w-auto"
          }`}
        >
          <img
            className="inline-block md:w-[215px] w-[80px]"
            src={user.profilePhoto ? user.profilePhoto : UserImg}
            alt=""
          />
          <div className="mt-[10px] flex flex-col gap-y-[10px] items-center md:items-start">
            <h2 className="text-[22px] md:text-[28px] font-bold">
              {user.firstName} {user.lastName}
            </h2>
            <div className="flex">
              <img className="w-[25px] mr-[10px]" src={EmailIcon} alt="" />
              <p>{user.email}</p>
            </div>

            {user.type === "instructor" && (
              <div className="flex">
                <img className="w-[25px] mr-[10px]" src={CourseIcon} alt="" />
                <p>{user.num_of_courses} courses</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center md:text-left mb-[10px]">
          {user.type === "instructor" && (
            <div className="mb-[20px] flex flex-col gap-y-[10px]">
              <h2 className="text-[22px] md:text-[28px] font-bold">About me</h2>
              <p>
                <span className="font-bold">Specialization: </span>{" "}
                {user.specialization}
              </p>
              <p>
                {" "}
                <span className="font-bold">Years of ecperience: </span>
                {user.years_of_experience}
              </p>
              <p>{user.bio}</p>
            </div>
          )}

          <div className="flex flex-col gap-y-[10px]">
            <h2 className="text-[22px] md:text-[28px] font-bold">
              {user.type === "instructor" ? "My" : "Enrolled"} Courses (5)
            </h2>
            <div>Card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
