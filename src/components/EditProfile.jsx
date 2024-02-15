import UserImg from "../assets/user.png";
import EmailIcon from "../assets/email.png";
import CourseIcon from "../assets/course.png";
import { getUser } from "../api/user";
import { useEffect, useState } from "react";
import { updateProfile } from "../api/user";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function EditProfile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const id = user?._id;

  useEffect(() => {
    getUser(id)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [formData, setFormData] = useState({
    dob: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const [userData, setUserData] = useState({
    dob: "",
    email: "",
    firstName: "",
    lastName: "",
    role: "",
  });
  console.log(new Date(userData.dob).toISOString());

  return (
    <div className="bg-[#20876E] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-[22px] mx-[28px] mb-[20px] ">
      <h2 className="text-center md:text-lg my-[40px] font-bold">
        EDIT PROFILE
      </h2>

      <form
        action=""
        // onSubmit={submitPassword}
        className="flex flex-col gap-y-5 items-center my-[20px] justify-center w-full mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="first-name">
            First Name:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="text"
            name=""
            id="first-name"
            value={userData.firstName}
            onChange={(e) =>
              setFormData({
                dob: formData.dob,
                email: formData.email,
                firstName: e.target.value,
                lastName: formData.lastName,
                role: formData.role,
              })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="last-name">
            Last Name:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="text"
            name=""
            id="last-name"
            value={userData.lastName}
            onChange={(e) =>
              setFormData({
                currentPassword: formData.currentPassword,
                password: e.target.value,
                confirm: formData.confirm,
              })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="email">
            Email:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="email"
            name=""
            id="email"
            value={userData.email}
            onChange={(e) =>
              setFormData({
                currentPassword: formData.currentPassword,
                password: formData.password,
                confirm: e.target.value,
              })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="confirm">
            Date of Birth:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="date"
            name=""
            id="confirm"
            value={userData.dob}
            onChange={(e) =>
              setFormData({
                currentPassword: formData.currentPassword,
                password: formData.password,
                confirm: e.target.value,
              })
            }
          />
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
            <label className="w-[150px]" htmlFor="student">
              Student
            </label>
            <input
              className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
              type="radio"
              name="role"
              id="student"
              value={!!userData.role}
              onChange={(e) =>
                setFormData({
                  currentPassword: formData.currentPassword,
                  password: formData.password,
                  confirm: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
            <label className="w-[150px]" htmlFor="instructor">
              Instructor:
            </label>
            <input
              className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
              type="radio"
              name="role"
              id="instructor"
              value={!!userData.role}
              onChange={(e) =>
                setFormData({
                  currentPassword: formData.currentPassword,
                  password: formData.password,
                  confirm: e.target.value,
                })
              }
            />
          </div>
        </div>

        <button
          className="bg-[#fff] text-[#20876E] md:text-[18px] py-[6px] px-[16px] my-[40px] cursor-pointer rounded-[4px] disabled:opacity-75 disabled:cursor-default"
          //   disabled={!isFormValid}
        >
          SAVE PASSWORD
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
