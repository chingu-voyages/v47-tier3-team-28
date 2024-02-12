import UserImg from "../assets/user.png";
import EmailIcon from "../assets/email.png";
import CourseIcon from "../assets/course.png";
import { getUser } from "../api/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfilePage() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id)
      .then((userData) => {
        setUser(userData);
      })
      .catch((err) => console.log(err));
  }, []);

  const isInstructor = user
    ? (user.role && user.role.toLowerCase() === "instructor") ||
      user.__t === "Instructor"
    : undefined;

  return (
    <div className="bg-[#20876E] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-[22px] mx-[28px] mb-[20px]">
      <p className="text-center mb-[20px]">
        {user?.role?.toUpperCase() || user?.__t?.toUpperCase()}
      </p>

      <div className="flex flex-col md:flex-row">
        <div
          className={`flex flex-col flex-1	 items-center md:mx-[40px] mb-[20px] ${
            isInstructor ? "" : "md:w-auto"
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

            {isInstructor && (
              <div className="flex">
                <img className="w-[25px] mr-[10px]" src={CourseIcon} alt="" />
                <p>{user.num_of_courses} courses</p>
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
              {isInstructor ? "My" : "Enrolled"} Courses (5)
            </h2>
            <div>Card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
