import { getUser } from "../api/user";
import { useEffect, useState } from "react";
import { updateProfile } from "../api/user";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../state/user";

function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const id = user?._id || localStorage.getItem("userId");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${getNormalizedDateValue(month)}-${getNormalizedDateValue(
      day,
    )}`;
  };

  const getNormalizedDateValue = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  useEffect(() => {
    getUser(id)
      .then((data) => {
        setUserData({ ...data, dob: formatDate(data.dob) });
      })
      .catch((err) => console.log(err));
  }, []);

  const [userData, setUserData] = useState({
    dob: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  console.log(new Date(userData.dob));

  const submitChanges = (e) => {
    e.preventDefault();

    updateProfile(userData)
      .then((res) => {
        console.log(res);
        dispatch(setUser(res));

        navigate("/user/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[#20876E] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-[22px] mx-[28px] mb-[20px] ">
      <h2 className="text-center md:text-lg my-[40px] font-bold">
        EDIT PROFILE
      </h2>

      <form
        action=""
        onSubmit={submitChanges}
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
              setUserData({
                dob: userData.dob,
                email: userData.email,
                firstName: e.target.value,
                lastName: userData.lastName,
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
              setUserData({
                dob: userData.dob,
                email: userData.email,
                firstName: userData.firstName,
                lastName: e.target.value,
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
              setUserData({
                dob: userData.dob,
                email: e.target.value,
                firstName: userData.firstName,
                lastName: userData.lastName,
              })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="confirm">
            Date of Birth:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white  max-w-[257.6px] w-[257.6px]"
            type="date"
            name=""
            id="confirm"
            value={userData.dob}
            onChange={(e) =>
              setUserData({
                dob: e.target.value,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
              })
            }
          />
        </div>

        <button
          className="bg-[#fff] text-[#20876E] md:text-[18px] py-[6px] px-[16px] my-[40px] cursor-pointer rounded-[4px] disabled:opacity-75 disabled:cursor-default"
          //   disabled={!isFormValid}
        >
          SAVE CHANGES
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
