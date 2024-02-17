import { useSelector } from "react-redux";
import { getUser } from "../api/user";
import { useEffect, useState } from "react";
import UserImg from "../assets/user.png";
import EmailIcon from "../assets/email.png";
import CourseIcon from "../assets/course.png";
import DobIcon from "../assets/dob.png";
import { useNavigate } from "react-router-dom";

function MyProfile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  console.log(user?.dob);

  const id = user?._id || localStorage.getItem("userId");
  const isInstructor = user?.role === "instructor";

  const [userData, setUserData] = useState({});

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${getNormalizedDateValue(day)}-${getNormalizedDateValue(
      month,
    )}-${year}`;
  };

  const getNormalizedDateValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  useEffect(() => {
    getUser(id)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#20876E] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-[22px] mx-[28px] mb-[20px]">
      <p className="text-center mb-[20px]">
        {userData?.role?.toUpperCase() || userData?.__t?.toUpperCase()}
      </p>

      <div className="flex flex-col md:flex-row">
        <div
          className={`flex flex-col flex-1	 items-center md:mx-[40px] mb-[20px] ${
            isInstructor ? "" : "md:w-auto"
          }`}
        >
          <img
            className="inline-block md:w-[215px] w-[80px]"
            src={userData.profilePhoto ? userData.profilePhoto : UserImg}
            alt=""
          />
          <div className="mt-[10px] flex flex-col gap-y-[10px] items-center md:items-start">
            <h2 className="text-[22px] md:text-[28px] font-bold">
              {userData.firstName} {userData.lastName}
            </h2>
            <div className="flex">
              <img className="w-[25px] mr-[10px]" src={DobIcon} alt="" />
              <p>{formatDate(user?.dob)}</p>
            </div>
            <div className="flex">
              <img className="w-[25px] mr-[10px]" src={EmailIcon} alt="" />
              <p>{userData.email}</p>
            </div>

            {isInstructor && (
              <div className="flex">
                <img className="w-[25px] mr-[10px]" src={CourseIcon} alt="" />
                <p>{userData.num_of_courses} courses</p>
              </div>
            )}
          </div>
        </div>

        <div className="text-center md:text-left mb-[10px] flex-1	">
          {isInstructor && (
            <div className="mb-[20px] flex flex-col gap-y-[10px]">
              <h2 className="text-[22px] md:text-[28px] font-bold">About me</h2>
              <p>
                <span className="font-bold">Specialization: </span>{" "}
                {userData.specialization}
              </p>
              <p>
                {" "}
                <span className="font-bold">Years of ecperience: </span>
                {userData.years_of_experience}
              </p>
              <p>{userData.bio}</p>
            </div>
          )}

          <div className="flex flex-col gap-y-[10px]">
            <h2 className="text-[22px] md:text-[28px] font-bold">
              {isInstructor ? "My" : "Enrolled"} Courses (5)
            </h2>
            <div>Card</div>
          </div>

          <div className="mt-[20px]">
            <div>
              <button
                onClick={() => navigate("/user/edit-profile")}
                className="bg-[#fff] text-[#20876E] md:text-[18px] py-[6px] px-[16px] my-[10px] cursor-pointer rounded-[4px] disabled:opacity-75 disabled:cursor-default w-[180px]"
              >
                Edit profile
              </button>
            </div>

            <div>
              <button
                onClick={() => navigate("/user/change-password")}
                className="bg-[#fff] text-[#20876E] md:text-[18px] py-[6px] px-[16px] my-[10px] cursor-pointer rounded-[4px] disabled:opacity-75 disabled:cursor-default w-[180px]"
              >
                Change password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
